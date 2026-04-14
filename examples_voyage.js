const EXAMPLES_VOYAGE = {
  "おはようございます": [
    {"jp":"おはようございます！きょうはいいてんきですね。","romaji":"Ohayō gozaimasu! Kyō wa ii tenki desu ne.","fr":"Bonjour ! Il fait beau aujourd'hui, n'est-ce pas ?","note":"Formule du matin, jusqu'à environ 11h."},
    {"jp":"おはようございます。チェックインをおねがいします。","romaji":"Ohayō gozaimasu. Chekku-in o onegaishimasu.","fr":"Bonjour. Je voudrais faire mon check-in, s'il vous plaît.","note":""},
    {"jp":"おはようございます。きょうもよろしくおねがいします。","romaji":"Ohayō gozaimasu. Kyō mo yoroshiku onegaishimasu.","fr":"Bonjour. Merci de votre aide encore aujourd'hui.","note":""},
  ],
  "こんにちは": [
    {"jp":"こんにちは！このあたりにおすすめのレストランはありますか？","romaji":"Konnichiwa! Kono atari ni osusume no resutoran wa arimasu ka?","fr":"Bonjour ! Y a-t-il un restaurant recommandé par ici ?","note":"こんにちは s'utilise en journée, de 11h à 18h."},
    {"jp":"こんにちは。にほんごをべんきょうしています。","romaji":"Konnichiwa. Nihongo o benkyō shite imasu.","fr":"Bonjour. J'apprends le japonais.","note":""},
    {"jp":"こんにちは、はじめまして。フランスからきました。","romaji":"Konnichiwa, hajimemashite. Furansu kara kimashita.","fr":"Bonjour, enchanté. Je viens de France.","note":""},
  ],
  "こんばんは": [
    {"jp":"こんばんは。よやくをしたものですが。","romaji":"Konbanwa. Yoyaku o shita mono desu ga.","fr":"Bonsoir. J'ai une réservation.","note":"Utile en arrivant le soir à un hôtel ou restaurant."},
    {"jp":"こんばんは！きょうはたのしかったですね。","romaji":"Konbanwa! Kyō wa tanoshikatta desu ne.","fr":"Bonsoir ! C'était agréable aujourd'hui, n'est-ce pas ?","note":""},
    {"jp":"こんばんは。このへんにコンビニはありますか？","romaji":"Konbanwa. Kono hen ni konbini wa arimasu ka?","fr":"Bonsoir. Y a-t-il un konbini par ici ?","note":""},
  ],
  "おやすみなさい": [
    {"jp":"おやすみなさい。またあした！","romaji":"Oyasumi nasai. Mata ashita!","fr":"Bonne nuit. À demain !","note":""},
    {"jp":"おやすみなさい。きょうはほんとうにありがとうございました。","romaji":"Oyasumi nasai. Kyō wa hontō ni arigatō gozaimashita.","fr":"Bonne nuit. Merci vraiment pour aujourd'hui.","note":""},
    {"jp":"おやすみなさい。ゆっくりやすんでください。","romaji":"Oyasumi nasai. Yukkuri yasunde kudasai.","fr":"Bonne nuit. Reposez-vous bien.","note":""},
  ],
  "さようなら": [
    {"jp":"さようなら。またにほんにきてください！","romaji":"Sayōnara. Mata Nihon ni kite kudasai!","fr":"Au revoir. Revenez au Japon !","note":"さようなら implique une séparation longue ou définitive."},
    {"jp":"さようなら。たびはたのしかったです。","romaji":"Sayōnara. Tabi wa tanoshikatta desu.","fr":"Au revoir. Le voyage était très agréable.","note":""},
    {"jp":"さようなら、おげんきで。","romaji":"Sayōnara, ogenki de.","fr":"Au revoir, portez-vous bien.","note":""},
  ],
  "またね": [
    {"jp":"またね！らいしゅうあおう！","romaji":"Mata ne! Raishū aō!","fr":"À plus ! On se voit la semaine prochaine !","note":"またね est informel, entre amis."},
    {"jp":"またね。たのしかったよ！","romaji":"Mata ne. Tanoshikatta yo!","fr":"À bientôt. C'était sympa !","note":""},
    {"jp":"じゃあ、またね。きをつけて！","romaji":"Jā, mata ne. Ki o tsukete!","fr":"Allez, à plus. Fais attention à toi !","note":"じゃあ est une façon décontractée de dire \"bon alors\"."},
  ],
  "ありがとうございます": [
    {"jp":"このみちをおしえてくれて、ありがとうございます。","romaji":"Kono michi o oshiete kurete, arigatō gozaimasu.","fr":"Merci de m'avoir indiqué ce chemin.","note":""},
    {"jp":"ありがとうございます。とてもたすかりました。","romaji":"Arigatō gozaimasu. Totemo tasukarimashita.","fr":"Merci beaucoup. Vous m'avez vraiment aidé.","note":"たすかりました = vous m'avez sauvé / aidé."},
    {"jp":"おみやげをありがとうございます。うれしいです。","romaji":"Omiyage o arigatō gozaimasu. Ureshii desu.","fr":"Merci pour le souvenir. Je suis ravi(e).","note":""},
  ],
  "どういたしまして": [
    {"jp":"ありがとうございます。—どういたしまして！","romaji":"Arigatō gozaimasu. — Dō itashimashite!","fr":"Merci. — De rien !","note":"Réponse standard à un remerciement."},
    {"jp":"どういたしまして。またなんでもきいてください。","romaji":"Dō itashimashite. Mata nandemo kiite kudasai.","fr":"De rien. N'hésitez pas à demander si besoin.","note":""},
    {"jp":"どういたしまして。おたがいさまですよ。","romaji":"Dō itashimashite. Otagai-sama desu yo.","fr":"De rien. C'est normal entre nous.","note":"おたがいさま = \"c'est réciproque\"."},
  ],
  "すみません": [
    {"jp":"すみません、えきはどこですか？","romaji":"Sumimasen, eki wa doko desu ka?","fr":"Excusez-moi, où est la gare ?","note":"すみません est le meilleur mot pour interpeller quelqu'un."},
    {"jp":"すみません、しゃしんをとってもらえますか？","romaji":"Sumimasen, shashin o totte moraemasu ka?","fr":"Excusez-moi, pourriez-vous prendre une photo ?","note":""},
    {"jp":"すみません、とおしてください。","romaji":"Sumimasen, tōshite kudasai.","fr":"Excusez-moi, laissez-moi passer s'il vous plaît.","note":"Très utile dans le métro bondé."},
  ],
  "ごめんなさい": [
    {"jp":"ごめんなさい、まちがえました。","romaji":"Gomen nasai, machigaemashita.","fr":"Je suis désolé, je me suis trompé.","note":""},
    {"jp":"おくれてごめんなさい。でんしゃがおくれました。","romaji":"Okurete gomen nasai. Densha ga okuremashita.","fr":"Désolé d'être en retard. Le train avait du retard.","note":""},
    {"jp":"ごめんなさい、しらなかったです。","romaji":"Gomen nasai, shiranakatta desu.","fr":"Désolé, je ne savais pas.","note":""},
  ],
  "はい": [
    {"jp":"はい、わかりました。","romaji":"Hai, wakarimashita.","fr":"Oui, j'ai compris.","note":""},
    {"jp":"はい、そのとおりです。","romaji":"Hai, sono tōri desu.","fr":"Oui, c'est exact.","note":""},
    {"jp":"はい、よろしくおねがいします。","romaji":"Hai, yoroshiku onegaishimasu.","fr":"Oui, avec plaisir.","note":""},
  ],
  "いいえ": [
    {"jp":"いいえ、けっこうです。","romaji":"Iie, kekkō desu.","fr":"Non merci, ça ira.","note":"けっこうです est très poli pour refuser."},
    {"jp":"いいえ、まだです。","romaji":"Iie, mada desu.","fr":"Non, pas encore.","note":""},
    {"jp":"いいえ、そうじゃないです。","romaji":"Iie, sō ja nai desu.","fr":"Non, ce n'est pas ça.","note":""},
  ],
  "わかりました": [
    {"jp":"わかりました。じゅうじにまいります。","romaji":"Wakarimashita. Jūji ni mairimasu.","fr":"Compris. Je serai là à 10h.","note":""},
    {"jp":"はい、わかりました。ありがとうございます。","romaji":"Hai, wakarimashita. Arigatō gozaimasu.","fr":"Oui, compris. Merci.","note":""},
    {"jp":"わかりました。そのとおりにします。","romaji":"Wakarimashita. Sono tōri ni shimasu.","fr":"Compris. Je ferai comme vous avez dit.","note":""},
  ],
  "わかりません": [
    {"jp":"すみません、わかりません。えいごがはなせますか？","romaji":"Sumimasen, wakarimasen. Eigo ga hanasemasu ka?","fr":"Excusez-moi, je ne comprends pas. Parlez-vous anglais ?","note":""},
    {"jp":"にほんごがまだよくわかりません。","romaji":"Nihongo ga mada yoku wakarimasen.","fr":"Je ne comprends pas encore bien le japonais.","note":""},
    {"jp":"すみません、このきっぷのつかいかたがわかりません。","romaji":"Sumimasen, kono kippu no tsukaikata ga wakarimasen.","fr":"Excusez-moi, je ne comprends pas comment utiliser ce billet.","note":""},
  ],
  "おねがいします": [
    {"jp":"みずをおねがいします。","romaji":"Mizu o onegaishimasu.","fr":"De l'eau, s'il vous plaît.","note":"[chose] + をおねがいします = formule universelle au restaurant."},
    {"jp":"タクシーをよんでください。おねがいします。","romaji":"Takushī o yonde kudasai. Onegaishimasu.","fr":"Appelez un taxi, s'il vous plaît.","note":""},
    {"jp":"ゆっくりはなしてください。おねがいします。","romaji":"Yukkuri hanashite kudasai. Onegaishimasu.","fr":"Parlez plus lentement, s'il vous plaît.","note":""},
  ],
  "いただきます": [
    {"jp":"いただきます！このすしはとてもおいしそうですね。","romaji":"Itadakimasu! Kono sushi wa totemo oishisō desu ne.","fr":"Bon appétit ! Ces sushi ont l'air délicieux.","note":"いただきます se dit avant chaque repas, mains jointes."},
    {"jp":"みんなそろいましたね。では、いただきます！","romaji":"Minna soroaimashita ne. Dewa, itadakimasu!","fr":"Tout le monde est là. Alors, bon appétit !","note":""},
    {"jp":"いただきます。いいにおいですね！","romaji":"Itadakimasu. Ii nioi desu ne!","fr":"Bon appétit. Ça sent bon !","note":""},
  ],
  "ごちそうさまでした": [
    {"jp":"ごちそうさまでした。とてもおいしかったです。","romaji":"Gochisōsama deshita. Totemo oishikatta desu.","fr":"Merci pour ce repas. C'était vraiment délicieux.","note":"Se dit en quittant le restaurant ou après le repas."},
    {"jp":"ごちそうさまでした！またきます。","romaji":"Gochisōsama deshita! Mata kimasu.","fr":"Merci ! On reviendra.","note":"またきます enchante les restaurateurs japonais."},
    {"jp":"ごちそうさまでした。おかんじょうをおねがいします。","romaji":"Gochisōsama deshita. Okanjō o onegaishimasu.","fr":"Merci pour ce repas. L'addition s'il vous plaît.","note":""},
  ],
  "よろしくおねがいします": [
    {"jp":"はじめまして。よろしくおねがいします。","romaji":"Hajimemashite. Yoroshiku onegaishimasu.","fr":"Enchanté. Ravi de vous rencontrer.","note":"Formule incontournable lors d'une première rencontre."},
    {"jp":"こんごともよろしくおねがいします。","romaji":"Kongo tomo yoroshiku onegaishimasu.","fr":"Je compte sur votre aide à l'avenir aussi.","note":""},
    {"jp":"おせわになります。よろしくおねがいします。","romaji":"Osewa ni narimasu. Yoroshiku onegaishimasu.","fr":"Je vais avoir besoin de votre aide. Merci d'avance.","note":""},
  ],
  "はじめまして": [
    {"jp":"はじめまして。わたしはピエールです。フランスからきました。","romaji":"Hajimemashite. Watashi wa Piēru desu. Furansu kara kimashita.","fr":"Enchanté. Je m'appelle Pierre. Je viens de France.","note":""},
    {"jp":"はじめまして。にほんがだいすきです！","romaji":"Hajimemashite. Nihon ga daisuki desu!","fr":"Enchanté. J'adore le Japon !","note":""},
    {"jp":"はじめまして。よろしくおねがいします。","romaji":"Hajimemashite. Yoroshiku onegaishimasu.","fr":"Enchanté. Ravi de vous rencontrer.","note":"Toujours suivi de よろしくおねがいします."},
  ],
  "わたしのなまえは〜です": [
    {"jp":"わたしのなまえはピエールです。","romaji":"Watashi no namae wa Piēru desu.","fr":"Je m'appelle Pierre.","note":""},
    {"jp":"わたしのなまえはプルームです。よろしくおねがいします。","romaji":"Watashi no namae wa Purūmu desu. Yoroshiku onegaishimasu.","fr":"Je m'appelle Plume. Ravi de vous rencontrer.","note":""},
    {"jp":"はじめまして。わたしのなまえはマルタンです。フランスのパリからきました。","romaji":"Hajimemashite. Watashi no namae wa Marutan desu. Furansu no Pari kara kimashita.","fr":"Enchanté. Je m'appelle Martin. Je viens de Paris, en France.","note":""},
  ],
  "にほんごがすこしはなせます": [
    {"jp":"にほんごがすこしはなせます。ゆっくりはなしてください。","romaji":"Nihongo ga sukoshi hanasemasu. Yukkuri hanashite kudasai.","fr":"Je parle un peu japonais. Parlez lentement s'il vous plaît.","note":""},
    {"jp":"にほんごがすこしはなせますが、まだべんきょうちゅうです。","romaji":"Nihongo ga sukoshi hanasemasu ga, mada benkyō-chū desu.","fr":"Je parle un peu japonais, mais je suis encore en apprentissage.","note":""},
    {"jp":"にほんごがすこしはなせます。もっとじょうずになりたいです。","romaji":"Nihongo ga sukoshi hanasemasu. Motto jōzu ni naritai desu.","fr":"Je parle un peu japonais. Je veux m'améliorer.","note":""},
  ],
  "えいごがはなせますか": [
    {"jp":"すみません、えいごがはなせますか？","romaji":"Sumimasen, eigo ga hanasemasu ka?","fr":"Excusez-moi, parlez-vous anglais ?","note":""},
    {"jp":"このホテルにえいごがはなせるひとはいますか？","romaji":"Kono hoteru ni eigo ga hanaseru hito wa imasu ka?","fr":"Y a-t-il quelqu'un qui parle anglais dans cet hôtel ?","note":""},
    {"jp":"えいごがはなせますか？にほんごがよくわかりません。","romaji":"Eigo ga hanasemasu ka? Nihongo ga yoku wakarimasen.","fr":"Parlez-vous anglais ? Je ne comprends pas bien le japonais.","note":""},
  ],
  "もういちどいってください": [
    {"jp":"すみません、もういちどいってください。","romaji":"Sumimasen, mō ichido itte kudasai.","fr":"Excusez-moi, pouvez-vous répéter s'il vous plaît ?","note":""},
    {"jp":"もういちどいってください。ゆっくりおねがいします。","romaji":"Mō ichido itte kudasai. Yukkuri onegaishimasu.","fr":"Répétez s'il vous plaît. Lentement s'il vous plaît.","note":""},
    {"jp":"すみません、もういちどいってください。よくきこえませんでした。","romaji":"Sumimasen, mō ichido itte kudasai. Yoku kikoemasendeshita.","fr":"Excusez-moi, répétez s'il vous plaît. Je n'ai pas bien entendu.","note":""},
  ],
  "ゆっくりはなしてください": [
    {"jp":"すみません、ゆっくりはなしてください。にほんごがすこしわかります。","romaji":"Sumimasen, yukkuri hanashite kudasai. Nihongo ga sukoshi wakarimasu.","fr":"Excusez-moi, parlez lentement. Je comprends un peu le japonais.","note":""},
    {"jp":"ゆっくりはなしてください。もういちどおねがいします。","romaji":"Yukkuri hanashite kudasai. Mō ichido onegaishimasu.","fr":"Parlez lentement s'il vous plaît. Encore une fois s'il vous plaît.","note":""},
    {"jp":"もうすこしゆっくりはなしてもらえますか？","romaji":"Mō sukoshi yukkuri hanashite moraemasu ka?","fr":"Pourriez-vous parler un peu plus lentement ?","note":"〜てもらえますか est une formule polie pour demander un service."},
  ],
  "フランスからきました": [
    {"jp":"フランスからきました。にほんははじめてです。","romaji":"Furansu kara kimashita. Nihon wa hajimete desu.","fr":"Je viens de France. C'est ma première fois au Japon.","note":""},
    {"jp":"フランスからきました。にほんがだいすきです！","romaji":"Furansu kara kimashita. Nihon ga daisuki desu!","fr":"Je viens de France. J'adore le Japon !","note":""},
    {"jp":"フランスのパリからきました。さけがすきです。","romaji":"Furansu no Pari kara kimashita. Sake ga suki desu.","fr":"Je viens de Paris, en France. J'aime le saké.","note":""},
  ],
  "たのしかったです": [
    {"jp":"きょうはほんとうにたのしかったです。ありがとうございました。","romaji":"Kyō wa hontō ni tanoshikatta desu. Arigatō gozaimashita.","fr":"Aujourd'hui était vraiment agréable. Merci beaucoup.","note":""},
    {"jp":"このりょこうはとてもたのしかったです。","romaji":"Kono ryokō wa totemo tanoshikatta desu.","fr":"Ce voyage était très agréable.","note":""},
    {"jp":"おまつりはたのしかったです。またきたいです。","romaji":"Omatsuri wa tanoshikatta desu. Mata kitai desu.","fr":"Le festival était agréable. Je veux revenir.","note":""},
  ],
  "きをつけて": [
    {"jp":"きをつけて！そこはあぶないですよ。","romaji":"Ki o tsukete! Soko wa abunai desu yo.","fr":"Fais attention ! C'est dangereux par là.","note":""},
    {"jp":"きをつけて。たびをたのしんでね！","romaji":"Ki o tsukete. Tabi o tanoshinde ne!","fr":"Prends soin de toi. Profite bien du voyage !","note":""},
    {"jp":"あしたのあさはやいですね。きをつけて。","romaji":"Ashita no asa hayai desu ne. Ki o tsukete.","fr":"Demain matin c'est tôt, hein. Fais attention.","note":""},
  ],
  "おかげさまで": [
    {"jp":"おかげさまで、げんきです。","romaji":"Okage-sama de, genki desu.","fr":"Grâce à vous, je vais bien.","note":"Réponse polie à \"comment allez-vous ?\"."},
    {"jp":"おかげさまで、たびはとてもたのしかったです。","romaji":"Okage-sama de, tabi wa totemo tanoshikatta desu.","fr":"Grâce à vous, le voyage s'est très bien passé.","note":""},
    {"jp":"おかげさまで、なんとかなりました。","romaji":"Okage-sama de, nantoka narimashita.","fr":"Grâce à vous, ça s'est arrangé.","note":""},
  ],
  "おじゃまします": [
    {"jp":"おじゃまします。しつれいします。","romaji":"Ojama shimasu. Shitsurei shimasu.","fr":"Permettez-moi d'entrer. Excusez-moi.","note":"Se dit en entrant chez quelqu'un ou dans un bureau."},
    {"jp":"おじゃまします！きれいなおうちですね。","romaji":"Ojama shimasu! Kirei na ouchi desu ne.","fr":"Permettez-moi d'entrer ! Vous avez une belle maison.","note":""},
    {"jp":"おじゃまします。くつをぬいでもいいですか？","romaji":"Ojama shimasu. Kutsu o nuide mo ii desu ka?","fr":"Excusez-moi d'entrer. Dois-je enlever mes chaussures ?","note":"Au Japon, on enlève toujours ses chaussures à l'entrée."},
  ],
  "ごめんください": [
    {"jp":"ごめんください！どなたかいらっしゃいますか？","romaji":"Gomen kudasai! Donata ka irasshaimasu ka?","fr":"Il y a quelqu'un ? Y a-t-il quelqu'un ?","note":""},
    {"jp":"ごめんください。やまもとさんのおたくですか？","romaji":"Gomen kudasai. Yamamoto-san no otaku desu ka?","fr":"Il y a quelqu'un ? C'est bien chez M. Yamamoto ?","note":""},
    {"jp":"ごめんください。たくはいびんですが。","romaji":"Gomen kudasai. Takuhaibin desu ga.","fr":"Il y a quelqu'un ? Livraison express.","note":""},
  ],
  "おせわになっております": [
    {"jp":"いつもおせわになっております。","romaji":"Itsumo osewa ni natte orimasu.","fr":"Merci toujours pour tout ce que vous faites pour moi.","note":"Formule de politesse très courante dans les e-mails ou appels pro."},
    {"jp":"たびのあいだ、おせわになっております。","romaji":"Tabi no aida, osewa ni natte orimasu.","fr":"Merci pour votre aide pendant mon voyage.","note":""},
    {"jp":"このたびはたいへんおせわになっております。","romaji":"Kono tabi wa taihen osewa ni natte orimasu.","fr":"Merci infiniment pour tout ce que vous faites cette fois-ci.","note":""},
  ],
  "よかったらまたおはなしましょう": [
    {"jp":"よかったらまたおはなしましょう。れんらくさきをおしえてもらえますか？","romaji":"Yokattara mata ohanashi mashō. Renraku-saki o oshiete moraemasu ka?","fr":"Si vous voulez, parlons encore. Puis-je avoir vos coordonnées ?","note":""},
    {"jp":"きょうはありがとうございました。よかったらまたおはなしましょう。","romaji":"Kyō wa arigatō gozaimashita. Yokattara mata ohanashi mashō.","fr":"Merci pour aujourd'hui. Reparlons si vous voulez bien.","note":""},
    {"jp":"よかったらまたおはなしましょう。にほんごのれんしゅうになります！","romaji":"Yokattara mata ohanashi mashō. Nihongo no renshū ni narimasu!","fr":"Si vous voulez, reparlons. Ce sera un bon entraînement en japonais !","note":""},
  ],
  "にほんはいかがですか": [
    {"jp":"にほんはいかがですか？たのしんでいますか？","romaji":"Nihon wa ikaga desu ka? Tanoshinde imasu ka?","fr":"Comment trouvez-vous le Japon ? Vous vous amusez bien ?","note":"いかが est la forme polie de どう (comment)."},
    {"jp":"はじめてのにほんはいかがですか？","romaji":"Hajimete no Nihon wa ikaga desu ka?","fr":"Comment trouvez-vous le Japon pour la première fois ?","note":""},
    {"jp":"にほんのりょうりはいかがですか？おいしいですか？","romaji":"Nihon no ryōri wa ikaga desu ka? Oishii desu ka?","fr":"Comment trouvez-vous la cuisine japonaise ? C'est bon ?","note":""},
  ],
  "どうぞよろしくおつたえください": [
    {"jp":"おくさまにどうぞよろしくおつたえください。","romaji":"Okusama ni dōzo yoroshiku otsutae kudasai.","fr":"Transmettez mes amitiés à votre épouse s'il vous plaît.","note":""},
    {"jp":"ごかぞくのみなさまにどうぞよろしくおつたえください。","romaji":"Gokazoku no minasama ni dōzo yoroshiku otsutae kudasai.","fr":"Transmettez mes amitiés à toute votre famille s'il vous plaît.","note":""},
    {"jp":"たなかさんにどうぞよろしくおつたえください。おせわになりました。","romaji":"Tanaka-san ni dōzo yoroshiku otsutae kudasai. Osewa ni narimashita.","fr":"Transmettez mes amitiés à M. Tanaka. Merci pour tout.","note":""},
  ],
  "みず": [
    {"jp":"おみずをください。","romaji":"Omizu o kudasai.","fr":"De l'eau s'il vous plaît.","note":"L'eau est gratuite dans les restaurants japonais."},
    {"jp":"おみずをもういっぱいおねがいします。","romaji":"Omizu o mō ippai onegaishimasu.","fr":"Encore un verre d'eau s'il vous plaît.","note":""},
    {"jp":"おみずはありますか？のどがかわきました。","romaji":"Omizu wa arimasu ka? Nodo ga kawakimashita.","fr":"Avez-vous de l'eau ? J'ai soif.","note":""},
  ],
  "おちゃ": [
    {"jp":"おちゃをください。","romaji":"Ocha o kudasai.","fr":"Du thé vert s'il vous plaît.","note":"Le thé vert est souvent offert gratuitement."},
    {"jp":"つめたいおちゃはありますか？","romaji":"Tsumetai ocha wa arimasu ka?","fr":"Avez-vous du thé froid ?","note":""},
    {"jp":"おちゃをのみながら、まちます。","romaji":"Ocha o nominagara, machimasu.","fr":"Je vais attendre en buvant du thé.","note":""},
  ],
  "ビール": [
    {"jp":"ビールをいっぽんください。","romaji":"Bīru o ippon kudasai.","fr":"Une bière s'il vous plaît.","note":"いっぽん est le compteur pour les bouteilles."},
    {"jp":"にほんのビールはおいしいですね。","romaji":"Nihon no bīru wa oishii desu ne.","fr":"La bière japonaise est délicieuse, n'est-ce pas ?","note":""},
    {"jp":"とりあえずビールをください！","romaji":"Toriaezu bīru o kudasai!","fr":"Pour commencer, une bière s'il vous plaît !","note":"とりあえず = \"pour l'instant / pour commencer\", classique."},
  ],
  "さけ": [
    {"jp":"にほんしゅをいっぽんください。つめたいのをおねがいします。","romaji":"Nihonshu o ippon kudasai. Tsumetai no o onegaishimasu.","fr":"Une bouteille de saké s'il vous plaît. Froid.","note":"にほんしゅ = saké japonais (terme plus précis)."},
    {"jp":"このさけはどこのですか？","romaji":"Kono sake wa doko no desu ka?","fr":"Ce saké vient d'où ?","note":""},
    {"jp":"おすすめのにほんしゅはありますか？","romaji":"Osusume no nihonshu wa arimasu ka?","fr":"Avez-vous un saké recommandé ?","note":""},
  ],
  "ごはん": [
    {"jp":"ごはんをおかわりしてもいいですか？","romaji":"Gohan o okawari shite mo ii desu ka?","fr":"Puis-je avoir une autre portion de riz ?","note":"おかわり = resservir, très courant en izakaya."},
    {"jp":"ごはんはついていますか？","romaji":"Gohan wa tsuite imasu ka?","fr":"Est-ce que le riz est inclus ?","note":""},
    {"jp":"ごはんをたべないとげんきがでません。","romaji":"Gohan o tabenai to genki ga demasen.","fr":"Je n'ai pas d'énergie si je ne mange pas de riz.","note":""},
  ],
  "すし": [
    {"jp":"このへんにすしやはありますか？","romaji":"Kono hen ni sushiya wa arimasu ka?","fr":"Y a-t-il un restaurant de sushi par ici ?","note":""},
    {"jp":"まぐろとさけのすしをください。","romaji":"Maguro to sake no sushi o kudasai.","fr":"Du sushi au thon et au saumon s'il vous plaît.","note":""},
    {"jp":"このすしはとてもしんせんですね！","romaji":"Kono sushi wa totemo shinsen desu ne!","fr":"Ce sushi est très frais, n'est-ce pas !","note":""},
  ],
  "ラーメン": [
    {"jp":"ラーメンをひとつください。からさはふつうでおねがいします。","romaji":"Rāmen o hitotsu kudasai. Karasa wa futsū de onegaishimasu.","fr":"Un rāmen s'il vous plaît. Piquant moyen.","note":""},
    {"jp":"このラーメンはしょうゆですか、みそですか？","romaji":"Kono rāmen wa shōyu desu ka, miso desu ka?","fr":"Ce rāmen est à la sauce soja ou au miso ?","note":""},
    {"jp":"さっぽろのラーメンはとくべつにおいしいですね。","romaji":"Sapporo no rāmen wa tokubetsu ni oishii desu ne.","fr":"Les rāmen de Sapporo sont particulièrement délicieux.","note":""},
  ],
  "てんぷら": [
    {"jp":"てんぷらていしょくをください。","romaji":"Tenpura teishoku o kudasai.","fr":"Le menu tempura s'il vous plaît.","note":"ていしょく = menu complet avec riz et soupe."},
    {"jp":"このてんぷらはさくさくしていておいしいですね。","romaji":"Kono tenpura wa sakusaku shite ite oishii desu ne.","fr":"Ces tempura sont croustillants et délicieux.","note":""},
    {"jp":"えびてんぷらをふたつおねがいします。","romaji":"Ebi tenpura o futatsu onegaishimasu.","fr":"Deux tempura de crevettes s'il vous plaît.","note":""},
  ],
  "さしみ": [
    {"jp":"さしみのもりあわせをください。","romaji":"Sashimi no moriawase o kudasai.","fr":"Une assiette de sashimi variés s'il vous plaît.","note":"もりあわせ = assortiment."},
    {"jp":"このさしみはとてもしんせんですね！どこのさかなですか？","romaji":"Kono sashimi wa totemo shinsen desu ne! Doko no sakana desu ka?","fr":"Ce sashimi est très frais ! Le poisson vient d'où ?","note":""},
    {"jp":"さしみをわさびなしでたべられますか？","romaji":"Sashimi o wasabi nashi de taberaremasu ka?","fr":"Puis-je manger le sashimi sans wasabi ?","note":""},
  ],
  "めにゅー": [
    {"jp":"めにゅーをみせてください。","romaji":"Menyū o misete kudasai.","fr":"Montrez-moi le menu s'il vous plaît.","note":""},
    {"jp":"えいごのめにゅーはありますか？","romaji":"Eigo no menyū wa arimasu ka?","fr":"Avez-vous un menu en anglais ?","note":""},
    {"jp":"めにゅーにしゃしんはありますか？にほんごがよめません。","romaji":"Menyū ni shashin wa arimasu ka? Nihongo ga yomemasen.","fr":"Le menu a-t-il des photos ? Je ne lis pas le japonais.","note":""},
  ],
  "おかんじょう": [
    {"jp":"おかんじょうをおねがいします。","romaji":"Okanjō o onegaishimasu.","fr":"L'addition s'il vous plaît.","note":"On peut aussi dire おあいそ dans certains restaurants."},
    {"jp":"おかんじょうはべつべつにできますか？","romaji":"Okanjō wa betsu-betsu ni dekimasu ka?","fr":"Pouvez-vous faire des additions séparées ?","note":""},
    {"jp":"ごちそうさまでした。おかんじょうをください。","romaji":"Gochisōsama deshita. Okanjō o kudasai.","fr":"Merci pour le repas. L'addition s'il vous plaît.","note":""},
  ],
  "からい": [
    {"jp":"このりょうりはからいですか？","romaji":"Kono ryōri wa karai desu ka?","fr":"Ce plat est-il épicé ?","note":""},
    {"jp":"からいのはにがてです。すこしからさをへらしてもらえますか？","romaji":"Karai no wa nigate desu. Sukoshi karasa o herashite moraemasu ka?","fr":"Je ne supporte pas l'épicé. Pourriez-vous réduire le piquant ?","note":""},
    {"jp":"からくてもおいしいですね！","romaji":"Karakute mo oishii desu ne!","fr":"C'est piquant mais délicieux !","note":""},
  ],
  "あまい": [
    {"jp":"このわがしはあまくておいしいですね。","romaji":"Kono wagashi wa amakute oishii desu ne.","fr":"Ces pâtisseries japonaises sont sucrées et délicieuses.","note":""},
    {"jp":"あまいものがすきですか？","romaji":"Amai mono ga suki desu ka?","fr":"Vous aimez les choses sucrées ?","note":""},
    {"jp":"このさけはすこしあまいですね。","romaji":"Kono sake wa sukoshi amai desu ne.","fr":"Ce saké est légèrement sucré, n'est-ce pas.","note":""},
  ],
  "おいしい": [
    {"jp":"わあ、おいしい！これはなんですか？","romaji":"Wā, oishii! Kore wa nan desu ka?","fr":"Waouh, c'est délicieux ! C'est quoi ça ?","note":""},
    {"jp":"このラーメンはほんとうにおいしいですね。","romaji":"Kono rāmen wa hontō ni oishii desu ne.","fr":"Ces rāmen sont vraiment délicieux.","note":""},
    {"jp":"にほんのりょうりはぜんぶおいしいです！","romaji":"Nihon no ryōri wa zenbu oishii desu!","fr":"Toute la cuisine japonaise est délicieuse !","note":""},
  ],
  "これをください": [
    {"jp":"すみません、これをください。","romaji":"Sumimasen, kore o kudasai.","fr":"Excusez-moi, je voudrais ceci s'il vous plaît.","note":"En pointant du doigt sur le menu — très pratique !"},
    {"jp":"これをふたつください。","romaji":"Kore o futatsu kudasai.","fr":"Donnez-moi deux de ceci s'il vous plaît.","note":""},
    {"jp":"これとこれをください。ありがとうございます。","romaji":"Kore to kore o kudasai. Arigatō gozaimasu.","fr":"Ceci et ceci s'il vous plaît. Merci.","note":""},
  ],
  "おすすめはなんですか": [
    {"jp":"おすすめはなんですか？にほんしゅがすきです。","romaji":"Osusume wa nan desu ka? Nihonshu ga suki desu.","fr":"Qu'est-ce que vous recommandez ? J'aime le saké.","note":""},
    {"jp":"きょうのおすすめはなんですか？","romaji":"Kyō no osusume wa nan desu ka?","fr":"Quelle est la spécialité du jour ?","note":""},
    {"jp":"このてんのおすすめはなんですか？","romaji":"Kono ten no osusume wa nan desu ka?","fr":"Qu'est-ce que vous recommandez dans ce restaurant ?","note":""},
  ],
  "アレルギーがあります": [
    {"jp":"えびアレルギーがあります。えびがはいっていますか？","romaji":"Ebi arerugī ga arimasu. Ebi ga haitte imasu ka?","fr":"J'ai une allergie aux crevettes. Y en a-t-il dedans ?","note":""},
    {"jp":"アレルギーがあります。だいずをたべられません。","romaji":"Arerugī ga arimasu. Daizu o taberaremasen.","fr":"J'ai une allergie. Je ne peux pas manger de soja.","note":""},
    {"jp":"ピーナッツアレルギーがあります。きをつけてください。","romaji":"Pīnattsu arerugī ga arimasu. Ki o tsukete kudasai.","fr":"J'ai une allergie aux cacahuètes. Faites attention s'il vous plaît.","note":""},
  ],
  "おみずをください": [
    {"jp":"おみずをください。のどがかわきました。","romaji":"Omizu o kudasai. Nodo ga kawakimashita.","fr":"De l'eau s'il vous plaît. J'ai soif.","note":""},
    {"jp":"すみません、おみずをください。","romaji":"Sumimasen, omizu o kudasai.","fr":"Excusez-moi, de l'eau s'il vous plaît.","note":""},
    {"jp":"おみずをふたつください。","romaji":"Omizu o futatsu kudasai.","fr":"Deux verres d'eau s'il vous plaît.","note":""},
  ],
  "おかんじょうをください": [
    {"jp":"すみません、おかんじょうをください。","romaji":"Sumimasen, okanjō o kudasai.","fr":"Excusez-moi, l'addition s'il vous plaît.","note":""},
    {"jp":"ごちそうさまでした。おかんじょうをください。","romaji":"Gochisōsama deshita. Okanjō o kudasai.","fr":"Merci pour ce repas. L'addition s'il vous plaît.","note":""},
    {"jp":"おかんじょうをください。カードでしはらえますか？","romaji":"Okanjō o kudasai. Kādo de shiharaemasu ka?","fr":"L'addition s'il vous plaît. Puis-je payer par carte ?","note":""},
  ],
  "とてもおいしかったです": [
    {"jp":"とてもおいしかったです。ごちそうさまでした！","romaji":"Totemo oishikatta desu. Gochisōsama deshita!","fr":"C'était vraiment délicieux. Merci pour ce repas !","note":""},
    {"jp":"このりょうりはとてもおいしかったです。またきます！","romaji":"Kono ryōri wa totemo oishikatta desu. Mata kimasu!","fr":"Ce plat était vraiment délicieux. On reviendra !","note":""},
    {"jp":"とてもおいしかったです。レシピをおしえてもらえますか？","romaji":"Totemo oishikatta desu. Reshipi o oshiete moraemasu ka?","fr":"C'était vraiment délicieux. Pourriez-vous me donner la recette ?","note":""},
  ],
  "ひとりです": [
    {"jp":"ひとりです。せきはありますか？","romaji":"Hitori desu. Seki wa arimasu ka?","fr":"Je suis seul(e). Avez-vous une table ?","note":""},
    {"jp":"ひとりですが、カウンターでもいいです。","romaji":"Hitori desu ga, kauntā demo ii desu.","fr":"Je suis seul(e), mais le comptoir me convient aussi.","note":"Manger seul au comptoir est très normal au Japon."},
    {"jp":"ひとりでおまかせコースをたのめますか？","romaji":"Hitori de omakase kōsu o tanomemasu ka?","fr":"Puis-je commander le menu omakase pour une personne ?","note":""},
  ],
  "ふたりです": [
    {"jp":"ふたりです。よやくはしていません。","romaji":"Futari desu. Yoyaku wa shite imasen.","fr":"Nous sommes deux. Nous n'avons pas de réservation.","note":""},
    {"jp":"ふたりです。しずかなせきをおねがいします。","romaji":"Futari desu. Shizuka na seki o onegaishimasu.","fr":"Nous sommes deux. Une table calme s'il vous plaît.","note":""},
    {"jp":"ふたりですが、まどのそばのせきはありますか？","romaji":"Futari desu ga, mado no soba no seki wa arimasu ka?","fr":"Nous sommes deux, avez-vous une table près de la fenêtre ?","note":""},
  ],
  "このりょうりにはなにがはいっていますか": [
    {"jp":"すみません、このりょうりにはなにがはいっていますか？アレルギーがあります。","romaji":"Sumimasen, kono ryōri ni wa nani ga haitte imasu ka? Arerugī ga arimasu.","fr":"Excusez-moi, quels sont les ingrédients de ce plat ? J'ai une allergie.","note":""},
    {"jp":"このスープにはなにがはいっていますか？","romaji":"Kono sūpu ni wa nani ga haitte imasu ka?","fr":"Quels sont les ingrédients de cette soupe ?","note":""},
    {"jp":"このたれにはなにがはいっていますか？だいずアレルギーがあります。","romaji":"Kono tare ni wa nani ga haitte imasu ka? Daizu arerugī ga arimasu.","fr":"Quels sont les ingrédients de cette sauce ? J'ai une allergie au soja.","note":""},
  ],
  "にくなしでつくれますか": [
    {"jp":"にくなしでつくれますか？ベジタリアンです。","romaji":"Niku nashi de tsukuremasu ka? Bejitarian desu.","fr":"Pouvez-vous le faire sans viande ? Je suis végétarien(ne).","note":""},
    {"jp":"このラーメンはにくなしでつくれますか？","romaji":"Kono rāmen wa niku nashi de tsukuremasu ka?","fr":"Pouvez-vous faire ces rāmen sans viande ?","note":""},
    {"jp":"にくなしでつくれますか？さかなはだいじょうぶです。","romaji":"Niku nashi de tsukuremasu ka? Sakana wa daijōbu desu.","fr":"Pouvez-vous le faire sans viande ? Le poisson c'est bon.","note":""},
  ],
  "おまかせコースをおねがいします": [
    {"jp":"おまかせコースをおねがいします。よさんはひとりごせんえんです。","romaji":"Omakase kōsu o onegaishimasu. Yosan wa hitori gosen-en desu.","fr":"Le menu omakase s'il vous plaît. Budget 5000 yens par personne.","note":"おまかせ = \"je vous fais confiance\", le chef choisit."},
    {"jp":"おまかせコースをおねがいします。えびアレルギーがあります。","romaji":"Omakase kōsu o onegaishimasu. Ebi arerugī ga arimasu.","fr":"Le menu omakase s'il vous plaît. J'ai une allergie aux crevettes.","note":""},
    {"jp":"おまかせコースはありますか？ふたりぶんおねがいします。","romaji":"Omakase kōsu wa arimasu ka? Futari-bun onegaishimasu.","fr":"Avez-vous un menu omakase ? Pour deux personnes.","note":""},
  ],
  "ざしきせきはありますか": [
    {"jp":"ざしきせきはありますか？にほんふうにたべたいです。","romaji":"Zashiki-seki wa arimasu ka? Nihon-fū ni tabetai desu.","fr":"Avez-vous des tables en tatami ? Je veux manger à la japonaise.","note":""},
    {"jp":"ざしきせきはありますか？くつをぬぐのはだいじょうぶです。","romaji":"Zashiki-seki wa arimasu ka? Kutsu o nugu no wa daijōbu desu.","fr":"Avez-vous des tables en tatami ? Enlever les chaussures ne me pose pas de problème.","note":""},
    {"jp":"ざしきせきよりテーブルせきのほうがいいです。","romaji":"Zashiki-seki yori tēburu-seki no hō ga ii desu.","fr":"Je préfère une table normale plutôt qu'une table en tatami.","note":""},
  ],
  "のみほうだいはありますか": [
    {"jp":"のみほうだいはありますか？なんじかんですか？","romaji":"Nomihōdai wa arimasu ka? Nanjikan desu ka?","fr":"Avez-vous une formule à volonté à boire ? Combien de temps ?","note":"のみほうだい = all-you-can-drink, souvent 2h."},
    {"jp":"たべほうだいとのみほうだいのセットはありますか？","romaji":"Tabehōdai to nomihōdai no setto wa arimasu ka?","fr":"Avez-vous une formule tout-à-volonté manger et boire ?","note":""},
    {"jp":"のみほうだいにはにほんしゅもはいっていますか？","romaji":"Nomihōdai ni wa nihonshu mo haitte imasu ka?","fr":"Est-ce que le saké est inclus dans la formule à volonté ?","note":""},
  ],
  "きょうのおすすめはなんですか": [
    {"jp":"きょうのおすすめはなんですか？さかなりょうりがすきです。","romaji":"Kyō no osusume wa nan desu ka? Sakana ryōri ga suki desu.","fr":"Quelle est la spécialité du jour ? J'aime les plats de poisson.","note":""},
    {"jp":"きょうのおすすめはなんですか？それにします！","romaji":"Kyō no osusume wa nan desu ka? Sore ni shimasu!","fr":"Quelle est la spécialité du jour ? Je prends ça !","note":""},
    {"jp":"きょうのおすすめランチをください。","romaji":"Kyō no osusume ranchi o kudasai.","fr":"Le plat du jour recommandé s'il vous plaît.","note":""},
  ],
  "えき": [
    {"jp":"すみません、えきはどこですか？","romaji":"Sumimasen, eki wa doko desu ka?","fr":"Excusez-moi, où est la gare ?","note":""},
    {"jp":"つぎのえきはなんといいますか？","romaji":"Tsugi no eki wa nan to iimasu ka?","fr":"Comment s'appelle la prochaine gare ?","note":""},
    {"jp":"このえきからしんかんせんにのれますか？","romaji":"Kono eki kara shinkansen ni noremasu ka?","fr":"Puis-je prendre le Shinkansen depuis cette gare ?","note":""},
  ],
  "でんしゃ": [
    {"jp":"でんしゃはなんじにでますか？","romaji":"Densha wa nanji ni demasu ka?","fr":"À quelle heure part le train ?","note":""},
    {"jp":"このでんしゃはうえのにとまりますか？","romaji":"Kono densha wa Ueno ni tomarimasu ka?","fr":"Ce train s'arrête-t-il à Ueno ?","note":""},
    {"jp":"でんしゃがおくれています。つぎのでんしゃはいつですか？","romaji":"Densha ga okurete imasu. Tsugi no densha wa itsu desu ka?","fr":"Le train est en retard. Quand est le prochain train ?","note":""},
  ],
  "しんかんせん": [
    {"jp":"しんかんせんのきっぷをいちまいください。とうきょうからきょうとまで。","romaji":"Shinkansen no kippu o ichimai kudasai. Tōkyō kara Kyōto made.","fr":"Un billet de Shinkansen s'il vous plaît. De Tokyo à Kyoto.","note":""},
    {"jp":"しんかんせんはとてもはやいですね！","romaji":"Shinkansen wa totemo hayai desu ne!","fr":"Le Shinkansen est vraiment rapide !","note":""},
    {"jp":"しんかんせんにのりたいです。じゆうせきはありますか？","romaji":"Shinkansen ni noritai desu. Jiyū-seki wa arimasu ka?","fr":"Je veux prendre le Shinkansen. Y a-t-il des places libres ?","note":""},
  ],
  "バス": [
    {"jp":"このバスはきんかくじにいきますか？","romaji":"Kono basu wa Kinkakuji ni ikimasu ka?","fr":"Est-ce que ce bus va au Kinkakuji ?","note":""},
    {"jp":"バスていはどこですか？","romaji":"Basutei wa doko desu ka?","fr":"Où est l'arrêt de bus ?","note":""},
    {"jp":"バスのりょうきんはいくらですか？","romaji":"Basu no ryōkin wa ikura desu ka?","fr":"Quel est le tarif du bus ?","note":""},
  ],
  "タクシー": [
    {"jp":"タクシーをよんでください。","romaji":"Takushī o yonde kudasai.","fr":"Appelez un taxi s'il vous plaît.","note":""},
    {"jp":"このじゅうしょにいってください。","romaji":"Kono jūsho ni itte kudasai.","fr":"Allez à cette adresse s'il vous plaît.","note":"Pratique de montrer l'adresse écrite sur le téléphone."},
    {"jp":"タクシーにのりたいです。ちかくにタクシーのりばはありますか？","romaji":"Takushī ni noritai desu. Chikaku ni takushī noriba wa arimasu ka?","fr":"Je veux prendre un taxi. Y a-t-il une station de taxi près d'ici ?","note":""},
  ],
  "くうこう": [
    {"jp":"くうこうまでどのくらいかかりますか？","romaji":"Kūkō made dono kurai kakarimasu ka?","fr":"Combien de temps faut-il pour aller à l'aéroport ?","note":""},
    {"jp":"くうこうにいくバスはありますか？","romaji":"Kūkō ni iku basu wa arimasu ka?","fr":"Y a-t-il un bus pour l'aéroport ?","note":""},
    {"jp":"なりたくうこうへのりものはなんがはやいですか？","romaji":"Narita kūkō e no norimono wa nani ga hayai desu ka?","fr":"Quel moyen de transport est le plus rapide pour l'aéroport de Narita ?","note":""},
  ],
  "きっぷ": [
    {"jp":"きっぷをいちまいください。しんじゅくまでいくらですか？","romaji":"Kippu o ichimai kudasai. Shinjuku made ikura desu ka?","fr":"Un billet s'il vous plaît. Combien jusqu'à Shinjuku ?","note":""},
    {"jp":"きっぷのかいかたをおしえてください。","romaji":"Kippu no kaikata o oshiete kudasai.","fr":"Montrez-moi comment acheter un billet s'il vous plaît.","note":""},
    {"jp":"このきっぷはいつまでつかえますか？","romaji":"Kono kippu wa itsu made tsukaemasu ka?","fr":"Jusqu'à quand ce billet est-il valable ?","note":""},
  ],
  "のりかえ": [
    {"jp":"きょうとにいくにはどこでのりかえますか？","romaji":"Kyōto ni iku ni wa doko de norikaemasu ka?","fr":"Où dois-je changer pour aller à Kyoto ?","note":""},
    {"jp":"のりかえはなんかいありますか？","romaji":"Norikae wa nankai arimasu ka?","fr":"Combien de correspondances y a-t-il ?","note":""},
    {"jp":"のりかえのじかんはじゅうぶんですか？","romaji":"Norikae no jikan wa jūbun desu ka?","fr":"Est-ce que le temps de correspondance est suffisant ?","note":""},
  ],
  "でぐち": [
    {"jp":"でぐちはどこですか？","romaji":"Deguchi wa doko desu ka?","fr":"Où est la sortie ?","note":""},
    {"jp":"みなみでぐちからでてください。","romaji":"Minami-deguchi kara dete kudasai.","fr":"Sortez par la sortie sud s'il vous plaît.","note":""},
    {"jp":"ひがしでぐちのちかくでまっています。","romaji":"Higashi-deguchi no chikaku de matte imasu.","fr":"Je vous attends près de la sortie est.","note":""},
  ],
  "いりぐち": [
    {"jp":"いりぐちはどこですか？","romaji":"Iriguchi wa doko desu ka?","fr":"Où est l'entrée ?","note":""},
    {"jp":"このいりぐちからはいれますか？","romaji":"Kono iriguchi kara hairemasu ka?","fr":"Peut-on entrer par cette entrée ?","note":""},
    {"jp":"いりぐちとでぐちはちがいます。","romaji":"Iriguchi to deguchi wa chigaimasu.","fr":"L'entrée et la sortie sont différentes.","note":""},
  ],
  "みぎ": [
    {"jp":"みぎにまがってください。","romaji":"Migi ni magatte kudasai.","fr":"Tournez à droite s'il vous plaît.","note":""},
    {"jp":"みぎてにコンビニがみえます。","romaji":"Migite ni konbini ga miemasu.","fr":"Vous verrez un konbini sur votre droite.","note":""},
    {"jp":"つぎのかどをみぎにまがると、えきがあります。","romaji":"Tsugi no kado o migi ni magaru to, eki ga arimasu.","fr":"Si vous tournez à droite au prochain coin, il y a la gare.","note":""},
  ],
  "ひだり": [
    {"jp":"ひだりにまがってください。","romaji":"Hidari ni magatte kudasai.","fr":"Tournez à gauche s'il vous plaît.","note":""},
    {"jp":"ひだりてにおてらがみえます。","romaji":"Hidarite ni otera ga miemasu.","fr":"Vous verrez un temple sur votre gauche.","note":""},
    {"jp":"みぎですか、ひだりですか？","romaji":"Migi desu ka, hidari desu ka?","fr":"C'est à droite ou à gauche ?","note":""},
  ],
  "まっすぐ": [
    {"jp":"まっすぐいってください。","romaji":"Massugu itte kudasai.","fr":"Allez tout droit s'il vous plaît.","note":""},
    {"jp":"このみちをまっすぐいくとえきにつきます。","romaji":"Kono michi o massugu iku to eki ni tsukimasu.","fr":"Si vous allez tout droit sur cette route, vous arriverez à la gare.","note":""},
    {"jp":"まっすぐじゅっぷんぐらいあるきます。","romaji":"Massugu juppun gurai arukimasu.","fr":"Vous marchez tout droit pendant environ 10 minutes.","note":""},
  ],
  "ちかてつ": [
    {"jp":"ちかてつのえきはどこですか？","romaji":"Chikatetsu no eki wa doko desu ka?","fr":"Où est la station de métro ?","note":""},
    {"jp":"ちかてつでしぶやまでいけますか？","romaji":"Chikatetsu de Shibuya made ikemasu ka?","fr":"Puis-je aller à Shibuya en métro ?","note":""},
    {"jp":"ちかてつはでんしゃよりやすいですか？","romaji":"Chikatetsu wa densha yori yasui desu ka?","fr":"Le métro est-il moins cher que le train ?","note":""},
  ],
  "〜はどこですか": [
    {"jp":"すみません、トイレはどこですか？","romaji":"Sumimasen, toire wa doko desu ka?","fr":"Excusez-moi, où sont les toilettes ?","note":"Structure universelle : [lieu/chose] + はどこですか"},
    {"jp":"すみません、しんかんせんのホームはどこですか？","romaji":"Sumimasen, shinkansen no hōmu wa doko desu ka?","fr":"Excusez-moi, où est le quai du Shinkansen ?","note":""},
    {"jp":"ちかくにATMはどこですか？","romaji":"Chikaku ni ATM wa doko desu ka?","fr":"Où y a-t-il un distributeur de billets près d'ici ?","note":""},
  ],
  "〜にいきたいです": [
    {"jp":"きんかくじにいきたいです。どのバスにのればいいですか？","romaji":"Kinkakuji ni ikitai desu. Dono basu ni noreba ii desu ka?","fr":"Je veux aller au Kinkakuji. Quel bus dois-je prendre ?","note":""},
    {"jp":"おんせんにいきたいです。このへんにありますか？","romaji":"Onsen ni ikitai desu. Kono hen ni arimasu ka?","fr":"Je veux aller aux sources thermales. Y en a-t-il par ici ?","note":""},
    {"jp":"なりたくうこうにいきたいです。いちばんはやいのはなんですか？","romaji":"Narita kūkō ni ikitai desu. Ichiban hayai no wa nan desu ka?","fr":"Je veux aller à l'aéroport de Narita. Quel est le plus rapide ?","note":""},
  ],
  "このでんしゃは〜にとまりますか": [
    {"jp":"このでんしゃはしんじゅくにとまりますか？","romaji":"Kono densha wa Shinjuku ni tomarimasu ka?","fr":"Ce train s'arrête-t-il à Shinjuku ?","note":""},
    {"jp":"このでんしゃはあきはばらにとまりますか？のりかえはいりますか？","romaji":"Kono densha wa Akihabara ni tomarimasu ka? Norikae wa irimasu ka?","fr":"Ce train s'arrête-t-il à Akihabara ? Faut-il changer ?","note":""},
    {"jp":"このしんかんせんはなごやにとまりますか？","romaji":"Kono shinkansen wa Nagoya ni tomarimasu ka?","fr":"Ce Shinkansen s'arrête-t-il à Nagoya ?","note":""},
  ],
  "きっぷをいちまいください": [
    {"jp":"きっぷをいちまいください。しぶやまでいくらですか？","romaji":"Kippu o ichimai kudasai. Shibuya made ikura desu ka?","fr":"Un billet s'il vous plaît. Combien jusqu'à Shibuya ?","note":""},
    {"jp":"おとなのきっぷをいちまいください。","romaji":"Otona no kippu o ichimai kudasai.","fr":"Un billet adulte s'il vous plaît.","note":""},
    {"jp":"きょうとゆきのしんかんせんのきっぷをいちまいください。","romaji":"Kyōto-yuki no shinkansen no kippu o ichimai kudasai.","fr":"Un billet de Shinkansen pour Kyoto s'il vous plaît.","note":""},
  ],
  "つぎのえきはどこですか": [
    {"jp":"すみません、つぎのえきはどこですか？","romaji":"Sumimasen, tsugi no eki wa doko desu ka?","fr":"Excusez-moi, où est la prochaine station ?","note":""},
    {"jp":"つぎのえきはなんていいますか？","romaji":"Tsugi no eki wa nante iimasu ka?","fr":"Comment s'appelle la prochaine station ?","note":""},
    {"jp":"つぎのえきでおりればいいですか？","romaji":"Tsugi no eki de orireba ii desu ka?","fr":"Est-ce que je dois descendre à la prochaine station ?","note":""},
  ],
  "なんじにでますか": [
    {"jp":"このでんしゃはなんじにでますか？","romaji":"Kono densha wa nanji ni demasu ka?","fr":"À quelle heure part ce train ?","note":""},
    {"jp":"つぎのバスはなんじにでますか？","romaji":"Tsugi no basu wa nanji ni demasu ka?","fr":"À quelle heure part le prochain bus ?","note":""},
    {"jp":"しんかんせんはなんじにでますか？おくれていますか？","romaji":"Shinkansen wa nanji ni demasu ka? Okurete imasu ka?","fr":"À quelle heure part le Shinkansen ? A-t-il du retard ?","note":""},
  ],
  "まよいました": [
    {"jp":"まよいました。すみません、ここはどこですか？","romaji":"Mayoimashita. Sumimasen, koko wa doko desu ka?","fr":"Je me suis perdu(e). Excusez-moi, où suis-je ?","note":""},
    {"jp":"まよいました。えきにいきたいです。","romaji":"Mayoimashita. Eki ni ikitai desu.","fr":"Je me suis perdu(e). Je veux aller à la gare.","note":""},
    {"jp":"まよいました。このちずをみてください。","romaji":"Mayoimashita. Kono chizu o mite kudasai.","fr":"Je me suis perdu(e). Regardez cette carte s'il vous plaît.","note":""},
  ],
  "〜いきのじゅうじかんをおしえてください": [
    {"jp":"きょうとゆきのしゅっぱつじかんをおしえてください。","romaji":"Kyōto-yuki no shuppatsu-jikan o oshiete kudasai.","fr":"Donnez-moi l'heure de départ pour Kyoto s'il vous plaît.","note":""},
    {"jp":"なりたくうこうゆきのじかんをおしえてください。","romaji":"Narita kūkō-yuki no jikan o oshiete kudasai.","fr":"Donnez-moi les horaires pour l'aéroport de Narita s'il vous plaît.","note":""},
    {"jp":"おおさかゆきのしんかんせんのじかんをおしえてください。","romaji":"Ōsaka-yuki no shinkansen no jikan o oshiete kudasai.","fr":"Donnez-moi les horaires du Shinkansen pour Osaka s'il vous plaît.","note":""},
  ],
  "この〜のかいすうけんはかえますか": [
    {"jp":"このちかてつのかいすうけんはかえますか？","romaji":"Kono chikatetsu no kaisūken wa kaemasu ka?","fr":"Puis-je acheter un carnet pour ce métro ?","note":""},
    {"jp":"このバスのかいすうけんはかえますか？","romaji":"Kono basu no kaisūken wa kaemasu ka?","fr":"Puis-je acheter un carnet pour ce bus ?","note":""},
    {"jp":"かいすうけんよりICカードのほうがべんりですか？","romaji":"Kaisūken yori IC kādo no hō ga benri desu ka?","fr":"La carte IC est-elle plus pratique que le carnet ?","note":"Suica / Pasmo sont les cartes IC les plus utilisées."},
  ],
  "おくれはどのくらいですか": [
    {"jp":"すみません、でんしゃのおくれはどのくらいですか？","romaji":"Sumimasen, densha no okure wa dono kurai desu ka?","fr":"Excusez-moi, quel est le retard du train ?","note":""},
    {"jp":"しんかんせんのおくれはどのくらいですか？のりかえにまにあいますか？","romaji":"Shinkansen no okure wa dono kurai desu ka? Norikae ni ma ni aimasu ka?","fr":"Quel est le retard du Shinkansen ? Vais-je rater ma correspondance ?","note":""},
    {"jp":"おくれはどのくらいですか？ひこうきがあります。","romaji":"Okure wa dono kurai desu ka? Hikōki ga arimasu.","fr":"Quel est le retard ? J'ai un avion à prendre.","note":""},
  ],
  "このへんにコインロッカーはありますか": [
    {"jp":"このへんにコインロッカーはありますか？にもつをあずけたいです。","romaji":"Kono hen ni koin-rokkā wa arimasu ka? Nimotsu o azuketai desu.","fr":"Y a-t-il des consignes par ici ? Je veux laisser mes bagages.","note":""},
    {"jp":"えきにコインロッカーはありますか？おおきいスーツケースがあります。","romaji":"Eki ni koin-rokkā wa arimasu ka? Ōkii sūtsukēsu ga arimasu.","fr":"Y a-t-il des consignes à la gare ? J'ai une grande valise.","note":""},
    {"jp":"コインロッカーはどのサイズがあいていますか？","romaji":"Koin-rokkā wa dono saizu ga aite imasu ka?","fr":"Quelle taille de consigne est disponible ?","note":""},
  ],
  "じゆうせきですか、していせきですか": [
    {"jp":"このしゃりょうはじゆうせきですか、していせきですか？","romaji":"Kono sharyō wa jiyū-seki desu ka, shitei-seki desu ka?","fr":"Ce wagon est-il à places libres ou réservées ?","note":""},
    {"jp":"じゆうせきにのりたいです。このでんしゃはじゆうせきがありますか？","romaji":"Jiyū-seki ni noritai desu. Kono densha wa jiyū-seki ga arimasu ka?","fr":"Je veux prendre une place libre. Ce train a-t-il des places libres ?","note":""},
    {"jp":"じゆうせきよりしていせきのほうがあんしんです。","romaji":"Jiyū-seki yori shitei-seki no hō ga anshin desu.","fr":"Les places réservées sont plus rassurantes que les places libres.","note":""},
  ],
  "ホテル": [
    {"jp":"このホテルはどこですか？ちずをみせてください。","romaji":"Kono hoteru wa doko desu ka? Chizu o misete kudasai.","fr":"Où est cet hôtel ? Montrez-moi la carte s'il vous plaît.","note":""},
    {"jp":"このホテルにはおんせんがありますか？","romaji":"Kono hoteru ni wa onsen ga arimasu ka?","fr":"Cet hôtel a-t-il des sources thermales ?","note":""},
    {"jp":"ホテルのチェックインはなんじからですか？","romaji":"Hoteru no chekku-in wa nanji kara desu ka?","fr":"À partir de quelle heure est le check-in de l'hôtel ?","note":""},
  ],
  "りょかん": [
    {"jp":"りょかんにとまりたいです。ゆかたはありますか？","romaji":"Ryokan ni tomaritai desu. Yukata wa arimasu ka?","fr":"Je veux séjourner dans un ryokan. Y a-t-il des yukatas ?","note":"Le yukata (kimono léger) est fourni dans les ryokans."},
    {"jp":"このりょかんのおんせんはなんじからなんじまでですか？","romaji":"Kono ryokan no onsen wa nanji kara nanji made desu ka?","fr":"De quelle heure à quelle heure les bains thermaux de ce ryokan sont-ils ouverts ?","note":""},
    {"jp":"りょかんでかいせきりょうりをたべたいです。","romaji":"Ryokan de kaiseki ryōri o tabetai desu.","fr":"Je veux manger la cuisine kaiseki dans un ryokan.","note":""},
  ],
  "へや": [
    {"jp":"へやをみせてもらえますか？","romaji":"Heya o misete moraemasu ka?","fr":"Pourriez-vous me montrer la chambre ?","note":""},
    {"jp":"しずかなへやをおねがいします。","romaji":"Shizuka na heya o onegaishimasu.","fr":"Une chambre calme s'il vous plaît.","note":""},
    {"jp":"このへやはこうそうかいですか？けしきがみたいです。","romaji":"Kono heya wa kōsō-kai desu ka? Keshiki ga mitai desu.","fr":"Cette chambre est-elle à un étage élevé ? Je veux voir le paysage.","note":""},
  ],
  "かぎ": [
    {"jp":"かぎをなくしました。あたらしいかぎをもらえますか？","romaji":"Kagi o nakushimashita. Atarashii kagi o moraemasu ka?","fr":"J'ai perdu ma clé. Puis-je en avoir une nouvelle ?","note":""},
    {"jp":"かぎのひらきかたをおしえてください。","romaji":"Kagi no hirakikata o oshiete kudasai.","fr":"Montrez-moi comment ouvrir avec cette clé s'il vous plaît.","note":""},
    {"jp":"かぎをへやにわすれました。","romaji":"Kagi o heya ni wasuremashita.","fr":"J'ai oublié ma clé dans la chambre.","note":""},
  ],
  "よやく": [
    {"jp":"よやくがあります。たなかともうします。","romaji":"Yoyaku ga arimasu. Tanaka to mōshimasu.","fr":"J'ai une réservation. Je m'appelle Tanaka.","note":""},
    {"jp":"よやくをしたいのですが、あきはありますか？","romaji":"Yoyaku o shitai no desu ga, aki wa arimasu ka?","fr":"Je voudrais réserver, avez-vous de la disponibilité ?","note":""},
    {"jp":"よやくをかくにんしてもらえますか？","romaji":"Yoyaku o kakunin shite moraemasu ka?","fr":"Pourriez-vous confirmer ma réservation ?","note":""},
  ],
  "チェックイン": [
    {"jp":"チェックインをおねがいします。よやくしたピエールです。","romaji":"Chekku-in o onegaishimasu. Yoyaku shita Piēru desu.","fr":"Je voudrais faire mon check-in. J'ai une réservation au nom de Pierre.","note":""},
    {"jp":"チェックインはなんじからできますか？","romaji":"Chekku-in wa nanji kara dekimasu ka?","fr":"À partir de quelle heure puis-je faire le check-in ?","note":""},
    {"jp":"はやめにチェックインできますか？にもつがおもいです。","romaji":"Hayame ni chekku-in dekimasu ka? Nimotsu ga omoi desu.","fr":"Puis-je faire un check-in anticipé ? J'ai des bagages lourds.","note":""},
  ],
  "チェックアウト": [
    {"jp":"チェックアウトをおねがいします。","romaji":"Chekku-auto o onegaishimasu.","fr":"Je voudrais faire mon check-out s'il vous plaît.","note":""},
    {"jp":"チェックアウトはなんじまでですか？","romaji":"Chekku-auto wa nanji made desu ka?","fr":"Jusqu'à quelle heure est le check-out ?","note":""},
    {"jp":"チェックアウトのまえにあさごはんをたべられますか？","romaji":"Chekku-auto no mae ni asagohan o taberaremasu ka?","fr":"Puis-je prendre le petit-déjeuner avant le check-out ?","note":""},
  ],
  "おふろ": [
    {"jp":"おふろはどこですか？","romaji":"Ofuro wa doko desu ka?","fr":"Où sont les bains ?","note":""},
    {"jp":"おふろのつかいかたをおしえてください。","romaji":"Ofuro no tsukaikata o oshiete kudasai.","fr":"Expliquez-moi comment utiliser le bain s'il vous plaît.","note":""},
    {"jp":"おふろにゆっくりつかりたいです。","romaji":"Ofuro ni yukkuri tsukari tai desu.","fr":"Je veux me détendre longtemps dans le bain.","note":"つかる = s'immerger dans l'eau du bain."},
  ],
  "おんせん": [
    {"jp":"おんせんにはいりたいです。タオルはかしてもらえますか？","romaji":"Onsen ni hairitai desu. Taoru wa kashite moraemasu ka?","fr":"Je veux aller aux sources thermales. Peut-on me prêter une serviette ?","note":""},
    {"jp":"このおんせんはそとゆですか？","romaji":"Kono onsen wa rotenburo desu ka?","fr":"Ces sources thermales sont-elles en plein air ?","note":"ろてんぶろ = bain en plein air."},
    {"jp":"おんせんにいれるまえに、からだをあらってください。","romaji":"Onsen ni hairu mae ni, karada o aratte kudasai.","fr":"Avant d'entrer dans les sources thermales, lavez-vous le corps.","note":"Règle fondamentale des onsen au Japon."},
  ],
  "あさごはん": [
    {"jp":"あさごはんはついていますか？","romaji":"Asagohan wa tsuite imasu ka?","fr":"Le petit-déjeuner est-il inclus ?","note":""},
    {"jp":"あさごはんはなんじからですか？","romaji":"Asagohan wa nanji kara desu ka?","fr":"À partir de quelle heure est le petit-déjeuner ?","note":""},
    {"jp":"にほんしきのあさごはんをたべたいです。","romaji":"Nihon-shiki no asagohan o tabetai desu.","fr":"Je veux prendre le petit-déjeuner à la japonaise.","note":""},
  ],
  "こんばん": [
    {"jp":"こんばんはなにかよていがありますか？","romaji":"Konban wa nanika yotei ga arimasu ka?","fr":"Avez-vous des projets ce soir ?","note":""},
    {"jp":"こんばんのよしょくはどこがおすすめですか？","romaji":"Konban no yūshoku wa doko ga osusume desu ka?","fr":"Où recommandez-vous pour dîner ce soir ?","note":""},
    {"jp":"こんばんはよるおそくにかえります。","romaji":"Konban wa yoru osoku ni kaerimasu.","fr":"Je rentrerai tard ce soir.","note":""},
  ],
  "いっぱく": [
    {"jp":"いっぱくおねがいします。おとなふたりです。","romaji":"Ippaku onegaishimasu. Otona futari desu.","fr":"Une nuit s'il vous plaît. Pour deux adultes.","note":""},
    {"jp":"いっぱくいくらですか？あさごはんつきですか？","romaji":"Ippaku ikura desu ka? Asagohan-tsuki desu ka?","fr":"Combien coûte une nuit ? Le petit-déjeuner est-il inclus ?","note":""},
    {"jp":"いっぱくだけですが、おんせんにもはいれますか？","romaji":"Ippaku dake desu ga, onsen ni mo hairemasu ka?","fr":"Ce n'est qu'une nuit, mais puis-je aussi utiliser les sources thermales ?","note":""},
  ],
  "よやくがあります": [
    {"jp":"よやくがあります。マルタンともうします。","romaji":"Yoyaku ga arimasu. Marutan to mōshimasu.","fr":"J'ai une réservation. Je m'appelle Martin.","note":""},
    {"jp":"よやくがあります。かくにんしてもらえますか？","romaji":"Yoyaku ga arimasu. Kakunin shite moraemasu ka?","fr":"J'ai une réservation. Pourriez-vous la vérifier ?","note":""},
    {"jp":"よやくがあります。さんぱくよていです。","romaji":"Yoyaku ga arimasu. Sanpaku yotei desu.","fr":"J'ai une réservation. Je prévois trois nuits.","note":""},
  ],
  "へやをいちまよやくしています": [
    {"jp":"へやをいちまよやくしています。ダブルルームです。","romaji":"Heya o ichima yoyaku shite imasu. Daburu rūmu desu.","fr":"J'ai réservé une chambre. C'est une chambre double.","note":""},
    {"jp":"へやをいちまよやくしています。おとなふたりです。","romaji":"Heya o ichima yoyaku shite imasu. Otona futari desu.","fr":"J'ai réservé une chambre. Pour deux adultes.","note":""},
    {"jp":"へやをいちまよやくしています。さんがつじゅうごにちからです。","romaji":"Heya o ichima yoyaku shite imasu. Sangatsu jūgonichi kara desu.","fr":"J'ai réservé une chambre. À partir du 15 mars.","note":""},
  ],
  "チェックインはなんじですか": [
    {"jp":"チェックインはなんじですか？はやめにつきます。","romaji":"Chekku-in wa nanji desu ka? Hayame ni tsukimasu.","fr":"À quelle heure est le check-in ? J'arriverai tôt.","note":""},
    {"jp":"チェックインはなんじですか？それまでにもつをあずかってもらえますか？","romaji":"Chekku-in wa nanji desu ka? Soremade ni motsu o azukatte moraemasu ka?","fr":"À quelle heure est le check-in ? Pouvez-vous garder mes bagages jusque-là ?","note":""},
    {"jp":"チェックインはなんじですか？ひこうきがおくれています。","romaji":"Chekku-in wa nanji desu ka? Hikōki ga okurete imasu.","fr":"À quelle heure est le check-in ? Mon avion a du retard.","note":""},
  ],
  "インターネットはつかえますか": [
    {"jp":"インターネットはつかえますか？パスワードをおしえてください。","romaji":"Intānetto wa tsukaemasu ka? Pasuwādo o oshiete kudasai.","fr":"Puis-je utiliser internet ? Donnez-moi le mot de passe s'il vous plaît.","note":""},
    {"jp":"むりょうのインターネットはつかえますか？","romaji":"Muryō no intānetto wa tsukaemasu ka?","fr":"Puis-je utiliser internet gratuitement ?","note":""},
    {"jp":"インターネットはつかえますか？つながりません。","romaji":"Intānetto wa tsukaemasu ka? Tsunagarimasen.","fr":"Internet est-il disponible ? Je n'arrive pas à me connecter.","note":""},
  ],
  "おんせんはどこですか": [
    {"jp":"おんせんはどこですか？なんじからつかえますか？","romaji":"Onsen wa doko desu ka? Nanji kara tsukaemasu ka?","fr":"Où sont les sources thermales ? À partir de quelle heure puis-je les utiliser ?","note":""},
    {"jp":"おんせんはどこですか？ロッカーはありますか？","romaji":"Onsen wa doko desu ka? Rokkā wa arimasu ka?","fr":"Où sont les sources thermales ? Y a-t-il des casiers ?","note":""},
    {"jp":"おんせんはどこですか？そとゆもありますか？","romaji":"Onsen wa doko desu ka? Rotenburo mo arimasu ka?","fr":"Où sont les sources thermales ? Y a-t-il aussi un bain en plein air ?","note":""},
  ],
  "もうひとばんとまれますか": [
    {"jp":"もうひとばんとまれますか？おなじへやでいいです。","romaji":"Mō hitoban tomaremasu ka? Onaji heya de ii desu.","fr":"Puis-je rester une nuit de plus ? La même chambre convient.","note":""},
    {"jp":"もうひとばんとまれますか？にほんがきにいってしまいました！","romaji":"Mō hitoban tomaremasu ka? Nihon ga ki ni itte shimaimashita!","fr":"Puis-je rester une nuit de plus ? J'ai adoré le Japon !","note":""},
    {"jp":"もうひとばんとまれますか？あしたのひこうきがキャンセルになりました。","romaji":"Mō hitoban tomaremasu ka? Ashita no hikōki ga kyanseru ni narimashita.","fr":"Puis-je rester une nuit de plus ? Mon vol de demain a été annulé.","note":""},
  ],
  "まくらをもうひとつください": [
    {"jp":"まくらをもうひとつください。かたがこっています。","romaji":"Makura o mō hitotsu kudasai. Kata ga kotte imasu.","fr":"Un oreiller supplémentaire s'il vous plaît. J'ai les épaules raides.","note":""},
    {"jp":"まくらをもうひとつとタオルをもういちまいください。","romaji":"Makura o mō hitotsu to taoru o mō ichimai kudasai.","fr":"Un oreiller supplémentaire et une serviette de plus s'il vous plaît.","note":""},
    {"jp":"まくらをもうひとつください。かたいまくらがすきです。","romaji":"Makura o mō hitotsu kudasai. Katai makura ga suki desu.","fr":"Un oreiller supplémentaire s'il vous plaît. J'aime les oreillers fermes.","note":""},
  ],
  "レイトチェックアウトはできますか": [
    {"jp":"レイトチェックアウトはできますか？ひこうきがごごです。","romaji":"Reito chekku-auto wa dekimasu ka? Hikōki ga gogo desu.","fr":"Le check-out tardif est-il possible ? Mon avion est l'après-midi.","note":""},
    {"jp":"レイトチェックアウトはできますか？りょうきんはかかりますか？","romaji":"Reito chekku-auto wa dekimasu ka? Ryōkin wa kakarimasu ka?","fr":"Le check-out tardif est-il possible ? Y a-t-il des frais ?","note":""},
    {"jp":"レイトチェックアウトはできますか？じゅうにじまでいたいです。","romaji":"Reito chekku-auto wa dekimasu ka? Jūni-ji made itai desu.","fr":"Le check-out tardif est-il possible ? Je voudrais rester jusqu'à midi.","note":""},
  ],
  "にもつをあずかってもらえますか": [
    {"jp":"チェックインまでにもつをあずかってもらえますか？","romaji":"Chekku-in made nimotsu o azukatte moraemasu ka?","fr":"Pouvez-vous garder mes bagages jusqu'au check-in ?","note":""},
    {"jp":"チェックアウトのあとで、にもつをあずかってもらえますか？","romaji":"Chekku-auto no ato de, nimotsu o azukatte moraemasu ka?","fr":"Après le check-out, pouvez-vous garder mes bagages ?","note":""},
    {"jp":"にもつをあずかってもらえますか？おおきいスーツケースがふたつあります。","romaji":"Nimotsu o azukatte moraemasu ka? Ōkii sūtsukēsu ga futatsu arimasu.","fr":"Pouvez-vous garder mes bagages ? J'ai deux grandes valises.","note":""},
  ],
  "このへやからはなみがみえますか": [
    {"jp":"このへやからはなみがみえますか？よさくらのきせつにきました。","romaji":"Kono heya kara hanami ga miemasu ka? Yoi sakura no kisetsu ni kimashita.","fr":"Peut-on voir les cerisiers depuis cette chambre ? Je suis venu(e) à la belle saison des cerisiers.","note":""},
    {"jp":"このへやからふじさんがみえますか？","romaji":"Kono heya kara Fujisan ga miemasu ka?","fr":"Peut-on voir le Mont Fuji depuis cette chambre ?","note":""},
    {"jp":"けしきのいいへやはありますか？","romaji":"Keshiki no ii heya wa arimasu ka?","fr":"Avez-vous une chambre avec une belle vue ?","note":""},
  ],
  "ルームサービスをおねがいします": [
    {"jp":"ルームサービスをおねがいします。めにゅーをみせてください。","romaji":"Rūmu sābisu o onegaishimasu. Menyū o misete kudasai.","fr":"Je voudrais le room service. Montrez-moi le menu s'il vous plaît.","note":""},
    {"jp":"ルームサービスをおねがいします。あさごはんをへやでたべたいです。","romaji":"Rūmu sābisu o onegaishimasu. Asagohan o heya de tabetai desu.","fr":"Je voudrais le room service. Je veux prendre le petit-déjeuner dans ma chambre.","note":""},
    {"jp":"ルームサービスはなんじまでありますか？","romaji":"Rūmu sābisu wa nanji made arimasu ka?","fr":"Jusqu'à quelle heure le room service est-il disponible ?","note":""},
  ],
  "クーラーのつかいかたをおしえてください": [
    {"jp":"クーラーのつかいかたをおしえてください。あついです。","romaji":"Kūrā no tsukaikata o oshiete kudasai. Atsui desu.","fr":"Expliquez-moi comment utiliser la climatisation s'il vous plaît. J'ai chaud.","note":""},
    {"jp":"クーラーのつかいかたをおしえてください。リモコンがわかりません。","romaji":"Kūrā no tsukaikata o oshiete kudasai. Rimokon ga wakarimasen.","fr":"Expliquez-moi comment utiliser la clim s'il vous plaît. Je ne comprends pas la télécommande.","note":""},
    {"jp":"クーラーをつけてもいいですか？おんどをなんどにすればいいですか？","romaji":"Kūrā o tsukete mo ii desu ka? Ondo o nando ni sureba ii desu ka?","fr":"Puis-je allumer la climatisation ? À quelle température dois-je la régler ?","note":""},
  ],
  "みせ": [
    {"jp":"このみせはなんじにあきますか？","romaji":"Kono mise wa nanji ni akimasu ka?","fr":"À quelle heure ce magasin ouvre-t-il ?","note":""},
    {"jp":"ちかくにおみやげのみせはありますか？","romaji":"Chikaku ni omiyage no mise wa arimasu ka?","fr":"Y a-t-il un magasin de souvenirs près d'ici ?","note":""},
    {"jp":"このみせはどんなものをうっていますか？","romaji":"Kono mise wa donna mono o utte imasu ka?","fr":"Qu'est-ce que ce magasin vend ?","note":""},
  ],
  "いくら": [
    {"jp":"すみません、これはいくらですか？","romaji":"Sumimasen, kore wa ikura desu ka?","fr":"Excusez-moi, combien ça coûte ?","note":""},
    {"jp":"ぜんぶでいくらですか？","romaji":"Zenbu de ikura desu ka?","fr":"Combien ça fait en tout ?","note":""},
    {"jp":"このさけはいくらですか？たかいですか？","romaji":"Kono sake wa ikura desu ka? Takai desu ka?","fr":"Combien coûte ce saké ? C'est cher ?","note":""},
  ],
  "やすい": [
    {"jp":"このみせはやすいですね！","romaji":"Kono mise wa yasui desu ne!","fr":"Ce magasin est bon marché !","note":""},
    {"jp":"もうすこしやすいのはありますか？","romaji":"Mō sukoshi yasui no wa arimasu ka?","fr":"Avez-vous quelque chose de moins cher ?","note":""},
    {"jp":"スーパーのほうがコンビニよりやすいですよ。","romaji":"Sūpā no hō ga konbini yori yasui desu yo.","fr":"Le supermarché est moins cher que le konbini.","note":""},
  ],
  "たかい": [
    {"jp":"すこしたかいですね。まけてもらえますか？","romaji":"Sukoshi takai desu ne. Makete moraemasu ka?","fr":"C'est un peu cher. Pourriez-vous faire une réduction ?","note":""},
    {"jp":"このかばんはたかすぎます。","romaji":"Kono kaban wa takasugimasu.","fr":"Ce sac est trop cher.","note":""},
    {"jp":"たかいけど、ほんものですね。かいます！","romaji":"Takai kedo, honmono desu ne. Kaimasu!","fr":"C'est cher, mais c'est authentique. Je l'achète !","note":""},
  ],
  "おみやげ": [
    {"jp":"かぞくへのおみやげをさがしています。","romaji":"Kazoku e no omiyage o sagashite imasu.","fr":"Je cherche des souvenirs pour ma famille.","note":""},
    {"jp":"にほんらしいおみやげをかいたいです。なにがいいですか？","romaji":"Nihon-rashii omiyage o kaitai desu. Nani ga ii desu ka?","fr":"Je veux acheter un souvenir typiquement japonais. Qu'est-ce qui est bien ?","note":""},
    {"jp":"このおみやげはにもつにいれてもこわれませんか？","romaji":"Kono omiyage wa nimotsu ni irete mo kowaremasen ka?","fr":"Ce souvenir ne se cassera pas si je le mets dans les bagages ?","note":""},
  ],
  "ふくろ": [
    {"jp":"ふくろはいりますか？","romaji":"Fukuro wa irimasu ka?","fr":"Avez-vous besoin d'un sac ?","note":"En Japan, les sacs plastiques sont souvent payants."},
    {"jp":"ふくろはけっこうです。マイバッグをもっています。","romaji":"Fukuro wa kekkō desu. Maibaggu o motte imasu.","fr":"Je n'ai pas besoin de sac. J'ai mon propre sac.","note":""},
    {"jp":"おおきいふくろをください。","romaji":"Ōkii fukuro o kudasai.","fr":"Un grand sac s'il vous plaît.","note":""},
  ],
  "げんきん": [
    {"jp":"げんきんでしはらいます。","romaji":"Genkin de shiharaimasu.","fr":"Je paye en espèces.","note":""},
    {"jp":"このみせはげんきんのみですか？","romaji":"Kono mise wa genkin nomi desu ka?","fr":"Ce magasin accepte-t-il seulement les espèces ?","note":""},
    {"jp":"ATMでげんきんをひきだしてきます。","romaji":"ATM de genkin o hikidashite kimasu.","fr":"Je vais retirer des espèces à un distributeur.","note":""},
  ],
  "クレジットカード": [
    {"jp":"クレジットカードはつかえますか？","romaji":"Kurejitto kādo wa tsukaemasu ka?","fr":"Puis-je payer par carte de crédit ?","note":""},
    {"jp":"クレジットカードでおねがいします。","romaji":"Kurejitto kādo de onegaishimasu.","fr":"Par carte de crédit s'il vous plaît.","note":""},
    {"jp":"VISAのクレジットカードはつかえますか？","romaji":"VISA no kurejitto kādo wa tsukaemasu ka?","fr":"Puis-je utiliser une carte Visa ?","note":""},
  ],
  "レシート": [
    {"jp":"レシートをください。","romaji":"Reshīto o kudasai.","fr":"Donnez-moi un reçu s'il vous plaît.","note":""},
    {"jp":"レシートはいりません。","romaji":"Reshīto wa irimasen.","fr":"Je n'ai pas besoin du reçu.","note":""},
    {"jp":"このレシートはめんぜいのてつづきにつかえますか？","romaji":"Kono reshīto wa menzei no tetsuzuki ni tsukaemasu ka?","fr":"Ce reçu peut-il être utilisé pour la procédure de détaxe ?","note":""},
  ],
  "へいてん": [
    {"jp":"このみせはなんじにへいてんしますか？","romaji":"Kono mise wa nanji ni heiten shimasu ka?","fr":"À quelle heure ce magasin ferme-t-il ?","note":""},
    {"jp":"もうへいてんしました。あしたまたきてください。","romaji":"Mō heiten shimashita. Ashita mata kite kudasai.","fr":"Nous avons déjà fermé. Revenez demain s'il vous plaît.","note":""},
    {"jp":"へいてんじかんがせまっています。いそいでください。","romaji":"Heiten-jikan ga sematte imasu. Isoide kudasai.","fr":"L'heure de fermeture approche. Dépêchez-vous.","note":""},
  ],
  "かいてん": [
    {"jp":"このみせはなんじにかいてんしますか？","romaji":"Kono mise wa nanji ni kaiten shimasu ka?","fr":"À quelle heure ce magasin ouvre-t-il ?","note":""},
    {"jp":"かいてんじかんのまえからならんでいます。","romaji":"Kaiten-jikan no mae kara narande imasu.","fr":"Je fais la queue avant l'ouverture.","note":""},
    {"jp":"かいてんしていますか？","romaji":"Kaiten shite imasu ka?","fr":"Êtes-vous ouvert ?","note":""},
  ],
  "ざっか": [
    {"jp":"このへんにざっかやはありますか？","romaji":"Kono hen ni zakkaya wa arimasu ka?","fr":"Y a-t-il un bazar / magasin de bric-à-brac par ici ?","note":""},
    {"jp":"ざっかやでかわいいにほんのざっかをかいました。","romaji":"Zakkaya de kawaii Nihon no zakka o kaimashita.","fr":"J'ai acheté de jolis articles japonais dans un bazar.","note":""},
    {"jp":"ざっかはどこでうっていますか？","romaji":"Zakka wa doko de utte imasu ka?","fr":"Où vend-on ce genre d'articles ?","note":""},
  ],
  "ぜいこみ": [
    {"jp":"このねだんはぜいこみですか？","romaji":"Kono nedan wa zeikomi desu ka?","fr":"Ce prix est-il TTC ?","note":""},
    {"jp":"ぜいこみでごせんえんです。","romaji":"Zeikomi de gosen-en desu.","fr":"C'est 5000 yens TTC.","note":""},
    {"jp":"ぜいこみのねだんをおしえてください。","romaji":"Zeikomi no nedan o oshiete kudasai.","fr":"Indiquez-moi le prix TTC s'il vous plaît.","note":""},
  ],
  "これはいくらですか": [
    {"jp":"すみません、これはいくらですか？","romaji":"Sumimasen, kore wa ikura desu ka?","fr":"Excusez-moi, combien coûte ceci ?","note":""},
    {"jp":"このさけはいくらですか？たかいですか？","romaji":"Kono sake wa ikura desu ka? Takai desu ka?","fr":"Combien coûte ce saké ? C'est cher ?","note":""},
    {"jp":"これはいくらですか？えんではらえますか？","romaji":"Kore wa ikura desu ka? En de haraemasu ka?","fr":"Combien ça coûte ? Puis-je payer en yens ?","note":""},
  ],
  "もうすこしやすくなりますか": [
    {"jp":"もうすこしやすくなりますか？まとめてかいます。","romaji":"Mō sukoshi yasuku narimasu ka? Matomete kaimasu.","fr":"Pourriez-vous faire un petit geste ? J'en achète plusieurs.","note":""},
    {"jp":"もうすこしやすくなりますか？さいごのいっこです。","romaji":"Mō sukoshi yasuku narimasu ka? Saigo no ikko desu.","fr":"Pourriez-vous faire un geste ? C'est le dernier.","note":""},
    {"jp":"もうすこしやすくなりますか？げんきんではらいます。","romaji":"Mō sukoshi yasuku narimasu ka? Genkin de haraimasu.","fr":"Pourriez-vous baisser un peu ? Je paye en espèces.","note":""},
  ],
  "ちがうサイズはありますか": [
    {"jp":"ちがうサイズはありますか？これはおおきすぎます。","romaji":"Chigau saizu wa arimasu ka? Kore wa ōkisugimasu.","fr":"Avez-vous une autre taille ? Celui-ci est trop grand.","note":""},
    {"jp":"Mサイズはありますか？","romaji":"M-saizu wa arimasu ka?","fr":"Avez-vous une taille M ?","note":""},
    {"jp":"ちがうサイズはありますか？ためしにきてみていいですか？","romaji":"Chigau saizu wa arimasu ka? Tameshi ni kite mite ii desu ka?","fr":"Avez-vous une autre taille ? Puis-je l'essayer ?","note":""},
  ],
  "みているだけです": [
    {"jp":"みているだけです。ありがとうございます。","romaji":"Mite iru dake desu. Arigatō gozaimasu.","fr":"Je regarde seulement. Merci.","note":"Phrase indispensable pour écarter les vendeurs trop insistants."},
    {"jp":"みているだけです。なにかあったらよびます。","romaji":"Mite iru dake desu. Nanika attara yobimasu.","fr":"Je regarde seulement. Je vous appellerai si besoin.","note":""},
    {"jp":"すみません、みているだけです。","romaji":"Sumimasen, mite iru dake desu.","fr":"Excusez-moi, je ne fais que regarder.","note":""},
  ],
  "つつんでもらえますか": [
    {"jp":"おみやげようにつつんでもらえますか？","romaji":"Omiyage-yō ni tsutsunde moraemasu ka?","fr":"Pourriez-vous l'emballer en cadeau ?","note":""},
    {"jp":"きれいにつつんでもらえますか？プレゼントです。","romaji":"Kirei ni tsutsunde moraemasu ka? Purezento desu.","fr":"Pourriez-vous l'emballer joliment ? C'est un cadeau.","note":""},
    {"jp":"われものなのでていねいにつつんでもらえますか？","romaji":"Waremono na no de teinei ni tsutsunde moraemasu ka?","fr":"C'est fragile, pourriez-vous l'emballer soigneusement ?","note":""},
  ],
  "カードでしはらえますか": [
    {"jp":"カードでしはらえますか？げんきんがたりません。","romaji":"Kādo de shiharaemasu ka? Genkin ga tarimasen.","fr":"Puis-je payer par carte ? Je n'ai pas assez d'espèces.","note":""},
    {"jp":"クレジットカードでしはらえますか？","romaji":"Kurejitto kādo de shiharaemasu ka?","fr":"Puis-je payer par carte de crédit ?","note":""},
    {"jp":"カードでしはらえますか？VISAはつかえますか？","romaji":"Kādo de shiharaemasu ka? VISA wa tsukaemasu ka?","fr":"Puis-je payer par carte ? Visa est-il accepté ?","note":""},
  ],
  "めんぜいてんはどこですか": [
    {"jp":"めんぜいてんはどこですか？がいこくじんです。","romaji":"Menzei-ten wa doko desu ka? Gaikokujin desu.","fr":"Où est la boutique hors-taxes ? Je suis étranger(ère).","note":""},
    {"jp":"このデパートにめんぜいてんはありますか？","romaji":"Kono depāto ni menzei-ten wa arimasu ka?","fr":"Y a-t-il une boutique hors-taxes dans ce grand magasin ?","note":""},
    {"jp":"めんぜいてんはなんかいですか？","romaji":"Menzei-ten wa nankai desu ka?","fr":"À quel étage est la boutique hors-taxes ?","note":""},
  ],
  "めんぜいのてつづきをおしえてください": [
    {"jp":"めんぜいのてつづきをおしえてください。パスポートはもっています。","romaji":"Menzei no tetsuzuki o oshiete kudasai. Pasupōto wa motte imasu.","fr":"Expliquez-moi la procédure de détaxe. J'ai mon passeport.","note":""},
    {"jp":"めんぜいのてつづきをおしえてください。はじめてです。","romaji":"Menzei no tetsuzuki o oshiete kudasai. Hajimete desu.","fr":"Expliquez-moi la procédure de détaxe. C'est la première fois.","note":""},
    {"jp":"めんぜいにはいくらいじょうかわなければなりませんか？","romaji":"Menzei ni wa ikura ijō kawanakereba narimasen ka?","fr":"Quel est le montant minimum d'achat pour la détaxe ?","note":""},
  ],
  "こちらをはこんでもらえますか": [
    {"jp":"おおきいですね。こちらをはこんでもらえますか？","romaji":"Ōkii desu ne. Kochira o hakonde moraemasu ka?","fr":"C'est grand. Pourriez-vous me livrer ça ?","note":""},
    {"jp":"ホテルまでこちらをはこんでもらえますか？","romaji":"Hoteru made kochira o hakonde moraemasu ka?","fr":"Pourriez-vous livrer ça à mon hôtel ?","note":""},
    {"jp":"くうこうまでこちらをはこんでもらえますか？","romaji":"Kūkō made kochira o hakonde moraemasu ka?","fr":"Pourriez-vous envoyer ça à l'aéroport ?","note":""},
  ],
  "〜のかいいんカードはありますか": [
    {"jp":"このデパートのかいいんカードはありますか？","romaji":"Kono depāto no kaiin kādo wa arimasu ka?","fr":"Avez-vous une carte fidélité pour ce grand magasin ?","note":""},
    {"jp":"がいこくじんでもかいいんカードをつくれますか？","romaji":"Gaikokujin demo kaiin kādo o tsukuremasu ka?","fr":"Les étrangers peuvent-ils aussi faire une carte de fidélité ?","note":""},
    {"jp":"かいいんカードをもっていたらわりびきになりますか？","romaji":"Kaiin kādo o motte itara waribiki ni narimasu ka?","fr":"Ai-je une réduction si j'ai la carte fidélité ?","note":""},
  ],
  "おかいあげありがとうございます": [
    {"jp":"おかいあげありがとうございます。またおこしください。","romaji":"Okai-age arigatō gozaimasu. Mata okoshi kudasai.","fr":"Merci de votre achat. Revenez nous voir.","note":"Formule standard des vendeurs japonais."},
    {"jp":"おかいあげありがとうございます。レシートはこちらです。","romaji":"Okai-age arigatō gozaimasu. Reshīto wa kochira desu.","fr":"Merci de votre achat. Voici votre reçu.","note":""},
    {"jp":"まいどおかいあげありがとうございます。","romaji":"Maido okai-age arigatō gozaimasu.","fr":"Merci toujours de vos achats.","note":"まいど = \"chaque fois\", formule de commerçant fidélisateur."},
  ],
  "いたい": [
    {"jp":"あたまがいたいです。くすりはありますか？","romaji":"Atama ga itai desu. Kusuri wa arimasu ka?","fr":"J'ai mal à la tête. Avez-vous des médicaments ?","note":"[partie du corps] + がいたいです = j'ai mal à..."},
    {"jp":"ここがいたいです。みてもらえますか？","romaji":"Koko ga itai desu. Mite moraemasu ka?","fr":"J'ai mal ici. Pourriez-vous regarder ?","note":""},
    {"jp":"いたい！ころんでしまいました。","romaji":"Itai! Koronde shimaimashita.","fr":"Aïe ! Je suis tombé(e).","note":""},
  ],
  "びょういん": [
    {"jp":"ちかくのびょういんはどこですか？","romaji":"Chikaku no byōin wa doko desu ka?","fr":"Où est l'hôpital le plus proche ?","note":""},
    {"jp":"びょういんにいきたいです。タクシーをよんでください。","romaji":"Byōin ni ikitai desu. Takushī o yonde kudasai.","fr":"Je veux aller à l'hôpital. Appelez un taxi s'il vous plaît.","note":""},
    {"jp":"このびょういんではなしのわかるいしゃはいますか？","romaji":"Kono byōin de hanashi no wakaru isha wa imasu ka?","fr":"Y a-t-il un médecin qui parle ma langue dans cet hôpital ?","note":""},
  ],
  "くすり": [
    {"jp":"このくすりをのんでもいいですか？アレルギーがあります。","romaji":"Kono kusuri o nonde mo ii desu ka? Arerugī ga arimasu.","fr":"Puis-je prendre ce médicament ? J'ai des allergies.","note":""},
    {"jp":"ちかくにくすりやはありますか？","romaji":"Chikaku ni kusuriya wa arimasu ka?","fr":"Y a-t-il une pharmacie près d'ici ?","note":""},
    {"jp":"ずつうのくすりをください。","romaji":"Zutsū no kusuri o kudasai.","fr":"Un médicament contre le mal de tête s'il vous plaît.","note":""},
  ],
  "きゅうきゅうしゃ": [
    {"jp":"きゅうきゅうしゃをよんでください！たすけて！","romaji":"Kyūkyūsha o yonde kudasai! Tasukete!","fr":"Appelez une ambulance ! Au secours !","note":"Numéro d'urgence au Japon : 119."},
    {"jp":"きゅうきゅうしゃはなんばんですか？","romaji":"Kyūkyūsha wa nanban desu ka?","fr":"Quel est le numéro des ambulances ?","note":""},
    {"jp":"きゅうきゅうしゃをよんでください。このひとがたおれました。","romaji":"Kyūkyūsha o yonde kudasai. Kono hito ga taoremashita.","fr":"Appelez une ambulance. Cette personne s'est effondrée.","note":""},
  ],
  "けいさつ": [
    {"jp":"けいさつをよんでください！どろぼうです！","romaji":"Keisatsu o yonde kudasai! Dorobō desu!","fr":"Appelez la police ! C'est un voleur !","note":"Numéro de la police au Japon : 110."},
    {"jp":"けいさつのひとにたすけてもらいたいです。","romaji":"Keisatsu no hito ni tasukete moraitai desu.","fr":"Je veux que la police m'aide.","note":""},
    {"jp":"ちかくにこうばんはありますか？","romaji":"Chikaku ni kōban wa arimasu ka?","fr":"Y a-t-il un poste de police de quartier près d'ici ?","note":""},
  ],
  "たすけて": [
    {"jp":"たすけて！さいふをぬすまれました！","romaji":"Tasukete! Saifu o nusumaremashita!","fr":"Au secours ! On m'a volé mon portefeuille !","note":""},
    {"jp":"たすけて！このひとがきゅうにたおれました！","romaji":"Tasukete! Kono hito ga kyū ni taoremashita!","fr":"Au secours ! Cette personne vient de s'effondrer !","note":""},
    {"jp":"たすけてください。まよってしまいました。","romaji":"Tasukete kudasai. Mayotte shimaimashita.","fr":"Aidez-moi s'il vous plaît. Je me suis perdu(e).","note":""},
  ],
  "ねつ": [
    {"jp":"ねつがあります。さんじゅうはちどです。","romaji":"Netsu ga arimasu. Sanjūhachi-do desu.","fr":"J'ai de la fièvre. 38 degrés.","note":""},
    {"jp":"ねつをはかってもらえますか？","romaji":"Netsu o hakatte moraemasu ka?","fr":"Pourriez-vous prendre ma température ?","note":""},
    {"jp":"こどもにねつがあります。びょういんにつれていきたいです。","romaji":"Kodomo ni netsu ga arimasu. Byōin ni tsurete ikitai desu.","fr":"Mon enfant a de la fièvre. Je veux l'emmener à l'hôpital.","note":""},
  ],
  "ずつう": [
    {"jp":"ずつうがします。くすりをください。","romaji":"Zutsū ga shimasu. Kusuri o kudasai.","fr":"J'ai mal à la tête. Donnez-moi un médicament s'il vous plaît.","note":""},
    {"jp":"ひどいずつうがします。よこになりたいです。","romaji":"Hidoi zutsū ga shimasu. Yoko ni naritai desu.","fr":"J'ai un terrible mal de tête. Je veux m'allonger.","note":""},
    {"jp":"ずつうとはきけがあります。いしゃにみてもらいたいです。","romaji":"Zutsū to hakike ga arimasu. Isha ni mite moraitai desu.","fr":"J'ai mal à la tête et des nausées. Je veux voir un médecin.","note":""},
  ],
  "きぶんがわるい": [
    {"jp":"きぶんがわるいです。すわらせてください。","romaji":"Kibun ga warui desu. Suwarasete kudasai.","fr":"Je ne me sens pas bien. Laissez-moi m'asseoir.","note":""},
    {"jp":"きぶんがわるいです。くうきをすいたいです。","romaji":"Kibun ga warui desu. Kūki o suitai desu.","fr":"Je ne me sens pas bien. Je veux prendre l'air.","note":""},
    {"jp":"きぶんがわるいのでかえります。ごめんなさい。","romaji":"Kibun ga warui no de kaerimasu. Gomen nasai.","fr":"Je rentre parce que je ne me sens pas bien. Désolé(e).","note":""},
  ],
  "アレルギー": [
    {"jp":"えびアレルギーがあります。たべられません。","romaji":"Ebi arerugī ga arimasu. Taberaremasen.","fr":"J'ai une allergie aux crevettes. Je ne peux pas en manger.","note":""},
    {"jp":"アレルギーがあるので、ざいりょうをかくにんしてください。","romaji":"Arerugī ga aru no de, zairyō o kakunin shite kudasai.","fr":"J'ai des allergies, veuillez vérifier les ingrédients.","note":""},
    {"jp":"このくすりにアレルギーがあります。","romaji":"Kono kusuri ni arerugī ga arimasu.","fr":"J'ai une allergie à ce médicament.","note":""},
  ],
  "きず": [
    {"jp":"きずぐちがあります。ばんそうこうをください。","romaji":"Kizuguchi ga arimasu. Bansōkō o kudasai.","fr":"J'ai une plaie. Donnez-moi un pansement s'il vous plaît.","note":""},
    {"jp":"ころんできずができました。しょうどくしてください。","romaji":"Koronde kizu ga dekimashita. Shōdoku shite kudasai.","fr":"Je suis tombé(e) et j'ai une blessure. Désinfectez s'il vous plaît.","note":""},
    {"jp":"このきずはふかいですか？ほうたいがひつようですか？","romaji":"Kono kizu wa fukai desu ka? Hōtai ga hitsuyō desu ka?","fr":"Cette blessure est-elle profonde ? Faut-il un bandage ?","note":""},
  ],
  "はきけ": [
    {"jp":"はきけがします。よことなりたいです。","romaji":"Hakike ga shimasu. Yoko ni naritai desu.","fr":"J'ai des nausées. Je veux m'allonger.","note":""},
    {"jp":"はきけとめまいがします。","romaji":"Hakike to memai ga shimasu.","fr":"J'ai des nausées et des vertiges.","note":""},
    {"jp":"はきけがひどいです。いしゃにみてもらいたいです。","romaji":"Hakike ga hidoi desu. Isha ni mite moraitai desu.","fr":"Mes nausées sont intenses. Je veux voir un médecin.","note":""},
  ],
  "めまい": [
    {"jp":"めまいがします。すわらせてください。","romaji":"Memai ga shimasu. Suwarasete kudasai.","fr":"J'ai des vertiges. Laissez-moi m'asseoir.","note":""},
    {"jp":"めまいがひどくてたてません。","romaji":"Memai ga hidokute tatemasen.","fr":"Mes vertiges sont si intenses que je ne peux pas me lever.","note":""},
    {"jp":"めまいとはきけがあります。なつばてかもしれません。","romaji":"Memai to hakike ga arimasu. Natsubate kamo shiremasen.","fr":"J'ai des vertiges et des nausées. C'est peut-être la fatigue estivale.","note":""},
  ],
  "きゅうきゅうをよんでください": [
    {"jp":"きゅうきゅうをよんでください！きゅうにむねがいたい！","romaji":"Kyūkyū o yonde kudasai! Kyū ni mune ga itai!","fr":"Appelez le 119 ! J'ai soudainement mal à la poitrine !","note":"Au Japon, 119 = pompiers et ambulances."},
    {"jp":"きゅうきゅうをよんでください。このひとがたおれました。","romaji":"Kyūkyū o yonde kudasai. Kono hito ga taoremashita.","fr":"Appelez le 119. Cette personne s'est effondrée.","note":""},
    {"jp":"きゅうきゅうをよんでください。じゅうしょはここです。","romaji":"Kyūkyū o yonde kudasai. Jūsho wa koko desu.","fr":"Appelez le 119. L'adresse est ici.","note":""},
  ],
  "ちかくのびょういんはどこですか": [
    {"jp":"ちかくのびょういんはどこですか？きゅうびょうにんがいます。","romaji":"Chikaku no byōin wa doko desu ka? Kyūbyōnin ga imasu.","fr":"Où est l'hôpital le plus proche ? Il y a un malade.","note":""},
    {"jp":"ちかくのびょういんはどこですか？こどもがねつをだしています。","romaji":"Chikaku no byōin wa doko desu ka? Kodomo ga netsu o dashite imasu.","fr":"Où est l'hôpital le plus proche ? Mon enfant a de la fièvre.","note":""},
    {"jp":"ちかくにびょういんはありますか？よるもあいていますか？","romaji":"Chikaku ni byōin wa arimasu ka? Yoru mo aite imasu ka?","fr":"Y a-t-il un hôpital près d'ici ? Est-il ouvert la nuit aussi ?","note":""},
  ],
  "にほんごのわかるいしゃはいますか": [
    {"jp":"えいごのわかるいしゃはいますか？にほんごがよくわかりません。","romaji":"Eigo no wakaru isha wa imasu ka? Nihongo ga yoku wakarimasen.","fr":"Y a-t-il un médecin qui parle anglais ? Je ne comprends pas bien le japonais.","note":""},
    {"jp":"フランスごのわかるいしゃはいますか？","romaji":"Furansugo no wakaru isha wa imasu ka?","fr":"Y a-t-il un médecin qui parle français ?","note":""},
    {"jp":"つうやくをよんでもらえますか？にほんごがわかりません。","romaji":"Tsūyaku o yonde moraemasu ka? Nihongo ga wakarimasen.","fr":"Pourriez-vous appeler un interprète ? Je ne comprends pas le japonais.","note":""},
  ],
  "ここがいたいです": [
    {"jp":"ここがいたいです。みてもらえますか？","romaji":"Koko ga itai desu. Mite moraemasu ka?","fr":"J'ai mal ici. Pourriez-vous regarder ?","note":"En pointant la zone douloureuse."},
    {"jp":"ここがいたいです。きのうからずっとです。","romaji":"Koko ga itai desu. Kinō kara zutto desu.","fr":"J'ai mal ici. C'est depuis hier sans arrêt.","note":""},
    {"jp":"ここがいたいです。おしたらもっといたいです。","romaji":"Koko ga itai desu. Oshitara motto itai desu.","fr":"J'ai mal ici. C'est encore plus douloureux quand j'appuie.","note":""},
  ],
  "このくすりをのんでもいいですか": [
    {"jp":"このくすりをのんでもいいですか？にんしんしています。","romaji":"Kono kusuri o nonde mo ii desu ka? Ninshin shite imasu.","fr":"Puis-je prendre ce médicament ? Je suis enceinte.","note":""},
    {"jp":"このくすりをのんでもいいですか？アレルギーがあります。","romaji":"Kono kusuri o nonde mo ii desu ka? Arerugī ga arimasu.","fr":"Puis-je prendre ce médicament ? J'ai des allergies.","note":""},
    {"jp":"このくすりをのんでもいいですか？ほかのくすりものんでいます。","romaji":"Kono kusuri o nonde mo ii desu ka? Hoka no kusuri mo nonde imasu.","fr":"Puis-je prendre ce médicament ? Je prends déjà d'autres médicaments.","note":""},
  ],
  "パスポートをなくしました": [
    {"jp":"パスポートをなくしました。たいしかんにれんらくしなければなりません。","romaji":"Pasupōto o nakushimashita. Taishikan ni renraku shinakereba narimasen.","fr":"J'ai perdu mon passeport. Je dois contacter l'ambassade.","note":""},
    {"jp":"パスポートをなくしました。けいさつにとどけたいです。","romaji":"Pasupōto o nakushimashita. Keisatsu ni todoke tai desu.","fr":"J'ai perdu mon passeport. Je veux faire une déclaration à la police.","note":""},
    {"jp":"パスポートをなくしました。ふんしつとどけをだすにはどうすればいいですか？","romaji":"Pasupōto o nakushimashita. Funshitsu-todoke o dasu ni wa dō sureba ii desu ka?","fr":"J'ai perdu mon passeport. Comment puis-je faire une déclaration de perte ?","note":""},
  ],
  "ほけんしょうはつかえますか": [
    {"jp":"ほけんしょうはつかえますか？がいこくのほけんです。","romaji":"Hoken-shō wa tsukaemasu ka? Gaikoku no hoken desu.","fr":"Mon assurance est-elle acceptée ? C'est une assurance étrangère.","note":""},
    {"jp":"りょこうほけんはつかえますか？しんさつをうけたいです。","romaji":"Ryokō-hoken wa tsukaemasu ka? Shinsatsu o uketai desu.","fr":"Mon assurance voyage est-elle acceptée ? Je veux consulter un médecin.","note":""},
    {"jp":"ほけんしょうはつかえますか？じゅしんひのりょうしゅうしょをください。","romaji":"Hoken-shō wa tsukaemasu ka? Jūshin-hi no ryōshūsho o kudasai.","fr":"Mon assurance est-elle acceptée ? Donnez-moi un reçu pour la consultation.","note":""},
  ],
  "どろぼうにあいました": [
    {"jp":"どろぼうにあいました！けいさつをよんでください！","romaji":"Dorobō ni aimashita! Keisatsu o yonde kudasai!","fr":"J'ai été volé(e) ! Appelez la police !","note":""},
    {"jp":"どろぼうにあいました。さいふとパスポートをとられました。","romaji":"Dorobō ni aimashita. Saifu to pasupōto o toraremashita.","fr":"J'ai été volé(e). Mon portefeuille et mon passeport ont été volés.","note":""},
    {"jp":"どろぼうにあいました。ふんしつとどけをだしたいです。","romaji":"Dorobō ni aimashita. Funshitsu-todoke o dashitai desu.","fr":"J'ai été volé(e). Je veux faire une déclaration.","note":""},
  ],
  "かにアレルギーがあるのでえびもたべられません": [
    {"jp":"かにアレルギーがあるのでえびもたべられません。きをつけてください。","romaji":"Kani arerugī ga aru no de ebi mo taberaremasen. Ki o tsukete kudasai.","fr":"J'ai une allergie aux crabes donc je ne peux pas manger de crevettes non plus. Faites attention.","note":"Explique le lien entre allergie croisée et fruits de mer."},
    {"jp":"かにアレルギーがあります。このりょうりにかいそうのエキスははいっていますか？","romaji":"Kani arerugī ga arimasu. Kono ryōri ni kaisō no ekisu wa haitte imasu ka?","fr":"J'ai une allergie aux crustacés. Y a-t-il des extraits de fruits de mer dans ce plat ?","note":""},
    {"jp":"えびもかにもたべられません。アレルギーです。","romaji":"Ebi mo kani mo taberaremasen. Arerugī desu.","fr":"Je ne peux manger ni crevettes ni crabes. Allergie.","note":""},
  ],
  "じゅしんひのりょうしゅうしょをいただけますか": [
    {"jp":"じゅしんひのりょうしゅうしょをいただけますか？ほけんにつかいます。","romaji":"Jūshin-hi no ryōshūsho o itadakemasu ka? Hoken ni tsukaimasu.","fr":"Puis-je avoir un reçu pour les frais de consultation ? Pour mon assurance.","note":""},
    {"jp":"えいごのりょうしゅうしょをいただけますか？","romaji":"Eigo no ryōshūsho o itadakemasu ka?","fr":"Puis-je avoir un reçu en anglais ?","note":""},
    {"jp":"じゅしんひのりょうしゅうしょとしんだんしょをいただけますか？","romaji":"Jūshin-hi no ryōshūsho to shindan-sho o itadakemasu ka?","fr":"Puis-je avoir un reçu et un certificat médical ?","note":""},
  ],
  "たびほけんのてつづきをしたいのですが": [
    {"jp":"たびほけんのてつづきをしたいのですが、どうすればいいですか？","romaji":"Tabi-hoken no tetsuzuki o shitai no desu ga, dō sureba ii desu ka?","fr":"Je souhaite faire une déclaration pour mon assurance voyage, comment faire ?","note":""},
    {"jp":"たびほけんのてつづきをしたいのですが、しょるいがひつようですか？","romaji":"Tabi-hoken no tetsuzuki o shitai no desu ga, shorui ga hitsuyō desu ka?","fr":"Je souhaite faire une déclaration d'assurance voyage, quels documents faut-il ?","note":""},
    {"jp":"たびほけんのてつづきのために、しょうめいしょをかいてもらえますか？","romaji":"Tabi-hoken no tetsuzuki no tame ni, shōmei-sho o kaite moraemasu ka?","fr":"Pour ma déclaration d'assurance voyage, pourriez-vous rédiger un certificat ?","note":""},
  ],
  "ふんしつとどけをだしたいのですが": [
    {"jp":"ふんしつとどけをだしたいのですが、こうばんはどこですか？","romaji":"Funshitsu-todoke o dashitai no desu ga, kōban wa doko desu ka?","fr":"Je voudrais déposer une déclaration de perte, où est le poste de police ?","note":""},
    {"jp":"ふんしつとどけをだしたいのですが、にほんごがよくわかりません。","romaji":"Funshitsu-todoke o dashitai no desu ga, nihongo ga yoku wakarimasen.","fr":"Je voudrais déposer une déclaration de perte, mais je ne comprends pas bien le japonais.","note":""},
    {"jp":"ふんしつとどけをだしたいのですが、えいごのようしはありますか？","romaji":"Funshitsu-todoke o dashitai no desu ga, eigo no yōshi wa arimasu ka?","fr":"Je voudrais déposer une déclaration de perte, avez-vous un formulaire en anglais ?","note":""},
  ],
  "にゅういんがひつようですか": [
    {"jp":"にゅういんがひつようですか？たびほけんがあります。","romaji":"Nyūin ga hitsuyō desu ka? Tabi-hoken ga arimasu.","fr":"Dois-je être hospitalisé(e) ? J'ai une assurance voyage.","note":""},
    {"jp":"にゅういんがひつようですか？ひこうきのよていがあります。","romaji":"Nyūin ga hitsuyō desu ka? Hikōki no yotei ga arimasu.","fr":"Dois-je être hospitalisé(e) ? J'ai un vol prévu.","note":""},
    {"jp":"にゅういんがひつようですか？どのくらいかかりますか？","romaji":"Nyūin ga hitsuyō desu ka? Dono kurai kakarimasu ka?","fr":"Dois-je être hospitalisé(e) ? Combien de temps ?","note":""},
  ],
  "は": [
    {"jp":"わたしはフランスじんです。","romaji":"Watashi wa Furansujin desu.","fr":"Je suis français(e).","note":"は marque le thème de la phrase (ce dont on parle)."},
    {"jp":"これはわたしのかばんです。","romaji":"Kore wa watashi no kaban desu.","fr":"Ceci est mon sac.","note":""},
    {"jp":"きょうはとてもあついですね。","romaji":"Kyō wa totemo atsui desu ne.","fr":"Aujourd'hui il fait très chaud, n'est-ce pas ?","note":""},
  ],
  "が": [
    {"jp":"あそこにふじさんがみえます。","romaji":"Asoko ni Fuji-san ga miemasu.","fr":"Là-bas on voit le mont Fuji.","note":"が met en valeur le sujet — ce qui est nouveau ou inattendu."},
    {"jp":"だれがにほんごをはなせますか？","romaji":"Dare ga nihongo o hanasemasu ka?","fr":"Qui parle japonais ?","note":""},
    {"jp":"わたしがやります。","romaji":"Watashi ga yarimasu.","fr":"C'est moi qui vais le faire.","note":"が insiste sur l'identité du sujet."},
  ],
  "を": [
    {"jp":"ラーメンをたべます。","romaji":"Rāmen o tabemasu.","fr":"Je mange des rāmen.","note":"を marque l'objet direct de l'action."},
    {"jp":"きっぷをかいました。","romaji":"Kippu o kaimashita.","fr":"J'ai acheté un billet.","note":""},
    {"jp":"にほんごをべんきょうしています。","romaji":"Nihongo o benkyō shite imasu.","fr":"J'apprends le japonais.","note":""},
  ],
  "に": [
    {"jp":"にほんにすんでいます。","romaji":"Nihon ni sunde imasu.","fr":"J'habite au Japon.","note":"に = deux et aussi particule de lieu !"},
    {"jp":"にまいのきっぷをかいました。","romaji":"Nimai no kippu o kaimashita.","fr":"J'ai acheté deux billets.","note":""},
    {"jp":"にじかんでとうきょうにつきます。","romaji":"Nijikan de Tōkyō ni tsukimasu.","fr":"On arrive à Tokyo en deux heures.","note":""},
  ],
  "で": [
    {"jp":"でんしゃでいきます。","romaji":"Densha de ikimasu.","fr":"J'y vais en train.","note":"で indique le moyen de transport ou l'outil utilisé."},
    {"jp":"にほんごではなしましょう。","romaji":"Nihongo de hanashimashō.","fr":"Parlons en japonais.","note":""},
    {"jp":"このみせでたべましょう。","romaji":"Kono mise de tabemashō.","fr":"Mangeons dans ce restaurant.","note":"で indique le lieu de l'action."},
  ],
  "の": [
    {"jp":"わたしのパスポートはどこですか？","romaji":"Watashi no pasupōto wa doko desu ka?","fr":"Où est mon passeport ?","note":"の exprime la possession ou l'appartenance."},
    {"jp":"にほんのりょうりはおいしいですね。","romaji":"Nihon no ryōri wa oishii desu ne.","fr":"La cuisine japonaise est délicieuse, n'est-ce pas ?","note":""},
    {"jp":"とうきょうのてんきはどうですか？","romaji":"Tōkyō no tenki wa dō desu ka?","fr":"Quel temps fait-il à Tokyo ?","note":""},
  ],
  "と": [
    {"jp":"つまとにほんにきました。","romaji":"Tsuma to Nihon ni kimashita.","fr":"Je suis venu(e) au Japon avec mon épouse.","note":"と = avec (compagnie)."},
    {"jp":"すしとてんぷらをたべました。","romaji":"Sushi to tenpura o tabemashita.","fr":"J'ai mangé des sushis et de la tempura.","note":"と = et (énumération)."},
    {"jp":"ともだちとおんせんにいきました。","romaji":"Tomodachi to onsen ni ikimashita.","fr":"Je suis allé(e) aux onsen avec un ami.","note":""},
  ],
  "も": [
    {"jp":"わたしもにほんがすきです。","romaji":"Watashi mo Nihon ga suki desu.","fr":"Moi aussi j'aime le Japon.","note":"も = aussi, également."},
    {"jp":"きょうとにもいきました。なら にもいきました。","romaji":"Kyōto ni mo ikimashita. Nara ni mo ikimashita.","fr":"Je suis allé(e) à Kyoto aussi. Et à Nara aussi.","note":""},
    {"jp":"ビールもおさけもすきです。","romaji":"Bīru mo osake mo suki desu.","fr":"J'aime la bière et le saké aussi.","note":""},
  ],
  "か": [
    {"jp":"にほんごがはなせますか？","romaji":"Nihongo ga hanasemasu ka?","fr":"Parlez-vous japonais ?","note":"か en fin de phrase transforme en question."},
    {"jp":"これはいくらですか？","romaji":"Kore wa ikura desu ka?","fr":"Combien ça coûte ?","note":""},
    {"jp":"えきはちかいですか？","romaji":"Eki wa chikai desu ka?","fr":"La gare est-elle proche ?","note":""},
  ],
  "ね": [
    {"jp":"きょうはいいてんきですね。","romaji":"Kyō wa ii tenki desu ne.","fr":"Il fait beau aujourd'hui, n'est-ce pas ?","note":"ね cherche l'approbation de l'interlocuteur."},
    {"jp":"このすしはおいしいですね！","romaji":"Kono sushi wa oishii desu ne!","fr":"Ces sushis sont délicieux, n'est-ce pas !","note":""},
    {"jp":"にほんはきれいですね。","romaji":"Nihon wa kirei desu ne.","fr":"Le Japon est beau, n'est-ce pas ?","note":""},
  ],
  "よ": [
    {"jp":"そのみちはまちがっていますよ。こちらです。","romaji":"Sono michi wa machigatte imasu yo. Kochira desu.","fr":"Ce chemin est le mauvais. C'est par ici.","note":"よ informe ou insiste sur quelque chose que l'autre ne sait pas."},
    {"jp":"このラーメンはとてもからいですよ。きをつけて。","romaji":"Kono rāmen wa totemo karai desu yo. Ki o tsukete.","fr":"Ce rāmen est très épicé. Faites attention.","note":""},
    {"jp":"もうじかんですよ。いきましょう。","romaji":"Mō jikan desu yo. Ikimashō.","fr":"C'est l'heure. Allons-y.","note":""},
  ],
  "へ": [
    {"jp":"なりたくうこうへいきます。","romaji":"Narita Kūkō e ikimasu.","fr":"Je vais vers l'aéroport de Narita.","note":"へ indique une direction, légèrement plus littéral que に."},
    {"jp":"にほんへようこそ！","romaji":"Nihon e yōkoso!","fr":"Bienvenue au Japon !","note":"へ très courant dans ようこそ〜へ (bienvenue à)."},
    {"jp":"かれはとうきょうへかえりました。","romaji":"Kare wa Tōkyō e kaerimashita.","fr":"Il est retourné vers Tokyo.","note":""},
  ],
  "から": [
    {"jp":"フランスからきました。","romaji":"Furansu kara kimashita.","fr":"Je viens de France.","note":"から = depuis, à partir de."},
    {"jp":"くじからじゅうじまでしごとです。","romaji":"Kuji kara jūji made shigoto desu.","fr":"Je travaille de 9h à 10h.","note":""},
    {"jp":"あつかったから、みずをたくさんのみました。","romaji":"Atsukatta kara, mizu o takusan nomimashita.","fr":"Parce qu'il faisait chaud, j'ai beaucoup bu.","note":"から = parce que (en milieu de phrase)."},
  ],
  "まで": [
    {"jp":"とうきょうまでいくらですか？","romaji":"Tōkyō made ikura desu ka?","fr":"Combien coûte (le billet) jusqu'à Tokyo ?","note":""},
    {"jp":"なんじまであいていますか？","romaji":"Nanji made aite imasu ka?","fr":"Jusqu'à quelle heure êtes-vous ouvert ?","note":""},
    {"jp":"おおさかまでしんかんせんでにじかんです。","romaji":"Ōsaka made shinkansen de nijikan desu.","fr":"C'est deux heures jusqu'à Osaka en Shinkansen.","note":""},
  ],
  "でも": [
    {"jp":"たかいです。でも、かいます。","romaji":"Takai desu. Demo, kaimasu.","fr":"C'est cher. Mais je l'achète.","note":"でも = mais, cependant, en début de phrase."},
    {"jp":"にほんごはむずかしい。でも、たのしいです。","romaji":"Nihongo wa muzukashii. Demo, tanoshii desu.","fr":"Le japonais est difficile. Mais c'est amusant.","note":""},
    {"jp":"あめがふっています。でも、さんぽしたいです。","romaji":"Ame ga futte imasu. Demo, sanpo shitai desu.","fr":"Il pleut. Mais je veux me promener.","note":""},
  ],
  "そして": [
    {"jp":"すしをたべました。そして、おさけをのみました。","romaji":"Sushi o tabemashita. Soshite, osake o nomimashita.","fr":"J'ai mangé des sushis. Et puis j'ai bu du saké.","note":"そして = et puis, ensuite."},
    {"jp":"きょうとにいきました。そして、ならにもいきました。","romaji":"Kyōto ni ikimashita. Soshite, Nara ni mo ikimashita.","fr":"Je suis allé(e) à Kyoto. Et puis j'ai aussi été à Nara.","note":""},
    {"jp":"シャワーをあびました。そして、おんせんにはいりました。","romaji":"Shawā o abimashita. Soshite, onsen ni hairimashita.","fr":"J'ai pris une douche. Et puis je suis entré(e) dans l'onsen.","note":""},
  ],
  "だから": [
    {"jp":"あめがふっています。だから、かさをもっていきます。","romaji":"Ame ga futte imasu. Dakara, kasa o motte ikimasu.","fr":"Il pleut. C'est pourquoi j'emmène un parapluie.","note":"だから = donc, c'est pourquoi."},
    {"jp":"おなかがすきました。だから、レストランをさがしています。","romaji":"Onaka ga sukimashita. Dakara, resutoran o sagashite imasu.","fr":"J'ai faim. C'est pourquoi je cherche un restaurant.","note":""},
    {"jp":"にほんごがすきです。だから、べんきょうしています。","romaji":"Nihongo ga suki desu. Dakara, benkyō shite imasu.","fr":"J'aime le japonais. C'est pourquoi j'apprends.","note":""},
  ],
  "とても": [
    {"jp":"このすしはとてもおいしいです！","romaji":"Kono sushi wa totemo oishii desu!","fr":"Ces sushis sont vraiment délicieux !","note":"とても = très, vraiment."},
    {"jp":"にほんはとてもきれいですね。","romaji":"Nihon wa totemo kirei desu ne.","fr":"Le Japon est vraiment beau.","note":""},
    {"jp":"きょうはとてもたのしかったです。ありがとうございました。","romaji":"Kyō wa totemo tanoshikatta desu. Arigatō gozaimashita.","fr":"Aujourd'hui était vraiment agréable. Merci beaucoup.","note":""},
  ],
  "すこし": [
    {"jp":"にほんごがすこしはなせます。","romaji":"Nihongo ga sukoshi hanasemasu.","fr":"Je parle un peu japonais.","note":""},
    {"jp":"すこしまってください。","romaji":"Sukoshi matte kudasai.","fr":"Attendez un peu s'il vous plaît.","note":""},
    {"jp":"このへやはすこしせまいです。もっとひろいのはありますか？","romaji":"Kono heya wa sukoshi semai desu. Motto hiroi no wa arimasu ka?","fr":"Cette chambre est un peu petite. En avez-vous une plus grande ?","note":""},
  ],
  "たくさん": [
    {"jp":"にほんにはたくさんおいしいものがあります。","romaji":"Nihon ni wa takusan oishii mono ga arimasu.","fr":"Au Japon, il y a beaucoup de bonnes choses.","note":""},
    {"jp":"きょうはたくさんあるきました。つかれました。","romaji":"Kyō wa takusan arukimashita. Tsukaremashita.","fr":"Aujourd'hui j'ai beaucoup marché. Je suis fatigué(e).","note":""},
    {"jp":"おみやげをたくさんかいました。","romaji":"Omiyage o takusan kaimashita.","fr":"J'ai acheté beaucoup de souvenirs.","note":""},
  ],
  "もう": [
    {"jp":"もうすしをたべましたか？","romaji":"Mō sushi o tabemashita ka?","fr":"Avez-vous déjà mangé des sushis ?","note":"もう = déjà (dans les questions)."},
    {"jp":"もうじかんがありません。いそぎましょう。","romaji":"Mō jikan ga arimasen. Isogimashō.","fr":"On n'a plus de temps. Dépêchons-nous.","note":"もう = plus (dans les négations)."},
    {"jp":"もういっぱいおちゃをください。","romaji":"Mō ippai ocha o kudasai.","fr":"Encore une tasse de thé s'il vous plaît.","note":"もう = encore (avec compteur)."},
  ],
  "まだ": [
    {"jp":"まだにほんにいます。らいしゅうかえります。","romaji":"Mada Nihon ni imasu. Raishū kaerimasu.","fr":"Je suis encore au Japon. Je rentre la semaine prochaine.","note":""},
    {"jp":"まだたべていません。おなかがすいています。","romaji":"Mada tabete imasen. Onaka ga suite imasu.","fr":"Je n'ai pas encore mangé. J'ai faim.","note":""},
    {"jp":"まだじかんはあります。ゆっくりみてください。","romaji":"Mada jikan wa arimasu. Yukkuri mite kudasai.","fr":"Il y a encore du temps. Regardez tranquillement.","note":""},
  ],
  "もっと": [
    {"jp":"もっとゆっくりはなしてください。","romaji":"Motto yukkuri hanashite kudasai.","fr":"Parlez plus lentement s'il vous plaît.","note":"もっと = davantage, encore plus."},
    {"jp":"もっとおおきいサイズはありますか？","romaji":"Motto ōkii saizu wa arimasu ka?","fr":"Avez-vous une taille plus grande ?","note":""},
    {"jp":"もっとにほんごをべんきょうしたいです。","romaji":"Motto nihongo o benkyō shitai desu.","fr":"Je voudrais apprendre encore plus le japonais.","note":""},
  ],
  "いちばん": [
    {"jp":"にほんでいちばんおいしいラーメンはどこですか？","romaji":"Nihon de ichiban oishii rāmen wa doko desu ka?","fr":"Où sont les meilleurs rāmen du Japon ?","note":"いちばん = le plus, numéro un."},
    {"jp":"このみせがいちばんやすいです。","romaji":"Kono mise ga ichiban yasui desu.","fr":"Ce magasin est le moins cher.","note":""},
    {"jp":"わたしがいちばんすきなたべものはすしです。","romaji":"Watashi ga ichiban suki na tabemono wa sushi desu.","fr":"Mon aliment préféré est les sushis.","note":""},
  ],
  "ぜんぜん": [
    {"jp":"にほんごがぜんぜんわかりません。","romaji":"Nihongo ga zenzen wakarimasen.","fr":"Je ne comprends pas du tout le japonais.","note":"ぜんぜん s'emploie avec une forme négative."},
    {"jp":"からいものはぜんぜんたべられません。","romaji":"Karai mono wa zenzen taberaremasen.","fr":"Je ne peux pas du tout manger de plats épicés.","note":""},
    {"jp":"ぜんぜんつかれていません。もっとあるけます。","romaji":"Zenzen tsukarete imasen. Motto arukemasu.","fr":"Je ne suis pas fatigué(e) du tout. Je peux marcher encore.","note":""},
  ],
  "たぶん": [
    {"jp":"たぶんあしたはあめがふります。","romaji":"Tabun ashita wa ame ga furimasu.","fr":"Il va probablement pleuvoir demain.","note":""},
    {"jp":"たぶんじゅうじころにつきます。","romaji":"Tabun jūji goro ni tsukimasu.","fr":"On arrivera probablement vers 10h.","note":""},
    {"jp":"たぶんそのみせはしまっています。","romaji":"Tabun sono mise wa shimatte imasu.","fr":"Ce magasin est probablement fermé.","note":""},
  ],
  "きっと": [
    {"jp":"きっとまたにほんにきます。","romaji":"Kitto mata Nihon ni kimasu.","fr":"Je reviendrai sûrement au Japon.","note":"きっと = sûrement, sans aucun doute."},
    {"jp":"きっとたのしいたびになりますよ。","romaji":"Kitto tanoshii tabi ni narimasu yo.","fr":"Ça sera sûrement un beau voyage.","note":""},
    {"jp":"きっとわかります。ゆっくりはなしてください。","romaji":"Kitto wakarimasu. Yukkuri hanashite kudasai.","fr":"Je comprendrai sûrement. Parlez lentement.","note":""},
  ],
  "やっぱり": [
    {"jp":"やっぱりにほんのりょうりはさいこうですね！","romaji":"Yappari Nihon no ryōri wa saikō desu ne!","fr":"Comme je le pensais, la cuisine japonaise est la meilleure !","note":"やっぱり = comme prévu, comme je le pensais."},
    {"jp":"やっぱりしんかんせんがはやいですね。","romaji":"Yappari shinkansen ga hayai desu ne.","fr":"Comme prévu, le Shinkansen est rapide.","note":""},
    {"jp":"やっぱりにほんにきてよかったです。","romaji":"Yappari Nihon ni kite yokatta desu.","fr":"Comme je le pensais, j'ai bien fait de venir au Japon.","note":""},
  ],
  "すぐ": [
    {"jp":"すぐそこにえきがあります。","romaji":"Sugu soko ni eki ga arimasu.","fr":"La gare est juste là.","note":"すぐ = immédiatement, tout de suite."},
    {"jp":"すぐもどります。ちょっとまってください。","romaji":"Sugu modorimasu. Chotto matte kudasai.","fr":"Je reviens tout de suite. Attendez un instant.","note":""},
    {"jp":"すぐにのりもの酔いのくすりをのんでください。","romaji":"Sugu ni norimono-yoi no kusuri o nonde kudasai.","fr":"Prenez tout de suite le médicament contre le mal des transports.","note":""},
  ],
  "ゆっくり": [
    {"jp":"ゆっくりはなしてください。にほんごがよくわかりません。","romaji":"Yukkuri hanashite kudasai. Nihongo ga yoku wakarimasen.","fr":"Parlez lentement. Je ne comprends pas bien le japonais.","note":""},
    {"jp":"ゆっくりやすんでください。またあした！","romaji":"Yukkuri yasunde kudasai. Mata ashita!","fr":"Reposez-vous bien. À demain !","note":""},
    {"jp":"ゆっくりたべてください。はやくなくてもいいです。","romaji":"Yukkuri tabete kudasai. Hayaku nakute mo ii desu.","fr":"Mangez tranquillement. Inutile de vous presser.","note":""},
  ],
  "はやく": [
    {"jp":"はやくしてください！でんしゃがきます！","romaji":"Hayaku shite kudasai! Densha ga kimasu!","fr":"Dépêchez-vous ! Le train arrive !","note":""},
    {"jp":"はやくびょういんにいかなければなりません。","romaji":"Hayaku byōin ni ikanakereba narimasen.","fr":"Il faut aller à l'hôpital vite.","note":""},
    {"jp":"もっとはやくあるけますか？","romaji":"Motto hayaku arukemasu ka?","fr":"Pouvez-vous marcher plus vite ?","note":""},
  ],
  "いつも": [
    {"jp":"にほんではいつもおちゃをのみます。","romaji":"Nihon de wa itsumo ocha o nomimasu.","fr":"Au Japon, je bois toujours du thé vert.","note":""},
    {"jp":"いつもありがとうございます。","romaji":"Itsumo arigatō gozaimasu.","fr":"Merci comme toujours.","note":"Formule de gratitude récurrente très appréciée."},
    {"jp":"にほんじんはいつもていねいですね。","romaji":"Nihonjin wa itsumo teinei desu ne.","fr":"Les Japonais sont toujours polis, n'est-ce pas ?","note":""},
  ],
  "ときどき": [
    {"jp":"ときどきにほんのドラマをみます。","romaji":"Tokidoki Nihon no dorama o mimasu.","fr":"Je regarde parfois des dramas japonais.","note":""},
    {"jp":"ときどきにほんしょくをつくります。","romaji":"Tokidoki nihon-shoku o tsukurimasu.","fr":"Je fais parfois de la cuisine japonaise.","note":""},
    {"jp":"このあたりではときどきじしんがあります。","romaji":"Kono atari de wa tokidoki jishin ga arimasu.","fr":"Dans cette région, il y a parfois des tremblements de terre.","note":""},
  ],
  "〜てから": [
    {"jp":"シャワーをあびてから、おんせんにはいってください。","romaji":"Shawā o abite kara, onsen ni haitte kudasai.","fr":"Après avoir pris une douche, entrez dans l'onsen.","note":"〜てから = après avoir fait ~."},
    {"jp":"チェックインしてから、みせをさがしましょう。","romaji":"Chekku-in shite kara, mise o sagashimashō.","fr":"Après avoir fait le check-in, cherchons des magasins.","note":""},
    {"jp":"にほんごをならってから、にほんにきました。","romaji":"Nihongo o naratte kara, Nihon ni kimashita.","fr":"Après avoir appris le japonais, je suis venu(e) au Japon.","note":""},
  ],
  "〜ながら": [
    {"jp":"おんがくをききながら、さんぽをします。","romaji":"Ongaku o kikinagara, sanpo o shimasu.","fr":"Je me promène en écoutant de la musique.","note":"〜ながら = tout en faisant ~."},
    {"jp":"しゃしんをとりながら、まちをあるきます。","romaji":"Shashin o torinagara, machi o arukimasu.","fr":"Je marche dans la ville en prenant des photos.","note":""},
    {"jp":"おちゃをのみながら、はなしましょう。","romaji":"Ocha o nominagara, hanashimashō.","fr":"Parlons en buvant du thé.","note":""},
  ],
  "〜たり〜たりする": [
    {"jp":"にほんではすしをたべたり、おんせんにはいったりします。","romaji":"Nihon de wa sushi o tabetari, onsen ni haittari shimasu.","fr":"Au Japon, je mange des sushis, prends des bains thermaux, etc.","note":"〜たり〜たりする = tantôt ceci, tantôt cela (liste non exhaustive)."},
    {"jp":"やすみのひはほんをよんだり、えいがをみたりします。","romaji":"Yasumi no hi wa hon o yondari, eiga o mitari shimasu.","fr":"Les jours de repos, je lis des livres, regarde des films, etc.","note":""},
    {"jp":"でんしゃのなかでおんがくをきいたり、ねたりします。","romaji":"Densha no naka de ongaku o kiitari, netari shimasu.","fr":"Dans le train, j'écoute de la musique ou je dors.","note":""},
  ],
  "〜と思います": [
    {"jp":"あしたはあめがふると思います。","romaji":"Ashita wa ame ga furu to omoimasu.","fr":"Je pense qu'il va pleuvoir demain.","note":""},
    {"jp":"このみちはまちがっていると思います。","romaji":"Kono michi wa machigatte iru to omoimasu.","fr":"Je pense que ce chemin est faux.","note":""},
    {"jp":"にほんのりょうりがせかいでいちばんおいしいと思います。","romaji":"Nihon no ryōri ga sekai de ichiban oishii to omoimasu.","fr":"Je pense que la cuisine japonaise est la meilleure du monde.","note":""},
  ],
  "〜かもしれません": [
    {"jp":"このでんしゃはおくれているかもしれません。","romaji":"Kono densha wa okurete iru kamoshiremasen.","fr":"Ce train est peut-être en retard.","note":""},
    {"jp":"このみせはもうしまっているかもしれません。","romaji":"Kono mise wa mō shimatte iru kamoshiremasen.","fr":"Ce magasin est peut-être déjà fermé.","note":""},
    {"jp":"かれはにほんごができるかもしれません。","romaji":"Kare wa nihongo ga dekiru kamoshiremasen.","fr":"Il parle peut-être japonais.","note":""},
  ],
  "〜でしょう": [
    {"jp":"あしたはいいてんきでしょう。","romaji":"Ashita wa ii tenki deshō.","fr":"Il fera probablement beau demain.","note":"〜でしょう = conjecture polie."},
    {"jp":"このみちをまっすぐいけば、えきがあるでしょう。","romaji":"Kono michi o massugu ikeba, eki ga aru deshō.","fr":"Si vous allez tout droit sur ce chemin, il y a probablement une gare.","note":""},
    {"jp":"にほんのりょうりはおいしかったでしょう？","romaji":"Nihon no ryōri wa oishikatta deshō?","fr":"La cuisine japonaise était bonne, n'est-ce pas ?","note":""},
  ],
  "いち": [
    {"jp":"いちまいのきっぷをください。","romaji":"Ichimai no kippu o kudasai.","fr":"Un billet s'il vous plaît.","note":""},
    {"jp":"いちじかんまちました。","romaji":"Ichijikan machimashita.","fr":"J'ai attendu une heure.","note":""},
    {"jp":"いちにちにほんのりょうりをたべました。","romaji":"Ichinichi Nihon no ryōri o tabemashita.","fr":"J'ai mangé de la cuisine japonaise toute la journée.","note":""},
  ],
  "さん": [
    {"jp":"さんにんでよやくをしています。","romaji":"Sannin de yoyaku o shite imasu.","fr":"J'ai réservé pour trois personnes.","note":""},
    {"jp":"さんぼんのビールをおねがいします。","romaji":"Sanbon no bīru o onegaishimasu.","fr":"Trois bières s'il vous plaît.","note":""},
    {"jp":"さんかいとまります。","romaji":"Sankai tomarimasu.","fr":"Je reste trois nuits.","note":""},
  ],
  "し／よん": [
    {"jp":"よんにんでたべます。","romaji":"Yonin de tabemasu.","fr":"On mange à quatre.","note":"し est évité car homophone de mort (死)."},
    {"jp":"よんじかんはやい。","romaji":"Yonjikan hayai.","fr":"Quatre heures de trajet.","note":""},
    {"jp":"しがつにほんのさくらがさきます。","romaji":"Shigatsu ni Nihon no sakura ga sakimasu.","fr":"En avril les cerisiers fleurissent au Japon.","note":"しがつ (avril) utilise し sans problème."},
  ],
  "ご": [
    {"jp":"ごまいのふくろをください。","romaji":"Gomai no fukuro o kudasai.","fr":"Cinq sacs s'il vous plaît.","note":""},
    {"jp":"ごふんまってください。","romaji":"Gofun matte kudasai.","fr":"Attendez cinq minutes.","note":""},
    {"jp":"ごせんえんさつをもっています。","romaji":"Gosen-en satsu o motte imasu.","fr":"J'ai un billet de 5 000 yens.","note":""},
  ],
  "ろく": [
    {"jp":"ろくじにしゅっぱつします。","romaji":"Rokuji ni shuppatsu shimasu.","fr":"On part à 6h.","note":""},
    {"jp":"ろっかいにへやがあります。","romaji":"Rokkai ni heya ga arimasu.","fr":"La chambre est au 6e étage.","note":""},
    {"jp":"ろくにんのグループです。","romaji":"Rokunin no gurūpu desu.","fr":"Nous sommes un groupe de six.","note":""},
  ],
  "しち／なな": [
    {"jp":"ななじはんにばんごはんをたべます。","romaji":"Nanaji-han ni bangohan o tabemasu.","fr":"On dîne à 7h30.","note":"なな est préféré à しち pour les heures."},
    {"jp":"しちがつにきます。","romaji":"Shichigatsu ni kimasu.","fr":"Je viens en juillet.","note":""},
    {"jp":"ならはとうきょうからやくふたじかんです。","romaji":"Nara wa Tōkyō kara yaku futajikan desu.","fr":"Nara est à environ deux heures de Tokyo.","note":""},
  ],
  "はち": [
    {"jp":"はちじにチェックインします。","romaji":"Hachiji ni chekku-in shimasu.","fr":"Je fais le check-in à 8h.","note":""},
    {"jp":"はちがつはにほんでとてもあついです。","romaji":"Hachigatsu wa Nihon de totemo atsui desu.","fr":"En août il fait très chaud au Japon.","note":""},
    {"jp":"はっぴゃくえんです。","romaji":"Happyaku-en desu.","fr":"C'est 800 yens.","note":""},
  ],
  "きゅう／く": [
    {"jp":"くじにかいぎがあります。","romaji":"Kuji ni kaigi ga arimasu.","fr":"Il y a une réunion à 9h.","note":""},
    {"jp":"きゅうがつはにほんでたびするのにいいですよ。","romaji":"Kugatsu wa Nihon de tabi suru no ni ii desu yo.","fr":"Septembre est bien pour voyager au Japon.","note":""},
    {"jp":"きゅうひゃくえんです。","romaji":"Kyūhyaku-en desu.","fr":"C'est 900 yens.","note":""},
  ],
  "じゅう": [
    {"jp":"じゅうじにチェックアウトします。","romaji":"Jūji ni chekku-auto shimasu.","fr":"Je fais le check-out à 10h.","note":""},
    {"jp":"じゅうにちかんのたびです。","romaji":"Jūnichinichi no tabi desu.","fr":"C'est un voyage de douze jours.","note":""},
    {"jp":"じゅうせんえんいじょうかうとめんぜいになります。","romaji":"Jūsen-en ijō kau to menzei ni narimasu.","fr":"Si vous achetez pour plus de 10 000 yens, vous bénéficiez de la détaxe.","note":""},
  ],
  "ひゃく": [
    {"jp":"ひゃくえんショップでかいました。","romaji":"Hyaku-en shoppu de kaimashita.","fr":"J'ai acheté dans un magasin à 100 yens.","note":"100円ショップ = le Daiso japonais."},
    {"jp":"ひゃくにんがならんでいます。","romaji":"Hyakunin ga narande imasu.","fr":"Cent personnes font la queue.","note":""},
    {"jp":"このさけはひゃくねんものです。","romaji":"Kono sake wa hyakunen mono desu.","fr":"Ce saké a cent ans.","note":""},
  ],
  "せん": [
    {"jp":"せんえんさつをくずしてもらえますか？","romaji":"Sen-en satsu o kuzushite moraemasu ka?","fr":"Pouvez-vous faire la monnaie d'un billet de 1 000 yens ?","note":""},
    {"jp":"このシャツはにせんえんです。","romaji":"Kono shatsu wa nisen-en desu.","fr":"Cette chemise coûte 2 000 yens.","note":""},
    {"jp":"ごせんえんではたりますか？","romaji":"Gosen-en de wa tarimasu ka?","fr":"5 000 yens suffiront-ils ?","note":""},
  ],
  "まん": [
    {"jp":"このかばんはいちまんえんです。","romaji":"Kono kaban wa ichiman-en desu.","fr":"Ce sac coûte 10 000 yens.","note":""},
    {"jp":"にほんのにゅうこくぜいはいくらですか？","romaji":"Nihon no nyūkoku-zei wa ikura desu ka?","fr":"Combien est la taxe d'entrée au Japon ?","note":""},
    {"jp":"このりょかんはいっぱくにまんえんです。","romaji":"Kono ryokan wa ippaku niman-en desu.","fr":"Ce ryokan coûte 20 000 yens la nuit.","note":""},
  ],
  "にちようび": [
    {"jp":"にちようびはきんかくじにいきます。","romaji":"Nichiyōbi wa Kinkakuji ni ikimasu.","fr":"Dimanche je vais au Kinkakuji.","note":""},
    {"jp":"にちようびはみせがこんでいます。","romaji":"Nichiyōbi wa mise ga konde imasu.","fr":"Le dimanche les magasins sont bondés.","note":""},
    {"jp":"にちようびにまつりがあります。","romaji":"Nichiyōbi ni matsuri ga arimasu.","fr":"Il y a un festival dimanche.","note":""},
  ],
  "げつようび": [
    {"jp":"げつようびにびじゅつかんはしまっています。","romaji":"Getsuyōbi ni bijutsukan wa shimatte imasu.","fr":"Le lundi les musées sont fermés.","note":"Info pratique : beaucoup de musées ferment le lundi au Japon."},
    {"jp":"げつようびからきんようびまでしごとです。","romaji":"Getsuyōbi kara kin'yōbi made shigoto desu.","fr":"Je travaille du lundi au vendredi.","note":""},
    {"jp":"らいしゅうのげつようびにかえります。","romaji":"Raishū no getsuyōbi ni kaerimasu.","fr":"Je rentre lundi prochain.","note":""},
  ],
  "きょう": [
    {"jp":"きょうはどこにいきますか？","romaji":"Kyō wa doko ni ikimasu ka?","fr":"Où allez-vous aujourd'hui ?","note":""},
    {"jp":"きょうのてんきはとてもいいですね。","romaji":"Kyō no tenki wa totemo ii desu ne.","fr":"Le temps est très beau aujourd'hui.","note":""},
    {"jp":"きょうがにほんでのさいごのひです。","romaji":"Kyō ga Nihon de no saigo no hi desu.","fr":"Aujourd'hui est mon dernier jour au Japon.","note":""},
  ],
  "きのう": [
    {"jp":"きのうはどこにいきましたか？","romaji":"Kinō wa doko ni ikimashita ka?","fr":"Où êtes-vous allé(e) hier ?","note":""},
    {"jp":"きのうのばんごはんはとてもおいしかったです。","romaji":"Kinō no bangohan wa totemo oishikatta desu.","fr":"Le dîner d'hier était vraiment délicieux.","note":""},
    {"jp":"きのうはたくさんあるきました。つかれました。","romaji":"Kinō wa takusan arukimashita. Tsukaremashita.","fr":"Hier j'ai beaucoup marché. Je suis fatigué(e).","note":""},
  ],
  "あした": [
    {"jp":"あしたはきょうとにいきます。","romaji":"Ashita wa Kyōto ni ikimasu.","fr":"Demain je vais à Kyoto.","note":""},
    {"jp":"あしたのてんきはどうですか？","romaji":"Ashita no tenki wa dō desu ka?","fr":"Quel temps fera-t-il demain ?","note":""},
    {"jp":"あしたはなんじにでますか？","romaji":"Ashita wa nanji ni demasu ka?","fr":"À quelle heure partez-vous demain ?","note":""},
  ],
  "〜まい": [
    {"jp":"きっぷをにまいかいました。","romaji":"Kippu o nimai kaimashita.","fr":"J'ai acheté deux billets.","note":"〜まい = compteur pour les choses plates (billets, feuilles, assiettes…)."},
    {"jp":"このとうふはさんまいいりです。","romaji":"Kono tōfu wa sanmai iri desu.","fr":"Ce paquet contient trois morceaux de tofu.","note":""},
    {"jp":"しゃしんをじゅうまいとりました。","romaji":"Shashin o jūmai torimashita.","fr":"J'ai pris dix photos.","note":""},
  ],
  "ひとり": [
    {"jp":"ひとりでりょこうをしています。","romaji":"Hitori de ryokō o shite imasu.","fr":"Je voyage seul(e).","note":""},
    {"jp":"ひとりでたべるのにいいみせはありますか？","romaji":"Hitori de taberu no ni ii mise wa arimasu ka?","fr":"Y a-t-il un bon restaurant pour manger seul(e) ?","note":"ひとりで食事 est très courant au Japon."},
    {"jp":"ひとりのへやをよやくしています。","romaji":"Hitori no heya o yoyaku shite imasu.","fr":"J'ai réservé une chambre individuelle.","note":""},
    {"jp":"ひとりぶんのよやくをおねがいします。","romaji":"Hitori-bun no yoyaku o onegaishimasu.","fr":"Une réservation pour une personne s'il vous plaît.","note":""},
  ],
  "ふたり": [
    {"jp":"ふたりのよやくをしています。","romaji":"Futari no yoyaku o shite imasu.","fr":"J'ai réservé pour deux personnes.","note":""},
    {"jp":"ふたりでディナーをたのしみました。","romaji":"Futari de dinā o tanoshimimashita.","fr":"Nous avons deux dîné en amoureux.","note":""},
    {"jp":"ふたりでのりますか？","romaji":"Futari de norimasu ka?","fr":"Montez-vous tous les deux ?","note":""},
  ],
  "〜かい": [
    {"jp":"このホテルはなんかいですか？","romaji":"Kono hoteru wa nankai desu ka?","fr":"Combien d'étages a cet hôtel ?","note":"〜かい = étage (階) ou fois / occurrence (回)."},
    {"jp":"にほんにはもうさんかいきました。","romaji":"Nihon ni wa mō sankai ikimashita.","fr":"Je suis déjà allé(e) au Japon trois fois.","note":""},
    {"jp":"レストランはなんかいですか？エレベーターはどこですか？","romaji":"Resutoran wa nankai desu ka? Erebētā wa doko desu ka?","fr":"Le restaurant est à quel étage ? Où est l'ascenseur ?","note":""},
  ],
  "〜かげつ": [
    {"jp":"にほんにさんかげついます。にほんごがうまくなりたいです。","romaji":"Nihon ni sankagetsu imasu. Nihongo ga umaku naritai desu.","fr":"Je suis au Japon depuis 3 mois. Je veux m'améliorer en japonais.","note":""},
    {"jp":"いっかげつのたびをけいかくしています。","romaji":"Ikkagetsu no tabi o keikaku shite imasu.","fr":"Je planifie un voyage d'un mois.","note":""},
    {"jp":"にかげつまえからにほんごをべんきょうしています。","romaji":"Nikagetsu mae kara nihongo o benkyō shite imasu.","fr":"J'étudie le japonais depuis 2 mois.","note":""},
  ],
  "〜ねん": [
    {"jp":"にほんにいちねんすんでいました。","romaji":"Nihon ni ichinен sunde imashita.","fr":"J'ai vécu au Japon un an.","note":""},
    {"jp":"さんねんごにまたにほんにきたいです。","romaji":"Sannen go ni mata Nihon ni kitai desu.","fr":"Je veux revenir au Japon dans 3 ans.","note":""},
    {"jp":"にせんにじゅうはちねんのたびをたのしみにしています。","romaji":"Nisen nijūhachi-nen no tabi o tanoshimi ni shite imasu.","fr":"J'ai hâte du voyage de 2028.","note":""},
  ],
  "〜にち": [
    {"jp":"さんがつじゅうごにちにつきます。","romaji":"Sangatsu jūgonichi ni tsukimasu.","fr":"J'arrive le 15 mars.","note":"〜にち = jour du mois ou durée en jours."},
    {"jp":"にほんにいつかかんいます。","romaji":"Nihon ni itsuka-kan imasu.","fr":"Je reste 5 jours au Japon.","note":""},
    {"jp":"なんにちにかえりますか？","romaji":"Nannichi ni kaerimasu ka?","fr":"Le combien rentrez-vous ?","note":""},
  ],
  "いつか": [
    {"jp":"ごがついつかはこどものひです。","romaji":"Gogatsu itsuka wa kodomo no hi desu.","fr":"Le 5 mai c'est la fête des enfants.","note":"いつか = le 5 du mois (irrégulier)."},
    {"jp":"いつかにほんにいきたいです。","romaji":"Itsuka Nihon ni ikitai desu.","fr":"Un jour je veux aller au Japon.","note":"いつか (sans か月) = \"un jour\" — même prononciation, sens différent !"},
    {"jp":"さんがついつかにはくぶつかんにいきます。","romaji":"Sangatsu itsuka ni hakubutsukan ni ikimasu.","fr":"Je vais au musée le 5 mars.","note":""},
  ],
  "とおか": [
    {"jp":"しがつとおかにさくらがさきます。","romaji":"Shigatsu tōka ni sakura ga sakimasu.","fr":"Les cerisiers fleurissent le 10 avril.","note":"とおか = le 10 du mois (irrégulier)."},
    {"jp":"じゅうがつとおかにおおさかにつきます。","romaji":"Jūgatsu tōka ni Ōsaka ni tsukimasu.","fr":"J'arrive à Osaka le 10 octobre.","note":""},
    {"jp":"とおかまでにほんにいます。","romaji":"Tōka made Nihon ni imasu.","fr":"Je suis au Japon jusqu'au 10.","note":""},
  ],
  "はつか": [
    {"jp":"にがつはつかはふじさんのきねんびです。","romaji":"Nigatsu hatsuka wa Fujisan no kinenbi desu.","fr":"Le 20 février c'est un anniversaire du Mont Fuji.","note":"はつか = le 20 du mois (irrégulier)."},
    {"jp":"いちがつはつかにかえります。","romaji":"Ichigatsu hatsuka ni kaerimasu.","fr":"Je rentre le 20 janvier.","note":""},
    {"jp":"はつかまでにほんにいたいです。","romaji":"Hatsuka made Nihon ni itai desu.","fr":"Je veux rester au Japon jusqu'au 20.","note":""},
  ],
  "〜じかん": [
    {"jp":"しんかんせんでさんじかんかかります。","romaji":"Shinkansen de sanjikan kakarimasu.","fr":"Ça prend 3 heures en Shinkansen.","note":""},
    {"jp":"にじかんまちました。つかれました。","romaji":"Nijikan machimashita. Tsukaremashita.","fr":"J'ai attendu 2 heures. J'étais épuisé(e).","note":""},
    {"jp":"くうこうまでいちじかんかかります。","romaji":"Kūkō made ichijikan kakarimasu.","fr":"Il faut une heure pour aller à l'aéroport.","note":""},
  ],
  "〜ふつか": [
    {"jp":"にほんにふつかかんいました。みじかかったです。","romaji":"Nihon ni futsuka-kan imashita. Mijikakatta desu.","fr":"Je suis resté(e) 2 jours au Japon. C'était court.","note":"ふつか = 2 jours de durée (irrégulier)."},
    {"jp":"ふつかたてばよくなります。","romaji":"Futsuka tateba yoku narimasu.","fr":"Vous irez mieux dans 2 jours.","note":""},
    {"jp":"ふつかまえにきょうとにつきました。","romaji":"Futsuka mae ni Kyōto ni tsukimashita.","fr":"Je suis arrivé(e) à Kyoto il y a 2 jours.","note":""},
  ],
  "せんしゅう": [
    {"jp":"せんしゅうはきょうとにいました。すばらしかったです。","romaji":"Senshū wa Kyōto ni imashita. Subarashikatta desu.","fr":"La semaine dernière j'étais à Kyoto. C'était magnifique.","note":""},
    {"jp":"せんしゅうかったおみやげをわたします。","romaji":"Senshū katta omiyage o watashimasu.","fr":"Je vous donne le souvenir acheté la semaine dernière.","note":""},
    {"jp":"せんしゅうよりきょうのほうがてんきがいいですね。","romaji":"Senshū yori kyō no hō ga tenki ga ii desu ne.","fr":"Le temps est meilleur aujourd'hui que la semaine dernière.","note":""},
  ],
  "らいしゅう": [
    {"jp":"らいしゅうにほんにいきます！たのしみです！","romaji":"Raishū Nihon ni ikimasu! Tanoshimi desu!","fr":"La semaine prochaine je vais au Japon ! J'ai hâte !","note":""},
    {"jp":"らいしゅうのよていをおしえてください。","romaji":"Raishū no yotei o oshiete kudasai.","fr":"Dites-moi vos projets pour la semaine prochaine.","note":""},
    {"jp":"らいしゅうまたあいましょう！","romaji":"Raishū mata aimashō!","fr":"On se revoit la semaine prochaine !","note":""},
  ],
  "〜じごろ": [
    {"jp":"さんじごろにつきます。","romaji":"Sanji goro ni tsukimasu.","fr":"J'arriverai vers 15h.","note":"〜じごろ = \"vers ~ heures\" (approximatif)."},
    {"jp":"ごじごろにホテルにかえります。","romaji":"Goji goro ni hoteru ni kaerimasu.","fr":"Je rentre à l'hôtel vers 17h.","note":""},
    {"jp":"なんじごろにつきますか？","romaji":"Nanji goro ni tsukimasu ka?","fr":"Vers quelle heure arriverez-vous ?","note":""},
  ],
  "〜じはん": [
    {"jp":"しちじはんのしんかんせんにのります。","romaji":"Shichiji han no shinkansen ni norimasu.","fr":"Je prends le Shinkansen de 7h30.","note":"〜じはん = \"~ heure et demie\"."},
    {"jp":"じゅうにじはんにランチをたべます。","romaji":"Jūniji han ni ranchi o tabemasu.","fr":"Je déjeune à 12h30.","note":""},
    {"jp":"あさはちじはんにあいましょう。","romaji":"Asa hachiji han ni aimashō.","fr":"Retrouvons-nous à 8h30 du matin.","note":""},
  ],
  "おく": [
    {"jp":"にほんのGDPはごひゃくちょうえんいじょうです。","romaji":"Nihon no GDP wa gohyaku-chō-en ijō desu.","fr":"Le PIB du Japon dépasse 500 000 milliards de yens.","note":"おく = 100 millions. ちょう = 1 billion (1000 おく)."},
    {"jp":"にほんのじんこうはいちおくにせんまんにんいじょうです。","romaji":"Nihon no jinkō wa ichi-oku nisen-mannin ijō desu.","fr":"La population du Japon dépasse 120 millions de personnes.","note":""},
    {"jp":"このアーティストのCDはいちおくまいうれました。","romaji":"Kono ātisuto no CD wa ichi-oku mai uremashita.","fr":"Le CD de cet artiste s'est vendu à 100 millions d'exemplaires.","note":""},
  ],
  "いちがつ": [
    {"jp":"いちがつはにほんでおしょうがつです。","romaji":"Ichigatsu wa Nihon de Oshōgatsu desu.","fr":"Janvier c'est le Nouvel An au Japon.","note":""},
    {"jp":"いちがつはとてもさむいです。あたたかいふくをもってきてください。","romaji":"Ichigatsu wa totemo samui desu. Atatakai fuku o motte kite kudasai.","fr":"Janvier est très froid. Apportez des vêtements chauds.","note":""},
    {"jp":"いちがつにほっかいどうにいきたいです。ゆきがみたい！","romaji":"Ichigatsu ni Hokkaidō ni ikitai desu. Yuki ga mitai!","fr":"Je veux aller à Hokkaido en janvier. Je veux voir la neige !","note":""},
  ],
  "にがつ": [
    {"jp":"にがつはさっぽろゆきまつりがあります。","romaji":"Nigatsu wa Sapporo yuki matsuri ga arimasu.","fr":"En février il y a le festival de neige de Sapporo.","note":""},
    {"jp":"にがつはまださむいですね。","romaji":"Nigatsu wa mada samui desu ne.","fr":"Février est encore froid.","note":""},
    {"jp":"にがつじゅうよっかはバレンタインデーです。","romaji":"Nigatsu jūyokka wa Barentain dē desu.","fr":"Le 14 février c'est la Saint-Valentin.","note":""},
  ],
  "さんがつ": [
    {"jp":"さんがつのおわりにさくらがさきはじめます。","romaji":"Sangatsu no owari ni sakura ga sakihajimemasu.","fr":"Fin mars les cerisiers commencent à fleurir.","note":""},
    {"jp":"さんがつはまだすずしいですが、はなみができます。","romaji":"Sangatsu wa mada suzushii desu ga, hanami ga dekimasu.","fr":"En mars c'est encore frais mais on peut faire du hanami.","note":""},
    {"jp":"さんがつにきょうとにいきたいです。さくらがきれいです。","romaji":"Sangatsu ni Kyōto ni ikitai desu. Sakura ga kirei desu.","fr":"Je veux aller à Kyoto en mars. Les cerisiers sont beaux.","note":""},
  ],
  "しがつ": [
    {"jp":"しがつはさくらのきせつです。にほんにきてください！","romaji":"Shigatsu wa sakura no kisetsu desu. Nihon ni kite kudasai!","fr":"Avril c'est la saison des cerisiers. Venez au Japon !","note":""},
    {"jp":"しがつはとてもきれいですね。さくらがまんかいです。","romaji":"Shigatsu wa totemo kirei desu ne. Sakura ga mankai desu.","fr":"Avril est très beau. Les cerisiers sont en pleine floraison.","note":""},
    {"jp":"しがつにきょうとのさくらをみにいきます。","romaji":"Shigatsu ni Kyōto no sakura o mi ni ikimasu.","fr":"Je vais voir les cerisiers de Kyoto en avril.","note":""},
  ],
  "ごがつ": [
    {"jp":"ごがつはゴールデンウィークです。こんでいます。","romaji":"Gogatsu wa Gōruden Wīku desu. Konde imasu.","fr":"Mai c'est la Golden Week. C'est bondé.","note":"La Golden Week est une semaine de vacances nationale fin avril - début mai."},
    {"jp":"ごがつはきもちいいですね。あたたかくてすずしい。","romaji":"Gogatsu wa kimochi ii desu ne. Atatakakute suzushii.","fr":"Mai est agréable. Chaud et frais à la fois.","note":""},
    {"jp":"ごがつにふじさんにのぼれますか？","romaji":"Gogatsu ni Fujisan ni noboremasu ka?","fr":"Peut-on gravir le Mont Fuji en mai ?","note":""},
  ],
  "ろくがつ": [
    {"jp":"ろくがつはつゆのきせつです。かさがひつようです。","romaji":"Rokugatsu wa tsuyu no kisetsu desu. Kasa ga hitsuyō desu.","fr":"Juin c'est la saison des pluies. Il faut un parapluie.","note":"つゆ = saison des pluies, de juin à mi-juillet."},
    {"jp":"ろくがつはあじさいがきれいです。","romaji":"Rokugatsu wa ajisai ga kirei desu.","fr":"En juin les hortensias sont beaux.","note":""},
    {"jp":"ろくがつはかんこうきゃくがすくないです。","romaji":"Rokugatsu wa kankō-kyaku ga sukunai desu.","fr":"En juin il y a peu de touristes.","note":""},
  ],
  "しちがつ": [
    {"jp":"しちがつにたなばたまつりがあります。","romaji":"Shichigatsu ni Tanabata matsuri ga arimasu.","fr":"En juillet il y a le festival Tanabata.","note":"Tanabata est le 7 juillet, festival des étoiles."},
    {"jp":"しちがつはあつくてじめじめしています。","romaji":"Shichigatsu wa atsukute jimejime shite imasu.","fr":"Juillet est chaud et humide.","note":""},
    {"jp":"しちがつにはなびたいかいをみました。","romaji":"Shichigatsu ni hanabi taikai o mimashita.","fr":"J'ai vu un grand feu d'artifice en juillet.","note":""},
  ],
  "はちがつ": [
    {"jp":"はちがつはにほんでいちばんあついです。","romaji":"Hachigatsu wa Nihon de ichiban atsui desu.","fr":"Août est le mois le plus chaud au Japon.","note":""},
    {"jp":"はちがつにうみにいきました。たのしかったです！","romaji":"Hachigatsu ni umi ni ikimashita. Tanoshikatta desu!","fr":"Je suis allé(e) à la mer en août. C'était amusant !","note":""},
    {"jp":"はちがつはおぼんのきせつです。","romaji":"Hachigatsu wa Obon no kisetsu desu.","fr":"Août c'est la période de l'Obon.","note":"L'Obon est la fête des ancêtres, mi-août."},
  ],
  "くがつ": [
    {"jp":"くがつはすずしくなってかいてきです。","romaji":"Kugatsu wa suzushiku natte kaiteki desu.","fr":"En septembre ça refraîchit et c'est agréable.","note":""},
    {"jp":"くがつにまたにほんにいきたいです。","romaji":"Kugatsu ni mata Nihon ni ikitai desu.","fr":"Je veux revenir au Japon en septembre.","note":""},
    {"jp":"くがつはこうようのはじまりです。","romaji":"Kugatsu wa kōyō no hajimari desu.","fr":"Septembre est le début du feuillage d'automne.","note":""},
  ],
  "じゅうがつ": [
    {"jp":"じゅうがつのこうようはほんとうにきれいです。","romaji":"Jūgatsu no kōyō wa hontō ni kirei desu.","fr":"Le feuillage d'automne d'octobre est vraiment beau.","note":""},
    {"jp":"じゅうがつはたびにいちばんいいきせつです。","romaji":"Jūgatsu wa tabi ni ichiban ii kisetsu desu.","fr":"Octobre est la meilleure saison pour voyager.","note":""},
    {"jp":"じゅうがつにきょうとのもみじをみにいきます。","romaji":"Jūgatsu ni Kyōto no momiji o mi ni ikimasu.","fr":"Je vais voir les érables rouges de Kyoto en octobre.","note":""},
  ],
  "じゅういちがつ": [
    {"jp":"じゅういちがつのにほんはとてもきれいです。こうようのきせつです。","romaji":"Jūichigatsu no Nihon wa totemo kirei desu. Kōyō no kisetsu desu.","fr":"Le Japon en novembre est très beau. C'est la saison des feuilles d'automne.","note":""},
    {"jp":"じゅういちがつにきょうとをたびしました。さいこうでした。","romaji":"Jūichigatsu ni Kyōto o tabi shimashita. Saikō deshita.","fr":"J'ai voyagé à Kyoto en novembre. C'était formidable.","note":""},
    {"jp":"じゅういちがつはすずしくてかんこうにさいてきです。","romaji":"Jūichigatsu wa suzushikute kankō ni saiteki desu.","fr":"Novembre est frais et idéal pour visiter.","note":""},
  ],
  "じゅうにがつ": [
    {"jp":"じゅうにがつはにほんでもクリスマスのかざりがあります。","romaji":"Jūnigatsu wa Nihon demo Kurisumasu no kazari ga arimasu.","fr":"En décembre même au Japon il y a des décorations de Noël.","note":""},
    {"jp":"じゅうにがつさんじゅういちにちはおおみそかです。","romaji":"Jūnigatsu sanjūichinichi wa Ōmisoka desu.","fr":"Le 31 décembre c'est le réveillon du Nouvel An au Japon.","note":""},
    {"jp":"じゅうにがつはさむいですが、イルミネーションがきれいです。","romaji":"Jūnigatsu wa samui desu ga, iruminēshon ga kirei desu.","fr":"Décembre est froid mais les illuminations sont belles.","note":""},
  ],
  "〜ひき": [
    {"jp":"このいけにきんぎょがなんびきいますか？","romaji":"Kono ike ni kingyo ga nanbiki imasu ka?","fr":"Combien de poissons rouges y a-t-il dans cet étang ?","note":"〜ひき compte les petits et moyens animaux."},
    {"jp":"うちにねこがさんびきいます。","romaji":"Uchi ni neko ga sanbiki imasu.","fr":"J'ai trois chats chez moi.","note":""},
    {"jp":"このたこやきにはたこがなんびきはいっていますか？","romaji":"Kono takoyaki ni wa tako ga nanbiki haitte imasu ka?","fr":"Combien de poulpes y a-t-il dans ces takoyaki ?","note":""},
  ],
  "〜とう": [
    {"jp":"このどうぶつえんにはぞうがなんとういますか？","romaji":"Kono dōbutsuen ni wa zō ga nantō imasu ka?","fr":"Combien d'éléphants y a-t-il dans ce zoo ?","note":"〜とう compte les grands animaux : vaches, chevaux, éléphants..."},
    {"jp":"このぼくじょうにはうしがにじっとういます。","romaji":"Kono bokujō ni wa ushi ga nijittō imasu.","fr":"Il y a 20 vaches dans cette ferme.","note":""},
    {"jp":"ほっかいどうにはうまがたくさんいます。なんとういるかわかりません。","romaji":"Hokkaidō ni wa uma ga takusan imasu. Nantō iru ka wakarimasen.","fr":"Il y a beaucoup de chevaux à Hokkaido. Je ne sais pas combien.","note":""},
  ],
  "〜そく": [
    {"jp":"にほんのたびにあたらしいくつをいっそくかいました。","romaji":"Nihon no tabi ni atarashii kutsu o issoku kaimashita.","fr":"J'ai acheté une paire de chaussures pour le voyage au Japon.","note":"〜そく compte les paires de chaussures, chaussettes."},
    {"jp":"このくつしたをにそくください。","romaji":"Kono kutsushita o nisoku kudasai.","fr":"Deux paires de ces chaussettes s'il vous plaît.","note":""},
    {"jp":"たびにはよくあるくのでくつをさんそくもってきました。","romaji":"Tabi ni wa yoku aruku no de kutsu o sansoku motte kimashita.","fr":"Pour le voyage je marche beaucoup donc j'ai apporté 3 paires de chaussures.","note":""},
  ],
  "〜ちょう": [
    {"jp":"このちずをいちちょうください。","romaji":"Kono chizu o ichichō kudasai.","fr":"Un de ces plans s'il vous plaît.","note":"〜ちょう compte les choses pliées : cartes, vêtements..."},
    {"jp":"ゆかたをにちょうかりたいです。","romaji":"Yukata o nichō karitai desu.","fr":"Je voudrais louer deux yukatas.","note":""},
    {"jp":"このてぬぐいをさんちょうください。おみやげです。","romaji":"Kono tenugui o sanchō kudasai. Omiyage desu.","fr":"Trois de ces serviettes traditionnelles s'il vous plaît. C'est pour des souvenirs.","note":""},
  ],
  "わごえい": [
    {"jp":"にほんごにはわご、かんご、がいらいごのさんしゅるいがあります。","romaji":"Nihongo ni wa wago, kango, gairaigo no san-shurui ga arimasu.","fr":"Le japonais a trois types de vocabulaire : japonais natif, sino-japonais et emprunts.","note":"わご = japonais natif, かんご = sino-japonais, がいらいご = emprunts."},
    {"jp":"ひとつ、ふたつ、みっつはわごのかぞえかたです。","romaji":"Hitotsu, futatsu, mittsu wa wago no kazoekata desu.","fr":"Un, deux, trois — c'est le système de comptage japonais natif.","note":""},
    {"jp":"いち、に、さんはかんごのかぞえかたです。","romaji":"Ichi, ni, san wa kango no kazoekata desu.","fr":"Ichi, ni, san — c'est le système sino-japonais.","note":""},
  ],
};
