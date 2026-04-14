// ╔══════════════════════════════════════════════════════════╗
// ║  PACK 2 — QUOTIDIEN                                      ║
// ║  Thèmes : Corps, Famille, Météo, Couleurs, Adjectifs,    ║
// ║           Verbes, Nourriture, Lieux, Émotions            ║
// ╚══════════════════════════════════════════════════════════╝

const THEMES_QUOTIDIEN = [
  { id:'corps',      label:'Corps',      icon:'🧍', color:'#5a3a6b', pack:'quotidien' },
  { id:'famille',    label:'Famille',    icon:'👨‍👩‍👧', color:'#6b4a1a', pack:'quotidien' },
  { id:'meteo',      label:'Météo',      icon:'🌤', color:'#2a5a7a', pack:'quotidien' },
  { id:'couleurs',   label:'Couleurs',   icon:'🎨', color:'#7a2a5a', pack:'quotidien' },
  { id:'adjectifs',  label:'Adjectifs',  icon:'✎',  color:'#3a5a3a', pack:'quotidien' },
  { id:'verbes',     label:'Verbes',     icon:'⚡', color:'#5a4a1a', pack:'quotidien' },
  { id:'nourriture', label:'Nourriture', icon:'🍱', color:'#8a3a1a', pack:'quotidien' },
  { id:'lieux',      label:'Lieux',      icon:'📍', color:'#1a4a5a', pack:'quotidien' },
  { id:'emotions',   label:'Émotions',   icon:'💭', color:'#5a1a5a', pack:'quotidien' },
];

const CARDS_QUOTIDIEN = [

  // ══════════════════════════════════════
  //  CORPS HUMAIN
  // ══════════════════════════════════════
  { theme:'corps', level:1, kana:'からだ',   romaji:'karada',   fr:'corps', kanji:'体' },
  { theme:'corps', level:1, kana:'あたま',   romaji:'atama',    fr:'tête', kanji:'頭' },
  { theme:'corps', level:1, kana:'かお',     romaji:'kao',      fr:'visage', kanji:'顔' },
  { theme:'corps', level:1, kana:'め',       romaji:'me',       fr:'œil / yeux', kanji:'目' },
  { theme:'corps', level:1, kana:'みみ',     romaji:'mimi',     fr:'oreille', kanji:'耳' },
  { theme:'corps', level:1, kana:'はな',     romaji:'hana',     fr:'nez', kanji:'鼻' },
  { theme:'corps', level:1, kana:'くち',     romaji:'kuchi',    fr:'bouche', kanji:'口' },
  { theme:'corps', level:1, kana:'は',       romaji:'ha',       fr:'dent', kanji:'歯' },
  { theme:'corps', level:1, kana:'くび',     romaji:'kubi',     fr:'cou', kanji:'首' },
  { theme:'corps', level:1, kana:'かた',     romaji:'kata',     fr:'épaule', kanji:'肩' },
  { theme:'corps', level:1, kana:'て',       romaji:'te',       fr:'main', kanji:'手' },
  { theme:'corps', level:1, kana:'うで',     romaji:'ude',      fr:'bras', kanji:'腕' },
  { theme:'corps', level:1, kana:'ゆび',     romaji:'yubi',     fr:'doigt', kanji:'指' },
  { theme:'corps', level:1, kana:'おなか',   romaji:'onaka',    fr:'ventre', kanji:'お腹' },
  { theme:'corps', level:1, kana:'せなか',   romaji:'senaka',   fr:'dos', kanji:'背中' },
  { theme:'corps', level:1, kana:'あし',     romaji:'ashi',     fr:'pied / jambe', kanji:'足' },
  { theme:'corps', level:1, kana:'ひざ',     romaji:'hiza',     fr:'genou', kanji:'膝' },
  { theme:'corps', level:2, kana:'のどがいたい',   romaji:'nodo ga itai',    fr:'j\'ai mal à la gorge', kanji:'喉が痛い' },
  { theme:'corps', level:2, kana:'せきがでます',   romaji:'seki ga demasu',  fr:'je tousse', kanji:'咳が出ます' },
  { theme:'corps', level:2, kana:'はながつまっています', romaji:'hana ga tsumatte imasu', fr:'j\'ai le nez bouché', kanji:'鼻が詰まっています' },
  { theme:'corps', level:2, kana:'かゆい',         romaji:'kayui',           fr:'ça démange / j\'ai des démangeaisons', kanji:'痒い' },
  { theme:'corps', level:3, kana:'けつあつをはかってください', romaji:'ketsuatsu o hakatte kudasai', fr:'prenez ma tension artérielle s.v.p.', kanji:'血圧を測ってください' },
  { theme:'corps', level:3, kana:'アレルギーはっしんがあります', romaji:'arerugī hasshin ga arimasu', fr:'j\'ai une éruption allergique', kanji:'アレルギー発疹があります' },

  // ══════════════════════════════════════
  //  FAMILLE
  // ══════════════════════════════════════
  { theme:'famille', level:1, kana:'かぞく',   romaji:'kazoku',   fr:'famille', kanji:'家族' },
  { theme:'famille', level:1, kana:'ちち',     romaji:'chichi',   fr:'père (le mien)', kanji:'父' },
  { theme:'famille', level:1, kana:'はは',     romaji:'haha',     fr:'mère (la mienne)', kanji:'母' },
  { theme:'famille', level:1, kana:'おとうさん',romaji:'otōsan',   fr:'père (le vôtre / poli)', kanji:'お父さん' },
  { theme:'famille', level:1, kana:'おかあさん',romaji:'okāsan',   fr:'mère (la vôtre / poli)', kanji:'お母さん' },
  { theme:'famille', level:1, kana:'あに',     romaji:'ani',      fr:'grand frère (le mien)', kanji:'兄' },
  { theme:'famille', level:1, kana:'あね',     romaji:'ane',      fr:'grande sœur (la mienne)', kanji:'姉' },
  { theme:'famille', level:1, kana:'おとうと', romaji:'otōto',    fr:'petit frère', kanji:'弟' },
  { theme:'famille', level:1, kana:'いもうと', romaji:'imōto',    fr:'petite sœur', kanji:'妹' },
  { theme:'famille', level:1, kana:'こども',   romaji:'kodomo',   fr:'enfant', kanji:'子供' },
  { theme:'famille', level:1, kana:'おっと',   romaji:'otto',     fr:'mari (le mien)', kanji:'夫' },
  { theme:'famille', level:1, kana:'つま',     romaji:'tsuma',    fr:'femme / épouse (la mienne)', kanji:'妻' },
  { theme:'famille', level:1, kana:'そふ',     romaji:'sofu',     fr:'grand-père (le mien)', kanji:'祖父' },
  { theme:'famille', level:1, kana:'そぼ',     romaji:'sobo',     fr:'grand-mère (la mienne)', kanji:'祖母' },
  { theme:'famille', level:2, kana:'かぞくはなんにんですか',     romaji:'kazoku wa nannin desu ka',  fr:'combien êtes-vous dans la famille ?', kanji:'家族は何人ですか' },
  { theme:'famille', level:2, kana:'こどもがふたりいます',       romaji:'kodomo ga futari imasu',    fr:'j\'ai deux enfants', kanji:'子供が二人います' },
  { theme:'famille', level:2, kana:'けっこんしています',         romaji:'kekkon shite imasu',        fr:'je suis marié(e)', kanji:'結婚しています' },
  { theme:'famille', level:3, kana:'かれしとかのじょはいますか', romaji:'kareshi to kanojo wa imasu ka', fr:'avez-vous un petit ami / une petite amie ?', kanji:'彼氏と彼女はいますか' },

  // ══════════════════════════════════════
  //  MÉTÉO
  // ══════════════════════════════════════
  { theme:'meteo', level:1, kana:'てんき',   romaji:'tenki',     fr:'temps (météo)', kanji:'天気' },
  { theme:'meteo', level:1, kana:'はれ',     romaji:'hare',      fr:'beau temps / ensoleillé', kanji:'晴れ' },
  { theme:'meteo', level:1, kana:'くもり',   romaji:'kumori',    fr:'nuageux', kanji:'曇り' },
  { theme:'meteo', level:1, kana:'あめ',     romaji:'ame',       fr:'pluie', kanji:'雨' },
  { theme:'meteo', level:1, kana:'ゆき',     romaji:'yuki',      fr:'neige', kanji:'雪' },
  { theme:'meteo', level:1, kana:'かぜ',     romaji:'kaze',      fr:'vent', kanji:'風' },
  { theme:'meteo', level:1, kana:'かみなり', romaji:'kaminari',  fr:'tonnerre / foudre', kanji:'雷' },
  { theme:'meteo', level:1, kana:'たいふう', romaji:'taifū',     fr:'typhon', kanji:'台風' },
  { theme:'meteo', level:1, kana:'あつい',   romaji:'atsui',     fr:'chaud (temps)', kanji:'暑い' },
  { theme:'meteo', level:1, kana:'さむい',   romaji:'samui',     fr:'froid (temps)', kanji:'寒い' },
  { theme:'meteo', level:1, kana:'すずしい', romaji:'suzushii',  fr:'frais / agréable', kanji:'涼しい' },
  { theme:'meteo', level:1, kana:'あたたかい',romaji:'atatakai',  fr:'doux / tiède', kanji:'暖かい' },
  { theme:'meteo', level:2, kana:'きょうはいいてんきですね',  romaji:'kyō wa ii tenki desu ne', fr:'il fait beau aujourd\'hui n\'est-ce pas', kanji:'今日はいい天気ですね' },
  { theme:'meteo', level:2, kana:'あしたはあめがふりますか', romaji:'ashita wa ame ga furimasu ka', fr:'est-ce qu\'il va pleuvoir demain ?', kanji:'明日は雨が降りますか' },
  { theme:'meteo', level:2, kana:'かさをもってきてください', romaji:'kasa o motte kite kudasai', fr:'apportez un parapluie s.v.p.', kanji:'傘を持って来てください' },
  { theme:'meteo', level:3, kana:'たいふうがちかづいています', romaji:'taifū ga chikazuite imasu', fr:'un typhon approche', kanji:'台風が近づいています' },
  { theme:'meteo', level:3, kana:'じしんがありました',         romaji:'jishin ga arimashita',     fr:'il y a eu un tremblement de terre', kanji:'地震がありました' },

  // ══════════════════════════════════════
  //  COULEURS
  // ══════════════════════════════════════
  { theme:'couleurs', level:1, kana:'しろ',     romaji:'shiro',    fr:'blanc', kanji:'白' },
  { theme:'couleurs', level:1, kana:'くろ',     romaji:'kuro',     fr:'noir', kanji:'黒' },
  { theme:'couleurs', level:1, kana:'あか',     romaji:'aka',      fr:'rouge', kanji:'赤' },
  { theme:'couleurs', level:1, kana:'あお',     romaji:'ao',       fr:'bleu / vert (feu)', kanji:'青' },
  { theme:'couleurs', level:1, kana:'きいろ',   romaji:'kiiro',    fr:'jaune', kanji:'黄色' },
  { theme:'couleurs', level:1, kana:'みどり',   romaji:'midori',   fr:'vert', kanji:'緑' },
  { theme:'couleurs', level:1, kana:'むらさき', romaji:'murasaki', fr:'violet / pourpre', kanji:'紫' },
  { theme:'couleurs', level:1, kana:'ちゃいろ', romaji:'chairo',   fr:'marron', kanji:'茶色' },
  { theme:'couleurs', level:1, kana:'はいいろ', romaji:'haiiro',   fr:'gris', kanji:'灰色' },
  { theme:'couleurs', level:1, kana:'オレンジ', romaji:'orenji',   fr:'orange' },
  { theme:'couleurs', level:1, kana:'ピンク',   romaji:'pinku',    fr:'rose' },
  { theme:'couleurs', level:2, kana:'このいろがすきです',     romaji:'kono iro ga suki desu',    fr:'j\'aime cette couleur', kanji:'この色が好きです' },
  { theme:'couleurs', level:2, kana:'べつのいろはありますか', romaji:'betsu no iro wa arimasu ka', fr:'avez-vous une autre couleur ?', kanji:'別の色はありますか' },
  { theme:'couleurs', level:3, kana:'うすい／こい',           romaji:'usui / koi',               fr:'clair / foncé (pour les couleurs)', kanji:'薄い／濃い' },

  // ══════════════════════════════════════
  //  ADJECTIFS COURANTS
  // ══════════════════════════════════════
  { theme:'adjectifs', level:1, kana:'おおきい', romaji:'ōkii',     fr:'grand / gros', kanji:'大きい' },
  { theme:'adjectifs', level:1, kana:'ちいさい', romaji:'chīsai',   fr:'petit', kanji:'小さい' },
  { theme:'adjectifs', level:1, kana:'ながい',   romaji:'nagai',    fr:'long', kanji:'長い' },
  { theme:'adjectifs', level:1, kana:'みじかい', romaji:'mijikai',  fr:'court', kanji:'短い' },
  { theme:'adjectifs', level:1, kana:'あたらしい',romaji:'atarashii',fr:'nouveau', kanji:'新しい' },
  { theme:'adjectifs', level:1, kana:'ふるい',   romaji:'furui',    fr:'vieux / ancien', kanji:'古い' },
  { theme:'adjectifs', level:1, kana:'いい／よい',romaji:'ii / yoi', fr:'bon / bien', kanji:'良い' },
  { theme:'adjectifs', level:1, kana:'わるい',   romaji:'warui',    fr:'mauvais', kanji:'悪い' },
  { theme:'adjectifs', level:1, kana:'はやい',   romaji:'hayai',    fr:'rapide / tôt', kanji:'速い／早い' },
  { theme:'adjectifs', level:1, kana:'おそい',   romaji:'osoi',     fr:'lent / tard', kanji:'遅い' },
  { theme:'adjectifs', level:1, kana:'たのしい', romaji:'tanoshii', fr:'amusant / agréable', kanji:'楽しい' },
  { theme:'adjectifs', level:1, kana:'むずかしい',romaji:'muzukashii',fr:'difficile', kanji:'難しい' },
  { theme:'adjectifs', level:1, kana:'やさしい', romaji:'yasashii', fr:'facile / gentil', kanji:'易しい／優しい' },
  { theme:'adjectifs', level:1, kana:'きれい',   romaji:'kirei',    fr:'beau / propre', kanji:'綺麗' },
  { theme:'adjectifs', level:1, kana:'かわいい', romaji:'kawaii',   fr:'mignon / adorable', kanji:'可愛い' },
  { theme:'adjectifs', level:1, kana:'おもしろい',romaji:'omoshiroi',fr:'intéressant / drôle', kanji:'面白い' },
  { theme:'adjectifs', level:2, kana:'〜すぎます',romaji:'~ sugimasu',fr:'trop ~ (excessif)', kanji:'〜過ぎます' },
  { theme:'adjectifs', level:2, kana:'〜になります',romaji:'~ ni narimasu',fr:'devenir ~ (transformation)', kanji:'〜になります' },
  { theme:'adjectifs', level:3, kana:'めずらしい', romaji:'mezurashii', fr:'rare / inhabituel', kanji:'珍しい' },
  { theme:'adjectifs', level:3, kana:'なつかしい', romaji:'natsukashii',fr:'nostalgique / qui rappelle le passé', kanji:'懐かしい' },

  // ══════════════════════════════════════
  //  VERBES D'ACTION COURANTS
  // ══════════════════════════════════════
  { theme:'verbes', level:1, kana:'いく',     romaji:'iku',       fr:'aller', kanji:'行く' },
  { theme:'verbes', level:1, kana:'くる',     romaji:'kuru',      fr:'venir', kanji:'来る' },
  { theme:'verbes', level:1, kana:'かえる',   romaji:'kaeru',     fr:'rentrer / retourner', kanji:'帰る' },
  { theme:'verbes', level:1, kana:'たべる',   romaji:'taberu',    fr:'manger', kanji:'食べる' },
  { theme:'verbes', level:1, kana:'のむ',     romaji:'nomu',      fr:'boire', kanji:'飲む' },
  { theme:'verbes', level:1, kana:'みる',     romaji:'miru',      fr:'voir / regarder', kanji:'見る' },
  { theme:'verbes', level:1, kana:'きく',     romaji:'kiku',      fr:'entendre / écouter', kanji:'聞く' },
  { theme:'verbes', level:1, kana:'はなす',   romaji:'hanasu',    fr:'parler', kanji:'話す' },
  { theme:'verbes', level:1, kana:'かく',     romaji:'kaku',      fr:'écrire', kanji:'書く' },
  { theme:'verbes', level:1, kana:'よむ',     romaji:'yomu',      fr:'lire', kanji:'読む' },
  { theme:'verbes', level:1, kana:'かう',     romaji:'kau',       fr:'acheter', kanji:'買う' },
  { theme:'verbes', level:1, kana:'うる',     romaji:'uru',       fr:'vendre', kanji:'売る' },
  { theme:'verbes', level:1, kana:'のる',     romaji:'noru',      fr:'monter dans (transport)', kanji:'乗る' },
  { theme:'verbes', level:1, kana:'おりる',   romaji:'oriru',     fr:'descendre de (transport)', kanji:'降りる' },
  { theme:'verbes', level:1, kana:'まつ',     romaji:'matsu',     fr:'attendre', kanji:'待つ' },
  { theme:'verbes', level:1, kana:'あう',     romaji:'au',        fr:'rencontrer', kanji:'会う' },
  { theme:'verbes', level:1, kana:'しる',     romaji:'shiru',     fr:'savoir / connaître', kanji:'知る' },
  { theme:'verbes', level:1, kana:'おもう',   romaji:'omou',      fr:'penser / croire', kanji:'思う' },
  { theme:'verbes', level:2, kana:'〜てみます',   romaji:'~ te mimasu',   fr:'essayer de faire ~', kanji:'〜てみます' },
  { theme:'verbes', level:2, kana:'〜ておきます', romaji:'~ te okimasu',  fr:'faire ~ à l\'avance', kanji:'〜ておきます' },
  { theme:'verbes', level:2, kana:'〜てしまいました',romaji:'~ te shimaimashita',fr:'avoir fait ~ (regret / achèvement)', kanji:'〜てしまいました' },
  { theme:'verbes', level:2, kana:'〜たいです',   romaji:'~ tai desu',    fr:'vouloir faire ~', kanji:'〜たいです' },
  { theme:'verbes', level:2, kana:'〜ことができます',romaji:'~ koto ga dekimasu',fr:'être capable de faire ~', kanji:'〜ことができます' },
  { theme:'verbes', level:3, kana:'〜ようにします', romaji:'~ yō ni shimasu',fr:'faire en sorte de ~ / tâcher de ~', kanji:'〜ようにします' },
  { theme:'verbes', level:3, kana:'〜はずです',    romaji:'~ hazu desu',   fr:'c\'est censé être ~ / normalement ~', kanji:'〜はずです' },

  // ══════════════════════════════════════
  //  NOURRITURE & CUISINE
  // ══════════════════════════════════════
  { theme:'nourriture', level:1, kana:'にく',     romaji:'niku',     fr:'viande', kanji:'肉' },
  { theme:'nourriture', level:1, kana:'さかな',   romaji:'sakana',   fr:'poisson', kanji:'魚' },
  { theme:'nourriture', level:1, kana:'やさい',   romaji:'yasai',    fr:'légume', kanji:'野菜' },
  { theme:'nourriture', level:1, kana:'くだもの', romaji:'kudamono', fr:'fruit', kanji:'果物' },
  { theme:'nourriture', level:1, kana:'たまご',   romaji:'tamago',   fr:'œuf', kanji:'卵' },
  { theme:'nourriture', level:1, kana:'パン',     romaji:'pan',      fr:'pain' },
  { theme:'nourriture', level:1, kana:'とうふ',   romaji:'tōfu',     fr:'tofu', kanji:'豆腐' },
  { theme:'nourriture', level:1, kana:'みそ',     romaji:'miso',     fr:'pâte de soja fermentée', kanji:'味噌' },
  { theme:'nourriture', level:1, kana:'しょうゆ', romaji:'shōyu',    fr:'sauce soja', kanji:'醤油' },
  { theme:'nourriture', level:1, kana:'わさび',   romaji:'wasabi',   fr:'wasabi' },
  { theme:'nourriture', level:1, kana:'のり',     romaji:'nori',     fr:'algue nori', kanji:'海苔' },
  { theme:'nourriture', level:1, kana:'おにぎり', romaji:'onigiri',  fr:'triangle de riz', kanji:'おにぎり' },
  { theme:'nourriture', level:1, kana:'うどん',   romaji:'udon',     fr:'nouilles épaisses' },
  { theme:'nourriture', level:1, kana:'そば',     romaji:'soba',     fr:'nouilles de sarrasin', kanji:'蕎麦' },
  { theme:'nourriture', level:1, kana:'やきとり', romaji:'yakitori', fr:'brochettes de poulet', kanji:'焼き鳥' },
  { theme:'nourriture', level:1, kana:'たこやき', romaji:'takoyaki', fr:'boulettes de poulpe', kanji:'たこ焼き' },
  { theme:'nourriture', level:1, kana:'おこのみやき',romaji:'okonomiyaki',fr:'galette japonaise', kanji:'お好み焼き' },
  { theme:'nourriture', level:2, kana:'ベジタリアンりょうりはありますか',romaji:'bejitarian ryōri wa arimasu ka',fr:'avez-vous des plats végétariens ?', kanji:'ベジタリアン料理はありますか' },
  { theme:'nourriture', level:2, kana:'にくなしでたのめますか',romaji:'niku nashi de tanomemasu ka',fr:'puis-je commander sans viande ?', kanji:'肉なしで頼めますか' },
  { theme:'nourriture', level:3, kana:'グルテンフリーのものはありますか',romaji:'guruten furī no mono wa arimasu ka',fr:'avez-vous des plats sans gluten ?' },

  // ══════════════════════════════════════
  //  LIEUX
  // ══════════════════════════════════════
  { theme:'lieux', level:1, kana:'まち',     romaji:'machi',    fr:'ville / bourg', kanji:'町' },
  { theme:'lieux', level:1, kana:'こうえん', romaji:'kōen',     fr:'parc', kanji:'公園' },
  { theme:'lieux', level:1, kana:'びじゅつかん',romaji:'bijutsukan',fr:'musée (des beaux-arts)', kanji:'美術館' },
  { theme:'lieux', level:1, kana:'はくぶつかん',romaji:'hakubutsukan',fr:'musée (histoire/sciences)', kanji:'博物館' },
  { theme:'lieux', level:1, kana:'じんじゃ', romaji:'jinja',    fr:'sanctuaire shinto', kanji:'神社' },
  { theme:'lieux', level:1, kana:'おてら',   romaji:'otera',    fr:'temple bouddhiste', kanji:'お寺' },
  { theme:'lieux', level:1, kana:'しろ',     romaji:'shiro',    fr:'château', kanji:'城' },
  { theme:'lieux', level:1, kana:'おんせんち',romaji:'onsenchi', fr:'station thermale', kanji:'温泉地' },
  { theme:'lieux', level:1, kana:'うみ',     romaji:'umi',      fr:'mer / océan', kanji:'海' },
  { theme:'lieux', level:1, kana:'やま',     romaji:'yama',     fr:'montagne', kanji:'山' },
  { theme:'lieux', level:1, kana:'かわ',     romaji:'kawa',     fr:'rivière / fleuve', kanji:'川' },
  { theme:'lieux', level:1, kana:'もり',     romaji:'mori',     fr:'forêt', kanji:'森' },
  { theme:'lieux', level:1, kana:'びょういん',romaji:'byōin',    fr:'hôpital', kanji:'病院' },
  { theme:'lieux', level:1, kana:'ゆうびんきょく',romaji:'yūbinkyoku',fr:'bureau de poste', kanji:'郵便局' },
  { theme:'lieux', level:1, kana:'ぎんこう', romaji:'ginkō',    fr:'banque', kanji:'銀行' },
  { theme:'lieux', level:1, kana:'こうばん',  romaji:'kōban',   fr:'poste de police de quartier', kanji:'交番' },
  { theme:'lieux', level:2, kana:'〜にいきたいのですが',romaji:'~ ni ikitai no desu ga',fr:'je souhaite aller à ~…', kanji:'〜に行きたいのですが' },
  { theme:'lieux', level:2, kana:'ちかくにATMはありますか',romaji:'chikaku ni ATM wa arimasu ka',fr:'y a-t-il un distributeur près d\'ici ?' },
  { theme:'lieux', level:3, kana:'このあたりでおすすめのかんこうスポットはありますか',romaji:'kono atari de osusume no kankō supotto wa arimasu ka',fr:'y a-t-il des sites touristiques recommandés dans le coin ?', kanji:'この辺りでお勧めの観光スポットはありますか' },

  // ══════════════════════════════════════
  //  ÉMOTIONS & ÉTATS
  // ══════════════════════════════════════
  { theme:'emotions', level:1, kana:'うれしい', romaji:'ureshii',  fr:'content / heureux', kanji:'嬉しい' },
  { theme:'emotions', level:1, kana:'かなしい', romaji:'kanashii', fr:'triste', kanji:'悲しい' },
  { theme:'emotions', level:1, kana:'こわい',   romaji:'kowai',    fr:'effrayant / j\'ai peur', kanji:'怖い' },
  { theme:'emotions', level:1, kana:'はずかしい',romaji:'hazukashii',fr:'gêné / honteux', kanji:'恥ずかしい' },
  { theme:'emotions', level:1, kana:'びっくりした',romaji:'bikkuri shita',fr:'j\'ai été surpris(e)', kanji:'びっくりした' },
  { theme:'emotions', level:1, kana:'つかれた',  romaji:'tsukareta', fr:'fatigué(e)', kanji:'疲れた' },
  { theme:'emotions', level:1, kana:'ひま',      romaji:'hima',      fr:'libre / qui s\'ennuie', kanji:'暇' },
  { theme:'emotions', level:1, kana:'いそがしい', romaji:'isogashii', fr:'occupé / chargé', kanji:'忙しい' },
  { theme:'emotions', level:1, kana:'だいじょうぶ',romaji:'daijōbu',  fr:'ça va / pas de problème', kanji:'大丈夫' },
  { theme:'emotions', level:1, kana:'げんき',    romaji:'genki',     fr:'en forme / plein d\'énergie', kanji:'元気' },
  { theme:'emotions', level:2, kana:'とてもたのしんでいます', romaji:'totemo tanoshinde imasu',fr:'je m\'amuse vraiment beaucoup', kanji:'とても楽しんでいます' },
  { theme:'emotions', level:2, kana:'すこしふあんです',       romaji:'sukoshi fuan desu',      fr:'je suis un peu inquiet(e)', kanji:'少し不安です' },
  { theme:'emotions', level:2, kana:'にほんがだいすきです',   romaji:'nihon ga daisuki desu',  fr:'j\'adore le Japon', kanji:'日本が大好きです' },
  { theme:'emotions', level:3, kana:'かんどうしました',       romaji:'kandō shimashita',       fr:'j\'ai été profondément ému(e)', kanji:'感動しました' },
  { theme:'emotions', level:3, kana:'ことばにならないほどうつくしい',romaji:'kotoba ni naranai hodo utsukushii',fr:'d\'une beauté indicible', kanji:'言葉にならないほど美しい' },
];
