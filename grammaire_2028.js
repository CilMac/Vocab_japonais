// ╔══════════════════════════════════════════════════════════════════════════╗
// ║  GRAMMAIRE_2028.js — Grammaire japonaise pour voyageur cultivé          ║
// ║  Objectif : soutenir une conversation basique au Japon en 2028          ║
// ║  Sections :                                                              ║
// ║    particules   — は、が、を、に、で、へ、と、も、か、から、まで、より   ║
// ║    demonstratifs — système KO-SO-A-DO complet                           ║
// ║    conjugaison  — 9 formes essentielles avec verbes modèles             ║
// ║    phrases      — structure SOV, questions, négation, liaison            ║
// ║    adjectifs    — i-adjectifs et na-adjectifs, conjugaison              ║
// ║    compteurs    — 人、本、枚、杯、個、台、匹、冊、枚                    ║
// ╚══════════════════════════════════════════════════════════════════════════╝
//
// Chaque entrée contient :
//   id          — identifiant unique
//   section     — identifiant de section (particules / demonstratifs / …)
//   section_label — libellé affiché
//   titre       — titre court de la règle
//   resume      — explication concise (1-2 lignes)
//   forme       — la forme/pattern en kana (ex: 〜は、〜が)
//   romaji_forme — le pattern en romaji
//   niveau      — 1 basique | 2 intermédiaire | 3 avancé
//   piege       — erreur fréquente à éviter (string ou null)
//   astuces     — conseil mnémotechnique (string ou null)
//   examples    — tableau { jp, romaji, fr }
//   exercices   — tableau de patterns pour génération d'exercices à la volée
//     { type: 'trou'|'choix'|'traduction'|'construction',
//       enonce_fr, enonce_jp, trou, bonnes_reponses[], mauvaises_reponses[] }

const GRAMMAIRE_2028 = [

  // ══════════════════════════════════════════════════════════════
  //  SECTION 1 — PARTICULES
  // ══════════════════════════════════════════════════════════════

  {
    id: 'part_wa',
    section: 'particules',
    section_label: 'Particules',
    titre: 'は — thème de la phrase',
    resume: 'Marque le thème (ce dont on parle). Différent du sujet grammatical. Se lit "wa" (pas "ha") dans ce rôle.',
    forme: '〔thème〕は〔commentaire〕',
    romaji_forme: '[thème] wa [commentaire]',
    niveau: 1,
    piege: 'は se prononce "wa" (pas "ha") quand c\'est une particule.',
    astuces: 'Pensez à "WA, parlons de ça !" — は annonce le sujet de conversation.',
    examples: [
      { jp: 'わたしはフランスじんです。', romaji: 'Watashi wa Furansujin desu.', fr: 'Je suis Français.' },
      { jp: 'このさけはとてもおいしいです。', romaji: 'Kono sake wa totemo oishii desu.', fr: 'Ce saké est très délicieux.' },
      { jp: 'きょうはいいてんきですね。', romaji: 'Kyō wa ii tenki desu ne.', fr: 'Aujourd\'hui il fait beau, n\'est-ce pas ?' },
      { jp: 'えきはどこですか？', romaji: 'Eki wa doko desu ka?', fr: 'Où est la gare ?' },
    ],
    exercices: [
      { type: 'trou', enonce_fr: 'Je suis français.', enonce_jp: 'わたし___ フランスじんです。', romaji_jp: 'watashi ___ Furansujin desu.', trou: '___', bonnes_reponses: ['は'], mauvaises_reponses: ['が', 'を', 'に'] },
      { type: 'trou', enonce_fr: 'Ce restaurant est délicieux.', enonce_jp: 'このレストラン___ おいしいです。', romaji_jp: 'kono resutoran ___ oishii desu.', trou: '___', bonnes_reponses: ['は'], mauvaises_reponses: ['が', 'で', 'も'] },
      { type: 'traduction', enonce_fr: 'Aujourd\'hui il fait beau.', bonnes_reponses: ['きょうはいいてんきです。', 'きょう は いい てんき です。'], mauvaises_reponses: [] },
    ],
  },

  {
    id: 'part_ga',
    section: 'particules',
    section_label: 'Particules',
    titre: 'が — sujet grammatical (mise en relief)',
    resume: 'Marque le sujet grammatical. Utilisé pour identifier "qui" ou "quoi" fait l\'action, ou avec des verbes d\'état (aimer, pouvoir, exister).',
    forme: '〔sujet〕が〔verbe/adjectif〕',
    romaji_forme: '[sujet] ga [verbe/adj]',
    niveau: 1,
    piege: 'が ≠ は — が identifie, は contextualise. "わたしがやります" = c\'est MOI qui le fais (pas un autre).',
    astuces: 'が pointe du doigt : "C\'est CELUI-LÀ !" — は parle d\'un sujet sans l\'identifier particulièrement.',
    examples: [
      { jp: 'さけがすきです。', romaji: 'Sake ga suki desu.', fr: 'J\'aime le saké. (litt. le saké est aimé)' },
      { jp: 'にほんごがすこしわかります。', romaji: 'Nihongo ga sukoshi wakarimasu.', fr: 'Je comprends un peu le japonais.' },
      { jp: 'だれがきますか？', romaji: 'Dare ga kimasu ka?', fr: 'Qui vient ?' },
      { jp: 'あそこにふじさんがみえます。', romaji: 'Asoko ni Fujisan ga miemasu.', fr: 'Là-bas on voit le mont Fuji.' },
      { jp: 'にほんごがはなせますか？', romaji: 'Nihongo ga hanasemasu ka?', fr: 'Parlez-vous japonais ?' },
    ],
    exercices: [
      { type: 'trou', enonce_fr: 'J\'aime le saké.', enonce_jp: 'さけ___ すきです。', romaji_jp: 'sake ___ suki desu.', trou: '___', bonnes_reponses: ['が'], mauvaises_reponses: ['は', 'を', 'に'] },
      { type: 'trou', enonce_fr: 'Je comprends un peu le japonais.', enonce_jp: 'にほんご___ すこしわかります。', romaji_jp: 'nihongo ___ sukoshi wakarimasu.', trou: '___', bonnes_reponses: ['が'], mauvaises_reponses: ['は', 'を', 'で'] },
      { type: 'choix', enonce_fr: 'Qui vient ?', enonce_jp: 'だれ___ きますか？', romaji_jp: 'dare ___ kimasu ka?', trou: '___', bonnes_reponses: ['が'], mauvaises_reponses: ['は', 'を', 'に'] },
    ],
  },

  {
    id: 'part_wo',
    section: 'particules',
    section_label: 'Particules',
    titre: 'を — complément d\'objet direct',
    resume: 'Marque l\'objet direct d\'une action (ce qu\'on fait / mange / achète…). Se lit "o" (pas "wo").',
    forme: '〔objet〕を〔verbe transitif〕',
    romaji_forme: '[objet] o [verbe]',
    niveau: 1,
    piege: 'を se prononce "o" en japonais moderne. Ne s\'utilise qu\'avec des verbes transitifs (actions sur un objet).',
    astuces: 'を = "je prends ça en main" — c\'est l\'objet que je saisit avec mon action.',
    examples: [
      { jp: 'すしをたべます。', romaji: 'Sushi o tabemasu.', fr: 'Je mange des sushis.' },
      { jp: 'にほんごをべんきょうしています。', romaji: 'Nihongo o benkyō shite imasu.', fr: 'J\'étudie le japonais.' },
      { jp: 'みずをください。', romaji: 'Mizu o kudasai.', fr: 'De l\'eau, s\'il vous plaît.' },
      { jp: 'しゃしんをとってもいいですか？', romaji: 'Shashin o totte mo ii desu ka?', fr: 'Puis-je prendre une photo ?' },
      { jp: 'でんしゃをのります。', romaji: 'Densha ni norimasu.', fr: 'Je prends le train.' },
    ],
    exercices: [
      { type: 'trou', enonce_fr: 'Je mange des sushis.', enonce_jp: 'すし___ たべます。', romaji_jp: 'sushi ___ tabemasu.', trou: '___', bonnes_reponses: ['を'], mauvaises_reponses: ['は', 'が', 'に'] },
      { type: 'trou', enonce_fr: 'De l\'eau, s\'il vous plaît.', enonce_jp: 'みず___ ください。', romaji_jp: 'mizu ___ kudasai.', trou: '___', bonnes_reponses: ['を'], mauvaises_reponses: ['は', 'が', 'で'] },
      { type: 'construction', enonce_fr: 'J\'étudie le japonais.', bonnes_reponses: ['にほんごをべんきょうしています。', 'にほんごをべんきょうします。'], mauvaises_reponses: [] },
    ],
  },

  {
    id: 'part_ni',
    section: 'particules',
    section_label: 'Particules',
    titre: 'に — direction, lieu d\'existence, moment',
    resume: 'Trois usages : (1) direction vers laquelle on va, (2) lieu où quelque chose existe/se trouve, (3) moment précis dans le temps.',
    forme: '〔lieu/temps/cible〕に',
    romaji_forme: '[lieu/temps/cible] ni',
    niveau: 1,
    piege: 'に = destination / existence. に ≠ で : に indique où on EST ou va, で indique où on FAIT quelque chose.',
    astuces: '"に = point d\'arrivée ou d\'ancrage" — comme une épingle sur une carte.',
    examples: [
      { jp: 'きょうとにいきます。', romaji: 'Kyōto ni ikimasu.', fr: 'Je vais à Kyoto.' },
      { jp: 'えきのまえにコンビニがあります。', romaji: 'Eki no mae ni konbini ga arimasu.', fr: 'Il y a un konbini devant la gare.' },
      { jp: 'しちじにおきます。', romaji: 'Shichiji ni okimasu.', fr: 'Je me lève à 7h.' },
      { jp: 'フランスにすんでいます。', romaji: 'Furansu ni sunde imasu.', fr: 'J\'habite en France.' },
      { jp: 'ともだちにあいます。', romaji: 'Tomodachi ni aimasu.', fr: 'Je rencontre un ami.' },
    ],
    exercices: [
      { type: 'trou', enonce_fr: 'Je vais à Kyoto.', enonce_jp: 'きょうと___ いきます。', romaji_jp: 'Kyōto ___ ikimasu.', trou: '___', bonnes_reponses: ['に'], mauvaises_reponses: ['は', 'で', 'を'] },
      { type: 'trou', enonce_fr: 'Je me lève à 7h.', enonce_jp: 'しちじ___ おきます。', romaji_jp: 'shichiji ___ okimasu.', trou: '___', bonnes_reponses: ['に'], mauvaises_reponses: ['は', 'で', 'が'] },
      { type: 'choix', enonce_fr: 'Il y a un konbini devant la gare.', enonce_jp: 'えきのまえ___ コンビニがあります。', romaji_jp: 'eki no mae ___ konbini ga arimasu.', trou: '___', bonnes_reponses: ['に'], mauvaises_reponses: ['は', 'で', 'を'] },
    ],
  },

  {
    id: 'part_de',
    section: 'particules',
    section_label: 'Particules',
    titre: 'で — lieu d\'action, moyen, cause',
    resume: 'Trois usages : (1) lieu où une action se déroule, (2) moyen utilisé pour faire qqch, (3) cause/raison.',
    forme: '〔lieu/moyen/cause〕で〔action〕',
    romaji_forme: '[lieu/moyen] de [action]',
    niveau: 1,
    piege: 'で ≠ に : "レストランで食べます" (j\'y mange = action) vs "レストランにいます" (j\'y suis = existence).',
    astuces: '"で = le cadre de l\'action" — la scène où ça se passe, ou l\'outil qu\'on utilise.',
    examples: [
      { jp: 'レストランでたべます。', romaji: 'Resutoran de tabemasu.', fr: 'Je mange au restaurant.' },
      { jp: 'でんしゃでいきます。', romaji: 'Densha de ikimasu.', fr: 'J\'y vais en train.' },
      { jp: 'にほんごではなしましょう。', romaji: 'Nihongo de hanashimashō.', fr: 'Parlons en japonais.' },
      { jp: 'クレジットカードではらえますか？', romaji: 'Kurejitto kādo de haraemasu ka?', fr: 'Puis-je payer par carte de crédit ?' },
    ],
    exercices: [
      { type: 'trou', enonce_fr: 'Je mange au restaurant.', enonce_jp: 'レストラン___ たべます。', romaji_jp: 'resutoran ___ tabemasu.', trou: '___', bonnes_reponses: ['で'], mauvaises_reponses: ['に', 'は', 'を'] },
      { type: 'trou', enonce_fr: 'J\'y vais en train.', enonce_jp: 'でんしゃ___ いきます。', romaji_jp: 'densha ___ ikimasu.', trou: '___', bonnes_reponses: ['で'], mauvaises_reponses: ['に', 'を', 'が'] },
      { type: 'choix', enonce_fr: 'Parlons en japonais.', enonce_jp: 'にほんご___ はなしましょう。', romaji_jp: 'nihongo ___ hanashimasho.', trou: '___', bonnes_reponses: ['で'], mauvaises_reponses: ['に', 'は', 'を'] },
    ],
  },

  {
    id: 'part_he',
    section: 'particules',
    section_label: 'Particules',
    titre: 'へ — direction (mouvement vers)',
    resume: 'Indique la direction d\'un déplacement. Interchangeable avec に pour la direction, mais に est plus courant. Se lit "e" (pas "he").',
    forme: '〔destination〕へ〔aller/venir/retourner〕',
    romaji_forme: '[destination] e [mouvement]',
    niveau: 2,
    piege: 'へ se prononce "e". Plus littéraire/formel que に pour la direction.',
    astuces: '"へ = cap sur..." — évoque le voyage, la direction. Parfait pour les voyageurs !',
    examples: [
      { jp: 'にほんへようこそ！', romaji: 'Nihon e yōkoso!', fr: 'Bienvenue au Japon !' },
      { jp: 'とうきょうへかえります。', romaji: 'Tōkyō e kaerimasu.', fr: 'Je retourne à Tokyo.' },
      { jp: 'にほんへまたきたいです。', romaji: 'Nihon e mata kitai desu.', fr: 'Je veux revenir au Japon.' },
    ],
    exercices: [
      { type: 'trou', enonce_fr: 'Je retourne à Tokyo.', enonce_jp: 'とうきょう___ かえります。', romaji_jp: 'Tōkyō ___ kaerimasu.', trou: '___', bonnes_reponses: ['へ', 'に'], mauvaises_reponses: ['は', 'で', 'を'] },
      { type: 'traduction', enonce_fr: 'Bienvenue au Japon !', bonnes_reponses: ['にほんへようこそ！', 'にほんにようこそ！'], mauvaises_reponses: [] },
    ],
  },

  {
    id: 'part_to',
    section: 'particules',
    section_label: 'Particules',
    titre: 'と — avec (quelqu\'un) / et (liste exhaustive)',
    resume: 'Deux usages : (1) "avec" une personne, (2) "et" pour relier deux noms de façon exhaustive (tout est cité).',
    forme: '〔A〕と〔B〕 / 〔personne〕とます',
    romaji_forme: '[A] to [B] / [personne] to [verbe]',
    niveau: 1,
    piege: 'と pour "et" = liste complète. や pour "et" = liste partielle (et d\'autres choses).',
    astuces: '"と = ensemble, comme un binôme" — soit deux choses liées, soit une compagnie.',
    examples: [
      { jp: 'つまとにほんにきました。', romaji: 'Tsuma to Nihon ni kimashita.', fr: 'Je suis venu au Japon avec ma femme.' },
      { jp: 'すしとさしみをたべました。', romaji: 'Sushi to sashimi o tabemashita.', fr: 'J\'ai mangé des sushis et des sashimis.' },
      { jp: 'ともだちといっしょにいきます。', romaji: 'Tomodachi to issho ni ikimasu.', fr: 'J\'y vais avec des amis.' },
    ],
    exercices: [
      { type: 'trou', enonce_fr: 'Je suis venu avec ma femme.', enonce_jp: 'つま___ にほんにきました。', romaji_jp: 'tsuma ___ Nihon ni kimashita.', trou: '___', bonnes_reponses: ['と'], mauvaises_reponses: ['は', 'が', 'で'] },
      { type: 'trou', enonce_fr: 'Des sushis et des sashimis.', enonce_jp: 'すし___ さしみ', romaji_jp: 'sushi ___ sashimi', trou: '___', bonnes_reponses: ['と'], mauvaises_reponses: ['は', 'が', 'や'] },
    ],
  },

  {
    id: 'part_mo',
    section: 'particules',
    section_label: 'Particules',
    titre: 'も — aussi, également',
    resume: 'Remplace は ou が pour dire "aussi" ou "également". Peut aussi exprimer "ni l\'un ni l\'autre" en négatif.',
    forme: '〔A〕も〔même prédicat〕',
    romaji_forme: '[A] mo [même prédicat]',
    niveau: 1,
    piege: 'も REMPLACE は ou が, ne se cumule pas avec eux. ❌ "わたしはもすきです" ✅ "わたしもすきです".',
    astuces: '"も = moi aussi !" — la particule de la solidarité et de l\'inclusion.',
    examples: [
      { jp: 'わたしもさけがすきです。', romaji: 'Watashi mo sake ga suki desu.', fr: 'Moi aussi j\'aime le saké.' },
      { jp: 'おんせんもたのしかったです。', romaji: 'Onsen mo tanoshikatta desu.', fr: 'Les onsen aussi étaient agréables.' },
      { jp: 'これもおねがいします。', romaji: 'Kore mo onegai shimasu.', fr: 'Celui-ci aussi, s\'il vous plaît.' },
    ],
    exercices: [
      { type: 'trou', enonce_fr: 'Moi aussi j\'aime le saké.', enonce_jp: 'わたし___ さけがすきです。', romaji_jp: 'watashi ___ sake ga suki desu.', trou: '___', bonnes_reponses: ['も'], mauvaises_reponses: ['は', 'が', 'を'] },
      { type: 'trou', enonce_fr: 'Celui-ci aussi, s\'il vous plaît.', enonce_jp: 'これ___ おねがいします。', romaji_jp: 'kore ___ onegai shimasu.', trou: '___', bonnes_reponses: ['も'], mauvaises_reponses: ['は', 'が', 'を'] },
    ],
  },

  {
    id: 'part_ka',
    section: 'particules',
    section_label: 'Particules',
    titre: 'か — question (point d\'interrogation oral)',
    resume: 'Se place en fin de phrase pour transformer un énoncé en question. Pas de changement d\'ordre des mots. L\'intonation monte.',
    forme: '〔phrase〕か？',
    romaji_forme: '[phrase] ka?',
    niveau: 1,
    piege: 'En japonais poli, か suffit — pas besoin d\'inverser sujet et verbe comme en français.',
    astuces: '"か = le point d\'interrogation qui se prononce" — mettez-le à la fin et c\'est une question !',
    examples: [
      { jp: 'にほんごがはなせますか？', romaji: 'Nihongo ga hanasemasu ka?', fr: 'Parlez-vous japonais ?' },
      { jp: 'えきはちかいですか？', romaji: 'Eki wa chikai desu ka?', fr: 'La gare est-elle proche ?' },
      { jp: 'おすすめはなんですか？', romaji: 'Osusume wa nan desu ka?', fr: 'Qu\'est-ce que vous recommandez ?' },
      { jp: 'これはいくらですか？', romaji: 'Kore wa ikura desu ka?', fr: 'Combien ça coûte ?' },
    ],
    exercices: [
      { type: 'construction', enonce_fr: 'La gare est-elle proche ? (à partir de : えき / ちかい / です)', bonnes_reponses: ['えきはちかいですか？', 'えきはちかいですか。'], mauvaises_reponses: [] },
      { type: 'traduction', enonce_fr: 'Combien ça coûte ?', bonnes_reponses: ['これはいくらですか？', 'いくらですか？'], mauvaises_reponses: [] },
    ],
  },

  {
    id: 'part_kara_made',
    section: 'particules',
    section_label: 'Particules',
    titre: 'から / まで — depuis/de … jusqu\'à',
    resume: 'から = depuis, à partir de (lieu, temps, cause). まで = jusqu\'à. Souvent utilisés ensemble pour délimiter une plage.',
    forme: '〔A〕から〔B〕まで',
    romaji_forme: '[A] kara [B] made',
    niveau: 1,
    piege: 'から peut aussi signifier "parce que" en fin de phrase : 〔raison〕から〔conséquence〕.',
    astuces: '"から/まで = de A à B" — comme un billet de train avec gare de départ et d\'arrivée.',
    examples: [
      { jp: 'フランスからきました。', romaji: 'Furansu kara kimashita.', fr: 'Je viens de France.' },
      { jp: 'くじからじゅうじまでしごとです。', romaji: 'Kuji kara jūji made shigoto desu.', fr: 'Je travaille de 9h à 10h.' },
      { jp: 'ここからえきまでどのくらいですか？', romaji: 'Koko kara eki made donokurai desu ka?', fr: 'Combien de temps d\'ici à la gare ?' },
      { jp: 'たかかったから、かいませんでした。', romaji: 'Takakatta kara, kaimasen deshita.', fr: 'C\'était trop cher, donc je n\'ai pas acheté.' },
    ],
    exercices: [
      { type: 'trou', enonce_fr: 'Je viens de France.', enonce_jp: 'フランス___ きました。', romaji_jp: 'Furansu ___ kimashita.', trou: '___', bonnes_reponses: ['から'], mauvaises_reponses: ['まで', 'に', 'で'] },
      { type: 'trou', enonce_fr: 'De 9h à 17h.', enonce_jp: 'くじ___ じゅうしちじ___', romaji_jp: 'kuji ___ jūshichiji ___', trou: '___', bonnes_reponses: ['から', 'まで'], mauvaises_reponses: ['に', 'で', 'は'] },
    ],
  },

  {
    id: 'part_yori',
    section: 'particules',
    section_label: 'Particules',
    titre: 'より — comparatif "plus que"',
    resume: 'Marque le terme de comparaison : A は B より〔adjectif〕 = "A est plus [adj] que B".',
    forme: '〔A〕は〔B〕より〔adjectif〕です',
    romaji_forme: '[A] wa [B] yori [adj] desu',
    niveau: 2,
    piege: 'L\'ordre est inversé par rapport au français : "A est (plus adj) que B" → "A は B より adj".',
    astuces: '"より = point de comparaison" — B より = "en comparaison de B".',
    examples: [
      { jp: 'きょうはきのうよりあついです。', romaji: 'Kyō wa kinō yori atsui desu.', fr: 'Aujourd\'hui il fait plus chaud qu\'hier.' },
      { jp: 'さけはビールよりすきです。', romaji: 'Sake wa bīru yori suki desu.', fr: 'Je préfère le saké à la bière.' },
      { jp: 'しんかんせんはバスよりはやいです。', romaji: 'Shinkansen wa basu yori hayai desu.', fr: 'Le shinkansen est plus rapide que le bus.' },
    ],
    exercices: [
      { type: 'trou', enonce_fr: 'Aujourd\'hui il fait plus chaud qu\'hier.', enonce_jp: 'きょうはきのう___ あついです。', romaji_jp: 'kyō wa kinō ___ atsui desu.', trou: '___', bonnes_reponses: ['より'], mauvaises_reponses: ['から', 'まで', 'も'] },
      { type: 'construction', enonce_fr: 'Le shinkansen est plus rapide que le bus.', bonnes_reponses: ['しんかんせんはバスよりはやいです。'], mauvaises_reponses: [] },
    ],
  },

  // ══════════════════════════════════════════════════════════════
  //  SECTION 2 — DÉMONSTRATIFS (système KO-SO-A-DO)
  // ══════════════════════════════════════════════════════════════

  {
    id: 'demo_intro',
    section: 'demonstratifs',
    section_label: 'Démonstratifs',
    titre: 'Système KO-SO-A-DO — Vue d\'ensemble',
    resume: 'Le japonais a 4 séries de démonstratifs basées sur la distance : KO- (près de moi), SO- (près de toi / dont on parle), A- (loin des deux), DO- (lequel ? interrogatif).',
    forme: 'こ / そ / あ / ど',
    romaji_forme: 'ko / so / a / do',
    niveau: 1,
    piege: 'そ (so-) peut référer à quelque chose dans la conversation, pas seulement physiquement près de l\'interlocuteur.',
    astuces: 'KO = moi, SO = toi, A = là-bas (loin de nous deux), DO = ? (question). Pensez à une ligne : Moi — Toi — Là-bas.',
    examples: [
      { jp: 'これはなんですか？', romaji: 'Kore wa nan desu ka?', fr: 'Qu\'est-ce que c\'est ? (près de moi)' },
      { jp: 'それをください。', romaji: 'Sore o kudasai.', fr: 'Donnez-moi ça. (près de vous)' },
      { jp: 'あれはなんですか？', romaji: 'Are wa nan desu ka?', fr: 'Qu\'est-ce que c\'est là-bas ?' },
      { jp: 'どれがおすすめですか？', romaji: 'Dore ga osusume desu ka?', fr: 'Lequel vous recommandez ?' },
    ],
    exercices: [
      { type: 'choix', enonce_fr: 'Qu\'est-ce que c\'est ? (objet près de MOI)', enonce_jp: '___ はなんですか？', romaji_jp: '___ wa nan desu ka?', trou: '___', bonnes_reponses: ['これ'], mauvaises_reponses: ['それ', 'あれ', 'どれ'] },
      { type: 'choix', enonce_fr: 'Lequel vous recommandez ?', enonce_jp: '___ がおすすめですか？', romaji_jp: '___ ga osusume desu ka?', trou: '___', bonnes_reponses: ['どれ'], mauvaises_reponses: ['これ', 'それ', 'あれ'] },
    ],
  },

  {
    id: 'demo_tableau',
    section: 'demonstratifs',
    section_label: 'Démonstratifs',
    titre: 'Tableau complet KO-SO-A-DO',
    resume: 'Quatre colonnes (KO/SO/A/DO) × six lignes (objet, adjectif, lieu, direction, façon, quantité).',
    forme: '— tableau —',
    romaji_forme: '— tableau —',
    niveau: 1,
    piege: null,
    astuces: 'Apprenez une ligne entière à la fois : こ・そ・あ・ど — puis passez à la suivante.',
    tableau: [
      { usage: 'Objet', ko: 'これ (kore)', so: 'それ (sore)', a: 'あれ (are)', dou: 'どれ (dore)', note: 'objet qu\'on peut montrer' },
      { usage: 'Adjectif (ce…)', ko: 'この (kono)', so: 'その (sono)', a: 'あの (ano)', dou: 'どの (dono)', note: 'suivi d\'un nom : kono sake = ce saké' },
      { usage: 'Lieu', ko: 'ここ (koko)', so: 'そこ (soko)', a: 'あそこ (asoko)', dou: 'どこ (doko)', note: 'où ? = どこ' },
      { usage: 'Direction', ko: 'こちら (kochira)', so: 'そちら (sochira)', a: 'あちら (achira)', dou: 'どちら (dochira)', note: 'poli — aussi "lequel des deux ?"' },
      { usage: 'Façon/manière', ko: 'こう (kō)', so: 'そう (sō)', a: 'ああ (ā)', dou: 'どう (dō)', note: '"comme ça" — どう = comment ?' },
    ],
    examples: [
      { jp: 'このさけはおいしいですね。', romaji: 'Kono sake wa oishii desu ne.', fr: 'Ce saké est délicieux, n\'est-ce pas ?' },
      { jp: 'えきはどこですか？', romaji: 'Eki wa doko desu ka?', fr: 'Où est la gare ?' },
      { jp: 'あのやまはふじさんです。', romaji: 'Ano yama wa Fujisan desu.', fr: 'Cette montagne là-bas, c\'est le Fuji.' },
      { jp: 'おてあらいはどちらですか？', romaji: 'Otearai wa dochira desu ka?', fr: 'Les toilettes, c\'est de quel côté ?' },
      { jp: 'そうですね。', romaji: 'Sō desu ne.', fr: 'C\'est bien ça. / En effet.' },
      { jp: 'どうですか？', romaji: 'Dō desu ka?', fr: 'Comment c\'est ? / Qu\'en pensez-vous ?' },
    ],
    exercices: [
      { type: 'choix', enonce_fr: 'Ce saké (adjectif, près de moi)', enonce_jp: '___ さけ', romaji_jp: '___ sake', trou: '___', bonnes_reponses: ['この'], mauvaises_reponses: ['その', 'あの', 'どの'] },
      { type: 'choix', enonce_fr: 'Où est la gare ?', enonce_jp: 'えきは___ ですか？', romaji_jp: 'eki wa ___ desu ka?', trou: '___', bonnes_reponses: ['どこ'], mauvaises_reponses: ['ここ', 'そこ', 'あそこ'] },
      { type: 'choix', enonce_fr: 'Les toilettes sont de quel côté ? (poli)', enonce_jp: 'おてあらいは___ ですか？', romaji_jp: 'otearai wa ___ desu ka?', trou: '___', bonnes_reponses: ['どちら'], mauvaises_reponses: ['どこ', 'どれ', 'どの'] },
      { type: 'traduction', enonce_fr: 'Cette montagne là-bas, c\'est le Fuji.', bonnes_reponses: ['あのやまはふじさんです。'], mauvaises_reponses: [] },
    ],
  },

  // ══════════════════════════════════════════════════════════════
  //  SECTION 3 — CONJUGAISON
  // ══════════════════════════════════════════════════════════════

  {
    id: 'conj_masu',
    section: 'conjugaison',
    section_label: 'Conjugaison',
    titre: 'Forme en ます — présent/futur poli',
    resume: 'La forme de base pour parler poliment. Affirmatif : 〜ます. Négatif : 〜ません. Utilisé dans tous les contextes de voyage.',
    forme: '〔radical〕ます / 〔radical〕ません',
    romaji_forme: '[radical]masu / [radical]masen',
    niveau: 1,
    piege: 'ます couvre à la fois le présent et le futur en japonais. Le contexte détermine le sens.',
    astuces: '"ます = politesse de base" — c\'est votre bouclier en voyage. Toujours poli, toujours compris.',
    modeles: [
      { dict: 'たべる', masu: 'たべます', masen: 'たべません', romaji_masu: 'tabemasu', romaji_masen: 'tabemasen', fr: 'manger' },
      { dict: 'のむ',   masu: 'のみます', masen: 'のみません', romaji_masu: 'nomimasu', romaji_masen: 'nomimasen', fr: 'boire' },
      { dict: 'いく',   masu: 'いきます', masen: 'いきません', romaji_masu: 'ikimasu',  romaji_masen: 'ikimasen',  fr: 'aller' },
      { dict: 'くる',   masu: 'きます',   masen: 'きません',   romaji_masu: 'kimasu',   romaji_masen: 'kimasen',   fr: 'venir' },
      { dict: 'する',   masu: 'します',   masen: 'しません',   romaji_masu: 'shimasu',  romaji_masen: 'shimasen',  fr: 'faire' },
      { dict: 'わかる', masu: 'わかります',masen: 'わかりません',romaji_masu: 'wakarimasu',romaji_masen:'wakarimasen',fr:'comprendre'},
    ],
    examples: [
      { jp: 'にほんりょうりをたべます。', romaji: 'Nihon ryōri o tabemasu.', fr: 'Je mange de la cuisine japonaise.' },
      { jp: 'さけはのみません。', romaji: 'Sake wa nomimasen.', fr: 'Je ne bois pas de saké.' },
      { jp: 'にほんごがわかりません。', romaji: 'Nihongo ga wakarimasen.', fr: 'Je ne comprends pas le japonais.' },
      { jp: 'えいごがはなせますか？', romaji: 'Eigo ga hanasemasu ka?', fr: 'Parlez-vous anglais ?' },
    ],
    exercices: [
      { type: 'trou', enonce_fr: 'Je ne comprends pas le japonais.', enonce_jp: 'にほんごがわかり___。', romaji_jp: 'nihongo ga wakari___.', romaji_jp: 'nihongo ga wakari___.', trou: '___', bonnes_reponses: ['ません'], mauvaises_reponses: ['ます', 'ました', 'ませんでした'] },
      { type: 'trou', enonce_fr: 'Parlez-vous anglais ?', enonce_jp: 'えいごがはなせ___か？', romaji_jp: 'eigo ga hanase___ ka?', trou: '___', bonnes_reponses: ['ます'], mauvaises_reponses: ['ません', 'ました', 'ませんでした'] },
    ],
  },

  {
    id: 'conj_mashita',
    section: 'conjugaison',
    section_label: 'Conjugaison',
    titre: 'Forme en ました — passé poli',
    resume: 'Passé affirmatif : 〜ました. Passé négatif : 〜ませんでした. Correspond à "j\'ai fait" ou "je n\'ai pas fait".',
    forme: '〔radical〕ました / 〔radical〕ませんでした',
    romaji_forme: '[radical]mashita / [radical]masen deshita',
    niveau: 1,
    piege: 'ませんでした est long mais incontournable pour le négatif passé — ne pas le raccourcir.',
    astuces: '"ました = c\'est fait !" — comme un tampon de validation dans le passé.',
    modeles: [
      { masu: 'たべます', mashita: 'たべました', neg: 'たべませんでした', fr: 'manger' },
      { masu: 'いきます', mashita: 'いきました', neg: 'いきませんでした', fr: 'aller' },
      { masu: 'のみます', mashita: 'のみました', neg: 'のみませんでした', fr: 'boire' },
      { masu: 'みます',  mashita: 'みました',  neg: 'みませんでした',  fr: 'voir/regarder' },
    ],
    examples: [
      { jp: 'きのうきょうとにいきました。', romaji: 'Kinō Kyōto ni ikimashita.', fr: 'Hier je suis allé à Kyoto.' },
      { jp: 'ふじさんをみました！すごかった！', romaji: 'Fujisan o mimashita! Sugokatta!', fr: 'J\'ai vu le mont Fuji ! C\'était incroyable !' },
      { jp: 'えきをみつけられませんでした。', romaji: 'Eki o mitsukera remasen deshita.', fr: 'Je n\'ai pas réussi à trouver la gare.' },
      { jp: 'さけをのみすぎました。', romaji: 'Sake o nomisugimashita.', fr: 'J\'ai trop bu de saké.' },
    ],
    exercices: [
      { type: 'trou', enonce_fr: 'Hier je suis allé à Kyoto.', enonce_jp: 'きのうきょうとにいき___。', romaji_jp: 'kinō Kyōto ni iki___.', trou: '___', bonnes_reponses: ['ました'], mauvaises_reponses: ['ます', 'ません', 'ませんでした'] },
      { type: 'trou', enonce_fr: 'Je n\'ai pas trouvé la gare.', enonce_jp: 'えきをみつけ___。', romaji_jp: 'eki o mitsuke___.', trou: '___', bonnes_reponses: ['られませんでした', 'ませんでした'], mauvaises_reponses: ['ました', 'ます', 'ません'] },
    ],
  },

  {
    id: 'conj_teimasu',
    section: 'conjugaison',
    section_label: 'Conjugaison',
    titre: '〜ています — progressif / état continu',
    resume: 'Deux sens : (1) action en cours "je suis en train de…", (2) état résultant "je vis à / je suis marié…". La forme て du verbe + います.',
    forme: '〔verbe-て〕います',
    romaji_forme: '[verbe-te] imasu',
    niveau: 2,
    piege: 'すんでいます (je vis à) n\'exprime pas une action en cours mais un état permanent — les deux sens coexistent.',
    astuces: '"ています = snapshot ou état" — soit la photo d\'une action en cours, soit une réalité stable.',
    modeles: [
      { base: 'たべる', te_form: 'たべて', teimasu: 'たべています', fr: 'être en train de manger' },
      { base: 'のむ',   te_form: 'のんで', teimasu: 'のんでいます', fr: 'être en train de boire' },
      { base: 'すむ',   te_form: 'すんで', teimasu: 'すんでいます', fr: 'habiter (état)' },
      { base: 'けっこんする', te_form: 'けっこんして', teimasu: 'けっこんしています', fr: 'être marié' },
    ],
    examples: [
      { jp: 'いま、なにをしていますか？', romaji: 'Ima, nani o shite imasu ka?', fr: 'Qu\'est-ce que vous faites en ce moment ?' },
      { jp: 'にほんごをべんきょうしています。', romaji: 'Nihongo o benkyō shite imasu.', fr: 'Je suis en train d\'étudier le japonais.' },
      { jp: 'フランスのリヨンにすんでいます。', romaji: 'Furansu no Riyon ni sunde imasu.', fr: 'J\'habite à Lyon, en France.' },
      { jp: 'けっこんしています。', romaji: 'Kekkon shite imasu.', fr: 'Je suis marié(e).' },
    ],
    exercices: [
      { type: 'trou', enonce_fr: 'J\'étudie le japonais (en ce moment).', enonce_jp: 'にほんごをべんきょうし___。', romaji_jp: 'nihongo o benkyō shi___.', trou: '___', bonnes_reponses: ['ています'], mauvaises_reponses: ['ます', 'ました', 'てみます'] },
      { type: 'traduction', enonce_fr: 'J\'habite en France.', bonnes_reponses: ['フランスにすんでいます。'], mauvaises_reponses: [] },
    ],
  },

  {
    id: 'conj_tai',
    section: 'conjugaison',
    section_label: 'Conjugaison',
    titre: '〜たいです — vouloir faire',
    resume: 'Exprime un désir personnel. Se construit sur le radical ます (enlever ます, ajouter たいです). S\'utilise uniquement pour ses propres désirs.',
    forme: '〔radical-ます〕たいです',
    romaji_forme: '[radical]tai desu',
    niveau: 1,
    piege: 'たいです ne s\'utilise que pour SOI-MÊME — pour parler des désirs d\'autrui, utiliser たがっています.',
    astuces: '"たいです = envie du cœur" — parfait pour exprimer ses souhaits de voyage !',
    modeles: [
      { masu: 'たべます', tai: 'たべたいです', fr: 'vouloir manger' },
      { masu: 'いきます', tai: 'いきたいです', fr: 'vouloir aller' },
      { masu: 'みます',   tai: 'みたいです',   fr: 'vouloir voir' },
      { masu: 'のみます', tai: 'のみたいです', fr: 'vouloir boire' },
      { masu: 'かいます', tai: 'かいたいです', fr: 'vouloir acheter' },
    ],
    examples: [
      { jp: 'おんせんにはいりたいです！', romaji: 'Onsen ni hairitai desu!', fr: 'Je veux entrer dans un onsen !' },
      { jp: 'ふじさんをみたいです。', romaji: 'Fujisan o mitai desu.', fr: 'Je veux voir le mont Fuji.' },
      { jp: 'まっちゃアイスをたべたいです。', romaji: 'Matcha aisu o tabetai desu.', fr: 'Je veux manger une glace au matcha.' },
      { jp: 'にほんにまたきたいです！', romaji: 'Nihon ni mata kitai desu!', fr: 'Je veux revenir au Japon !' },
    ],
    exercices: [
      { type: 'trou', enonce_fr: 'Je veux voir le mont Fuji.', enonce_jp: 'ふじさんをみ___。', romaji_jp: 'Fujisan o mi___.', trou: '___', bonnes_reponses: ['たいです'], mauvaises_reponses: ['ています', 'ました', 'てみます'] },
      { type: 'construction', enonce_fr: 'Je veux aller à Kyoto.', bonnes_reponses: ['きょうとにいきたいです。'], mauvaises_reponses: [] },
    ],
  },

  {
    id: 'conj_koto_ga_dekimasu',
    section: 'conjugaison',
    section_label: 'Conjugaison',
    titre: '〜ことができます — pouvoir / être capable de',
    resume: 'Exprime la capacité ou la permission. Se construit avec la forme dictionnaire du verbe + ことができます. Version courante : verbe potentiel + ます.',
    forme: '〔verbe-dict〕ことができます',
    romaji_forme: '[verbe-dict] koto ga dekimasu',
    niveau: 2,
    piege: 'La version courte existe : はなせます (= je peux parler) ≈ はなすことができます. Les deux sont correctes.',
    astuces: '"koto ga dekimasu = la chose est faisable" — koto nominalise le verbe.',
    examples: [
      { jp: 'にほんごがすこしはなすことができます。', romaji: 'Nihongo ga sukoshi hanasu koto ga dekimasu.', fr: 'Je peux parler un peu japonais.' },
      { jp: 'クレジットカードをつかうことができますか？', romaji: 'Kurejitto kādo o tsukau koto ga dekimasu ka?', fr: 'Peut-on utiliser une carte de crédit ?' },
      { jp: 'しゃしんをとることができますか？', romaji: 'Shashin o toru koto ga dekimasu ka?', fr: 'Peut-on prendre des photos ?' },
    ],
    exercices: [
      { type: 'trou', enonce_fr: 'Peut-on prendre des photos ?', enonce_jp: 'しゃしんをとること___ますか？', romaji_jp: 'shashin o toru koto ___ masu ka?', trou: '___', bonnes_reponses: ['ができ'], mauvaises_reponses: ['をし', 'にし', 'はし'] },
    ],
  },

  {
    id: 'conj_temimasu',
    section: 'conjugaison',
    section_label: 'Conjugaison',
    titre: '〜てみます — essayer de faire',
    resume: 'Exprime l\'essai, la tentative. "Je vais essayer de…" — みる (voir) employé de façon figurée : "voir ce que ça donne".',
    forme: '〔verbe-て〕みます',
    romaji_forme: '[verbe-te] mimasu',
    niveau: 2,
    piege: 'みます ici ne signifie pas "regarder" mais "essayer de voir" — sens figuratif.',
    astuces: '"てみます = goûter à" — parfait pour les aventuriers culinaires et culturels !',
    examples: [
      { jp: 'このりょうりをたべてみます。', romaji: 'Kono ryōri o tabete mimasu.', fr: 'Je vais goûter ce plat.' },
      { jp: 'ゆかたをきてみたいです。', romaji: 'Yukata o kite mitai desu.', fr: 'Je veux essayer le yukata.' },
      { jp: 'にほんごではなしてみます。', romaji: 'Nihongo de hanashite mimasu.', fr: 'Je vais essayer de parler japonais.' },
      { jp: 'このさけをのんでみてください。', romaji: 'Kono sake o nonde mite kudasai.', fr: 'Goûtez ce saké, s\'il vous plaît.' },
    ],
    exercices: [
      { type: 'trou', enonce_fr: 'Je vais goûter ce plat.', enonce_jp: 'このりょうりをたべ___。', romaji_jp: 'kono ryōri o tabe___.', trou: '___', bonnes_reponses: ['てみます'], mauvaises_reponses: ['ます', 'ました', 'たいです'] },
    ],
  },

  {
    id: 'conj_teshimaimashita',
    section: 'conjugaison',
    section_label: 'Conjugaison',
    titre: '〜てしまいました — avoir fait (regret / achèvement)',
    resume: 'Exprime un achèvement avec nuance de regret ou de surprise. "J\'ai (malheureusement) fait…" ou "C\'est fait (sans retour possible)".',
    forme: '〔verbe-て〕しまいました',
    romaji_forme: '[verbe-te] shimaimashita',
    niveau: 2,
    piege: 'Pas toujours du regret — parfois simple achèvement définitif. Le contexte décide.',
    astuces: 'Version parlée : 〜ちゃった (tabechatta = j\'ai tout mangé par inadvertance) — à éviter en contexte formel.',
    examples: [
      { jp: 'さいふをわすれてしまいました。', romaji: 'Saifu o wasurete shimaimashita.', fr: 'J\'ai oublié mon portefeuille (hélas).' },
      { jp: 'でんしゃにのりおくれてしまいました。', romaji: 'Densha ni noriokurete shimaimashita.', fr: 'J\'ai raté le train (à mon grand regret).' },
      { jp: 'さけをのみすぎてしまいました。', romaji: 'Sake o nomisugite shimaimashita.', fr: 'J\'ai trop bu de saké (malheureuement).' },
    ],
    exercices: [
      { type: 'trou', enonce_fr: 'J\'ai oublié mon portefeuille.', enonce_jp: 'さいふをわすれて___。', romaji_jp: 'saifu o wasurete___.', trou: '___', bonnes_reponses: ['しまいました'], mauvaises_reponses: ['います', 'みます', 'ました'] },
    ],
  },

  {
    id: 'conj_ta_koto_ga_arimasu',
    section: 'conjugaison',
    section_label: 'Conjugaison',
    titre: '〜たことがあります — avoir déjà fait (expérience)',
    resume: 'Exprime une expérience passée : "j\'ai déjà fait…". Forme passée du verbe + ことがあります.',
    forme: '〔verbe-た〕ことがあります',
    romaji_forme: '[verbe-ta] koto ga arimasu',
    niveau: 2,
    piege: 'Utiliser la forme た (passé court), pas ました.',
    astuces: '"〜たことがあります = j\'ai une expérience de…" — parfait pour les conversations sur vos voyages !',
    examples: [
      { jp: 'にほんにいったことがあります。', romaji: 'Nihon ni itta koto ga arimasu.', fr: 'Je suis déjà allé au Japon.' },
      { jp: 'わぎゅうをたべたことがありますか？', romaji: 'Wagyū o tabeta koto ga arimasu ka?', fr: 'Avez-vous déjà mangé du wagyu ?' },
      { jp: 'きものをきたことがあります。', romaji: 'Kimono o kita koto ga arimasu.', fr: 'J\'ai déjà porté un kimono.' },
    ],
    exercices: [
      { type: 'trou', enonce_fr: 'Je suis déjà allé au Japon.', enonce_jp: 'にほんにいった___があります。', romaji_jp: 'Nihon ni itta ___ ga arimasu.', trou: '___', bonnes_reponses: ['こと'], mauvaises_reponses: ['もの', 'ので', 'から'] },
    ],
  },

  // ══════════════════════════════════════════════════════════════
  //  SECTION 4 — FORMATION DES PHRASES
  // ══════════════════════════════════════════════════════════════

  {
    id: 'phrase_sov',
    section: 'phrases',
    section_label: 'Formation des phrases',
    titre: 'Structure de base : SOV (Sujet - Objet - Verbe)',
    resume: 'En japonais, le verbe est TOUJOURS en fin de phrase. Les modificateurs (adverbes, compléments) se placent avant ce qu\'ils modifient. La négation et le temps se marquent sur le verbe final.',
    forme: '〔sujet〕は〔compléments〕〔objet〕を〔verbe〕',
    romaji_forme: '[sujet] wa [compléments] [objet] o [verbe]',
    niveau: 1,
    piege: 'Ne pas mettre le verbe au milieu ou au début de la phrase — il va TOUJOURS à la fin.',
    astuces: 'Pensez à Yoda : "Le saké, je bois." — en japonais, Yoda aurait toujours raison !',
    examples: [
      { jp: 'わたしはきょうきょうとでさけをのみました。', romaji: 'Watashi wa kyō Kyōto de sake o nomimashita.', fr: 'Aujourd\'hui à Kyoto, j\'ai bu du saké.' },
      { jp: 'つまはにほんのりょうりがすきです。', romaji: 'Tsuma wa Nihon no ryōri ga suki desu.', fr: 'Ma femme aime la cuisine japonaise.' },
      { jp: 'ゆっくりはなしてください。', romaji: 'Yukkuri hanashite kudasai.', fr: 'Parlez lentement, s\'il vous plaît.' },
    ],
    exercices: [
      { type: 'construction', enonce_fr: 'Remet dans l\'ordre : [さけを / きのう / わたしは / のみました]', bonnes_reponses: ['わたしはきのうさけをのみました。'], mauvaises_reponses: [] },
    ],
  },

  {
    id: 'phrase_question',
    section: 'phrases',
    section_label: 'Formation des phrases',
    titre: 'Former une question',
    resume: 'Ajouter か en fin de phrase polie. Avec un mot interrogatif (nani, doko, dare, itsu, dō, ikura, ikutsu), le mot interrogatif prend la place du mot inconnu dans la phrase.',
    forme: '〔phrase〕か？ / 〔mot interrogatif〕〔phrase〕か？',
    romaji_forme: '[phrase] ka? / [interrogatif] [phrase] ka?',
    niveau: 1,
    piege: 'Pas d\'inversion sujet-verbe ! La structure de la phrase ne change pas, on ajoute juste か.',
    astuces: '"Mot interrogatif = remplacement du mot inconnu" — comme une variable dans un programme.',
    tableau_interrogatifs: [
      { jp: 'なに / なん', romaji: 'nani / nan', fr: 'quoi ? (nan devant desu/des sons doux)' },
      { jp: 'どこ',  romaji: 'doko',  fr: 'où ?' },
      { jp: 'だれ',  romaji: 'dare',  fr: 'qui ?' },
      { jp: 'いつ',  romaji: 'itsu',  fr: 'quand ?' },
      { jp: 'どう',  romaji: 'dō',    fr: 'comment ?' },
      { jp: 'いくら',romaji: 'ikura', fr: 'combien (prix) ?' },
      { jp: 'いくつ',romaji: 'ikutsu',fr: 'combien (quantité/âge) ?' },
      { jp: 'なぜ / どうして', romaji: 'naze / dōshite', fr: 'pourquoi ?' },
    ],
    examples: [
      { jp: 'おてあらいはどこですか？', romaji: 'Otearai wa doko desu ka?', fr: 'Où sont les toilettes ?' },
      { jp: 'これはなんですか？', romaji: 'Kore wa nan desu ka?', fr: 'Qu\'est-ce que c\'est ?' },
      { jp: 'いつにほんにきましたか？', romaji: 'Itsu Nihon ni kimashita ka?', fr: 'Quand êtes-vous venu au Japon ?' },
      { jp: 'このさけはいくらですか？', romaji: 'Kono sake wa ikura desu ka?', fr: 'Combien coûte ce saké ?' },
    ],
    exercices: [
      { type: 'traduction', enonce_fr: 'Où sont les toilettes ?', bonnes_reponses: ['おてあらいはどこですか？', 'トイレはどこですか？'], mauvaises_reponses: [] },
      { type: 'traduction', enonce_fr: 'Combien coûte ce saké ?', bonnes_reponses: ['このさけはいくらですか？'], mauvaises_reponses: [] },
    ],
  },

  {
    id: 'phrase_negation',
    section: 'phrases',
    section_label: 'Formation des phrases',
    titre: 'La négation',
    resume: 'La négation se marque sur le verbe ou l\'adjectif en fin de phrase. Présent négatif : 〜ません. Passé négatif : 〜ませんでした. Pour です : ではありません.',
    forme: '〜ません / 〜ませんでした / ではありません',
    romaji_forme: '~masen / ~masen deshita / dewa arimasen',
    niveau: 1,
    piege: 'ではありません = pas de l\'identité. ≠ ありません qui signifie "il n\'y a pas".',
    astuces: 'Mémo simple : ます→ません (présent) / ました→ませんでした (passé) / です→ではありません.',
    examples: [
      { jp: 'にほんごがわかりません。', romaji: 'Nihongo ga wakarimasen.', fr: 'Je ne comprends pas le japonais.' },
      { jp: 'それはちがいます。', romaji: 'Sore wa chigaimasu.', fr: 'Ce n\'est pas ça. (C\'est différent.)' },
      { jp: 'わたしはにほんじんではありません。フランスじんです。', romaji: 'Watashi wa Nihonjin dewa arimasen. Furansujin desu.', fr: 'Je ne suis pas Japonais. Je suis Français.' },
      { jp: 'きのうはたべませんでした。', romaji: 'Kinō wa tabemasen deshita.', fr: 'Hier je n\'ai pas mangé.' },
    ],
    exercices: [
      { type: 'trou', enonce_fr: 'Je ne comprends pas le japonais.', enonce_jp: 'にほんごがわかり___。', romaji_jp: 'nihongo ga wakari___.', romaji_jp: 'nihongo ga wakari___.', trou: '___', bonnes_reponses: ['ません'], mauvaises_reponses: ['ます', 'ません deshita', 'ました'] },
      { type: 'traduction', enonce_fr: 'Je ne suis pas Japonais.', bonnes_reponses: ['わたしはにほんじんではありません。', 'にほんじんではありません。'], mauvaises_reponses: [] },
    ],
  },

  {
    id: 'phrase_liaison',
    section: 'phrases',
    section_label: 'Formation des phrases',
    titre: 'Liaison de phrases — て、から、けど',
    resume: 'Trois connecteurs essentiels : て (et/puis, même sujet), から (parce que / donc), けど/が (mais).',
    forme: '〔phrase1〕て〔phrase2〕 / 〔raison〕から〔résultat〕 / 〔phrase1〕けど〔phrase2〕',
    romaji_forme: '[phrase1] te [phrase2] / [raison] kara [résultat] / [phrase1] kedo [phrase2]',
    niveau: 2,
    piege: 'La forme て enchaîne des actions du MÊME sujet. Pour des sujets différents, utiliser d\'autres constructions.',
    astuces: 'て = et puis ; から = donc/parce que ; けど = mais (plus doux que が).',
    examples: [
      { jp: 'えきにいって、でんしゃにのります。', romaji: 'Eki ni itte, densha ni norimasu.', fr: 'Je vais à la gare et je prends le train.' },
      { jp: 'おなかがすいたから、たべましょう。', romaji: 'Onaka ga suita kara, tabemasho.', fr: 'J\'ai faim, alors mangeons.' },
      { jp: 'たかいけど、かいたいです。', romaji: 'Takai kedo, kaitai desu.', fr: 'C\'est cher, mais je veux l\'acheter.' },
      { jp: 'すみませんが、えきはどこですか？', romaji: 'Sumimasen ga, eki wa doko desu ka?', fr: 'Excusez-moi, mais où est la gare ?' },
    ],
    exercices: [
      { type: 'trou', enonce_fr: 'C\'est cher, mais je veux l\'acheter.', enonce_jp: 'たかい___、かいたいです。', romaji_jp: 'takai ___, kaitai desu.', trou: '___', bonnes_reponses: ['けど', 'が'], mauvaises_reponses: ['から', 'て', 'も'] },
    ],
  },

  {
    id: 'phrase_comparatif',
    section: 'phrases',
    section_label: 'Formation des phrases',
    titre: 'Comparatif et superlatif',
    resume: 'Comparatif : A は B より adj. Superlatif : いちばん + adjectif. Pour exprimer une préférence : A より B のほうがすきです.',
    forme: '〔A〕は〔B〕より〔adj〕/ いちばん〔adj〕',
    romaji_forme: '[A] wa [B] yori [adj] / ichiban [adj]',
    niveau: 2,
    piege: 'Ichiban (いちばん) = "le numéro 1" — toujours avant l\'adjectif.',
    astuces: '"いちばん = champion !" — le mot des superlatifs absolus en japonais.',
    examples: [
      { jp: 'きょうはきのうよりさむいです。', romaji: 'Kyō wa kinō yori samui desu.', fr: 'Aujourd\'hui il fait plus froid qu\'hier.' },
      { jp: 'にほんのりょうりはいちばんおいしいです！', romaji: 'Nihon no ryōri wa ichiban oishii desu!', fr: 'La cuisine japonaise est la meilleure !' },
      { jp: 'ビールよりさけのほうがすきです。', romaji: 'Bīru yori sake no hō ga suki desu.', fr: 'Je préfère le saké à la bière.' },
    ],
    exercices: [
      { type: 'trou', enonce_fr: 'La cuisine japonaise est la meilleure !', enonce_jp: 'にほんのりょうりは___おいしいです！', romaji_jp: 'Nihon no ryōri wa ___ oishii desu!', trou: '___', bonnes_reponses: ['いちばん'], mauvaises_reponses: ['より', 'もっと', 'とても'] },
    ],
  },

  // ══════════════════════════════════════════════════════════════
  //  SECTION 5 — ADJECTIFS
  // ══════════════════════════════════════════════════════════════

  {
    id: 'adj_i',
    section: 'adjectifs',
    section_label: 'Adjectifs',
    titre: 'Adjectifs en -い (i-adjectifs)',
    resume: 'Les i-adjectifs se terminent par い. Ils se conjuguent directement. Présent : 〜い. Passé : 〜かった. Négatif présent : 〜くない. Négatif passé : 〜くなかった.',
    forme: '〜い / 〜かった / 〜くない / 〜くなかった',
    romaji_forme: '~i / ~katta / ~kunai / ~kunakatta',
    niveau: 1,
    piege: 'いい (bon) est irrégulier : passé = よかった (pas いかった !). Négatif = よくない.',
    astuces: 'Exception capitale : いい → よかった. À retenir absolument !',
    modeles: [
      { dict: 'おいしい', passe: 'おいしかった', neg: 'おいしくない', neg_passe: 'おいしくなかった', fr: 'délicieux' },
      { dict: 'たかい',  passe: 'たかかった',  neg: 'たかくない',  neg_passe: 'たかくなかった',  fr: 'cher/haut' },
      { dict: 'あつい',  passe: 'あつかった',  neg: 'あつくない',  neg_passe: 'あつくなかった',  fr: 'chaud' },
      { dict: 'いい',    passe: 'よかった',    neg: 'よくない',    neg_passe: 'よくなかった',    fr: 'bien/bon (IRRÉGULIER)' },
    ],
    examples: [
      { jp: 'このすしはおいしかったです！', romaji: 'Kono sushi wa oishikatta desu!', fr: 'Ces sushis étaient délicieux !' },
      { jp: 'きのうはあつくなかったです。', romaji: 'Kinō wa atsuku nakatta desu.', fr: 'Hier il ne faisait pas chaud.' },
      { jp: 'にほんのたびはよかったです！', romaji: 'Nihon no tabi wa yokatta desu!', fr: 'Le voyage au Japon était super !' },
    ],
    exercices: [
      { type: 'trou', enonce_fr: 'Ces sushis étaient délicieux !', enonce_jp: 'このすしはおいし___です！', romaji_jp: 'kono sushi wa oishi___ desu!', trou: '___', bonnes_reponses: ['かった'], mauvaises_reponses: ['い', 'くない', 'くなかった'] },
      { type: 'trou', enonce_fr: 'Le voyage était super ! (いい → passé)', enonce_jp: 'たびは___です！', romaji_jp: 'tabi wa ___ desu!', trou: '___', bonnes_reponses: ['よかった'], mauvaises_reponses: ['いかった', 'よい', 'いい'] },
    ],
  },

  {
    id: 'adj_na',
    section: 'adjectifs',
    section_label: 'Adjectifs',
    titre: 'Adjectifs en -な (na-adjectifs)',
    resume: 'Les na-adjectifs fonctionnent comme des noms. Devant un nom : 〜な + nom. En prédicat : 〜です/でした/ではありません. Ne se conjuguent pas directement.',
    forme: '〔na-adj〕な〔nom〕 / 〔na-adj〕です',
    romaji_forme: '[na-adj] na [nom] / [na-adj] desu',
    niveau: 1,
    piege: 'Na-adjectifs ≠ i-adjectifs : pas de conjugaison directe — on utilise です/でした/ではありません.',
    astuces: '"な = le colle-tout" — il colle l\'adjectif au nom comme une particule spéciale.',
    modeles: [
      { dict: 'きれい', na_form: 'きれいな', fr: 'beau/joli/propre' },
      { dict: 'しずか', na_form: 'しずかな', fr: 'calme/tranquille' },
      { dict: 'すき',   na_form: 'すきな',   fr: 'aimé, favori' },
      { dict: 'げんき', na_form: 'げんきな', fr: 'en forme/dynamique' },
      { dict: 'たいへん',na_form: 'たいへんな',fr: 'difficile/grave' },
    ],
    examples: [
      { jp: 'きれいなおてらですね。', romaji: 'Kirei na otera desu ne.', fr: 'C\'est un beau temple, n\'est-ce pas ?' },
      { jp: 'このまちはしずかです。', romaji: 'Kono machi wa shizuka desu.', fr: 'Cette ville est calme.' },
      { jp: 'おげんきですか？', romaji: 'Ogenki desu ka?', fr: 'Comment allez-vous ? (Êtes-vous en forme ?)' },
      { jp: 'すきなたべものはなんですか？', romaji: 'Suki na tabemono wa nan desu ka?', fr: 'Quel est votre plat préféré ?' },
    ],
    exercices: [
      { type: 'trou', enonce_fr: 'C\'est un beau temple.', enonce_jp: 'きれい___ おてらです。', romaji_jp: 'kirei ___ otera desu.', trou: '___', bonnes_reponses: ['な'], mauvaises_reponses: ['い', 'の', 'に'] },
      { type: 'traduction', enonce_fr: 'Quel est votre plat préféré ?', bonnes_reponses: ['すきなたべものはなんですか？'], mauvaises_reponses: [] },
    ],
  },

  // ══════════════════════════════════════════════════════════════
  //  SECTION 6 — COMPTEURS
  // ══════════════════════════════════════════════════════════════

  {
    id: 'compteurs_intro',
    section: 'compteurs',
    section_label: 'Compteurs',
    titre: 'Les compteurs — vue d\'ensemble',
    resume: 'En japonais, on ne dit pas simplement "3" objets — on utilise un compteur adapté à la catégorie d\'objet. Chaque type d\'objet a son compteur. L\'universel ひとつ/ふたつ… (jusqu\'à 10) fonctionne pour tout.',
    forme: '〔nombre〕+ 〔compteur〕',
    romaji_forme: '[nombre] + [compteur]',
    niveau: 1,
    piege: 'Les compteurs peuvent modifier la prononciation des chiffres : 1本 = いっぽん (pas いちほん).',
    astuces: 'En cas de doute, utilisez ひとつ/ふたつ/みっつ — ça marche toujours même si ce n\'est pas précis.',
    tableau_compteurs: [
      { compteur: '〜人 (にん/り)', romaji: '~nin/ri', usage: 'Personnes', exceptions: '1人=ひとり, 2人=ふたり' },
      { compteur: '〜本 (ほん)', romaji: '~hon', usage: 'Objets longs (bouteilles, baguettes, crayons)', exceptions: '1本=いっぽん, 3本=さんぼん, 6本=ろっぽん' },
      { compteur: '〜枚 (まい)', romaji: '~mai', usage: 'Objets plats (billets, tickets, feuilles)', exceptions: 'Régulier : いちまい, にまい…' },
      { compteur: '〜杯 (はい)', romaji: '~hai', usage: 'Liquides dans un récipient (verres, bols)', exceptions: '1杯=いっぱい, 3杯=さんばい' },
      { compteur: '〜個 (こ)', romaji: '~ko', usage: 'Petits objets ronds (fruits, bonbons)', exceptions: 'Régulier' },
      { compteur: '〜台 (だい)', romaji: '~dai', usage: 'Machines, appareils, véhicules', exceptions: 'Régulier' },
      { compteur: '〜冊 (さつ)', romaji: '~satsu', usage: 'Livres, cahiers', exceptions: 'Régulier' },
      { compteur: '〜匹 (ひき)', romaji: '~hiki', usage: 'Petits animaux', exceptions: '1匹=いっぴき, 6匹=ろっぴき' },
      { compteur: '〜階 (かい)', romaji: '~kai', usage: 'Étages', exceptions: '1階=いっかい, 3階=さんがい' },
    ],
    examples: [
      { jp: 'にほんしゅをにほんおねがいします。', romaji: 'Nihonshu o nihon onegai shimasu.', fr: 'Deux verres de saké, s\'il vous plaît.' },
      { jp: 'きっぷをいちまいください。', romaji: 'Kippu o ichi-mai kudasai.', fr: 'Un billet, s\'il vous plaît.' },
      { jp: 'ふたりです。', romaji: 'Futari desu.', fr: 'Nous sommes deux (personnes).' },
      { jp: 'さんがいにレストランがあります。', romaji: 'Sangai ni resutoran ga arimasu.', fr: 'Il y a un restaurant au 3e étage.' },
      { jp: 'このりんごをみっつください。', romaji: 'Kono ringo o mittsu kudasai.', fr: 'Trois de ces pommes, s\'il vous plaît.' },
    ],
    exercices: [
      { type: 'choix', enonce_fr: 'Un billet (objet plat)', enonce_jp: 'きっぷをいち___ください。', romaji_jp: 'kippu o ichi ___ kudasai.', trou: '___', bonnes_reponses: ['まい'], mauvaises_reponses: ['ほん', 'こ', 'はい'] },
      { type: 'choix', enonce_fr: 'Deux personnes', enonce_jp: '___です。', romaji_jp: '___ desu.', trou: '___', bonnes_reponses: ['ふたり'], mauvaises_reponses: ['にほん', 'にまい', 'にこ'] },
      { type: 'traduction', enonce_fr: 'Trois verres de bière, s\'il vous plaît.', bonnes_reponses: ['ビールをさんはいおねがいします。', 'ビールをさんばいください。'], mauvaises_reponses: [] },
    ],
  },

];

// ══════════════════════════════════════════════════════════════
//  MÉTADONNÉES
// ══════════════════════════════════════════════════════════════

const GRAMMAIRE_META = {
  pack: 'grammaire',
  label: 'Grammaire',
  icon: '📐',
  version: '1.0 — 2026-04-17',
  sections: {
    particules:     { label: 'Particules',            icon: '⟡',  color: '#1e3a5f', count: 10 },
    demonstratifs:  { label: 'Démonstratifs',         icon: '👉', color: '#2a7a6e', count: 2  },
    conjugaison:    { label: 'Conjugaison',           icon: '⚡', color: '#5a4a1a', count: 8  },
    phrases:        { label: 'Formation des phrases', icon: '🔤', color: '#6b3a6b', count: 4  },
    adjectifs:      { label: 'Adjectifs',             icon: '✎',  color: '#3a5a3a', count: 2  },
    compteurs:      { label: 'Compteurs',             icon: '🔢', color: '#2a4a6e', count: 1  },
  },
  niveaux: {
    1: { label: 'Essentiel — indispensable en voyage',    color: '#2a7a6e' },
    2: { label: 'Intermédiaire — pour aller plus loin',  color: '#5a4a1a' },
    3: { label: 'Avancé — pour briller en conversation', color: '#6b3a1a' },
  },
  // Types d'exercices disponibles
  types_exercices: {
    trou:          'Compléter le trou dans la phrase',
    choix:         'Choisir la bonne particule/forme parmi 4',
    traduction:    'Traduire une phrase du français vers le japonais',
    construction:  'Remettre des mots dans le bon ordre',
  },
};

// Helpers pour les exercices à la volée
const GRAMMAIRE_HELPERS = {

  // Retourne toutes les règles d'une section
  getSection(sectionId) {
    return GRAMMAIRE_2028.filter(r => r.section === sectionId);
  },

  // Retourne toutes les règles d'un niveau
  getNiveau(n) {
    return GRAMMAIRE_2028.filter(r => r.niveau === n);
  },

  // Retourne toutes les règles qui ont des exercices
  getAvecExercices() {
    return GRAMMAIRE_2028.filter(r => r.exercices && r.exercices.length > 0);
  },

  // Retourne N exercices aléatoires d'une section (ou de tout si sectionId = null)
  getExercicesAleatoires(n = 5, sectionId = null, typeExo = null) {
    let pool = this.getAvecExercices();
    if (sectionId) pool = pool.filter(r => r.section === sectionId);
    // Aplatir tous les exercices
    let exos = [];
    pool.forEach(regle => {
      regle.exercices.forEach(exo => {
        if (!typeExo || exo.type === typeExo) {
          exos.push({ ...exo, regle_id: regle.id, regle_titre: regle.titre, section: regle.section });
        }
      });
    });
    // Mélanger et retourner n
    for (let i = exos.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [exos[i], exos[j]] = [exos[j], exos[i]];
    }
    return exos.slice(0, n);
  },

  // Génère des choix multiples pour un exercice de type 'choix' ou 'trou'
  genererChoixMultiples(exo, nbChoix = 4) {
    const bonnes = exo.bonnes_reponses || [];
    const mauvaises = exo.mauvaises_reponses || [];
    let choix = [...bonnes.slice(0, 1)];
    // Compléter avec les mauvaises
    const pool = [...mauvaises];
    while (choix.length < nbChoix && pool.length > 0) {
      const idx = Math.floor(Math.random() * pool.length);
      choix.push(pool.splice(idx, 1)[0]);
    }
    // Mélanger
    for (let i = choix.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [choix[i], choix[j]] = [choix[j], choix[i]];
    }
    return choix;
  },

  // Vérifie si une réponse est correcte
  verifierReponse(exo, reponse) {
    const r = (reponse || '').trim().toLowerCase();
    return (exo.bonnes_reponses || []).some(b => b.trim().toLowerCase() === r);
  },

};

if (typeof module !== 'undefined') module.exports = { GRAMMAIRE_2028, GRAMMAIRE_META, GRAMMAIRE_HELPERS };
