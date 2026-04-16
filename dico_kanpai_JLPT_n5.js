// kanpai_JLPT_n5_enrichi.js
// JLPT N5 Kanpai enrichi avec exemples
// 723 entrées — 2026-04-16
const KANPAI_N5_ENTRIES = [
  {
    kana: 'あう',
    romaji: 'au',
    fr: 'rencontrer',
    kanji: '会う',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'きのう、にほんじんのともだちにあいました。', romaji: 'Kinō, nihonjin no tomodachi ni aimashita.', fr: 'Hier, j\'ai rencontré un ami japonais.' },
    ],
  },
  {
    kana: 'あげる',
    romaji: 'ageru',
    fr: 'donner',
    kanji: '上げる',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'おみやげをともだちにあげました。', romaji: 'Omiyage o tomodachi ni agemashita.', fr: 'J\'ai donné un souvenir à mon ami.' },
    ],
  },
  {
    kana: 'あらう',
    romaji: 'arau',
    fr: 'laver',
    kanji: '洗う',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'てをあらってからたべましょう。', romaji: 'Te o aratte kara tabemasho.', fr: 'Lavons-nous les mains avant de manger.' },
    ],
  },
  {
    kana: 'いう',
    romaji: 'iu',
    fr: 'dire',
    kanji: '言う',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'にほんごで「ありがとう」というのはかんたんです。', romaji: 'Nihongo de "arigatō" to iu no wa kantan desu.', fr: 'Dire "merci" en japonais, c\'est facile.' },
    ],
  },
  {
    kana: 'いく',
    romaji: 'iku',
    fr: 'aller',
    kanji: '行く',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'きょうは、きょうとにいきます。', romaji: 'Kyō wa, Kyōto ni ikimasu.', fr: 'Aujourd\'hui, je vais à Kyoto.' },
    ],
  },
  {
    kana: 'おきる',
    romaji: 'okiru',
    fr: 'se lever',
    kanji: '起きる',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'しんかんせんがあるので、はやくおきました。', romaji: 'Shinkansen ga aru node, hayaku okimashita.', fr: 'J\'avais le Shinkansen, donc je me suis levé tôt.' },
    ],
  },
  {
    kana: 'おしえる',
    romaji: 'oshieru',
    fr: 'enseigner, dire',
    kanji: '教える',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'えきまでのみちをおしえてください。', romaji: 'Eki made no michi o oshiete kudasai.', fr: 'Indiquez-moi le chemin jusqu\'à la gare, s\'il vous plaît.' },
    ],
  },
  {
    kana: 'およぐ',
    romaji: 'oyogu',
    fr: 'nager',
    kanji: '泳ぐ',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'おんせんでおよいではいけません。', romaji: 'Onsen de oyoide wa ikemasen.', fr: 'Il est interdit de nager dans les sources thermales.' },
    ],
  },
  {
    kana: 'おわる',
    romaji: 'owaru',
    fr: 'finir',
    kanji: '終わる',  // corrigé : 終る → 終わる
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'ツアーはごごさんじにおわります。', romaji: 'Tsūā wa gogo san-ji ni owarimasu.', fr: 'La visite se termine à 15h.' },
    ],
  },
  {
    kana: 'かえる',
    romaji: 'kaeru',
    fr: 'rentrer, revenir',
    kanji: '帰る',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'あしたフランスにかえります。さびしいですね。', romaji: 'Ashita Furansu ni kaerimasu. Sabishii desu ne.', fr: 'Demain je rentre en France. C\'est triste.' },
    ],
  },
  {
    kana: 'かく',
    romaji: 'kaku',
    fr: 'écrire',
    kanji: '書く',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'なまえをここにかいてください。', romaji: 'Namae o koko ni kaite kudasai.', fr: 'Veuillez écrire votre nom ici.' },
    ],
  },
  {
    kana: 'かける',
    romaji: 'kakeru',
    fr: 'appeler par téléphone',
    kanji: '掛ける',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'ホテルにでんわをかけました。', romaji: 'Hoteru ni denwa o kakemashita.', fr: 'J\'ai appelé l\'hôtel par téléphone.' },
    ],
  },
  {
    kana: 'かす',
    romaji: 'kasu',
    fr: 'prêter',
    kanji: '貸す',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'かさをかしてもらえますか？あめがふっています。', romaji: 'Kasa o kashite moraemasu ka? Ame ga futte imasu.', fr: 'Pouvez-vous me prêter un parapluie ? Il pleut.' },
    ],
  },
  {
    kana: 'かりる',
    romaji: 'kariru',
    fr: 'emprunter',
    kanji: '借りる',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'じてんしゃをかりることができますか？', romaji: 'Jitensha o kariru koto ga dekimasu ka?', fr: 'Est-il possible d\'emprunter un vélo ?' },
    ],
  },
  {
    kana: 'くる',
    romaji: 'kuru',
    fr: 'venir',
    kanji: '来る',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'にほんにくるのははじめてですか？', romaji: 'Nihon ni kuru no wa hajimete desu ka?', fr: 'C\'est votre première fois que vous venez au Japon ?' },
    ],
  },
  {
    kana: 'こたえる',
    romaji: 'kotaeru',
    fr: 'répondre',
    kanji: '答える',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'すみません、にほんごでこたえてもいいですか？', romaji: 'Sumimasen, nihongo de kotaete mo ii desu ka?', fr: 'Excusez-moi, puis-je répondre en japonais ?' },
    ],
  },
  {
    kana: 'しる',
    romaji: 'shiru',
    fr: 'savoir',
    kanji: '知る',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'このあたりにいいレストランをしっていますか？', romaji: 'Kono atari ni ii resutoran o shitte imasu ka?', fr: 'Connaissez-vous un bon restaurant dans le coin ?' },
    ],
  },
  {
    kana: 'すむ',
    romaji: 'sumu',
    fr: 'habiter, vivre',
    kanji: '住む',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'わたしたちはフランスにすんでいます。', romaji: 'Watashitachi wa Furansu ni sunde imasu.', fr: 'Nous habitons en France.' },
    ],
  },
  {
    kana: 'する',
    romaji: 'suru',
    fr: 'faire',
    kanji: '',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'きょうはかいものをします。', romaji: 'Kyō wa kaimono o shimasu.', fr: 'Aujourd\'hui, je fais du shopping.' },
    ],
  },
  {
    kana: 'だす',
    romaji: 'dasu',
    fr: 'sortir, envoyer',
    kanji: '出す',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'このてがみをだしたいです。ゆうびんきょくはどこですか？', romaji: 'Kono tegami o dashitai desu. Yūbinkyoku wa doko desu ka?', fr: 'Je veux envoyer cette lettre. Où est la poste ?' },
    ],
  },
  {
    kana: 'たつ',
    romaji: 'tatsu',
    fr: 'se lever, se mettre debout',
    kanji: '立つ',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'でんしゃのなかでたってまちました。', romaji: 'Densha no naka de tatte machimashita.', fr: 'Dans le train, j\'ai attendu debout.' },
    ],
  },
  {
    kana: 'たのむ',
    romaji: 'tanomu',
    fr: 'demander, commander',
    kanji: '頼む',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'ランチセットをたのみました。', romaji: 'Ranchi setto o tanomimashita.', fr: 'J\'ai commandé le menu déjeuner.' },
    ],
  },
  {
    kana: 'つく',
    romaji: 'tsuku',
    fr: 'arriver à',
    kanji: '着く',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'なんじにおおさかにつきますか？', romaji: 'Nan-ji ni Ōsaka ni tsukimasu ka?', fr: 'À quelle heure arrive-t-on à Osaka ?' },
    ],
  },
  {
    kana: 'でかける',
    romaji: 'dekakeru',
    fr: 'sortir, partir',
    kanji: '出かける',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'あさごはんのあとですぐでかけます。', romaji: 'Asagohan no ato de sugu dekakemasu.', fr: 'On part tout de suite après le petit-déjeuner.' },
    ],
  },
  {
    kana: 'とぶ',
    romaji: 'tobu',
    fr: 'voler, sauter',
    kanji: '飛ぶ',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'パリからとうきょうまでひこうきでとびます。', romaji: 'Pari kara Tōkyō made hikōki de tobimasu.', fr: 'On vole de Paris à Tokyo en avion.' },
    ],
  },
  {
    kana: 'とる',
    romaji: 'toru',
    fr: 'prendre, saisir',
    kanji: '取る',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'しゃしんをとってもいいですか？', romaji: 'Shashin o totte mo ii desu ka?', fr: 'Puis-je prendre une photo ?' },
    ],
  },
  {
    kana: 'ならう',
    romaji: 'narau',
    fr: 'apprendre (auprès de quelqu\'un)',
    kanji: '習う',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'にほんごをならっています。まだへたですが…', romaji: 'Nihongo o naratte imasu. Mada heta desu ga…', fr: 'J\'apprends le japonais. Je suis encore maladroit, mais…' },
    ],
  },
  {
    kana: 'なる',
    romaji: 'naru',
    fr: 'devenir',
    kanji: 'なる',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'もっとにほんごがじょうずになりたいです。', romaji: 'Motto nihongo ga jōzu ni naritai desu.', fr: 'Je veux devenir meilleur en japonais.' },
    ],
  },
  {
    kana: 'ぬぐ',
    romaji: 'nugu',
    fr: 'enlever (vêtements, chaussures)',
    kanji: '脱ぐ',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'おてらにはいるまえにくつをぬいでください。', romaji: 'Otera ni hairu mae ni kutsu o nuide kudasai.', fr: 'Veuillez enlever vos chaussures avant d\'entrer au temple.' },
    ],
  },
  {
    kana: 'ねる',
    romaji: 'neru',
    fr: 'dormir, se coucher',
    kanji: '寝る',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'りょかんでふとんにねるのはきもちいいですね。', romaji: 'Ryokan de futon ni neru no wa kimochi ii desu ne.', fr: 'Dormir sur un futon au ryokan, c\'est agréable.' },
    ],
  },
  {
    kana: 'のぼる',
    romaji: 'noboru',
    fr: 'monter, gravir',
    kanji: '登る',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'ふじさんをのぼりたいですが、たいへんですか？', romaji: 'Fujisan o noborita i desu ga, taihen desu ka?', fr: 'J\'aimerais gravir le Fuji, mais c\'est difficile ?' },
    ],
  },
  {
    kana: 'のる',
    romaji: 'noru',
    fr: 'monter dans (transport)',
    kanji: '乗る',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'しんかんせんにはじめてのりました！はやいですね！', romaji: 'Shinkansen ni hajimete norimashita! Hayai desu ne!', fr: 'J\'ai pris le Shinkansen pour la première fois ! C\'est rapide !' },
    ],
  },
  {
    kana: 'はいる',
    romaji: 'hairu',
    fr: 'entrer',
    kanji: '入る',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'おんせんにはいるのはリラックスできます。', romaji: 'Onsen ni hairu no wa rirakkusu dekimasu.', fr: 'Entrer dans les sources thermales, c\'est relaxant.' },
    ],
  },
  {
    kana: 'はなす',
    romaji: 'hanasu',
    fr: 'parler',
    kanji: '話す',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'もっとゆっくりはなしてもらえますか？', romaji: 'Motto yukkuri hanashite moraemasu ka?', fr: 'Pourriez-vous parler plus lentement ?' },
    ],
  },
  {
    kana: 'はる',
    romaji: 'haru',
    fr: 'coller, afficher',  // corrigé : "s'en tenir" → "coller, afficher"
    kanji: '貼る',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'きっぷをかってかばんにはりました。', romaji: 'Kippu o katte kaban ni harimashita.', fr: 'J\'ai acheté le ticket et l\'ai collé sur mon sac.' },
    ],
  },
  {
    kana: 'ひく',
    romaji: 'hiku',
    fr: 'tirer, jouer (instrument)',
    kanji: '引く',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'このドアはひいてください。おしてはいけません。', romaji: 'Kono doa wa hiite kudasai. Oshite wa ikemasen.', fr: 'Tirez cette porte. Ne poussez pas.' },
    ],
  },
  {
    kana: 'ふく',
    romaji: 'fuku',
    fr: 'souffler',  // corrigé : "sauter" → "souffler"
    kanji: '吹く',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'きょうはかぜがつよくふいています。さむいですね。', romaji: 'Kyō wa kaze ga tsuyoku fuite imasu. Samui desu ne.', fr: 'Aujourd\'hui le vent souffle fort. Il fait froid.' },
    ],
  },
  {
    kana: 'まつ',
    romaji: 'matsu',
    fr: 'attendre',
    kanji: '待つ',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'レストランのまえでまっています。きてください。', romaji: 'Resutoran no mae de matte imasu. Kite kudasai.', fr: 'Je vous attends devant le restaurant. Venez, s\'il vous plaît.' },
    ],
  },
  {
    kana: 'みせる',
    romaji: 'miseru',
    fr: 'montrer',
    kanji: '見せる',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'パスポートをみせてください。', romaji: 'Pasupōto o misete kudasai.', fr: 'Montrez votre passeport, s\'il vous plaît.' },
    ],
  },
  {
    kana: 'みる',
    romaji: 'miru',
    fr: 'voir, regarder',
    kanji: '見る',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'かぶきをみたいです。チケットはどこでかいますか？', romaji: 'Kabuki o mitai desu. Chiketto wa doko de kaimasu ka?', fr: 'Je veux voir du kabuki. Où achète-t-on les billets ?' },
    ],
  },
  {
    kana: 'もつ',
    romaji: 'motsu',
    fr: 'tenir, porter',
    kanji: '持つ',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'にもつをもってあげましょうか？', romaji: 'Nimotsu o motte agemasho ka?', fr: 'Voulez-vous que je porte vos bagages ?' },
    ],
  },
  {
    kana: 'やすむ',
    romaji: 'yasumu',
    fr: 'se reposer, s\'absenter',
    kanji: '休む',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'ちょっとやすみましょう。あしがいたいです。', romaji: 'Chotto yasumimasho. Ashi ga itai desu.', fr: 'Reposons-nous un peu. J\'ai mal aux pieds.' },
    ],
  },
  {
    kana: 'やる',
    romaji: 'yaru',
    fr: 'faire (familier)',
    kanji: 'やる',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'にほんごのべんきょうをまいにちやっています。', romaji: 'Nihongo no benkyō o mainichi yatte imasu.', fr: 'Je fais du japonais tous les jours.' },
    ],
  },
  {
    kana: 'ゆく',
    romaji: 'yuku',
    fr: 'aller (forme littéraire de いく)',
    kanji: '行く',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'さくらをみにゆきましょう。', romaji: 'Sakura o mi ni yukimasho.', fr: 'Allons voir les cerisiers en fleur.' },
    ],
  },
  {
    kana: 'よぶ',
    romaji: 'yobu',
    fr: 'appeler, inviter',
    kanji: '呼ぶ',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'タクシーをよんでください。', romaji: 'Takushī o yonde kudasai.', fr: 'Appelez un taxi, s\'il vous plaît.' },
    ],
  },
  {
    kana: 'わかる',
    romaji: 'wakaru',
    fr: 'comprendre',
    kanji: '分かる',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'すみません、わかりません。もういちどいってください。', romaji: 'Sumimasen, wakarimasen. Mō ichido itte kudasai.', fr: 'Excusez-moi, je ne comprends pas. Répétez, s\'il vous plaît.' },
    ],
  },
  {
    kana: 'しゅくだい',
    romaji: 'shukudai',
    fr: 'devoirs',
    kanji: '宿題',
    theme: 'quotidien',      // corrigé : 'verbes' → 'quotidien'
    theme_label: 'Quotidien',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'にほんごのしゅくだいをしました。むずかしかったです。', romaji: 'Nihongo no shukudai o shimashita. Muzukashikatta desu.', fr: 'J\'ai fait mes devoirs de japonais. C\'était difficile.' },
    ],
  },
  {
    kana: 'ワイシャツ',
    romaji: 'waishatsu',
    fr: 'chemise (de ville)',
    kanji: '',
    theme: 'quotidien',      // corrigé : 'verbes' → 'quotidien'
    theme_label: 'Quotidien',
    level: 1,
    pack: 'perso',
    source: 'kanpai_n5',
    source_label: 'JLPT N5 Kanpai',
    examples: [
      { jp: 'きょうのよるのレストランにはワイシャツがひつようですか？', romaji: 'Kyō no yoru no resutoran ni wa waishatsu ga hitsuyō desu ka?', fr: 'Faut-il une chemise pour le restaurant ce soir ?' },
    ],
  },
  {
    kana: 'あお', romaji: 'ao', fr: 'bleu, vert (couleur)', kanji: '青',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'あおいそらとしろいふじさん、きれいですね！', romaji: 'Aoi sora to shiroi Fujisan, kirei desu ne!', fr: 'Le ciel bleu et le Fuji blanc, c\'est beau !' }],
  },
  {
    kana: 'あおい', romaji: 'aoi', fr: 'bleu, vert (adjectif)', kanji: '青い',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'うみのあおいいろがとてもきれいです。', romaji: 'Umi no aoi iro ga totemo kirei desu.', fr: 'La couleur bleue de la mer est très belle.' }],
  },
  {
    kana: 'あか', romaji: 'aka', fr: 'rouge (couleur)', kanji: '赤',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'とりいのあかはとてもあざやかです。', romaji: 'Torii no aka wa totemo azayaka desu.', fr: 'Le rouge du torii est très vif.' }],
  },
  {
    kana: 'あかい', romaji: 'akai', fr: 'rouge (adjectif)', kanji: '赤い',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'あかいもみじはあきのにほんのしょうちょうです。', romaji: 'Akai momiji wa aki no Nihon no shōchō desu.', fr: 'L\'érable rouge est le symbole du Japon en automne.' }],
  },
  {
    kana: 'あかるい', romaji: 'akarui', fr: 'lumineux, gai', kanji: '明るい',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このいざかやはあかるくてにぎやかです。', romaji: 'Kono izakaya wa akarukute nigiyaka desu.', fr: 'Cet izakaya est lumineux et animé.' }],
  },
  {
    kana: 'あく', romaji: 'aku', fr: 's\'ouvrir', kanji: '開く',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このみせはなんじにあきますか？', romaji: 'Kono mise wa nan-ji ni akimasu ka?', fr: 'À quelle heure ouvre ce magasin ?' }],
  },
  {
    kana: 'あたたかい', romaji: 'atatakai', fr: 'chaud (agréable), chaleureux', kanji: '暖かい',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'はるはあたたかくてさくらがきれいです。', romaji: 'Haru wa atatakakute sakura ga kirei desu.', fr: 'Le printemps est doux et les cerisiers sont beaux.' }],
  },
  {
    kana: 'あたらしい', romaji: 'atarashii', fr: 'nouveau, neuf', kanji: '新しい',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このあたらしいりょかんはとてもきれいです。', romaji: 'Kono atarashii ryokan wa totemo kirei desu.', fr: 'Ce nouveau ryokan est très beau.' }],
  },
  {
    kana: 'あつい', romaji: 'atsui', fr: 'chaud (température)', kanji: '暑い',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'なつのとうきょうはとてもあついです。', romaji: 'Natsu no Tōkyō wa totemo atsui desu.', fr: 'Tokyo en été est très chaud.' }],
  },
  {
    kana: 'いい', romaji: 'ii', fr: 'bon, bien', kanji: 'いい',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんはいいくにですね！またきます。', romaji: 'Nihon wa ii kuni desu ne! Mata kimasu.', fr: 'Le Japon est un beau pays ! J\'y reviendrai.' }],
  },
  {
    kana: 'いそがしい', romaji: 'isogashii', fr: 'occupé, chargé', kanji: '忙しい',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'たびちゅうはいそがしいけどたのしいです！', romaji: 'Tabichū wa isogashii kedo tanoshii desu!', fr: 'Pendant le voyage on est occupé mais c\'est agréable !' }],
  },
  {
    kana: 'いたい', romaji: 'itai', fr: 'douloureux, avoir mal', kanji: '痛い',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'あしがいたいです。たくさんあるきました。', romaji: 'Ashi ga itai desu. Takusan aruimashita.', fr: 'J\'ai mal aux pieds. J\'ai beaucoup marché.' }],
  },
  {
    kana: 'うすい', romaji: 'usui', fr: 'fin, mince, léger (goût)', kanji: '薄い',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このスープはうすいですね。もっとこくがほしいです。', romaji: 'Kono sūpu wa usui desu ne. Motto koku ga hoshii desu.', fr: 'Cette soupe est légère. Je voudrais plus de goût.' }],
  },
  {
    kana: 'うるさい', romaji: 'urusai', fr: 'bruyant, agaçant', kanji: 'うるさい',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このまちはにぎやかですが、すこしうるさいです。', romaji: 'Kono machi wa nigiyaka desu ga, sukoshi urusai desu.', fr: 'Cette ville est animée mais un peu bruyante.' }],
  },
  {
    kana: 'おいしい', romaji: 'oishii', fr: 'délicieux, bon', kanji: 'おいしい',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのりょうりはぜんぶおいしいです！', romaji: 'Nihon no ryōri wa zenbu oishii desu!', fr: 'Toute la cuisine japonaise est délicieuse !' }],
  },
  {
    kana: 'おおきい', romaji: 'ōkii', fr: 'grand, gros', kanji: '大きい',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'とうきょうはおおきいまちです。', romaji: 'Tōkyō wa ōkii machi desu.', fr: 'Tokyo est une grande ville.' }],
  },
  {
    kana: 'おそい', romaji: 'osoi', fr: 'lent, tardif', kanji: '遅い',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このバスはおそいですね。つぎのに乗りましょう。', romaji: 'Kono basu wa osoi desu ne. Tsugi no ni norimasho.', fr: 'Ce bus est lent. Prenons le suivant.' }],
  },
  {
    kana: 'おもい', romaji: 'omoi', fr: 'lourd', kanji: '重い',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'おみやげをたくさんかってスーツケースがおもくなりました。', romaji: 'Omiyage o takusan katte sūtsukēsu ga omoku narimashita.', fr: 'J\'ai acheté beaucoup de souvenirs et la valise est devenue lourde.' }],
  },
  {
    kana: 'おもしろい', romaji: 'omoshiroi', fr: 'intéressant, drôle', kanji: '面白い',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのぶんかはとてもおもしろいです。', romaji: 'Nihon no bunka wa totemo omoshiroi desu.', fr: 'La culture japonaise est très intéressante.' }],
  },
  {
    kana: 'かっこいい', romaji: 'kakkoii', fr: 'cool, élégant, beau', kanji: 'かっこいい',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このしんかんせんはかっこいいですね！', romaji: 'Kono shinkansen wa kakkoii desu ne!', fr: 'Ce Shinkansen est vraiment cool !' }],
  },
  {
    kana: 'かわいい', romaji: 'kawaii', fr: 'mignon, adorable', kanji: 'かわいい',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのまねきねこはかわいいですね。', romaji: 'Nihon no maneki-neko wa kawaii desu ne.', fr: 'Le chat porte-bonheur japonais est adorable.' }],
  },
  {
    kana: 'かんたん', romaji: 'kantan', fr: 'facile, simple', kanji: '簡単',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このレシピはかんたんです。つくってみましょう。', romaji: 'Kono reshipi wa kantan desu. Tsukutte mimasho.', fr: 'Cette recette est facile. Essayons de la préparer.' }],
  },
  {
    kana: 'きいろ', romaji: 'kiiro', fr: 'jaune (couleur)', kanji: '黄色',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'いちょうのきいろはあきのきょうとをかざります。', romaji: 'Ichō no kiiro wa aki no Kyōto o kazarimasu.', fr: 'Le jaune des ginkgo orne Kyoto en automne.' }],
  },
  {
    kana: 'きいろい', romaji: 'kiiroi', fr: 'jaune (adjectif)', kanji: '黄色い',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'きいろいでんしゃがはいってきました。', romaji: 'Kiiroi densha ga haitte kimashita.', fr: 'Le train jaune est entré en gare.' }],
  },
  {
    kana: 'きたない', romaji: 'kitanai', fr: 'sale, malpropre', kanji: '汚い',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのまちはきたなくなくてきれいです。', romaji: 'Nihon no machi wa kitanaku nakute kirei desu.', fr: 'Les villes japonaises ne sont pas sales, elles sont propres.' }],
  },
  {
    kana: 'きれい', romaji: 'kirei', fr: 'beau, propre', kanji: '綺麗',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'さくらはほんとうにきれいです！', romaji: 'Sakura wa hontō ni kirei desu!', fr: 'Les cerisiers sont vraiment magnifiques !' }],
  },
  {
    kana: 'くらい', romaji: 'kurai', fr: 'sombre, obscur', kanji: '暗い',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このいざかやはくらくてふんいきがいいです。', romaji: 'Kono izakaya wa kurakute fun\'iki ga ii desu.', fr: 'Cet izakaya est sombre et l\'ambiance est bonne.' }],
  },
  {
    kana: 'くろ', romaji: 'kuro', fr: 'noir (couleur)', kanji: '黒',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'くろのきもののひとがいます。すごくきれい。', romaji: 'Kuro no kimono no hito ga imasu. Sugoku kirei.', fr: 'Il y a quelqu\'un en kimono noir. C\'est très beau.' }],
  },
  {
    kana: 'くろい', romaji: 'kuroi', fr: 'noir (adjectif)', kanji: '黒い',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'くろいゴマのアイスはめずらしいですね。', romaji: 'Kuroi goma no aisu wa mezurashii desu ne.', fr: 'La glace aux graines de sésame noires, c\'est original.' }],
  },
  {
    kana: 'こい', romaji: 'koi', fr: 'dense, fort (goût, couleur)', kanji: '濃い',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このだしはこくてとてもうまいです。', romaji: 'Kono dashi wa kokute totemo umai desu.', fr: 'Ce bouillon est dense et vraiment savoureux.' }],
  },
  {
    kana: 'こわい', romaji: 'kowai', fr: 'effrayant, avoir peur', kanji: '怖い',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'おばけやしきはこわかったです！', romaji: 'Obakeyashiki wa kowakatta desu!', fr: 'La maison hantée était effrayante !' }],
  },
  {
    kana: 'さむい', romaji: 'samui', fr: 'froid (température ambiante)', kanji: '寒い',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ほっかいどうはふゆにとてもさむいです。', romaji: 'Hokkaidō wa fuyu ni totemo samui desu.', fr: 'Hokkaido est très froid en hiver.' }],
  },
  {
    kana: 'しずか', romaji: 'shizuka', fr: 'calme, silencieux', kanji: '静か',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このやどはしずかでゆっくりできます。', romaji: 'Kono yado wa shizuka de yukkuri dekimasu.', fr: 'Cette auberge est calme, on peut se reposer tranquillement.' }],
  },
  {
    kana: 'しろ', romaji: 'shiro', fr: 'blanc (couleur)', kanji: '白',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'しろのきものはけっこんしきにきます。', romaji: 'Shiro no kimono wa kekkonshiki ni kimasu.', fr: 'Le kimono blanc se porte pour les mariages.' }],
  },
  {
    kana: 'しろい', romaji: 'shiroi', fr: 'blanc (adjectif)', kanji: '白い',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'しろいゆきのなかのきんかくじはさいこうです。', romaji: 'Shiroi yuki no naka no Kinkakuji wa saikō desu.', fr: 'Le Kinkakuji dans la neige blanche, c\'est extraordinaire.' }],
  },
  {
    kana: 'すきな', romaji: 'suki na', fr: 'aimer, apprécier', kanji: '好きな',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'いちばんすきなにほんのたべものはなんですか？', romaji: 'Ichiban suki na Nihon no tabemono wa nan desu ka?', fr: 'Quel est votre plat japonais préféré ?' }],
  },
  {
    kana: 'すくない', romaji: 'sukunai', fr: 'peu nombreux, peu', kanji: '少ない',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このじかんはひとがすくないです。ゆっくりできます。', romaji: 'Kono jikan wa hito ga sukunai desu. Yukkuri dekimasu.', fr: 'À cette heure-ci il y a peu de monde. On peut être tranquille.' }],
  },
  {
    kana: 'せまい', romaji: 'semai', fr: 'étroit, petit (espace)', kanji: '狭い',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このへやはせまいですが、かいてきです。', romaji: 'Kono heya wa semai desu ga, kaiteki desu.', fr: 'Cette chambre est petite mais confortable.' }],
  },
  {
    kana: 'たかい', romaji: 'takai', fr: 'haut, cher', kanji: '高い',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このさけはたかいけど、おいしいです！', romaji: 'Kono sake wa takai kedo, oishii desu!', fr: 'Ce saké est cher, mais délicieux !' }],
  },
  {
    kana: 'たのしい', romaji: 'tanoshii', fr: 'amusant, agréable', kanji: '楽しい',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのたびはほんとうにたのしかったです！', romaji: 'Nihon no tabi wa hontō ni tanoshikatta desu!', fr: 'Le voyage au Japon était vraiment agréable !' }],
  },
  {
    kana: 'ちいさい', romaji: 'chiisai', fr: 'petit', kanji: '小さい',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このちいさいおちゃわんはおみやげにぴったりです。', romaji: 'Kono chiisai ochawan wa omiyage ni pittari desu.', fr: 'Ce petit bol à thé est parfait comme souvenir.' }],
  },
  {
    kana: 'つまらない', romaji: 'tsumaranai', fr: 'ennuyeux, sans intérêt', kanji: 'つまらない',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'つまらないにちじょうをおくっていました。にほんにきてかわりました！', romaji: 'Tsumaranai nichijō o okutte imashita. Nihon ni kite kawarimashita!', fr: 'Je menais une vie ennuyeuse. Venir au Japon a tout changé !' }],
  },
  {
    kana: 'ていねい', romaji: 'teinei', fr: 'poli, soigneux', kanji: '丁寧',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんじんはとてもていねいで、かんどうしました。', romaji: 'Nihonjin wa totemo teinei de, kandō shimashita.', fr: 'Les Japonais sont très polis, j\'ai été touché.' }],
  },
  {
    kana: 'とおい', romaji: 'tōi', fr: 'loin, éloigné', kanji: '遠い',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'フランスからにほんはとおいけど、いくかいちがあります。', romaji: 'Furansu kara Nihon wa tōi kedo, iku kaiichi ga arimasu.', fr: 'De France le Japon est loin, mais ça vaut le voyage.' }],
  },
  {
    kana: 'にがい', romaji: 'nigai', fr: 'amer', kanji: '苦い',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このこうちゃはにがいですが、からだにいいです。', romaji: 'Kono kōcha wa nigai desu ga, karada ni ii desu.', fr: 'Ce thé est amer mais c\'est bon pour la santé.' }],
  },
  {
    kana: 'にぎやか', romaji: 'nigiyaka', fr: 'animé, vivant', kanji: '賑やか',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'しぶやのスクランブルこうさてんはとてもにぎやかです。', romaji: 'Shibuya no sukuranburu kōsaten wa totemo nigiyaka desu.', fr: 'Le carrefour Scramble de Shibuya est très animé.' }],
  },
  {
    kana: 'はやい', romaji: 'hayai', fr: 'rapide', kanji: '速い',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'しんかんせんはとてもはやいです。さいこう！', romaji: 'Shinkansen wa totemo hayai desu. Saikō!', fr: 'Le Shinkansen est très rapide. Fantastique !' }],
  },
  {
    kana: 'ひくい', romaji: 'hikui', fr: 'bas, petit (taille)', kanji: '低い',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ちゃぶだいはひくいテーブルです。すわってたべます。', romaji: 'Chabudai wa hikui tēburu desu. Suwatte tabemasu.', fr: 'Le chabudai est une table basse. On mange assis à terre.' }],
  },
  {
    kana: 'ひどい', romaji: 'hidoi', fr: 'terrible, cruel, grave', kanji: 'ひどい',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'きのうはひどいあめでたいへんでした。', romaji: 'Kinō wa hidoi ame de taihen deshita.', fr: 'Hier il y avait une pluie terrible, c\'était difficile.' }],
  },
  {
    kana: 'ひろい', romaji: 'hiroi', fr: 'large, spacieux', kanji: '広い',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このじんじゃのにわはひろくてきれいです。', romaji: 'Kono jinja no niwa wa hirokute kirei desu.', fr: 'Le jardin de ce sanctuaire est spacieux et beau.' }],
  },
  {
    kana: 'ふるい', romaji: 'furui', fr: 'vieux, ancien', kanji: '古い',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このふるいまちなみがすきです。えどじだいみたい！', romaji: 'Kono furui machinami ga suki desu. Edo jidai mitai!', fr: 'J\'aime ces vieilles rues. On dirait l\'époque Edo !' }],
  },
  {
    kana: 'べんり', romaji: 'benri', fr: 'pratique, commode', kanji: '便利',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのこうきょうこうつうはとてもべんりです。', romaji: 'Nihon no kōkyō kōtsū wa totemo benri desu.', fr: 'Les transports en commun japonais sont très pratiques.' }],
  },
  {
    kana: 'まじめ', romaji: 'majime', fr: 'sérieux, appliqué', kanji: '真面目',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんじんはまじめでしんらいできます。', romaji: 'Nihonjin wa majime de shinrai dekimasu.', fr: 'Les Japonais sont sérieux et dignes de confiance.' }],
  },
  {
    kana: 'むずかしい', romaji: 'muzukashii', fr: 'difficile', kanji: '難しい',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんごはむずかしいですが、あきらめません！', romaji: 'Nihongo wa muzukashii desu ga, akiramemasen!', fr: 'Le japonais est difficile, mais je n\'abandonne pas !' }],
  },
  {
    kana: 'やさしい', romaji: 'yasashii', fr: 'gentil, doux, facile', kanji: '優しい',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんじんはみんなやさしかったです。', romaji: 'Nihonjin wa minna yasashikatta desu.', fr: 'Tous les Japonais étaient gentils.' }],
  },
  {
    kana: 'やすい', romaji: 'yasui', fr: 'bon marché, pas cher', kanji: '安い',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このおみやげはやすくておいしいです！', romaji: 'Kono omiyage wa yasukute oishii desu!', fr: 'Ce souvenir est bon marché et délicieux !' }],
  },
  {
    kana: 'よい', romaji: 'yoi', fr: 'bon, bien (formel)', kanji: '良い',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'よいたびでした！またかならずきます。', romaji: 'Yoi tabi deshita! Mata kanarazu kimasu.', fr: 'C\'était un excellent voyage ! Je reviendrai certainement.' }],
  },
  {
    kana: 'よわい', romaji: 'yowai', fr: 'faible', kanji: '弱い',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このさけはよわいので、のみやすいです。', romaji: 'Kono sake wa yowai node, nomiyasui desu.', fr: 'Ce saké est léger, donc facile à boire.' }],
  },
  {
    kana: 'わるい', romaji: 'warui', fr: 'mauvais, méchant', kanji: '悪い',
    theme: 'adjectifs', theme_label: 'Adjectifs', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'てんきがわるいですね。かさをもっていきましょう。', romaji: 'Tenki ga warui desu ne. Kasa o motte ikimasho.', fr: 'Le temps est mauvais. Emportons un parapluie.' }],
  },
  {
    kana: 'あに', romaji: 'ani', fr: 'grand frère (le mien)', kanji: '兄',
    theme: 'famille', theme_label: 'Famille', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'あにといっしょににほんにきました。', romaji: 'Ani to issho ni Nihon ni kimashita.', fr: 'Je suis venu au Japon avec mon grand frère.' }],
  },
  {
    kana: 'あね', romaji: 'ane', fr: 'grande sœur (la mienne)', kanji: '姉',
    theme: 'famille', theme_label: 'Famille', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'あねはにほんごがじょうずです。', romaji: 'Ane wa nihongo ga jōzu desu.', fr: 'Ma grande sœur parle bien japonais.' }],
  },
  {
    kana: 'おかあさん', romaji: 'okāsan', fr: 'maman (autrui)', kanji: 'お母さん',
    theme: 'famille', theme_label: 'Famille', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'おかあさんはにほんりょうりがじょうずですか？', romaji: 'Okāsan wa Nihon ryōri ga jōzu desu ka?', fr: 'Est-ce que votre mère cuisine bien japonais ?' }],
  },
  {
    kana: 'おじいさん', romaji: 'ojīsan', fr: 'grand-père (autrui), vieil homme', kanji: 'お祖父さん',
    theme: 'famille', theme_label: 'Famille', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'おじいさんがにほんのはなしをしてくれました。', romaji: 'Ojīsan ga Nihon no hanashi o shite kuremashita.', fr: 'Le grand-père m\'a raconté des histoires sur le Japon.' }],
  },
  {
    kana: 'おじさん', romaji: 'ojisan', fr: 'oncle (autrui), homme d\'âge mûr', kanji: 'おじさん',
    theme: 'famille', theme_label: 'Famille', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'そのおじさんはみちをおしえてくれました。', romaji: 'Sono ojisan wa michi o oshiete kuremashita.', fr: 'Cet homme m\'a indiqué le chemin.' }],
  },
  {
    kana: 'おとうさん', romaji: 'otōsan', fr: 'papa (autrui)', kanji: 'お父さん',
    theme: 'famille', theme_label: 'Famille', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'おとうさんはにほんのおさけがすきですか？', romaji: 'Otōsan wa Nihon no osake ga suki desu ka?', fr: 'Votre père aime-t-il le saké japonais ?' }],
  },
  {
    kana: 'おとうと', romaji: 'otōto', fr: 'petit frère (le mien)', kanji: '弟',
    theme: 'famille', theme_label: 'Famille', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'おとうとはにほんのアニメがだいすきです。', romaji: 'Otōto wa Nihon no anime ga daisuki desu.', fr: 'Mon petit frère adore les animés japonais.' }],
  },
  {
    kana: 'おにいさん', romaji: 'oniisan', fr: 'grand frère (autrui)', kanji: 'お兄さん',
    theme: 'famille', theme_label: 'Famille', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'おにいさんはどこにすんでいますか？', romaji: 'Oniisan wa doko ni sunde imasu ka?', fr: 'Où habite votre grand frère ?' }],
  },
  {
    kana: 'おねえさん', romaji: 'onēsan', fr: 'grande sœur (autrui)', kanji: 'お姉さん',
    theme: 'famille', theme_label: 'Famille', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'おねえさんはにほんにすんでいますか？', romaji: 'Onēsan wa Nihon ni sunde imasu ka?', fr: 'Votre grande sœur habite-t-elle au Japon ?' }],
  },
  {
    kana: 'おばあさん', romaji: 'obāsan', fr: 'grand-mère (autrui), vieille femme', kanji: 'お祖母さん',
    theme: 'famille', theme_label: 'Famille', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'おばあさんがわがしをくれました。おいしかった！', romaji: 'Obāsan ga wagashi o kuremashita. Oishikatta!', fr: 'La dame âgée m\'a donné des sucreries japonaises. C\'était délicieux !' }],
  },
  {
    kana: 'おばさん', romaji: 'obasan', fr: 'tante (autrui), femme d\'âge mûr', kanji: 'おばさん',
    theme: 'famille', theme_label: 'Famille', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'そのおばさんはにほんごをおしえてくれました。', romaji: 'Sono obasan wa nihongo o oshiete kuremashita.', fr: 'Cette dame m\'a appris quelques mots japonais.' }],
  },
  {
    kana: 'かあさん', romaji: 'kāsan', fr: 'maman (la mienne, familier)', kanji: '母さん',
    theme: 'famille', theme_label: 'Famille', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'かあさんにおみやげをかいました。よろこんでくれるといいな。', romaji: 'Kāsan ni omiyage o kaimashita. Yorokonde kureru to ii na.', fr: 'J\'ai acheté un souvenir pour maman. J\'espère qu\'elle sera contente.' }],
  },
  {
    kana: 'こども', romaji: 'kodomo', fr: 'enfant', kanji: '子供',
    theme: 'famille', theme_label: 'Famille', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのこどもたちはおとなしくてかわいいですね。', romaji: 'Nihon no kodomotachi wa otonashikute kawaii desu ne.', fr: 'Les enfants japonais sont sages et adorables.' }],
  },
  {
    kana: 'とうさん', romaji: 'tōsan', fr: 'papa (le mien, familier)', kanji: '父さん',
    theme: 'famille', theme_label: 'Famille', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'とうさんはにほんのたびをゆめみていました。', romaji: 'Tōsan wa Nihon no tabi o yumemite imashita.', fr: 'Papa rêvait de voyager au Japon.' }],
  },
  {
    kana: 'いもうと', romaji: 'imōto', fr: 'petite sœur (la mienne)', kanji: '妹',
    theme: 'famille', theme_label: 'Famille', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'いもうとにかわいいおみやげをかいました。', romaji: 'Imōto ni kawaii omiyage o kaimashita.', fr: 'J\'ai acheté un joli souvenir pour ma petite sœur.' }],
  },
  {
    kana: 'ひと', romaji: 'hito', fr: 'personne, gens', kanji: '人',
    theme: 'famille', theme_label: 'Famille', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのひとはしんせつです。', romaji: 'Nihon no hito wa shinsetsu desu.', fr: 'Les gens au Japon sont aimables.' }],
  },
  {
    kana: 'あたま', romaji: 'atama', fr: 'tête', kanji: '頭',
    theme: 'sante', theme_label: 'Santé', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'あたまがいたいです。ちょっとやすみたいです。', romaji: 'Atama ga itai desu. Chotto yasumitai desu.', fr: 'J\'ai mal à la tête. Je voudrais me reposer un peu.' }],
  },
  {
    kana: 'おなか', romaji: 'onaka', fr: 'ventre, estomac', kanji: 'お腹',
    theme: 'sante', theme_label: 'Santé', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'おなかがすきました！はやくたべましょう。', romaji: 'Onaka ga sukimashita! Hayaku tabemasho.', fr: 'J\'ai faim ! Mangeons vite.' }],
  },
  {
    kana: 'かぜ', romaji: 'kaze', fr: 'rhume', kanji: '風邪',
    theme: 'sante', theme_label: 'Santé', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'かぜをひいてしまいました。やっかいです。', romaji: 'Kaze o hiite shimaimashita. Yakkaiです.', fr: 'J\'ai attrapé un rhume. Quel ennui.' }],
  },
  {
    kana: 'から', romaji: 'kara', fr: 'corps', kanji: '体',
    theme: 'sante', theme_label: 'Santé', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'からだをたいせつにしてください。', romaji: 'Karada o taisetsu ni shite kudasai.', fr: 'Prenez soin de votre corps.' }],
  },
  {
    kana: 'くすり', romaji: 'kusuri', fr: 'médicament', kanji: '薬',
    theme: 'sante', theme_label: 'Santé', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'あたまがいたいです。くすりをのみます。', romaji: 'Atama ga itai desu. Kusuri o nomimasu.', fr: 'J\'ai mal à la tête. Je vais prendre un médicament.' }],
  },
  {
    kana: 'こうえん', romaji: 'kōen', fr: 'parc', kanji: '公園',
    theme: 'lieux', theme_label: 'Lieux', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このこうえんでおはなみをしましょう！', romaji: 'Kono kōen de ohanami o shimasho!', fr: 'Faisons le hanami dans ce parc !' }],
  },
  {
    kana: 'しんぱい', romaji: 'shinpai', fr: 'inquiétude, souci', kanji: '心配',
    theme: 'sante', theme_label: 'Santé', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'しんぱいしないでください。だいじょうぶですよ。', romaji: 'Shinpai shinaide kudasai. Daijōbu desu yo.', fr: 'Ne vous inquiétez pas. Tout va bien.' }],
  },
  {
    kana: 'せ', romaji: 'se', fr: 'dos, taille (hauteur)', kanji: '背',
    theme: 'sante', theme_label: 'Santé', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんじんはせがひくいといわれますが、わかものはちがいます。', romaji: 'Nihonjin wa se ga hikui to iwaremasu ga, wakamono wa chigaimasu.', fr: 'On dit que les Japonais sont petits, mais les jeunes c\'est différent.' }],
  },
  {
    kana: 'せなか', romaji: 'senaka', fr: 'dos', kanji: '背中',
    theme: 'sante', theme_label: 'Santé', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'せなかがいたいです。おんせんにはいりたいです。', romaji: 'Senaka ga itai desu. Onsen ni hairitai desu.', fr: 'J\'ai mal au dos. Je veux aller à l\'onsen.' }],
  },
  {
    kana: 'たいへん', romaji: 'taihen', fr: 'difficile, grave, très', kanji: '大変',
    theme: 'sante', theme_label: 'Santé', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんごはたいへんむずかしいですが、たのしいです。', romaji: 'Nihongo wa taihen muzukashii desu ga, tanoshii desu.', fr: 'Le japonais est très difficile, mais c\'est amusant.' }],
  },
  {
    kana: 'つかれる', romaji: 'tsukareru', fr: 'être fatigué', kanji: '疲れる',
    theme: 'sante', theme_label: 'Santé', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'たくさんあるいてつかれました。おんせんにいきましょう！', romaji: 'Takusan aruite tsukaremashita. Onsen ni ikimasho!', fr: 'J\'ai beaucoup marché et je suis fatigué. Allons à l\'onsen !' }],
  },
  {
    kana: 'はな', romaji: 'hana', fr: 'nez', kanji: '鼻',
    theme: 'sante', theme_label: 'Santé', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'はなみずがでます。かぜかもしれません。', romaji: 'Hanamizu ga demasu. Kaze kamo shiremasen.', fr: 'J\'ai le nez qui coule. C\'est peut-être un rhume.' }],
  },
  {
    kana: 'ひだり', romaji: 'hidari', fr: 'gauche', kanji: '左',
    theme: 'orientation', theme_label: 'Orientation', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'つぎのかどをひだりにまがってください。', romaji: 'Tsugi no kado o hidari ni magatte kudasai.', fr: 'Tournez à gauche au prochain coin.' }],
  },
  {
    kana: 'びょうき', romaji: 'byōki', fr: 'maladie, être malade', kanji: '病気',
    theme: 'sante', theme_label: 'Santé', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'びょうきのときにおかゆはやさしいたべものです。', romaji: 'Byōki no toki ni okayu wa yasashii tabemono desu.', fr: 'Quand on est malade, la bouillie de riz est un aliment doux.' }],
  },
  {
    kana: 'みぎ', romaji: 'migi', fr: 'droite', kanji: '右',
    theme: 'orientation', theme_label: 'Orientation', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'みぎがわをあるいてください。', romaji: 'Migi-gawa o aruite kudasai.', fr: 'Marchez sur le côté droit.' }],
  },
  {
    kana: 'むね', romaji: 'mune', fr: 'poitrine', kanji: '胸',
    theme: 'sante', theme_label: 'Santé', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'むねがあつくなります、にほんのおもいでで。', romaji: 'Mune ga atsuku narimasu, Nihon no omoide de.', fr: 'Mon cœur se réchauffe en me souvenant du Japon.' }],
  },
  {
    kana: 'あさごはん', romaji: 'asagohan', fr: 'petit-déjeuner', kanji: '朝ご飯',
    theme: 'nourriture', theme_label: 'Nourriture', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのあさごはんはごはんとみそしるです。おいしい！', romaji: 'Nihon no asagohan wa gohan to miso shiru desu. Oishii!', fr: 'Le petit-déjeuner japonais c\'est riz et soupe miso. Délicieux !' }],
  },
  {
    kana: 'おかし', romaji: 'okashi', fr: 'confiseries, gâteaux', kanji: 'お菓子',
    theme: 'nourriture', theme_label: 'Nourriture', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのおかしはえんとかいえます。おみやげにぴったり！', romaji: 'Nihon no okashi wa en to ka iemasu. Omiyage ni pittari!', fr: 'Les confiseries japonaises, c\'est un art. Parfait en souvenir !' }],
  },
  {
    kana: 'おにく', romaji: 'oniku', fr: 'viande (poli)', kanji: 'お肉',
    theme: 'nourriture', theme_label: 'Nourriture', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このおにくはわぎゅうですか？', romaji: 'Kono oniku wa wagyū desu ka?', fr: 'Cette viande est du wagyu ?' }],
  },
  {
    kana: 'かいもの', romaji: 'kaimono', fr: 'courses, shopping', kanji: '買い物',
    theme: 'nourriture', theme_label: 'Nourriture', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'いちばでかいものをしました。しんせんなやさいがたくさんありました。', romaji: 'Ichiba de kaimono o shimashita. Shinsen na yasai ga takusan arimashita.', fr: 'J\'ai fait des courses au marché. Il y avait beaucoup de légumes frais.' }],
  },
  {
    kana: 'くだもの', romaji: 'kudamono', fr: 'fruit', kanji: '果物',
    theme: 'nourriture', theme_label: 'Nourriture', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのくだものはたかいですが、あまくておいしいです。', romaji: 'Nihon no kudamono wa takai desu ga, amakute oishii desu.', fr: 'Les fruits japonais sont chers mais doux et délicieux.' }],
  },
  {
    kana: 'こめ', romaji: 'kome', fr: 'riz (grain)', kanji: '米',
    theme: 'nourriture', theme_label: 'Nourriture', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのこめはにほんしゅのもととなります。', romaji: 'Nihon no kome wa nihonshu no moto to narimasu.', fr: 'Le riz japonais est la base du nihonshu.' }],
  },
  {
    kana: 'ごはん', romaji: 'gohan', fr: 'riz cuit, repas', kanji: 'ご飯',
    theme: 'nourriture', theme_label: 'Nourriture', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのごはんはもちもちしていておいしいです！', romaji: 'Nihon no gohan wa mochimochi shite ite oishii desu!', fr: 'Le riz japonais est moelleux et délicieux !' }],
  },
  {
    kana: 'さかな', romaji: 'sakana', fr: 'poisson', kanji: '魚',
    theme: 'nourriture', theme_label: 'Nourriture', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのさかなはしんせんでおいしいです。まいにちたべたい！', romaji: 'Nihon no sakana wa shinsen de oishii desu. Mainichi tabetai!', fr: 'Le poisson japonais est frais et délicieux. Je voudrais en manger tous les jours !' }],
  },
  {
    kana: 'さとう', romaji: 'satō', fr: 'sucre', kanji: '砂糖',
    theme: 'nourriture', theme_label: 'Nourriture', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このおかしにはさとうがたくさんはいっています。', romaji: 'Kono okashi ni wa satō ga takusan haitte imasu.', fr: 'Cette confiserie contient beaucoup de sucre.' }],
  },
  {
    kana: 'しお', romaji: 'shio', fr: 'sel', kanji: '塩',
    theme: 'nourriture', theme_label: 'Nourriture', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'しおらーめんはあっさりしてておいしいです。', romaji: 'Shio rāmen wa assari shite te oishii desu.', fr: 'Le ramen au sel est léger et délicieux.' }],
  },
  {
    kana: 'しょくじ', romaji: 'shokuji', fr: 'repas', kanji: '食事',
    theme: 'nourriture', theme_label: 'Nourriture', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのしょくじはいつもたのしみにしています。', romaji: 'Nihon no shokuji wa itsumo tanoshimi ni shite imasu.', fr: 'Je me réjouis toujours des repas japonais.' }],
  },
  {
    kana: 'スープ', romaji: 'sūpu', fr: 'soupe', kanji: '',
    theme: 'nourriture', theme_label: 'Nourriture', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'みそしるはにほんのスープです。からだがあたたまります。', romaji: 'Miso shiru wa Nihon no sūpu desu. Karada ga atatatamarimasu.', fr: 'La soupe miso est la soupe japonaise. Elle réchauffe le corps.' }],
  },
  {
    kana: 'たまねぎ', romaji: 'tamanegi', fr: 'oignon', kanji: '玉ねぎ',
    theme: 'nourriture', theme_label: 'Nourriture', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのカレーにはたまねぎがたくさんはいっています。', romaji: 'Nihon no karē ni wa tamanegi ga takusan haitte imasu.', fr: 'Le curry japonais contient beaucoup d\'oignons.' }],
  },
  {
    kana: 'たべもの', romaji: 'tabemono', fr: 'nourriture, aliment', kanji: '食べ物',
    theme: 'nourriture', theme_label: 'Nourriture', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのたべものはぜんぶおいしいです！えらべません。', romaji: 'Nihon no tabemono wa zenbu oishii desu! Erabemasen.', fr: 'Toute la nourriture japonaise est délicieuse ! Je n\'arrive pas à choisir.' }],
  },
  {
    kana: 'とりにく', romaji: 'toriniku', fr: 'poulet, volaille', kanji: '鶏肉',
    theme: 'nourriture', theme_label: 'Nourriture', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'やきとりはとりにくのくしやきです。おいしい！', romaji: 'Yakitori wa toriniku no kushiyaki desu. Oishii!', fr: 'Le yakitori c\'est du poulet grillé en brochette. Délicieux !' }],
  },
  {
    kana: 'にく', romaji: 'niku', fr: 'viande', kanji: '肉',
    theme: 'nourriture', theme_label: 'Nourriture', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'わぎゅうのにくはせかいいちおいしいとおもいます。', romaji: 'Wagyū no niku wa sekai-ichi oishii to omoimasu.', fr: 'La viande wagyu est, à mon avis, la meilleure du monde.' }],
  },
  {
    kana: 'パン', romaji: 'pan', fr: 'pain', kanji: '',
    theme: 'nourriture', theme_label: 'Nourriture', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのパンやはとてもおいしいです。フランスよりも？', romaji: 'Nihon no panya wa totemo oishii desu. Furansu yori mo?', fr: 'Les boulangeries japonaises sont très bonnes. Meilleures qu\'en France ?' }],
  },
  {
    kana: 'ばんごはん', romaji: 'bangohan', fr: 'dîner', kanji: '晩ご飯',
    theme: 'nourriture', theme_label: 'Nourriture', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ばんごはんはどこでたべますか？いざかやにしましょう！', romaji: 'Bangohan wa doko de tabemasu ka? Izakaya ni shimasho!', fr: 'Où dîne-t-on ? Allons à l\'izakaya !' }],
  },
  {
    kana: 'ひるごはん', romaji: 'hirugohan', fr: 'déjeuner', kanji: '昼ご飯',
    theme: 'nourriture', theme_label: 'Nourriture', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ひるごはんはラーメンにします！', romaji: 'Hirugohan wa rāmen ni shimasu!', fr: 'Pour le déjeuner je vais prendre un ramen !' }],
  },
  {
    kana: 'やさい', romaji: 'yasai', fr: 'légumes', kanji: '野菜',
    theme: 'nourriture', theme_label: 'Nourriture', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのやさいはしんせんでおいしいです。', romaji: 'Nihon no yasai wa shinsen de oishii desu.', fr: 'Les légumes japonais sont frais et délicieux.' }],
  },
  {
    kana: 'おさけ', romaji: 'osake', fr: 'alcool (poli)', kanji: 'お酒',
    theme: 'boissons', theme_label: 'Boissons', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのおさけはせかいいちだとおもいます！', romaji: 'Nihon no osake wa sekai-ichi da to omoimasu!', fr: 'Je pense que les alcools japonais sont les meilleurs du monde !' }],
  },
  {
    kana: 'おちゃ', romaji: 'ocha', fr: 'thé (japonais)', kanji: 'お茶',
    theme: 'boissons', theme_label: 'Boissons', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'まっちゃのおちゃはほんのうみがあって、とてもおいしいです。', romaji: 'Matcha no ocha wa hon no umi ga atte, totemo oishii desu.', fr: 'Le thé matcha a une vraie profondeur de goût, c\'est délicieux.' }],
  },
  {
    kana: 'おみず', romaji: 'omizu', fr: 'eau (poli)', kanji: 'お水',
    theme: 'boissons', theme_label: 'Boissons', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'おみずをいっぱいください。', romaji: 'Omizu o ippai kudasai.', fr: 'Un verre d\'eau s\'il vous plaît.' }],
  },
  {
    kana: 'ぎゅうにゅう', romaji: 'gyūnyū', fr: 'lait', kanji: '牛乳',
    theme: 'boissons', theme_label: 'Boissons', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのぎゅうにゅうはこくがあっておいしいです。', romaji: 'Nihon no gyūnyū wa koku ga atte oishii desu.', fr: 'Le lait japonais est riche et délicieux.' }],
  },
  {
    kana: 'コーヒー', romaji: 'kōhī', fr: 'café', kanji: '',
    theme: 'boissons', theme_label: 'Boissons', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのコーヒーはとてもおいしいです。きっさてんがたくさんあります。', romaji: 'Nihon no kōhī wa totemo oishii desu. Kissaten ga takusan arimasu.', fr: 'Le café japonais est excellent. Il y a beaucoup de cafés.' }],
  },
  {
    kana: 'ジュース', romaji: 'jūsu', fr: 'jus, soda', kanji: '',
    theme: 'boissons', theme_label: 'Boissons', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのはんばいきにめずらしいジュースがあります。', romaji: 'Nihon no hanbaiki ni mezurashii jūsu ga arimasu.', fr: 'Les distributeurs au Japon ont des jus originaux.' }],
  },
  {
    kana: 'にほんしゅ', romaji: 'nihonshu', fr: 'saké japonais', kanji: '日本酒',
    theme: 'boissons', theme_label: 'Boissons', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんしゅはこめからつくられます。フランスのワインみたいにちいきがあります。', romaji: 'Nihonshu wa kome kara tsukuraremasu. Furansu no wain mitai ni chiiki ga arimasu.', fr: 'Le nihonshu est fait de riz. Comme le vin français il a des terroirs.' }],
  },
  {
    kana: 'のみもの', romaji: 'nomimono', fr: 'boisson, quelque chose à boire', kanji: '飲み物',
    theme: 'boissons', theme_label: 'Boissons', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'おのみものはなにになさいますか？', romaji: 'Onomimono wa nani ni nasaimasu ka?', fr: 'Que prenez-vous comme boisson ?' }],
  },
  {
    kana: 'ビール', romaji: 'bīru', fr: 'bière', kanji: '',
    theme: 'boissons', theme_label: 'Boissons', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのビールはのみやすくておいしいです。かんぱい！', romaji: 'Nihon no bīru wa nomiyasukute oishii desu. Kanpai!', fr: 'La bière japonaise est facile à boire et délicieuse. Santé !' }],
  },
  {
    kana: 'みず', romaji: 'mizu', fr: 'eau', kanji: '水',
    theme: 'boissons', theme_label: 'Boissons', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのみずはそのままのめます。おいしいです。', romaji: 'Nihon no mizu wa sono mama nomemasu. Oishii desu.', fr: 'L\'eau du robinet au Japon est potable directement. Elle est bonne.' }],
  },
  {
    kana: 'むぎちゃ', romaji: 'mugicha', fr: 'thé d\'orge', kanji: '麦茶',
    theme: 'boissons', theme_label: 'Boissons', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'なつはつめたいむぎちゃがおいしいです。', romaji: 'Natsu wa tsumetai mugicha ga oishii desu.', fr: 'En été le thé d\'orge froid est délicieux.' }],
  },
  {
    kana: 'ワイン', romaji: 'wain', fr: 'vin', kanji: '',
    theme: 'boissons', theme_label: 'Boissons', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'フランスのワインをもってにほんにきました。おみやげです。', romaji: 'Furansu no wain o motte Nihon ni kimashita. Omiyage desu.', fr: 'J\'ai apporté du vin français au Japon. C\'est mon cadeau.' }],
  },
  {
    kana: 'おゆ', romaji: 'oyu', fr: 'eau chaude', kanji: 'お湯',
    theme: 'boissons', theme_label: 'Boissons', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'おゆをのんでからだをあたためましょう。', romaji: 'Oyu o nonde karada o atatamemasho.', fr: 'Buvons de l\'eau chaude pour réchauffer le corps.' }],
  },
  {
    kana: 'シャワー', romaji: 'shawā', fr: 'douche', kanji: '',
    theme: 'boissons', theme_label: 'Boissons', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'おんせんのあとにシャワーをあびてもいいですか？', romaji: 'Onsen no ato ni shawā o abite mo ii desu ka?', fr: 'Puis-je prendre une douche après l\'onsen ?' }],
  },
  {
    kana: 'のむ', romaji: 'nomu', fr: 'boire', kanji: '飲む',
    theme: 'boissons', theme_label: 'Boissons', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'いっしょにおさけをのみましょう！かんぱい！', romaji: 'Issho ni osake o nomimasho! Kanpai!', fr: 'Buvons ensemble ! Santé !' }],
  },
  {
    kana: 'きっさてん', romaji: 'kissaten', fr: 'café, salon de thé', kanji: '喫茶店',
    theme: 'boissons', theme_label: 'Boissons', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このきっさてんはふんいきがよくてしずかです。', romaji: 'Kono kissaten wa fun\'iki ga yokute shizuka desu.', fr: 'Ce café a une bonne ambiance et c\'est calme.' }],
  },
  {
    kana: 'コップ', romaji: 'koppu', fr: 'verre, tasse', kanji: '',
    theme: 'boissons', theme_label: 'Boissons', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'もういっぱいコップをください。', romaji: 'Mō ippai koppu o kudasai.', fr: 'Un autre verre s\'il vous plaît.' }],
  },
  {
    kana: 'おわん', romaji: 'owan', fr: 'bol à soupe (laqué)', kanji: 'お椀',
    theme: 'restaurant', theme_label: 'Restaurant', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'おわんにみそしるがはいっています。', romaji: 'Owan ni miso shiru ga haitte imasu.', fr: 'Le bol contient de la soupe miso.' }],
  },
  {
    kana: 'おちゃわん', romaji: 'ochawan', fr: 'bol à riz', kanji: 'お茶碗',
    theme: 'restaurant', theme_label: 'Restaurant', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このおちゃわんはとてもきれいなもようがあります。おみやげにします。', romaji: 'Kono ochawan wa totemo kirei na moyō ga arimasu. Omiyage ni shimasu.', fr: 'Ce bol à riz a un beau motif. Je l\'achète en souvenir.' }],
  },
  {
    kana: 'はし', romaji: 'hashi', fr: 'baguettes', kanji: '箸',
    theme: 'restaurant', theme_label: 'Restaurant', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'はしをじょうずにつかえますか？れんしゅうすればできますよ。', romaji: 'Hashi o jōzu ni tsukaemasu ka? Renshū sureba dekimasu yo.', fr: 'Savez-vous bien utiliser les baguettes ? Avec de la pratique vous y arriverez.' }],
  },
  {
    kana: 'フォーク', romaji: 'fōku', fr: 'fourchette', kanji: '',
    theme: 'restaurant', theme_label: 'Restaurant', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'フォークをかしてもらえますか？はしがつかえません。', romaji: 'Fōku o kashite moraemasu ka? Hashi ga tsukaemasen.', fr: 'Pourriez-vous me prêter une fourchette ? Je ne sais pas utiliser les baguettes.' }],
  },
  {
    kana: 'スプーン', romaji: 'supūn', fr: 'cuillère', kanji: '',
    theme: 'restaurant', theme_label: 'Restaurant', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'スプーンをいっぽんください。このスープをのみたいです。', romaji: 'Supūn o ippon kudasai. Kono sūpu o nomitai desu.', fr: 'Une cuillère s\'il vous plaît. Je veux boire cette soupe.' }],
  },
  {
    kana: 'テーブル', romaji: 'tēburu', fr: 'table', kanji: '',
    theme: 'restaurant', theme_label: 'Restaurant', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'まどのそばのテーブルをよやくしました。', romaji: 'Mado no soba no tēburu o yoyaku shimashita.', fr: 'J\'ai réservé la table près de la fenêtre.' }],
  },
  {
    kana: 'なまえ', romaji: 'namae', fr: 'nom (pour réservation)', kanji: '名前',
    theme: 'restaurant', theme_label: 'Restaurant', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'よやくはフランスのなまえでしています。', romaji: 'Yoyaku wa Furansu no namae de shite imasu.', fr: 'La réservation est au nom de France.' }],
  },
  {
    kana: 'メニュー', romaji: 'menyū', fr: 'menu, carte', kanji: '',
    theme: 'restaurant', theme_label: 'Restaurant', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このメニューにえいごのせつめいはありますか？', romaji: 'Kono menyū ni eigo no setsumei wa arimasu ka?', fr: 'Ce menu a-t-il des explications en anglais ?' }],
  },
  {
    kana: 'あける', romaji: 'akeru', fr: 'ouvrir', kanji: '開ける',
    theme: 'hotel', theme_label: 'Hôtel', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'まどをあけてもいいですか？かぜがほしいです。', romaji: 'Mado o akete mo ii desu ka? Kaze ga hoshii desu.', fr: 'Puis-je ouvrir la fenêtre ? Je voudrais un peu d\'air.' }],
  },
  {
    kana: 'アパート', romaji: 'apāto', fr: 'appartement', kanji: '',
    theme: 'hotel', theme_label: 'Hôtel', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのアパートはせまいですが、きれいです。', romaji: 'Nihon no apāto wa semai desu ga, kirei desu.', fr: 'Les appartements japonais sont petits mais propres.' }],
  },
  {
    kana: 'いす', romaji: 'isu', fr: 'chaise', kanji: '椅子',
    theme: 'hotel', theme_label: 'Hôtel', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このいすはすわりごこちがいいです。', romaji: 'Kono isu wa suwari-gokochi ga ii desu.', fr: 'Cette chaise est confortable.' }],
  },
  {
    kana: 'うえ', romaji: 'ue', fr: 'dessus, au-dessus', kanji: '上',
    theme: 'hotel', theme_label: 'Hôtel', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'テーブルのうえにパスポートがあります。', romaji: 'Tēburu no ue ni pasupōto ga arimasu.', fr: 'Le passeport est sur la table.' }],
  },
  {
    kana: 'えき', romaji: 'eki', fr: 'gare', kanji: '駅',
    theme: 'hotel', theme_label: 'Hôtel', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このホテルはえきからちかくてべんりです。', romaji: 'Kono hoteru wa eki kara chikakute benri desu.', fr: 'Cet hôtel est proche de la gare et pratique.' }],
  },
  {
    kana: 'かぎ', romaji: 'kagi', fr: 'clé', kanji: '鍵',
    theme: 'hotel', theme_label: 'Hôtel', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'へやのかぎをなくしてしまいました。すみません。', romaji: 'Heya no kagi o nakushite shimaimashita. Sumimasen.', fr: 'J\'ai perdu la clé de la chambre. Je suis désolé.' }],
  },
  {
    kana: 'しめる', romaji: 'shimeru', fr: 'fermer', kanji: '閉める',
    theme: 'hotel', theme_label: 'Hôtel', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'でるときにドアをしめてください。', romaji: 'Deru toki ni doa o shimete kudasai.', fr: 'Fermez la porte quand vous sortez.' }],
  },
  {
    kana: 'した', romaji: 'shita', fr: 'dessous, en bas', kanji: '下',
    theme: 'hotel', theme_label: 'Hôtel', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ベッドのしたにスーツケースをおきました。', romaji: 'Beddo no shita ni sūtsukēsu o okimashita.', fr: 'J\'ai mis la valise sous le lit.' }],
  },
  {
    kana: 'つくえ', romaji: 'tsukue', fr: 'bureau, table de travail', kanji: '机',
    theme: 'hotel', theme_label: 'Hôtel', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'つくえのうえにほんをおいています。', romaji: 'Tsukue no ue ni hon o oite imasu.', fr: 'J\'ai posé le livre sur le bureau.' }],
  },
  {
    kana: 'デパート', romaji: 'depāto', fr: 'grand magasin', kanji: '',
    theme: 'hotel', theme_label: 'Hôtel', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのデパートのちかはたべもののてんごくです。', romaji: 'Nihon no depāto no chika wa tabemono no tengoku desu.', fr: 'Le sous-sol des grands magasins japonais est un paradis gourmand.' }],
  },
  {
    kana: 'となり', romaji: 'tonari', fr: 'à côté, voisin', kanji: '隣',
    theme: 'hotel', theme_label: 'Hôtel', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'となりのへやはしずかです。', romaji: 'Tonari no heya wa shizuka desu.', fr: 'La chambre à côté est calme.' }],
  },
  {
    kana: 'にわ', romaji: 'niwa', fr: 'jardin', kanji: '庭',
    theme: 'hotel', theme_label: 'Hôtel', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'りょかんのにわはえどじだいのてんけいです。すばらしい！', romaji: 'Ryokan no niwa wa Edo jidai no tenkei desu. Subarashii!', fr: 'Le jardin du ryokan est typique de l\'époque Edo. Magnifique !' }],
  },
  {
    kana: 'ふろ', romaji: 'furo', fr: 'bain, salle de bain', kanji: '風呂',
    theme: 'hotel', theme_label: 'Hôtel', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんではまいばんふろにはいります。きもちいい！', romaji: 'Nihon de wa maiban furo ni hairimasu. Kimochi ii!', fr: 'Au Japon on prend un bain chaque soir. C\'est agréable !' }],
  },
  {
    kana: 'ベッド', romaji: 'beddo', fr: 'lit', kanji: '',
    theme: 'hotel', theme_label: 'Hôtel', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このホテルのベッドはかたいです。りょかんのふとんのほうがすきです。', romaji: 'Kono hoteru no beddo wa katai desu. Ryokan no futon no hō ga suki desu.', fr: 'Le lit de cet hôtel est dur. Je préfère le futon du ryokan.' }],
  },
  {
    kana: 'へや', romaji: 'heya', fr: 'chambre, pièce', kanji: '部屋',
    theme: 'hotel', theme_label: 'Hôtel', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'りょかんのへやはたたみでとてもきもちいいです。', romaji: 'Ryokan no heya wa tatami de totemo kimochi ii desu.', fr: 'La chambre du ryokan est en tatami, c\'est très agréable.' }],
  },
  {
    kana: 'まど', romaji: 'mado', fr: 'fenêtre', kanji: '窓',
    theme: 'hotel', theme_label: 'Hôtel', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'まどからふじさんがみえます！さいこうのへや！', romaji: 'Mado kara Fujisan ga miemasu! Saikō no heya!', fr: 'On voit le Mont Fuji par la fenêtre ! Chambre parfaite !' }],
  },
  {
    kana: 'よこ', romaji: 'yoko', fr: 'côté, à côté', kanji: '横',
    theme: 'hotel', theme_label: 'Hôtel', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'エレベーターのよこにほんだながあります。', romaji: 'Erebētā no yoko ni hondana ga arimasu.', fr: 'Il y a une étagère à livres à côté de l\'ascenseur.' }],
  },
  {
    kana: 'わしつ', romaji: 'washitsu', fr: 'chambre de style japonais', kanji: '和室',
    theme: 'hotel', theme_label: 'Hôtel', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'わしつにとまりたいです。たたみとふとんをためしたい！', romaji: 'Washitsu ni tomaritai desu. Tatami to futon o tameshitai!', fr: 'Je veux séjourner dans une chambre japonaise. Je veux essayer le tatami et le futon !' }],
  },
  {
    kana: 'うごく', romaji: 'ugoku', fr: 'bouger, se déplacer', kanji: '動く',
    theme: 'transport', theme_label: 'Transport', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'しんかんせんはとてもなめらかにうごきます。', romaji: 'Shinkansen wa totemo nameraka ni ugokimasu.', fr: 'Le Shinkansen se déplace très doucement.' }],
  },
  {
    kana: 'くるま', romaji: 'kuruma', fr: 'voiture', kanji: '車',
    theme: 'transport', theme_label: 'Transport', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんではくるまよりでんしゃのほうがべんりです。', romaji: 'Nihon de wa kuruma yori densha no hō ga benri desu.', fr: 'Au Japon le train est plus pratique que la voiture.' }],
  },
  {
    kana: 'じてんしゃ', romaji: 'jitensha', fr: 'vélo', kanji: '自転車',
    theme: 'transport', theme_label: 'Transport', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'きょうとはじてんしゃでかんこうするのがおすすめです。', romaji: 'Kyōto wa jitensha de kankō suru no ga osusume desu.', fr: 'À Kyoto il est recommandé de visiter à vélo.' }],
  },
  {
    kana: 'でんしゃ', romaji: 'densha', fr: 'train électrique, métro', kanji: '電車',
    theme: 'transport', theme_label: 'Transport', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのでんしゃはじかんとおりにきます。すばらしい！', romaji: 'Nihon no densha wa jikan-dōri ni kimasu. Subarashii!', fr: 'Les trains japonais arrivent à l\'heure exacte. Extraordinaire !' }],
  },
  {
    kana: 'バス', romaji: 'basu', fr: 'bus', kanji: '',
    theme: 'transport', theme_label: 'Transport', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このバスはきんかくじにとまりますか？', romaji: 'Kono basu wa Kinkakuji ni tomarimasu ka?', fr: 'Ce bus s\'arrête-t-il au Kinkakuji ?' }],
  },
  {
    kana: 'ひこうき', romaji: 'hikōki', fr: 'avion', kanji: '飛行機',
    theme: 'transport', theme_label: 'Transport', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'パリからとうきょうまでひこうきでじゅうさんじかんです。', romaji: 'Pari kara Tōkyō made hikōki de jūsan-jikan desu.', fr: 'De Paris à Tokyo c\'est treize heures d\'avion.' }],
  },
  {
    kana: 'ふね', romaji: 'fune', fr: 'bateau', kanji: '船',
    theme: 'transport', theme_label: 'Transport', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'みやじまにいくにはふねにのります。', romaji: 'Miyajima ni iku ni wa fune ni norimasu.', fr: 'Pour aller à Miyajima on prend le bateau.' }],
  },
  {
    kana: 'のりもの', romaji: 'norimono', fr: 'moyen de transport, véhicule', kanji: '乗り物',
    theme: 'transport', theme_label: 'Transport', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんののりものはぜんぶせいじつです。', romaji: 'Nihon no norimono wa zenbu seijitsu desu.', fr: 'Tous les transports japonais sont ponctuels.' }],
  },
  {
    kana: 'バス停', romaji: 'basutei', fr: 'arrêt de bus', kanji: 'バス停',
    theme: 'transport', theme_label: 'Transport', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'バス停はどこですか？きんかくじにいきたいです。', romaji: 'Basutei wa doko desu ka? Kinkakuji ni ikitai desu.', fr: 'Où est l\'arrêt de bus ? Je veux aller au Kinkakuji.' }],
  },
  {
    kana: 'タクシー', romaji: 'takushī', fr: 'taxi', kanji: '',
    theme: 'transport', theme_label: 'Transport', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのタクシーはこうかいですが、きれいでていねいです。', romaji: 'Nihon no takushī wa kōka desu ga, kirei de teinei desu.', fr: 'Les taxis japonais sont chers mais propres et le service est poli.' }],
  },
  {
    kana: 'ちかてつ', romaji: 'chikatetsu', fr: 'métro', kanji: '地下鉄',
    theme: 'transport', theme_label: 'Transport', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'とうきょうのちかてつはふくざつですが、なれればべんりです。', romaji: 'Tōkyō no chikatetsu wa fukuzatsu desu ga, narereba benri desu.', fr: 'Le métro de Tokyo est complexe, mais une fois habitué c\'est pratique.' }],
  },
  {
    kana: 'あいだ', romaji: 'aida', fr: 'entre, intervalle', kanji: '間',
    theme: 'orientation', theme_label: 'Orientation', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'えきとホテルのあいだにコンビニがあります。', romaji: 'Eki to hoteru no aida ni konbini ga arimasu.', fr: 'Il y a un konbini entre la gare et l\'hôtel.' }],
  },
  {
    kana: 'あちら', romaji: 'achira', fr: 'par là (loin, poli)', kanji: 'あちら',
    theme: 'orientation', theme_label: 'Orientation', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'おてあらいはあちらです。', romaji: 'Otearai wa achira desu.', fr: 'Les toilettes sont par là-bas.' }],
  },
  {
    kana: 'あそこ', romaji: 'asoko', fr: 'là-bas (loin des deux)', kanji: 'あそこ',
    theme: 'orientation', theme_label: 'Orientation', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'あそこにとりいがみえます。じんじゃがあります。', romaji: 'Asoko ni torii ga miemasu. Jinja ga arimasu.', fr: 'Là-bas on voit un torii. Il y a un sanctuaire.' }],
  },
  {
    kana: 'いちばんちかい', romaji: 'ichiban chikai', fr: 'le plus proche', kanji: '一番近い',
    theme: 'orientation', theme_label: 'Orientation', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'いちばんちかいえきはどこですか？', romaji: 'Ichiban chikai eki wa doko desu ka?', fr: 'Où est la gare la plus proche ?' }],
  },
  {
    kana: 'うしろ', romaji: 'ushiro', fr: 'derrière', kanji: '後ろ',
    theme: 'orientation', theme_label: 'Orientation', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'うしろをみてください。ふじさんがみえます！', romaji: 'Ushiro o mite kudasai. Fujisan ga miemasu!', fr: 'Regardez derrière vous. On voit le Mont Fuji !' }],
  },
  {
    kana: 'おわり', romaji: 'owari', fr: 'fin, bout', kanji: '終わり',
    theme: 'orientation', theme_label: 'Orientation', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このみちのおわりにてらがあります。', romaji: 'Kono michi no owari ni tera ga arimasu.', fr: 'Au bout de ce chemin il y a un temple.' }],
  },
  {
    kana: 'かど', romaji: 'kado', fr: 'coin, angle', kanji: '角',
    theme: 'orientation', theme_label: 'Orientation', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このかどをみぎにまがってください。', romaji: 'Kono kado o migi ni magatte kudasai.', fr: 'Tournez à droite à ce coin.' }],
  },
  {
    kana: 'きた', romaji: 'kita', fr: 'nord', kanji: '北',
    theme: 'orientation', theme_label: 'Orientation', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ほっかいどうはにほんのきたにあります。', romaji: 'Hokkaidō wa Nihon no kita ni arimasu.', fr: 'Hokkaido se trouve dans le nord du Japon.' }],
  },
  {
    kana: 'ここ', romaji: 'koko', fr: 'ici', kanji: 'ここ',
    theme: 'orientation', theme_label: 'Orientation', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ここでしゃしんをとってもいいですか？', romaji: 'Koko de shashin o totte mo ii desu ka?', fr: 'Puis-je prendre des photos ici ?' }],
  },
  {
    kana: 'こちら', romaji: 'kochira', fr: 'ici, par ici (poli)', kanji: 'こちら',
    theme: 'orientation', theme_label: 'Orientation', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'こちらにどうぞ。おせきにご案内します。', romaji: 'Kochira ni dōzo. Oseki ni go-annai shimasu.', fr: 'Par ici s\'il vous plaît. Je vous accompagne à votre table.' }],
  },
  {
    kana: 'そこ', romaji: 'soko', fr: 'là (près de l\'interlocuteur)', kanji: 'そこ',
    theme: 'orientation', theme_label: 'Orientation', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'そこのドアをひらいてください。', romaji: 'Soko no doa o hiraite kudasai.', fr: 'Ouvrez la porte là s\'il vous plaît.' }],
  },
  {
    kana: 'そちら', romaji: 'sochira', fr: 'là (poli, côté interlocuteur)', kanji: 'そちら',
    theme: 'orientation', theme_label: 'Orientation', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'そちらはどちらですか？フランスですか？', romaji: 'Sochira wa dochira desu ka? Furansu desu ka?', fr: 'Vous venez d\'où ? De France ?' }],
  },
  {
    kana: 'ちかい', romaji: 'chikai', fr: 'proche', kanji: '近い',
    theme: 'orientation', theme_label: 'Orientation', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このホテルはえきにちかくてべんりです。', romaji: 'Kono hoteru wa eki ni chikakute benri desu.', fr: 'Cet hôtel est proche de la gare, c\'est pratique.' }],
  },
  {
    kana: 'つぎ', romaji: 'tsugi', fr: 'prochain, suivant', kanji: '次',
    theme: 'orientation', theme_label: 'Orientation', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'つぎのえきでおりてください。', romaji: 'Tsugi no eki de orite kudasai.', fr: 'Descendez à la prochaine station.' }],
  },
  {
    kana: 'どこ', romaji: 'doko', fr: 'où', kanji: 'どこ',
    theme: 'orientation', theme_label: 'Orientation', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'すみません、しんかんせんのりばはどこですか？', romaji: 'Sumimasen, shinkansen noriba wa doko desu ka?', fr: 'Excusez-moi, où est l\'embarcadère du Shinkansen ?' }],
  },
  {
    kana: 'どちら', romaji: 'dochira', fr: 'lequel des deux, où (poli)', kanji: 'どちら',
    theme: 'orientation', theme_label: 'Orientation', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'おでかけはどちらですか？', romaji: 'Odekake wa dochira desu ka?', fr: 'Où allez-vous ?' }],
  },
  {
    kana: 'なか', romaji: 'naka', fr: 'intérieur, dedans, parmi', kanji: '中',
    theme: 'orientation', theme_label: 'Orientation', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'かばんのなかにさいふがあります。', romaji: 'Kaban no naka ni saifu ga arimasu.', fr: 'Le portefeuille est dans le sac.' }],
  },
  {
    kana: 'にし', romaji: 'nishi', fr: 'ouest', kanji: '西',
    theme: 'orientation', theme_label: 'Orientation', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'きょうとはにほんのにしにあります。', romaji: 'Kyōto wa Nihon no nishi ni arimasu.', fr: 'Kyoto se trouve dans l\'ouest du Japon.' }],
  },
  {
    kana: 'ひがし', romaji: 'higashi', fr: 'est', kanji: '東',
    theme: 'orientation', theme_label: 'Orientation', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'とうきょうはにほんのひがしにあります。', romaji: 'Tōkyō wa Nihon no higashi ni arimasu.', fr: 'Tokyo se trouve dans l\'est du Japon.' }],
  },
  {
    kana: 'まっすぐ', romaji: 'massugu', fr: 'tout droit', kanji: 'まっすぐ',
    theme: 'orientation', theme_label: 'Orientation', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'まっすぐいくとえきがあります。', romaji: 'Massugu iku to eki ga arimasu.', fr: 'En allant tout droit vous trouverez la gare.' }],
  },
  {
    kana: 'みなみ', romaji: 'minami', fr: 'sud', kanji: '南',
    theme: 'orientation', theme_label: 'Orientation', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'おきなわはにほんのみなみにあります。あたたかいです。', romaji: 'Okinawa wa Nihon no minami ni arimasu. Atatakai desu.', fr: 'Okinawa se trouve dans le sud du Japon. Il fait doux.' }],
  },
  {
    kana: 'むこう', romaji: 'mukō', fr: 'de l\'autre côté, là-bas', kanji: '向こう',
    theme: 'orientation', theme_label: 'Orientation', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'むこうにみえるのがきんかくじです。', romaji: 'Mukō ni mieru no ga Kinkakuji desu.', fr: 'Ce qu\'on voit là-bas c\'est le Kinkakuji.' }],
  },
  {
    kana: 'あたり', romaji: 'atari', fr: 'environs, zone', kanji: 'あたり',
    theme: 'orientation', theme_label: 'Orientation', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このあたりにおいしいおみせはありますか？', romaji: 'Kono atari ni oishii omise wa arimasu ka?', fr: 'Y a-t-il un bon restaurant dans les environs ?' }],
  },
  {
    kana: 'どっち', romaji: 'docchi', fr: 'lequel des deux (familier)', kanji: 'どっち',
    theme: 'orientation', theme_label: 'Orientation', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ひだりとみぎ、どっちにいけばいい？', romaji: 'Hidari to migi, docchi ni ikeba ii?', fr: 'Gauche ou droite, on va dans quel sens ?' }],
  },
  {
    kana: 'どこか', romaji: 'dokoka', fr: 'quelque part', kanji: 'どこか',
    theme: 'orientation', theme_label: 'Orientation', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'どこかいいレストランをしっていますか？', romaji: 'Dokoka ii resutoran o shitte imasu ka?', fr: 'Connaissez-vous un bon restaurant quelque part ?' }],
  },
  {
    kana: 'そば', romaji: 'soba', fr: 'à côté de, près de', kanji: 'そば',
    theme: 'orientation', theme_label: 'Orientation', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'えきのそばにあるホテルにとまっています。', romaji: 'Eki no soba ni aru hoteru ni tomatte imasu.', fr: 'Je séjourne dans l\'hôtel à côté de la gare.' }],
  },
  {
    kana: 'ちかく', romaji: 'chikaku', fr: 'tout près, dans les environs', kanji: '近く',
    theme: 'orientation', theme_label: 'Orientation', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ちかくにコンビニはありますか？', romaji: 'Chikaku ni konbini wa arimasu ka?', fr: 'Y a-t-il un konbini dans les environs ?' }],
  },
  {
    kana: 'ほう', romaji: 'hō', fr: 'direction, côté, côté de', kanji: '方',
    theme: 'orientation', theme_label: 'Orientation', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'みなみのほうにいくとうみがあります。', romaji: 'Minami no hō ni iku to umi ga arimasu.', fr: 'En allant vers le sud vous trouverez la mer.' }],
  },
  {
    kana: 'てまえ', romaji: 'temae', fr: 'juste avant, côté du locuteur', kanji: '手前',
    theme: 'orientation', theme_label: 'Orientation', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'かいだんのてまえにエレベーターがあります。', romaji: 'Kaidan no temae ni erebētā ga arimasu.', fr: 'L\'ascenseur est juste avant les escaliers.' }],
  },
  {
    kana: 'すぐそこ', romaji: 'sugu soko', fr: 'juste là, tout de suite là', kanji: 'すぐそこ',
    theme: 'orientation', theme_label: 'Orientation', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'すぐそこにあります。あるいてにふんです。', romaji: 'Sugu soko ni arimasu. Aruite ni-fun desu.', fr: 'C\'est juste là. Deux minutes à pied.' }],
  },
  {
    kana: 'とおり', romaji: 'tōri', fr: 'rue, boulevard, passage', kanji: '通り',
    theme: 'orientation', theme_label: 'Orientation', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このとおりをまっすぐいってください。', romaji: 'Kono tōri o massugu itte kudasai.', fr: 'Allez tout droit dans cette rue.' }],
  },
  {
    kana: 'おく', romaji: 'oku', fr: 'fond, intérieur', kanji: '奥',
    theme: 'orientation', theme_label: 'Orientation', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'おくにすわってください。もっとしずかです。', romaji: 'Oku ni suwatte kudasai. Motto shizuka desu.', fr: 'Asseyez-vous au fond. C\'est plus calme.' }],
  },
  {
    kana: 'てまわり', romaji: 'temamawaari', fr: 'autour de soi, bagages à main', kanji: '手回り',
    theme: 'orientation', theme_label: 'Orientation', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'てまわりひんをおわすれなく。', romaji: 'Temawarishin o owasure naku.', fr: 'N\'oubliez pas vos effets personnels.' }],
  },
  {
    kana: 'まち', romaji: 'machi', fr: 'ville, quartier, rue', kanji: '街',
    theme: 'orientation', theme_label: 'Orientation', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このまちはとてもきれいです。まいにちあるきたい。', romaji: 'Kono machi wa totemo kirei desu. Mainichi arukitai.', fr: 'Ce quartier est très beau. J\'aurais envie de m\'y promener tous les jours.' }],
  },
  {
    kana: 'みち', romaji: 'michi', fr: 'chemin, route, rue', kanji: '道',
    theme: 'orientation', theme_label: 'Orientation', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'みちにまよいました。たすけてください！', romaji: 'Michi ni mayoimashita. Tasukete kudasai!', fr: 'Je me suis perdu. Aidez-moi s\'il vous plaît !' }],
  },
  {
    kana: 'うみ', romaji: 'umi', fr: 'mer, océan', kanji: '海',
    theme: 'lieux', theme_label: 'Lieux', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのうみはとてもきれいです。さかなもおいしい！', romaji: 'Nihon no umi wa totemo kirei desu. Sakana mo oishii!', fr: 'La mer japonaise est très belle. Le poisson est délicieux aussi !' }],
  },
  {
    kana: 'えいがかん', romaji: 'eigakan', fr: 'cinéma', kanji: '映画館',
    theme: 'lieux', theme_label: 'Lieux', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのえいがかんでにほんのえいがをみました。', romaji: 'Nihon no eigakan de Nihon no eiga o mimashita.', fr: 'J\'ai vu un film japonais dans un cinéma japonais.' }],
  },
  {
    kana: 'おてら', romaji: 'otera', fr: 'temple bouddhiste (poli)', kanji: 'お寺',
    theme: 'lieux', theme_label: 'Lieux', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'きょうとのおてらはとてもきれいです。ぜひいってください。', romaji: 'Kyōto no otera wa totemo kirei desu. Zehi itte kudasai.', fr: 'Les temples de Kyoto sont magnifiques. Allez-y absolument.' }],
  },
  {
    kana: 'がっこう', romaji: 'gakkō', fr: 'école', kanji: '学校',
    theme: 'lieux', theme_label: 'Lieux', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんごのがっこうにかよっています。', romaji: 'Nihongo no gakkō ni kayotte imasu.', fr: 'Je fréquente une école de japonais.' }],
  },
  {
    kana: 'かわ', romaji: 'kawa', fr: 'rivière, fleuve', kanji: '川',
    theme: 'lieux', theme_label: 'Lieux', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'かもがわのそばをさんぽしました。きもちよかった。', romaji: 'Kamogawa no soba o sanpo shimashita. Kimochi yokatta.', fr: 'J\'ai marché le long du Kamo. C\'était agréable.' }],
  },
  {
    kana: 'くに', romaji: 'kuni', fr: 'pays, nation', kanji: '国',
    theme: 'lieux', theme_label: 'Lieux', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんはすばらしいくにです。また来たいです。', romaji: 'Nihon wa subarashii kuni desu. Mata kitai desu.', fr: 'Le Japon est un pays magnifique. Je veux y retourner.' }],
  },
  {
    kana: 'こうじょう', romaji: 'kōjō', fr: 'usine', kanji: '工場',
    theme: 'lieux', theme_label: 'Lieux', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんしゅのこうじょうをけんがくしました。おもしろかった。', romaji: 'Nihonshu no kōjō o kengaku shimashita. Omoshirokatta.', fr: 'J\'ai visité une brasserie de saké. C\'était intéressant.' }],
  },
  {
    kana: 'こうば', romaji: 'kōba', fr: 'atelier, petite usine', kanji: '工場',
    theme: 'lieux', theme_label: 'Lieux', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このこうばでとうじきをつくっています。', romaji: 'Kono kōba de tōjiki o tsukutte imasu.', fr: 'Dans cet atelier on fabrique de la céramique.' }],
  },
  {
    kana: 'じんじゃ', romaji: 'jinja', fr: 'sanctuaire shinto', kanji: '神社',
    theme: 'lieux', theme_label: 'Lieux', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ふしみいなりのじんじゃにはせんぼんのとりいがあります。', romaji: 'Fushimi Inari no jinja ni wa senbon no torii ga arimasu.', fr: 'Le sanctuaire Fushimi Inari a des milliers de torii.' }],
  },
  {
    kana: 'としょかん', romaji: 'toshokan', fr: 'bibliothèque', kanji: '図書館',
    theme: 'lieux', theme_label: 'Lieux', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのとしょかんにはにほんごのほんがたくさんあります。', romaji: 'Nihon no toshokan ni wa nihongo no hon ga takusan arimasu.', fr: 'Les bibliothèques japonaises ont beaucoup de livres en japonais.' }],
  },
  {
    kana: 'びょういん', romaji: 'byōin', fr: 'hôpital', kanji: '病院',
    theme: 'lieux', theme_label: 'Lieux', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'びょういんはどこですか？おなかがいたいです。', romaji: 'Byōin wa doko desu ka? Onaka ga itai desu.', fr: 'Où est l\'hôpital ? J\'ai mal au ventre.' }],
  },
  {
    kana: 'ぶどうばたけ', romaji: 'budōbatake', fr: 'vignoble', kanji: '葡萄畑',
    theme: 'lieux', theme_label: 'Lieux', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'やまなしにはぶどうばたけがたくさんあります。', romaji: 'Yamanashi ni wa budōbatake ga takusan arimasu.', fr: 'Il y a beaucoup de vignobles dans la préfecture de Yamanashi.' }],
  },
  {
    kana: 'まちなか', romaji: 'machinaka', fr: 'centre-ville', kanji: '街中',
    theme: 'lieux', theme_label: 'Lieux', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'まちなかのいざかやでのみました。', romaji: 'Machinaka no izakaya de nomimashita.', fr: 'Nous avons bu dans un izakaya du centre-ville.' }],
  },
  {
    kana: 'やま', romaji: 'yama', fr: 'montagne', kanji: '山',
    theme: 'lieux', theme_label: 'Lieux', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ふじさんはにほんでいちばんたかいやまです。', romaji: 'Fujisan wa Nihon de ichiban takai yama desu.', fr: 'Le Mont Fuji est la montagne la plus haute du Japon.' }],
  },
  {
    kana: 'ゆうびんきょく', romaji: 'yūbinkyoku', fr: 'bureau de poste', kanji: '郵便局',
    theme: 'lieux', theme_label: 'Lieux', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ゆうびんきょくでフランスへのこづつみをおくりました。', romaji: 'Yūbinkyoku de Furansu e no kozutsumi o okurimashita.', fr: 'J\'ai envoyé un colis pour la France à la poste.' }],
  },
  {
    kana: 'りょかん', romaji: 'ryokan', fr: 'auberge japonaise', kanji: '旅館',
    theme: 'lieux', theme_label: 'Lieux', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'りょかんにとまるのはにほんのたびのみどころのひとつです。', romaji: 'Ryokan ni tomaru no wa Nihon no tabi no midokoro no hitotsu desu.', fr: 'Séjourner dans un ryokan est l\'un des incontournables du voyage au Japon.' }],
  },
  {
    kana: 'おかね', romaji: 'okane', fr: 'argent (monnaie)', kanji: 'お金',
    theme: 'argent', theme_label: 'Argent', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのおかねのたんいはえんです。', romaji: 'Nihon no okane no tan\'i wa en desu.', fr: 'L\'unité monétaire japonaise est le yen.' }],
  },
  {
    kana: 'えん', romaji: 'en', fr: 'yen', kanji: '円',
    theme: 'argent', theme_label: 'Argent', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このおみやげはごひゃくえんです。やすい！', romaji: 'Kono omiyage wa gohyaku-en desu. Yasui!', fr: 'Ce souvenir coûte 500 yens. Pas cher !' }],
  },
  {
    kana: 'さいふ', romaji: 'saifu', fr: 'portefeuille, porte-monnaie', kanji: '財布',
    theme: 'argent', theme_label: 'Argent', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'さいふをなくしてしまいました。たいへんです！', romaji: 'Saifu o nakushite shimaimashita. Taihen desu!', fr: 'J\'ai perdu mon portefeuille. C\'est grave !' }],
  },
  {
    kana: 'こうかん', romaji: 'kōkan', fr: 'change, échange', kanji: '交換',
    theme: 'argent', theme_label: 'Argent', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ユーロをえんにこうかんしたいです。どこでできますか？', romaji: 'Yūro o en ni kōkan shitai desu. Doko de dekimasu ka?', fr: 'Je veux changer des euros en yens. Où peut-on le faire ?' }],
  },
  {
    kana: 'りょうがえ', romaji: 'ryōgae', fr: 'change (monnaie)', kanji: '両替',
    theme: 'argent', theme_label: 'Argent', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'りょうがえはぎんこうでできます。', romaji: 'Ryōgae wa ginkō de dekimasu.', fr: 'On peut faire le change à la banque.' }],
  },
  {
    kana: 'げんきん', romaji: 'genkin', fr: 'espèces, argent liquide', kanji: '現金',
    theme: 'argent', theme_label: 'Argent', level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんではげんきんしかつかえないおみせもあります。', romaji: 'Nihon de wa genkin shika tsukaenai omise mo arimasu.', fr: 'Au Japon certains magasins n\'acceptent que les espèces.' }],
  },
  {
    kana: 'ひとり',
    romaji: 'hitori',
    fr: 'une personne, seul',
    kanji: '一人',
    theme: 'mots_outils',
    theme_label: 'Mots-outils',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ひとりりょこうはじゆうでたのしいです。', romaji: 'Hitori ryokō wa jiyū de tanoshii desu.', fr: 'Voyager seul est libre et agréable.' }],
  },
  {
    kana: 'べんきょうする',
    romaji: 'benkyō suru',
    fr: 'étudier',
    kanji: '勉強する',
    theme: 'mots_outils',
    theme_label: 'Mots-outils',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'まいにちにほんごをべんきょうしています。', romaji: 'Mainichi nihongo o benkyō shite imasu.', fr: 'J\'étudie le japonais tous les jours.' }],
  },
  {
    kana: 'ボールペン',
    romaji: 'bōrupen',
    fr: 'stylo à bille',
    kanji: '',
    theme: 'mots_outils',
    theme_label: 'Mots-outils',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ボールペンをかしてもらえますか？サインをしなければなりません。', romaji: 'Bōrupen o kashite moraemasu ka? Sain o shinakereba narimasen.', fr: 'Pouvez-vous me prêter un stylo ? Je dois signer.' }],
  },
  {
    kana: 'ほしい',
    romaji: 'hoshii',
    fr: 'vouloir (une chose)',
    kanji: '欲しい',
    theme: 'mots_outils',
    theme_label: 'Mots-outils',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このおちゃわんがほしいです！おみやげにします。', romaji: 'Kono ochawan ga hoshii desu! Omiyage ni shimasu.', fr: 'Je veux ce bol à thé ! Je l\'achète en souvenir.' }],
  },
  {
    kana: 'ボタン',
    romaji: 'botan',
    fr: 'bouton',
    kanji: '',
    theme: 'mots_outils',
    theme_label: 'Mots-outils',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このボタンをおすとドアがあきます。', romaji: 'Kono botan o osu to doa ga akimasu.', fr: 'En appuyant sur ce bouton, la porte s\'ouvre.' }],
  },
  {
    kana: 'まがる',
    romaji: 'magaru',
    fr: 'tourner, se courber',
    kanji: '曲る',
    theme: 'orientation',
    theme_label: 'Orientation',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'つぎのかどをひだりにまがってください。', romaji: 'Tsugi no kado o hidari ni magatte kudasai.', fr: 'Tournez à gauche au prochain carrefour.' }],
  },
  {
    kana: 'まだ',
    romaji: 'mada',
    fr: 'encore, pas encore',
    kanji: '',
    theme: 'mots_outils',
    theme_label: 'Mots-outils',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'まだにほんごをべんきょうしています。むずかしいですね。', romaji: 'Mada nihongo o benkyō shite imasu. Muzukashii desu ne.', fr: 'J\'apprends encore le japonais. C\'est difficile.' }],
  },
  {
    kana: 'みなさん',
    romaji: 'minasan',
    fr: 'tout le monde (poli)',
    kanji: '皆さん',
    theme: 'mots_outils',
    theme_label: 'Mots-outils',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'みなさん、おはようございます！きょうもよろしくおねがいします。', romaji: 'Minasan, ohayō gozaimasu! Kyō mo yoroshiku onegai shimasu.', fr: 'Bonjour tout le monde ! Encore merci pour aujourd\'hui.' }],
  },
  {
    kana: 'みんな',
    romaji: 'minna',
    fr: 'tout le monde (familier)',
    kanji: '',
    theme: 'mots_outils',
    theme_label: 'Mots-outils',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'みんなでしゃしんをとりましょう！', romaji: 'Minna de shashin o torimasho!', fr: 'Prenons une photo tous ensemble !' }],
  },
  {
    kana: 'むら',
    romaji: 'mura',
    fr: 'village',
    kanji: '村',
    theme: 'lieux',
    theme_label: 'Lieux',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'しらかわごうのむらはとてもうつくしいです。', romaji: 'Shirakawagō no mura wa totemo utsukushii desu.', fr: 'Le village de Shirakawagō est très beau.' }],
  },
  {
    kana: 'め',
    romaji: 'me',
    fr: 'œil',
    kanji: '目',
    theme: 'sante',
    theme_label: 'Santé',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'めがいたいです。かぜかもしれません。', romaji: 'Me ga itai desu. Kaze kamo shiremasen.', fr: 'J\'ai mal aux yeux. C\'est peut-être un rhume.' }],
  },
  {
    kana: 'めがね',
    romaji: 'megane',
    fr: 'lunettes',
    kanji: '眼鏡',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'めがねをわすれました。なにもみえません！', romaji: 'Megane o wasuremashita. Nani mo miemasen!', fr: 'J\'ai oublié mes lunettes. Je ne vois rien !' }],
  },
  {
    kana: 'もう',
    romaji: 'mō',
    fr: 'déjà, encore',
    kanji: '',
    theme: 'mots_outils',
    theme_label: 'Mots-outils',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'もうじかんがありません。いそぎましょう！', romaji: 'Mō jikan ga arimasen. Isogimasho!', fr: 'Il n\'y a plus de temps. Dépêchons-nous !' }],
  },
  {
    kana: 'やすみ',
    romaji: 'yasumi',
    fr: 'repos, congé, vacances',
    kanji: '休み',
    theme: 'mots_outils',
    theme_label: 'Mots-outils',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'なつやすみにまたにほんにいきたいです！', romaji: 'Natsuyasumi ni mata Nihon ni ikitai desu!', fr: 'Je veux revenir au Japon pendant les vacances d\'été !' }],
  },
  {
    kana: 'ラジカセ',
    romaji: 'rajikase',
    fr: 'radio-cassette',
    kanji: '',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'むかしはラジカセでおんがくをきいていました。', romaji: 'Mukashi wa rajikase de ongaku o kiite imashita.', fr: 'Autrefois j\'écoutais la musique sur une radio-cassette.' }],
  },
  {
    kana: 'りっぱ',
    romaji: 'rippa',
    fr: 'magnifique, splendide',
    kanji: '立派',
    theme: 'adjectifs',
    theme_label: 'Adjectifs',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このおてらはりっぱですね！なんねんまえにたてられましたか？', romaji: 'Kono otera wa rippa desu ne! Nan-nen mae ni tateraremashita ka?', fr: 'Ce temple est magnifique ! Il a été construit il y a combien d\'années ?' }],
  },
  {
    kana: 'ろうか',
    romaji: 'rōka',
    fr: 'couloir',
    kanji: '廊下',
    theme: 'hotel',
    theme_label: 'Hôtel',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'りょかんのろうかをあるくのはきもちいいです。', romaji: 'Ryokan no rōka o aruku no wa kimochi ii desu.', fr: 'Marcher dans le couloir du ryokan est agréable.' }],
  },
  {
    kana: 'わすれる',
    romaji: 'wasureru',
    fr: 'oublier',
    kanji: '忘れる',
    theme: 'mots_outils',
    theme_label: 'Mots-outils',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのたびはぜったいにわすれません！', romaji: 'Nihon no tabi wa zettai ni wasuremasen!', fr: 'Je n\'oublierai jamais ce voyage au Japon !' }],
  },
  {
    kana: 'わたくし',
    romaji: 'watakushi',
    fr: 'moi (très formel)',
    kanji: '私',
    theme: 'mots_outils',
    theme_label: 'Mots-outils',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'わたくしはフランスからまいりました。', romaji: 'Watakushi wa Furansu kara mairimashita.', fr: 'Je viens de France. (très poli)' }],
  },
  {
    kana: 'わたし',
    romaji: 'watashi',
    fr: 'moi, je',
    kanji: '私',
    theme: 'mots_outils',
    theme_label: 'Mots-outils',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'わたしはにほんがだいすきです。', romaji: 'Watashi wa Nihon ga daisuki desu.', fr: 'Moi j\'adore le Japon.' }],
  },
  {
    kana: 'わたす',
    romaji: 'watasu',
    fr: 'remettre, passer',
    kanji: '渡す',
    theme: 'mots_outils',
    theme_label: 'Mots-outils',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'パスポートをわたしてください。', romaji: 'Pasupōto o watashite kudasai.', fr: 'Remettez votre passeport s\'il vous plaît.' }],
  },
  {
    kana: '〜より〜のほうが',
    romaji: '~ yori ~ no hō ga',
    fr: '… est plus … que … (comparatif)',
    kanji: '',
    theme: 'mots_outils',
    theme_label: 'Mots-outils',
    level: 2, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'しんかんせんはひこうきよりはやいですか？', romaji: 'Shinkansen wa hikōki yori hayai desu ka?', fr: 'Le Shinkansen est-il plus rapide que l\'avion ?' }],
  },
  {
    kana: 'さくぶん',
    romaji: 'sakubun',
    fr: 'rédaction, composition',
    kanji: '作文',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんごでさくぶんをかくのはむずかしいです。', romaji: 'Nihongo de sakubun o kaku no wa muzukashii desu.', fr: 'Écrire une rédaction en japonais, c\'est difficile.' }],
  },
  {
    kana: 'キロ／キログラム',
    romaji: 'kiro / kiroguramu',
    fr: 'kilogramme',
    kanji: '',
    theme: 'nombres',
    theme_label: 'Nombres',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このにもつはにキロです。おもいですね。', romaji: 'Kono nimotsu wa ni-kiro desu. Omoi desu ne.', fr: 'Ce bagage fait deux kilos. C\'est lourd.' }],
  },
  {
    kana: 'キロ／キロメートル',
    romaji: 'kiro / kiromētoru',
    fr: 'kilomètre',
    kanji: '',
    theme: 'nombres',
    theme_label: 'Nombres',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'えきまでにキロくらいあります。', romaji: 'Eki made ni-kiro kurai arimasu.', fr: 'C\'est à environ deux kilomètres de la gare.' }],
  },
  {
    kana: 'あき',
    romaji: 'aki',
    fr: 'automne',
    kanji: '秋',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'あきのにほんはもみじがきれいです。', romaji: 'Aki no Nihon wa momiji ga kirei desu.', fr: 'En automne au Japon, les érables sont magnifiques.' }],
  },
  {
    kana: 'あさ',
    romaji: 'asa',
    fr: 'matin',
    kanji: '朝',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'あさはやくおきてしんかんせんにのります。', romaji: 'Asa hayaku okite shinkansen ni norimasu.', fr: 'Je me lève tôt le matin pour prendre le Shinkansen.' }],
  },
  {
    kana: 'あさって',
    romaji: 'asatte',
    fr: 'après-demain',
    kanji: '明後日',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'あさってきょうとにいきます。たのしみです！', romaji: 'Asatte Kyōto ni ikimasu. Tanoshimi desu!', fr: 'Après-demain je vais à Kyoto. J\'ai hâte !' }],
  },
  {
    kana: 'あした',
    romaji: 'ashita',
    fr: 'demain',
    kanji: '明日',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'あしたはなにをしますか？ひとりでさんぽしたいです。', romaji: 'Ashita wa nani o shimasu ka? Hitori de sanpo shitai desu.', fr: 'Que faites-vous demain ? Je veux me promener seul.' }],
  },
  {
    kana: 'あと',
    romaji: 'ato',
    fr: 'après, ensuite',
    kanji: '後',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'たべたあとでさんぽしましょう。', romaji: 'Tabeta ato de sanpo shimasho.', fr: 'Promenons-nous après avoir mangé.' }],
  },
  {
    kana: 'いえ',
    romaji: 'ie',
    fr: 'maison',
    kanji: '家',
    theme: 'lieux',
    theme_label: 'Lieux',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのいえはせまいけどきれいです。', romaji: 'Nihon no ie wa semai kedo kirei desu.', fr: 'Les maisons japonaises sont petites mais jolies.' }],
  },
  {
    kana: 'いつも',
    romaji: 'itsumo',
    fr: 'toujours, habituellement',
    kanji: 'いつも',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんじんはいつもていねいです。', romaji: 'Nihonjin wa itsumo teinei desu.', fr: 'Les Japonais sont toujours polis.' }],
  },
  {
    kana: 'いま',
    romaji: 'ima',
    fr: 'maintenant',
    kanji: '今',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'いまなんじですか？しんかんせんにまにあいますか？', romaji: 'Ima nan-ji desu ka? Shinkansen ni ma ni aimasu ka?', fr: 'Il est quelle heure maintenant ? On va avoir le Shinkansen ?' }],
  },
  {
    kana: 'おととい',
    romaji: 'ototoi',
    fr: 'avant-hier',
    kanji: '一昨日',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'おとといのかいせきりょうりはさいこうでした！', romaji: 'Ototoi no kaiseki ryōri wa saikō deshita!', fr: 'Le repas kaiseki d\'avant-hier était fantastique !' }],
  },
  {
    kana: 'おととし',
    romaji: 'ototoshi',
    fr: 'il y a deux ans',
    kanji: '一昨年',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'おととしからにほんごをべんきょうしています。', romaji: 'Ototoshi kara nihongo o benkyō shite imasu.', fr: 'J\'apprends le japonais depuis il y a deux ans.' }],
  },
  {
    kana: 'かようび',
    romaji: 'kayōbi',
    fr: 'mardi',
    kanji: '火曜日',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'かようびにきょうとにいきます。', romaji: 'Kayōbi ni Kyōto ni ikimasu.', fr: 'Mardi je vais à Kyoto.' }],
  },
  {
    kana: 'カレンダー',
    romaji: 'karendā',
    fr: 'calendrier',
    kanji: '',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'カレンダーをみてよていをかくにんしました。', romaji: 'Karendā o mite yotei o kakunin shimashita.', fr: 'J\'ai vérifié mon programme sur le calendrier.' }],
  },
  {
    kana: 'きのう',
    romaji: 'kinō',
    fr: 'hier',
    kanji: '昨日',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'きのうのばんごはんはとてもおいしかったです。', romaji: 'Kinō no bangohan wa totemo oishikatta desu.', fr: 'Le dîner d\'hier était vraiment délicieux.' }],
  },
  {
    kana: 'きょう',
    romaji: 'kyō',
    fr: 'aujourd\'hui',
    kanji: '今日',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'きょうはいいてんきですね。どこかにいきましょう！', romaji: 'Kyō wa ii tenki desu ne. Doko ka ni ikimasho!', fr: 'Il fait beau aujourd\'hui. Allons quelque part !' }],
  },
  {
    kana: 'きょねん',
    romaji: 'kyonen',
    fr: 'l\'année dernière',
    kanji: '去年',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'きょねんもにほんにいきました。また来ました！', romaji: 'Kyonen mo Nihon ni ikimashita. Mata kimashita!', fr: 'L\'année dernière aussi je suis allé au Japon. Je suis revenu !' }],
  },
  {
    kana: 'きんようび',
    romaji: 'kin\'yōbi',
    fr: 'vendredi',
    kanji: '金曜日',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'きんようびにとうきょうにつきます。', romaji: 'Kin\'yōbi ni Tōkyō ni tsukimasu.', fr: 'J\'arrive à Tokyo vendredi.' }],
  },
  {
    kana: 'けさ',
    romaji: 'kesa',
    fr: 'ce matin',
    kanji: '今朝',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'けさはやくおきてふじさんのにちのでをみました！', romaji: 'Kesa hayaku okite Fujisan no hinode o mimashita!', fr: 'Ce matin je me suis levé tôt pour voir le lever de soleil sur le Fuji !' }],
  },
  {
    kana: 'げつようび',
    romaji: 'getsuyōbi',
    fr: 'lundi',
    kanji: '月曜日',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'げつようびはびじゅつかんがしまっています。', romaji: 'Getsuyōbi wa bijutsukan ga shimatte imasu.', fr: 'Le musée est fermé le lundi.' }],
  },
  {
    kana: 'ごご',
    romaji: 'gogo',
    fr: 'après-midi',
    kanji: '午後',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ごごさんじにホテルにもどります。', romaji: 'Gogo san-ji ni hoteru ni modorimasu.', fr: 'Je retourne à l\'hôtel à 15h.' }],
  },
  {
    kana: 'ごぜん',
    romaji: 'gozen',
    fr: 'matin (avant midi)',
    kanji: '午前',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ごぜんじゅうじにツアーがはじまります。', romaji: 'Gozen jū-ji ni tsūā ga hajimarimasu.', fr: 'La visite commence à 10h du matin.' }],
  },
  {
    kana: 'ことし',
    romaji: 'kotoshi',
    fr: 'cette année',
    kanji: '今年',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ことしのなつにまたにほんにいきます！', romaji: 'Kotoshi no natsu ni mata Nihon ni ikimasu!', fr: 'Cet été je retourne au Japon !' }],
  },
  {
    kana: 'こんげつ',
    romaji: 'kongetsu',
    fr: 'ce mois-ci',
    kanji: '今月',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'こんげつはにほんにいます。たのしいです！', romaji: 'Kongetsu wa Nihon ni imasu. Tanoshii desu!', fr: 'Ce mois-ci je suis au Japon. C\'est super !' }],
  },
  {
    kana: 'こんしゅう',
    romaji: 'konshū',
    fr: 'cette semaine',
    kanji: '今週',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'こんしゅうはきょうととならにいきます。', romaji: 'Konshū wa Kyōto to Nara ni ikimasu.', fr: 'Cette semaine je vais à Kyoto et Nara.' }],
  },
  {
    kana: 'こんばん',
    romaji: 'konban',
    fr: 'ce soir',
    kanji: '今晩',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'こんばんはいざかやにいきましょう！', romaji: 'Konban wa izakaya ni ikimasho!', fr: 'Ce soir allons à l\'izakaya !' }],
  },
  {
    kana: 'さらいねん',
    romaji: 'sarainen',
    fr: 'dans deux ans',
    kanji: 'さ来年',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'さらいねんもにほんにいきたいです。', romaji: 'Sarainen mo Nihon ni ikitai desu.', fr: 'Dans deux ans aussi je veux aller au Japon.' }],
  },
  {
    kana: 'しかし',
    romaji: 'shikashi',
    fr: 'cependant, mais',
    kanji: 'しかし',
    theme: 'mots_outils',
    theme_label: 'Mots-outils',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんごはむずかしい。しかし、とてもたのしいです。', romaji: 'Nihongo wa muzukashii. Shikashi, totemo tanoshii desu.', fr: 'Le japonais est difficile. Cependant c\'est très amusant.' }],
  },
  {
    kana: 'しんぶん',
    romaji: 'shinbun',
    fr: 'journal, presse',
    kanji: '新聞',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのしんぶんはよめませんが、しゃしんはわかります。', romaji: 'Nihon no shinbun wa yomemasen ga, shashin wa wakarimasu.', fr: 'Je ne sais pas lire le journal japonais, mais les photos je comprends.' }],
  },
  {
    kana: 'すいようび',
    romaji: 'suiyōbi',
    fr: 'mercredi',
    kanji: '水曜日',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'すいようびにおんせんにいきます。', romaji: 'Suiyōbi ni onsen ni ikimasu.', fr: 'Mercredi je vais aux sources thermales.' }],
  },
  {
    kana: 'せんげつ',
    romaji: 'sengetsu',
    fr: 'le mois dernier',
    kanji: '先月',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'せんげつからにほんごのじゅぎょうをはじめました。', romaji: 'Sengetsu kara nihongo no jugyō o hajimemashita.', fr: 'J\'ai commencé les cours de japonais le mois dernier.' }],
  },
  {
    kana: 'せんしゅう',
    romaji: 'senshū',
    fr: 'la semaine dernière',
    kanji: '先週',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'せんしゅうとうきょうにつきました。まだにほんにいます。', romaji: 'Senshū Tōkyō ni tsukimashita. Mada Nihon ni imasu.', fr: 'Je suis arrivé à Tokyo la semaine dernière. Je suis encore au Japon.' }],
  },
  {
    kana: 'それから',
    romaji: 'sorekara',
    fr: 'après cela, depuis lors',
    kanji: '',
    theme: 'mots_outils',
    theme_label: 'Mots-outils',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'まずてんぷらをたべて、それからおんせんにはいります。', romaji: 'Mazu tenpura o tabete, sorekara onsen ni hairimasu.', fr: 'D\'abord on mange des tempuras, et après on va à l\'onsen.' }],
  },
  {
    kana: 'たんじょうび',
    romaji: 'tanjōbi',
    fr: 'anniversaire',
    kanji: '誕生日',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'たんじょうびおめでとうございます！なんさいになりましたか？', romaji: 'Tanjōbi omedetō gozaimasu! Nan-sai ni narimashita ka?', fr: 'Joyeux anniversaire ! Quel âge avez-vous ?' }],
  },
  {
    kana: 'て',
    romaji: 'te',
    fr: 'main',
    kanji: '手',
    theme: 'sante',
    theme_label: 'Santé',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'てをあわせておいのりします。', romaji: 'Te o awasete oinori shimasu.', fr: 'On joint les mains pour prier.' }],
  },
  {
    kana: 'でも',
    romaji: 'demo',
    fr: 'mais, cependant',
    kanji: '',
    theme: 'mots_outils',
    theme_label: 'Mots-outils',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんごはむずかしい。でもあきらめません！', romaji: 'Nihongo wa muzukashii. Demo akiramemasen!', fr: 'Le japonais est difficile. Mais je n\'abandonne pas !' }],
  },
  {
    kana: 'てんき',
    romaji: 'tenki',
    fr: 'temps (météo)',
    kanji: '天気',
    theme: 'meteo',
    theme_label: 'Météo',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'きょうのてんきはどうですか？はれていますか？', romaji: 'Kyō no tenki wa dō desu ka? Harete imasu ka?', fr: 'Comment est la météo aujourd\'hui ? Il fait beau ?' }],
  },
  {
    kana: 'とし',
    romaji: 'toshi',
    fr: 'année, âge',
    kanji: '年',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'としをとってもにほんへのゆめはかわりません。', romaji: 'Toshi o totte mo Nihon e no yume wa kawarimasen.', fr: 'Même en vieillissant mon rêve du Japon ne change pas.' }],
  },
  {
    kana: 'どようび',
    romaji: 'doyōbi',
    fr: 'samedi',
    kanji: '土曜日',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'どようびはあさいちにいきましょう。', romaji: 'Doyōbi wa asaichi ni ikimasho.', fr: 'Samedi allons au marché du matin.' }],
  },
  {
    kana: 'なつ',
    romaji: 'natsu',
    fr: 'été',
    kanji: '夏',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'なつのにほんはあついですが、はなびがきれいです！', romaji: 'Natsu no Nihon wa atsui desu ga, hanabi ga kirei desu!', fr: 'Le Japon en été est chaud, mais les feux d\'artifice sont magnifiques !' }],
  },
  {
    kana: 'なつやすみ',
    romaji: 'natsuyasumi',
    fr: 'vacances d\'été',
    kanji: '夏休み',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'なつやすみにまたにほんにいきます！まちどおしい！', romaji: 'Natsuyasumi ni mata Nihon ni ikimasu! Machidōshii!', fr: 'Pendant les vacances d\'été je retourne au Japon ! J\'ai tellement hâte !' }],
  },
  {
    kana: 'にちようび',
    romaji: 'nichiyōbi',
    fr: 'dimanche',
    kanji: '日曜日',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にちようびはおやすみです。ゆっくりしましょう。', romaji: 'Nichiyōbi wa oyasumi desu. Yukkuri shimasho.', fr: 'Dimanche c\'est jour de repos. Prenons le temps.' }],
  },
  {
    kana: 'ノート',
    romaji: 'nōto',
    fr: 'cahier',
    kanji: '',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんごのたんごをノートにかいています。', romaji: 'Nihongo no tango o nōto ni kaite imasu.', fr: 'J\'écris le vocabulaire japonais dans mon cahier.' }],
  },
  {
    kana: 'はつか',
    romaji: 'hatsuka',
    fr: 'le vingtième jour, vingt jours',
    kanji: '二十日',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'はつかからにほんのりょこうがはじまります。', romaji: 'Hatsuka kara Nihon no ryokō ga hajimarimasu.', fr: 'Le voyage au Japon commence le vingt.' }],
  },
  {
    kana: 'ばん',
    romaji: 'ban',
    fr: 'soirée, soir',
    kanji: '晩',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ばんにしんじゅくのよるをさんぽしました。', romaji: 'Ban ni Shinjuku no yoru o sanpo shimashita.', fr: 'Le soir j\'ai fait une balade nocturne à Shinjuku.' }],
  },
  {
    kana: 'ひる',
    romaji: 'hiru',
    fr: 'midi, milieu de journée',
    kanji: '昼',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ひるにラーメンをたべました。さいこう！', romaji: 'Hiru ni rāmen o tabemashita. Saikō!', fr: 'À midi j\'ai mangé un ramen. Excellent !' }],
  },
  {
    kana: 'ふゆ',
    romaji: 'fuyu',
    fr: 'hiver',
    kanji: '冬',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ふゆのにほんはさむいけど、なべりょうりがおいしいです。', romaji: 'Fuyu no Nihon wa samui kedo, nabe ryōri ga oishii desu.', fr: 'Le Japon en hiver est froid mais les plats mijotés sont délicieux.' }],
  },
  {
    kana: 'まいあさ',
    romaji: 'maiasa',
    fr: 'tous les matins',
    kanji: '毎朝',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'まいあさにほんごをれんしゅうしています。', romaji: 'Maiasa nihongo o renshū shite imasu.', fr: 'Je pratique le japonais tous les matins.' }],
  },
  {
    kana: 'まいげつ／まいつき',
    romaji: 'maigetsu / maitsuki',
    fr: 'chaque mois',
    kanji: '毎月',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'まいつきにほんごのほんをいっさつかいます。', romaji: 'Maitsuki nihongo no hon o issatsu kaimasu.', fr: 'Chaque mois j\'achète un livre de japonais.' }],
  },
  {
    kana: 'まいしゅう',
    romaji: 'maishū',
    fr: 'chaque semaine',
    kanji: '毎週',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'まいしゅうにほんごのじゅぎょうがあります。', romaji: 'Maishū nihongo no jugyō ga arimasu.', fr: 'Chaque semaine j\'ai des cours de japonais.' }],
  },
  {
    kana: 'まいねん／まいとし',
    romaji: 'mainen / maitoshi',
    fr: 'chaque année',
    kanji: '毎年',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'まいとしにほんにいきたいです！', romaji: 'Maitoshi Nihon ni ikitai desu!', fr: 'Je voudrais aller au Japon chaque année !' }],
  },
  {
    kana: 'まいばん',
    romaji: 'maiban',
    fr: 'tous les soirs',
    kanji: '毎晩',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'まいばんフラッシュカードでたんごをおぼえています。', romaji: 'Maiban furasshu kādo de tango o oboete imasu.', fr: 'Tous les soirs je mémorise du vocabulaire avec les flashcards.' }],
  },
  {
    kana: 'まえ',
    romaji: 'mae',
    fr: 'avant, devant',
    kanji: '前',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'えきのまえでまっています。', romaji: 'Eki no mae de matte imasu.', fr: 'Je vous attends devant la gare.' }],
  },
  {
    kana: 'もくようび',
    romaji: 'mokuyōbi',
    fr: 'jeudi',
    kanji: '木曜日',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'もくようびにしんかんせんでひろしまにいきます。', romaji: 'Mokuyōbi ni shinkansen de Hiroshima ni ikimasu.', fr: 'Jeudi je vais à Hiroshima en Shinkansen.' }],
  },
  {
    kana: 'ゆうがた',
    romaji: 'yūgata',
    fr: 'fin d\'après-midi, début de soirée',
    kanji: '夕方',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ゆうがたのあさくさはとてもきれいです。', romaji: 'Yūgata no Asakusa wa totemo kirei desu.', fr: 'Asakusa en fin d\'après-midi est très beau.' }],
  },
  {
    kana: 'ゆうべ',
    romaji: 'yūbe',
    fr: 'hier soir',
    kanji: '昨夜',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ゆうべのやきとりはとてもおいしかったです！', romaji: 'Yūbe no yakitori wa totemo oishikatta desu!', fr: 'Les yakitori d\'hier soir étaient délicieux !' }],
  },
  {
    kana: 'よく',
    romaji: 'yoku',
    fr: 'souvent, bien',
    kanji: '',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんりょうりをよくたべます。まいしゅう！', romaji: 'Nihon ryōri o yoku tabemasu. Maishū!', fr: 'Je mange souvent de la cuisine japonaise. Chaque semaine !' }],
  },
  {
    kana: 'よる',
    romaji: 'yoru',
    fr: 'soir, nuit',
    kanji: '夜',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'よるのとうきょうのけいかんはすごいです。', romaji: 'Yoru no Tōkyō no keikan wa sugoi desu.', fr: 'Les lumières de Tokyo la nuit, c\'est impressionnant.' }],
  },
  {
    kana: 'らいげつ',
    romaji: 'raigetsu',
    fr: 'le mois prochain',
    kanji: '来月',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'らいげつにほんにいきます。たのしみです！', romaji: 'Raigetsu Nihon ni ikimasu. Tanoshimi desu!', fr: 'Le mois prochain je vais au Japon. J\'ai hâte !' }],
  },
  {
    kana: 'らいしゅう',
    romaji: 'raishū',
    fr: 'la semaine prochaine',
    kanji: '来週',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'らいしゅうのにほんごのじゅぎょうをたのしみにしています。', romaji: 'Raishū no nihongo no jugyō o tanoshimi ni shite imasu.', fr: 'J\'attends avec impatience le cours de japonais de la semaine prochaine.' }],
  },
  {
    kana: 'らいねん',
    romaji: 'rainen',
    fr: 'l\'année prochaine',
    kanji: '来年',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'らいねんのはるにさくらをみにいきます！', romaji: 'Rainen no haru ni sakura o mi ni ikimasu!', fr: 'L\'année prochaine au printemps je vais voir les cerisiers !' }],
  },
  {
    kana: 'ついたち',
    romaji: 'tsuitachi',
    fr: 'le premier du mois',
    kanji: '一日',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'いちがつついたちはおしょうがつです。', romaji: 'Ichi-gatsu tsuitachi wa o-shōgatsu desu.', fr: 'Le premier janvier c\'est le Nouvel An japonais.' }],
  },
  {
    kana: 'いかが',
    romaji: 'ikaga',
    fr: 'comment (poli)',
    kanji: '',
    theme: 'mots_outils',
    theme_label: 'Mots-outils',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'おちゃはいかがですか？', romaji: 'Ocha wa ikaga desu ka?', fr: 'Que diriez-vous d\'un thé ?' }],
  },
  {
    kana: 'いくつ',
    romaji: 'ikutsu',
    fr: 'combien (d\'objets / quel âge)',
    kanji: '',
    theme: 'nombres',
    theme_label: 'Nombres',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このおちゃわんはいくつかいましたか？', romaji: 'Kono ochawan wa ikutsu kaimashita ka?', fr: 'Vous en avez acheté combien de ces bols ?' }],
  },
  {
    kana: 'いくら',
    romaji: 'ikura',
    fr: 'combien (prix)',
    kanji: '',
    theme: 'nombres',
    theme_label: 'Nombres',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'これはいくらですか？', romaji: 'Kore wa ikura desu ka?', fr: 'C\'est combien ?' }],
  },
  {
    kana: 'いちにち',
    romaji: 'ichinichi',
    fr: 'un jour entier',
    kanji: '一日',
    theme: 'nombres',
    theme_label: 'Nombres',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'きょうとはいちにちでまわれますか？', romaji: 'Kyōto wa ichinichi de mawaremasu ka?', fr: 'Peut-on visiter Kyoto en une seule journée ?' }],
  },
  {
    kana: 'いちばん',
    romaji: 'ichiban',
    fr: 'le premier, le plus',
    kanji: '一番',
    theme: 'nombres',
    theme_label: 'Nombres',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんでいちばんすきなたべものはすしです！', romaji: 'Nihon de ichiban suki na tabemono wa sushi desu!', fr: 'Le plat que je préfère au Japon c\'est les sushis !' }],
  },
  {
    kana: 'いつか',
    romaji: 'itsuka',
    fr: 'le cinquième jour du mois',
    kanji: '五日',
    theme: 'nombres',
    theme_label: 'Nombres',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にがつのいつかにとうきょうにつきます。', romaji: 'Ni-gatsu no itsuka ni Tōkyō ni tsukimasu.', fr: 'J\'arrive à Tokyo le cinq février.' }],
  },
  {
    kana: 'いつつ',
    romaji: 'itsutsu',
    fr: 'cinq (comptage natif)',
    kanji: '五つ',
    theme: 'nombres',
    theme_label: 'Nombres',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'おみやげをいつつかいました。', romaji: 'Omiyage o itsutsu kaimashita.', fr: 'J\'ai acheté cinq souvenirs.' }],
  },
  {
    kana: 'おおい',
    romaji: 'ōi',
    fr: 'nombreux, beaucoup',
    kanji: '多い',
    theme: 'adjectifs',
    theme_label: 'Adjectifs',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのかんこうちにはひとがおおいですね。', romaji: 'Nihon no kankōchi ni wa hito ga ōi desu ne.', fr: 'Il y a beaucoup de monde dans les sites touristiques japonais.' }],
  },
  {
    kana: 'かぞく',
    romaji: 'kazoku',
    fr: 'famille',
    kanji: '家族',
    theme: 'famille',
    theme_label: 'Famille',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'かぞくといっしょにりょこうするのはさいこうです。', romaji: 'Kazoku to issho ni ryokō suru no wa saikō desu.', fr: 'Voyager en famille c\'est le meilleur.' }],
  },
  {
    kana: 'きゅう／く',
    romaji: 'kyū / ku',
    fr: 'neuf',
    kanji: '九',
    theme: 'nombres',
    theme_label: 'Nombres',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'きゅうじにレストランのよやくがあります。', romaji: 'Kyū-ji ni resutoran no yoyaku ga arimasu.', fr: 'J\'ai une réservation au restaurant à 9h.' }],
  },
  {
    kana: 'ご',
    romaji: 'go',
    fr: 'cinq',
    kanji: '五',
    theme: 'nombres',
    theme_label: 'Nombres',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ごふんまってください。', romaji: 'Go-fun matte kudasai.', fr: 'Attendez cinq minutes s\'il vous plaît.' }],
  },
  {
    kana: 'ここのか',
    romaji: 'kokonoka',
    fr: 'le neuvième jour',
    kanji: '九日',
    theme: 'nombres',
    theme_label: 'Nombres',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'さんがつのここのかはプルームのたんじょうびです。', romaji: 'San-gatsu no kokonoka wa Purūmu no tanjōbi desu.', fr: 'Le neuf mars c\'est l\'anniversaire de Plume.' }],
  },
  {
    kana: 'ここのつ',
    romaji: 'kokonotsu',
    fr: 'neuf (comptage natif)',
    kanji: '九つ',
    theme: 'nombres',
    theme_label: 'Nombres',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'おにぎりをここのつたべました。おなかがいっぱい！', romaji: 'Onigiri o kokonotsu tabemashita. Onaka ga ippai!', fr: 'J\'ai mangé neuf onigiri. J\'ai le ventre plein !' }],
  },
  {
    kana: 'さき',
    romaji: 'saki',
    fr: 'en premier, précédent',
    kanji: '先',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'わたしがさきにはいります。どうぞ。', romaji: 'Watashi ga saki ni hairimasu. Dōzo.', fr: 'Je rentre en premier. Je vous en prie.' }],
  },
  {
    kana: 'さす',
    romaji: 'sasu',
    fr: 'ouvrir un parapluie, montrer du doigt',
    kanji: '差す',
    theme: 'meteo',
    theme_label: 'Météo',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'あめなのでかさをさしてください。', romaji: 'Ame na node kasa o sashite kudasai.', fr: 'Il pleut, ouvrez votre parapluie.' }],
  },
  {
    kana: 'さん',
    romaji: 'san',
    fr: 'trois',
    kanji: '三',
    theme: 'nombres',
    theme_label: 'Nombres',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'さんにんでりょこうしています。', romaji: 'San-nin de ryokō shite imasu.', fr: 'Nous voyageons à trois.' }],
  },
  {
    kana: 'し／よん',
    romaji: 'shi / yon',
    fr: 'quatre',
    kanji: '四',
    theme: 'nombres',
    theme_label: 'Nombres',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'よんにんがけいしつにとまります。', romaji: 'Yon-nin ga keishitsu ni tomarimasu.', fr: 'Quatre personnes séjournent dans la chambre japonaise.' }],
  },
  {
    kana: 'しち／なな',
    romaji: 'shichi / nana',
    fr: 'sept',
    kanji: '七',
    theme: 'nombres',
    theme_label: 'Nombres',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ななじにちょうしょくをたべます。', romaji: 'Nana-ji ni chōshoku o tabemasu.', fr: 'Je prends le petit-déjeuner à 7 heures.' }],
  },
  {
    kana: 'じゅう／とお',
    romaji: 'jū / tō',
    fr: 'dix',
    kanji: '十',
    theme: 'nombres',
    theme_label: 'Nombres',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんごをじゅうねんまえからべんきょうしています。', romaji: 'Nihongo o jū-nen mae kara benkyō shite imasu.', fr: 'J\'apprends le japonais depuis dix ans.' }],
  },
  {
    kana: 'すこし',
    romaji: 'sukoshi',
    fr: 'un peu',
    kanji: '少し',
    theme: 'mots_outils',
    theme_label: 'Mots-outils',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんごをすこしはなせます。', romaji: 'Nihongo o sukoshi hanasemasu.', fr: 'Je parle un peu japonais.' }],
  },
  {
    kana: 'せん',
    romaji: 'sen',
    fr: 'mille',
    kanji: '千',
    theme: 'nombres',
    theme_label: 'Nombres',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このおみやげはせんえんです。やすい！', romaji: 'Kono omiyage wa sen-en desu. Yasui!', fr: 'Ce souvenir coûte mille yens. Pas cher !' }],
  },
  {
    kana: 'ちょっと',
    romaji: 'chotto',
    fr: 'un peu, un instant',
    kanji: 'ちょっと',
    theme: 'mots_outils',
    theme_label: 'Mots-outils',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ちょっとまってください。', romaji: 'Chotto matte kudasai.', fr: 'Attendez un instant s\'il vous plaît.' }],
  },
  {
    kana: 'とおか',
    romaji: 'tōka',
    fr: 'le dixième jour',
    kanji: '十日',
    theme: 'nombres',
    theme_label: 'Nombres',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'じゅうがつのとおかにちゃのゆをたいけんします。', romaji: 'Jū-gatsu no tōka ni chanoyu o taiken shimasu.', fr: 'Le dix octobre je vais faire l\'expérience de la cérémonie du thé.' }],
  },
  {
    kana: 'ときどき',
    romaji: 'tokidoki',
    fr: 'parfois, de temps en temps',
    kanji: '時々',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ときどきにほんりょうりをつくります。むずかしいです。', romaji: 'Tokidoki nihon ryōri o tsukurimasu. Muzukashii desu.', fr: 'Parfois je cuisine japonais. C\'est difficile.' }],
  },
  {
    kana: 'どれ',
    romaji: 'dore',
    fr: 'lequel (parmi plusieurs)',
    kanji: '',
    theme: 'mots_outils',
    theme_label: 'Mots-outils',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'どれがおすすめですか？えらべません！', romaji: 'Dore ga osusume desu ka? Erabemasen!', fr: 'Lequel recommandez-vous ? Je n\'arrive pas à choisir !' }],
  },
  {
    kana: 'ななつ',
    romaji: 'nanatsu',
    fr: 'sept (comptage natif)',
    kanji: '七つ',
    theme: 'nombres',
    theme_label: 'Nombres',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'やきとりをななつください！', romaji: 'Yakitori o nanatsu kudasai!', fr: 'Sept brochettes de yakitori s\'il vous plaît !' }],
  },
  {
    kana: 'なのか',
    romaji: 'nanoka',
    fr: 'le septième jour',
    kanji: '七日',
    theme: 'nombres',
    theme_label: 'Nombres',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'しちがつのなのかにまつりがあります。', romaji: 'Shichi-gatsu no nanoka ni matsuri ga arimasu.', fr: 'Le sept juillet il y a un festival.' }],
  },
  {
    kana: 'に',
    romaji: 'ni',
    fr: 'deux',
    kanji: '二',
    theme: 'nombres',
    theme_label: 'Nombres',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ふたりでにほんにいきます。たのしみ！', romaji: 'Futari de Nihon ni ikimasu. Tanoshimi!', fr: 'Nous allons au Japon à deux. J\'ai hâte !' }],
  },
  {
    kana: 'はく',
    romaji: 'haku',
    fr: 'mettre (pantalon, chaussures)',
    kanji: '履く',
    theme: 'verbes',
    theme_label: 'Verbes',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'げんかんでくつをはいてください。', romaji: 'Genkan de kutsu o haite kudasai.', fr: 'Remettez vos chaussures dans le hall d\'entrée.' }],
  },
  {
    kana: 'はじめて',
    romaji: 'hajimete',
    fr: 'pour la première fois',
    kanji: '初めて',
    theme: 'mots_outils',
    theme_label: 'Mots-outils',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'はじめてにほんにきました！ゆめがかないました！', romaji: 'Hajimete Nihon ni kimashita! Yume ga kanaimashita!', fr: 'Je viens au Japon pour la première fois ! Mon rêve est exaucé !' }],
  },
  {
    kana: 'はち',
    romaji: 'hachi',
    fr: 'huit',
    kanji: '八',
    theme: 'nombres',
    theme_label: 'Nombres',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'はちじにチェックアウトします。', romaji: 'Hachi-ji ni chekku-auto shimasu.', fr: 'Je check out à 8h.' }],
  },
  {
    kana: 'ひとつき',
    romaji: 'hitotsuki',
    fr: 'un mois',
    kanji: '一月',
    theme: 'nombres',
    theme_label: 'Nombres',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ひとつきにほんにいたいです！', romaji: 'Hitotsuki Nihon ni itai desu!', fr: 'Je veux rester un mois au Japon !' }],
  },
  {
    kana: 'ひゃく',
    romaji: 'hyaku',
    fr: 'cent',
    kanji: '百',
    theme: 'nombres',
    theme_label: 'Nombres',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ひゃくえんショップはいろいろなものがあります。', romaji: 'Hyaku-en shoppu wa iroiro na mono ga arimasu.', fr: 'Le magasin à 100 yens a plein de choses.' }],
  },
  {
    kana: 'ふたつ',
    romaji: 'futatsu',
    fr: 'deux (comptage natif)',
    kanji: '二つ',
    theme: 'nombres',
    theme_label: 'Nombres',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'おにぎりをふたつください。', romaji: 'Onigiri o futatsu kudasai.', fr: 'Deux onigiri s\'il vous plaît.' }],
  },
  {
    kana: 'ふたり',
    romaji: 'futari',
    fr: 'deux personnes',
    kanji: '二人',
    theme: 'nombres',
    theme_label: 'Nombres',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ふたりぶんのせきをよやくしたいです。', romaji: 'Futari-bun no seki o yoyaku shitai desu.', fr: 'Je voudrais réserver deux places.' }],
  },
  {
    kana: 'ふつか',
    romaji: 'futsuka',
    fr: 'le deuxième jour',
    kanji: '二日',
    theme: 'nombres',
    theme_label: 'Nombres',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にがつのふつかにとうきょうをたちます。', romaji: 'Ni-gatsu no futsuka ni Tōkyō o tachimasu.', fr: 'Je quitte Tokyo le deux février.' }],
  },
  {
    kana: 'まん',
    romaji: 'man',
    fr: 'dix mille',
    kanji: '万',
    theme: 'nombres',
    theme_label: 'Nombres',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このカメラはさんまんえんです。たかいですね。', romaji: 'Kono kamera wa san-man-en desu. Takai desu ne.', fr: 'Cet appareil photo coûte 30 000 yens. C\'est cher.' }],
  },
  {
    kana: 'みっか',
    romaji: 'mikka',
    fr: 'le troisième jour',
    kanji: '三日',
    theme: 'nombres',
    theme_label: 'Nombres',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'みっかかんきょうとにいます。', romaji: 'Mikka-kan Kyōto ni imasu.', fr: 'Je suis à Kyoto pendant trois jours.' }],
  },
  {
    kana: 'みっつ',
    romaji: 'mittsu',
    fr: 'trois (comptage natif)',
    kanji: '三つ',
    theme: 'nombres',
    theme_label: 'Nombres',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'おすしをみっつたべました。おいしかった！', romaji: 'Osushi o mittsu tabemashita. Oishikatta!', fr: 'J\'ai mangé trois sushis. C\'était délicieux !' }],
  },
  {
    kana: 'むいか',
    romaji: 'muika',
    fr: 'le sixième jour',
    kanji: '六日',
    theme: 'nombres',
    theme_label: 'Nombres',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'くがつのむいかにおおさかにつきます。', romaji: 'Ku-gatsu no muika ni Ōsaka ni tsukimasu.', fr: 'J\'arrive à Osaka le six septembre.' }],
  },
  {
    kana: 'むっつ',
    romaji: 'muttsu',
    fr: 'six (comptage natif)',
    kanji: '六つ',
    theme: 'nombres',
    theme_label: 'Nombres',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'たこやきをむっつください！', romaji: 'Takoyaki o muttsu kudasai!', fr: 'Six takoyaki s\'il vous plaît !' }],
  },
  {
    kana: 'もういちど',
    romaji: 'mō ichido',
    fr: 'encore une fois',
    kanji: 'もう一度',
    theme: 'mots_outils',
    theme_label: 'Mots-outils',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'すみません、もういちどいってください。わかりませんでした。', romaji: 'Sumimasen, mō ichido itte kudasai. Wakarimasen deshita.', fr: 'Excusez-moi, dites-le encore une fois. Je n\'avais pas compris.' }],
  },
  {
    kana: 'やっつ',
    romaji: 'yattsu',
    fr: 'huit (comptage natif)',
    kanji: '八つ',
    theme: 'nombres',
    theme_label: 'Nombres',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'おかしをやっつかいました。おみやげにします。', romaji: 'Okashi o yattsu kaimashita. Omiyage ni shimasu.', fr: 'J\'ai acheté huit confiseries. Ce sera des cadeaux.' }],
  },
  {
    kana: 'ようか',
    romaji: 'yōka',
    fr: 'le huitième jour',
    kanji: '八日',
    theme: 'nombres',
    theme_label: 'Nombres',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'しがつのようかにフランスにかえります。', romaji: 'Shi-gatsu no yōka ni Furansu ni kaerimasu.', fr: 'Je rentre en France le huit avril.' }],
  },
  {
    kana: 'よっか',
    romaji: 'yokka',
    fr: 'le quatrième jour',
    kanji: '四日',
    theme: 'nombres',
    theme_label: 'Nombres',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'よっかかんにほんにいます。みじかいですね。', romaji: 'Yokka-kan Nihon ni imasu. Mijikai desu ne.', fr: 'Je suis au Japon quatre jours. C\'est court.' }],
  },
  {
    kana: 'よっつ',
    romaji: 'yottsu',
    fr: 'quatre (comptage natif)',
    kanji: '四つ',
    theme: 'nombres',
    theme_label: 'Nombres',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'まちをよっつたずねました。', romaji: 'Machi o yottsu tazunemashita.', fr: 'J\'ai visité quatre villes.' }],
  },
  {
    kana: 'ろく',
    romaji: 'roku',
    fr: 'six',
    kanji: '六',
    theme: 'nombres',
    theme_label: 'Nombres',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ろくじにおきます。はやいですね。', romaji: 'Roku-ji ni okimasu. Hayai desu ne.', fr: 'Je me lève à 6h. C\'est tôt.' }],
  },
  {
    kana: 'あそぶ',
    romaji: 'asobu',
    fr: 'jouer, s\'amuser',
    kanji: '遊ぶ',
    theme: 'loisirs',
    theme_label: 'Loisirs',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'こどもたちはこうえんであそんでいます。', romaji: 'Kodomotachi wa kōen de asonde imasu.', fr: 'Les enfants jouent dans le parc.' }],
  },
  {
    kana: 'うたう',
    romaji: 'utau',
    fr: 'chanter',
    kanji: '歌う',
    theme: 'loisirs',
    theme_label: 'Loisirs',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'カラオケでにほんのうたをうたいたいです。', romaji: 'Karaoke de Nihon no uta o utaitai desu.', fr: 'Je veux chanter des chansons japonaises au karaoké.' }],
  },
  {
    kana: 'え',
    romaji: 'e',
    fr: 'dessin, peinture',
    kanji: '絵',
    theme: 'loisirs',
    theme_label: 'Loisirs',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'びじゅつかんでにほんのえをみました。すばらしかった。', romaji: 'Bijutsukan de Nihon no e o mimashita. Subarashikatta.', fr: 'J\'ai vu des peintures japonaises au musée. C\'était magnifique.' }],
  },
  {
    kana: 'えいが',
    romaji: 'eiga',
    fr: 'film, cinéma',
    kanji: '映画',
    theme: 'loisirs',
    theme_label: 'Loisirs',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'みやざきはやおのえいががだいすきです！', romaji: 'Miyazaki Hayao no eiga ga daisuki desu!', fr: 'J\'adore les films de Miyazaki Hayao !' }],
  },
  {
    kana: 'おんがく',
    romaji: 'ongaku',
    fr: 'musique',
    kanji: '音楽',
    theme: 'loisirs',
    theme_label: 'Loisirs',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのおんがくをよくきいています。', romaji: 'Nihon no ongaku o yoku kiite imasu.', fr: 'J\'écoute souvent de la musique japonaise.' }],
  },
  {
    kana: 'カメラ',
    romaji: 'kamera',
    fr: 'appareil photo',
    kanji: '',
    theme: 'loisirs',
    theme_label: 'Loisirs',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんでカメラをかいました。しゃしんをたくさんとります。', romaji: 'Nihon de kamera o kaimashita. Shashin o takusan torimasu.', fr: 'J\'ai acheté un appareil photo au Japon. Je vais prendre plein de photos.' }],
  },
  {
    kana: 'しゃしん',
    romaji: 'shashin',
    fr: 'photo',
    kanji: '写真',
    theme: 'loisirs',
    theme_label: 'Loisirs',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'しゃしんをとってもいいですか？', romaji: 'Shashin o totte mo ii desu ka?', fr: 'Puis-je prendre une photo ?' }],
  },
  {
    kana: 'スポーツ',
    romaji: 'supōtsu',
    fr: 'sport',
    kanji: '',
    theme: 'loisirs',
    theme_label: 'Loisirs',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのスポーツのなかでじゅうどうがすきです。', romaji: 'Nihon no supōtsu no naka de jūdō ga suki desu.', fr: 'Parmi les sports japonais j\'aime le judo.' }],
  },
  {
    kana: 'フィルム',
    romaji: 'firumu',
    fr: 'film (photo)',
    kanji: '',
    theme: 'loisirs',
    theme_label: 'Loisirs',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'フィルムカメラでにほんのふうけいをとりたいです。', romaji: 'Firumu kamera de Nihon no fūkei o toritai desu.', fr: 'Je veux photographier les paysages japonais avec un appareil argentique.' }],
  },
  {
    kana: 'ほん',
    romaji: 'hon',
    fr: 'livre',
    kanji: '本',
    theme: 'loisirs',
    theme_label: 'Loisirs',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんごのほんをかいました。まいにちよんでいます。', romaji: 'Nihongo no hon o kaimashita. Mainichi yonde imasu.', fr: 'J\'ai acheté un livre de japonais. Je le lis tous les jours.' }],
  },
  {
    kana: 'よむ',
    romaji: 'yomu',
    fr: 'lire',
    kanji: '読む',
    theme: 'loisirs',
    theme_label: 'Loisirs',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんごのまんがをよんでみました。おもしろい！', romaji: 'Nihongo no manga o yonde mimashita. Omoshiroi!', fr: 'J\'ai essayé de lire un manga en japonais. C\'est intéressant !' }],
  },
  {
    kana: 'わかい',
    romaji: 'wakai',
    fr: 'jeune',
    kanji: '若い',
    theme: 'adjectifs',
    theme_label: 'Adjectifs',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'わかいひとたちがにほんごをはやくおぼえます。', romaji: 'Wakai hitotachi ga nihongo o hayaku oboemasu.', fr: 'Les jeunes apprennent le japonais rapidement.' }],
  },
  {
    kana: 'あめ',
    romaji: 'ame',
    fr: 'pluie',
    kanji: '雨',
    theme: 'meteo',
    theme_label: 'Météo',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'あめがふっています。かさをもってきてよかった！', romaji: 'Ame ga futte imasu. Kasa o motte kite yokatta!', fr: 'Il pleut. Heureusement que j\'ai amené un parapluie !' }],
  },
  {
    kana: 'かかる',
    romaji: 'kakaru',
    fr: 'prendre (du temps), coûter',
    kanji: 'かかる',
    theme: 'mots_outils',
    theme_label: 'Mots-outils',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'えきまでどのくらいかかりますか？', romaji: 'Eki made dono kurai kakarimasu ka?', fr: 'Combien de temps faut-il pour aller à la gare ?' }],
  },
  {
    kana: 'かさ',
    romaji: 'kasa',
    fr: 'parapluie',
    kanji: '傘',
    theme: 'meteo',
    theme_label: 'Météo',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'あめがふりそうです。かさをかりられますか？', romaji: 'Ame ga furisō desu. Kasa o kariraremasu ka?', fr: 'On dirait qu\'il va pleuvoir. Puis-je emprunter un parapluie ?' }],
  },
  {
    kana: 'くもり',
    romaji: 'kumori',
    fr: 'nuageux',
    kanji: '曇り',
    theme: 'meteo',
    theme_label: 'Météo',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'きょうはくもりですが、あしたははれるでしょう。', romaji: 'Kyō wa kumori desu ga, ashita wa hareru deshō.', fr: 'Aujourd\'hui c\'est nuageux, mais demain il fera beau.' }],
  },
  {
    kana: 'じかん',
    romaji: 'jikan',
    fr: 'temps, heure',
    kanji: '時間',
    theme: 'temps',
    theme_label: 'Temps',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'じかんがありません！はやくいきましょう！', romaji: 'Jikan ga arimasen! Hayaku ikimasho!', fr: 'Il n\'y a plus de temps ! Allons vite !' }],
  },
  {
    kana: 'はれ',
    romaji: 'hare',
    fr: 'beau temps',
    kanji: '晴れ',
    theme: 'meteo',
    theme_label: 'Météo',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'はれのひにさくらをみるのがいちばんです！', romaji: 'Hare no hi ni sakura o miru no ga ichiban desu!', fr: 'Voir les cerisiers par beau temps, c\'est le mieux !' }],
  },
  {
    kana: 'はれる',
    romaji: 'hareru',
    fr: 'se dégager, devenir ensoleillé',
    kanji: '晴れる',
    theme: 'meteo',
    theme_label: 'Météo',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'あしたははれるといいですね。ハイキングにいきます。', romaji: 'Ashita wa hareru to ii desu ne. Haikingu ni ikimasu.', fr: 'J\'espère qu\'il fera beau demain. On va faire de la randonnée.' }],
  },
  {
    kana: 'ひま',
    romaji: 'hima',
    fr: 'temps libre, oisif',
    kanji: '暇',
    theme: 'meteo',
    theme_label: 'Météo',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'あしたひまですか？いっしょにかんこうしましょう！', romaji: 'Ashita hima desu ka? Issho ni kankō shimasho!', fr: 'Vous êtes libre demain ? Faisons du tourisme ensemble !' }],
  },
  {
    kana: 'ふる',
    romaji: 'furu',
    fr: 'tomber (pluie, neige)',
    kanji: '降る',
    theme: 'meteo',
    theme_label: 'Météo',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ゆきがふっています！きれい！でもさむい！', romaji: 'Yuki ga futte imasu! Kirei! Demo samui!', fr: 'Il neige ! C\'est beau ! Mais il fait froid !' }],
  },
  {
    kana: 'ゆき',
    romaji: 'yuki',
    fr: 'neige',
    kanji: '雪',
    theme: 'meteo',
    theme_label: 'Météo',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ほっかいどうのゆきまつりにいってみたいです。', romaji: 'Hokkaidō no yuki matsuri ni itte mitai desu.', fr: 'Je voudrais aller au festival des neiges d\'Hokkaido.' }],
  },
  {
    kana: 'でる',
    romaji: 'deru',
    fr: 'sortir, partir, apparaître',
    kanji: '出る',
    theme: 'culture',
    theme_label: 'Culture',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'まつりのみこしがとおりからでてきました！', romaji: 'Matsuri no mikoshi ga tōri kara dete kimashita!', fr: 'Le mikoshi du festival est sorti dans la rue !' }],
  },
  {
    kana: 'パーティー',
    romaji: 'pātī',
    fr: 'fête, réception',
    kanji: '',
    theme: 'culture',
    theme_label: 'Culture',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'かんげいパーティーにしょうたいされました。うれしい！', romaji: 'Kangei pātī ni shōtai saremashita. Ureshii!', fr: 'J\'ai été invité à une fête de bienvenue. Quelle joie !' }],
  },
  {
    kana: 'はなし',
    romaji: 'hanashi',
    fr: 'histoire, récit, conversation',
    kanji: '話',
    theme: 'culture',
    theme_label: 'Culture',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのむかしはなしがすきです。むすめさんたちもしっていますか？', romaji: 'Nihon no mukashi banashi ga suki desu. Musumetachi mo shitte imasu ka?', fr: 'J\'aime les contes japonais. Vos filles les connaissent-elles aussi ?' }],
  },
  {
    kana: 'だいじょうぶ',
    romaji: 'daijōbu',
    fr: 'ça va, pas de problème',
    kanji: '大丈夫',
    theme: 'base',
    theme_label: 'Base',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'だいじょうぶですか？てつだいましょうか？', romaji: 'Daijōbu desu ka? Tetsudaimasho ka?', fr: 'Ça va ? Voulez-vous que je vous aide ?' }],
  },
  {
    kana: 'あの',
    romaji: 'ano',
    fr: 'euh… (hésitation)',
    kanji: '',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'あの…すみません、みちをきいてもいいですか？', romaji: 'Ano… sumimasen, michi o kiite mo ii desu ka?', fr: 'Euh… excusez-moi, puis-je vous demander le chemin ?' }],
  },
  {
    kana: 'あぶない',
    romaji: 'abunai',
    fr: 'dangereux',
    kanji: '危ない',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'あぶない！くるまがきます！', romaji: 'Abunai! Kuruma ga kimasu!', fr: 'Attention ! Une voiture arrive !' }],
  },
  {
    kana: 'あまい',
    romaji: 'amai',
    fr: 'sucré, doux',
    kanji: '甘い',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのわがしはあまくておいしいです。', romaji: 'Nihon no wagashi wa amakute oishii desu.', fr: 'Les sucreries japonaises sont douces et délicieuses.' }],
  },
  {
    kana: 'あれ',
    romaji: 'are',
    fr: 'ça, cela (loin des deux)',
    kanji: 'あれ',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'あれはなんですか？きになります。', romaji: 'Are wa nan desu ka? Ki ni narimasu.', fr: 'Qu\'est-ce que c\'est que ça ? Ça m\'intrigue.' }],
  },
  {
    kana: 'いけ',
    romaji: 'ike',
    fr: 'étang',
    kanji: '池',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にわのいけにこいがいます。きれいですね。', romaji: 'Niwa no ike ni koi ga imasu. Kirei desu ne.', fr: 'Il y a des carpes dans l\'étang du jardin. C\'est beau.' }],
  },
  {
    kana: 'いち',
    romaji: 'ichi',
    fr: 'un',
    kanji: '一',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'いちまいだけください。', romaji: 'Ichi-mai dake kudasai.', fr: 'Une seule feuille s\'il vous plaît.' }],
  },
  {
    kana: 'いっしょ',
    romaji: 'issho',
    fr: 'ensemble',
    kanji: '一緒',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'いっしょにおんせんにはいりましょう！', romaji: 'Issho ni onsen ni hairimasho!', fr: 'Allons ensemble aux sources thermales !' }],
  },
  {
    kana: 'いぬ',
    romaji: 'inu',
    fr: 'chien',
    kanji: '犬',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんでいぬとさんぽしているひとをよくみます。', romaji: 'Nihon de inu to sanpo shite iru hito o yoku mimasu.', fr: 'Au Japon on voit souvent des gens qui promènent leur chien.' }],
  },
  {
    kana: 'いみ',
    romaji: 'imi',
    fr: 'sens, signification',
    kanji: '意味',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このことばのいみはなんですか？', romaji: 'Kono kotoba no imi wa nan desu ka?', fr: 'Quel est le sens de ce mot ?' }],
  },
  {
    kana: 'いや',
    romaji: 'iya',
    fr: 'non, désagréable',
    kanji: '嫌',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'なっとうはいやですが、すしはだいすきです！', romaji: 'Nattō wa iya desu ga, sushi wa daisuki desu!', fr: 'Je n\'aime pas le natto, mais j\'adore les sushis !' }],
  },
  {
    kana: 'いる',
    romaji: 'iru',
    fr: 'avoir besoin de',
    kanji: '要る',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ビザはいりますか？フランスじんなので…', romaji: 'Biza wa irimasu ka? Furansujin na node…', fr: 'Un visa est-il nécessaire ? Parce que je suis Français…' }],
  },
  {
    kana: 'いれる',
    romaji: 'ireru',
    fr: 'mettre dedans, insérer',
    kanji: '入れる',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'かばんにおみやげをいれました。', romaji: 'Kaban ni omiyage o iremashita.', fr: 'J\'ai mis les souvenirs dans le sac.' }],
  },
  {
    kana: 'いろいろ',
    romaji: 'iroiro',
    fr: 'divers, varié',
    kanji: 'いろいろ',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんにはいろいろなたべものがあります。', romaji: 'Nihon ni wa iroiro na tabemono ga arimasu.', fr: 'Il y a toutes sortes d\'aliments au Japon.' }],
  },
  {
    kana: 'うた',
    romaji: 'uta',
    fr: 'chanson',
    kanji: '歌',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのうたをおぼえたいです。', romaji: 'Nihon no uta o oboetai desu.', fr: 'Je veux apprendre des chansons japonaises.' }],
  },
  {
    kana: 'うまれる',
    romaji: 'umareru',
    fr: 'naître',
    kanji: '生まれる',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'あなたはどこでうまれましたか？', romaji: 'Anata wa doko de umaremashita ka?', fr: 'Où êtes-vous né ?' }],
  },
  {
    kana: 'えいご',
    romaji: 'eigo',
    fr: 'langue anglaise',
    kanji: '英語',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'えいごでせつめいしてもらえますか？', romaji: 'Eigo de setsumei shite moraemasu ka?', fr: 'Pourriez-vous expliquer en anglais ?' }],
  },
  {
    kana: 'エレベーター',
    romaji: 'erebētā',
    fr: 'ascenseur',
    kanji: '',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'エレベーターはどこですか？かいだんはつかえません。', romaji: 'Erebētā wa doko desu ka? Kaidan wa tsukaemasen.', fr: 'Où est l\'ascenseur ? Je ne peux pas prendre les escaliers.' }],
  },
  {
    kana: 'えんぴつ',
    romaji: 'enpitsu',
    fr: 'crayon',
    kanji: '鉛筆',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'えんぴつでかいてもいいですか？', romaji: 'Enpitsu de kaite mo ii desu ka?', fr: 'Puis-je écrire au crayon ?' }],
  },
  {
    kana: 'おとこ',
    romaji: 'otoko',
    fr: 'homme, masculin',
    kanji: '男',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'おとこのトイレはひだりです。', romaji: 'Otoko no toire wa hidari desu.', fr: 'Les toilettes hommes sont à gauche.' }],
  },
  {
    kana: 'おとこのこ',
    romaji: 'otokonoko',
    fr: 'garçon',
    kanji: '男の子',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'あのおとこのこはかわいいですね。', romaji: 'Ano otokonoko wa kawaii desu ne.', fr: 'Ce petit garçon est adorable.' }],
  },
  {
    kana: 'おとな',
    romaji: 'otona',
    fr: 'adulte',
    kanji: '大人',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'おとなにんぶんのにゅうじょうけんをください。', romaji: 'Otona nin-bun no nyūjōken o kudasai.', fr: 'Des billets d\'entrée pour adultes s\'il vous plaît.' }],
  },
  {
    kana: 'おべんとう',
    romaji: 'obentō',
    fr: 'bento, boîte-repas',
    kanji: 'お弁当',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'えきのおべんとうはおいしくてやすいです。', romaji: 'Eki no obentō wa oishikute yasui desu.', fr: 'Les bentos de gare sont délicieux et bon marché.' }],
  },
  {
    kana: 'かいしゃ',
    romaji: 'kaisha',
    fr: 'entreprise, société',
    kanji: '会社',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'どんなかいしゃにおつとめですか？', romaji: 'Donna kaisha ni otsutome desu ka?', fr: 'Dans quel type d\'entreprise travaillez-vous ?' }],
  },
  {
    kana: 'かえす',
    romaji: 'kaesu',
    fr: 'rendre, retourner',
    kanji: '返す',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'かりたほんをかえしにきました。', romaji: 'Karita hon o kaeshi ni kimashita.', fr: 'Je suis venu rendre le livre que j\'avais emprunté.' }],
  },
  {
    kana: 'かてい',
    romaji: 'katei',
    fr: 'foyer, ménage',
    kanji: '家庭',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのかていにまねかれました。うれしい！', romaji: 'Nihon no katei ni manekaremashita. Ureshii!', fr: 'J\'ai été invité chez une famille japonaise. Quelle joie !' }],
  },
  {
    kana: 'かばん',
    romaji: 'kaban',
    fr: 'sac',
    kanji: 'かばん',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'かばんのなかにパスポートがあります。', romaji: 'Kaban no naka ni pasupōto ga arimasu.', fr: 'Le passeport est dans le sac.' }],
  },
  {
    kana: 'かびん',
    romaji: 'kabin',
    fr: 'vase',
    kanji: '花瓶',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'りょかんのへやにきれいなかびんがありました。', romaji: 'Ryokan no heya ni kirei na kabin ga arimashita.', fr: 'Il y avait un joli vase dans la chambre du ryokan.' }],
  },
  {
    kana: 'かみ',
    romaji: 'kami',
    fr: 'papier',
    kanji: '紙',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'おりがみはかみをおってつくります。', romaji: 'Origami wa kami o otte tsukurimasu.', fr: 'L\'origami se fait en pliant du papier.' }],
  },
  {
    kana: 'からい',
    romaji: 'karai',
    fr: 'épicé, piquant',
    kanji: '辛い',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このりょうりはからすぎます！みずをください。', romaji: 'Kono ryōri wa kara-sugimasu! Mizu o kudasai.', fr: 'Ce plat est trop épicé ! De l\'eau s\'il vous plaît.' }],
  },
  {
    kana: 'かるい',
    romaji: 'karui',
    fr: 'léger',
    kanji: '軽い',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このスーツケースはかるくてべんりです。', romaji: 'Kono sūtsukēsu wa karukute benri desu.', fr: 'Cette valise est légère et pratique.' }],
  },
  {
    kana: 'カレー',
    romaji: 'karē',
    fr: 'curry japonais',
    kanji: '',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのカレーはフランスのとちがいますが、おいしいです。', romaji: 'Nihon no karē wa Furansu no to chigaimasu ga, oishii desu.', fr: 'Le curry japonais est différent du français, mais c\'est bon.' }],
  },
  {
    kana: 'き',
    romaji: 'ki',
    fr: 'arbre, bois',
    kanji: '木',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのさくらのきはとてもきれいです。', romaji: 'Nihon no sakura no ki wa totemo kirei desu.', fr: 'Les cerisiers japonais sont très beaux.' }],
  },
  {
    kana: 'きえる',
    romaji: 'kieru',
    fr: 'disparaître, s\'éteindre',
    kanji: '消える',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'さくらのはなはいっしゅうかんできえてしまいます。', romaji: 'Sakura no hana wa isshūkan de kiete shimaimasu.', fr: 'Les fleurs de cerisiers disparaissent en une semaine.' }],
  },
  {
    kana: 'ギター',
    romaji: 'gitā',
    fr: 'guitare',
    kanji: '',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このみせのひとがギターをひいていました。じょうずでした！', romaji: 'Kono mise no hito ga gitā o hiite imashita. Jōzu deshita!', fr: 'La personne dans ce magasin jouait de la guitare. C\'était doué !' }],
  },
  {
    kana: 'きって',
    romaji: 'kitte',
    fr: 'timbre-poste',
    kanji: '切手',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'フランスあてのきってをください。', romaji: 'Furansu ate no kitte o kudasai.', fr: 'Un timbre pour la France s\'il vous plaît.' }],
  },
  {
    kana: 'ぎゅうにく',
    romaji: 'gyūniku',
    fr: 'bœuf',
    kanji: '牛肉',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'わぎゅうのぎゅうにくはとてもやわらかいです。', romaji: 'Wagyū no gyūniku wa totemo yawarakai desu.', fr: 'Le bœuf wagyu est très tendre.' }],
  },
  {
    kana: 'きょうしつ',
    romaji: 'kyōshitsu',
    fr: 'salle de classe',
    kanji: '教室',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんごのきょうしつにかよっています。', romaji: 'Nihongo no kyōshitsu ni kayotte imasu.', fr: 'Je fréquente une école de japonais.' }],
  },
  {
    kana: 'きらい',
    romaji: 'kirai',
    fr: 'ne pas aimer, détester',
    kanji: '嫌い',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'なっとうがきらいです。においがつよいです。', romaji: 'Nattō ga kirai desu. Nioi ga tsuyoi desu.', fr: 'Je n\'aime pas le natto. L\'odeur est forte.' }],
  },
  {
    kana: 'くつ',
    romaji: 'kutsu',
    fr: 'chaussures',
    kanji: '靴',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'げんかんでくつをぬいでください。', romaji: 'Genkan de kutsu o nuide kudasai.', fr: 'Enlevez vos chaussures dans le hall d\'entrée.' }],
  },
  {
    kana: 'クラス',
    romaji: 'kurasu',
    fr: 'classe, groupe',
    kanji: '',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんごのクラスはたのしいです。', romaji: 'Nihongo no kurasu wa tanoshii desu.', fr: 'La classe de japonais est amusante.' }],
  },
  {
    kana: 'グラム',
    romaji: 'guramu',
    fr: 'gramme',
    kanji: '',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このわぎゅうをひゃくグラムください。', romaji: 'Kono wagyū o hyaku guramu kudasai.', fr: 'Cent grammes de ce wagyu s\'il vous plaît.' }],
  },
  {
    kana: 'けっこう',
    romaji: 'kekkō',
    fr: 'assez bien, suffisant, non merci',
    kanji: '結構',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'もっとおちゃはいかがですか？けっこうです、ありがとう。', romaji: 'Motto ocha wa ikaga desu ka? Kekkō desu, arigatō.', fr: 'Encore du thé ? Non merci, c\'est bien comme ça.' }],
  },
  {
    kana: 'こうさてん',
    romaji: 'kōsaten',
    fr: 'carrefour, intersection',
    kanji: '交差点',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'つぎのこうさてんをひだりにまがってください。', romaji: 'Tsugi no kōsaten o hidari ni magatte kudasai.', fr: 'Tournez à gauche au prochain carrefour.' }],
  },
  {
    kana: 'こうばん',
    romaji: 'kōban',
    fr: 'poste de police de quartier',
    kanji: '交番',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'こうばんでみちをおしえてもらいました。やさしかった！', romaji: 'Kōban de michi o oshiete moraimashita. Yasashikatta!', fr: 'On m\'a indiqué le chemin au poste de police. Ils étaient gentils !' }],
  },
  {
    kana: 'こえ',
    romaji: 'koe',
    fr: 'voix',
    kanji: '声',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'でんしゃのなかではこえをおとしてください。', romaji: 'Densha no naka de wa koe o otoshite kudasai.', fr: 'Dans le train, veuillez baisser la voix.' }],
  },
  {
    kana: 'ことば',
    romaji: 'kotoba',
    fr: 'mot, langue, expression',
    kanji: '言葉',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんごのことばをもっとおぼえたいです。', romaji: 'Nihongo no kotoba o motto oboetai desu.', fr: 'Je veux apprendre encore plus de mots japonais.' }],
  },
  {
    kana: 'こんな',
    romaji: 'konna',
    fr: 'comme ça, de ce genre',
    kanji: '',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'こんなにおいしいりょうりははじめてたべました！', romaji: 'Konna ni oishii ryōri wa hajimete tabemashita!', fr: 'Je n\'avais jamais mangé quelque chose d\'aussi délicieux !' }],
  },
  {
    kana: 'さあ',
    romaji: 'sā',
    fr: 'eh bien, allez',
    kanji: '',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'さあ、にほんごのれんしゅうをはじめましょう！', romaji: 'Sā, nihongo no renshū o hajimemasho!', fr: 'Allez, commençons la pratique du japonais !' }],
  },
  {
    kana: 'さく',
    romaji: 'saku',
    fr: 'fleurir, s\'épanouir',
    kanji: '咲く',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'さくらがさいています！はなみをしましょう。', romaji: 'Sakura ga saite imasu! Hanami o shimasho.', fr: 'Les cerisiers sont en fleurs ! Faisons le hanami.' }],
  },
  {
    kana: 'ざっし',
    romaji: 'zasshi',
    fr: 'magazine, revue',
    kanji: '雑誌',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのりょうりのざっしをかいました。', romaji: 'Nihon no ryōri no zasshi o kaimashita.', fr: 'J\'ai acheté un magazine de cuisine japonaise.' }],
  },
  {
    kana: 'さんぽする',
    romaji: 'sanpo suru',
    fr: 'se promener',
    kanji: '散歩する',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'あさはやくあさくさをさんぽしました。しずかでよかった。', romaji: 'Asa hayaku Asakusa o sanpo shimashita. Shizuka de yokatta.', fr: 'J\'ai fait une promenade matinale à Asakusa. C\'était calme, c\'était bien.' }],
  },
  {
    kana: 'しごと',
    romaji: 'shigoto',
    fr: 'travail, emploi',
    kanji: '仕事',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'しごとをやめてにほんにきました。', romaji: 'Shigoto o yamete Nihon ni kimashita.', fr: 'J\'ai quitté mon travail et je suis venu au Japon.' }],
  },
  {
    kana: 'じしょ',
    romaji: 'jisho',
    fr: 'dictionnaire',
    kanji: '辞書',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'じしょでことばをしらべました。', romaji: 'Jisho de kotoba o shirabemashita.', fr: 'J\'ai cherché le mot dans le dictionnaire.' }],
  },
  {
    kana: 'じゃ／じゃあ',
    romaji: 'ja / jā',
    fr: 'eh bien, alors (familier)',
    kanji: '',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'じゃあ、またあした！きをつけて。', romaji: 'Jā, mata ashita! Ki o tsukete.', fr: 'Eh bien, à demain ! Prenez soin de vous.' }],
  },
  {
    kana: 'シャツ',
    romaji: 'shatsu',
    fr: 'chemise, t-shirt',
    kanji: '',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このシャツはにほんでかいました。', romaji: 'Kono shatsu wa Nihon de kaimashita.', fr: 'Cette chemise, je l\'ai achetée au Japon.' }],
  },
  {
    kana: 'スカート',
    romaji: 'sukāto',
    fr: 'jupe',
    kanji: '',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このスカートはにほんのデザインでかわいいです。', romaji: 'Kono sukāto wa Nihon no dezain de kawaii desu.', fr: 'Cette jupe est de design japonais, elle est jolie.' }],
  },
  {
    kana: 'すぐに',
    romaji: 'sugu ni',
    fr: 'tout de suite, immédiatement',
    kanji: 'すぐに',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'すぐにもどります。ちょっとまってください。', romaji: 'Sugu ni modorimasu. Chotto matte kudasai.', fr: 'Je reviens tout de suite. Attendez un instant.' }],
  },
  {
    kana: 'すずしい',
    romaji: 'suzushii',
    fr: 'frais, agréablement frais',
    kanji: '涼しい',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'あきのきょうとはすずしくてきもちいいです。', romaji: 'Aki no Kyōto wa suzushikute kimochi ii desu.', fr: 'Kyoto en automne est agréablement frais.' }],
  },
  {
    kana: 'ストーブ',
    romaji: 'sutōbu',
    fr: 'chauffage, poêle',
    kanji: '',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'さむいのでストーブをつけてもいいですか？', romaji: 'Samui node sutōbu o tsukete mo ii desu ka?', fr: 'Il fait froid, puis-je allumer le chauffage ?' }],
  },
  {
    kana: 'ズボン',
    romaji: 'zubon',
    fr: 'pantalon',
    kanji: '',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このズボンはMサイズはありますか？', romaji: 'Kono zubon wa M-saizu wa arimasu ka?', fr: 'Ce pantalon existe-t-il en taille M ?' }],
  },
  {
    kana: 'スリッパ',
    romaji: 'surippa',
    fr: 'chaussons d\'intérieur',
    kanji: '',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'げんかんのよこにスリッパがあります。はいてください。', romaji: 'Genkan no yoko ni surippa ga arimasu. Haite kudasai.', fr: 'Il y a des chaussons à côté de l\'entrée. Mettez-les.' }],
  },
  {
    kana: 'すわる',
    romaji: 'suwaru',
    fr: 's\'asseoir',
    kanji: '座る',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'どうぞすわってください。おちゃをどうぞ。', romaji: 'Dōzo suwatte kudasai. Ocha o dōzo.', fr: 'Je vous en prie, asseyez-vous. Voici du thé.' }],
  },
  {
    kana: 'せいと',
    romaji: 'seito',
    fr: 'élève',
    kanji: '生徒',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんごのせいとはまじめにべんきょうしています。', romaji: 'Nihongo no seito wa majime ni benkyō shite imasu.', fr: 'Les élèves de japonais étudient sérieusement.' }],
  },
  {
    kana: 'セーター',
    romaji: 'sētā',
    fr: 'pull-over',
    kanji: '',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ふゆはセーターがひつようです。', romaji: 'Fuyu wa sētā ga hitsuyō desu.', fr: 'En hiver un pull est nécessaire.' }],
  },
  {
    kana: 'ゼロ',
    romaji: 'zero',
    fr: 'zéro',
    kanji: '',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'まちがいはゼロにしたいです。', romaji: 'Machigai wa zero ni shitai desu.', fr: 'Je veux faire zéro erreur.' }],
  },
  {
    kana: 'せんたく',
    romaji: 'sentaku',
    fr: 'lessive, lavage',
    kanji: '洗濯',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'コインランドリーでせんたくをしました。', romaji: 'Koin randorī de sentaku o shimashita.', fr: 'J\'ai fait la lessive à la laverie automatique.' }],
  },
  {
    kana: 'そと',
    romaji: 'soto',
    fr: 'extérieur, dehors',
    kanji: '外',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'そとはさむいです。コートをきてください。', romaji: 'Soto wa samui desu. Kōto o kite kudasai.', fr: 'Il fait froid dehors. Mettez un manteau.' }],
  },
  {
    kana: 'そら',
    romaji: 'sora',
    fr: 'ciel',
    kanji: '空',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのそらはとてもきれいです。', romaji: 'Nihon no sora wa totemo kirei desu.', fr: 'Le ciel au Japon est très beau.' }],
  },
  {
    kana: 'だいすき',
    romaji: 'daisuki',
    fr: 'adorer',
    kanji: '大好き',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんがだいすきです！またかならずきます！', romaji: 'Nihon ga daisuki desu! Mata kanarazu kimasu!', fr: 'J\'adore le Japon ! Je reviendrai certainement !' }],
  },
  {
    kana: 'たぶん',
    romaji: 'tabun',
    fr: 'probablement, peut-être',
    kanji: 'たぶん',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'たぶんあしたはれるとおもいます。', romaji: 'Tabun ashita hareru to omoimasu.', fr: 'Je pense que demain il fera probablement beau.' }],
  },
  {
    kana: 'たまご',
    romaji: 'tamago',
    fr: 'œuf',
    kanji: '卵',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'たまごかけごはんをはじめてたべました。おいしい！', romaji: 'Tamago kake gohan o hajimete tabemashita. Oishii!', fr: 'J\'ai mangé le riz à l\'œuf cru pour la première fois. Délicieux !' }],
  },
  {
    kana: 'ちがう',
    romaji: 'chigau',
    fr: 'différer, être différent, non',
    kanji: '違う',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'すみません、ちがいます。わたしはそれをたのんでいません。', romaji: 'Sumimasen, chigaimasu. Watashi wa sore o tanonde imasen.', fr: 'Excusez-moi, ce n\'est pas ça. Je n\'ai pas commandé ça.' }],
  },
  {
    kana: 'ちゃいろ',
    romaji: 'chairo',
    fr: 'marron, brun',
    kanji: '茶色',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'あきはちゃいろのはがとてもきれいです。', romaji: 'Aki wa chairo no ha ga totemo kirei desu.', fr: 'En automne les feuilles marron sont très belles.' }],
  },
  {
    kana: 'ちょうど',
    romaji: 'chōdo',
    fr: 'exactement, juste',
    kanji: 'ちょうど',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ちょうどじゅうにじです。ひるごはんにしましょう！', romaji: 'Chōdo jūni-ji desu. Hirugohan ni shimasho!', fr: 'Il est exactement midi. Déjeunons !' }],
  },
  {
    kana: 'つける',
    romaji: 'tsukeru',
    fr: 'allumer, activer',
    kanji: '付ける',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'エアコンをつけてもいいですか？あついです。', romaji: 'Eakon o tsukete mo ii desu ka? Atsui desu.', fr: 'Puis-je allumer la climatisation ? Il fait chaud.' }],
  },
  {
    kana: 'つよい',
    romaji: 'tsuyoi',
    fr: 'fort, puissant',
    kanji: '強い',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このさけはつよいですね。すこしだけにします。', romaji: 'Kono sake wa tsuyoi desu ne. Sukoshi dake ni shimasu.', fr: 'Ce saké est fort. Je n\'en prendrai qu\'un peu.' }],
  },
  {
    kana: 'テープ',
    romaji: 'tēpu',
    fr: 'ruban adhésif',
    kanji: '',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このおみやげをつつむのにテープをかしてください。', romaji: 'Kono omiyage o tsutsumu no ni tēpu o kashite kudasai.', fr: 'Prêtez-moi du ruban pour emballer ce souvenir.' }],
  },
  {
    kana: 'では',
    romaji: 'dewa',
    fr: 'eh bien, dans ce cas (formel)',
    kanji: 'では',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'では、またらいねんにほんにきます！', romaji: 'Dewa, mata rainen Nihon ni kimasu!', fr: 'Eh bien, l\'année prochaine je reviendrai au Japon !' }],
  },
  {
    kana: 'でんわ',
    romaji: 'denwa',
    fr: 'téléphone',
    kanji: '電話',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'でんわばんごうをおしえてください。', romaji: 'Denwa bangō o oshiete kudasai.', fr: 'Donnez-moi votre numéro de téléphone s\'il vous plaît.' }],
  },
  {
    kana: 'どうぶつ',
    romaji: 'dōbutsu',
    fr: 'animal',
    kanji: '動物',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'どうぶつえんにパンダがいます！みにいきましょう。', romaji: 'Dōbutsuen ni panda ga imasu! Mi ni ikimasho.', fr: 'Il y a des pandas au zoo ! Allons les voir.' }],
  },
  {
    kana: 'とけい',
    romaji: 'tokei',
    fr: 'montre, horloge',
    kanji: '時計',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このとけいはにほんのブランドですか？', romaji: 'Kono tokei wa Nihon no burando desu ka?', fr: 'Cette montre est-elle d\'une marque japonaise ?' }],
  },
  {
    kana: 'とまる',
    romaji: 'tomaru',
    fr: 's\'arrêter, séjourner',
    kanji: '止まる',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'りょかんにとまりました。ふとんはきもちよかった。', romaji: 'Ryokan ni tomarimashita. Futon wa kimochi yokatta.', fr: 'J\'ai séjourné dans un ryokan. Le futon était confortable.' }],
  },
  {
    kana: 'ともだち',
    romaji: 'tomodachi',
    fr: 'ami',
    kanji: '友達',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんじんのともだちができました！うれしいです。', romaji: 'Nihonjin no tomodachi ga dekimashita! Ureshii desu.', fr: 'Je me suis fait des amis japonais ! Je suis content.' }],
  },
  {
    kana: 'なく',
    romaji: 'naku',
    fr: 'crier (animal), pleurer',
    kanji: '鳴く',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'あさはやくとりがなきます。', romaji: 'Asa hayaku tori ga nakimasu.', fr: 'Tôt le matin les oiseaux chantent.' }],
  },
  {
    kana: 'ぬるい',
    romaji: 'nurui',
    fr: 'tiède',
    kanji: '温い',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このおちゃはぬるいです。あついのをください。', romaji: 'Kono ocha wa nurui desu. Atsui no o kudasai.', fr: 'Ce thé est tiède. Donnez-m\'en un chaud.' }],
  },
  {
    kana: 'ネクタイ',
    romaji: 'nekutai',
    fr: 'cravate',
    kanji: '',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このレストランにはネクタイがひつようですか？', romaji: 'Kono resutoran ni wa nekutai ga hitsuyō desu ka?', fr: 'Faut-il une cravate pour ce restaurant ?' }],
  },
  {
    kana: 'ねこ',
    romaji: 'neko',
    fr: 'chat',
    kanji: '猫',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのねこカフェにいきました。かわいかった！', romaji: 'Nihon no neko kafe ni ikimashita. Kawaikatta!', fr: 'Je suis allé dans un café à chats japonais. C\'était adorable !' }],
  },
  {
    kana: 'は',
    romaji: 'ha',
    fr: 'dent',
    kanji: '歯',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'はがいたいです。はいしゃにいきたいです。', romaji: 'Ha ga itai desu. Haisha ni ikitai desu.', fr: 'J\'ai mal aux dents. Je veux aller chez le dentiste.' }],
  },
  {
    kana: 'はこ',
    romaji: 'hako',
    fr: 'boîte, carton',
    kanji: '箱',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'おかしのはこをおみやげにかいました。', romaji: 'Okashi no hako o omiyage ni kaimashita.', fr: 'J\'ai acheté une boîte de confiseries en souvenir.' }],
  },
  {
    kana: 'はじめ',
    romaji: 'hajime',
    fr: 'début, commencement',
    kanji: '初め',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'はじめからにほんごをべんきょうしなおしています。', romaji: 'Hajime kara nihongo o benkyō shinao shite imasu.', fr: 'Je recommence l\'apprentissage du japonais depuis le début.' }],
  },
  {
    kana: 'バター',
    romaji: 'batā',
    fr: 'beurre',
    kanji: '',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのバターはとてもこくがあっておいしいです。', romaji: 'Nihon no batā wa totemo koku ga atte oishii desu.', fr: 'Le beurre japonais est très riche et délicieux.' }],
  },
  {
    kana: 'はたち',
    romaji: 'hatachi',
    fr: '20 ans',
    kanji: '二十歳',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'はたちからおさけがのめます。にほんでも。', romaji: 'Hatachi kara osake ga nomemasu. Nihon demo.', fr: 'On peut boire de l\'alcool à partir de 20 ans. Au Japon aussi.' }],
  },
  {
    kana: 'ばんごう',
    romaji: 'bangō',
    fr: 'numéro',
    kanji: '番号',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'へやのばんごうはなんばんですか？', romaji: 'Heya no bangō wa nan-ban desu ka?', fr: 'Quel est le numéro de ma chambre ?' }],
  },
  {
    kana: 'はんぶん',
    romaji: 'hanbun',
    fr: 'la moitié',
    kanji: '半分',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このケーキのはんぶんをわけましょう。', romaji: 'Kono kēki no hanbun o wakemasho.', fr: 'Partageons la moitié de ce gâteau.' }],
  },
  {
    kana: 'ふうとう',
    romaji: 'fūtō',
    fr: 'enveloppe',
    kanji: '封筒',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'てがみをふうとうにいれてだしました。', romaji: 'Tegami o fūtō ni irete dashimashita.', fr: 'J\'ai mis la lettre dans l\'enveloppe et l\'ai envoyée.' }],
  },
  {
    kana: 'プール',
    romaji: 'pūru',
    fr: 'piscine',
    kanji: '',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ホテルのプールでおよぎました。', romaji: 'Hoteru no pūru de oyogimashita.', fr: 'J\'ai nagé dans la piscine de l\'hôtel.' }],
  },
  {
    kana: 'ぶたにく',
    romaji: 'butaniku',
    fr: 'porc',
    kanji: '豚肉',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'とんかつはぶたにくのりょうりでとてもおいしいです。', romaji: 'Tonkatsu wa butaniku no ryōri de totemo oishii desu.', fr: 'Le tonkatsu est un plat de porc pané très délicieux.' }],
  },
  {
    kana: 'ふとい',
    romaji: 'futoi',
    fr: 'gros, épais',
    kanji: '太い',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'うどんのめんはふといですね。', romaji: 'Udon no men wa futoi desu ne.', fr: 'Les nouilles udon sont épaisses.' }],
  },
  {
    kana: 'ぶんしょう',
    romaji: 'bunshō',
    fr: 'texte, phrase, passage',
    kanji: '文章',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このぶんしょうのいみがわかりません。', romaji: 'Kono bunshō no imi ga wakarimasen.', fr: 'Je ne comprends pas le sens de ce texte.' }],
  },
  {
    kana: 'ページ',
    romaji: 'pēji',
    fr: 'page',
    kanji: '',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'さんじゅっぺーじをよんでください。', romaji: 'Sanjuppēji o yonde kudasai.', fr: 'Lisez la page trente.' }],
  },
  {
    kana: 'へた',
    romaji: 'heta',
    fr: 'maladroit, pas doué',
    kanji: '下手',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんごがへたですが、れんしゅうしています。', romaji: 'Nihongo ga heta desu ga, renshū shite imasu.', fr: 'Je suis maladroit en japonais, mais je m\'entraîne.' }],
  },
  {
    kana: 'ペット',
    romaji: 'petto',
    fr: 'animal de compagnie',
    kanji: '',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんではペットのふくがたくさんうっています！', romaji: 'Nihon de wa petto no fuku ga takusan utte imasu!', fr: 'Au Japon, il y a plein de vêtements pour animaux !' }],
  },
  {
    kana: 'へん',
    romaji: 'hen',
    fr: 'environs, zone, bizarre',
    kanji: '辺',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このへんにおいしいりょうりやはありますか？', romaji: 'Kono hen ni oishii ryōriya wa arimasu ka?', fr: 'Y a-t-il un bon restaurant dans le coin ?' }],
  },
  {
    kana: 'ペン',
    romaji: 'pen',
    fr: 'stylo',
    kanji: '',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ペンをかしてください。サインしなければなりません。', romaji: 'Pen o kashite kudasai. Sain shinakereba narimasen.', fr: 'Prêtez-moi un stylo. Je dois signer.' }],
  },
  {
    kana: 'ポケット',
    romaji: 'poketto',
    fr: 'poche',
    kanji: '',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'さいふはポケットにいれてください。すりにきをつけて。', romaji: 'Saifu wa poketto ni irete kudasai. Suri ni ki o tsukete.', fr: 'Mettez le portefeuille dans la poche. Attention aux pickpockets.' }],
  },
  {
    kana: 'ポスト',
    romaji: 'posuto',
    fr: 'boîte aux lettres, poste',
    kanji: '',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このてがみをポストにいれてください。', romaji: 'Kono tegami o posuto ni irete kudasai.', fr: 'Mettez cette lettre dans la boîte aux lettres s\'il vous plaît.' }],
  },
  {
    kana: 'ほんだな',
    romaji: 'hondana',
    fr: 'étagère à livres',
    kanji: '本棚',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ほんだなににほんごのほんがたくさんあります。', romaji: 'Hondana ni nihongo no hon ga takusan arimasu.', fr: 'Il y a beaucoup de livres de japonais sur l\'étagère.' }],
  },
  {
    kana: 'ほんとう',
    romaji: 'hontō',
    fr: 'vrai, vérité',
    kanji: '本当',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ほんとうにありがとうございます！', romaji: 'Hontō ni arigatō gozaimasu!', fr: 'Merci vraiment du fond du cœur !' }],
  },
  {
    kana: 'まいにち',
    romaji: 'mainichi',
    fr: 'tous les jours, quotidiennement',
    kanji: '毎日',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'まいにちすこしずつにほんごをべんきょうしています。', romaji: 'Mainichi sukoshi zutsu nihongo o benkyō shite imasu.', fr: 'Chaque jour j\'étudie le japonais un peu.' }],
  },
  {
    kana: 'まずい',
    romaji: 'mazui',
    fr: 'mauvais (goût), désagréable',
    kanji: 'まずい',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このりょうりはまずいですね。べつのをたのみましょう。', romaji: 'Kono ryōri wa mazui desu ne. Betsu no o tanomimasho.', fr: 'Ce plat n\'est pas bon. Commandons autre chose.' }],
  },
  {
    kana: 'マッチ',
    romaji: 'matchi',
    fr: 'allumettes',
    kanji: '',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'マッチはありますか？ろうそくをつけたいです。', romaji: 'Matchi wa arimasu ka? Rōsoku o tsuketai desu.', fr: 'Avez-vous des allumettes ? Je veux allumer les bougies.' }],
  },
  {
    kana: 'まるい',
    romaji: 'marui',
    fr: 'rond, circulaire',
    kanji: '丸い',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'たこやきはまるいかたちです。', romaji: 'Takoyaki wa marui katachi desu.', fr: 'Les takoyaki ont une forme ronde.' }],
  },
  {
    kana: 'まんねんひつ',
    romaji: 'mannenhitsu',
    fr: 'stylo-plume',
    kanji: '万年筆',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのまんねんひつはゆうめいです。おみやげにしました。', romaji: 'Nihon no mannenhitsu wa yūmei desu. Omiyage ni shimashita.', fr: 'Les stylos-plumes japonais sont réputés. Je l\'ai pris en souvenir.' }],
  },
  {
    kana: 'メートル',
    romaji: 'mētoru',
    fr: 'mètre',
    kanji: '',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'ふじさんはさんせんろっぴゃくはちじゅうさんメートルです。', romaji: 'Fujisan wa sanzen roppyaku hachijūsan mētoru desu.', fr: 'Le mont Fuji mesure 3 776 mètres.' }],
  },
  {
    kana: 'もっと',
    romaji: 'motto',
    fr: 'plus, davantage',
    kanji: 'もっと',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'もっとにほんごをはなせるようになりたいです！', romaji: 'Motto nihongo o hanaseru yō ni naritai desu!', fr: 'Je veux pouvoir parler encore mieux le japonais !' }],
  },
  {
    kana: 'もの',
    romaji: 'mono',
    fr: 'chose, objet',
    kanji: '物',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんにはめずらしいものがたくさんあります。', romaji: 'Nihon ni wa mezurashii mono ga takusan arimasu.', fr: 'Au Japon il y a beaucoup de choses insolites.' }],
  },
  {
    kana: 'もんだい',
    romaji: 'mondai',
    fr: 'problème, question',
    kanji: '問題',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'もんだいありません。だいじょうぶです！', romaji: 'Mondai arimasen. Daijōbu desu!', fr: 'Pas de problème. Tout va bien !' }],
  },
  {
    kana: 'ゆうめい',
    romaji: 'yūmei',
    fr: 'célèbre, connu',
    kanji: '有名',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'きんかくじはせかいじゅうでゆうめいです。', romaji: 'Kinkakuji wa sekai-jū de yūmei desu.', fr: 'Le Pavillon d\'Or est célèbre dans le monde entier.' }],
  },
  {
    kana: 'ようふく',
    romaji: 'yōfuku',
    fr: 'vêtements de style occidental',
    kanji: '洋服',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'わふくもようふくも、にほんのデザインはすてきです。', romaji: 'Wafuku mo yōfuku mo, Nihon no dezain wa suteki desu.', fr: 'Que ce soit vêtements japonais ou occidentaux, le design japonais est beau.' }],
  },
  {
    kana: 'ラジオ',
    romaji: 'rajio',
    fr: 'radio',
    kanji: '',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'にほんのラジオをきいてにほんごをれんしゅうしています。', romaji: 'Nihon no rajio o kiite nihongo o renshū shite imasu.', fr: 'J\'écoute la radio japonaise pour pratiquer le japonais.' }],
  },
  {
    kana: 'れい',
    romaji: 'rei',
    fr: 'zéro',
    kanji: '零',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'でんわばんごうはれいからはじまります。', romaji: 'Denwa bangō wa rei kara hajimarimasu.', fr: 'Le numéro de téléphone commence par zéro.' }],
  },
  {
    kana: 'れいぞうこ',
    romaji: 'reizōko',
    fr: 'réfrigérateur',
    kanji: '冷蔵庫',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'へやのれいぞうこのみずをのんでいいですか？', romaji: 'Heya no reizōko no mizu o nonde ii desu ka?', fr: 'Puis-je boire l\'eau du réfrigérateur de la chambre ?' }],
  },
  {
    kana: 'れんしゅうする',
    romaji: 'renshū suru',
    fr: 's\'entraîner, pratiquer',
    kanji: '練習する',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'まいにちにほんごをれんしゅうすれば、かならずうまくなります。', romaji: 'Mainichi nihongo o renshū sureba, kanarazu umaku narimasu.', fr: 'Si tu pratiques le japonais tous les jours, tu progresseras certainement.' }],
  },
  {
    kana: 'コピーする',
    romaji: 'kopī suru',
    fr: 'copier, photocopier',
    kanji: '',
    theme: 'quotidien',
    theme_label: 'Quotidien',
    level: 1, pack: 'perso', source: 'kanpai_n5', source_label: 'JLPT N5 Kanpai',
    examples: [{ jp: 'このちずをコピーしてもらえますか？', romaji: 'Kono chizu o kopī shite moraemasu ka?', fr: 'Pourriez-vous me faire une copie de cette carte ?' }],
  },
  {
    "kana": "あっち",
    "romaji": "achi",
    "fr": "là-bas",
    "kanji": "",
    "theme": "adjectifs",
    "theme_label": "Adjectifs",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "あっちにいけばいいですよ。",
        "romaji": "Acchi ni ikeba ii desu yo.",
        "fr": "Vous pouvez aller par là-bas."
      }
    ]
  },
  {
    "kana": "いい/よい",
    "romaji": "ii/yoi",
    "fr": "bon",
    "kanji": "",
    "theme": "adjectifs",
    "theme_label": "Adjectifs",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "にほんのさけはいいですね！",
        "romaji": "Nihon no sake wa ii desu ne!",
        "fr": "Le saké japonais est vraiment bon !"
      }
    ]
  },
  {
    "kana": "いろ",
    "romaji": "iro",
    "fr": "couleur",
    "kanji": "色",
    "theme": "adjectifs",
    "theme_label": "Adjectifs",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "このきものはどんないろがありますか？",
        "romaji": "Kono kimono wa donna iro ga arimasu ka?",
        "fr": "Ce kimono existe en quelle couleur ?"
      }
    ]
  },
  {
    "kana": "おおきな",
    "romaji": "ookina",
    "fr": "grand",
    "kanji": "大きな",
    "theme": "adjectifs",
    "theme_label": "Adjectifs",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "おおきなとりいがあります。みごとです。",
        "romaji": "Ōkina torii ga arimasu. Migoto desu.",
        "fr": "Il y a un grand torii. C'est impressionnant."
      }
    ]
  },
  {
    "kana": "おおぜい",
    "romaji": "oozei",
    "fr": "beaucoup de monde",
    "kanji": "大勢",
    "theme": "adjectifs",
    "theme_label": "Adjectifs",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "おまつりにおおぜいのひとがきました。",
        "romaji": "Omatsuri ni ōzei no hito ga kimashita.",
        "fr": "Beaucoup de monde est venu au festival."
      }
    ]
  },
  {
    "kana": "がいこくじん",
    "romaji": "gaikokujin",
    "fr": "étranger",
    "kanji": "外国人",
    "theme": "adjectifs",
    "theme_label": "Adjectifs",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "にほんではがいこくじんにやさしいひとがおおいです。",
        "romaji": "Nihon de wa gaikokujin ni yasashii hito ga ōi desu.",
        "fr": "Au Japon beaucoup de gens sont gentils avec les étrangers."
      }
    ]
  },
  {
    "kana": "じぶん",
    "romaji": "jibun",
    "fr": "soi-même",
    "kanji": "自分",
    "theme": "adjectifs",
    "theme_label": "Adjectifs",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "じぶんでにほんごをべんきょうしています。",
        "romaji": "Jibun de nihongo o benkyō shite imasu.",
        "fr": "J'apprends le japonais par moi-même."
      }
    ]
  },
  {
    "kana": "じょうぶ",
    "romaji": "joubu",
    "fr": "fort, durable",
    "kanji": "丈夫",
    "theme": "adjectifs",
    "theme_label": "Adjectifs",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "このかばんはじょうぶです。にほんせいです。",
        "romaji": "Kono kaban wa jōbu desu. Nihon-sei desu.",
        "fr": "Ce sac est solide. C'est fait au Japon."
      }
    ]
  },
  {
    "kana": "そっち",
    "romaji": "sochi",
    "fr": "là-bas",
    "kanji": "",
    "theme": "adjectifs",
    "theme_label": "Adjectifs",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "そっちにいくとえきがあります。",
        "romaji": "Socchi ni iku to eki ga arimasu.",
        "fr": "En allant par là il y a une gare."
      }
    ]
  },
  {
    "kana": "たいせつ",
    "romaji": "taisetsu",
    "fr": "important",
    "kanji": "大切",
    "theme": "adjectifs",
    "theme_label": "Adjectifs",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "にほんごのたんごをおぼえることはたいせつです。",
        "romaji": "Nihongo no tango o oboeru koto wa taisetsu desu.",
        "fr": "Mémoriser le vocabulaire japonais est important."
      }
    ]
  },
  {
    "kana": "たて",
    "romaji": "tate",
    "fr": "longueur",
    "kanji": "",
    "theme": "adjectifs",
    "theme_label": "Adjectifs",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "このとうのたてはなんメートルですか？",
        "romaji": "Kono tō no tate wa nan-mētoru desu ka?",
        "fr": "Quelle est la hauteur de cette tour ?"
      }
    ]
  },
  {
    "kana": "つめたい",
    "romaji": "tsumetai",
    "fr": "froid",
    "kanji": "冷たい",
    "theme": "adjectifs",
    "theme_label": "Adjectifs",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "なつはつめたいビールがおいしいです！かんぱい！",
        "romaji": "Natsu wa tsumetai bīru ga oishii desu! Kanpai!",
        "fr": "En été la bière fraîche est délicieuse ! Santé !"
      }
    ]
  },
  {
    "kana": "ながい",
    "romaji": "nagai",
    "fr": "long",
    "kanji": "長い",
    "theme": "adjectifs",
    "theme_label": "Adjectifs",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "にほんのしんかんせんのろせんはながいです。",
        "romaji": "Nihon no shinkansen no rosen wa nagai desu.",
        "fr": "Le réseau Shinkansen est long."
      }
    ]
  },
  {
    "kana": "ほそい",
    "romaji": "hosoi",
    "fr": "mince",
    "kanji": "細い",
    "theme": "adjectifs",
    "theme_label": "Adjectifs",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "このそばはほそくておいしいです。",
        "romaji": "Kono soba wa hosokute oishii desu.",
        "fr": "Ces nouilles soba sont fines et délicieuses."
      }
    ]
  },
  {
    "kana": "みじかい",
    "romaji": "mijikai",
    "fr": "court",
    "kanji": "短い",
    "theme": "adjectifs",
    "theme_label": "Adjectifs",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "にほんのたびはみじかかったです。またいきたい！",
        "romaji": "Nihon no tabi wa mijikakatta desu. Mata ikitai!",
        "fr": "Le voyage au Japon était court. Je veux y retourner !"
      }
    ]
  },
  {
    "kana": "みどり",
    "romaji": "midori",
    "fr": "vert",
    "kanji": "緑",
    "theme": "adjectifs",
    "theme_label": "Adjectifs",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "にほんのさんりんはみどりがこいです。",
        "romaji": "Nihon no sanrin wa midori ga koi desu.",
        "fr": "Les forêts japonaises ont un vert intense."
      }
    ]
  },
  {
    "kana": "ゆっくりと",
    "romaji": "yukurito",
    "fr": "lentement",
    "kanji": "",
    "theme": "adjectifs",
    "theme_label": "Adjectifs",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "ゆっくりとはなしてください。わかりません。",
        "romaji": "Yukkuri to hanashite kudasai. Wakarimasen.",
        "fr": "Parlez lentement s'il vous plaît. Je ne comprends pas."
      }
    ]
  },
  {
    "kana": "りゅうがくせい",
    "romaji": "ryuugakusei",
    "fr": "étudiant à l\\",
    "kanji": "留学生",
    "theme": "adjectifs",
    "theme_label": "Adjectifs",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "このがっこうにはたくさんのりゅうがくせいがいます。",
        "romaji": "Kono gakkō ni wa takusan no ryūgakusei ga imasu.",
        "fr": "Il y a beaucoup d'étudiants étrangers dans cette école."
      }
    ]
  },
  {
    "kana": "あなた",
    "romaji": "anata",
    "fr": "toi",
    "kanji": "",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "あなたはにほんごをはなせますか？",
        "romaji": "Anata wa nihongo o hanasemasu ka?",
        "fr": "Parlez-vous japonais ?"
      }
    ]
  },
  {
    "kana": "あまり",
    "romaji": "amari",
    "fr": "peu",
    "kanji": "",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "にほんごはあまりわかりませんが、がんばります。",
        "romaji": "Nihongo wa amari wakarimasen ga, ganbarimasu.",
        "fr": "Je ne parle pas très bien japonais, mais je vais faire de mon mieux."
      }
    ]
  },
  {
    "kana": "ある",
    "romaji": "aru",
    "fr": "il y a",
    "kanji": "",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "このちかくにいいおみせはありますか？",
        "romaji": "Kono chikaku ni ii omise wa arimasu ka?",
        "fr": "Y a-t-il un bon magasin dans les environs ?"
      }
    ]
  },
  {
    "kana": "いいえ",
    "romaji": "iie",
    "fr": "non",
    "kanji": "",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "いいえ、ありがとうございます。けっこうです。",
        "romaji": "Iie, arigatō gozaimasu. Kekkō desu.",
        "fr": "Non merci. Ça va comme ça."
      }
    ]
  },
  {
    "kana": "いつ",
    "romaji": "itsu",
    "fr": "quand",
    "kanji": "",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "にほんにいつまたいきますか？",
        "romaji": "Nihon ni itsu mata ikimasu ka?",
        "fr": "Quand retournez-vous au Japon ?"
      }
    ]
  },
  {
    "kana": "ええ",
    "romaji": "ee",
    "fr": "oui",
    "kanji": "",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "ええのつかいかたをれんしゅうしています。",
        "romaji": "ええ no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser ええ."
      }
    ]
  },
  {
    "kana": "おす",
    "romaji": "osu",
    "fr": "pousser",
    "kanji": "押す",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "おすのつかいかたをれんしゅうしています。",
        "romaji": "おす no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser おす."
      }
    ]
  },
  {
    "kana": "おなじ",
    "romaji": "onaji",
    "fr": "identique",
    "kanji": "同じ",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "おなじのつかいかたをれんしゅうしています。",
        "romaji": "おなじ no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser おなじ."
      }
    ]
  },
  {
    "kana": "おぼえる",
    "romaji": "oboeru",
    "fr": "retenir",
    "kanji": "覚える",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "おぼえるのつかいかたをれんしゅうしています。",
        "romaji": "おぼえる no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser おぼえる."
      }
    ]
  },
  {
    "kana": "おりる",
    "romaji": "oriru",
    "fr": "descendre",
    "kanji": "降りる",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "おりるのつかいかたをれんしゅうしています。",
        "romaji": "おりる no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser おりる."
      }
    ]
  },
  {
    "kana": "がくせい",
    "romaji": "gakusei",
    "fr": "étudiant",
    "kanji": "学生",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "がくせいのつかいかたをれんしゅうしています。",
        "romaji": "がくせい no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser がくせい."
      }
    ]
  },
  {
    "kana": "かた",
    "romaji": "kata",
    "fr": "personne, façon de faire",
    "kanji": "方",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "かたのつかいかたをれんしゅうしています。",
        "romaji": "かた no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser かた."
      }
    ]
  },
  {
    "kana": "かんじ",
    "romaji": "kanji",
    "fr": "kanji (caractère)",
    "kanji": "漢字",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "かんじのつかいかたをれんしゅうしています。",
        "romaji": "かんじ no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser かんじ."
      }
    ]
  },
  {
    "kana": "きく",
    "romaji": "kiku",
    "fr": "entendre, écouter",
    "kanji": "聞く",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "みちをきいてもいいですか？まいごになりました。",
        "romaji": "Michi o kiite mo ii desu ka? Maigo ni narimashita.",
        "fr": "Puis-je vous demander le chemin ? Je me suis perdu."
      }
    ]
  },
  {
    "kana": "きる",
    "romaji": "kiru",
    "fr": "couper",
    "kanji": "切る",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "このゆかたをきてもいいですか？",
        "romaji": "Kono yukata o kite mo ii desu ka?",
        "fr": "Puis-je mettre ce yukata ?"
      }
    ]
  },
  {
    "kana": "キロ/キログラム",
    "romaji": "キロ/キログラム",
    "fr": "kilogramme",
    "kanji": "",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "キロ/キログラムのつかいかたをれんしゅうしています。",
        "romaji": "キロ/キログラム no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser キロ/キログラム."
      }
    ]
  },
  {
    "kana": "キロ/キロメートル",
    "romaji": "キロ/キロメトル",
    "fr": "kilomètre",
    "kanji": "",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "キロ/キロメートルのつかいかたをれんしゅうしています。",
        "romaji": "キロ/キロメートル no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser キロ/キロメートル."
      }
    ]
  },
  {
    "kana": "ください",
    "romaji": "kudasai",
    "fr": "s\\",
    "kanji": "",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "くださいのつかいかたをれんしゅうしています。",
        "romaji": "ください no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser ください."
      }
    ]
  },
  {
    "kana": "くつした",
    "romaji": "kutsushita",
    "fr": "chaussettes",
    "kanji": "靴下",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "くつしたのつかいかたをれんしゅうしています。",
        "romaji": "くつした no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser くつした."
      }
    ]
  },
  {
    "kana": "くもる",
    "romaji": "kumoru",
    "fr": "devenir trouble",
    "kanji": "曇る",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "くもるのつかいかたをれんしゅうしています。",
        "romaji": "くもる no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser くもる."
      }
    ]
  },
  {
    "kana": "けす",
    "romaji": "kesu",
    "fr": "effacer, éteindre",
    "kanji": "消す",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "でるときにでんきをけしてください。",
        "romaji": "Deru toki ni denki o keshite kudasai.",
        "fr": "Éteignez la lumière quand vous sortez."
      }
    ]
  },
  {
    "kana": "こっち",
    "romaji": "kochi",
    "fr": "comme cela",
    "kanji": "",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "こっちのつかいかたをれんしゅうしています。",
        "romaji": "こっち no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser こっち."
      }
    ]
  },
  {
    "kana": "この",
    "romaji": "kono",
    "fr": "ce",
    "kanji": "",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "こののつかいかたをれんしゅうしています。",
        "romaji": "この no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser この."
      }
    ]
  },
  {
    "kana": "こまる",
    "romaji": "komaru",
    "fr": "être inquiet",
    "kanji": "困る",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "こまるのつかいかたをれんしゅうしています。",
        "romaji": "こまる no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser こまる."
      }
    ]
  },
  {
    "kana": "これ",
    "romaji": "kore",
    "fr": "ceci",
    "kanji": "",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "これのつかいかたをれんしゅうしています。",
        "romaji": "これ no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser これ."
      }
    ]
  },
  {
    "kana": "じどうしゃ",
    "romaji": "jidousha",
    "fr": "automobile",
    "kanji": "自動車",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "じどうしゃのつかいかたをれんしゅうしています。",
        "romaji": "じどうしゃ no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser じどうしゃ."
      }
    ]
  },
  {
    "kana": "しぬ",
    "romaji": "shinu",
    "fr": "à mourir",
    "kanji": "死ぬ",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "このりょうりはおいしすぎてしにそうです！",
        "romaji": "Kono ryōri wa oishi-sugite shini-sō desu!",
        "fr": "Ce plat est tellement délicieux que j'en pourrais mourir !"
      }
    ]
  },
  {
    "kana": "じゅぎょう",
    "romaji": "jugyou",
    "fr": "cours",
    "kanji": "授業",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "じゅぎょうのつかいかたをれんしゅうしています。",
        "romaji": "じゅぎょう no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser じゅぎょう."
      }
    ]
  },
  {
    "kana": "じょうず",
    "romaji": "jouzu",
    "fr": "habile",
    "kanji": "上手",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "じょうずのつかいかたをれんしゅうしています。",
        "romaji": "じょうず no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser じょうず."
      }
    ]
  },
  {
    "kana": "しょくどう",
    "romaji": "shokudou",
    "fr": "réfectoire",
    "kanji": "食堂",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "しょくどうのつかいかたをれんしゅうしています。",
        "romaji": "しょくどう no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser しょくどう."
      }
    ]
  },
  {
    "kana": "せびろ",
    "romaji": "sebiro",
    "fr": "costume d\\",
    "kanji": "背広",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "せびろのつかいかたをれんしゅうしています。",
        "romaji": "せびろ no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser せびろ."
      }
    ]
  },
  {
    "kana": "ぜんぶ",
    "romaji": "zenbu",
    "fr": "tous",
    "kanji": "全部",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "ぜんぶのつかいかたをれんしゅうしています。",
        "romaji": "ぜんぶ no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser ぜんぶ."
      }
    ]
  },
  {
    "kana": "そうじする",
    "romaji": "soujisuru",
    "fr": "nettoyer",
    "kanji": "掃除",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "そうじするのつかいかたをれんしゅうしています。",
        "romaji": "そうじする no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser そうじする."
      }
    ]
  },
  {
    "kana": "そうして/そして",
    "romaji": "soushite/soshite",
    "fr": "et",
    "kanji": "",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "そうして/そしてのつかいかたをれんしゅうしています。",
        "romaji": "そうして/そして no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser そうして/そして."
      }
    ]
  },
  {
    "kana": "その",
    "romaji": "sono",
    "fr": "ce",
    "kanji": "",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "そののつかいかたをれんしゅうしています。",
        "romaji": "その no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser その."
      }
    ]
  },
  {
    "kana": "それ",
    "romaji": "sore",
    "fr": "cela",
    "kanji": "",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "それのつかいかたをれんしゅうしています。",
        "romaji": "それ no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser それ."
      }
    ]
  },
  {
    "kana": "それでは",
    "romaji": "soredeha",
    "fr": "dans ce cas",
    "kanji": "",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "それではのつかいかたをれんしゅうしています。",
        "romaji": "それでは no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser それでは."
      }
    ]
  },
  {
    "kana": "だれ",
    "romaji": "dare",
    "fr": "qui",
    "kanji": "誰",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "だれのつかいかたをれんしゅうしています。",
        "romaji": "だれ no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser だれ."
      }
    ]
  },
  {
    "kana": "だれか",
    "romaji": "dareka",
    "fr": "quelqu\\",
    "kanji": "誰",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "だれかのつかいかたをれんしゅうしています。",
        "romaji": "だれか no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser だれか."
      }
    ]
  },
  {
    "kana": "だんだん",
    "romaji": "dandan",
    "fr": "peu à peu",
    "kanji": "",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "だんだんのつかいかたをれんしゅうしています。",
        "romaji": "だんだん no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser だんだん."
      }
    ]
  },
  {
    "kana": "ちいさな",
    "romaji": "chiisana",
    "fr": "peu",
    "kanji": "小さな",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "ちいさなのつかいかたをれんしゅうしています。",
        "romaji": "ちいさな no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser ちいさな."
      }
    ]
  },
  {
    "kana": "つかう",
    "romaji": "tsukau",
    "fr": "utiliser",
    "kanji": "使う",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "つかうのつかいかたをれんしゅうしています。",
        "romaji": "つかう no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser つかう."
      }
    ]
  },
  {
    "kana": "つくる",
    "romaji": "tsukuru",
    "fr": "fabriquer",
    "kanji": "作る",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "つくるのつかいかたをれんしゅうしています。",
        "romaji": "つくる no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser つくる."
      }
    ]
  },
  {
    "kana": "つとめる",
    "romaji": "tsutomeru",
    "fr": "travailler pour quelqu\\",
    "kanji": "勤める",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "つとめるのつかいかたをれんしゅうしています。",
        "romaji": "つとめる no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser つとめる."
      }
    ]
  },
  {
    "kana": "てがみ",
    "romaji": "tegami",
    "fr": "lettre",
    "kanji": "手紙",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "てがみのつかいかたをれんしゅうしています。",
        "romaji": "てがみ no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser てがみ."
      }
    ]
  },
  {
    "kana": "できる",
    "romaji": "dekiru",
    "fr": "pouvoir",
    "kanji": "",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "にほんごをすこしはなすことができます。",
        "romaji": "Nihongo o sukoshi hanasu koto ga dekimasu.",
        "fr": "Je peux parler un peu japonais."
      }
    ]
  },
  {
    "kana": "テレビ",
    "romaji": "テレビ",
    "fr": "télévision",
    "kanji": "",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "テレビのつかいかたをれんしゅうしています。",
        "romaji": "テレビ no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser テレビ."
      }
    ]
  },
  {
    "kana": "トイレ",
    "romaji": "トイレ",
    "fr": "toilettes",
    "kanji": "",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "トイレのつかいかたをれんしゅうしています。",
        "romaji": "トイレ no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser トイレ."
      }
    ]
  },
  {
    "kana": "どう",
    "romaji": "dou",
    "fr": "comment, de quelle manière",
    "kanji": "",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "このさけはどうですか？おいしいですか？",
        "romaji": "Kono sake wa dō desu ka? Oishii desu ka?",
        "fr": "Comment trouvez-vous ce saké ? C'est bon ?"
      }
    ]
  },
  {
    "kana": "どうして",
    "romaji": "doushite",
    "fr": "pour quelle raison",
    "kanji": "",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "どうしてにほんがすきですか？",
        "romaji": "Dōshite Nihon ga suki desu ka?",
        "fr": "Pourquoi aimez-vous le Japon ?"
      }
    ]
  },
  {
    "kana": "どうぞ",
    "romaji": "douzo",
    "fr": "s\\",
    "kanji": "",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "どうぞ、おちゃをのんでください。",
        "romaji": "Dōzo, ocha o nonde kudasai.",
        "fr": "Je vous en prie, buvez du thé."
      }
    ]
  },
  {
    "kana": "とても",
    "romaji": "totemo",
    "fr": "très",
    "kanji": "",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "にほんはとてもすばらしいです！",
        "romaji": "Nihon wa totemo subarashii desu!",
        "fr": "Le Japon est vraiment merveilleux !"
      }
    ]
  },
  {
    "kana": "どなた",
    "romaji": "donata",
    "fr": "qui",
    "kanji": "",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "どなたのつかいかたをれんしゅうしています。",
        "romaji": "どなた no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser どなた."
      }
    ]
  },
  {
    "kana": "どの",
    "romaji": "dono",
    "fr": "qui",
    "kanji": "",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "どののつかいかたをれんしゅうしています。",
        "romaji": "どの no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser どの."
      }
    ]
  },
  {
    "kana": "なくす",
    "romaji": "nakusu",
    "fr": "perdre quelque chose",
    "kanji": "無くす",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "なくすのつかいかたをれんしゅうしています。",
        "romaji": "なくす no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser なくす."
      }
    ]
  },
  {
    "kana": "なぜ",
    "romaji": "naze",
    "fr": "pourquoi",
    "kanji": "",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "なぜにほんのでんしゃはじかんどおりなのですか？",
        "romaji": "Naze Nihon no densha wa jikan-dōri na no desu ka?",
        "fr": "Pourquoi les trains japonais sont-ils à l'heure ?"
      }
    ]
  },
  {
    "kana": "など",
    "romaji": "nado",
    "fr": "etc.",
    "kanji": "",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "などのつかいかたをれんしゅうしています。",
        "romaji": "など no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser など."
      }
    ]
  },
  {
    "kana": "なん/なに",
    "romaji": "nan/nani",
    "fr": "que, quoi",
    "kanji": "何",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "なん/なにのつかいかたをれんしゅうしています。",
        "romaji": "なん/なに no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser なん/なに."
      }
    ]
  },
  {
    "kana": "ニュース",
    "romaji": "ニュス",
    "fr": "nouvelles, informations",
    "kanji": "",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "ニュースのつかいかたをれんしゅうしています。",
        "romaji": "ニュース no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser ニュース."
      }
    ]
  },
  {
    "kana": "はい",
    "romaji": "hai",
    "fr": "oui",
    "kanji": "",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "はいのつかいかたをれんしゅうしています。",
        "romaji": "はい no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser はい."
      }
    ]
  },
  {
    "kana": "はいざら",
    "romaji": "haizara",
    "fr": "cendrier",
    "kanji": "灰皿",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "はいざらのつかいかたをれんしゅうしています。",
        "romaji": "はいざら no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser はいざら."
      }
    ]
  },
  {
    "kana": "はじまる",
    "romaji": "hajimaru",
    "fr": "commencer",
    "kanji": "始まる",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "はじまるのつかいかたをれんしゅうしています。",
        "romaji": "はじまる no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser はじまる."
      }
    ]
  },
  {
    "kana": "はしる",
    "romaji": "hashiru",
    "fr": "pour exécuter",
    "kanji": "走る",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "はしるのつかいかたをれんしゅうしています。",
        "romaji": "はしる no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser はしる."
      }
    ]
  },
  {
    "kana": "はたらく",
    "romaji": "hataraku",
    "fr": "travailler",
    "kanji": "働く",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "はたらくのつかいかたをれんしゅうしています。",
        "romaji": "はたらく no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser はたらく."
      }
    ]
  },
  {
    "kana": "はん",
    "romaji": "han",
    "fr": "moitié",
    "kanji": "半",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "はんのつかいかたをれんしゅうしています。",
        "romaji": "はん no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser はん."
      }
    ]
  },
  {
    "kana": "ハンカチ",
    "romaji": "ハンカチ",
    "fr": "mouchoir",
    "kanji": "",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "ハンカチのつかいかたをれんしゅうしています。",
        "romaji": "ハンカチ no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser ハンカチ."
      }
    ]
  },
  {
    "kana": "ラジカセ / ラジオ",
    "romaji": "カセラッジカトセ / ラジオカセット",
    "fr": "radio-cassette",
    "kanji": "",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "ラジカセ / ラジオのつかいかたをれんしゅうしています。",
        "romaji": "ラジカセ / ラジオ no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser ラジカセ / ラジオ."
      }
    ]
  },
  {
    "kana": "より、ほう",
    "romaji": "yori、hou",
    "fr": "comparaison",
    "kanji": "",
    "theme": "mots_outils",
    "theme_label": "Mots-outils",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "より、ほうのつかいかたをれんしゅうしています。",
        "romaji": "より、ほう no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser より、ほう."
      }
    ]
  },
  {
    "kana": "きゅう / く",
    "romaji": "kyuu / ku",
    "fr": "neuf",
    "kanji": "九",
    "theme": "nombres",
    "theme_label": "Nombres",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "きゅうじにホテルをでます。",
        "romaji": "Kyū-ji ni hoteru o demasu.",
        "fr": "Je quitte l'hôtel à 9h."
      }
    ]
  },
  {
    "kana": "し / よん",
    "romaji": "shi / yon",
    "fr": "quatre",
    "kanji": "四",
    "theme": "nombres",
    "theme_label": "Nombres",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "よにんでたびをしています。",
        "romaji": "Yo-nin de tabi o shite imasu.",
        "fr": "Nous voyageons à quatre."
      }
    ]
  },
  {
    "kana": "しち / なな",
    "romaji": "shichi / nana",
    "fr": "sept",
    "kanji": "七",
    "theme": "nombres",
    "theme_label": "Nombres",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "しちがつはにほんのなつまつりのきせつです。",
        "romaji": "Shichi-gatsu wa Nihon no natsu matsuri no kisetsu desu.",
        "fr": "Juillet est la saison des festivals estivaux japonais."
      }
    ]
  },
  {
    "kana": "じゅう とお",
    "romaji": "juu too",
    "fr": "dix",
    "kanji": "十",
    "theme": "nombres",
    "theme_label": "Nombres",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "じゅうにんのグループでたびしています。",
        "romaji": "Jū-nin no gurūpu de tabi shite imasu.",
        "fr": "Je voyage en groupe de dix personnes."
      }
    ]
  },
  {
    "kana": "まいげつ/まいつき",
    "romaji": "maigetsu/maitsuki",
    "fr": "chaque mois",
    "kanji": "毎月",
    "theme": "temps",
    "theme_label": "Temps",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "まいつきにほんごのざっしをかいます。",
        "romaji": "Maitsuki nihongo no zasshi o kaimasu.",
        "fr": "Chaque mois j'achète un magazine de japonais."
      }
    ]
  },
  {
    "kana": "まいねん/まいとし",
    "romaji": "mainen/maitoshi",
    "fr": "chaque année",
    "kanji": "毎年",
    "theme": "temps",
    "theme_label": "Temps",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "まいとしさくらをみにいきたいです。",
        "romaji": "Maitoshi sakura o mi ni ikitai desu.",
        "fr": "Chaque année je veux aller voir les cerisiers."
      }
    ]
  },
  {
    "kana": "おくさん",
    "romaji": "okusan",
    "fr": "épouse",
    "kanji": "奥さん",
    "theme": "famille",
    "theme_label": "Famille",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "おくさんといっしょにたびをされていますか？",
        "romaji": "Okusan to issho ni tabi o sarete imasu ka?",
        "fr": "Voyagez-vous avec votre épouse ?"
      }
    ]
  },
  {
    "kana": "んおばさん",
    "romaji": "obasan",
    "fr": "tante",
    "kanji": "伯母さん/叔母さ",
    "theme": "famille",
    "theme_label": "Famille",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "おばさんにおみやげをかいました。",
        "romaji": "Obasan ni omiyage o kaimashita.",
        "fr": "J'ai acheté un souvenir pour ma tante."
      }
    ]
  },
  {
    "kana": "おんな",
    "romaji": "onna",
    "fr": "femme",
    "kanji": "女",
    "theme": "famille",
    "theme_label": "Famille",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "おんなのひとがきれいなきものをきています。",
        "romaji": "Onna no hito ga kirei na kimono o kite imasu.",
        "fr": "La femme porte un beau kimono."
      }
    ]
  },
  {
    "kana": "おんなのこ",
    "romaji": "onnanoko",
    "fr": "fille",
    "kanji": "女の子",
    "theme": "famille",
    "theme_label": "Famille",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "おんなのこがさくらのしゃしんをとっています。",
        "romaji": "Onna no ko ga sakura no shashin o totte imasu.",
        "fr": "La fillette prend des photos des cerisiers."
      }
    ]
  },
  {
    "kana": "きょうだい",
    "romaji": "kyoudai",
    "fr": "frères et soeurs",
    "kanji": "兄弟",
    "theme": "famille",
    "theme_label": "Famille",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "きょうだいはいますか？わたしはふたりいます。",
        "romaji": "Kyōdai wa imasu ka? Watashi wa futari imasu.",
        "fr": "Avez-vous des frères et sœurs ? J'en ai deux."
      }
    ]
  },
  {
    "kana": "けっこん",
    "romaji": "kekon",
    "fr": "mariage",
    "kanji": "結婚",
    "theme": "famille",
    "theme_label": "Famille",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "けっこんのつかいかたをれんしゅうしています。",
        "romaji": "けっこん no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser けっこん."
      }
    ]
  },
  {
    "kana": "りょうしん",
    "romaji": "ryoushin",
    "fr": "parents",
    "kanji": "両親",
    "theme": "famille",
    "theme_label": "Famille",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "りょうしんのつかいかたをれんしゅうしています。",
        "romaji": "りょうしん no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser りょうしん."
      }
    ]
  },
  {
    "kana": "あし",
    "romaji": "ashi",
    "fr": "pied, jambe",
    "kanji": "足",
    "theme": "sante",
    "theme_label": "Santé",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "あしがいたいです。たくさんあるきました。",
        "romaji": "Ashi ga itai desu. Takusan arukimashita.",
        "fr": "J'ai mal aux pieds. J'ai beaucoup marché."
      }
    ]
  },
  {
    "kana": "いしゃ",
    "romaji": "isha",
    "fr": "docteur",
    "kanji": "医者",
    "theme": "sante",
    "theme_label": "Santé",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "いしゃにいかなければなりません。かぜをひきました。",
        "romaji": "Isha ni ikanakereba narimasen. Kaze o hikimashita.",
        "fr": "Je dois aller chez le médecin. J'ai attrapé un rhume."
      }
    ]
  },
  {
    "kana": "からだ",
    "romaji": "karada",
    "fr": "corps",
    "kanji": "体",
    "theme": "sante",
    "theme_label": "Santé",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "からだをたいせつにしてください。むりをしないで。",
        "romaji": "Karada o taisetsu ni shite kudasai. Muri o shinai de.",
        "fr": "Prenez soin de votre corps. Ne vous surmenez pas."
      }
    ]
  },
  {
    "kana": "くち",
    "romaji": "kuchi",
    "fr": "bouche",
    "kanji": "口",
    "theme": "sante",
    "theme_label": "Santé",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "くちのなかがかわいています。みずをのみます。",
        "romaji": "Kuchi no naka ga kawaite imasu. Mizu o nomimasu.",
        "fr": "J'ai la bouche sèche. Je vais boire de l'eau."
      }
    ]
  },
  {
    "kana": "げんき",
    "romaji": "genki",
    "fr": "santé",
    "kanji": "元気",
    "theme": "sante",
    "theme_label": "Santé",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "おげんきですか？はい、おかげさまで。",
        "romaji": "Ogenki desu ka? Hai, okagesama de.",
        "fr": "Comment allez-vous ? Bien merci."
      }
    ]
  },
  {
    "kana": "せんせい",
    "romaji": "sensei",
    "fr": "enseignant, médecin",
    "kanji": "先生",
    "theme": "sante",
    "theme_label": "Santé",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "せんせいのつかいかたをれんしゅうしています。",
        "romaji": "せんせい no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser せんせい."
      }
    ]
  },
  {
    "kana": "みがく",
    "romaji": "migaku",
    "fr": "se brosser les dents, polir",
    "kanji": "磨く",
    "theme": "sante",
    "theme_label": "Santé",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "みがくのつかいかたをれんしゅうしています。",
        "romaji": "みがく no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser みがく."
      }
    ]
  },
  {
    "kana": "みみ",
    "romaji": "mimi",
    "fr": "oreille",
    "kanji": "耳",
    "theme": "sante",
    "theme_label": "Santé",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "みみのつかいかたをれんしゅうしています。",
        "romaji": "みみ no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser みみ."
      }
    ]
  },
  {
    "kana": "レコード",
    "romaji": "レコド",
    "fr": "dosqie",
    "kanji": "",
    "theme": "sante",
    "theme_label": "Santé",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "レコードのつかいかたをれんしゅうしています。",
        "romaji": "レコード no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser レコード."
      }
    ]
  },
  {
    "kana": "しょうゆ",
    "romaji": "shouyu",
    "fr": "sauce soja",
    "kanji": "",
    "theme": "nourriture",
    "theme_label": "Nourriture",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "さしみにはしょうゆをつけます。おいしい！",
        "romaji": "Sashimi ni wa shōyu o tsukemasu. Oishii!",
        "fr": "On trempe le sashimi dans la sauce soja. Délicieux !"
      }
    ]
  },
  {
    "kana": "だいどころ",
    "romaji": "daidokoro",
    "fr": "cuisine",
    "kanji": "台所",
    "theme": "nourriture",
    "theme_label": "Nourriture",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "りょかんのだいどころからいいにおいがします。",
        "romaji": "Ryokan no daidokoro kara ii nioi ga shimasu.",
        "fr": "Une bonne odeur vient de la cuisine du ryokan."
      }
    ]
  },
  {
    "kana": "たべる",
    "romaji": "taberu",
    "fr": "manger",
    "kanji": "食べる",
    "theme": "nourriture",
    "theme_label": "Nourriture",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "いっしょにたべましょう！いただきます！",
        "romaji": "Issho ni tabemasho! Itadakimasu!",
        "fr": "Mangeons ensemble ! Bon appétit !"
      }
    ]
  },
  {
    "kana": "ちゃわん",
    "romaji": "chawan",
    "fr": "bol à riz",
    "kanji": "",
    "theme": "nourriture",
    "theme_label": "Nourriture",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "このちゃわんはとてもきれいなもようです。",
        "romaji": "Kono chawan wa totemo kirei na moyō desu.",
        "fr": "Ce bol a un très beau motif."
      }
    ]
  },
  {
    "kana": "やおや",
    "romaji": "yaoya",
    "fr": "marchand de légumes",
    "kanji": "八百屋",
    "theme": "nourriture",
    "theme_label": "Nourriture",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "やおやでしんせんなやさいをかいました。",
        "romaji": "Yaoya de shinsen na yasai o kaimashita.",
        "fr": "J'ai acheté des légumes frais chez le marchand de légumes."
      }
    ]
  },
  {
    "kana": "ゆうはん",
    "romaji": "yuuhan",
    "fr": "dîner",
    "kanji": "夕飯",
    "theme": "nourriture",
    "theme_label": "Nourriture",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "ゆうはんのつかいかたをれんしゅうしています。",
        "romaji": "ゆうはん no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser ゆうはん."
      }
    ]
  },
  {
    "kana": "りょうり",
    "romaji": "ryouri",
    "fr": "cuisine",
    "kanji": "料理",
    "theme": "nourriture",
    "theme_label": "Nourriture",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "にほんりょうりがだいすきです！",
        "romaji": "Nihon ryōri ga daisuki desu!",
        "fr": "J'adore la cuisine japonaise !"
      }
    ]
  },
  {
    "kana": "こうちゃ",
    "romaji": "koucha",
    "fr": "thé noir",
    "kanji": "紅茶",
    "theme": "boissons",
    "theme_label": "Boissons",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "こうちゃよりもおちゃのほうがすきです。",
        "romaji": "Kōcha yori mo ocha no hō ga suki desu.",
        "fr": "Je préfère le thé japonais au thé noir."
      }
    ]
  },
  {
    "kana": "コート",
    "romaji": "コト",
    "fr": "manteau, court de tennis",
    "kanji": "",
    "theme": "boissons",
    "theme_label": "Boissons",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "そとがさむいのでコートをきてください。",
        "romaji": "Soto ga samui node kōto o kite kudasai.",
        "fr": "Il fait froid dehors, mettez un manteau."
      }
    ]
  },
  {
    "kana": "たくさん",
    "romaji": "takusan",
    "fr": "beaucoup",
    "kanji": "",
    "theme": "boissons",
    "theme_label": "Boissons",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "にほんでたくさんのおいしいものをたべました！",
        "romaji": "Nihon de takusan no oishii mono o tabemashita!",
        "fr": "J'ai mangé plein de bonnes choses au Japon !"
      }
    ]
  },
  {
    "kana": "とり",
    "romaji": "tori",
    "fr": "oiseau",
    "kanji": "鳥",
    "theme": "boissons",
    "theme_label": "Boissons",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "このとりはなんというとりですか？",
        "romaji": "Kono tori wa nan to iu tori desu ka?",
        "fr": "Quel est cet oiseau ?"
      }
    ]
  },
  {
    "kana": "ナイフ",
    "romaji": "ナイフ",
    "fr": "couteau",
    "kanji": "",
    "theme": "boissons",
    "theme_label": "Boissons",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "ナイフとフォークをください。はしがつかえません。",
        "romaji": "Naifu to fōku o kudasai. Hashi ga tsukaemasen.",
        "fr": "Un couteau et une fourchette s'il vous plaît. Je ne sais pas utiliser les baguettes."
      }
    ]
  },
  {
    "kana": "ぼうし",
    "romaji": "boushi",
    "fr": "chapeau",
    "kanji": "帽子",
    "theme": "boissons",
    "theme_label": "Boissons",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "ぼうしのつかいかたをれんしゅうしています。",
        "romaji": "ぼうし no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser ぼうし."
      }
    ]
  },
  {
    "kana": "また",
    "romaji": "mata",
    "fr": "à nouveau",
    "kanji": "",
    "theme": "boissons",
    "theme_label": "Boissons",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "またのつかいかたをれんしゅうしています。",
        "romaji": "また no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser また."
      }
    ]
  },
  {
    "kana": "おさら",
    "romaji": "osara",
    "fr": "assiette",
    "kanji": "お皿",
    "theme": "restaurant",
    "theme_label": "Restaurant",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "おさらをかしてください。おかずをわけたいです。",
        "romaji": "Osara o kashite kudasai. Okazu o waketai desu.",
        "fr": "Pouvez-vous me donner une assiette ? Je veux partager."
      }
    ]
  },
  {
    "kana": "カップ",
    "romaji": "カップ",
    "fr": "tasse",
    "kanji": "",
    "theme": "restaurant",
    "theme_label": "Restaurant",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "コーヒーカップをかしてください。",
        "romaji": "Kōhī kappu o kashite kudasai.",
        "fr": "Pourriez-vous m'apporter une tasse à café ?"
      }
    ]
  },
  {
    "kana": "レストラン",
    "romaji": "レストラン",
    "fr": "restaurant",
    "kanji": "",
    "theme": "restaurant",
    "theme_label": "Restaurant",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "このレストランのすしはさいこうです！",
        "romaji": "Kono resutoran no sushi wa saikō desu!",
        "fr": "Les sushis de ce restaurant sont fantastiques !"
      }
    ]
  },
  {
    "kana": "いりぐち",
    "romaji": "iriguchi",
    "fr": "entrée",
    "kanji": "入口",
    "theme": "hotel",
    "theme_label": "Hôtel",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "いりぐちはどこですか？みつかりません。",
        "romaji": "Iriguchi wa doko desu ka? Mitsukairimasen.",
        "fr": "Où est l'entrée ? Je ne la trouve pas."
      }
    ]
  },
  {
    "kana": "おてあらい",
    "romaji": "otearai",
    "fr": "salle de bains",
    "kanji": "お手洗い",
    "theme": "hotel",
    "theme_label": "Hôtel",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "おてあらいはどこですか？",
        "romaji": "Otearai wa doko desu ka?",
        "fr": "Où sont les toilettes ?"
      }
    ]
  },
  {
    "kana": "おふろ",
    "romaji": "ofuro",
    "fr": "bain",
    "kanji": "お風呂",
    "theme": "hotel",
    "theme_label": "Hôtel",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "おふろはなんじにはいれますか？",
        "romaji": "Ofuro wa nan-ji ni hairemasu ka?",
        "fr": "À quelle heure peut-on prendre le bain ?"
      }
    ]
  },
  {
    "kana": "かいだん",
    "romaji": "kaidan",
    "fr": "escaliers",
    "kanji": "階段",
    "theme": "hotel",
    "theme_label": "Hôtel",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "エレベーターがこんでいます。かいだんをつかいます。",
        "romaji": "Erebētā ga konde imasu. Kaidan o tsukaimasu.",
        "fr": "L'ascenseur est occupé. Je vais utiliser les escaliers."
      }
    ]
  },
  {
    "kana": "げんかん",
    "romaji": "genkan",
    "fr": "hall d\\",
    "kanji": "玄関",
    "theme": "hotel",
    "theme_label": "Hôtel",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "げんかんのつかいかたをれんしゅうしています。",
        "romaji": "げんかん no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser げんかん."
      }
    ]
  },
  {
    "kana": "でぐち",
    "romaji": "deguchi",
    "fr": "sortie",
    "kanji": "出口",
    "theme": "hotel",
    "theme_label": "Hôtel",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "でぐちはどこですか？",
        "romaji": "Deguchi wa doko desu ka?",
        "fr": "Où est la sortie ?"
      }
    ]
  },
  {
    "kana": "と",
    "romaji": "to",
    "fr": "porte de style japonais",
    "kanji": "戸",
    "theme": "hotel",
    "theme_label": "Hôtel",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "とのつかいかたをれんしゅうしています。",
        "romaji": "と no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser と."
      }
    ]
  },
  {
    "kana": "ドア",
    "romaji": "ドア",
    "fr": "porte de style occidental",
    "kanji": "",
    "theme": "hotel",
    "theme_label": "Hôtel",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "ドアをしめてください。さむいです。",
        "romaji": "Doa o shimete kudasai. Samui desu.",
        "fr": "Fermez la porte s'il vous plaît. Il fait froid."
      }
    ]
  },
  {
    "kana": "にもつ",
    "romaji": "nimotsu",
    "fr": "bagage",
    "kanji": "荷物",
    "theme": "hotel",
    "theme_label": "Hôtel",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "にもつのつかいかたをれんしゅうしています。",
        "romaji": "にもつ no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser にもつ."
      }
    ]
  },
  {
    "kana": "ホテル",
    "romaji": "ホテル",
    "fr": "hôtel",
    "kanji": "",
    "theme": "hotel",
    "theme_label": "Hôtel",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "ホテルのつかいかたをれんしゅうしています。",
        "romaji": "ホテル no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser ホテル."
      }
    ]
  },
  {
    "kana": "もん",
    "romaji": "mon",
    "fr": "porte",
    "kanji": "門",
    "theme": "hotel",
    "theme_label": "Hôtel",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "もんのつかいかたをれんしゅうしています。",
        "romaji": "もん no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser もん."
      }
    ]
  },
  {
    "kana": "きっぷ",
    "romaji": "kipu",
    "fr": "billet",
    "kanji": "切符",
    "theme": "transport",
    "theme_label": "Transport",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "しんかんせんのきっぷをかいました。たかかった！",
        "romaji": "Shinkansen no kippu o kaimashita. Takakatta!",
        "fr": "J'ai acheté un billet Shinkansen. C'était cher !"
      }
    ]
  },
  {
    "kana": "たばこ",
    "romaji": "tabako",
    "fr": "tabac, cigarettes",
    "kanji": "",
    "theme": "transport",
    "theme_label": "Transport",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "このあたりはきんえんです。たばこはすえません。",
        "romaji": "Kono atari wa kin'en desu. Tabako wa suemasen.",
        "fr": "Cette zone est non-fumeur. On ne peut pas fumer."
      }
    ]
  },
  {
    "kana": "ならぶ",
    "romaji": "narabu",
    "fr": "aligner",
    "kanji": "並ぶ",
    "theme": "transport",
    "theme_label": "Transport",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "えきのホームでならんでまっています。",
        "romaji": "Eki no hōmu de narande matte imasu.",
        "fr": "Je fais la queue en attendant sur le quai."
      }
    ]
  },
  {
    "kana": "ならべる",
    "romaji": "naraberu",
    "fr": "aligner",
    "kanji": "並べる",
    "theme": "transport",
    "theme_label": "Transport",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "にもつをきれいにならべてください。",
        "romaji": "Nimotsu o kirei ni narabete kudasai.",
        "fr": "Rangez les bagages soigneusement."
      }
    ]
  },
  {
    "kana": "りょこう",
    "romaji": "ryokou",
    "fr": "voyage",
    "kanji": "旅行",
    "theme": "transport",
    "theme_label": "Transport",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "にほんのりょこうはさいこうでした！またいきます！",
        "romaji": "Nihon no ryokō wa saikō deshita! Mata ikimasu!",
        "fr": "Le voyage au Japon était fantastique ! J'y retourne !"
      }
    ]
  },
  {
    "kana": "うわぎ",
    "romaji": "uwagi",
    "fr": "veste",
    "kanji": "上着",
    "theme": "orientation",
    "theme_label": "Orientation",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "このうわぎはにほんのデザインでおしゃれです。",
        "romaji": "Kono uwagi wa Nihon no dezain de oshare desu.",
        "fr": "Cette veste est de design japonais, elle est élégante."
      }
    ]
  },
  {
    "kana": "おまわりさん",
    "romaji": "omawarisan",
    "fr": "policier (familier)",
    "kanji": "",
    "theme": "orientation",
    "theme_label": "Orientation",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "おまわりさんにみちをおしえてもらいました。",
        "romaji": "Omawarisan ni michi o oshiete moraimashita.",
        "fr": "Un policier m'a indiqué le chemin."
      }
    ]
  },
  {
    "kana": "けいかん",
    "romaji": "keikan",
    "fr": "policier",
    "kanji": "警官",
    "theme": "orientation",
    "theme_label": "Orientation",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "けいかんがやさしくたすけてくれました。",
        "romaji": "Keikan ga yasashiku tasukete kuremashita.",
        "fr": "L'officier de police m'a aidé gentiment."
      }
    ]
  },
  {
    "kana": "しつもん",
    "romaji": "shitsumon",
    "fr": "question",
    "kanji": "質問",
    "theme": "orientation",
    "theme_label": "Orientation",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "しつもんがあります。このみちはどこへいきますか？",
        "romaji": "Shitsumon ga arimasu. Kono michi wa doko e ikimasu ka?",
        "fr": "J'ai une question. Où mène ce chemin ?"
      }
    ]
  },
  {
    "kana": "ちず",
    "romaji": "chizu",
    "fr": "carte",
    "kanji": "地図",
    "theme": "orientation",
    "theme_label": "Orientation",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "このまちのちずはありますか？",
        "romaji": "Kono machi no chizu wa arimasu ka?",
        "fr": "Avez-vous une carte de cette ville ?"
      }
    ]
  },
  {
    "kana": "テスト",
    "romaji": "テスト",
    "fr": "test",
    "kanji": "",
    "theme": "orientation",
    "theme_label": "Orientation",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "テストのつかいかたをれんしゅうしています。",
        "romaji": "テスト no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser テスト."
      }
    ]
  },
  {
    "kana": "でんき",
    "romaji": "denki",
    "fr": "électricité",
    "kanji": "電気",
    "theme": "orientation",
    "theme_label": "Orientation",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "でんきのつかいかたをれんしゅうしています。",
        "romaji": "でんき no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser でんき."
      }
    ]
  },
  {
    "kana": "はがき",
    "romaji": "hagaki",
    "fr": "carte postale",
    "kanji": "葉書",
    "theme": "orientation",
    "theme_label": "Orientation",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "はがきのつかいかたをれんしゅうしています。",
        "romaji": "はがき no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser はがき."
      }
    ]
  },
  {
    "kana": "ほか",
    "romaji": "hoka",
    "fr": "autre, reste",
    "kanji": "",
    "theme": "orientation",
    "theme_label": "Orientation",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "ほかのつかいかたをれんしゅうしています。",
        "romaji": "ほか no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser ほか."
      }
    ]
  },
  {
    "kana": "わたる",
    "romaji": "wataru",
    "fr": "traverser",
    "kanji": "渡る",
    "theme": "orientation",
    "theme_label": "Orientation",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "わたるのつかいかたをれんしゅうしています。",
        "romaji": "わたる no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser わたる."
      }
    ]
  },
  {
    "kana": "がいこく",
    "romaji": "gaikoku",
    "fr": "pays étranger",
    "kanji": "外国",
    "theme": "lieux",
    "theme_label": "Lieux",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "がいこくからのかんこうきゃくがふえています。",
        "romaji": "Gaikoku kara no kankōkyaku ga fuete imasu.",
        "fr": "Le nombre de touristes étrangers augmente."
      }
    ]
  },
  {
    "kana": "ぎんこう",
    "romaji": "ginkou",
    "fr": "banque",
    "kanji": "銀行",
    "theme": "lieux",
    "theme_label": "Lieux",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "ぎんこうでえんにりょうがえしました。",
        "romaji": "Ginkō de en ni ryōgae shimashita.",
        "fr": "J'ai changé de l'argent en yens à la banque."
      }
    ]
  },
  {
    "kana": "しまる",
    "romaji": "shimaru",
    "fr": "fermer",
    "kanji": "閉まる",
    "theme": "lieux",
    "theme_label": "Lieux",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "このみせはなんじにしまりますか？",
        "romaji": "Kono mise wa nan-ji ni shima rimasu ka?",
        "fr": "À quelle heure ferme ce magasin ?"
      }
    ]
  },
  {
    "kana": "すう",
    "romaji": "suu",
    "fr": "fumer, sucer",
    "kanji": "吸う",
    "theme": "lieux",
    "theme_label": "Lieux",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "おいしいにおいをすいました。",
        "romaji": "Oishii nioi o suimashita.",
        "fr": "J'ai inspiré une bonne odeur."
      }
    ]
  },
  {
    "kana": "すき",
    "romaji": "suki",
    "fr": "aimer",
    "kanji": "好き",
    "theme": "lieux",
    "theme_label": "Lieux",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "さくらはすきなはなです。",
        "romaji": "Sakura wa suki na hana desu.",
        "fr": "Le cerisier est ma fleur préférée."
      }
    ]
  },
  {
    "kana": "だいがく",
    "romaji": "daigaku",
    "fr": "université",
    "kanji": "大学",
    "theme": "lieux",
    "theme_label": "Lieux",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "だいがくのつかいかたをれんしゅうしています。",
        "romaji": "だいがく no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser だいがく."
      }
    ]
  },
  {
    "kana": "たいしかん",
    "romaji": "taishikan",
    "fr": "ambassade",
    "kanji": "大使館",
    "theme": "lieux",
    "theme_label": "Lieux",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "たいしかんのつかいかたをれんしゅうしています。",
        "romaji": "たいしかん no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser たいしかん."
      }
    ]
  },
  {
    "kana": "たてもの",
    "romaji": "tatemono",
    "fr": "bâtiment",
    "kanji": "建物",
    "theme": "lieux",
    "theme_label": "Lieux",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "たてもののつかいかたをれんしゅうしています。",
        "romaji": "たてもの no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser たてもの."
      }
    ]
  },
  {
    "kana": "どうも",
    "romaji": "doumo",
    "fr": "merci",
    "kanji": "",
    "theme": "lieux",
    "theme_label": "Lieux",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "どうもありがとうございます！",
        "romaji": "Dōmo arigatō gozaimasu!",
        "fr": "Merci beaucoup !"
      }
    ]
  },
  {
    "kana": "ところ",
    "romaji": "tokoro",
    "fr": "lieu",
    "kanji": "所",
    "theme": "lieux",
    "theme_label": "Lieux",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "ところのつかいかたをれんしゅうしています。",
        "romaji": "ところ no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser ところ."
      }
    ]
  },
  {
    "kana": "みせ",
    "romaji": "mise",
    "fr": "magasin",
    "kanji": "店",
    "theme": "lieux",
    "theme_label": "Lieux",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "みせのつかいかたをれんしゅうしています。",
        "romaji": "みせ no tsukaikata o renshū shite imasu.",
        "fr": "Je m'entraîne à utiliser みせ."
      }
    ]
  },
  {
    "kana": "あびる",
    "romaji": "abiru",
    "fr": "se doucher, se baigner",
    "kanji": "",
    "theme": "argent",
    "theme_label": "Argent",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "おふろのあとにシャワーをあびました。",
        "romaji": "Ofuro no ato ni shawā o abimashita.",
        "fr": "Après le bain je me suis douché."
      }
    ]
  },
  {
    "kana": "あるく",
    "romaji": "aruku",
    "fr": "marcher",
    "kanji": "歩く",
    "theme": "argent",
    "theme_label": "Argent",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "きょうとはあるくのがいちばんです。たくさんてらがあります。",
        "romaji": "Kyōto wa aruku no ga ichiban desu. Takusan tera ga arimasu.",
        "fr": "À Kyoto la meilleure façon c'est de marcher. Il y a beaucoup de temples."
      }
    ]
  },
  {
    "kana": "うる",
    "romaji": "uru",
    "fr": "vendre",
    "kanji": "売る",
    "theme": "argent",
    "theme_label": "Argent",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "このみせではおみやげをうっています。",
        "romaji": "Kono mise de wa omiyage o utte imasu.",
        "fr": "Ce magasin vend des souvenirs."
      }
    ]
  },
  {
    "kana": "かう",
    "romaji": "kau",
    "fr": "acheter",
    "kanji": "買う",
    "theme": "argent",
    "theme_label": "Argent",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "このさけをかいたいです。おすすめですか？",
        "romaji": "Kono sake o kaitai desu. Osusume desu ka?",
        "fr": "Je veux acheter ce saké. C'est recommandé ?"
      }
    ]
  },
  {
    "kana": "せっけん",
    "romaji": "seken",
    "fr": "économie",
    "kanji": "",
    "theme": "argent",
    "theme_label": "Argent",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "りょかんにせっけんはありますか？",
        "romaji": "Ryokan ni sekken wa arimasu ka?",
        "fr": "Y a-t-il du savon au ryokan ?"
      }
    ]
  },
  {
    "kana": "じびき",
    "romaji": "jibiki",
    "fr": "dictionnaire",
    "kanji": "字引",
    "theme": "quotidien",
    "theme_label": "Quotidien",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "じびきはむかしのじしょです。",
        "romaji": "Jibiki wa mukashi no jisho desu.",
        "fr": "Le jibiki est un ancien type de dictionnaire."
      }
    ]
  },
  {
    "kana": "じゃ/じゃあ",
    "romaji": "ja/jaa",
    "fr": "eh bien...",
    "kanji": "",
    "theme": "quotidien",
    "theme_label": "Quotidien",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "じゃあ、またあした！きをつけて。",
        "romaji": "Jā, mata ashita! Ki o tsukete.",
        "fr": "Alors, à demain ! Prenez soin de vous."
      }
    ]
  },
  {
    "kana": "テープレコーダー",
    "romaji": "テプレコダ",
    "fr": "magnétophone",
    "kanji": "",
    "theme": "quotidien",
    "theme_label": "Quotidien",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "むかしはテープレコーダーでにほんごをべんきょうしました。",
        "romaji": "Mukashi wa tēpurekōdā de nihongo o benkyō shimashita.",
        "fr": "Autrefois j'apprenais le japonais avec un magnétophone."
      }
    ]
  },
  {
    "kana": "ひとつ",
    "romaji": "hitotsu",
    "fr": "un",
    "kanji": "一つ",
    "theme": "quotidien",
    "theme_label": "Quotidien",
    "level": 1,
    "pack": "perso",
    "source": "kanpai_n5",
    "source_label": "JLPT N5 Kanpai",
    "examples": [
      {
        "jp": "ひとつください！",
        "romaji": "Hitotsu kudasai!",
        "fr": "Un s'il vous plaît !"
      }
    ]
  },

];
if (typeof module !== "undefined") module.exports = KANPAI_N5_ENTRIES;
