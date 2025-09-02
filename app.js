/* ==============================
   🇯🇵 Appli Vocabulaire — app.js
   - JSON chargé une fois (voc_kit_400_top.json)
   - Filtres & navigation côté client
   - Vérification permissive
   - Voix japonaises (femme/homme), persistance & fallback MP3
   - Aucun framework, ES6+, commenté
   ============================= */

/* ---------- Helpers DOM & utilitaires ---------- */
const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

/** Supprime toute balise en n'insérant que du texte */
function putText(el, text){ el.textContent = text ?? ""; }

/** Normalise les espaces (pour rōmaji) */
function normalizeSpaces(s){ return (s || "").toLowerCase().trim().replace(/\s+/g, " "); }

/** Retire les diacritiques pour comparer des clés (Français -> Francais) */
function deaccent(s){ return (s || "").normalize('NFD').replace(/\p{Diacritic}/gu, ""); }

/** Construit un map clé normalisée -> vraie clé */
function keyMap(obj){
  const map = new Map();
  for(const k of Object.keys(obj || {})){
    map.set(deaccent(k.toLowerCase()), k);
  }
  return map;
}

/** Récupère une valeur via des alias tolérants */
function getField(obj, aliases){
  if(!obj) return undefined;
  const m = keyMap(obj);
  for(const alias of aliases){
    const real = m.get(deaccent(alias.toLowerCase()));
    if(real in obj) return obj[real];
  }
  return undefined;
}

/** Empêche l'injection HTML en utilisant textContent partout (déjà fait) */

/* ---------- Sélecteurs UI ---------- */
const modeSelect = $("#mode-select");
const aSavoirSelect = $("#asavoir-select");
const categorySelect = $("#category-select");
const wordDisplay = $("#word-display");
const prevBtn = $("#prev-btn");
const nextBtn = $("#next-btn");
const randomBtn = $("#random-btn");
const answerInput = $("#answer-input");
const verifyBtn = $("#verify-btn");
const checkmark = $("#checkmark");
const crossmark = $("#crossmark");
const resultTranslations = $("#result-translations");
const resultExample = $("#result-example");
const audioWordBtn = $("#audio-word-btn");
const audioExampleBtn = $("#audio-example-btn");
const voiceToggleBtn = $("#voiceToggle");
const voicePreviewBtn = $("#voice-preview-btn");
const voiceStatus = $("#voice-status");
const loadingIndicator = $("#loading-indicator");
const errorMessage = $("#error-message");

/* ---------- Etat global & persistance ---------- */
const LS_KEYS = {
  MODE: "modeInterrogation",
  ASAVOIR: "a_savoir",
  CATEG: "categorie",
  VOICE_GENDER: "voiceGender",
  LAST_ID: "lastId"
};
let DATA = [];                 // tableau d'objets vocabulaire
let FILTERED = [];             // indices filtrés (dans DATA)
let idx = 0;                   // index courant dans FILTERED
let byId = new Map();          // id -> index DATA
let selectedVoiceName = null;  // nom de la voix à utiliser
let voiceGender = localStorage.getItem(LS_KEYS.VOICE_GENDER) || "female";

/* Champs standards avec tolérance */
const FIELDS = {
  id: ["id", "index", "indice"],
  asavoir: ["a_savoir", "asavoir", "importance", "prio"],
  fr: ["Français", "Francais", "FR", "francais"],
  romaji: ["Romaji", "Rōmaji", "Roomaji", "romaji"],
  kana: ["Kana", "かな", "Hiragana", "Katakana", "kana"],
  kanji: ["Kanji", "漢字", "kanji"],
  categ: ["Catégorie", "Categorie", "catégorie", "categorie", "Category", "テーマ", "theme"],
  ex_fr: ["Exemple_FR", "ExempleFr", "ex_fr", "ExFR"],
  ex_romaji: ["Exemple_Romaji", "ExempleRomaji", "ex_romaji"],
  ex_kana: ["Exemple_Kana", "ExempleKana", "ex_kana"],
  ex_ja: ["Exemple_Japonais", "Exemple_JA", "ex_ja", "ExJA", "例文"]
};

/* =================== Chargement JSON =================== */
/** Charge le JSON de vocabulaire une seule fois */
async function loadJson(){
  try{
    const res = await fetch("voc_kit_400_top.json", { cache: "no-store" });
    if(!res.ok) throw new Error(`HTTP ${res.status}`);
    const arr = await res.json();
    if(!Array.isArray(arr)) throw new Error("Format JSON inattendu (doit être un tableau).");
    DATA = arr;
    // construire byId map
    DATA.forEach((row, i) => {
      const idVal = getField(row, FIELDS.id) ?? i;
      byId.set(String(idVal), i);
    });
  }catch(err){
    showError("Impossible de charger le vocabulaire. Vérifie le fichier et lance depuis un serveur local. Détail : " + err.message);
    throw err;
  }finally{
    loadingIndicator?.remove();
  }
}

/* =================== Filtres & UI =================== */
/** Construit les options des sélecteurs à partir des données */
function buildFilters(){
  // asavoir unique
  const aVals = new Set();
  const cVals = new Set();
  for(const row of DATA){
    const a = getField(row, FIELDS.asavoir);
    if(a !== undefined && a !== null && String(a).trim() !== "") aVals.add(String(a));
    const c = getField(row, FIELDS.categ);
    if(c !== undefined && c !== null && String(c).trim() !== "") cVals.add(String(c));
  }
  // remplir asavoir-select
  fillSelect(aSavoirSelect, ["__ALL__", ...Array.from(aVals).sort((a,b)=>String(a).localeCompare(String(b)))], v => v==="__ALL__" ? "Tous niveaux" : v);
  // remplir category-select
  fillSelect(categorySelect, ["__ALL__", ...Array.from(cVals).sort((a,b)=>String(a).localeCompare(String(b)))], v => v==="__ALL__" ? "Toutes catégories" : v);

  // Restaurer préférences
  const savedMode = localStorage.getItem(LS_KEYS.MODE);
  const savedA = localStorage.getItem(LS_KEYS.ASAVOIR);
  const savedC = localStorage.getItem(LS_KEYS.CATEG);
  if(savedMode && [...modeSelect.options].some(o => o.value === savedMode)) modeSelect.value = savedMode;
  if(savedA && [...aSavoirSelect.options].some(o => o.value === savedA)) aSavoirSelect.value = savedA;
  if(savedC && [...categorySelect.options].some(o => o.value === savedC)) categorySelect.value = savedC;
}

/** Remplit un select avec des options, et garde l'option courante si possible */
function fillSelect(selectEl, values, labelFn){
  const current = selectEl.value;
  selectEl.innerHTML = "";
  for(const v of values){
    const opt = document.createElement("option");
    opt.value = v;
    putText(opt, labelFn ? labelFn(v) : String(v));
    selectEl.appendChild(opt);
  }
  if([...selectEl.options].some(o => o.value === current)) selectEl.value = current;
}

/** Applique les filtres et recalcule la liste d'indices filtrés */
function applyFilters(){
  const fMode = modeSelect.value;
  const fA = aSavoirSelect.value;
  const fC = categorySelect.value;

  localStorage.setItem(LS_KEYS.MODE, fMode);
  localStorage.setItem(LS_KEYS.ASAVOIR, fA);
  localStorage.setItem(LS_KEYS.CATEG, fC);

  FILTERED = [];
  for(let i=0;i<DATA.length;i++){
    const row = DATA[i];
    const a = getField(row, FIELDS.asavoir);
    const c = getField(row, FIELDS.categ);
    const okA = (fA === "__ALL__") || String(a) === String(fA);
    const okC = (fC === "__ALL__") || String(c) === String(fC);
    if(okA && okC) FILTERED.push(i);
  }
  if(FILTERED.length === 0){
    showError("Aucun élément ne correspond aux filtres.");
    return;
  }else{
    hideError();
  }

  // Restaurer dernier ID si présent et dans la sélection
  const lastId = localStorage.getItem(LS_KEYS.LAST_ID);
  let startIdx = 0;
  if(lastId && byId.has(String(lastId))){
    const dataIndex = byId.get(String(lastId));
    const pos = FILTERED.indexOf(dataIndex);
    if(pos >= 0) startIdx = pos;
  }
  idx = startIdx;
  showCurrent();
}

/* =================== Navigation & affichage =================== */
/** Affiche le mot courant selon le mode choisi */
function showCurrent(){
  if(FILTERED.length === 0) return;
  const dataIndex = FILTERED[idx];
  const row = DATA[dataIndex];
  const mode = modeSelect.value;

  const textToShow = ({
    "Français": getField(row, FIELDS.fr),
    "Romaji": getField(row, FIELDS.romaji),
    "Kana": getField(row, FIELDS.kana),
    "Kanji": getField(row, FIELDS.kanji)
  })[mode];

  putText(wordDisplay, textToShow || "—");
  answerInput.value = "";
  checkmark.hidden = true;
  crossmark.hidden = true;
  resultTranslations.textContent = "";
  resultExample.textContent = "";

  // Appliquer la couleur selon le mode (classes css)
  wordDisplay.classList.remove('lang-fr','lang-romaji','lang-kana','lang-kanji');
  if(mode === 'Français') wordDisplay.classList.add('lang-fr');
  else if(mode === 'Romaji') wordDisplay.classList.add('lang-romaji');
  else if(mode === 'Kana') wordDisplay.classList.add('lang-kana');
  else if(mode === 'Kanji') wordDisplay.classList.add('lang-kanji');

  // Mémoriser le dernier ID
  const curId = getField(row, FIELDS.id) ?? dataIndex;
  localStorage.setItem(LS_KEYS.LAST_ID, String(curId));

  updateAudioButtonsState();
}

/** Navigation wrap-around */
function navigate(delta){
  if(FILTERED.length === 0) return;
  idx = (idx + delta + FILTERED.length) % FILTERED.length;
  showCurrent();
}

/** Aléatoire */
function navigateRandom(){
  if(FILTERED.length === 0) return;
  if(FILTERED.length === 1){ showCurrent(); return; }
  let n;
  do{ n = Math.floor(Math.random() * FILTERED.length); } while(n === idx);
  idx = n;
  showCurrent();
}

/* =================== Vérification =================== */
/** Compare la réponse de l'utilisateur au bon champ selon le mode */
function verifyAnswer(){
  if(FILTERED.length === 0) return;
  const row = DATA[FILTERED[idx]];
  const user = answerInput.value;
  let ok = null; // null = pas de réponse

  const corrects = {
    fr: getField(row, FIELDS.fr) || "",
    romaji: getField(row, FIELDS.romaji) || "",
    kana: getField(row, FIELDS.kana) || "",
    kanji: getField(row, FIELDS.kanji) || ""
  };
  // --- exemples (déclarés pour éviter erreurs si manquants) ---
  const exFR = getField(row, FIELDS.ex_fr) || "";
  const exR  = getField(row, FIELDS.ex_romaji) || "";
  const exK  = getField(row, FIELDS.ex_kana) || "";
  const exJ  = getField(row, FIELDS.ex_ja) || "";
  // --- fin ---


  const mode = modeSelect.value;
  // Si l'utilisateur a saisi quelque chose, on compare à la "cible" attendue
  if(user && user.trim().length){
    if(mode === "Français"){ // on attend JA (romaji/kana/kanji). On accepte romaji par défaut.
      ok = normalizeSpaces(user) === normalizeSpaces(corrects.romaji);
    }else if(mode === "Romaji"){ // Mode Rōmaji : on affiche Rōmaji mais on attend la traduction FR.
      
      ok = normalizeSpaces(user) === normalizeSpaces(corrects.fr);
    }else if(mode === "Kana"){
      ok = user.trim() === corrects.fr || user.trim() === corrects.kana || user.trim() === corrects.kanji; // tolérant
    }else if(mode === "Kanji"){
      ok = user.trim() === corrects.fr || user.trim() === corrects.kanji || user.trim() === corrects.kana; // tolérant
    }
  }

    // Afficher les 4 formes — construction sécurisée avec éléments
  resultTranslations.innerHTML = ""; // safe because we use textContent for values
  const addLine = (label, value, cls) => {
    const d = document.createElement('div');
    d.className = 'result-line';
    const lab = document.createElement('span');
    lab.className = 'result-label';
    lab.textContent = label + ":";
    const val = document.createElement('span');
    val.className = 'result-value ' + (cls || '');
    val.textContent = value || "—";
    d.appendChild(lab);
    d.appendChild(val);
    resultTranslations.appendChild(d);
  };
  addLine('Français', corrects.fr, 'lang-fr');
  addLine('Rōmaji', corrects.romaji, 'lang-romaji');
  addLine('かな', corrects.kana, 'lang-kana');
  addLine('漢字', corrects.kanji, 'lang-kanji');

  // Exemple (tolérant si vide) — affichage structuré
  resultExample.innerHTML = '';
  const exAdd = (label, value, cls) => {
    const d = document.createElement('div');
    d.className = 'result-line';
    const lab = document.createElement('span');
    lab.className = 'result-label';
    lab.textContent = label + ":";
    const val = document.createElement('span');
    val.className = 'result-value ' + (cls || '');
    val.textContent = value || "";
    d.appendChild(lab);
    d.appendChild(val);
    resultExample.appendChild(d);
  };
  exAdd('Exemple (FR)', exFR, 'lang-fr');
  exAdd('Exemple (Rōmaji)', exR, 'lang-romaji');
  exAdd('Exemple (かな)', exK, 'lang-kana');
  exAdd('Exemple (日本語)', exJ, 'lang-kanji');


  // Afficher un statut lisible (Correct / Incorrect) si l'utilisateur a répondu
  const statusId = 'result-status';
  let statusEl = resultTranslations.querySelector('#' + statusId);
  if(!statusEl){
    statusEl = document.createElement('div');
    statusEl.id = statusId;
    statusEl.className = 'result-status';
    resultTranslations.insertBefore(statusEl, resultTranslations.firstChild);
  }
  if(ok === null){
    statusEl.textContent = "";
    statusEl.style.color = "";
  }else if(ok){
    statusEl.textContent = "Correct ✓";
    statusEl.style.color = "var(--ok)";
  }else{
    statusEl.textContent = "Incorrect ✗";
    statusEl.style.color = "var(--danger)";
  }

  // ✓ / ✗ si l'utilisateur a répondu
  if(ok === null){
    checkmark.hidden = true;
    crossmark.hidden = true;
  }else if(ok){
    checkmark.hidden = false;
    crossmark.hidden = true;
  }else{
    checkmark.hidden = true;
    crossmark.hidden = false;
  }
}

/* =================== Audio & voix =================== */
let japaneseVoices = [], femaleVoiceName = null, maleVoiceName = null;

// Heuristiques demandées
const femalePattern = /(kyoko|mizuki|nanami|sayaka|haruka|kana|yui|aoi|sakura|female|woman|女|女性)/i;
const malePattern = /(takashi|hiroshi|yuki|kenta|jiro|male|man|otoko|kazu|masa|男|男性)/i;

/** Assigne les voix japonaise femme/homme en fonction des patterns */
function assignVoices(){
  try{
    const all = speechSynthesis.getVoices();
    japaneseVoices = all.filter(v => {
      const lang = (v.lang || "").toLowerCase();
      return lang.startsWith("ja") || lang.includes("ja-jp");
    });
    femaleVoiceName = japaneseVoices.find(v => femalePattern.test(v.name) || femalePattern.test(String(v.localService)))?.name
                      || japaneseVoices[0]?.name || null;
    maleVoiceName = japaneseVoices.find(v => malePattern.test(v.name) || malePattern.test(String(v.localService)))?.name
                      || japaneseVoices[1]?.name || femaleVoiceName;
    updateSelectedVoice();
  }catch(e){
    // rien, l'UI gérera l'absence
  }
  updateVoiceUI();
}

/** Met à jour la voix sélectionnée selon voiceGender (persistée) */
function updateSelectedVoice(){
  selectedVoiceName = (voiceGender === "female") ? femaleVoiceName : maleVoiceName;
  localStorage.setItem(LS_KEYS.VOICE_GENDER, voiceGender);
}

/** Met à jour l'état UI des voix */
function updateVoiceUI(){
  const hasJA = japaneseVoices.length > 0;
  voiceToggleBtn.setAttribute("aria-pressed", voiceGender === "female" ? "false" : "true");
  voiceToggleBtn.textContent = (voiceGender === "female") ? "👩" : "👨";
  voiceStatus.textContent = hasJA ? "Voix JA détectée" : "Voix JA non trouvée";
  updateAudioButtonsState();
}

/** Règle l'état des boutons audio selon la dispo */
function updateAudioButtonsState(){
  const hasJA = japaneseVoices.length > 0;
  audioWordBtn.disabled = !hasJA && !canFallbackFor("word");
  audioExampleBtn.disabled = !hasJA && !canFallbackFor("example");
  // Astuce titre d'aide
  const hint = "Active une voix japonaise dans ton système ou ajoute des MP3 fallback dans /audio.";
  if(audioWordBtn.disabled){ audioWordBtn.title = hint; } else { audioWordBtn.title = "Prononcer le mot"; }
  if(audioExampleBtn.disabled){ audioExampleBtn.title = hint; } else { audioExampleBtn.title = "Prononcer l’exemple"; }
}

/** Parle en japonais via SpeechSynthesis avec annulation préalable */
function speakJapanese(text){
  if(!text) return;
  try{
    if(japaneseVoices.length){
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "ja-JP";
      u.rate = 0.85;
      const v = speechSynthesis.getVoices().find(x => x.name === selectedVoiceName) || japaneseVoices[0];
      if(v) u.voice = v;
      speechSynthesis.speak(u);
      return true;
    }
  }catch(e){
    // ignore, fallback possible
  }
  return false;
}

/** Essaie de jouer un MP3 fallback s'il existe */
async function playFallback(kind){
  const row = DATA[FILTERED[idx]];
  const idVal = getField(row, FIELDS.id) ?? FILTERED[idx];
  const path = (kind === "word") ? `audio/word_${idVal}.mp3` : `audio/example_${idVal}.mp3`;
  const ok = await fileExists(path);
  if(!ok) return false;
  const audio = new Audio(path);
  try{
    await audio.play();
    return true;
  }catch{
    return false;
  }
}

/** Vérifie l'existence d'un fichier via HEAD puis GET si nécessaire */
async function fileExists(url){
  try{
    const r = await fetch(url, { method: "HEAD" });
    if(r.ok) return true;
  }catch{ /* certains serveurs ne gèrent pas HEAD */ }
  try{
    const r2 = await fetch(url, { method: "GET", cache: "no-store" });
    return r2.ok;
  }catch{ return false; }
}

/** Y a-t-il un fallback possible (sans requête) ? on suppose non, sauf si l'ID courant a un mp3 probable */
function canFallbackFor(_kind){
  // On ne peut pas savoir sans requête réseau — on tentera à la demande.
  // Ici, indéterminé => false pour désactiver seulement si aucune voix JA.
  return false;
}

/* =================== Gestion événements UI =================== */
modeSelect.addEventListener("change", () => { localStorage.setItem(LS_KEYS.MODE, modeSelect.value); showCurrent(); });
aSavoirSelect.addEventListener("change", () => { applyFilters(); });
categorySelect.addEventListener("change", () => { applyFilters(); });

prevBtn.addEventListener("click", () => navigate(-1));
nextBtn.addEventListener("click", () => navigate(+1));
randomBtn.addEventListener("click", () => navigateRandom());

verifyBtn.addEventListener("click", () => verifyAnswer());

audioWordBtn.addEventListener("click", async () => {
  const row = DATA[FILTERED[idx]];
  const ja = getField(row, FIELDS.kana) || getField(row, FIELDS.kanji) || getField(row, FIELDS.romaji);
  const sp = speakJapanese(ja);
  if(!sp){
    const ok = await playFallback("word");
    if(!ok) alert("Aucune voix japonaise détectée et aucun MP3 fallback trouvé.");
  }
});
audioExampleBtn.addEventListener("click", async () => {
  // Par sécurité, annule toute synthèse en cours (évite files d'utterances)
  try{ if(window.speechSynthesis && window.speechSynthesis.cancel) window.speechSynthesis.cancel(); }catch(e){ console.warn('cancel error', e); }

  const row = DATA[FILTERED[idx]];
  // On privilégie les champs structurés (kana/ja) — ensuite romaji en dernier recours.
  let ex = getField(row, FIELDS.ex_kana) || getField(row, FIELDS.ex_ja) || "";
  ex = (ex || "").toString().trim();

  // Si rien trouvé, tenter romaji (mais on préviendra que la voix peut mal prononcer)
  let usedRomajiFallback = false;
  if(!ex){
    const exR = getField(row, FIELDS.ex_romaji) || "";
    if(exR && String(exR).trim()){
      ex = String(exR).trim();
      usedRomajiFallback = true;
    }
  }

  // Si le champ contient plusieurs lignes ou labels, extraire seulement la portion japonaise
  // (chaînes de hiragana/katakana/kanji)
  if(ex){
    const japMatch = String(ex).match(/[\u3040-\u30ff\u4e00-\u9faf]+(?:[\u3040-\u30ff\u4e00-\u9faf\s、。！？]+)*/);
    if(japMatch && japMatch[0]){
      ex = japMatch[0].trim();
      usedRomajiFallback = false; // c'est bien japonais
    } else {
      // si on est en romaji ou aucune portion jap n'a été trouvée, garder ex tel quel
      ex = String(ex).split(/\r?\n/)[0].trim(); // éviter lectures multiples ; garder la 1ère ligne
    }
  }

  if(!ex){
    alert("Aucun exemple disponible pour être prononcé.");
    return;
  }

  // Lancer la synthèse (speakJapanese annule déjà en principe, mais on l'a déjà fait)
  const okSpeak = speakJapanese(ex);
  if(!okSpeak){
    // si la synthèse native n'a pas fonctionné, tenter le fallback MP3
    const ok = await playFallback("example");
    if(!ok){
      if(usedRomajiFallback){
        alert("La phrase est en rōmaji — la synthèse japonaise n'est pas disponible et aucun MP3 fallback trouvé.");
      } else {
        alert("Aucune voix japonaise détectée et aucun MP3 fallback trouvé.");
      }
    }
  }
});

voiceToggleBtn.addEventListener("click", () => {
  voiceGender = (voiceGender === "female") ? "male" : "female";
  updateSelectedVoice();
  updateVoiceUI();
});

voicePreviewBtn.addEventListener("click", () => {
  const sample = "こんにちは";
  if(!speakJapanese(sample)){
    alert("Pas de voix JA détectée. Ajoute des MP3 fallback dans /audio ou installe/active une voix japonaise sur ton système.");
  }
});

/* iOS/Safari : certains ne remplissent les voix qu'après interaction */
["click","touchstart"].forEach(evt => {
  window.addEventListener(evt, () => { assignVoices(); }, { once: true });
});

/* APIs speechSynthesis */
if("speechSynthesis" in window){
  speechSynthesis.onvoiceschanged = assignVoices;
  // tentative initiale
  assignVoices();
}else{
  voiceStatus.textContent = "Synthèse vocale non supportée";
}

/* =================== Erreurs & messages =================== */
function showError(msg){
  errorMessage.hidden = false;
  putText(errorMessage, msg);
}
function hideError(){
  errorMessage.hidden = true;
}

/* =================== Bootstrap =================== */
(async function init(){
  await loadJson();
  buildFilters();
  applyFilters();
})();



/* Patch léger pour ajouter :
 - affichage du nombre de mots de la catégorie sélectionnée (ou total)
 - numéro d'ordre du mot courant dans cette catégorie
 - relabel du menu "niveaux" (a_savoir)

Ce patch fonctionne *après* le chargement de app.js. Il se contente de
: - insérer des badges dans la topbar,
 - renommer les options de aSavoirSelect,
 - wrapper les fonctions showCurrent / applyFilters / buildFilters pour
   garantir que les stats sont mises à jour automatiquement.

Pour appliquer : ajoutez <script defer src="app.patch.js"></script> juste
après <script defer src="app.js"></script> dans votre index HTML, ou
collez le code ci-dessous directement en fin de app.js.
*/
(function(){
  function safe(fn){ try{ fn(); }catch(e){ console.warn('patch error', e); } }

  document.addEventListener('DOMContentLoaded', ()=>{
    safe(() => {
      // créer badges si absent
      const topbar = document.querySelector('.topbar');
      if(topbar && !document.getElementById('stats-container')){
        const s = document.createElement('div');
        s.id = 'stats-container';
        s.style.display = 'flex';
        s.style.gap = '0.5rem';
        s.style.alignItems = 'center';
        s.style.justifyContent = 'flex-end';
        s.innerHTML = '<span id="stat-cat" class="badge">Mots: —</span>' +
                      '<span id="stat-pos" class="badge">n° — / —</span>';
        // insérer avant le bloc voice-controls si présent
        const vc = document.querySelector('.voice-controls');
        if(vc) topbar.insertBefore(s, vc);
        else topbar.appendChild(s);
      }

      // map labels pour a_savoir
      const asavoirMap = {
        '1': 'Mots peu courants',
        '2': 'Mots importants',
        '3': 'Mots indispensables'
      };

      function relabelAsavoirOptions(){
        if(typeof aSavoirSelect === 'undefined' || !aSavoirSelect) return;
        for(const opt of aSavoirSelect.options){
          if(opt.value === '__ALL__') opt.text = 'Tous niveaux';
          else opt.text = asavoirMap[opt.value] || ('Niv ' + opt.value);
        }
      }

      // calcule la liste d'indices correspondant à la catégorie sélectionnée (ignorer a_savoir)
      function categoryListIndices(){
        const sel = categorySelect?.value ?? '__ALL__';
        if(!DATA || DATA.length === 0) return [];
        if(sel === '__ALL__') return DATA.map((_,i) => i);
        const out = [];
        for(let i=0;i<DATA.length;i++){
          const c = getField(DATA[i], FIELDS.categ);
          if(String(c) === String(sel)) out.push(i);
        }
        return out;
      }

      // mise à jour des badges
      function updateStats(){
        const statCat = document.getElementById('stat-cat');
        const statPos = document.getElementById('stat-pos');
        if(!statCat || !statPos) return;
        if(!DATA || DATA.length === 0){ statCat.textContent = 'Mots: —'; statPos.textContent = 'n° — / —'; return; }

        const catList = categoryListIndices();
        const catCount = catList.length;
        const sel = categorySelect?.value ?? '__ALL__';
        statCat.textContent = (sel === '__ALL__') ? `Total mots: ${catCount}` : `${catCount} mots (${sel})`;

        // position du mot courant dans la catégorie
        if(!FILTERED || FILTERED.length === 0){ statPos.textContent = `n° — / ${catCount}`; return; }
        const dataIndex = FILTERED[idx];
        if(typeof dataIndex === 'undefined' || dataIndex === null){ statPos.textContent = `n° — / ${catCount}`; return; }
        const posInCat = catList.indexOf(dataIndex);
        if(posInCat >= 0){ statPos.textContent = `n° ${posInCat+1} / ${catCount}`; }
        else {
          // si le mot courant n'est pas dans la catégorie (p.ex. filtré par niveau), afficher sa position dans la sélection courante
          const posFiltered = FILTERED.indexOf(dataIndex);
          statPos.textContent = `n° ${posFiltered+1} / ${FILTERED.length}`;
        }
      }

      // wrapper buildFilters / applyFilters / showCurrent pour maintenir cohérence
      if(typeof buildFilters === 'function'){
        const origBuild = buildFilters;
        buildFilters = function(){ origBuild(); relabelAsavoirOptions(); updateStats(); };
      }
      if(typeof applyFilters === 'function'){
        const origApply = applyFilters;
        applyFilters = function(){ origApply(); updateStats(); };
      }
      if(typeof showCurrent === 'function'){
        const origShow = showCurrent;
        showCurrent = function(){ origShow(); updateStats(); };
      }

      // si les éléments existent maintenant, appliquer relabel et stats
      relabelAsavoirOptions();
      // appeler un peu plus tard, après que DATA soit chargé
      setTimeout(updateStats, 150);

      // au cas où l'utilisateur change les options manuellement
      aSavoirSelect?.addEventListener('change', () => setTimeout(relabelAsavoirOptions, 10));
      categorySelect?.addEventListener('change', () => setTimeout(updateStats, 10));
      prevBtn?.addEventListener('click', () => setTimeout(updateStats, 10));
      nextBtn?.addEventListener('click', () => setTimeout(updateStats, 10));
      randomBtn?.addEventListener('click', () => setTimeout(updateStats, 10));

    }); // safe
  }); // DOMContentLoaded
})();


/* --- Ensure Enter works ONLY for the Vérifier button --- */
(function(){
  // safe references (may be undefined during early load)
  const answerInputEl = document.getElementById('answer-input');
  const verifyBtnEl = document.getElementById('verify-btn');

  function handleEnter(e){
    if(e.key !== 'Enter') return;
    // if focus is on the answer input, trigger verify
    const active = document.activeElement;
    if(active && active.id === 'answer-input'){
      e.preventDefault();
      e.stopPropagation();
      if(verifyBtnEl && !verifyBtnEl.disabled){
        verifyBtnEl.click();
      }
      return;
    }
    // otherwise block Enter to avoid triggering other controls
    e.preventDefault();
    e.stopPropagation();
  }

  // attach after DOM is ready
  if(document.readyState === 'complete' || document.readyState === 'interactive'){
    document.addEventListener('keydown', handleEnter, true);
  } else {
    document.addEventListener('DOMContentLoaded', () => document.addEventListener('keydown', handleEnter, true));
  }
})();


/* Instructions modal handlers */
(function(){
  const infoBtn = document.getElementById('info-btn');
  const modal = document.getElementById('instructions-modal');
  const modalClose = document.getElementById('modal-close-btn');
  const modalOk = document.getElementById('modal-ok-btn');
  const overlay = modal ? modal.querySelector('.modal-overlay') : null;
  let lastFocused = null;

  function openModal(){
    if(!modal) return;
    lastFocused = document.activeElement;
    modal.removeAttribute('hidden');
    // set focus to dialog for accessibility
    const dialog = modal.querySelector('.modal-dialog');
    if(dialog){
      dialog.focus();
    }
    document.body.style.overflow = 'hidden';
    // trap focus loosely by handling Tab
    document.addEventListener('keydown', trapTabKey);
    document.addEventListener('keydown', handleEsc);
  }
  function closeModal(){
    if(!modal) return;
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', trapTabKey);
    document.removeEventListener('keydown', handleEsc);
    if(lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  }
  function handleEsc(e){
    if(e.key === 'Escape' || e.key === 'Esc'){ closeModal(); }
  }
  function trapTabKey(e){
    if(e.key !== 'Tab') return;
    const focusable = modal.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])');
    if(!focusable || focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length-1];
    if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
    else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
  }

  infoBtn?.addEventListener('click', (e) => { e.preventDefault(); openModal(); });
  modalClose?.addEventListener('click', (e) => { e.preventDefault(); closeModal(); });
  modalOk?.addEventListener('click', (e) => { e.preventDefault(); closeModal(); });
  overlay?.addEventListener('click', (e) => { closeModal(); });
  // allow Enter to activate OK when modal open
  document.addEventListener('keydown', (e) => {
    if((e.key === 'Enter' || e.key === ' ') && modal && !modal.hasAttribute('hidden')){
      const active = document.activeElement;
      // if focus is inside modal, pressing Enter triggers OK button
      if(modal.contains(active)){
        e.preventDefault();
        modalOk?.click();
      }
    }
  });
})();



/* === Phrases modal handlers === */
(function(){
  // Elements
  const phrasesBtn = document.getElementById('phrases-btn');
  const modal = document.getElementById('phrases-modal');
  const modalClose = document.getElementById('phrases-close-btn');
  const modalOk = document.getElementById('phrases-ok-btn');
  const overlay = modal ? modal.querySelector('.modal-overlay') : null;
  const lessonSelect = document.getElementById('lesson-select');
  const btnPrev = document.getElementById('phrases-prev');
  const btnNext = document.getElementById('phrases-next');
  const btnAudio = document.getElementById('phrases-audio');
  const phJA = document.getElementById('ph-ja');
  const phKana = document.getElementById('ph-kana');
  const phRomaji = document.getElementById('ph-romaji');
  const phFR = document.getElementById('ph-fr');
  const statusEl = document.getElementById('phrase-status');

  let BOOK = []; // raw rows
  let lessons = []; // [{id:'N1', title:'...', count: 7}]
  let byLesson = new Map(); // id -> rows sorted by line
  let curLesson = null;
  let curIdx = 0;
  let lastFocused = null;

  function put(el, t){ if(el) el.textContent = t == null ? '—' : String(t); }

  function parseLineId(s){
    // "S00", "S1", etc -> number for sort
    if(!s) return 0;
    const m = String(s).match(/S(\d+)/i);
    return m ? parseInt(m[1], 10) : 0;
  }

  async function ensureLoaded(){
    if(BOOK.length) return;
    try{
      const res = await fetch('livreJaponais.json', { cache: 'no-store' });
      if(!res.ok) throw new Error('HTTP ' + res.status);
      const arr = await res.json();
      if(!Array.isArray(arr)) throw new Error('Format JSON inattendu (tableau attendu).');
      BOOK = arr;
      buildLessons();
    }catch(e){
      alert('Impossible de charger livreJaponais.json : ' + e.message);
    }
  }

  function buildLessons(){
  byLesson.clear();
  const mapKana = new Map();   // titre en kana depuis S00
  const mapFr   = new Map();   // titre en français depuis S00

  for(const row of BOOK){
    const L = row.lesson;
    if(!byLesson.has(L)) byLesson.set(L, []);
    byLesson.get(L).push(row);

    // S00 sert de titre de leçon
    if(String(row.line).toUpperCase() === 'S00'){
      if(row.kana)   mapKana.set(L, row.kana);
      if(row.french) mapFr.set(L, row.french);
    }
  }

  // tri interne par numéro de ligne
  for(const [L, rows] of byLesson){
    rows.sort((a,b)=>parseLineId(a.line)-parseLineId(b.line));
  }

  // liste des leçons triées par numéro
  lessons = Array.from(byLesson.keys()).sort((a,b)=>{
    const na = parseInt(String(a).replace(/\D+/g,''))||0;
    const nb = parseInt(String(b).replace(/\D+/g,''))||0;
    return na - nb;
  }).map(L => {
    const rows = byLesson.get(L) || [];
    const titleKana = mapKana.get(L) || (rows.find(r=>r.kana)?.kana) || '—';
    const titleFr   = mapFr.get(L)   || (rows.find(r=>r.french)?.french) || '';
    const num       = parseInt(String(L).replace(/\D+/g,'')) || '';
    return { id:L, num, titleKana, titleFr, count: rows.length };
  });

  // remplir le select avec "Leçon <num> — <kana> — <fr>"
  lessonSelect.innerHTML = '';
  for(const it of lessons){
    const opt = document.createElement('option');
    opt.value = it.id; // conserve l'ID technique (ex. N59)
    const frPart = it.titleFr ? ` — ${it.titleFr}` : '';
    opt.textContent = `Leçon ${it.num} — ${it.titleKana}${frPart}`;
    lessonSelect.appendChild(opt);
  }
}

  function firstContentIndex(rows){
    // return S00 index if present, else 0
    const i = rows.findIndex(r => String(r.line).toUpperCase() === 'S00');
    return i >= 0 ? i : 0;
  }

  function showCurrent(){
    if(!curLesson) return;
    const rows = byLesson.get(curLesson) || [];
    if(!rows.length) return;
    const row = rows[curIdx] || rows[0];
    put(phJA, row.japanese || '—');
    put(phKana, row.kana || '—');
    put(phRomaji, row.romaji || '—');
    put(phFR, row.french || '—');
    put(statusEl, curLesson + ' ' + (row.line || '') + ' · ' + (curIdx+1) + '/' + rows.length);
  }

  function openModal(){
    lastFocused = document.activeElement;
    modal.removeAttribute('hidden');
    const dialog = modal.querySelector('.modal-dialog');
    if(dialog) dialog.focus();
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', trapTabKey);
    document.addEventListener('keydown', handleEsc);
  }
  function closeModal(){
    modal.setAttribute('hidden','');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', trapTabKey);
    document.removeEventListener('keydown', handleEsc);
    if(lastFocused && lastFocused.focus) lastFocused.focus();
  }
  function handleEsc(e){ if(e.key === 'Escape' || e.key === 'Esc'){ closeModal(); } }
  function trapTabKey(e){
    if(e.key !== 'Tab') return;
    const focusable = modal.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])');
    if(!focusable.length) return;
    const first = focusable[0], last = focusable[focusable.length-1];
    if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
    else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
  }

  async function onOpen(){
    await ensureLoaded();
    if(!lessons.length){
      alert('Aucune leçon trouvée dans livreJaponais.json');
      return;
    }
    // default to first lesson
    curLesson = lessons[0].id;
    // set select value without firing change listener twice
    lessonSelect.value = curLesson;
    const rows = byLesson.get(curLesson) || [];
    curIdx = firstContentIndex(rows);
    showCurrent();
    openModal();
  }

  function onChangeLesson(){
    curLesson = lessonSelect.value;
    const rows = byLesson.get(curLesson) || [];
    curIdx = firstContentIndex(rows);
    showCurrent();
  }

  function next(){ const rows = byLesson.get(curLesson) || []; if(!rows.length) return; curIdx = (curIdx + 1) % rows.length; showCurrent(); }
  function prev(){ const rows = byLesson.get(curLesson) || []; if(!rows.length) return; curIdx = (curIdx - 1 + rows.length) % rows.length; showCurrent(); }

  function speakRow(){
    const rows = byLesson.get(curLesson) || [];
    if(!rows.length) return;
    const row = rows[curIdx];
    const text = row && row.japanese ? String(row.japanese) : '';
    if(!text){ alert('Aucun texte japonais.'); return; }
    if(typeof speakJapanese === 'function'){
      const ok = speakJapanese(text);
      if(!ok){ alert('Voix japonaise indisponible.'); }
    }else{
      alert('Synthèse non initialisée.');
    }
  }

  // Listeners
  phrasesBtn?.addEventListener('click', (e)=>{ e.preventDefault(); onOpen(); });
  modalClose?.addEventListener('click', (e)=>{ e.preventDefault(); closeModal(); });
  modalOk?.addEventListener('click', (e)=>{ e.preventDefault(); closeModal(); });
  overlay?.addEventListener('click', ()=> closeModal());
  lessonSelect?.addEventListener('change', onChangeLesson);
  btnNext?.addEventListener('click', next);
  btnPrev?.addEventListener('click', prev);
  btnAudio?.addEventListener('click', speakRow);

  // Keyboard shortcuts inside modal
  document.addEventListener('keydown', (e)=>{
    if(modal.hasAttribute('hidden')) return;
    if(e.key === 'ArrowRight'){ e.preventDefault(); next(); }
    else if(e.key === 'ArrowLeft'){ e.preventDefault(); prev(); }
    else if(e.key === ' ' || e.key === 'Enter'){ 
      // Space or Enter triggers audio
      if(document.activeElement && document.activeElement.tagName === 'SELECT') return;
      e.preventDefault(); speakRow(); 
    }
  });
})();

/* Phrases INFO modal */
(function(){
  const btn = document.getElementById('phrases-info-btn');
  const modal = document.getElementById('phrases-info-modal');
  if(!btn || !modal) return;
  const closeBtn = document.getElementById('phrases-info-close');
  const okBtn = document.getElementById('phrases-info-ok');
  const overlay = modal.querySelector('.modal-overlay');
  let lastFocused = null;

  function open(){ lastFocused = document.activeElement; modal.removeAttribute('hidden'); modal.querySelector('.modal-dialog')?.focus(); document.body.style.overflow='hidden'; document.addEventListener('keydown', onKey); }
  function close(){ modal.setAttribute('hidden',''); document.body.style.overflow=''; document.removeEventListener('keydown', onKey); lastFocused?.focus?.(); }
  function onKey(e){ if(e.key === 'Escape' || e.key === 'Esc'){ close(); } }

  btn.addEventListener('click', (e)=>{ e.preventDefault(); open(); });
  closeBtn?.addEventListener('click', (e)=>{ e.preventDefault(); close(); });
  okBtn?.addEventListener('click', (e)=>{ e.preventDefault(); close(); });
  overlay?.addEventListener('click', ()=> close());
})();
