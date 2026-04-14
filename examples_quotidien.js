const EXAMPLES_QUOTIDIEN = {
  "からだ": [
    {"jp":"からだにきをつけてください。","romaji":"Karada ni ki o tsukete kudasai.","fr":"Prenez soin de votre santé.","note":""},
    {"jp":"からだがおもいです。すこしやすみます。","romaji":"Karada ga omoi desu. Sukoshi yasumimasu.","fr":"Je me sens lourd(e). Je vais me reposer un peu.","note":""},
    {"jp":"にほんのりょうりはからだにいいですね。","romaji":"Nihon no ryōri wa karada ni ii desu ne.","fr":"La cuisine japonaise est bonne pour la santé.","note":""},
  ],
  "あたま": [
    {"jp":"あたまがいたいです。くすりをください。","romaji":"Atama ga itai desu. Kusuri o kudasai.","fr":"J'ai mal à la tête. Donnez-moi un médicament.","note":""},
    {"jp":"あたまをぶつけてしまいました。","romaji":"Atama o butsukete shimaimashita.","fr":"Je me suis cogné la tête.","note":""},
    {"jp":"あたまをつかってかんがえましょう。","romaji":"Atama o tsukatte kangaemasho.","fr":"Utilisons notre tête et réfléchissons.","note":""},
  ],
  "かお": [
    {"jp":"かおをあらってきます。","romaji":"Kao o aratte kimasu.","fr":"Je vais me laver le visage.","note":""},
    {"jp":"にほんじんはかおがちいさいですね。","romaji":"Nihonjin wa kao ga chiisai desu ne.","fr":"Les Japonais ont de petits visages, n'est-ce pas.","note":""},
    {"jp":"かおがあかくなりました。はずかしい！","romaji":"Kao ga akaku narimashita. Hazukashii!","fr":"Mon visage a rougi. J'ai honte !","note":""},
  ],
  "め": [
    {"jp":"めがいたいです。なにかはいりました。","romaji":"Me ga itai desu. Nanika hairimashita.","fr":"J'ai mal aux yeux. Il y a quelque chose dedans.","note":""},
    {"jp":"めぐすりをさしてもいいですか？","romaji":"Megusuri o sashite mo ii desu ka?","fr":"Puis-je mettre des gouttes ophtalmiques ?","note":""},
    {"jp":"このけしきをめにやきつけたいです。","romaji":"Kono keshiki o me ni yakitsuke tai desu.","fr":"Je veux graver ce paysage dans mes yeux.","note":""},
  ],
  "みみ": [
    {"jp":"みみがいたいです。びょういんにいきたい。","romaji":"Mimi ga itai desu. Byōin ni ikitai.","fr":"J'ai mal aux oreilles. Je veux aller à l'hôpital.","note":""},
    {"jp":"ちいさいこえでははなせません。みみがとおいです。","romaji":"Chiisai koe de wa hanasemasen. Mimi ga tōi desu.","fr":"Je ne peux pas entendre les petites voix. Je suis dur(e) d'oreille.","note":""},
    {"jp":"このおんがくはみみにきもちいいです。","romaji":"Kono ongaku wa mimi ni kimochi ii desu.","fr":"Cette musique est agréable pour les oreilles.","note":""},
  ],
  "はな": [
    {"jp":"はながつまっています。かぜをひきました。","romaji":"Hana ga tsumatte imasu. Kaze o hikimashita.","fr":"Mon nez est bouché. J'ai attrapé un rhume.","note":""},
    {"jp":"このりょうりはいいにおいですね。はなでかんじます。","romaji":"Kono ryōri wa ii nioi desu ne. Hana de kanjimasu.","fr":"Ce plat sent bon. Je le sens avec mon nez.","note":""},
    {"jp":"はなみずがとまりません。かふんしょうです。","romaji":"Hanamizu ga tomarimasen. Kafunshō desu.","fr":"J'ai le nez qui coule sans arrêt. C'est la rhinite allergique.","note":""},
  ],
  "くち": [
    {"jp":"くちのなかがいたいです。はいしゃにいきたいです。","romaji":"Kuchi no naka ga itai desu. Haisha ni ikitai desu.","fr":"J'ai mal dans la bouche. Je veux voir un dentiste.","note":""},
    {"jp":"くちをあけてください。","romaji":"Kuchi o akete kudasai.","fr":"Ouvrez la bouche s'il vous plaît.","note":""},
    {"jp":"にほんごはくちのうごかしかたがフランスごとちがいます。","romaji":"Nihongo wa kuchi no ugokashikata ga Furansugo to chigaimasu.","fr":"En japonais, la façon de bouger la bouche est différente du français.","note":""},
  ],
  "は": [
    {"jp":"はがいたいです。むしばかもしれません。","romaji":"Ha ga itai desu. Mushiba kamo shiremasen.","fr":"J'ai mal aux dents. C'est peut-être une carie.","note":""},
    {"jp":"はをみがいてから、ねます。","romaji":"Ha o migaite kara, nemasu.","fr":"Je me brosse les dents puis je dors.","note":""},
    {"jp":"にほんのはみがきはいろいろなしゅるいがありますね。","romaji":"Nihon no hamigaki wa iroiro na shurui ga arimasu ne.","fr":"Il y a toutes sortes de dentifrices japonais.","note":""},
  ],
  "くび": [
    {"jp":"くびがいたいです。まくらがわるかったかもしれません。","romaji":"Kubi ga itai desu. Makura ga warukatta kamo shiremasen.","fr":"J'ai mal au cou. L'oreiller était peut-être mauvais.","note":""},
    {"jp":"くびをまわしてみてください。かたまっていますか？","romaji":"Kubi o mawashite mite kudasai. Katamatte imasu ka?","fr":"Essayez de tourner le cou. Est-ce bloqué ?","note":""},
    {"jp":"このスカーフをくびにまきました。","romaji":"Kono sukāfu o kubi ni makimashita.","fr":"J'ai enroulé cette écharpe autour du cou.","note":""},
  ],
  "かた": [
    {"jp":"かたがこっています。マッサージをしてもらいたいです。","romaji":"Kata ga kotte imasu. Massāji o shite moraitai desu.","fr":"J'ai les épaules raides. Je veux me faire masser.","note":""},
    {"jp":"かたたたきをしましょうか？","romaji":"Kata tataki o shimashō ka?","fr":"Voulez-vous que je vous masse les épaules ?","note":""},
    {"jp":"おんせんにはいったら、かたのこりがなおりました。","romaji":"Onsen ni haittara, kata no kori ga naorimashita.","fr":"Après les sources thermales, la tension des épaules a disparu.","note":""},
  ],
  "て": [
    {"jp":"てをあらってから、たべましょう。","romaji":"Te o aratte kara, tabemasho.","fr":"Lavons-nous les mains avant de manger.","note":""},
    {"jp":"てがつめたいです。てぶくろをかいたいです。","romaji":"Te ga tsumetai desu. Tebukuro o kaitai desu.","fr":"J'ai les mains froides. Je veux acheter des gants.","note":""},
    {"jp":"すしはてでたべてもいいですか？","romaji":"Sushi wa te de tabete mo ii desu ka?","fr":"Puis-je manger les sushi avec les mains ?","note":"Oui, les sushi peuvent se manger avec les mains !"},
  ],
  "うで": [
    {"jp":"うでがいたいです。ころんでしまいました。","romaji":"Ude ga itai desu. Koronde shimaimashita.","fr":"J'ai mal au bras. Je suis tombé(e).","note":""},
    {"jp":"うでどけいをしていますか？","romaji":"Udedokei o shite imasu ka?","fr":"Portez-vous une montre ?","note":""},
    {"jp":"うでをのばしてみてください。いたいですか？","romaji":"Ude o nobashite mite kudasai. Itai desu ka?","fr":"Essayez d'étendre le bras. Avez-vous mal ?","note":""},
  ],
  "ゆび": [
    {"jp":"ゆびをきってしまいました。ばんそうこうはありますか？","romaji":"Yubi o kitte shimaimashita. Bansōkō wa arimasu ka?","fr":"Je me suis coupé(e) le doigt. Avez-vous un pansement ?","note":""},
    {"jp":"ゆびでさしてもいいですか？","romaji":"Yubi de sashite mo ii desu ka?","fr":"Puis-je montrer du doigt ?","note":"Montrer du doigt est parfois impoli au Japon."},
    {"jp":"このゆびわはどこでかいましたか？きれいですね。","romaji":"Kono yubiwa wa doko de kaimashita ka? Kirei desu ne.","fr":"Où avez-vous acheté cette bague ? Elle est belle.","note":""},
  ],
  "おなか": [
    {"jp":"おなかがいたいです。トイレはどこですか？","romaji":"Onaka ga itai desu. Toire wa doko desu ka?","fr":"J'ai mal au ventre. Où sont les toilettes ?","note":""},
    {"jp":"おなかがすきました。なにかたべましょう。","romaji":"Onaka ga sukimashita. Nanika tabemasho.","fr":"J'ai faim. Mangeons quelque chose.","note":""},
    {"jp":"たべすぎておなかがいっぱいです。","romaji":"Tabesugite onaka ga ippai desu.","fr":"J'ai trop mangé, j'ai le ventre plein.","note":""},
  ],
  "せなか": [
    {"jp":"せなかがいたいです。ベッドがかたかったです。","romaji":"Senaka ga itai desu. Beddo ga katakatta desu.","fr":"J'ai mal au dos. Le lit était dur.","note":""},
    {"jp":"せなかをたたいてもらえますか？こっています。","romaji":"Senaka o tataite moraemasu ka? Kotte imasu.","fr":"Pourriez-vous me frapper dans le dos ? C'est tendu.","note":""},
    {"jp":"せなかになにかついていますよ。","romaji":"Senaka ni nanika tsuite imasu yo.","fr":"Il y a quelque chose dans votre dos.","note":""},
  ],
  "あし": [
    {"jp":"あしがいたいです。あるきすぎました。","romaji":"Ashi ga itai desu. Aruqisugimashita.","fr":"J'ai mal aux pieds. J'ai trop marché.","note":""},
    {"jp":"あしをくじきました。びょういんにいきたいです。","romaji":"Ashi o kujikimashita. Byōin ni ikitai desu.","fr":"Je me suis tordu la cheville. Je veux aller à l'hôpital.","note":""},
    {"jp":"にほんのまちはあるきやすいですね。","romaji":"Nihon no machi wa arukiyasui desu ne.","fr":"Les villes japonaises sont faciles pour marcher.","note":""},
  ],
  "ひざ": [
    {"jp":"ひざがいたいです。かいだんがつらいです。","romaji":"Hiza ga itai desu. Kaidan ga tsurai desu.","fr":"J'ai mal aux genoux. Les escaliers sont difficiles.","note":""},
    {"jp":"ひざをついてもいいですか？ざしきせきです。","romaji":"Hiza o tsuite mo ii desu ka? Zashiki-seki desu.","fr":"Puis-je m'agenouiller ? C'est une table en tatami.","note":""},
    {"jp":"ふじさんにのぼったあと、ひざがわらわらです。","romaji":"Fujisan ni nobotta ato, hiza ga warawara desu.","fr":"Après avoir gravi le Mont Fuji, mes genoux tremblent.","note":""},
  ],
  "のどがいたい": [
    {"jp":"のどがいたいです。おちゃをください。","romaji":"Nodo ga itai desu. Ocha o kudasai.","fr":"J'ai mal à la gorge. Du thé s'il vous plaît.","note":""},
    {"jp":"のどがいたくてこえがでません。","romaji":"Nodo ga itakute koe ga demasen.","fr":"J'ai tellement mal à la gorge que je n'ai plus de voix.","note":""},
    {"jp":"のどがいたいです。かぜをひいたかもしれません。","romaji":"Nodo ga itai desu. Kaze o hiita kamo shiremasen.","fr":"J'ai mal à la gorge. J'ai peut-être attrapé un rhume.","note":""},
  ],
  "せきがでます": [
    {"jp":"せきがでます。マスクをします。","romaji":"Seki ga demasu. Masuku o shimasu.","fr":"Je tousse. Je vais mettre un masque.","note":"Porter un masque quand on tousse est une politesse au Japon."},
    {"jp":"せきがでますが、ねつはありません。","romaji":"Seki ga demasu ga, netsu wa arimasen.","fr":"Je tousse mais je n'ai pas de fièvre.","note":""},
    {"jp":"せきがひどいです。くすりをのみたいです。","romaji":"Seki ga hidoi desu. Kusuri o nomitai desu.","fr":"Je tousse beaucoup. Je veux prendre des médicaments.","note":""},
  ],
  "はながつまっています": [
    {"jp":"はながつまっています。かふんしょうです。","romaji":"Hana ga tsumatte imasu. Kafunshō desu.","fr":"Mon nez est bouché. C'est le rhume des foins.","note":"かふんしょう = pollinose, très répandue au Japon au printemps."},
    {"jp":"はながつまっていてにおいがわかりません。","romaji":"Hana ga tsumatte ite nioi ga wakarimasen.","fr":"Mon nez est bouché et je ne sens rien.","note":""},
    {"jp":"はながつまっています。のどもいたいです。","romaji":"Hana ga tsumatte imasu. Nodo mo itai desu.","fr":"Mon nez est bouché. La gorge aussi.","note":""},
  ],
  "かゆい": [
    {"jp":"かゆいです。かみさされたかもしれません。","romaji":"Kayui desu. Ka ni sasareta kamo shiremasen.","fr":"Ça démange. J'ai peut-être été piqué(e) par un moustique.","note":""},
    {"jp":"かゆいですが、かいてはいけません。","romaji":"Kayui desu ga, kaite wa ikemasen.","fr":"Ça démange mais il ne faut pas se gratter.","note":""},
    {"jp":"かゆみどめはありますか？むしさされました。","romaji":"Kayumidome wa arimasu ka? Mushi ni sararemashita.","fr":"Avez-vous quelque chose contre les démangeaisons ?","note":""},
  ],
  "けつあつをはかってください": [
    {"jp":"けつあつをはかってください。たかいかもしれません。","romaji":"Ketsuatsu o hakatte kudasai. Takai kamo shiremasen.","fr":"Prenez ma tension s'il vous plaît. Elle est peut-être élevée.","note":""},
    {"jp":"けつあつをはかってください。ずっとあたまがいたいです。","romaji":"Ketsuatsu o hakatte kudasai. Zutto atama ga itai desu.","fr":"Prenez ma tension s'il vous plaît. J'ai mal à la tête depuis longtemps.","note":""},
    {"jp":"けつあつをはかってください。めまいがします。","romaji":"Ketsuatsu o hakatte kudasai. Memai ga shimasu.","fr":"Prenez ma tension s'il vous plaît. J'ai des vertiges.","note":""},
  ],
  "アレルギーはっしんがあります": [
    {"jp":"アレルギーはっしんがあります。なにかたべたかもしれません。","romaji":"Arerugī hasshin ga arimasu. Nanika tabeta kamo shiremasen.","fr":"J'ai une éruption allergique. J'ai peut-être mangé quelque chose.","note":""},
    {"jp":"アレルギーはっしんがあります。かゆくてたまりません。","romaji":"Arerugī hasshin ga arimasu. Kayukute tamarimasen.","fr":"J'ai une éruption allergique. Les démangeaisons sont insupportables.","note":""},
    {"jp":"アレルギーはっしんがあります。いしゃにみせたいです。","romaji":"Arerugī hasshin ga arimasu. Isha ni misetai desu.","fr":"J'ai une éruption allergique. Je veux montrer ça à un médecin.","note":""},
  ],
  "かぞく": [
    {"jp":"かぞくとにほんにきました。たのしいたびです。","romaji":"Kazoku to Nihon ni kimashita. Tanoshii tabi desu.","fr":"Je suis venu(e) au Japon avec ma famille.","note":""},
    {"jp":"かぞくにおみやげをかいました。","romaji":"Kazoku ni omiyage o kaimashita.","fr":"J'ai acheté des souvenirs pour ma famille.","note":""},
    {"jp":"かぞくはなんにんですか？","romaji":"Kazoku wa nannin desu ka?","fr":"Votre famille est de combien de personnes ?","note":""},
  ],
  "ちち": [
    {"jp":"ちちはフランスにいます。","romaji":"Chichi wa Furansu ni imasu.","fr":"Mon père est en France.","note":"ちち = mon père (humble)."},
    {"jp":"ちちもさけがすきです。","romaji":"Chichi mo sake ga suki desu.","fr":"Mon père aussi aime le saké.","note":""},
    {"jp":"ちちのたんじょうびにさけをおくりたいです。","romaji":"Chichi no tanjōbi ni sake o okuritai desu.","fr":"Je veux envoyer du saké pour l'anniversaire de mon père.","note":""},
  ],
  "はは": [
    {"jp":"はははにほんりょうりがじょうずです。","romaji":"Haha wa nihon ryōri ga jōzu desu.","fr":"Ma mère est bonne en cuisine japonaise.","note":"はは = ma mère (humble)."},
    {"jp":"ははにおみやげをかいました。わがしです。","romaji":"Haha ni omiyage o kaimashita. Wagashi desu.","fr":"J'ai acheté un souvenir pour ma mère.","note":""},
    {"jp":"はははにほんがすきです。いっしょにきました。","romaji":"Haha wa Nihon ga suki desu. Issho ni kimashita.","fr":"Ma mère aime le Japon. On est venus ensemble.","note":""},
  ],
  "おっと": [
    {"jp":"おっとはさけがすきです。おみやげにかいます。","romaji":"Otto wa sake ga suki desu. Omiyage ni kaimasu.","fr":"Mon mari aime le saké. Je vais en acheter comme souvenir.","note":""},
    {"jp":"おっとといっしょにほんにきました。","romaji":"Otto to issho ni Nihon ni kimashita.","fr":"Je suis venue au Japon avec mon mari.","note":""},
    {"jp":"おっとはいまりょかんにいます。","romaji":"Otto wa ima ryokan ni imasu.","fr":"Mon mari est actuellement au ryokan.","note":""},
  ],
  "つま": [
    {"jp":"つまはにほんりょうりがだいすきです。","romaji":"Tsuma wa nihon ryōri ga daisuki desu.","fr":"Ma femme adore la cuisine japonaise.","note":""},
    {"jp":"つまとふたりでりょかんにとまりました。","romaji":"Tsuma to futari de ryokan ni tomarimashita.","fr":"Ma femme et moi avons séjourné dans un ryokan.","note":""},
    {"jp":"つまへのおみやげにきものをかいました。","romaji":"Tsuma e no omiyage ni kimono o kaimashita.","fr":"J'ai acheté un kimono comme souvenir pour ma femme.","note":""},
  ],
  "こども": [
    {"jp":"こどもがいます。にほんのまつりにつれていきたいです。","romaji":"Kodomo ga imasu. Nihon no matsuri ni tsurete ikitai desu.","fr":"J'ai des enfants. Je veux les emmener à un festival japonais.","note":""},
    {"jp":"こどものためのにほんごのほんはありますか？","romaji":"Kodomo no tame no nihongo no hon wa arimasu ka?","fr":"Avez-vous des livres de japonais pour enfants ?","note":""},
    {"jp":"このこどもはにほんごがじょうずですね。","romaji":"Kono kodomo wa nihongo ga jōzu desu ne.","fr":"Cet enfant est bon en japonais, n'est-ce pas.","note":""},
  ],
  "かぞくはなんにんですか": [
    {"jp":"かぞくはなんにんですか？わたしはよにんかぞくです。","romaji":"Kazoku wa nannin desu ka? Watashi wa yonin kazoku desu.","fr":"Votre famille est de combien ? Nous sommes quatre.","note":""},
    {"jp":"かぞくはなんにんですか？にほんにつれてきましたか？","romaji":"Kazoku wa nannin desu ka? Nihon ni tsurete kimashita ka?","fr":"Votre famille est de combien ? Vous les avez amenés ?","note":""},
    {"jp":"かぞくはなんにんですか？ひとりっこですか？","romaji":"Kazoku wa nannin desu ka? Hitorikko desu ka?","fr":"Votre famille est de combien ? Enfant unique ?","note":""},
  ],
  "けっこんしています": [
    {"jp":"けっこんしています。つまといっしょにきました。","romaji":"Kekkon shite imasu. Tsuma to issho ni kimashita.","fr":"Je suis marié(e). Je suis venu(e) avec ma femme.","note":""},
    {"jp":"けっこんしていますか？—はい、じゅうねんになります。","romaji":"Kekkon shite imasu ka? — Hai, jū-nen ni narimasu.","fr":"Êtes-vous marié(e) ? — Oui, ça fait dix ans.","note":""},
    {"jp":"けっこんしています。にほんでしんこんりょこうをしました。","romaji":"Kekkon shite imasu. Nihon de shinkon ryokō o shimashita.","fr":"Je suis marié(e). J'ai fait mon voyage de noces au Japon.","note":""},
  ],
  "てんき": [
    {"jp":"きょうのてんきはどうですか？","romaji":"Kyō no tenki wa dō desu ka?","fr":"Quel temps fait-il aujourd'hui ?","note":""},
    {"jp":"てんきよほうによると、あしたはあめです。","romaji":"Tenki-yohō ni yoru to, ashita wa ame desu.","fr":"Selon les prévisions, il pleuvra demain.","note":""},
    {"jp":"にほんのてんきはフランスとちがいますね。","romaji":"Nihon no tenki wa Furansu to chigaimasu ne.","fr":"Le temps au Japon est différent de la France.","note":""},
  ],
  "はれ": [
    {"jp":"はれています！かんこうにさいこうですね。","romaji":"Harete imasu! Kankō ni saikō desu ne.","fr":"Il fait beau ! Parfait pour visiter.","note":""},
    {"jp":"はれのひにふじさんがよくみえます。","romaji":"Hare no hi ni Fujisan ga yoku miemasu.","fr":"Par beau temps on voit bien le Mont Fuji.","note":""},
    {"jp":"あしたははれるといいですね。","romaji":"Ashita wa hareru to ii desu ne.","fr":"J'espère qu'il fera beau demain.","note":""},
  ],
  "くもり": [
    {"jp":"くもりですが、あめはふっていません。でかけましょう。","romaji":"Kumori desu ga, ame wa futte imasen. Dekakemasho.","fr":"C'est nuageux mais il ne pleut pas. Sortons.","note":""},
    {"jp":"くもりのひはふじさんがみえません。","romaji":"Kumori no hi wa Fujisan ga miemasen.","fr":"Par temps nuageux on ne voit pas le Mont Fuji.","note":""},
    {"jp":"くもりのちはれのよほうです。","romaji":"Kumori nochi hare no yohō desu.","fr":"Prévisions : nuageux puis ensoleillé.","note":""},
  ],
  "あめ": [
    {"jp":"あめがふっています。かさをかってください。","romaji":"Ame ga futte imasu. Kasa o katte kudasai.","fr":"Il pleut. Achetez un parapluie.","note":""},
    {"jp":"あめのなかでもきょうとはきれいです。","romaji":"Ame no naka de mo Kyōto wa kirei desu.","fr":"Même sous la pluie Kyoto est beau.","note":""},
    {"jp":"あめがやみました！さんぽにいきましょう。","romaji":"Ame ga yamimashita! Sanpo ni ikimashō.","fr":"La pluie s'est arrêtée ! Allons nous promener.","note":""},
  ],
  "ゆき": [
    {"jp":"ゆきがふっています。しろいけしきがきれいです。","romaji":"Yuki ga futte imasu. Shiroi keshiki ga kirei desu.","fr":"Il neige. Le paysage blanc est beau.","note":""},
    {"jp":"ほっかいどうでゆきをみたいです。","romaji":"Hokkaidō de yuki o mitai desu.","fr":"Je veux voir la neige à Hokkaido.","note":""},
    {"jp":"ゆきのなかのおんせんはさいこうですよ！","romaji":"Yuki no naka no onsen wa saikō desu yo!","fr":"Les sources thermales dans la neige, c'est formidable !","note":""},
  ],
  "あつい": [
    {"jp":"あついですね！アイスをたべましょう。","romaji":"Atsui desu ne! Aisu o tabemasho.","fr":"Il fait chaud ! Mangeons une glace.","note":""},
    {"jp":"はちがつのにほんはほんとうにあついです。","romaji":"Hachigatsu no Nihon wa hontō ni atsui desu.","fr":"Le Japon en août est vraiment chaud.","note":""},
    {"jp":"あついので、クーラーをつけてもいいですか？","romaji":"Atsui no de, kūrā o tsukete mo ii desu ka?","fr":"Comme il fait chaud, puis-je allumer la clim ?","note":""},
  ],
  "さむい": [
    {"jp":"さむいですね。コートをかってください。","romaji":"Samui desu ne. Kōto o katte kudasai.","fr":"Il fait froid. Achetez un manteau.","note":""},
    {"jp":"さむくてもおんせんにはいるとあたたまります。","romaji":"Samukute mo onsen ni hairu to atatamari masu.","fr":"Même s'il fait froid, les sources thermales réchauffent.","note":""},
    {"jp":"にほんのふゆはさむいですが、ゆきがきれいです。","romaji":"Nihon no fuyu wa samui desu ga, yuki ga kirei desu.","fr":"L'hiver japonais est froid mais la neige est belle.","note":""},
  ],
  "たいふう": [
    {"jp":"たいふうがちかづいています。そとにでないでください。","romaji":"Taifū ga chikazuite imasu. Soto ni denaide kudasai.","fr":"Un typhon approche. Ne sortez pas.","note":""},
    {"jp":"たいふうのためにでんしゃがとまりました。","romaji":"Taifū no tame ni densha ga tomarimashita.","fr":"Les trains se sont arrêtés à cause du typhon.","note":""},
    {"jp":"たいふうのあとはてんきがよくなります。","romaji":"Taifū no ato wa tenki ga yoku narimasu.","fr":"Après le typhon le temps s'améliore.","note":""},
  ],
  "じしんがありました": [
    {"jp":"じしんがありました。だいじょうぶですか？","romaji":"Jishin ga arimashita. Daijōbu desu ka?","fr":"Il y a eu un tremblement de terre. Ça va ?","note":""},
    {"jp":"じしんがありました。つなみのきけんはありますか？","romaji":"Jishin ga arimashita. Tsunami no kiken wa arimasu ka?","fr":"Il y a eu un tremblement de terre. Y a-t-il un risque de tsunami ?","note":""},
    {"jp":"じしんがありました。ここはあんぜんですか？","romaji":"Jishin ga arimashita. Koko wa anzen desu ka?","fr":"Il y a eu un tremblement de terre. Est-ce sûr ici ?","note":""},
  ],
  "きょうはいいてんきですね": [
    {"jp":"きょうはいいてんきですね！かんこうにいきましょう。","romaji":"Kyō wa ii tenki desu ne! Kankō ni ikimashō.","fr":"Il fait beau aujourd'hui ! Allons visiter.","note":""},
    {"jp":"きょうはいいてんきですね。ふじさんがよくみえます。","romaji":"Kyō wa ii tenki desu ne. Fujisan ga yoku miemasu.","fr":"Il fait beau aujourd'hui. On voit bien le Mont Fuji.","note":""},
    {"jp":"きょうはいいてんきですね。さんぽにちょうどいいです。","romaji":"Kyō wa ii tenki desu ne. Sanpo ni chōdo ii desu.","fr":"Il fait beau aujourd'hui. Parfait pour se promener.","note":""},
  ],
  "しろ": [
    {"jp":"しろいふじさんがみえます。","romaji":"Shiroi Fujisan ga miemasu.","fr":"Je vois le Mont Fuji blanc.","note":""},
    {"jp":"このしろいきものはきれいですね。","romaji":"Kono shiroi kimono wa kirei desu ne.","fr":"Ce kimono blanc est beau.","note":""},
    {"jp":"しろいゆきがふっています。","romaji":"Shiroi yuki ga futte imasu.","fr":"De la neige blanche tombe.","note":""},
  ],
  "くろ": [
    {"jp":"くろのスーツをきています。","romaji":"Kuro no sūtsu o kite imasu.","fr":"Je porte un costume noir.","note":""},
    {"jp":"このくろいそばはめずらしいですね。","romaji":"Kono kuroi soba wa mezurashii desu ne.","fr":"Ces soba noirs sont rares.","note":""},
    {"jp":"くろとしろのコントラストがきれいです。","romaji":"Kuro to shiro no kontosuto ga kirei desu.","fr":"Le contraste noir et blanc est beau.","note":""},
  ],
  "あか": [
    {"jp":"あかいとりいがきれいですね。","romaji":"Akai torii ga kirei desu ne.","fr":"Le torii rouge est beau.","note":""},
    {"jp":"あかいもみじがきれいです。あきですね。","romaji":"Akai momiji ga kirei desu. Aki desu ne.","fr":"Les érables rouges sont beaux. C'est l'automne.","note":""},
    {"jp":"あかいさけのラベルをください。おみやげです。","romaji":"Akai sake no raberu o kudasai. Omiyage desu.","fr":"La bouteille à l'étiquette rouge s'il vous plaît.","note":""},
  ],
  "あお": [
    {"jp":"あおいそらがきれいですね！","romaji":"Aoi sora ga kirei desu ne!","fr":"Le ciel bleu est beau !","note":"あお = bleu (ciel, mer) mais aussi vert (feu tricolore)."},
    {"jp":"しんごうがあおになりました。わたりましょう。","romaji":"Shingō ga ao ni narimashita. Watarimashō.","fr":"Le feu est passé au vert. Traversons.","note":"Au Japon \"あお\" s'utilise pour le feu vert."},
    {"jp":"あおいうみがみたいです。おきなわにいきたい！","romaji":"Aoi umi ga mitai desu. Okinawa ni ikitai!","fr":"Je veux voir la mer bleue. Je veux aller à Okinawa !","note":""},
  ],
  "きいろ": [
    {"jp":"きいろいいちょうのきがきれいです。","romaji":"Kiiro no ichō no ki ga kirei desu.","fr":"Les ginkgos jaunes sont beaux.","note":""},
    {"jp":"きいろいかばんがほしいです。","romaji":"Kiiro no kaban ga hoshii desu.","fr":"Je veux un sac jaune.","note":""},
    {"jp":"あきのきいろはとてもきれいですね。","romaji":"Aki no kiiro wa totemo kirei desu ne.","fr":"Le jaune de l'automne est très beau.","note":""},
  ],
  "みどり": [
    {"jp":"このにわのみどりがきれいですね。","romaji":"Kono niwa no midori ga kirei desu ne.","fr":"Le vert de ce jardin est beau.","note":""},
    {"jp":"みどりのきせつにきょうとにいきたいです。","romaji":"Midori no kisetsu ni Kyōto ni ikitai desu.","fr":"Je veux aller à Kyoto pendant la saison verdoyante.","note":""},
    {"jp":"しんりょくのにほんはきれいですよ。","romaji":"Shinryoku no Nihon wa kirei desu yo.","fr":"Le Japon en verdure printanière est beau.","note":""},
  ],
  "むらさき": [
    {"jp":"このむらさきのきものはきれいですね。","romaji":"Kono murasaki no kimono wa kirei desu ne.","fr":"Ce kimono violet est beau.","note":""},
    {"jp":"むらさきのあじさいがきれいです。","romaji":"Murasaki no ajisai ga kirei desu.","fr":"Les hortensias violets sont beaux.","note":""},
    {"jp":"むらさきはにほんのでんとうのいろですね。","romaji":"Murasaki wa Nihon no dentō no iro desu ne.","fr":"Le violet est une couleur traditionnelle japonaise.","note":""},
  ],
  "このいろがすきです": [
    {"jp":"このいろがすきです。おなじいろのをください。","romaji":"Kono iro ga suki desu. Onaji iro no o kudasai.","fr":"J'aime cette couleur. Donnez-moi la même couleur.","note":""},
    {"jp":"このいろがすきです。ほかにもありますか？","romaji":"Kono iro ga suki desu. Hoka ni mo arimasu ka?","fr":"J'aime cette couleur. En avez-vous d'autres ?","note":""},
    {"jp":"このいろがすきです。にほんのあきのいろですね。","romaji":"Kono iro ga suki desu. Nihon no aki no iro desu ne.","fr":"J'aime cette couleur. C'est la couleur de l'automne japonais.","note":""},
  ],
  "べつのいろはありますか": [
    {"jp":"べつのいろはありますか？あかかあおがほしいです。","romaji":"Betsu no iro wa arimasu ka? Aka ka ao ga hoshii desu.","fr":"Avez-vous une autre couleur ? Je veux du rouge ou du bleu.","note":""},
    {"jp":"べつのいろはありますか？くらいいろがいいです。","romaji":"Betsu no iro wa arimasu ka? Kurai iro ga ii desu.","fr":"Avez-vous une autre couleur ? Je préfère sombre.","note":""},
    {"jp":"べつのいろはありますか？うすいいろがすきです。","romaji":"Betsu no iro wa arimasu ka? Usui iro ga suki desu.","fr":"Avez-vous une autre couleur ? J'aime les teintes claires.","note":""},
  ],
  "おおきい": [
    {"jp":"このスーツケースはおおきすぎます。コインロッカーにはいりません。","romaji":"Kono sūtsukēsu wa ōkisugimasu. Koin-rokkā ni hairimasen.","fr":"Cette valise est trop grande pour la consigne.","note":""},
    {"jp":"おおきいこえではなさないでください。","romaji":"Ōkii koe de hanasanaide kudasai.","fr":"Ne parlez pas à voix haute s'il vous plaît.","note":""},
    {"jp":"とうきょうはおおきいまちですね。まいごになりそうです。","romaji":"Tōkyō wa ōkii machi desu ne. Maigo ni narisō desu.","fr":"Tokyo est une grande ville. On risque de se perdre.","note":""},
  ],
  "ちいさい": [
    {"jp":"このへやはちいさいですが、きれいです。","romaji":"Kono heya wa chiisai desu ga, kirei desu.","fr":"Cette chambre est petite mais propre.","note":""},
    {"jp":"ちいさいサイズはありますか？","romaji":"Chiisai saizu wa arimasu ka?","fr":"Avez-vous une petite taille ?","note":""},
    {"jp":"にほんのコンビニはちいさくてもなんでもあります。","romaji":"Nihon no konbini wa chiisai demo nandemo arimasu.","fr":"Les konbini japonais sont petits mais ont tout.","note":""},
  ],
  "あたらしい": [
    {"jp":"あたらしいレストランをみつけました。いっしょにいきましょう。","romaji":"Atarashii resutoran o mitsukemashita. Issho ni ikimashō.","fr":"J'ai trouvé un nouveau restaurant. Allons-y ensemble.","note":""},
    {"jp":"このホテルはあたらしくてきれいですね。","romaji":"Kono hoteru wa atarashikute kirei desu ne.","fr":"Cet hôtel est neuf et beau.","note":""},
    {"jp":"あたらしいにほんごをまいにちひとつおぼえます。","romaji":"Atarashii nihongo o mainichi hitotsu oboememasu.","fr":"J'apprends un nouveau mot japonais chaque jour.","note":""},
  ],
  "ふるい": [
    {"jp":"このふるいおてらはなんねんのれきしがありますか？","romaji":"Kono furui otera wa nannen no rekishi ga arimasu ka?","fr":"Combien d'années d'histoire a ce vieux temple ?","note":""},
    {"jp":"ふるいりょかんにとまるのがすきです。","romaji":"Furui ryokan ni tomaru no ga suki desu.","fr":"J'aime séjourner dans les vieux ryokans.","note":""},
    {"jp":"ふるいまちなみがきれいですね。","romaji":"Furui machinami ga kirei desu ne.","fr":"Les vieilles rues sont belles.","note":""},
  ],
  "きれい": [
    {"jp":"きょうとはほんとうにきれいですね！","romaji":"Kyōto wa hontō ni kirei desu ne!","fr":"Kyoto est vraiment beau !","note":"きれい = beau / propre selon le contexte."},
    {"jp":"このりょかんはきれいですね。まんぞくしています。","romaji":"Kono ryokan wa kirei desu ne. Manzoku shite imasu.","fr":"Ce ryokan est propre. Je suis satisfait(e).","note":""},
    {"jp":"きれいなさくらをしゃしんにとりました。","romaji":"Kirei na sakura o shashin ni torimashita.","fr":"J'ai photographié les beaux cerisiers.","note":""},
  ],
  "かわいい": [
    {"jp":"このねこはかわいいですね！","romaji":"Kono neko wa kawaii desu ne!","fr":"Ce chat est mignon !","note":""},
    {"jp":"このにほんのかわいいざっかをかいました。","romaji":"Kono Nihon no kawaii zakka o kaimashita.","fr":"J'ai acheté ces mignons articles japonais.","note":""},
    {"jp":"かわいいきものをきてみたいです。","romaji":"Kawaii kimono o kite mitai desu.","fr":"Je veux essayer un joli kimono.","note":""},
  ],
  "おもしろい": [
    {"jp":"にほんのぶんかはおもしろいですね。","romaji":"Nihon no bunka wa omoshiroi desu ne.","fr":"La culture japonaise est intéressante.","note":""},
    {"jp":"このまんがはおもしろいですよ。よんでみてください。","romaji":"Kono manga wa omoshiroi desu yo. Yonde mite kudasai.","fr":"Ce manga est intéressant. Essayez de le lire.","note":""},
    {"jp":"おもしろいけいけんをしました。にほんのまつりです。","romaji":"Omoshiroi keiken o shimashita. Nihon no matsuri desu.","fr":"J'ai eu une expérience intéressante. Un festival japonais.","note":""},
  ],
  "むずかしい": [
    {"jp":"にほんごはむずかしいですが、おもしろいです。","romaji":"Nihongo wa muzukashii desu ga, omoshiroi desu.","fr":"Le japonais est difficile mais intéressant.","note":""},
    {"jp":"このかんじはむずかしいですね。よめません。","romaji":"Kono kanji wa muzukashii desu ne. Yomemasen.","fr":"Ce kanji est difficile. Je ne peux pas le lire.","note":""},
    {"jp":"むずかしいですが、あきらめません！","romaji":"Muzukashii desu ga, akiramemasen!","fr":"C'est difficile mais je n'abandonne pas !","note":""},
  ],
  "たのしい": [
    {"jp":"にほんのたびはたのしいですね！","romaji":"Nihon no tabi wa tanoshii desu ne!","fr":"Le voyage au Japon est agréable !","note":""},
    {"jp":"たのしいじかんはあっというまにすぎますね。","romaji":"Tanoshii jikan wa attō iu ma ni sugimasu ne.","fr":"Le temps agréable passe vite.","note":""},
    {"jp":"にほんごのべんきょうはたのしいですか？","romaji":"Nihongo no benkyō wa tanoshii desu ka?","fr":"L'apprentissage du japonais est-il agréable ?","note":""},
  ],
  "めずらしい": [
    {"jp":"これはめずらしいさけですね。どこからですか？","romaji":"Kore wa mezurashii sake desu ne. Doko kara desu ka?","fr":"C'est un saké rare. D'où vient-il ?","note":""},
    {"jp":"このめずらしいりょうりをたべてみたいです。","romaji":"Kono mezurashii ryōri o tabete mitai desu.","fr":"Je veux essayer ce plat rare.","note":""},
    {"jp":"にほんではめずらしいものをたくさんみました。","romaji":"Nihon dewa mezurashii mono o takusan mimashita.","fr":"Au Japon j'ai vu beaucoup de choses rares.","note":""},
  ],
  "なつかしい": [
    {"jp":"このきょくはなつかしいですね。こどものころにきいていました。","romaji":"Kono kyoku wa natsukashii desu ne.","fr":"Cette chanson est nostalgique. Je l'écoutais enfant.","note":"なつかしい = nostalgique, qui rappelle le passé avec émotion."},
    {"jp":"にほんにもどってきてなつかしいきもちになりました。","romaji":"Nihon ni modotte kite natsukashii kimochi ni narimashita.","fr":"En revenant au Japon j'ai eu un sentiment nostalgique.","note":""},
    {"jp":"このにおいはなつかしいです。なんかおもいだします。","romaji":"Kono nioi wa natsukashii desu. Nanka omoidashimasu.","fr":"Cette odeur est nostalgique. Elle me rappelle quelque chose.","note":""},
  ],
  "いく": [
    {"jp":"きょうとにいきます。しんかんせんでいきます。","romaji":"Kyōto ni ikimasu. Shinkansen de ikimasu.","fr":"Je vais à Kyoto. En Shinkansen.","note":""},
    {"jp":"どこにいきたいですか？おすすめをおしえてください。","romaji":"Doko ni ikitai desu ka? Osusume o oshiete kudasai.","fr":"Où voulez-vous aller ? Donnez-moi vos recommandations.","note":""},
    {"jp":"いっしょにいきましょう！","romaji":"Issho ni ikimashō!","fr":"Allons-y ensemble !","note":""},
  ],
  "くる": [
    {"jp":"フランスからにほんにきました。","romaji":"Furansu kara Nihon ni kimashita.","fr":"Je suis venu(e) au Japon depuis la France.","note":""},
    {"jp":"またにほんにきたいです！","romaji":"Mata Nihon ni kitai desu!","fr":"Je veux revenir au Japon !","note":""},
    {"jp":"すみません、こちらにきてください。","romaji":"Sumimasen, kochira ni kite kudasai.","fr":"Excusez-moi, venez par ici s'il vous plaît.","note":""},
  ],
  "たべる": [
    {"jp":"にほんりょうりをたくさんたべました！","romaji":"Nihon ryōri o takusan tabemashita!","fr":"J'ai beaucoup mangé de cuisine japonaise !","note":""},
    {"jp":"なにをたべたいですか？すしはどうですか？","romaji":"Nani o tabetai desu ka? Sushi wa dō desu ka?","fr":"Que voulez-vous manger ? Et les sushi ?","note":""},
    {"jp":"このりょうりはたべたことがありますか？","romaji":"Kono ryōri wa tabeta koto ga arimasu ka?","fr":"Avez-vous déjà mangé ce plat ?","note":""},
  ],
  "のむ": [
    {"jp":"さけをいっぱいのみましょう！かんぱい！","romaji":"Sake o ippai nomimashō! Kanpai!","fr":"Buvons un verre de saké ! Santé !","note":""},
    {"jp":"このくすりをたべたあとにのんでください。","romaji":"Kono kusuri o tabeta ato ni nonde kudasai.","fr":"Prenez ce médicament après avoir mangé.","note":""},
    {"jp":"なにをのみますか？おちゃにしますか？","romaji":"Nani o nomimasu ka? Ocha ni shimasu ka?","fr":"Que buvez-vous ? Du thé vert ?","note":""},
  ],
  "みる": [
    {"jp":"ふじさんをみたいです！","romaji":"Fujisan o mitai desu!","fr":"Je veux voir le Mont Fuji !","note":""},
    {"jp":"このちずをみてください。ここにいます。","romaji":"Kono chizu o mite kudasai. Koko ni imasu.","fr":"Regardez cette carte. Je suis ici.","note":""},
    {"jp":"にほんのえいがをみたことがありますか？","romaji":"Nihon no eiga o mita koto ga arimasu ka?","fr":"Avez-vous déjà vu un film japonais ?","note":""},
  ],
  "はなす": [
    {"jp":"にほんごをすこしはなせます。","romaji":"Nihongo o sukoshi hanasemasu.","fr":"Je peux parler un peu japonais.","note":""},
    {"jp":"えいごがはなせるひとはいますか？","romaji":"Eigo ga hanaseru hito wa imasu ka?","fr":"Y a-t-il quelqu'un qui parle anglais ?","note":""},
    {"jp":"もっとゆっくりはなしてもらえますか？","romaji":"Motto yukkuri hanashite moraemasu ka?","fr":"Pourriez-vous parler plus lentement ?","note":""},
  ],
  "かう": [
    {"jp":"おみやげをかいたいです。どこがいいですか？","romaji":"Omiyage o kaitai desu. Doko ga ii desu ka?","fr":"Je veux acheter des souvenirs. Où est-ce bien ?","note":""},
    {"jp":"このさけをかいます。おいしそうです。","romaji":"Kono sake o kaimasu. Oishisō desu.","fr":"J'achète ce saké. Il a l'air délicieux.","note":""},
    {"jp":"いちばんにんきのあるものをかいたいです。","romaji":"Ichiban ninki no aru mono o kaitai desu.","fr":"Je veux acheter l'article le plus populaire.","note":""},
  ],
  "まつ": [
    {"jp":"ここでまっていてください。すぐもどります。","romaji":"Koko de matte ite kudasai. Sugu modorimasu.","fr":"Attendez ici s'il vous plaît. Je reviens vite.","note":""},
    {"jp":"どのくらいまちますか？","romaji":"Dono kurai machimasu ka?","fr":"Combien de temps faut-il attendre ?","note":""},
    {"jp":"にほんじんはならんでまつのがじょうずですね。","romaji":"Nihonjin wa narande matsu no ga jōzu desu ne.","fr":"Les Japonais font bien la queue.","note":""},
  ],
  "〜てみます": [
    {"jp":"このりょうりをたべてみます。はじめてです。","romaji":"Kono ryōri o tabete mimasu. Hajimete desu.","fr":"Je vais goûter ce plat. Première fois.","note":"〜てみる = essayer de faire ~."},
    {"jp":"にほんのおんせんにはいってみます。","romaji":"Nihon no onsen ni haitte mimasu.","fr":"Je vais essayer les sources thermales.","note":""},
    {"jp":"ゆかたをきてみます。","romaji":"Yukata o kite mimasu.","fr":"Je vais essayer le yukata.","note":""},
  ],
  "〜たいです": [
    {"jp":"おんせんにはいりたいです！","romaji":"Onsen ni hairitai desu!","fr":"Je veux entrer dans les sources thermales !","note":"〜たい = vouloir faire ~."},
    {"jp":"にほんりょうりをもっとたべたいです。","romaji":"Nihon ryōri o motto tabetai desu.","fr":"Je veux manger encore plus de cuisine japonaise.","note":""},
    {"jp":"もっとにほんごがはなせるようになりたいです。","romaji":"Motto nihongo ga hanaseru yō ni naritai desu.","fr":"Je veux pouvoir parler encore mieux japonais.","note":""},
  ],
  "〜てしまいました": [
    {"jp":"でんしゃにのりおくれてしまいました。","romaji":"Densha ni noriokurete shimaimashita.","fr":"J'ai raté le train (à mon grand regret).","note":"〜てしまう = avoir fait ~ (avec regret)."},
    {"jp":"さいふをわすれてしまいました。","romaji":"Saifu o wasurete shimaimashita.","fr":"J'ai oublié mon portefeuille.","note":""},
    {"jp":"さけをのみすぎてしまいました。あたまがいたいです。","romaji":"Sake o nomisugite shimaimashita. Atama ga itai desu.","fr":"J'ai trop bu de saké. J'ai mal à la tête.","note":""},
  ],
  "にく": [
    {"jp":"にくりょうりはありますか？ぎゅうにくがすきです。","romaji":"Niku ryōri wa arimasu ka? Gyūniku ga suki desu.","fr":"Avez-vous des plats de viande ? J'aime le bœuf.","note":""},
    {"jp":"このにくはやわらかくておいしいですね。","romaji":"Kono niku wa yawarakakute oishii desu ne.","fr":"Cette viande est tendre et délicieuse.","note":""},
    {"jp":"わぎゅうをたべたいです。どこがおすすめですか？","romaji":"Wagyū o tabetai desu. Doko ga osusume desu ka?","fr":"Je veux manger du wagyu. Où recommandez-vous ?","note":""},
  ],
  "さかな": [
    {"jp":"さかなりょうりがすきです。にほんのさかなはしんせんですね。","romaji":"Sakana ryōri ga suki desu. Nihon no sakana wa shinsen desu ne.","fr":"J'aime les plats de poisson. Le poisson japonais est frais.","note":""},
    {"jp":"このさかなはなんていいますか？","romaji":"Kono sakana wa nante iimasu ka?","fr":"Comment appelle-t-on ce poisson ?","note":""},
    {"jp":"さかなアレルギーがあります。きをつけてください。","romaji":"Sakana arerugī ga arimasu. Ki o tsukete kudasai.","fr":"J'ai une allergie au poisson. Faites attention.","note":""},
  ],
  "おにぎり": [
    {"jp":"コンビニのおにぎりはおいしいですよ。やすいし。","romaji":"Konbini no onigiri wa oishii desu yo. Yasui shi.","fr":"Les onigiri du konbini sont bons. Et pas chers.","note":""},
    {"jp":"おにぎりをみっつください。","romaji":"Onigiri o mittsu kudasai.","fr":"Trois onigiri s'il vous plaît.","note":""},
    {"jp":"おにぎりはたびのひるごはんにさいてきです。","romaji":"Onigiri wa tabi no hirugōhan ni saiteki desu.","fr":"Les onigiri sont parfaits pour le déjeuner en voyage.","note":""},
  ],
  "みそ": [
    {"jp":"みそしるをまいあさのみます。","romaji":"Misoshiru o maiasa nomimasu.","fr":"Je bois de la soupe miso chaque matin.","note":""},
    {"jp":"このみそはどこからですか？かおりがいいですね。","romaji":"Kono miso wa doko kara desu ka? Kaori ga ii desu ne.","fr":"D'où vient ce miso ? Ça sent bon.","note":""},
    {"jp":"みそをおみやげにかいたいです。","romaji":"Miso o omiyage ni kaitai desu.","fr":"Je veux acheter du miso comme souvenir.","note":""},
  ],
  "とうふ": [
    {"jp":"にほんのとうふはやわらかくておいしいですね。","romaji":"Nihon no tōfu wa yawarakakute oishii desu ne.","fr":"Le tofu japonais est doux et délicieux.","note":""},
    {"jp":"このとうふはどうやってたべますか？","romaji":"Kono tōfu wa dō yatte tabemasu ka?","fr":"Comment mange-t-on ce tofu ?","note":""},
    {"jp":"とうふりょうりはからだにいいですよ。","romaji":"Tōfu ryōri wa karada ni ii desu yo.","fr":"Les plats de tofu sont bons pour la santé.","note":""},
  ],
  "やきとり": [
    {"jp":"やきとりをごほんください。","romaji":"Yakitori o gohon kudasai.","fr":"Cinq brochettes de yakitori s'il vous plaît.","note":""},
    {"jp":"やきとりやでビールをのみたいです。","romaji":"Yakitoriya de bīru o nomitai desu.","fr":"Je veux boire une bière dans un restaurant de yakitori.","note":""},
    {"jp":"やきとりのたれとしお、どちらがいいですか？","romaji":"Yakitori no tare to shio, dochira ga ii desu ka?","fr":"Sauce sucrée ou sel, lequel préférez-vous ?","note":""},
  ],
  "たこやき": [
    {"jp":"おおさかのたこやきはゆうめいですね。たべてみたいです。","romaji":"Ōsaka no takoyaki wa yūmei desu ne. Tabete mitai desu.","fr":"Les takoyaki d'Osaka sont célèbres. Je veux en goûter.","note":""},
    {"jp":"たこやきはあついのでちゅういしてください。","romaji":"Takoyaki wa atsui no de chūi shite kudasai.","fr":"Faites attention, les takoyaki sont très chauds.","note":""},
    {"jp":"たこやきをひとパックください。","romaji":"Takoyaki o hito-pakku kudasai.","fr":"Un pack de takoyaki s'il vous plaît.","note":""},
  ],
  "ベジタリアンりょうりはありますか": [
    {"jp":"ベジタリアンりょうりはありますか？にくもさかなもたべません。","romaji":"Bejitarian ryōri wa arimasu ka? Niku mo sakana mo tabemasen.","fr":"Avez-vous des plats végétariens ? Je ne mange ni viande ni poisson.","note":""},
    {"jp":"ベジタリアンりょうりはありますか？だしはだいじょうぶです。","romaji":"Bejitarian ryōri wa arimasu ka? Dashi wa daijōbu desu.","fr":"Avez-vous des plats végétariens ? Le bouillon dashi c'est bon.","note":""},
    {"jp":"ベジタリアンりょうりはありますか？むずかしいですか？","romaji":"Bejitarian ryōri wa arimasu ka? Muzukashii desu ka?","fr":"Avez-vous des plats végétariens ? Est-ce difficile ?","note":""},
  ],
  "まち": [
    {"jp":"このまちはきれいですね。あるきたいです。","romaji":"Kono machi wa kirei desu ne. Arukitai desu.","fr":"Cette ville est belle. Je veux marcher.","note":""},
    {"jp":"このまちのおすすめのばしょはどこですか？","romaji":"Kono machi no osusume no basho wa doko desu ka?","fr":"Quel est l'endroit recommandé dans cette ville ?","note":""},
    {"jp":"ふるいまちなみがのこっているまちにいきたいです。","romaji":"Furui machinami ga nokotte iru machi ni ikitai desu.","fr":"Je veux aller dans une ville avec un vieux quartier.","note":""},
  ],
  "じんじゃ": [
    {"jp":"このじんじゃではおまいりができますか？","romaji":"Kono jinja dewa omairi ga dekimasu ka?","fr":"Peut-on prier dans ce sanctuaire ?","note":""},
    {"jp":"じんじゃでおみくじをひきました。だいきちでした！","romaji":"Jinja de omikuji o hikimashita. Daikichi deshita!","fr":"J'ai tiré un omikuji au sanctuaire. Grande chance !","note":""},
    {"jp":"このじんじゃはなんのかみさまをまつっていますか？","romaji":"Kono jinja wa nan no kamisama o matsutte imasu ka?","fr":"Quel dieu ce sanctuaire vénère-t-il ?","note":""},
  ],
  "おてら": [
    {"jp":"このおてらはなんねんのれきしがありますか？","romaji":"Kono otera wa nannen no rekishi ga arimasu ka?","fr":"Combien d'années d'histoire a ce temple ?","note":""},
    {"jp":"おてらでざぜんをたいけんしたいです。","romaji":"Otera de zazen o taiken shitai desu.","fr":"Je veux faire l'expérience du zazen.","note":""},
    {"jp":"きょうとにはたくさんのおてらがありますね。","romaji":"Kyōto ni wa takusan no otera ga arimasu ne.","fr":"Il y a beaucoup de temples à Kyoto.","note":""},
  ],
  "こうえん": [
    {"jp":"このこうえんでさくらがみられますか？","romaji":"Kono kōen de sakura ga miraremasu ka?","fr":"Peut-on voir les cerisiers dans ce parc ?","note":""},
    {"jp":"こうえんでおひるごはんをたべましょう。","romaji":"Kōen de ohirugōhan o tabemasho.","fr":"Mangeons le déjeuner dans le parc.","note":""},
    {"jp":"このこうえんはひろくてきれいですね。","romaji":"Kono kōen wa hirokute kirei desu ne.","fr":"Ce parc est grand et beau.","note":""},
  ],
  "おんせんち": [
    {"jp":"ちかくにおんせんちはありますか？","romaji":"Chikaku ni onsenchi wa arimasu ka?","fr":"Y a-t-il une station thermale près d'ici ?","note":""},
    {"jp":"はこねはゆうめいなおんせんちです。","romaji":"Hakone wa yūmei na onsenchi desu.","fr":"Hakone est une station thermale célèbre.","note":""},
    {"jp":"おんせんちでいちにちゆっくりしたいです。","romaji":"Onsenchi de ichinichi yukkuri shitai desu.","fr":"Je veux me reposer une journée dans une station thermale.","note":""},
  ],
  "うみ": [
    {"jp":"きれいなうみをみたいです。おきなわはどうですか？","romaji":"Kirei na umi o mitai desu. Okinawa wa dō desu ka?","fr":"Je veux voir une belle mer. Okinawa ?","note":""},
    {"jp":"うみのそばでさかなをたべました。しんせんでおいしかったです。","romaji":"Umi no soba de sakana o tabemashita. Shinsen de oishikatta desu.","fr":"J'ai mangé du poisson au bord de la mer. Frais et délicieux.","note":""},
    {"jp":"にほんのうみはどこがいちばんきれいですか？","romaji":"Nihon no umi wa doko ga ichiban kirei desu ka?","fr":"Quelle mer est la plus belle au Japon ?","note":""},
  ],
  "やま": [
    {"jp":"ふじさんにのぼりたいです。いつがいいですか？","romaji":"Fujisan ni noboritai desu. Itsu ga ii desu ka?","fr":"Je veux gravir le Mont Fuji. Quand ?","note":""},
    {"jp":"やまのけしきはきれいですね。","romaji":"Yama no keshiki wa kirei desu ne.","fr":"Le paysage de montagne est beau.","note":""},
    {"jp":"このやまからふじさんがみえますか？","romaji":"Kono yama kara Fujisan ga miemasu ka?","fr":"Peut-on voir le Mont Fuji depuis cette montagne ?","note":""},
  ],
  "びじゅつかん": [
    {"jp":"このびじゅつかんはなんじにあきますか？","romaji":"Kono bijutsukan wa nanji ni akimasu ka?","fr":"À quelle heure ouvre ce musée ?","note":""},
    {"jp":"びじゅつかんでにほんのびじゅつをみました。すごかったです。","romaji":"Bijutsukan de Nihon no bijutsu o mimashita. Sugokatta desu.","fr":"J'ai vu l'art japonais au musée. Impressionnant.","note":""},
    {"jp":"このびじゅつかんにはえいごのせつめいはありますか？","romaji":"Kono bijutsukan ni wa eigo no setsumei wa arimasu ka?","fr":"Ce musée a-t-il des explications en anglais ?","note":""},
  ],
  "このあたりでおすすめのかんこうスポットはありますか": [
    {"jp":"このあたりでおすすめのかんこうスポットはありますか？いちにちあります。","romaji":"Kono atari de osusume no kankō supotto wa arimasu ka? Ichinichi arimasu.","fr":"Y a-t-il des sites recommandés ? J'ai une journée.","note":""},
    {"jp":"このあたりでおすすめのかんこうスポットはありますか？かぞくづれです。","romaji":"Kono atari de osusume no kankō supotto wa arimasu ka? Kazoku-zure desu.","fr":"Y a-t-il des sites recommandés ? On est en famille.","note":""},
    {"jp":"このあたりでおすすめのかんこうスポットはありますか？にほんぶんかをたいけんしたいです。","romaji":"Kono atari de osusume no kankō supotto wa arimasu ka? Nihon bunka o taiken shitai desu.","fr":"Y a-t-il des sites recommandés ? Je veux vivre la culture japonaise.","note":""},
  ],
  "うれしい": [
    {"jp":"にほんにこられてうれしいです！","romaji":"Nihon ni korarete ureshii desu!","fr":"Je suis content(e) d'être venu(e) au Japon !","note":""},
    {"jp":"このおみやげをもらってとてもうれしいです。","romaji":"Kono omiyage o moratte totemo ureshii desu.","fr":"Je suis très content(e) d'avoir reçu ce souvenir.","note":""},
    {"jp":"さくらをみてうれしくなりました。","romaji":"Sakura o mite ureshiku narimashita.","fr":"En voyant les cerisiers je suis devenu(e) joyeux(se).","note":""},
  ],
  "かなしい": [
    {"jp":"もうにほんをさらなければなりません。かなしいです。","romaji":"Mō Nihon o saranakereba narimasen. Kanashii desu.","fr":"Je dois déjà quitter le Japon. Triste.","note":""},
    {"jp":"たびのさいごのひはかなしいですね。","romaji":"Tabi no saigo no hi wa kanashii desu ne.","fr":"Le dernier jour du voyage est triste.","note":""},
    {"jp":"かなしくないですよ。またくるから！","romaji":"Kanashikunai desu yo. Mata kuru kara!","fr":"Je ne suis pas triste. Parce que je reviendrai !","note":""},
  ],
  "こわい": [
    {"jp":"じしんがこわいです。にほんはじしんがおおいですね。","romaji":"Jishin ga kowai desu. Nihon wa jishin ga ōi desu ne.","fr":"J'ai peur des tremblements de terre. Il y en a beaucoup au Japon.","note":""},
    {"jp":"たかいところがこわいです。でも、けしきはさいこうです。","romaji":"Takai tokoro ga kowai desu. Demo, keshiki wa saikō desu.","fr":"J'ai peur des hauteurs. Mais le paysage est magnifique.","note":""},
    {"jp":"にほんのトイレはこわいです。ボタンがおおすぎます！","romaji":"Nihon no toire wa kowai desu. Botan ga ōsugimasu!","fr":"Les toilettes japonaises font peur. Trop de boutons !","note":""},
  ],
  "はずかしい": [
    {"jp":"にほんごをまちがえてはずかしかったです。","romaji":"Nihongo o machigaete hazukashikatta desu.","fr":"J'étais gêné(e) d'avoir fait une erreur en japonais.","note":""},
    {"jp":"まちがえてもはずかしくないですよ。れんしゅうになります。","romaji":"Machigaete mo hazukashikunai desu yo. Renshū ni narimasu.","fr":"Ce n'est pas gênant de se tromper. Ça devient de la pratique.","note":""},
    {"jp":"にほんごでうたをうたったら、はずかしかったです。","romaji":"Nihongo de uta o utattara, hazukashikatta desu.","fr":"Quand j'ai chanté en japonais, j'étais gêné(e).","note":""},
  ],
  "びっくりした": [
    {"jp":"にほんのトイレにびっくりしました。ハイテクですね。","romaji":"Nihon no toire ni bikkuri shimashita. Haiteku desu ne.","fr":"J'ai été surpris(e) par les toilettes japonaises. C'est high-tech.","note":""},
    {"jp":"じしんがあってびっくりしました！","romaji":"Jishin ga atte bikkuri shimashita!","fr":"J'ai été surpris(e) par le tremblement de terre !","note":""},
    {"jp":"このさけのあじにびっくりしました。おいしい！","romaji":"Kono sake no aji ni bikkuri shimashita. Oishii!","fr":"J'ai été surpris(e) par le goût de ce saké. C'est délicieux !","note":""},
  ],
  "つかれた": [
    {"jp":"つかれました。おんせんにはいりたいです。","romaji":"Tsukaremashita. Onsen ni hairitai desu.","fr":"Je suis fatigué(e). Je veux les sources thermales.","note":""},
    {"jp":"たくさんあるいてつかれましたが、たのしかったです。","romaji":"Takusan aruite tsukaremashita ga, tanoshikatta desu.","fr":"J'ai beaucoup marché et je suis fatigué(e), mais c'était agréable.","note":""},
    {"jp":"つかれたけど、もっとみたいです！","romaji":"Tsukareta kedo, motto mitai desu!","fr":"Je suis fatigué(e) mais je veux voir encore plus !","note":""},
  ],
  "げんき": [
    {"jp":"おげんきですか？—はい、おかげさまで。","romaji":"Ogenki desu ka? — Hai, okage-sama de.","fr":"Comment allez-vous ? — Bien, merci.","note":""},
    {"jp":"げんきがでました。おんせんのおかげです。","romaji":"Genki ga demashita. Onsen no okage desu.","fr":"J'ai retrouvé de l'énergie. Grâce aux sources thermales.","note":""},
    {"jp":"にほんのたびでげんきになりました。","romaji":"Nihon no tabi de genki ni narimashita.","fr":"Le voyage au Japon m'a revigoré(e).","note":""},
  ],
  "だいじょうぶ": [
    {"jp":"だいじょうぶですか？かおがあおいです。","romaji":"Daijōbu desu ka? Kao ga aoi desu.","fr":"Ça va ? Vous êtes pâle.","note":""},
    {"jp":"だいじょうぶです。ちょっとつかれただけです。","romaji":"Daijōbu desu. Chotto tsukareta dake desu.","fr":"Ça va. Je suis juste un peu fatigué(e).","note":""},
    {"jp":"だいじょうぶですよ！にほんはあんぜんです。","romaji":"Daijōbu desu yo! Nihon wa anzen desu.","fr":"C'est sans problème ! Le Japon est sûr.","note":""},
  ],
  "とてもたのしんでいます": [
    {"jp":"とてもたのしんでいます！にほんはさいこうです。","romaji":"Totemo tanoshinde imasu! Nihon wa saikō desu.","fr":"Je m'amuse vraiment ! Le Japon est formidable.","note":""},
    {"jp":"とてもたのしんでいます。また2028ねんにきます。","romaji":"Totemo tanoshinde imasu. Mata nisen-nijūhachi-nen ni kimasu.","fr":"Je m'amuse vraiment. Je reviendrai en 2028.","note":""},
    {"jp":"とてもたのしんでいます。きてよかったです。","romaji":"Totemo tanoshinde imasu. Kite yokatta desu.","fr":"Je m'amuse vraiment. Content(e) d'être venu(e).","note":""},
  ],
  "にほんがだいすきです": [
    {"jp":"にほんがだいすきです！なんどもきたいです。","romaji":"Nihon ga daisuki desu! Nando mo kitai desu.","fr":"J'adore le Japon ! Je veux y venir encore et encore.","note":""},
    {"jp":"にほんがだいすきです。りょうりも、ひとも、ぶんかも。","romaji":"Nihon ga daisuki desu. Ryōri mo, hito mo, bunka mo.","fr":"J'adore le Japon. La cuisine, les gens, la culture.","note":""},
    {"jp":"にほんがだいすきだから、にほんごをべんきょうしています。","romaji":"Nihon ga daisuki dakara, nihongo o benkyō shite imasu.","fr":"J'adore le Japon, c'est pourquoi j'étudie le japonais.","note":""},
  ],
  "かんどうしました": [
    {"jp":"ふじさんをみてかんどうしました。うつくしい！","romaji":"Fujisan o mite kandō shimashita. Utsukushii!","fr":"En voyant le Mont Fuji j'ai été profondément ému(e). Magnifique !","note":""},
    {"jp":"かぶきをみてかんどうしました。","romaji":"Kabuki o mite kandō shimashita.","fr":"J'ai été profondément ému(e) par le kabuki.","note":""},
    {"jp":"このりょかんのおもてなしにかんどうしました。","romaji":"Kono ryokan no omotenashi ni kandō shimashita.","fr":"J'ai été profondément ému(e) par l'hospitalité de ce ryokan.","note":""},
  ],
  "ことばにならないほどうつくしい": [
    {"jp":"このけしきはことばにならないほどうつくしいです。","romaji":"Kono keshiki wa kotoba ni naranai hodo utsukushii desu.","fr":"Ce paysage est d'une beauté indicible.","note":""},
    {"jp":"きょうとのあきはことばにならないほどうつくしいです。","romaji":"Kyōto no aki wa kotoba ni naranai hodo utsukushii desu.","fr":"L'automne de Kyoto est d'une beauté indicible.","note":""},
    {"jp":"このさくらはことばにならないほどうつくしいですね。","romaji":"Kono sakura wa kotoba ni naranai hodo utsukushii desu ne.","fr":"Ces cerisiers sont d'une beauté indicible.","note":""},
  ],
};
