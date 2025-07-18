const HOSTING_URL1 = "//onedrive-cf-index-ng-emocdn.pages.dev/api/raw?path=/";
const TERABOX_API = "//terabox-app-mecx.pages.dev/api?proxy&data=";

export const songs = [
    /*{
        artist: "test",
        lyrics: "",
        album: {
            cover: "img/album.png"
        },
        title: "TEST",
        isWavPack: true,
        filename: "01"
    },*/
    {
        artist: "AiScReam",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "愛♡スクリ～ム！",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1DNFbtRwU18s9-hRuWbELzQ"
    },{
        artist: "高嶺のなでしこ",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1GR-YIeIt1VmMHpejGrYT-A",
            name: "可愛くてごめん"
        },
        title: "可愛くてごめん",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1-6gAdmitdtceOGfBNzmP1Q"
    },{
        artist: "花玲、喵☆酱、宴宁、kinsen",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "让风告诉你",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1YXzDEA-M0w9Hje8kvPTmXQ"
    },{
        artist: "浅野てんき（浅野天琪）",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1r5xsL5xnpvTs6xWDiXeZLg",
            name: "星の夢"
        },
        title: "星の夢",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1YGc0nwFSf_hRZSxFJHmOag"
    },{
        artist: "浅野てんき（浅野天琪）",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1r5xsL5xnpvTs6xWDiXeZLg",
            name: "星の夢"
        },
        title: "星の夢（Piano Ver.）",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1PsUZbmBoPUdXWGYbdBh_Bw"
    },{
        artist: "上原歩夢（CV.大西亜玖璃）",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "開花宣言",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1Y0rrtIEz8bcmzMImTdNJDw"
    },{
        artist: "中須かすみ（CV.相良茉優）",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "☆ワンダーランド☆",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/164goYcELUJtlG_s7q3s0uA"
    },{
        artist: "桜坂しずく（CV.前田佳織里）",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "オードリー",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/16JtyCFMY7IFzEU2-VvmGXQ"
    },{
        artist: "朝香果林（CV.久保田未夢）",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Wish",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1TmBgaLrouB3oMgardf0mrw"
    },{
        artist: "宮下愛（CV.村上奈津実）",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "友 & 愛",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/13EQDgzrOztpM_uu9x3U1xA"
    },{
        artist: "近江彼方（CV.鬼頭明里）",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "My Own Fairy-Tale",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1g68jPzfpFS3PcV0s4jPJ0g"
    },{
        artist: "優木せつ菜（CV.楠木ともり）",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "MELODY",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1mB5wlqhxQWRPszNSJWUiKg"
    },{
        artist: "エマ・ヴェルデ（CV.指出毬亜）",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "声繋ごうよ",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/132iWeLlGqIjtYnwmbQc-TQ"
    },{
        artist: "天王寺璃奈（CV.田中ちえ美）",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "テレテレパシー",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1pU1cEYCxSacvOFRL9T-5dA"
    },{
        artist: "虹ヶ咲学園スクールアイドル同好会",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Love U my friends",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/10AimuWqCMOk_yTW49MLDUA"
    },{
        artist: "アルストロメリア",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1Rxu4ASK7KYUDqumangXwFA",
            name: "THE IDOLM@STER SHINY COLORS BRILLI@NT WING 05"
        },
        title: "アルストロメリア",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1ycQID5RkhnzwyM5LJF5Hsw"
    },{
        artist: "CYaRon!",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "夜空はなんでも知ってるの？",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/15ZLJxRlnSAK-5_lYneG1iw"
    },{
        artist: "高海千歌(CV.伊波杏樹)、桜内梨子(CV.逢田梨香子)、渡辺曜(CV.斉藤朱夏)",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "決めたよHand in Hand",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1AvzQxFih7v79OI721gJJBg"
    },{
        artist: "高海千歌(CV.伊波杏樹)、桜内梨子(CV.逢田梨香子)、渡辺曜(CV.斉藤朱夏)",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "ダイスキだったらダイジョウブ！",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1QgfR12erH9Mdsk_PzRYlFA"
    },{
        artist: "高海千歌(CV.伊波杏樹)、桜内梨子(CV.逢田梨香子)、渡辺曜(CV.斉藤朱夏)、津島善子(CV.小林愛香)、国木田花丸(CV.高槻かなこ)、黒澤ルビィ(CV.降幡愛)",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "夢で夜空を照らしたい",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1CbqgNudFQVf2d1j_Pet-0Q"
    },{
        artist: "Aqours",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "未熟DREAMER",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1NxIdSMZUqpizWpwjH0fwOg"
    },{
        artist: "高海千歌、渡辺曜、松浦果南、小原鞠莉、黒澤ダイヤ、黒澤ルビィ、津島善子、国木田花丸",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "想いよひとつになれ",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1h5d7EKVvNdsIfcSaHA5Xqw"
    },{
        artist: "Aqours",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "MIRAI TICKET",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/18a-iTVDKL21kj4KPC6jUlg"
    },{
        artist: "中川かのん starring 東山奈央",
        lyrics: `短い髪を なびかせて<br />リボン革命 起こしちゃう<br />レボレボな 未来<br /><br />みんなの声が 聞きたいの<br />みんなに届け 愛の歌<br />メロメロな メロディ<br /><br />明日も会えるかな きっと会えるよね<br />胸のときめきを 伝えたいな<br /><br />I MY ME アイドル WA TA SHI アイドル<br />みんなを 撃っちゃうぞ ラブカノンで BANG BANG<br />I MY ME アイドル わたしを見てね<br />みんなのハート狙い撃ちよ もう 離さない<br /><br />スカートひらり なびかせて<br />魅惑のダンス サプライズ<br />ドキドキを あげる<br /><br />みんなが辛い 時にはね<br />夜空きらめく 星になる<br />キラキラリ 光る<br /><br />誰にも止められない 準備万端だよね？<br />ローラーコースター ついてきてね<br /><br />I MY ME アイドル I MY ME アイドル<br />みんなを 撃っちゃうぞ ラブカノンで BANG BANG<br />I MY ME アイドル わたしを見てね<br />みんなのハート狙い撃ちよ もう 離さない<br /><br />あなたに 伝えたい<br /><br />I MY ME アイドル WA TA SHI アイドル<br />みんなを 撃っちゃうぞ ラブカノンで BANG BANG<br />I MY ME アイドル わたしを見てね<br />あなたのハート狙い撃ちよ ずっと 離さない`,
        album: { cover: "img/album.png" },
        title: "LOVE KANON",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1ZAqc-exyC5jBq6oVMZhU3Q"
    },{
        artist: "中川かのん starring 東山奈央",
        lyrics: `ALL 4 YOU 白い砂に ALL 4 YOU 裸足の愛<br />照れた笑顔 ねぇ 手を離さないで<br />ALL 4 YOU 触れる素肌 ALL 4 YOU 渚の愛<br />君と走りぬけたい 常夏色の恋 叶えたいよ<br /><br />太陽 スマイル 炎天下ドライブ<br />なんて 綺麗な エメラルド絨毯<br />恋の プロローグ 寄せては返す<br />この想い 伝えたい<br /><br />サンダルが青空 飛んでいく<br />鼓動をつないだ シルエット<br /><br />ALL 4 YOU 白い砂に ALL 4 YOU 裸足の恋<br />照れた笑顔 ねぇ 手を離さないで<br />ALL 4 YOU 風が走る ALL 4 YOU 渚の恋<br />君と走りぬけたい 常夏色の愛 届けたいよ<br /><br />太陽 アクビで 地平線へダイブ<br />なんて 綺麗な 星空の絨毯<br />ちょっと 勇気出して 距離縮める<br />この想い 気づいてよ<br /><br />波音のシンフォニー 鳴り響く<br />二人はひとつの シルエット<br /><br />ALL 4 YOU 一人占めよ ALL 4 YOU わたしの愛<br />照れた横顔 目が離せないよ<br />ALL 4 YOU 触れた素肌 ALL 4 YOU 渚のキス<br />君と一緒にいたい 来年再来年 その先も<br /><br />ALL 4 YOU 白い砂に ALL 4 YOU 裸足の恋<br />照れた笑顔 ねぇ 手を離さないで<br />ALL 4 YOU 風が走る ALL 4 YOU 渚の恋<br />君と走りぬけたい 常夏色の愛 届けたいよ`,
        album: { cover: "img/album.png" },
        title: "ALL 4 YOU",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1pzd_4r6nRKLnvS0ev1CtoQ"
    },{
        artist: "中川かのん starring 東山奈央",
        lyrics: `黒板 そっちのけで チラリ 見つめる先は<br />甘い横顔 ファンタジー<br /><br />突然 校舎の裏 相談 恋愛モード<br />やっぱ私にじゃない<br /><br />だけどあなたの 為に頑張る<br />いつの日にか 振り 向かせてみせるわ<br />鈍感過ぎな ロミオさん<br /><br />ハピハピハッピークレセント<br />あなたにハッピープレゼント<br />わかって欲しいの この気持ち あなただけよ 永遠ロマンス<br />ハピハピハッピークレセント<br />あなたに全部ささげるI love you<br />いつか終わるの？ ねぇ抱きしめて欲しい 片想い<br /><br />窓辺 溜め息色 ふいに 見つめる先に<br />暗い横顔 ミステリー<br /><br />走る 渡り廊下 背中 失恋モード<br />もしかしてフラれたの？<br /><br />元気だしてよ わたしがいるよ<br />告白だよ？ でも 気付いてない顔<br />鈍感過ぎよ ロミオさん<br /><br />トキメキハッピークレセント<br />ドキドキもっとプレゼント<br />気付いて欲しいの 胸の鼓動 奏でてるよ 恋のメロディ<br />トキメキハッピークレセント<br />あなたに全部ささげるI want you<br />いつになるだろ？ ねぇ終わらせたいよ 片想い<br /><br />ハピハピハッピークレセント<br />あなたにハッピープレゼント<br />わかって欲しいの この気持ち あなただけよ 永遠ロマンス<br />ハピハピハッピークレセント<br />あなたに全部ささげるI love you<br />いつか終わるの？ ねぇ抱きしめて欲しい 片想い`,
        album: { cover: "img/album.png" },
        title: "ハッピークレセント",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/10_bJfAW9gA-egQnxB5t0YA"
    },{
        artist: "中川かのん starring 東山奈央",
        lyrics: `何もみえない<br />暗闇のなかで<br />見つけたんだ 小さな光を<br /><br />私は歩いてく<br />もう迷わない<br />まっすぐに届け<br /><br />何も聞こえない<br />喧騒のなかで<br />見つけたんだ 小さな声を<br /><br />私は歌う<br />メロディが空へ一杯に<br />広がれ<br /><br />心は あなたに続いてる<br />いますぐ会いたい<br />感じたい ぬくもりを<br />世界が満たされる 光で<br />どこにいても 感じるよ 声を<br /><br />わたしの<br />らぶこーる<br /><br />あなたに<br /><br />涙があふれる<br />孤独な心に<br />見つけたんだ 小さな愛を<br /><br />私は想う<br />歌声が どこまでも響く<br />I love you<br /><br />たとえ つまずいて 疲れ切っても<br />地図のない道に<br />ゴールは見えなくても<br />進むよ 目の前を見つめて<br /><br />たどりつくよ<br />あなたの<br />ところへ<br /><br />心は あなたに続いてる<br />いつでも会いたい<br />感じたい ぬくもりを<br />世界が満たされる 光で<br />どこにいても 感じるよ 愛を<br /><br />わたしの<br />らぶこーる<br /><br />あなたに`,
        album: { cover: "img/album.png" },
        title: "らぶこーる",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1hyipghDIc7z4mjuRLtpukg"
    },{
        artist: "キュアダイヤモンド(CV.寿美菜子)",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "COCORO♦Diamond",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/19JadikKO75cRq-Ai-w471w"
    },{
        artist: "ぴちぴちピッチ",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "太陽の楽園〜Promised Land〜",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1j9TZ8ksI2aFZ0YFe7-IreA"
    },{
        artist: "ぴちぴちピッチ",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "大事な寶箱",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1B4T6vIKitq1RcKXayTKpgQ"
    },{
        artist: "ぴちぴちピッチ",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Legend of Mermaid",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1CfolReFJQzoMln38H-pt0w"
    },{
        artist: "BIGBANG",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "Fantastic Baby",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1BFPJEHR0X7YTVDtylYDyTg"
    },{
        artist: "G-DRAGON (feat. 태양, 대성)",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "HOME SWEET HOME",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1lITaUy6jOPg5qIOgYJzI6g"
    },{
        artist: "Rosé x Bruno Mars",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "APT.",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1AV0eeQiQeyeSl6pP-YAvgw"
    },{
        artist: "郭富城",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "對你愛不完",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1G2RD--rbLs1VBcuRaMHX0w"
    },{
        artist: "任賢齊",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "心太軟",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1PId6OIjmazkP5MHVDna5UQ"
    },{
        artist: "齊秦",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "愛情宣言",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1-NzlsoW21Sb2bnYOqn1rgw"
    },{
        artist: "王菲",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "我願意",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/16Uje0jrwpAkZn2SZ5YmSOA"
    },{
        artist: "蘇慧倫",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "我一個人住",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1TIEa6AX2FqgLRTNVpfgk_w"
    },{
        artist: "楊乃文",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "祝我幸福",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1I7en7sbqej7ByL7mttDL1g"
    },{
        artist: "潘越雲",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "我是不是你最疼愛的人",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1OHT7NCt_-Z08ESyUWTNhBA"
    },{
        artist: "劉若英",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "後來",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/19dskrxDjxpwtqIwMABTDEg"
    },{
        artist: "辛曉琪",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "味道",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1o39ODE144Vm1wf7eEMpG5A"
    },{
        artist: "辛曉琪",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "領悟",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1a-Py_FjQ7d-tBhMruMlDAQ"
    },{
        artist: "飛輪海＆Hebe",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "只對你有感覺",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1esysk-kpq8v1rzaXthedmA"
    },{
        artist: "蔡依林",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "舞孃",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/12NhiAaMA_Qgm5NGuDABbqQ"
    },{
        artist: "刘瑞琦",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "夏天的风",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/13lAVq87gLGZkzLU1fh3CJA"
    },{
        artist: "皮小妹",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "遺憾（抖音DJ版）",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1bzZBorB1Mb71t6BmZRkshw"
    },{
        artist: "烏蘭圖雅",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "站在草原望北京（抖音DJ版）",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1EY61KQJNGpbapS6YBMzChQ"
    },{
        artist: "烏蘭圖雅",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "阿爾山的姑娘（抖音DJ版）",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1jaTlIQnsT_cVGu0yeX-2bA"
    },{
        artist: "魏新雨",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "情花幾時開（抖音DJ版）",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1GQMk8bXPprL9hvSR3J1caA"
    },{
        artist: "69",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "最美的傷口（抖音DJ版）",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1GzLUaccTEfvfvw8uvXQLtQ"
    },{
        artist: "一棵小葱＆李宗南",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "狂浪生",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1Pcw9qCRfQpGxwMM0x2XiIA"
    },{
        artist: "徐環",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "往後餘生",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1qWsWfYasOpEkOC-WoBKrRw"
    },{
        artist: "DJ小鱼儿",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "一生回味一面",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1v-V_nDS75nF4biTMIxdK7Q"
    },{
        artist: "DJ馬哥",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "I love Poland",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1oyQbHTkod2MJZv0p8sOOSg"
    },{
        artist: "VaVa＆Ty",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "我的新衣",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1UOO1qu-PYcGV0xR1d0V7iQ"
    },{
        artist: "Dragon Pig",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "全部都是你",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1glH0VEN019-M3Oq9Hmbw0g"
    },{
        artist: "MC名决",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "时间的过客",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1TtVzdoPToEmN1EeYAyQ9IA"
    },{
        artist: "M&K＆董子龙",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "猴子说 (M&K Remix)",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1PpXbAjtj5PKX5UiPDvHeyw"
    },{
        artist: "Hoop圈圈",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "洗澡歌",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1m4xtPRO60FswBhuOvhyvow"
    },{
        artist: "Ryan.B",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "再也沒有",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1vMlJX9ZB5vVeQXZ6w72YxA"
    },{
        artist: "蘇小小",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "陪你環遊世界",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1c5dM8kkvFoJ1-0-x4ekyuw"
    },{
        artist: "Uu",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "夏天的风",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1GgR_boIm4NS81zf8Wncdtw"
    },{
        artist: "任然",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "无人之岛",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1Xvi6XWvcr1dLZsd4Dgw-7Q"
    },{
        artist: "李行亮",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "愿得一人心",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/19Qm982sgPOuHj9m4R_JD-Q"
    },{
        artist: "Schnuffel",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Häschenparty",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/18Mhe0Dz_JK3nzp283XskRw"
    },{
        artist: "Michael Jackson",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Beat It",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/15WIVABAzuEchRn90-RVdXw"
    },{
        artist: "Adele",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1ztgSMZCjCqGgzhrRnDducA",
            name: "Rolling in the Deep"
        },
        title: "Rolling in the Deep",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1KmLeJto2XMGOGjggyISTYg"
    },{
        artist: "The Weeknd",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Blinding Lights",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1vzCMR6ubmKhsNdZnvLyFpQ"
    },{
        artist: "Illenium & Georgia Ku",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Hold On",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1D0-I6iQsOfQ9g-gdpcKZqQ"
    },{
        artist: "Connie Talbot",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Count on Me",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1XcoXCTP2LaoC4RAnPADmvQ"
    },{
        artist: "Colbie Caillat",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Bubbly",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1LKzXEOVBS7ab0I3m3BEmqQ"
    },{
        artist: "Dripice",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Escape",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1CdBu7OU8DUsQO_MrLnXCuA"
    },{
        artist: "Daddy Yankee",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Dura",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1Kp8anUQjA24YO2YQUr6ugQ"
    },{
        artist: "Disco Fries & Raquel Castro",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "U Make Me (Natan Chaim & Asketa Remix)",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1k-Qikl92XP1siONivoiJ7g"
    },{
        artist: "DAISHI DANCE",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Take Me Hand",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1QbDFPzaGBWBZsQFJwTVh_g"
    },{
        artist: "DJ Maxwell",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Vivi Nell'Aria",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1oRcruA4uKuOIoYMDlsDueA"
    },{
        artist: "Deep Chills",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Run Free",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1po-L0A8xl6gYWOwgKMWYrQ"
    },{
        artist: "Ed Sheeran",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Shape of You",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1l4uBS6puBw-OcVNA3QVpNA"
    },{
        artist: "Alan Walker",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Faded",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1d1q5n2qY9dqHtQQAgnSEIw"
    },{
        artist: "Ampyx",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Holo",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1GCuHPzWGdX4kjvUz-jkT1w"
    },{
        artist: "Feint＆Laura Brehm",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "We Won't Be Alone",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/12twCTwy7h6E2xRzVxYVgcQ"
    },{
        artist: "Approaching Nirvana",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "September",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1yo0Gex0YyevJ_DoCjoWxcA"
    },{
        artist: "Sia",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Move Your Body",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1gUMdqUoy6PO2WXD5vLCXow"
    },{
        artist: "Hayley Westenra",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Blooming Flower",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/10KmnzyPYp-3ODZ2FnK-gYw"
    },{
        artist: "Feint＆Veela＆Boyinaband",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Time Bomb",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1JR-STpIxoVeHWXZYejpXAg"
    },{
        artist: "Mesto＆Brielle Von Hugel",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Chances",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/165Ocjnel5dlyGh7ObZofrA"
    },{
        artist: "That Girl",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Olly Murs",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1zp231WTQgCk04jYDwtsbtw"
    },{
        artist: "Zedd＆Jon Bellion",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Beautiful Now",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1OPF8CO8n8AfzEgMxVFWLZQ"
    },{
        artist: "Rag'N'Bone Man",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Skin",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/14KNDWHeH_QyVNhoUqIKGOA"
    },{
        artist: "Hawk Nelson",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Sold Out",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1CMq1fyc6ofVSSP41uhrz7A"
    },{
        artist: "Fitz & The Tantrums",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "HandClap",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1E_fVkz07dGUdL6THb1AmJA"
    },{
        artist: "Fifth Harmony",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Worth It",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1LENmmvxLQl85J4CtpMdQqQ"
    },{
        artist: "Gavin DeGraw",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Fire",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1LCyYLuyPcGpspM45oOzl0w"
    },{
        artist: "iKON",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "LOVE SCENARIO",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1d4aHSUTksIKkh6hvA7nrew"
    },{
        artist: "Monogem",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Wild",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1If0qDhFFIoOLlRe9L8K4AA"
    },{
        artist: "Pay Phone",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Payphone",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1LECudLMf2V3gta_1gVVvxQ"
    },{
        artist: "Ellie Goulding＆Calvin Harris",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Outside",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/11sFtI_ouxpx7F1wRCa1cwA"
    },{
        artist: "Meizong",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Melood",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1BlB468FqYM4_9Ggnh9OnGg"
    },{
        artist: "Inna",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "In Your Eyes",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1rPRkl8SMuC3kA0K5o9lH4A"
    },{
        artist: "Martin Tungevaag",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Wicked Wonderland",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/13VKG_-8Gqn4mO5_ooMbPXw"
    },{
        artist: "Rony Rex＆LCMDF",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Fucked It Up (Gas Gas Remix) (Explicit)",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/11oH8RShGNn1-pOFytQDiOA"
    },{
        artist: "Kadebostany",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Early Morning Dreams (Kled Mone Remix)",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/16cKeo3S16X7H7UwbUVSvag"
    },{
        artist: "KemimikE",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Adventure (KemimikE 2017 Rework)",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1HuayLSiWFzNJHmQ-xg2hxA"
    },{
        artist: "The Weeknd",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "In Your Eyes(Explicit)",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/11F_fnjfoaK1Y_me3cR7J7g"
    },{
        artist: "Jin",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Last Summer (K.TOBI Remix)",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1r_0ersaDL4ixukw-i_M9OQ"
    },{
        artist: "IU",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Jam Jam",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1JNMy5YmXy2C4qjsd4qk8ig"
    },{
        artist: "Imagine Dragons＆Broiler",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Shots (Broiler Remix)",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1lahE-bj799QCuskRzAAbiQ"
    },{
        artist: "Rachel Platten",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Lone Ranger",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1bW0mPCPn9ys8kztQKXMUDA"
    },{
        artist: "The Chainsmokers",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Something Just Like This",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1myCZc6_Bf5psaazuWYzJZA"
    },{
        artist: "Sweetbox",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Don't Push Me",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1pAfRBwWAeEXO47X-g66RUA"
    },{
        artist: "Yael Naim",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "New Soul",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1ynv60NN4gibfzhOn7gr3Ng"
    },{
        artist: "Two Steps From Hell＆Thomas Bergersen",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Victory",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1cSZHXtsifkKCPHoN3H7ZMQ"
    },{
        artist: "Vicetone＆Meron Ryan",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Walk Thru Fire",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1Ra613RVZIleYR04g81IeMg"
    },{
        artist: "The Weeknd＆Daft Punk",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Starboy (Explicit)",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1AUDwtw-3vFJWcekGtkZoTw"
    },{
        artist: "Hoaprox",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "#Lov3 #Ngẫu Hứng",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/12yOfxSEoxNe3uDwGWnLJpQ"
    },{
        artist: "Tez Cadey",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Seve",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1IbQkGNXy18HOPeXAC3dcFw"
    },{
        artist: "King Africa",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Salta",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1FEbk3ihvwSau8MdLFJfQ4w"
    },{
        artist: "Vicetone＆Tony Igy",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Astronomia",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1g5j53EptUzfw5sZZuWjy4A"
    },{
        artist: "Stephan F",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Astronomia 2K19",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1y--cppdk3696JETEV1C6EQ"
    },{
        artist: "Brooks＆GRX",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Boomerang",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1uknJsYNzwb82Pniudt4knQ"
    },{
        artist: "HINA",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Boomerang(HINA Bootleg)",
        isTAK: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1kIvi1qk5U99-oilmLAp8bw"
    },{
        artist: "Andrea Bocelli",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "Canto Della Terra",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1TtHOIdIsxNzWzXFl6xdCYQ"
    },{
        artist: "Andrea Bocelli & Giorgia Todrani",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "Vivo per lei",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/18VHLbTO6pok3N-8xmOktjg"
    },{
        artist: "Andrea Bocelli & Sarah Brightman",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "Time To Say Goodbye",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1oqOaBOwCAbbHyU64Gsu2FA"
    },{
        artist: "張惠妹",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "Time To Say Goodbye",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/13ceamEjBDv692x5ZMn9XfA"
    },{
        artist: "ヒロシ＆キーボー",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "3年目の浮気",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1wDNHZ92PWhWYHB8EMxEeag"
    },{
        artist: "細川たかし",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "北酒場",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1E2dNRLUcdCcRBkBp_enO9Q"
    },{
        artist: "細川たかし",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "浪花節だよ人生は",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1BO9sCHICNqqYkzIL63UWJg"
    },{
        artist: "いきものがかり",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1N9pnrmxgwML9HbwMCiLd4w",
            name: "ブルーバード"
        },
        title: "ブルーバード",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1Kl7s2BdpjQxpL7ID57wyfA"
    },/*{
        artist: "Alstroemeria Records",
        lyrics: `流れてく 時の中ででも 気だるさが ほらグルグル廻って<br />私から 離れる心も 見えないわ そう知らない？<br />自分から 動くこともなく 時の隙間に 流され続けて<br />知らないわ 周りのことなど 私は私 それだけ<br />夢見てる？ なにも見てない？ 語るも無駄な 自分の言葉？<br />悲しむなんて 疲れるだけよ 何も感じず 過ごせばいいの<br />戸惑う言葉 与えられても 自分の心 ただ上の空<br />もし私から 動くのならば すべて変えるのなら 黒にする<br />こんな自分に 未来はあるの？ こんな世界に 私はいるの？<br />今切ないの？ 今悲しいの？ 自分の事も わからないまま<br />歩むことさえ 疲れるだけよ 人のことなど 知りもしないわ<br />こんな私も 変われるのなら もし変われるのなら 白になる？<br />流れてく 時の中ででも 気だるさがほら グルグル廻って<br />私から 離れる心も 見えないわそう 知らない？<br />自分から 動くこともなく 時の隙間に 流され続けて<br />知らないわ 周りのことなど 私は私 それだけ？<br />夢見てる？ なにも見てない 語るも無駄な 自分の言葉？<br />悲しむなんて 疲れるだけよ 何も感じず 過ごせばいいの<br />戸惑う言葉 与えられても 自分の心 ただ上の空<br />もし私から 動くのならば すべて変えるのなら 黒にする<br />無駄な時間に 未来はあるの？ こんな所に 私は居るの？<br />私のことを 言いたいならば 言葉にするのなら 「ろくでなし」<br />こんな所に 私はいるの？ こんな時間に 私はいるの？<br />こんな私も 変われるのなら もし変われるのなら 白になる？<br />今夢見てる？ なにも見てない？ 語るも無駄な 自分の言葉？<br />悲しむなんて 疲れるだけよ 何も感じず 過ごせばいいの<br />戸惑う言葉 与えられても 自分の心 ただ上の空<br />もし私から 動くのならば すべて変えるのなら 黒にする<br />動くのならば 動くのならば すべて壊すわ すべて壊すわ<br />悲しむならば 悲しむならば 私の心 白く変われる？<br />貴方の事も 私のことも 全ての事も まだ知らないの<br />重い目蓋を 開けたのならば すべて壊すのなら 黒になれ!!!`,
        album: {
            cover: `${HOSTING_URL2}Alstroemeria Records/Bad Apple!! feat.nomico 10th Anniversary/Cover.jpg`,
            name: "Bad Apple!! feat.nomico 10th Anniversary"
        },
        title: "Bad Apple!! feat.nomico(from Lovelight)",
        isWavPack: true,
        filename: `${HOSTING_URL2}Alstroemeria Records/Bad Apple!! feat.nomico 10th Anniversary/01 Bad Apple!! feat.nomico(from Lovelight)`
    },{
        artist: "Alstroemeria Records",
        lyrics: null,
        album: {
            cover: `${HOSTING_URL2}Alstroemeria Records/Bad Apple!! feat.nomico 10th Anniversary/Cover.jpg`,
            name: "Bad Apple!! feat.nomico 10th Anniversary"
        },
        title: "Bad Apple!! feat.nomico(Instrumental)",
        isWavPack: true,
        filename: `${HOSTING_URL2}Alstroemeria Records/Bad Apple!! feat.nomico 10th Anniversary/05 Bad Apple!! feat.nomico(Instrumental)`
    },*/{
        artist: "AKINO",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1oCaoHGobAgx17Q3AnWl_bg",
            name: "AKINO from bless4 ベストアルバム「your ears, our years」[Pretty Edition]"
        },
        title: "創聖のアクエリオン",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1bJDzZxtG97wWJ8fLgpcVmg"
    },{
        artist: "AKINO",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1oCaoHGobAgx17Q3AnWl_bg",
            name: "AKINO from bless4 ベストアルバム「your ears, our years」[Pretty Edition]"
        },
        title: "Genesis of Aquarion",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1-tqvgArxyT3Mgwzuh3aYOw"
    },{
        artist: "飛鳥空 starring 櫻井智",
        lyrics: `えんぴつの先 指で確かめ<br />どんな絵になるの? まだ見えないけど<br /><br />目を閉じると浮かび上がるから<br />心の奥にある想い カタチにしてみて<br /><br />綺麗な絵の具たちを並べてみていると<br />心ときめいてくるの<br /><br />そう 初めての色<br /><br />ふたりで選んだパステルたち<br />あと少しだから お願い気付いて<br /><br />そわそわしてるの バレちゃうかな?<br />目逸らしてるの わざとだよ<br />素直になれない<br /><br />あなたのこと想うと胸が高鳴るから<br />伝えたい この気持ちを<br />そう 風にのせて<br /><br />広い空のキャンパスに筆を走らせて<br />どこまでも自由だから<br />届けたい笑顔を<br /><br />未来描いて`,
        album: { cover: "img/album.png" },
        title: "初めての色",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1NYeLvf4fhudlEKvjjxkLeg"
    },{
        artist: "飛鳥空 starring 櫻井智",
        lyrics: `煌く星を見上げて 想う あの日の事<br />届けたい 胸の奥にある この気持ち きっと<br /><br />あなたの笑顔を 見つけたい<br />たった一度の奇跡 そう 夢見ている<br /><br />広い荒野に立ちすくんでも<br />勇気持てれば そう 歩き出せるわ<br /><br />出会えたことは 偶然じゃない<br />お願い 明日伝えて<br /><br />小さな あの約束を 忘れはしないから<br />腕の中残る 暖かい優しさが ずっと<br /><br />あなたの言葉を聴きたくて<br />何度も繰り返す そう 魔法みたい<br /><br />ひとりぼっちのせつない夜を<br />終わらせたいの そう 涙拭って<br /><br />ふたつの心 ひとつ重ねて<br />見つめ合えれば そう 願い叶えて<br /><br />白く輝く翼広げて<br />舞い上がれ永遠の空へ`,
        album: { cover: "img/album.png" },
        title: "たった一度の奇跡",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/19XiGl6cUIf5hMxlo4TcwzA"
    },{
        artist: "野水いおり",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1YNLT6piwLPhRHjj2rmUZ8Q",
            name: "TVアニメーション「デート・ア・ライブ」エンディングテーマ『SAVE THE WORLD』"
        },
        title: "ストロベリーレイン",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1tVFGlCC1b0YxfWN-B0-r2A"
    },/*{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "僕らのLIVE 君とのLIFE",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/僕らのLIVE 君とのLIFE/01 僕らのLIVE 君とのLIFE`
    },{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "友情ノーチェンジ",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/僕らのLIVE 君とのLIFE/02 友情ノーチェンジ`
    },{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "Snow halation",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/Snow halation/01 Snow halation`
    },{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "baby maybe 恋のボタン",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/Snow halation/02 baby maybe 恋のボタン`
    },{
        artist: "Printemps",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "Love marginal",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/Love marginal/01 Love marginal`
    },{
        artist: "Printemps",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "sweet＆sweet holiday",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/Love marginal/02 sweet＆sweet holiday`
    },{
        artist: "BiBi",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "ダイヤモンドプリンセスの憂鬱",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/ダイヤモンドプリンセスの憂鬱/01 ダイヤモンドプリンセスの憂鬱`
    },{
        artist: "BiBi",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "ラブノベルス",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/ダイヤモンドプリンセスの憂鬱/02 ラブノベルス`
    },{
        artist: "lily white",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "知らないLove＊教えてLove",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/知らないLove＊教えてLove/01 知らないLove＊教えてLove`
    },{
        artist: "lily white",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "あ・の・ね・が・ん・ば・れ！",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/知らないLove＊教えてLove/02 あ・の・ね・が・ん・ば・れ！`
    },{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "夏色えがおで1,2,Jump！",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/夏色えがおで1,2,Jump！/01 夏色えがおで1,2,Jump！`
    },{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "Mermaid festa vol.1",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/夏色えがおで1,2,Jump！/02 Mermaid festa vol.1`
    },{
        artist: "園田海未(CV.三森すずこ) from μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "私たちは未来の花",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/海色少女に魅せられて/01 私たちは未来の花`
    },{
        artist: "南ことり(CV.内田彩) from μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "スピカテリブル",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/ことりLovin' you/01 スピカテリブル`
    },{
        artist: "高坂穂乃果(CV.新田恵海) from μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "愛は太陽じゃない？",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/ほんのり穂乃果色！/01 愛は太陽じゃない？`
    },{
        artist: "高坂穂乃果(CV.新田恵海) from μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "もうひとりじゃないよ",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/ほんのり穂乃果色！/02 もうひとりじゃないよ`
    },{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "もぎゅっと“love”で接近中！",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/もぎゅっと“love”で接近中！/01 もぎゅっと“love”で接近中！`
    },{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "愛してるばんざーい！",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/もぎゅっと“love”で接近中！/02 愛してるばんざーい！`
    },{
        artist: "高坂穂乃果(CV.新田恵海)＆星空 凛(CV.飯田里穂)",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "Mermaid festa vol.2 ～Passionate～",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/Mermaid festa vol.2 ～Passionate～/01 Mermaid festa vol.2 ～Passionate～`
    },{
        artist: "高坂穂乃果(CV.新田恵海)",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "Someday of my life",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/Mermaid festa vol.2 ～Passionate～/02 Someday of my life`
    },{
        artist: "星空凛(CV.飯田里穂)",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "恋のシグナルRin rin rin!",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/Mermaid festa vol.2 ～Passionate～/03 恋のシグナルRin rin rin!`
    },{
        artist: "矢澤にこ(CV.徳井青空)＆東條 希(CV.楠田亜衣奈)",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "乙女式れんあい塾",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/乙女式れんあい塾/01 乙女式れんあい塾`
    },{
        artist: "矢澤にこ(CV.徳井青空)",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "まほうつかいはじめました！",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/乙女式れんあい塾/02 まほうつかいはじめました！`
    },{
        artist: "東條希(CV.楠田亜衣奈)",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "純愛レンズ",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/乙女式れんあい塾/03 純愛レンズ`
    },{
        artist: "南ことり(CV.内田彩)＆小泉花陽(CV.久保ユリカ)",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "告白日和、です！",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/告白日和、です！/01 告白日和、です！`
    },{
        artist: "南ことり(CV.内田彩)",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "ぶる～べりぃ♥とれいん",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/告白日和、です！/02 ぶる～べりぃ♥とれいん`
    },{
        artist: "小泉花陽(CV.久保ユリカ)",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "孤独なHeaven",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/告白日和、です！/03 孤独なHeaven`
    },{
        artist: "西木野真姫(CV.Pile),園田海未(CV.三森すずこ)＆絢瀬絵里(CV.南條愛乃)",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "soldier game",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/soldier game/01 soldier game`
    },{
        artist: "西木野真姫(CV.Pile)",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "Daring!!",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/soldier game/02 Daring!!`
    },{
        artist: "園田海未(CV.三森すずこ)",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "勇気のReason",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/soldier game/03 勇気のReason`
    },{
        artist: "絢瀬絵里(CV.南條愛乃)",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "ありふれた悲しみの果て",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/soldier game/04 ありふれた悲しみの果て`
    },{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "Wonderful Rush",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/Wonderful Rush/01 Wonderful Rush`
    },{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "Oh,Love＆Peace!",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/Wonderful Rush/02 Oh,Love＆Peace!`
    },{
        artist: "にこりんぱな",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "Listen to my heart!!",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/にこりんぱな テーマソングDJCD/01 Listen to my heart!!`
    },{
        artist: "にこりんぱな",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "after school NAVIGATORS",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/にこりんぱな テーマソングDJCD/02 after school NAVIGATORS`
    },{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "僕らは今のなかで",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/μ's Complete BEST BOX Chapter.02/01 僕らは今のなかで`
    },{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "WILD STARS",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/μ's Complete BEST BOX Chapter.02/02 WILD STARS`
    },{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "きっと青春が聞こえる",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/μ's Complete BEST BOX Chapter.02/03 きっと青春が聞こえる`
    },{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "輝夜の城で踊りたい",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/μ's Complete BEST BOX Chapter.02/04 輝夜の城で踊りたい`
    },{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "ススメ→トゥモロウ",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/μ's Complete BEST BOX Chapter.02/05 ススメ→トゥモロウ`
    },{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "START:DASH!!",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/μ's Complete BEST BOX Chapter.02/06 STARTDASH!!`
    },{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "これからのSomeday",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/μ's Complete BEST BOX Chapter.02/07 これからのSomeday`
    },{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "Wonder zone",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/μ's Complete BEST BOX Chapter.02/08 Wonder zone`
    },{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "No brand girls",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/μ's Complete BEST BOX Chapter.02/09 No brand girls`
    },{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "START:DASH!!",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/μ's Complete BEST BOX Chapter.02/10 STARTDASH!!`
    },{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "夢なき夢は夢じゃない",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/μ's Complete BEST BOX Chapter.03/01 夢なき夢は夢じゃない`
    },{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "Anemone heart",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/μ's Complete BEST BOX Chapter.03/02 Anemone heart`
    },{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "なわとび",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/μ's Complete BEST BOX Chapter.03/03 なわとび`
    },{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "Beat in Angel",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/μ's Complete BEST BOX Chapter.03/04 Beat in Angel`
    },{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "にこぷり♡女子道",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/μ's Complete BEST BOX Chapter.03/05 にこぷり♡女子道`
    },{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "硝子の花園",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/μ's Complete BEST BOX Chapter.03/06 硝子の花園`
    },{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "LONELIEST BABY",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/μ's Complete BEST BOX Chapter.03/07 LONELIEST BABY`
    },{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "Music S.T.A.R.T!!",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/μ's Complete BEST BOX Chapter.01/11 Music S.T.A.R.T!!`
    },{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "LOVELESS WORLD",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/μ's Complete BEST BOX Chapter.01/12 LOVELESS WORLD`
    },{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "それは僕たちの奇跡",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/μ's Complete BEST BOX Chapter.04/01 それは僕たちの奇跡`
    },{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "だってだって噫無情",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/μ's Complete BEST BOX Chapter.04/02 だってだって噫無情`
    },{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "どんなときもずっと",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/μ's Complete BEST BOX Chapter.04/03 どんなときもずっと`
    },{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "COLORFUL VOICE",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/μ's Complete BEST BOX Chapter.04/04 COLORFUL VOICE`
    },{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "ユメノトビラ",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/μ's Complete BEST BOX Chapter.04/05 ユメノトビラ`
    },{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "SENTIMENTAL StepS",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/μ's Complete BEST BOX Chapter.04/06 SENTIMENTAL StepS`
    },{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "Love wing bell",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/μ's Complete BEST BOX Chapter.04/07 Love wing bell`
    },{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "Dancing stars on me!",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/μ's Complete BEST BOX Chapter.04/08 Dancing stars on me!`
    },{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "KiRa-KiRa Sensation!",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/μ's Complete BEST BOX Chapter.04/09 KiRa-KiRa Sensation!`
    },{
        artist: "μ's",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "Happy maker!",
        isWavPack: true,
        filename: `${HOSTING_URL2}μ's/μ's Complete BEST BOX Chapter.04/10 Happy maker!`
    },{
        artist: "Roys",
        lyrics: null,
        album: {
            cover: `${HOSTING_URL2}Roys/I'll be there/Cover.jpg`,
            name: "I'll be there"
        },
        title: "I'll be there",
        isWavPack: true,
        filename: `${HOSTING_URL2}Roys/I'll be there/01 I'll be there`
    },{
        artist: "Roys",
        lyrics: null,
        album: {
            cover: `${HOSTING_URL2}Roys/I'll be there/Cover.jpg`,
            name: "I'll be there"
        },
        title: "Can't you say",
        isWavPack: true,
        filename: `${HOSTING_URL2}Roys/I'll be there/02 Can't you say`
    },{
        artist: "Roys",
        lyrics: null,
        album: {
            cover: `${HOSTING_URL2}Roys/I'll be there/Cover.jpg`,
            name: "I'll be there"
        },
        title: "ROYS",
        isWavPack: true,
        filename: `${HOSTING_URL2}Roys/I'll be there/03 ROYS`
    },*/{
        artist: "Aqours",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "HAPPY PARTY TRAIN",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1nHta7xg17uNm21PiDh8Scg"
    },{
        artist: "Aqours",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "SKY JOURNEY",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1hEfZzg2G54GkIZpTGXikMg"
    },{
        artist: "Aqours",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "少女以上の恋がしたい",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1HB68gA9ZkkyIbRoF4K7DXw"
    },{
        artist: "ウィーン・マルガレーテ（CV.結那）",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Butterfly Wing",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1B2mFRW4mWXqrH8Jd0v6jrg"
    },{
        artist: "ウィーン・マルガレーテ（CV.結那）",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "エーデルシュタイン",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1iY5YaTWaVt9tHfOXPaxXlg"
    },/*{
        artist: "ワルキューレ",
        lyrics: `見つめ合って恋をして 無我夢中で追いかけて<br />だけどもっと知りたくて メラメラしてる<br />願うほど謎が増え 思うほど熱になる<br />だからもっと飛び込むの 未開の世界 ah<br />恋とか夢とか誰でも信じるけど<br />ソコソコ攻めなきゃつまんないよ<br />ギリギリ愛 いけないボーダーライン<br />難易度Gでも すべて壊してみせる<br />キリキリ舞い さらなるGへと<br />意識が溶ける 体は制御不能<br />いっちゃうかもね<br />ふざけ合った友達と 求め合ったあの人と<br />また会える日のためにギラギラしてる<br />光るほど影はでき 燃えるほど灰になる<br />走るほど見えてくる 危ないライン ah<br />自由も平和も望めば生まれるけど<br />モタモタしてたら腐っちゃうよ<br />ギリギリ愛 あぶないボーダーレス<br />非常識だね まだ加速しているよ<br /キリキリ舞い<br />限界点なら塗り替えていい<br />破壊と再生から私が出来る<br />ギリギリ愛 いけないボーダーライン<br />難易度Gでも すべて壊してみせる<br />キリキリ舞い さらなるGへと<br />意識が溶ける 体は制御不能<br />いっちゃうかもね<br />ギリギリ愛 いけないボーダーライン<br />燃え尽きながらまだ輝いてみせる<br />キリキリ舞 あなたのために<br />未来のために何度砕け散っても<br />愛することで生まれ変わる<br />愛されたくて生きて帰る`,
        album: {
            cover: `${HOSTING_URL2}ワルキューレ - いけないボーダーライン.jpg`,
        },
        title: "いけないボーダーライン",
        isWavPack: true,
        filename: `${HOSTING_URL2}ワルキューレ - いけないボーダーライン`
    },{
        artist: "MORE MORE JUMP!",
        lyrics: null,
        album: {
            cover: `${HOSTING_URL2}MORE MORE JUMP!/1st Single「アイドル新鋭隊／モア！ジャンプ！モア！」/Cover.jpg`,
            name: "MORE MORE JUMP！ 1st Single「アイドル新鋭隊／モア！ジャンプ！モア！」"
        },
        title: "アイドル新鋭隊",
        isWavPack: true,
        filename: `${HOSTING_URL2}MORE MORE JUMP!/1st Single「アイドル新鋭隊／モア！ジャンプ！モア！」/01 アイドル新鋭隊`
    },{
        artist: "MORE MORE JUMP!",
        lyrics: null,
        album: {
            cover: `${HOSTING_URL2}MORE MORE JUMP!/1st Single「アイドル新鋭隊／モア！ジャンプ！モア！」/Cover.jpg`,
            name: "MORE MORE JUMP！ 1st Single「アイドル新鋭隊／モア！ジャンプ！モア！」"
        },
        title: "モア！ジャンプ！モア！",
        isWavPack: true,
        filename: `${HOSTING_URL2}MORE MORE JUMP!/1st Single「アイドル新鋭隊／モア！ジャンプ！モア！」/02 モア！ジャンプ！モア！`
    },{
        artist: "MORE MORE JUMP!",
        lyrics: null,
        album: {
            cover: `${HOSTING_URL2}MORE MORE JUMP!/2nd Single「Color of Drops／天使のクローバー」/Cover.jpg`,
            name: "MORE MORE JUMP！ 2nd Single「Color of Drops／天使のクローバー」"
        },
        title: "Color of Drops",
        isWavPack: true,
        filename: `${HOSTING_URL2}MORE MORE JUMP!/2nd Single「Color of Drops／天使のクローバー」/01 Color of Drops`
    },{
        artist: "MORE MORE JUMP!",
        lyrics: null,
        album: {
            cover: `${HOSTING_URL2}MORE MORE JUMP!/2nd Single「Color of Drops／天使のクローバー」/Cover.jpg`,
            name: "MORE MORE JUMP！ 2nd Single「Color of Drops／天使のクローバー」"
        },
        title: "天使のクローバー",
        isWavPack: true,
        filename: `${HOSTING_URL2}MORE MORE JUMP!/2nd Single「Color of Drops／天使のクローバー」/02 天使のクローバー`
    },*/{
        artist: "MORE MORE JUMP!",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1MQMD3xZeCOpZo6xY3kXckg",
            name: "MORE MORE JUMP! SEKAI ALBUM vol.1"
        },
        title: "ハッピーシンセサイザ",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1e3LLhAUw7B-dmext2t1xUQ"
    },{
        artist: "MORE MORE JUMP!",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1MQMD3xZeCOpZo6xY3kXckg",
            name: "MORE MORE JUMP! SEKAI ALBUM vol.1"
        },
        title: "ツギハギスタッカート",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1QtdBC1H_QK1v7EQKbezqxw"
    },{
        artist: "MORE MORE JUMP!",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1MQMD3xZeCOpZo6xY3kXckg",
            name: "MORE MORE JUMP! SEKAI ALBUM vol.1"
        },
        title: "ニア",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1gzzA8aFKFocmLC_wvibH1Q"
    },{
        artist: "MORE MORE JUMP!",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1MQMD3xZeCOpZo6xY3kXckg",
            name: "MORE MORE JUMP! SEKAI ALBUM vol.1"
        },
        title: "恋愛裁判",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1iNy5BCw0Unzeku8J7fE4jQ"
    },{
        artist: "MORE MORE JUMP!",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1MQMD3xZeCOpZo6xY3kXckg",
            name: "MORE MORE JUMP! SEKAI ALBUM vol.1"
        },
        title: "どりーみんチュチュ",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1QUExX4tknKcc7c9QjPlKTg"
    },{
        artist: "MORE MORE JUMP!",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1MQMD3xZeCOpZo6xY3kXckg",
            name: "MORE MORE JUMP! SEKAI ALBUM vol.1"
        },
        title: "マシュマリー",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1olneOwLah56piblFguZQuQ"
    },{
        artist: "25時、ナイトコードで。",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1vb6XRJ2OilWl1DhUC7ERag",
            name: "1st Single「悔やむと書いてミライ／携帯恋話／ジャックポットサッドガール」"
        },
        title: "悔やむと書いてミライ",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/19c1KNjGfgu13EevScNy8zw"
    },{
        artist: "25時、ナイトコードで。",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1vb6XRJ2OilWl1DhUC7ERag",
            name: "1st Single「悔やむと書いてミライ／携帯恋話／ジャックポットサッドガール」"
        },
        title: "携帯恋話",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1babXPLUF4jeLcBBQaHTwAg"
    },{
        artist: "25時、ナイトコードで。",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1vb6XRJ2OilWl1DhUC7ERag",
            name: "1st Single「悔やむと書いてミライ／携帯恋話／ジャックポットサッドガール」"
        },
        title: "ジャックポットサッドガール",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1RkLS063rsMMhr_s0yHOphw"
    },{
        artist: "25時、ナイトコードで。",
        lyrics: `才能なんてないからここで一生泣いているんだろ<br />目に映った景色の青さが羨ましく思っていた<br />路肩に転がる人生アスファルトの温度下がってる<br />真夜中を照らす灯りを求めつなぐ電波セカイへと<br />Rainy, rainy 求めるものだけ描いた<br />心閉まって待って！本当は叫びたいのよ<br />Rainy, rainy 強くありたいと願った<br />声は無情に散って孤独を奏る<br />指先から伝わっていく虚しさの色<br />認めてはくれないの？<br />燻んでしまったの灰色に<br />こんな才能なんて借り物<br />まだ人生終わっていないから<br />諦めんなって誰かの声<br />見失ってしまったのアイロニー<br />気付けなくて今も抗ってる<br />この感情奪って去ってよ<br />ドロドロになってしまう前に<br />私だけみて愛を伝えて<br />(Wow wow) こんなセカイとバイバイバイバイ<br />(Wow wow) 滲む想いなぞって描いた<br />(Wow wow) 夢の形に泣いちゃった<br />(Hey!)<br />いつかはできると思ってただけど現実は残酷だろ<br />焦りと不安の渦の間に黒くなって浮かんでいる<br />退廃的なセンスと曖昧な表現なんかじゃ<br />奇を衒った奴らの芸術アルスに<br />飲み込まれて消えていく<br />Rainy, rainy 雨と流れていく徒労感<br />肩を濡らして残った冷たい記憶の体温<br />Rainy, rainy 雲の隙間から覗いた<br />光当たって届いて身体を軽くしたんだ<br />美学とかプライドとか語る前に<br />やれることやっていけ<br />閉ざしてしまったの退路に<br />焼けた才能を一つ置いてけ<br />ただやったもん勝ちなんでしょ？<br />固唾飲んでる場合じゃないでしょ！<br />目を開いても変わらぬアイロニー<br />気付いたってどーしようもないから<br />それを虎視眈々と狙ってる<br />ペルソナになんて越されんなよ<br />私だけみて愛を伝えて<br />(Wow wow) こんなセカイとバイバイバイバイ<br />(Wow wow) 滲む想いなぞって描いた<br />(Wow wow) 言の葉の意味飲み込んで<br />(Hey!)<br />燻んでしまったの灰色に<br />こんな才能なんて借り物<br />まだ人生終わっていないから<br />諦めんなって誰かの声<br />見失ってしまったのアイロニー<br />気付けなくて今も抗ってる<br />この感情奪って去ってよ<br />ドロドロになってしまう前に<br />私だけみて愛を伝えて<br />(Wow wow) こんなセカイとバイバイバイバイ<br />(Wow wow) 滲む想いなぞって描いた<br />(Wow wow) 夢の形笑っていた`,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1NoFrHot-9_qMxwup1ZjYzA",
            name: "2nd Single「限りなく灰色へ／アイディスマイル」"
        },
        title: "限りなく灰色へ",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1Sb5BamntOAaoAbHAORnXPw"
    },{
        artist: "25時、ナイトコードで。",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1NoFrHot-9_qMxwup1ZjYzA",
            name: "2nd Single「限りなく灰色へ／アイディスマイル」"
        },
        title: "アイディスマイル",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1zmllo1zksvRBoVVaLjoh0g"
    },{
        artist: "25時、ナイトコードで。",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1v_fQkfFrsSj3LjbFRslKUw",
            name: "25時、ナイトコードで。 SEKAI ALBUM vol.1"
        },
        title: "自傷無色",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/16VObxym4jl0M_75_sHtFpg"
    },{
        artist: "25時、ナイトコードで。",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1v_fQkfFrsSj3LjbFRslKUw",
            name: "25時、ナイトコードで。 SEKAI ALBUM vol.1"
        },
        title: "シャルル",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1lALUi6rL5xpoVY9zLsKkVQ"
    },{
        artist: "25時、ナイトコードで。",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1v_fQkfFrsSj3LjbFRslKUw",
            name: "25時、ナイトコードで。 SEKAI ALBUM vol.1"
        },
        title: "ハロ／ハワユ",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/16aKwkVKUdNr6CSsFTJUdEw"
    },{
        artist: "25時、ナイトコードで。",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1v_fQkfFrsSj3LjbFRslKUw",
            name: "25時、ナイトコードで。 SEKAI ALBUM vol.1"
        },
        title: "命に嫌われている",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1FbxjbY27BDv5cdbvFveKlQ"
    },{
        artist: "25時、ナイトコードで。",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1v_fQkfFrsSj3LjbFRslKUw",
            name: "25時、ナイトコードで。 SEKAI ALBUM vol.1"
        },
        title: "乙女解剖",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1Jccz8vBvzV5A3gAgL8GYAA"
    },{
        artist: "25時、ナイトコードで。",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1v_fQkfFrsSj3LjbFRslKUw",
            name: "25時、ナイトコードで。 SEKAI ALBUM vol.1"
        },
        title: "独りんぼエンヴィー",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1AE_1yDiBB0_qm8-jz6srfw"
    },{
        artist: "25時、ナイトコードで。",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1v_fQkfFrsSj3LjbFRslKUw",
            name: "25時、ナイトコードで。 SEKAI ALBUM vol.1"
        },
        title: "とても痛い痛がりたい",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1i1BIiJ41vcvjVlwXxeiprQ"
    },{
        artist: "25時、ナイトコードで。",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1v_fQkfFrsSj3LjbFRslKUw",
            name: "25時、ナイトコードで。 SEKAI ALBUM vol.1"
        },
        title: "ボッカデラベリタ",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1uRdtnAO0zOukN4icKBb19w"
    },{
        artist: "25時、ナイトコードで。",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1v_fQkfFrsSj3LjbFRslKUw",
            name: "25時、ナイトコードで。 SEKAI ALBUM vol.1"
        },
        title: "夜に駆ける",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1jJfu-BrqARjQWOiWerL-ZQ"
    },{
        artist: "25時、ナイトコードで。",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1v_fQkfFrsSj3LjbFRslKUw",
            name: "25時、ナイトコードで。 SEKAI ALBUM vol.1"
        },
        title: "ビターチョコデコレーション",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/14MnZkGFdi4G431hUI-iOaQ"
    },{
        artist: "25時、ナイトコードで。",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1v_fQkfFrsSj3LjbFRslKUw",
            name: "25時、ナイトコードで。 SEKAI ALBUM vol.1"
        },
        title: "カトラリー",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1Ha2mSu-wXJKCYoFeCueCgg"
    },{
        artist: "25時、ナイトコードで。",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1v_fQkfFrsSj3LjbFRslKUw",
            name: "25時、ナイトコードで。 SEKAI ALBUM vol.1"
        },
        title: "ベノム",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1ghD5A0uF7UXKjtwrPR4rjw"
    },/*{
        artist: "ワンダーランズ×ショウタイム",
        lyrics: null,
        album: {
            cover: `${HOSTING_URL2}ワンダーランズ×ショウタイム/4th Single「ショウタイム・ルーラー／にっこり^^調査隊のテーマ」/Cover.jpg`,
            name: "4th Single「ショウタイム・ルーラー／にっこり^^調査隊のテーマ」"
        },
        title: "にっこり^^調査隊のテーマ",
        isWavPack: true,
        filename: `${HOSTING_URL2}ワンダーランズ×ショウタイム/4th Single「ショウタイム・ルーラー／にっこり^^調査隊のテーマ」/02 にっこり^^調査隊のテーマ`
    },*/{
        artist: "ワンダーランズ×ショウタイム",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1iOouY___A6_TiDjexoSurQ",
            name: "ワンダーランズ×ショウタイム SEKAI ALBUM vol.2"
        },
        title: "いーあるふぁんくらぶ",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1JvMoJk8WuTRq0c8Sxb5AKQ"
    },{
        artist: "ワンダーランズ×ショウタイム",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1iOouY___A6_TiDjexoSurQ",
            name: "ワンダーランズ×ショウタイム SEKAI ALBUM vol.2"
        },
        title: "神のまにまに",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1G9g_oL2PRXNpd_eexeKrWA"
    },{
        artist: "fripSide",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "an evening calm",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1HZqdsBy6vtVbnPMBtDuVkg"
    },/*{
        artist: "YOASOBI",
        lyrics: null,
        album: {
            cover: `${HOSTING_URL2}YOASOBI - アイドル.jpg`,
            name: "アイドル"
        },
        title: "アイドル",
        isWavPack: true,
        filename: `${HOSTING_URL2}YOASOBI - アイドル`
    },{
        artist: "女王蜂",
        lyrics: null,
        album: {
            cover: `${HOSTING_URL2}女王蜂/メフィスト/Cover.jpg`,
            name: "メフィスト"
        },
        title: "メフィスト",
        isWavPack: true,
        filename: `${HOSTING_URL2}女王蜂/メフィスト/01 メフィスト`
    },{
        artist: "女王蜂",
        lyrics: null,
        album: {
            cover: `${HOSTING_URL2}女王蜂/メフィスト/Cover.jpg`,
            name: "メフィスト"
        },
        title: "ファウスト",
        isWavPack: true,
        filename: `${HOSTING_URL2}女王蜂/メフィスト/02 ファウスト`
    },*/{
        artist: "西野カナ",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "Best Friend",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1t88aED-wEyJ1vmCPfpWy_g"
    },{
        artist: "西野カナ",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "トリセツ",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/12LXgUR4hfjjRkuE7urKSyg"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "It's OK",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1e89LMRXReddTFfm57MVNjQ"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "LIFE",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/101TACUhoXLAwCEbMFzL1fg"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "Cry day...",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1Q3rrVvCyueKOjJDjWJLYbA"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "ジレンマ～I’m your side～",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/14ohBCmSx058DGSLxIOLk8g"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "Be．．．",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/13gIow-jly8fcAOLLGWg4_Q"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "My Way",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1ssUcvkJdwD369-fdVTqfqg"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "30",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1xsBoflH8d3BecNCBIK00KQ"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "ANSWER",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1NYFN7n8uIjMDV49uJZKNOw"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "また恋をすることなど",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1kSjb3zo1riq4Ek-8KnWX-w"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "翼",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1l1bbYWs5xuNzgUEKeyEaYw"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "あなたに会えなくなる日まで",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1QJrylmh79ZTPgCouymVAlw"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "You are Beautiful",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1zp2WThaV1OAvWgFY8eD-iA"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "WAY YOU ARE",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1V-hiofMHEMdzsN13qcMD9A"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "I Remember You [feat. AK-69]",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1z6flL90A-3Ii2v6wdyXf6w"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "鐘が鳴る",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1N3OgBxtstErU3JXuP0SyHg"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "Who Are You",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1pmWFh_PdD44xAnRhPKRkKg"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "Open door",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1lTAdGxKTWh87CJ-1UcM3nA"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "baby don't know why",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1ChJ1esv6wiyT-w5PyUx_Ww"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "Dear",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1lDCDdW5fPZRYxsYPsI_VZw"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "I can change",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1P69dvO3BKtW7ObX61nrKog"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "Letter",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1faBep-P7NcCer9QRsvFYgQ"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "優しい雨",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1v58y6u-5b7UJ7v0XOqwHVQ"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "I WILL",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1HmBFhisRNBP2FsHX_TQvrQ"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "ORANGE",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1fbamMj1h_BnJczilXqrqqg"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "I'm ALIVE",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1OFanXZRWBzwXyARptzYgQg"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "Footprint",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1nf4Ra4PvofZHCML23yw7dg"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "花",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1lwetg-b_A8urTY6atPVbRQ"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "White Letter",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1HCySbCMfmOJG15AGENtowQ"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "Be myself",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1loZ8u8_nUSZjcjdw8NBp7A"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "WITH",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1_gDJ5PQaQN7VkbTMFGq_VQ"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "星をこえて",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1EpwPb3dnqbAUOmyZs-r23Q"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "海を見てる",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1Ggvp5z81T3i16koV1ytQvw"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "はじまりの時",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/11y-kA4fZsLpc0Eozn0hD9w"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "let go",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1FlroS5ZRlOweIPvy4V7Rmw"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "First Love",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1V3pNZoqdcCgUwr8AddztQA"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "Ti Amo",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1F_ZZGtUjzQJ9LjeMBwiM8g"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "最後の雨 (ALBUM VERSION)",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1aGygbkn2FFiGUa2ARWqQLQ"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "このまま君だけを奪い去りたい",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1vqG8hkoirTt6X7cZaYiBXQ"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "Time goes by",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1Zj2sZE7BsgYi6bKvO-j3eg"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "ら・ら・ら",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1Lqm_0U1eKFOWtr5idTKxQA"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "空と君のあいだに",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1IqLJ9Oqz_iV62QxzlDrpow"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "慟哭",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1hKLp8mzx6__ubJ_NGDcMgA"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "未来予想図II",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/14Uykjp1ytTR8fE4Zij0YAg"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "三日月",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1pW9rjdK8CwgyHzidRc1tGw"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "フライディ・チャイナタウン",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/16-h9KIS8aOCNVU8AdcyUTw"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "真夜中のドア～Stay With Me～",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1poXL9HEonQJPvdgC4ml7yQ"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "また君と [feat. Ms.OOJA]",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1C7gMVHr83u76MkAh81QoFg"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "愛とは・・・",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1HBr9l7jjYak7lWyLKLrmLA"
    },{
        artist: "Ms.OOJA",
        lyrics: null,
        album: {
            cover: TERABOX_API + "https://1024terabox.com/s/1d8ce1LtlR2o5bMa83j7Znw",
            name: "10th Anniversary Best 〜私たちの主題歌〜"
        },
        title: "しあわせ [feat. Ms.OOJA & SALU]",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1F40-zCMT_-w3uVV_rOUg5w"
    },{
        artist: "王菲",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "因為愛情",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1uf1oa2zqV2Pmz1I34B4N2A"
    },{
        artist: "那英",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "征服",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1GViGgnXHmsfyXvnZYjmzCQ"
    },{
        artist: "那英",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "夢一場",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1TsHuK5Jf7FtF7LP62BBTaA"
    },{
        artist: "王馨平",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "別問我是誰",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1d8fY7IqjVF7yarLNb4PwEQ"
    },{
        artist: "伍思凯",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "特別的愛給特別的你",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1U487OTRy3ujUfYUUJdVDig"
    },{
        artist: "張雨生",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "口是心非",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1ixlViKlqw7Pc8KNtTc9dSQ"
    },{
        artist: "張雨生",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "我的未來不是夢",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1h1pEXcPfdB_ZnQGoQATAuQ"
    },{
        artist: "王麟＆老猫",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "伤不起",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1KcguSFcoJFaXE9MR-n-Arg"
    },{
        artist: "陈明",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "快乐老家",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1hQRSXBRq4Imgp0m-z6rFEw"
    },{
        artist: "陈明",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "我要找到你",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/19IhRJqQlGErXGHUAPCy5QQ"
    },{
        artist: "林志炫",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "單身情歌",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1leW3MMqCTEnMPj0Ei-e5ZA"
    },{
        artist: "誓言",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "求佛",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1P-uc3clYZ41uZyrT89qKwQ"
    },{
        artist: "動力火車",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "忠孝東路走九遍",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/12P0eZRy4oZqUpFgajzKPtA"
    },{
        artist: "林憶蓮",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "至少還有你",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1EP8Mz_ehX7z01zAIQyB2ZA"
    },{
        artist: "梁靜茹",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "崇拜",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1G4o1AZcEAo2-VNcJ1NCuQQ"
    },{
        artist: "S.H.E",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "美麗新世界",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1x7htGidwWQWKstE1r9yGbw"
    },{
        artist: "S.H.E",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "月桂女神",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1dpAWES5y6BIb6wLU-vqdcw"
    },{
        artist: "S.H.E",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "中國話",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1mJb_W2l0ltQvw98qJWyuYA"
    },{
        artist: "S.H.E & 飛輪海",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "謝謝你的溫柔",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/12kFSOnIICOtGvx7jsi50VA"
    },{
        artist: "張棟樑",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "當你孤單你會想起誰",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1KA_UueRm5-t_GXCa-zvLKw"
    },{
        artist: "張棟樑",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "小烏龜",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1nTekHnPKkNqGpN1azNQLRQ"
    },{
        artist: "馬鬱",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "如果下輩子我還記得你",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1Ak_5BBW94W_PKlsmKzQ6sQ"
    },{
        artist: "張韶涵",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "隱形的翅膀",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1wPSiSw0whP_qbABTes5XEw"
    },{
        artist: "郭靜",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "心牆",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/11YwiPU0Umt7LTjnOjZOp6Q"
    },{
        artist: "南拳媽媽",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "下雨天",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1N6qtN_9B7rA82fvh0knRVg"
    },{
        artist: "陳芳語",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "愛你",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1oM9bmSMmHYZiFfu5U13itA"
    },{
        artist: "柯柯柯啊",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "姑娘别哭泣",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1G9boK9vb51p7uNLX0FUSLw"
    },{
        artist: "艾北",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "姑娘别哭泣",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1VFMTFqCYTChqgq9yAM8nkQ"
    },{
        artist: "威仔＆格子兮",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "我知道你不爱我",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1E0KO1o-3TIuigzVaCACyVQ"
    },{
        artist: "威仔＆格子兮",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "我知道你不爱我(DJAx祥版)",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/163UzK3iiPKQIOqF6hGPFMw"
    },/*{
        artist: "G.E.M.鄧紫棋",
        lyrics: null,
        album: {
            cover: "img/album.png",
            name: "啓示錄 REVELATION"
        },
        title: "YOUNG MAN & SEA",
        isWavPack: true,
        filename: `${HOSTING_URL2}G.E.M.鄧紫棋/啓示錄 REVELATION/01 YOUNG MAN & SEA`
    },{
        artist: "G.E.M.鄧紫棋",
        lyrics: null,
        album: {
            cover: "img/album.png",
            name: "啓示錄 REVELATION"
        },
        title: "HELL",
        isWavPack: true,
        filename: `${HOSTING_URL2}G.E.M.鄧紫棋/啓示錄 REVELATION/02 HELL`
    },{
        artist: "G.E.M.鄧紫棋",
        lyrics: null,
        album: {
            cover: "img/album.png",
            name: "啓示錄 REVELATION"
        },
        title: "ME & YOU",
        isWavPack: true,
        filename: `${HOSTING_URL2}G.E.M.鄧紫棋/啓示錄 REVELATION/03 ME & YOU`
    },{
        artist: "G.E.M.鄧紫棋",
        lyrics: null,
        album: {
            cover: "img/album.png",
            name: "啓示錄 REVELATION"
        },
        title: "MAN WHO LAUGHS",
        isWavPack: true,
        filename: `${HOSTING_URL2}G.E.M.鄧紫棋/啓示錄 REVELATION/04 MAN WHO LAUGHS`
    },{
        artist: "G.E.M.鄧紫棋",
        lyrics: null,
        album: {
            cover: "img/album.png",
            name: "啓示錄 REVELATION"
        },
        title: "SOLITUDE",
        isWavPack: true,
        filename: `${HOSTING_URL2}G.E.M.鄧紫棋/啓示錄 REVELATION/05 SOLITUDE`
    },{
        artist: "G.E.M.鄧紫棋",
        lyrics: null,
        album: {
            cover: "img/album.png",
            name: "啓示錄 REVELATION"
        },
        title: "ICE AGE",
        isWavPack: true,
        filename: `${HOSTING_URL2}G.E.M.鄧紫棋/啓示錄 REVELATION/06 ICE AGE`
    },{
        artist: "G.E.M.鄧紫棋",
        lyrics: null,
        album: {
            cover: "img/album.png",
            name: "啓示錄 REVELATION"
        },
        title: "PASSION",
        isWavPack: true,
        filename: `${HOSTING_URL2}G.E.M.鄧紫棋/啓示錄 REVELATION/07 PASSION`
    },{
        artist: "G.E.M.鄧紫棋",
        lyrics: null,
        album: {
            cover: "img/album.png",
            name: "啓示錄 REVELATION"
        },
        title: "GLORIA",
        isWavPack: true,
        filename: `${HOSTING_URL2}G.E.M.鄧紫棋/啓示錄 REVELATION/08 GLORIA`
    },{
        artist: "G.E.M.鄧紫棋",
        lyrics: null,
        album: {
            cover: "img/album.png",
            name: "啓示錄 REVELATION"
        },
        title: "OLD MAN & SEA",
        isWavPack: true,
        filename: `${HOSTING_URL2}G.E.M.鄧紫棋/啓示錄 REVELATION/09 OLD MAN & SEA`
    },{
        artist: "G.E.M.鄧紫棋",
        lyrics: null,
        album: {
            cover: "img/album.png",
            name: "啓示錄 REVELATION"
        },
        title: "FIND YOU",
        isWavPack: true,
        filename: `${HOSTING_URL2}G.E.M.鄧紫棋/啓示錄 REVELATION/10 FIND YOU`
    },{
        artist: "G.E.M.鄧紫棋",
        lyrics: null,
        album: {
            cover: "img/album.png",
            name: "啓示錄 REVELATION"
        },
        title: "F=mw²r",
        isWavPack: true,
        filename: `${HOSTING_URL2}G.E.M.鄧紫棋/啓示錄 REVELATION/11 F=mw²r`
    },{
        artist: "G.E.M.鄧紫棋",
        lyrics: null,
        album: {
            cover: "img/album.png",
            name: "啓示錄 REVELATION"
        },
        title: "ONE MINUTE",
        isWavPack: true,
        filename: `${HOSTING_URL2}G.E.M.鄧紫棋/啓示錄 REVELATION/12 ONE MINUTE`
    },{
        artist: "G.E.M.鄧紫棋",
        lyrics: null,
        album: {
            cover: "img/album.png",
            name: "啓示錄 REVELATION"
        },
        title: "THE END OF NIGHT",
        isWavPack: true,
        filename: `${HOSTING_URL2}G.E.M.鄧紫棋/啓示錄 REVELATION/13 THE END OF NIGHT`
    },{
        artist: "G.E.M.鄧紫棋",
        lyrics: null,
        album: {
            cover: "img/album.png",
            name: "啓示錄 REVELATION"
        },
        title: "THE SKY",
        isWavPack: true,
        filename: `${HOSTING_URL2}G.E.M.鄧紫棋/啓示錄 REVELATION/14 THE SKY`
    },{
        artist: "周興哲",
        lyrics: null,
        album: {
            cover: `${HOSTING_URL2}周興哲/小時候的我們/Cover.jpg`,
            name: "小時候的我們"
        },
        title: "In the Works",
        isWavPack: true,
        filename: `${HOSTING_URL2}周興哲/小時候的我們/01 In the Works`
    },{
        artist: "周興哲",
        lyrics: null,
        album: {
            cover: `${HOSTING_URL2}周興哲/小時候的我們/Cover.jpg`,
            name: "小時候的我們"
        },
        title: "小時候的我們",
        isWavPack: true,
        filename: `${HOSTING_URL2}周興哲/小時候的我們/02 小時候的我們`
    },{
        artist: "周興哲",
        lyrics: null,
        album: {
            cover: `${HOSTING_URL2}周興哲/小時候的我們/Cover.jpg`,
            name: "小時候的我們"
        },
        title: "受夠",
        isWavPack: true,
        filename: `${HOSTING_URL2}周興哲/小時候的我們/03 受夠`
    },{
        artist: "周興哲",
        lyrics: null,
        album: {
            cover: `${HOSTING_URL2}周興哲/小時候的我們/Cover.jpg`,
            name: "小時候的我們"
        },
        title: "Me and You",
        isWavPack: true,
        filename: `${HOSTING_URL2}周興哲/小時候的我們/04 Me and You`
    },{
        artist: "周興哲",
        lyrics: null,
        album: {
            cover: `${HOSTING_URL2}周興哲/小時候的我們/Cover.jpg`,
            name: "小時候的我們"
        },
        title: "That's Why I Like You",
        isWavPack: true,
        filename: `${HOSTING_URL2}周興哲/小時候的我們/05 That's Why I Like You`
    },{
        artist: "周興哲",
        lyrics: null,
        album: {
            cover: `${HOSTING_URL2}周興哲/小時候的我們/Cover.jpg`,
            name: "小時候的我們"
        },
        title: "Rollercoasters",
        isWavPack: true,
        filename: `${HOSTING_URL2}周興哲/小時候的我們/06 Rollercoasters`
    },{
        artist: "周興哲",
        lyrics: null,
        album: {
            cover: `${HOSTING_URL2}周興哲/小時候的我們/Cover.jpg`,
            name: "小時候的我們"
        },
        title: "相信愛",
        isWavPack: true,
        filename: `${HOSTING_URL2}周興哲/小時候的我們/07 相信愛`
    },{
        artist: "周興哲",
        lyrics: null,
        album: {
            cover: `${HOSTING_URL2}周興哲/小時候的我們/Cover.jpg`,
            name: "小時候的我們"
        },
        title: "That's All",
        isWavPack: true,
        filename: `${HOSTING_URL2}周興哲/小時候的我們/08 That's All`
    },{
        artist: "周興哲",
        lyrics: null,
        album: {
            cover: `${HOSTING_URL2}周興哲/小時候的我們/Cover.jpg`,
            name: "小時候的我們"
        },
        title: "Something About You",
        isWavPack: true,
        filename: `${HOSTING_URL2}周興哲/小時候的我們/09 Something About You`
    },{
        artist: "周興哲",
        lyrics: null,
        album: {
            cover: `${HOSTING_URL2}周興哲/小時候的我們/Cover.jpg`,
            name: "小時候的我們"
        },
        title: "我很快樂",
        isWavPack: true,
        filename: `${HOSTING_URL2}周興哲/小時候的我們/10 我很快樂`
    },{
        artist: "周興哲",
        lyrics: null,
        album: {
            cover: `${HOSTING_URL2}周興哲/小時候的我們/Cover.jpg`,
            name: "小時候的我們"
        },
        title: "其實你並沒那麼孤單",
        isWavPack: true,
        filename: `${HOSTING_URL2}周興哲/小時候的我們/11 其實你並沒那麼孤單`
    },{
        artist: "蕭秉治",
        lyrics: null,
        album: { cover: "img/album.png", name: "狂人" },
        title: "逃",
        isWavPack: true,
        filename: `${HOSTING_URL2}蕭秉治/狂人/01 逃`
    },{
        artist: "蕭秉治",
        lyrics: null,
        album: { cover: "img/album.png", name: "狂人" },
        title: "毒藥",
        isWavPack: true,
        filename: `${HOSTING_URL2}蕭秉治/狂人/02 毒藥`
    },{
        artist: "蕭秉治",
        lyrics: null,
        album: { cover: "img/album.png", name: "狂人" },
        title: "都是我的錯",
        isWavPack: true,
        filename: `${HOSTING_URL2}蕭秉治/狂人/03 都是我的錯`
    },{
        artist: "蕭秉治",
        lyrics: null,
        album: { cover: "img/album.png", name: "狂人" },
        title: "WILD",
        isWavPack: true,
        filename: `${HOSTING_URL2}蕭秉治/狂人/04 WILD`
    },{
        artist: "蕭秉治",
        lyrics: null,
        album: { cover: "img/album.png", name: "狂人" },
        title: "天生廢",
        isWavPack: true,
        filename: `${HOSTING_URL2}蕭秉治/狂人/05 天生廢`
    },{
        artist: "蕭秉治",
        lyrics: null,
        album: { cover: "img/album.png", name: "狂人" },
        title: "On me",
        isWavPack: true,
        filename: `${HOSTING_URL2}蕭秉治/狂人/06 On me`
    },{
        artist: "蕭秉治",
        lyrics: null,
        album: { cover: "img/album.png", name: "狂人" },
        title: "Sugar daddy",
        isWavPack: true,
        filename: `${HOSTING_URL2}蕭秉治/狂人/07 Sugar daddy`
    },{
        artist: "蕭秉治",
        lyrics: null,
        album: { cover: "img/album.png", name: "狂人" },
        title: "絕殺",
        isWavPack: true,
        filename: `${HOSTING_URL2}蕭秉治/狂人/08 絕殺`
    },{
        artist: "蕭秉治",
        lyrics: null,
        album: { cover: "img/album.png", name: "狂人" },
        title: "Savior",
        isWavPack: true,
        filename: `${HOSTING_URL2}蕭秉治/狂人/09 Savior`
    },{
        artist: "蕭秉治",
        lyrics: null,
        album: { cover: "img/album.png", name: "狂人" },
        title: "不留活口",
        isWavPack: true,
        filename: `${HOSTING_URL2}蕭秉治/狂人/10 不留活口`
    },{
        artist: "Corki",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "下坠Falling",
        isWavPack: true,
        filename: `${HOSTING_URL2}Corki - 下坠Falling`
    },{
        artist: "Mariah Carey & Whitney Houston",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "When You Believe",
        isWavPack: true,
        filename: `${HOSTING_URL2}Mariah Carey & Whitney Houston - When You Believe`
    },{
        artist: "Aerosmith",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "I Don't Want To Miss A Thing",
        isWavPack: true,
        filename: `${HOSTING_URL2}Aerosmith - I Don't Want To Miss A Thing`
    },{
        artist: "Deep Chills & IVIE",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Run Free",
        isWavPack: true,
        filename: `${HOSTING_URL2}Deep Chills & IVIE - Run Free`
    },{
        artist: "Katie Sky",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Monsters",
        isWavPack: true,
        filename: `${HOSTING_URL2}Katie Sky - Monsters`
    },*/{
        artist: "汪峰",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "春天裡",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1RxuqM9CDpOO7osDrttilAw"
    },{
        artist: "孫楠",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "拯救",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1rqBWxGrJnQbYkMe4VGCPhQ"
    },{
        artist: "黄绮珊",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "离不开你",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1ICetJpkoflC9wmfqCTmZwQ"
    },{
        artist: "韩安旭",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "多幸运",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1-W6YHCN2i0JjX1jbUxdP3w"
    },{
        artist: "大壮",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "伪装",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1KSCcAbeKYTpAuZC2BZ3-7A"
    },{
        artist: "旺仔小乔",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "樱花树下的约定",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1i6FMjQ_7iv0O9TEuMTO_9Q"
    },{
        artist: "张妙格",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "我期待的不是雪",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1y-KFDJ__UkFQiwbdD-y8_g"
    },/*{
        artist: "Approaching Nirvana",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "You",
        isWavPack: true,
        filename: `${HOSTING_URL2}Approaching Nirvana - You`
    },{
        artist: "Audiomachine",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Breath and Life",
        isWavPack: true,
        filename: `${HOSTING_URL2}Audiomachine - Breath and Life`
    },{
        artist: "Janji",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Horizon",
        isWavPack: true,
        filename: `${HOSTING_URL2}Janji - Horizon`
    },{
        artist: "Two Steps from Hell",
        lyrics: null,
        album: {
            cover: `${HOSTING_URL2}Two Steps from Hell - Battlecry.jpg`,
            name: "Battlecry"
        },
        title: "Star Sky (Instrumental)",
        isWavPack: true,
        filename: `${HOSTING_URL2}Two Steps from Hell - Star Sky (Instrumental)`
    },{
        artist: "George Winston",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Variations on the Kanon by Johann Pachelbel",
        isWavPack: true,
        filename: `${HOSTING_URL2}George Winston - Variations on the Kanon by Johann Pachelbel`
    },{
        artist: "Pianoboy",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "The truth that you leave",
        isWavPack: true,
        filename: `${HOSTING_URL2}Pianoboy - The truth that you leave`
    },{
        artist: "羽肿",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "为霜",
        filename: `${HOSTING_URL2}tmp/羽肿 - 为霜`
    },{
        artist: "羽肿",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "花火が瞬く夜に",
        filename: `${HOSTING_URL2}tmp/羽肿 - 花火が瞬く夜に`
    },*/{
        artist: "HKT",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Mặt Trái Của Sự Thật",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1sZ__kQDXaN4wP9j6Rgk-fw"
    },{
        artist: "HKT",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Thêm Một Lần Đau",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1-JV2VvVsR8w0PQ-cBd6-4g"
    },{
        artist: "六哲＆陈娟儿",
        lyrics: `${HOSTING_URL1}六哲＆陈娟儿 - 错错错.lrc`,
        album: { cover: "img/album.png" },
        title: "错错错",
        filename: `${HOSTING_URL1}六哲＆陈娟儿 - 错错错`
    },{
        artist: "Saka Trương Tuyền & Lương Gia Huy",
        lyrics: null,
        album: {
            cover: "img/album.png"
        },
        title: "Tình Yêu Trong Sáng",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1_myobRnZ-vsXpKNxgkLJ2Q"
    },{
        artist: "顾峰＆斯琴高丽",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "犯错",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1w9s-YI6hRg3wAHNeAFqF9Q"
    },{
        artist: "Illenium & Kameron Alexander",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Pray",
        isWavPack: true,
        isTeraBox: true,
        filename: TERABOX_API + "https://1024terabox.com/s/1IZrYqBPBvEaVJUeqztclAA"
    },{
        artist: "8/pLanet!!",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}01 ファンタジア.jpg` },
        title: "ファンタジア",
        filename: `${HOSTING_URL1}01 ファンタジア`
    },{
        artist: "FTISLAND",
        lyrics: `${HOSTING_URL1}FTISLAND - 나쁜여자야.lrc`,
        album: { cover: `${HOSTING_URL1}FTISLAND - 나쁜여자야.jpg` },
        title: "나쁜여자야",
        filename: `${HOSTING_URL1}FTISLAND - 나쁜여자야`
    },{
        artist: "차수경",
        lyrics: `${HOSTING_URL1}Various Artists/아내의 유혹/02 차수경 - 용서 못해 (Theme Song).lrc`,
        album: { cover: `${HOSTING_URL1}Various Artists/아내의 유혹/cover.png` },
        title: "용서 못해 (Theme Song)",
        filename: `${HOSTING_URL1}Various Artists/아내의 유혹/02 차수경 - 용서 못해 (Theme Song)`
    },{
        artist: "ユ・ヨンソン＆ザ・コネクション",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}ユ・ヨンソン＆ザ・コネクション/韓国ドラマ『妻の誘惑』日本語ヴァージョン・アルバム/cover.jpg` },
        title: "許せない(テーマソング)[日本語ヴァージョン]",
        filename: `${HOSTING_URL1}ユ・ヨンソン＆ザ・コネクション/韓国ドラマ『妻の誘惑』日本語ヴァージョン・アルバム/01 許せない(テーマソング)[日本語ヴァージョン]`
    },{
        artist: "李佳璐",
        lyrics: `${HOSTING_URL1}李佳璐 - 無法原諒.lrc`,
        album: { cover: "img/album.png" },
        title: "無法原諒",
        filename: `${HOSTING_URL1}李佳璐 - 無法原諒`
    },{
        artist: "옥택연, 장우영, 수지, 김수현, JOO",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Various Artists/ドリームハイ　オリジナル・サウンドトラック　ジャパニーズ・プレミアムエディション/cover.jpg` },
        title: "Dream High",
        filename: `${HOSTING_URL1}Various Artists/ドリームハイ　オリジナル・サウンドトラック　ジャパニーズ・プレミアムエディション/01 Dream High`
    },{
        artist: "テギョン，スジ，スヒョン，ウヨン，JOO",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Various Artists/ドリームハイ　オリジナル・サウンドトラック　ジャパニーズ・プレミアムエディション/cover.jpg` },
        title: "Dream High 日本語Ver.",
        filename: `${HOSTING_URL1}Various Artists/ドリームハイ　オリジナル・サウンドトラック　ジャパニーズ・プレミアムエディション/13 Dream High 日本語Ver.`
    },{
        artist: "Henry (feat. 규현 & 태민)",
        lyrics: `${HOSTING_URL1}Henry - Trap.lrc`,
        album: { cover: "img/album.png" },
        title: "Trap",
        filename: `${HOSTING_URL1}Henry - Trap`
    },{
        artist: "Ailee",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Evening Sky",
        filename: `${HOSTING_URL1}Ailee - Evening Sky`
    },{
        artist: "BOL4",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}BOL4/Red Diary Page 1/Cover.png` },
        title: "썸 탈꺼야",
        filename: `${HOSTING_URL1}BOL4/Red Diary Page 1/01 썸 탈꺼야`
    },{
        artist: "BOL4",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}BOL4/Red Diary Page 1/Cover.png` },
        title: "Blue",
        filename: `${HOSTING_URL1}BOL4/Red Diary Page 1/02 Blue`
    },{
        artist: "BOL4",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}BOL4/Red Diary Page 1/Cover.png` },
        title: "고쳐주세요",
        filename: `${HOSTING_URL1}BOL4/Red Diary Page 1/03 고쳐주세요`
    },{
        artist: "BOL4",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}BOL4/Red Diary Page 1/Cover.png` },
        title: "상상",
        filename: `${HOSTING_URL1}BOL4/Red Diary Page 1/04 상상`
    },{
        artist: "BOL4",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}BOL4/Red Diary Page 1/Cover.png` },
        title: "나의 사춘기에게",
        filename: `${HOSTING_URL1}BOL4/Red Diary Page 1/05 나의 사춘기에게`
    },{
        artist: "BOL4",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}BOL4/Red Diary Page 1/Cover.png` },
        title: "썸 탈꺼야 (Chic ver)",
        filename: `${HOSTING_URL1}BOL4/Red Diary Page 1/06 썸 탈꺼야 (Chic ver)`
    },{
        artist: "(G)I-DLE",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}(G)I-DLE/HEAT/Cover.png` },
        title: "I DO",
        filename: `${HOSTING_URL1}(G)I-DLE/HEAT/01 I DO`
    },{
        artist: "(G)I-DLE",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}(G)I-DLE/HEAT/Cover.png` },
        title: "I Want That",
        filename: `${HOSTING_URL1}(G)I-DLE/HEAT/02 I Want That`
    },{
        artist: "(G)I-DLE",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}(G)I-DLE/HEAT/Cover.png` },
        title: "Eyes Roll",
        filename: `${HOSTING_URL1}(G)I-DLE/HEAT/03 Eyes Roll`
    },{
        artist: "(G)I-DLE",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}(G)I-DLE/HEAT/Cover.png` },
        title: "Flip It",
        filename: `${HOSTING_URL1}(G)I-DLE/HEAT/04 Flip It`
    },{
        artist: "(G)I-DLE",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}(G)I-DLE/HEAT/Cover.png` },
        title: "Tall Trees",
        filename: `${HOSTING_URL1}(G)I-DLE/HEAT/05 Tall Trees`
    },{
        artist: "(G)I-DLE",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Nxde",
        filename: `${HOSTING_URL1}(G)I-DLE/I love/01 Nxde`
    },{
        artist: "(G)I-DLE",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "LOVE",
        filename: `${HOSTING_URL1}(G)I-DLE/I love/02 LOVE`
    },{
        artist: "(G)I-DLE",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Change",
        filename: `${HOSTING_URL1}(G)I-DLE/I love/03 Change`
    },{
        artist: "(G)I-DLE",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Reset",
        filename: `${HOSTING_URL1}(G)I-DLE/I love/04 Reset`
    },{
        artist: "(G)I-DLE",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Sculpture (조각품)",
        filename: `${HOSTING_URL1}(G)I-DLE/I love/05 Sculpture (조각품)`
    },{
        artist: "(G)I-DLE",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "DARK (X-file)",
        filename: `${HOSTING_URL1}(G)I-DLE/I love/06 DARK (X-file)`
    },{
        artist: "(G)I-DLE",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "TOMBOY",
        filename: `${HOSTING_URL1}(G)I-DLE/I NEVER DIE/01 TOMBOY`
    },{
        artist: "(G)I-DLE",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "말리지 마",
        filename: `${HOSTING_URL1}(G)I-DLE/I NEVER DIE/02 말리지 마`
    },{
        artist: "(G)I-DLE",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "VILLAIN DIES",
        filename: `${HOSTING_URL1}(G)I-DLE/I NEVER DIE/03 VILLAIN DIES`
    },{
        artist: "(G)I-DLE",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "ALREADY",
        filename: `${HOSTING_URL1}(G)I-DLE/I NEVER DIE/04 ALREADY`
    },{
        artist: "(G)I-DLE",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "POLAROID",
        filename: `${HOSTING_URL1}(G)I-DLE/I NEVER DIE/05 POLAROID`
    },{
        artist: "(G)I-DLE",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "ESCAPE",
        filename: `${HOSTING_URL1}(G)I-DLE/I NEVER DIE/06 ESCAPE`
    },{
        artist: "(G)I-DLE",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "LIAR",
        filename: `${HOSTING_URL1}(G)I-DLE/I NEVER DIE/07 LIAR`
    },{
        artist: "(G)I-DLE",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "MY BAG",
        filename: `${HOSTING_URL1}(G)I-DLE/I NEVER DIE/08 MY BAG`
    },{
        artist: "(G)I-DLE",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "TOMBOY (CD Only)",
        filename: `${HOSTING_URL1}(G)I-DLE/I NEVER DIE/09 TOMBOY (CD Only)`
    },{
        artist: "(G)I-DLE",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Queencard",
        filename: `${HOSTING_URL1}(G)I-DLE/I feel/01 Queencard`
    },{
        artist: "(G)I-DLE",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Allergy",
        filename: `${HOSTING_URL1}(G)I-DLE/I feel/02 Allergy`
    },{
        artist: "(G)I-DLE",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Lucid",
        filename: `${HOSTING_URL1}(G)I-DLE/I feel/03 Lucid`
    },{
        artist: "(G)I-DLE",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "All Night",
        filename: `${HOSTING_URL1}(G)I-DLE/I feel/04 All Night`
    },{
        artist: "(G)I-DLE",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Paradise",
        filename: `${HOSTING_URL1}(G)I-DLE/I feel/05 Paradise`
    },{
        artist: "(G)I-DLE",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Peter Pan",
        filename: `${HOSTING_URL1}(G)I-DLE/I feel/06 Peter Pan`
    },{
        artist: "Adaro",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Es ist ein Schnee gefallen",
        filename: `${HOSTING_URL1}Adaro - Es Ist Ein Schnee Gefallen`
    },{
        artist: "Anna Yina",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Anna Yina/Lichtmeer/cover.jpg` },
        title: "Wie weit",
        filename: `${HOSTING_URL1}Anna Yina/Lichtmeer/09 Anna Yina - Wie weit`
    },{
        artist: "Schnuffel",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Häschenlied",
        filename: `${HOSTING_URL1}Schnuffel - Häschenlied`
    },{
        artist: "DJ Remo",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Eo Ea",
        filename: `${HOSTING_URL1}DJ Remo - Eo Ea`
    },{
        artist: "O-Zone",
        lyrics: `${HOSTING_URL1}O-Zone - Dragostea Din Tei.lrc`,
        album: { cover: "img/album.png" },
        title: "Dragostea Din Tei",
        filename: `${HOSTING_URL1}O-Zone - Dragostea Din Tei`
    },{
        artist: "Витас",
        lyrics: `${HOSTING_URL1}Витас - 7 элемент.lrc`,
        album: { cover: `${HOSTING_URL1}Витас - 7 элемент.jpg` },
        title: "7 элемент",
        filename: `${HOSTING_URL1}Витас - 7 элемент`
    },{
        artist: "Витас",
        lyrics: `${HOSTING_URL1}Витас - Опера № 2.lrc`,
        album: { cover: `${HOSTING_URL1}Витас - Опера № 2.jpg` },
        title: "Опера № 2",
        filename: `${HOSTING_URL1}Витас - Опера № 2`
    },{
        artist: "Rick Astley",
        lyrics: `${HOSTING_URL1}Rick Astley - Never Gonna Give You Up.lrc`,
        album: { cover: "img/album.png" },
        title: "Never Gonna Give You Up",
        filename: `${HOSTING_URL1}Rick Astley - Never Gonna Give You Up`
    },{
        artist: "Aqua",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Barbie Girl",
        filename: `${HOSTING_URL1}Aqua - Barbie Girl`
    },{
        artist: "The Black Eyed Peas",
        lyrics: `${HOSTING_URL1}The Black Eyed Peas - Boom Boom Pow.lrc`,
        album: { cover: "img/album.png" },
        title: "Boom Boom Pow",
        filename: `${HOSTING_URL1}The Black Eyed Peas - Boom Boom Pow`
    },{
        artist: "Justin Bieber",
        lyrics: `${HOSTING_URL1}Justin Bieber - Baby.lrc`,
        album: { cover: "img/album.png" },
        title: "Baby",
        filename: `${HOSTING_URL1}Justin Bieber - Baby`
    },{
        artist: "Andrew Lloyd Webber",
        lyrics: `${HOSTING_URL1}Andrew Lloyd Webber - The Phantom Of The Opera.lrc`,
        album: { cover: `${HOSTING_URL1}Andrew Lloyd Webber - The Phantom Of The Opera.jpg` },
        title: "The Phantom Of The Opera",
        filename: `${HOSTING_URL1}Andrew Lloyd Webber - The Phantom Of The Opera`
    },{
        artist: "Clean Bandit feat. Zara Larsson",
        lyrics: `${HOSTING_URL1}Clean Bandit - Symphony.lrc`,
        album: { cover: `${HOSTING_URL1}Clean Bandit - Symphony.jpg` },
        title: "Symphony",
        filename: `${HOSTING_URL1}Clean Bandit - Symphony`
    },{
        artist: "Sunfly Karaoke",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Clean Bandit - Symphony.jpg` },
        title: "Symphony (Originally Performed by Clean Bandit Feat. Zara Larsson)",
        filename: `${HOSTING_URL1}Sunfly Karaoke - Symphony (Originally Performed by Clean Bandit Feat. Zara Larsson)`
    },{
        artist: "Nelly",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Just A Dream",
        filename: `${HOSTING_URL1}Nelly - Just A Dream`
    },{
        artist: "Katy Perry",
        lyrics: `${HOSTING_URL1}Katy Perry - Firework.lrc`,
        album: { cover: "img/album.png" },
        title: "Firework",
        filename: `${HOSTING_URL1}Katy Perry - Firework`
    },{
        artist: "The Chainsmokers",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}The Chainsmokers - Closer.jpg` },
        title: "Closer",
        filename: `${HOSTING_URL1}The Chainsmokers - Closer`
    },{
        artist: "Naomi Scott",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Various Artists/Aladdin (Original Motion Picture Soundtrack)/Cover.jpg` },
        title: "Speechless",
        filename: `${HOSTING_URL1}Various Artists/Aladdin (Original Motion Picture Soundtrack)/12 Speechless (Full)`
    },{
        artist: "テレサ・テン",
        lyrics: `${HOSTING_URL1}テレサ・テン - 時の流れに身をまかせ.lrc`,
        album: { cover: "img/album.png" },
        title: "時の流れに身をまかせ",
        filename: `${HOSTING_URL1}テレサ・テン - 時の流れに身をまかせ`
    },{
        artist: "藤田麻衣子",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Cover.jpg` },
        title: "恋に落ちて",
        filename: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Disc 1/01 恋に落ちて`
    },{
        artist: "藤田麻衣子",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Cover.jpg` },
        title: "運命の人",
        filename: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Disc 1/02 運命の人`
    },{
        artist: "藤田麻衣子",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Cover.jpg` },
        title: "環状８号線",
        filename: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Disc 1/03 環状８号線`
    },{
        artist: "藤田麻衣子",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Cover.jpg` },
        title: "君が手を伸ばす先に",
        filename: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Disc 1/04 君が手を伸ばす先に`
    },{
        artist: "藤田麻衣子",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Cover.jpg` },
        title: "あなたは幸せになる",
        filename: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Disc 1/05 あなたは幸せになる`
    },{
        artist: "藤田麻衣子",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Cover.jpg` },
        title: "蛍",
        filename: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Disc 1/06 蛍`
    },{
        artist: "藤田麻衣子",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Cover.jpg` },
        title: "ねぇ",
        filename: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Disc 1/07 ねぇ`
    },{
        artist: "藤田麻衣子",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Cover.jpg` },
        title: "高鳴る",
        filename: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Disc 1/08 高鳴る`
    },{
        artist: "藤田麻衣子",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Cover.jpg` },
        title: "宝物",
        filename: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Disc 1/09 宝物`
    },{
        artist: "藤田麻衣子",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Cover.jpg` },
        title: "素敵なことがあなたを待っている",
        filename: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Disc 1/10 素敵なことがあなたを待っている`
    },{
        artist: "藤田麻衣子",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Cover.jpg` },
        title: "水風船",
        filename: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Disc 2/11 水風船`
    },{
        artist: "藤田麻衣子",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Cover.jpg` },
        title: "君が呼ぶのなら",
        filename: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Disc 2/12 君が呼ぶのなら`
    },{
        artist: "藤田麻衣子",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Cover.jpg` },
        title: "パンジー",
        filename: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Disc 2/13 パンジー`
    },{
        artist: "藤田麻衣子",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Cover.jpg` },
        title: "恋煩い",
        filename: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Disc 2/14 恋煩い`
    },{
        artist: "藤田麻衣子",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Cover.jpg` },
        title: "カーテン",
        filename: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Disc 2/15 カーテン`
    },{
        artist: "藤田麻衣子",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Cover.jpg` },
        title: "in fact",
        filename: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Disc 2/16 in fact`
    },{
        artist: "藤田麻衣子",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Cover.jpg` },
        title: "you",
        filename: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Disc 2/17 you`
    },{
        artist: "藤田麻衣子",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Cover.jpg` },
        title: "君よ進め",
        filename: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Disc 2/18 君よ進め`
    },{
        artist: "藤田麻衣子",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Cover.jpg` },
        title: "スポットライト",
        filename: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Disc 2/19 スポットライト`
    },{
        artist: "藤田麻衣子",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Cover.jpg` },
        title: "秋風鈴",
        filename: `${HOSTING_URL1}藤田麻衣子/15th Anniversary 弾き語りBest/Disc 2/20 秋風鈴`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "雪の華",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/01 雪の華`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "WILL",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/02 WILL`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "彩恋 ～SAI_REN～",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/03 彩恋 ～SAI_REN～`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "初恋",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/04 初恋`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "愛してる",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/05 愛してる`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "愛の歌",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/06 愛の歌`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "恋をする",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/07 恋をする`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "KISS OF DEATH(Produced by HYDE)",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/08 KISS OF DEATH(Produced by HYDE)`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "Love Addict",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/09 Love Addict`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "LOVE NO CRY",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/10 LOVE NO CRY`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "A or B",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/11 A or B`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "ALWAYS",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/12 ALWAYS`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "あなたがいるから",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/13 あなたがいるから`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "花束",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/14 花束`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "夜が明ける前に",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/15 夜が明ける前に`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "雪の華 Piano & Voice Style",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/16 雪の華 Piano & Voice Style`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "ORION",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/17 ORION`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "Forget Me Not",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/18 Forget Me Not`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "メロディー",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/19 メロディー`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "桜色舞うころ",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/20 桜色舞うころ`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "Dear",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/21 Dear`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "僕が死のうと思ったのは",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/22 僕が死のうと思ったのは`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "ひろ",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/23 ひろ`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "Alone",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/24 Alone`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "ピアス",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/25 ピアス`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "明日世界が終わるなら",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/26 明日世界が終わるなら`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "声",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/27 声`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "電光石火之間",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/28 電光石火之間`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "ひとり (single version)",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/29 ひとり (single version)`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "雪の華 Reggae Disco Rockers 2018 Relaxin' mix",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/30 雪の華 Reggae Disco Rockers 2018 Relaxin' mix`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "STARS",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/31 STARS`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "一番綺麗な私を",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/32 一番綺麗な私を`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "LIFE",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/33 LIFE`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "GLAMOROUS SKY",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/34 GLAMOROUS SKY`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "Fighter",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/35 Fighter`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "Over Load",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/36 Over Load`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "TOUGH",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/37 TOUGH`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "ALL HANDS TOGETHER",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/38 ALL HANDS TOGETHER`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "Happy Life",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/39 Happy Life`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "Gift",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/40 Gift`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "THE DIVIDING LINE",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/41 THE DIVIDING LINE`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "FIND THE WAY",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/42 FIND THE WAY`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "LAST WALTZ",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/43 LAST WALTZ`
    },{
        artist: "中島美嘉",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/Cover.jpg` },
        title: "AMAZING GRACE (album version)",
        filename: `${HOSTING_URL1}中島美嘉/雪の華15周年記念ベスト盤 BIBLE [Hi-Res]/44 AMAZING GRACE (album version)`
    },{
        artist: "三浦サリー",
        lyrics: `${HOSTING_URL1}三浦サリー - セツナイのは….lrc`,
        album: { cover: "img/album.png" },
        title: "セツナイのは…",
        filename: `${HOSTING_URL1}三浦サリー - セツナイのは…`
    },{
        artist: "Official髭男dism",
        lyrics: `${HOSTING_URL1}Official髭男dism - Pretender.lrc`,
        album: { cover: `${HOSTING_URL1}image/Official髭男dism - Traveler.jpg` },
        title: "Pretender",
        filename: `${HOSTING_URL1}Official髭男dism - Pretender`
    },{
        artist: "Seven Billion Dots",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Seven Billion Dots/HOPE/Cover.jpg` },
        title: "Stay With Me",
        filename: `${HOSTING_URL1}Seven Billion Dots/HOPE/01 Stay With Me`
    },{
        artist: "Seven Billion Dots",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Seven Billion Dots/HOPE/Cover.jpg` },
        title: "Nightmare",
        filename: `${HOSTING_URL1}Seven Billion Dots/HOPE/02 Nightmare`
    },{
        artist: "Seven Billion Dots",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Seven Billion Dots/HOPE/Cover.jpg` },
        title: "Dive!!",
        filename: `${HOSTING_URL1}Seven Billion Dots/HOPE/03 Dive!!`
    },{
        artist: "Seven Billion Dots",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Seven Billion Dots/HOPE/Cover.jpg` },
        title: "Let's get the party started",
        filename: `${HOSTING_URL1}Seven Billion Dots/HOPE/04 Let's get the party started`
    },{
        artist: "Seven Billion Dots",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Seven Billion Dots/HOPE/Cover.jpg` },
        title: "マイナーロード",
        filename: `${HOSTING_URL1}Seven Billion Dots/HOPE/05 マイナーロード`
    },{
        artist: "Seven Billion Dots",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Seven Billion Dots/HOPE/Cover.jpg` },
        title: "もしもフィルムに二人だけなら",
        filename: `${HOSTING_URL1}Seven Billion Dots/HOPE/06 もしもフィルムに二人だけなら`
    },{
        artist: "Seven Billion Dots",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Seven Billion Dots/HOPE/Cover.jpg` },
        title: "Fingers Crossed",
        filename: `${HOSTING_URL1}Seven Billion Dots/HOPE/07 Fingers Crossed`
    },{
        artist: "Seven Billion Dots",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Seven Billion Dots/HOPE/Cover.jpg` },
        title: "What Was That!?",
        filename: `${HOSTING_URL1}Seven Billion Dots/HOPE/08 What Was That！？`
    },{
        artist: "Seven Billion Dots",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Seven Billion Dots/HOPE/Cover.jpg` },
        title: "Maybe I",
        filename: `${HOSTING_URL1}Seven Billion Dots/HOPE/09 Maybe I`
    },{
        artist: "Seven Billion Dots",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Seven Billion Dots/HOPE/Cover.jpg` },
        title: "You & I",
        filename: `${HOSTING_URL1}Seven Billion Dots/HOPE/10 You & I`
    },{
        artist: "Seven Billion Dots",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Seven Billion Dots/HOPE/Cover.jpg` },
        title: "HOPE",
        filename: `${HOSTING_URL1}Seven Billion Dots/HOPE/11 HOPE`
    },{
        artist: "Liyuu",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Liyuu - ルルカワイマ.jpg` },
        title: "ルルカワイマ",
        filename: `${HOSTING_URL1}Liyuu - ルルカワイマ`
    },{
        artist: "松谷祐子",
        lyrics: `${HOSTING_URL1}松谷祐子 - 愛はブーメラン.lrc`,
        album: { cover: `${HOSTING_URL1}松谷祐子 - 愛はブーメラン.jpg` },
        title: "愛はブーメラン",
        filename: `${HOSTING_URL1}松谷祐子 - 愛はブーメラン`
    },{
        artist: "高橋洋子",
        lyrics: `${HOSTING_URL1}高橋洋子 - 残酷な天使のテーゼ.lrc`,
        album: { cover: `${HOSTING_URL1}高橋洋子 - 残酷な天使のテーゼ.jpg` },
        title: "残酷な天使のテーゼ",
        filename: `${HOSTING_URL1}高橋洋子 - 残酷な天使のテーゼ`
    },{
        artist: "OLIVIA inspi' REIRA (TRAPNEST)",
        lyrics: `${HOSTING_URL1}NANA BEST/10 Winter sleep.lrc`,
        album: { cover: `${HOSTING_URL1}NANA BEST/Scans/03.jpg` },
        title: "Winter sleep",
        filename: `${HOSTING_URL1}NANA BEST/10 Winter sleep`
    },{
        artist: "逢坂大河(CV.釘宮理恵)＆川島亜美(CV.喜多村英梨)",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Holy Night",
        filename: `${HOSTING_URL1}逢坂大河＆川島亜美 - Holy Night`
    },{
        artist: "ぴちぴちピッチ",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Various Artists/ぴちぴちピッチ/マーメイドメロディー ぴちぴちピッチ ピュア ボーカルコレクションピュアBOX 1/BK/PCCG-00652_007.jpg` },
        title: "Before the Moment",
        filename: `${HOSTING_URL1}Various Artists/ぴちぴちピッチ/マーメイドメロディー ぴちぴちピッチ ピュア ボーカルコレクションピュアBOX 1/01 Before the Moment`
    },{
        artist: "真珠美人魚",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Various Artists/真珠美人魚/3/Cover.jpg` },
        title: "Before the Moment",
        filename: `${HOSTING_URL1}Various Artists/真珠美人魚/3/01 Before the Moment`
    },{
        artist: "ぴちぴちピッチ",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Various Artists/ぴちぴちピッチ/マーメイドメロディー ぴちぴちピッチ ピュア ボーカルコレクションピュアBOX 1/BK/PCCG-00652_007.jpg` },
        title: "KODOU～パーフェクト・ハーモニー～ (7Mermaid Version)",
        filename: `${HOSTING_URL1}Various Artists/ぴちぴちピッチ/マーメイドメロディー ぴちぴちピッチ ピュア ボーカルコレクションピュアBOX 1/02 KODOU～パーフェクト・ハーモニー～ (7Mermaid Version)`
    },{
        artist: "ぴちぴちピッチ",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Various Artists/ぴちぴちピッチ/マーメイドメロディー ぴちぴちピッチ ピュア ボーカルコレクションピュアBOX 1/BK/PCCG-00652_007.jpg` },
        title: "闇のBAROQUE -バロック-",
        filename: `${HOSTING_URL1}Various Artists/ぴちぴちピッチ/マーメイドメロディー ぴちぴちピッチ ピュア ボーカルコレクションピュアBOX 1/03 闇のBAROQUE -バロック-`
    },{
        artist: "真珠美人魚",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Various Artists/真珠美人魚/3/Cover.jpg` },
        title: "黑暗的巴洛克",
        filename: `${HOSTING_URL1}Various Artists/真珠美人魚/3/06 黑暗的巴洛克`
    },{
        artist: "ぴちぴちピッチ",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Various Artists/ぴちぴちピッチ/マーメイドメロディー ぴちぴちピッチ ピュア ボーカルコレクションピュアBOX 1/BK/PCCG-00652_007.jpg` },
        title: "暗黒の翼",
        filename: `${HOSTING_URL1}Various Artists/ぴちぴちピッチ/マーメイドメロディー ぴちぴちピッチ ピュア ボーカルコレクションピュアBOX 1/04 暗黒の翼`
    },{
        artist: "真珠美人魚",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Various Artists/真珠美人魚/3/Cover.jpg` },
        title: "黑暗的羽翼",
        filename: `${HOSTING_URL1}Various Artists/真珠美人魚/3/07 黑暗的羽翼`
    },{
        artist: "ぴちぴちピッチ",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Various Artists/ぴちぴちピッチ/マーメイドメロディー ぴちぴちピッチ ピュア ボーカルコレクションピュアBOX 1/BK/PCCG-00652_007.jpg` },
        title: "花と蝶のセレナーデ",
        filename: `${HOSTING_URL1}Various Artists/ぴちぴちピッチ/マーメイドメロディー ぴちぴちピッチ ピュア ボーカルコレクションピュアBOX 1/05 花と蝶のセレナーデ`
    },{
        artist: "真珠美人魚",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Various Artists/真珠美人魚/3/Cover.jpg` },
        title: "花與蝴蝶之小夜曲",
        filename: `${HOSTING_URL1}Various Artists/真珠美人魚/3/08 花與蝴蝶之小夜曲`
    },{
        artist: "ぴちぴちピッチ",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Various Artists/ぴちぴちピッチ/マーメイドメロディー ぴちぴちピッチ ピュア ボーカルコレクションピュアBOX 1/BK/PCCG-00652_007.jpg` },
        title: "MOTHER SYMPHONY (3Mermaid Version)",
        filename: `${HOSTING_URL1}Various Artists/ぴちぴちピッチ/マーメイドメロディー ぴちぴちピッチ ピュア ボーカルコレクションピュアBOX 1/06 MOTHER SYMPHONY (3Mermaid Version)`
    },{
        artist: "真珠美人魚",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Various Artists/真珠美人魚/3/Cover.jpg` },
        title: "MOTHER SYMPHONY",
        filename: `${HOSTING_URL1}Various Artists/真珠美人魚/3/03 MOTHER SYMPHONY`
    },{
        artist: "ぴちぴちピッチ",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Various Artists/ぴちぴちピッチ/マーメイドメロディー ぴちぴちピッチ ピュア ボーカルコレクションピュアBOX 1/BK/PCCG-00652_007.jpg` },
        title: "水色の旋律 (3Mermaid Version)",
        filename: `${HOSTING_URL1}Various Artists/ぴちぴちピッチ/マーメイドメロディー ぴちぴちピッチ ピュア ボーカルコレクションピュアBOX 1/07 水色の旋律 (3Mermaid Version)`
    },{
        artist: "真珠美人魚",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Various Artists/真珠美人魚/3/Cover.jpg` },
        title: "水色的旋律",
        filename: `${HOSTING_URL1}Various Artists/真珠美人魚/3/04 水色的旋律`
    },{
        artist: "ぴちぴちピッチ",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Various Artists/ぴちぴちピッチ/マーメイドメロディー ぴちぴちピッチ ピュア ボーカルコレクションピュアBOX 1/BK/PCCG-00652_007.jpg` },
        title: "Piece of Love (3Mermaid Version)",
        filename: `${HOSTING_URL1}Various Artists/ぴちぴちピッチ/マーメイドメロディー ぴちぴちピッチ ピュア ボーカルコレクションピュアBOX 1/08 Piece of Love (3Mermaid Version)`
    },{
        artist: "真珠美人魚",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Various Artists/真珠美人魚/4/Cover.jpg` },
        title: "Piece of Love",
        filename: `${HOSTING_URL1}Various Artists/真珠美人魚/4/03 Piece of Love`
    },{
        artist: "ぴちぴちピッチ",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Various Artists/ぴちぴちピッチ/マーメイドメロディー ぴちぴちピッチ ピュア ボーカルコレクションピュアBOX 1/BK/PCCG-00652_007.jpg` },
        title: "愛の温度℃",
        filename: `${HOSTING_URL1}Various Artists/ぴちぴちピッチ/マーメイドメロディー ぴちぴちピッチ ピュア ボーカルコレクションピュアBOX 1/09 愛の温度℃`
    },{
        artist: "真珠美人魚",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Various Artists/真珠美人魚/3/Cover.jpg` },
        title: "愛的溫度℃",
        filename: `${HOSTING_URL1}Various Artists/真珠美人魚/3/02 愛的溫度℃`
    },{
        artist: "ぴちぴちピッチ",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Various Artists/ぴちぴちピッチ/マーメイドメロディー ぴちぴちピッチ ピュア ボーカルコレクションピュアBOX 2/BK/PCCG-00662_009.jpg` },
        title: "希望の鐘音～Love goes on～",
        filename: `${HOSTING_URL1}Various Artists/ぴちぴちピッチ/マーメイドメロディー ぴちぴちピッチ ピュア ボーカルコレクションピュアBOX 2/01 希望の鐘音～Love goes on～`
    },{
        artist: "真珠美人魚",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Various Artists/真珠美人魚/4/Cover.jpg` },
        title: "希望的鐘聲",
        filename: `${HOSTING_URL1}Various Artists/真珠美人魚/4/02 希望的鐘聲`
    },{
        artist: "ぴちぴちピッチ",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Various Artists/ぴちぴちピッチ/マーメイドメロディー ぴちぴちピッチ ピュア ボーカルコレクションピュアBOX 2/BK/PCCG-00662_009.jpg` },
        title: "翼を抱いて",
        filename: `${HOSTING_URL1}Various Artists/ぴちぴちピッチ/マーメイドメロディー ぴちぴちピッチ ピュア ボーカルコレクションピュアBOX 2/02 翼を抱いて`
    },{
        artist: "真珠美人魚",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Various Artists/真珠美人魚/4/Cover.jpg` },
        title: "懷抱著羽翼",
        filename: `${HOSTING_URL1}Various Artists/真珠美人魚/4/06 懷抱著羽翼`
    },{
        artist: "ぴちぴちピッチ",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Various Artists/ぴちぴちピッチ/マーメイドメロディー ぴちぴちピッチ ピュア ボーカルコレクションピュアBOX 2/BK/PCCG-00662_009.jpg` },
        title: "七つの海の物語～Pearls of Mermaid～ (リナソロバージョン)",
        filename: `${HOSTING_URL1}Various Artists/ぴちぴちピッチ/マーメイドメロディー ぴちぴちピッチ ピュア ボーカルコレクションピュアBOX 2/03 七つの海の物語～Pearls of Mermaid～ (リナソロバージョン)`
    },{
        artist: "ぴちぴちピッチ",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Various Artists/ぴちぴちピッチ/マーメイドメロディー ぴちぴちピッチ ピュア ボーカルコレクションピュアBOX 2/BK/PCCG-00662_009.jpg` },
        title: "Beautiful Wish",
        filename: `${HOSTING_URL1}Various Artists/ぴちぴちピッチ/マーメイドメロディー ぴちぴちピッチ ピュア ボーカルコレクションピュアBOX 2/04 Beautiful Wish`
    },{
        artist: "真珠美人魚",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Various Artists/真珠美人魚/3/Cover.jpg` },
        title: "Beautiful Wish",
        filename: `${HOSTING_URL1}Various Artists/真珠美人魚/3/05 Beautiful Wish`
    },{
        artist: "ぴちぴちピッチ",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Various Artists/ぴちぴちピッチ/マーメイドメロディー ぴちぴちピッチ ピュア ボーカルコレクションピュアBOX 2/BK/PCCG-00662_009.jpg` },
        title: "Star☆メロメロ Heart",
        filename: `${HOSTING_URL1}Various Artists/ぴちぴちピッチ/マーメイドメロディー ぴちぴちピッチ ピュア ボーカルコレクションピュアBOX 2/05 Star☆メロメロ Heart`
    },{
        artist: "真珠美人魚",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Various Artists/真珠美人魚/4/Cover.jpg` },
        title: "Star☆為我神魂顛倒的心",
        filename: `${HOSTING_URL1}Various Artists/真珠美人魚/4/04 Star☆為我神魂顛倒的心`
    },{
        artist: "ぴちぴちピッチ",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Various Artists/ぴちぴちピッチ/マーメイドメロディー ぴちぴちピッチ ピュア ボーカルコレクションピュアBOX 2/BK/PCCG-00662_009.jpg` },
        title: "七つの海の物語～Pearls of Mermaid～ (波音ソロバージョン)",
        filename: `${HOSTING_URL1}Various Artists/ぴちぴちピッチ/マーメイドメロディー ぴちぴちピッチ ピュア ボーカルコレクションピュアBOX 2/06 七つの海の物語～Pearls of Mermaid～ (波音ソロバージョン)`
    },{
        artist: "ぴちぴちピッチ",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Various Artists/ぴちぴちピッチ/マーメイドメロディー ぴちぴちピッチ ピュア ボーカルコレクションピュアBOX 2/BK/PCCG-00662_009.jpg` },
        title: "明日が見えなくて",
        filename: `${HOSTING_URL1}Various Artists/ぴちぴちピッチ/マーメイドメロディー ぴちぴちピッチ ピュア ボーカルコレクションピュアBOX 2/07 明日が見えなくて`
    },{
        artist: "真珠美人魚",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Various Artists/真珠美人魚/4/Cover.jpg` },
        title: "看不到明天",
        filename: `${HOSTING_URL1}Various Artists/真珠美人魚/4/05 看不到明天`
    },{
        artist: "ぴちぴちピッチ",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Various Artists/ぴちぴちピッチ/マーメイドメロディー ぴちぴちピッチ ピュア ボーカルコレクションピュアBOX 2/BK/PCCG-00662_009.jpg` },
        title: "Birth of Love",
        filename: `${HOSTING_URL1}Various Artists/ぴちぴちピッチ/マーメイドメロディー ぴちぴちピッチ ピュア ボーカルコレクションピュアBOX 2/08 Birth of Love`
    },{
        artist: "真珠美人魚",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Various Artists/真珠美人魚/4/Cover.jpg` },
        title: "Birth of Love",
        filename: `${HOSTING_URL1}Various Artists/真珠美人魚/4/07 Birth of Love`
    },{
        artist: "ぴちぴちピッチ",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Various Artists/ぴちぴちピッチ/マーメイドメロディー ぴちぴちピッチ ピュア ボーカルコレクションピュアBOX 2/BK/PCCG-00662_009.jpg` },
        title: "七つの海の物語～Pearls of Mermaid～ (るちあソロバージョン)",
        filename: `${HOSTING_URL1}Various Artists/ぴちぴちピッチ/マーメイドメロディー ぴちぴちピッチ ピュア ボーカルコレクションピュアBOX 2/09 七つの海の物語～Pearls of Mermaid～ (るちあソロバージョン)`
    },{
        artist: "ぴちぴちピッチ",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Various Artists/ぴちぴちピッチ/マーメイドメロディー ぴちぴちピッチ ピュア ボーカルコレクションピュアBOX 2/BK/PCCG-00662_009.jpg` },
        title: "希望の鐘音～Love goes on～ (7Mermaid Version)",
        filename: `${HOSTING_URL1}Various Artists/ぴちぴちピッチ/マーメイドメロディー ぴちぴちピッチ ピュア ボーカルコレクションピュアBOX 2/10 希望の鐘音～Love goes on～ (7Mermaid Version)`
    },{
        artist: "ZAQ",
        lyrics: `${HOSTING_URL1}ZAQ - 君のとなりに.lrc`,
        album: { cover: "img/album.png" },
        title: "君のとなりに",
        filename: `${HOSTING_URL1}ZAQ - 君のとなりに`
    },{
        artist: "小木曽雪菜（CV.米澤円）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}WHITE ALBUM2 VOCAL COLLECTION/Cover.jpg` },
        title: "届かない恋 Live at Campus Fes（TV anime ver.）",
        filename: `${HOSTING_URL1}WHITE ALBUM2 VOCAL COLLECTION/01 届かない恋 (Live at Campus Fes) (TV anime ver.)`
    },{
        artist: "小木曽雪菜（CV.米澤円）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}WHITE ALBUM2 VOCAL COLLECTION/Cover.jpg` },
        title: "悪女",
        filename: `${HOSTING_URL1}WHITE ALBUM2 VOCAL COLLECTION/02 悪女`
    },{
        artist: "小木曽雪菜（CV.米澤円）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}WHITE ALBUM2 VOCAL COLLECTION/Cover.jpg` },
        title: "I'm fallin’ in love",
        filename: `${HOSTING_URL1}WHITE ALBUM2 VOCAL COLLECTION/03 I’m fallin’ in love`
    },{
        artist: "上原れな",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}WHITE ALBUM2 VOCAL COLLECTION/Cover.jpg` },
        title: "After All～綴る想い～ '13",
        filename: `${HOSTING_URL1}WHITE ALBUM2 VOCAL COLLECTION/04 After All ~綴る想い~ ’13`
    },{
        artist: "津田朱里",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}WHITE ALBUM2 VOCAL COLLECTION/Cover.jpg` },
        title: "Twinkle Snow '13",
        filename: `${HOSTING_URL1}WHITE ALBUM2 VOCAL COLLECTION/05 Twinkle Snow ’13`
    },{
        artist: "小木曽雪菜（CV.米澤円）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}WHITE ALBUM2 VOCAL COLLECTION/Cover.jpg` },
        title: "大切な君へ",
        filename: `${HOSTING_URL1}WHITE ALBUM2 VOCAL COLLECTION/06 大切な君へ`
    },{
        artist: "上原れな",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}WHITE ALBUM2 VOCAL COLLECTION/Cover.jpg` },
        title: "closing '13",
        filename: `${HOSTING_URL1}WHITE ALBUM2 VOCAL COLLECTION/07 closing ’13`
    },{
        artist: "小木曽雪菜（CV.米澤円）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}WHITE ALBUM2 VOCAL COLLECTION/Cover.jpg` },
        title: "WHITE ALBUM Live at Campus Fes（TV anime ver.）",
        filename: `${HOSTING_URL1}WHITE ALBUM2 VOCAL COLLECTION/08 WHITE ALBUM (Live at Campus Fes) (TV anime ver.)`
    },{
        artist: "小木曽雪菜（CV.米澤円）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}WHITE ALBUM2 VOCAL COLLECTION/Cover.jpg` },
        title: "SOUND OF DESTINY Live at Campus Fes（TV anime ver.）",
        filename: `${HOSTING_URL1}WHITE ALBUM2 VOCAL COLLECTION/09 SOUND OF DESTINY (Live at Campus Fes) (TV anime ver.)`
    },{
        artist: "上原れな",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}WHITE ALBUM2 VOCAL COLLECTION/Cover.jpg` },
        title: "さよならのこと",
        filename: `${HOSTING_URL1}WHITE ALBUM2 VOCAL COLLECTION/10 さよならのこと`
    },{
        artist: "上原れな、津田朱里",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}WHITE ALBUM2 VOCAL COLLECTION/Cover.jpg` },
        title: "Free and Dream",
        filename: `${HOSTING_URL1}WHITE ALBUM2 VOCAL COLLECTION/11 Free and Dream`
    },{
        artist: "上原れな",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}WHITE ALBUM2 VOCAL COLLECTION/Cover.jpg` },
        title: "届かない恋 '13",
        filename: `${HOSTING_URL1}WHITE ALBUM2 VOCAL COLLECTION/12 届かない恋 ’13`
    },{
        artist: "小木曽雪菜（CV.米澤円）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}WHITE ALBUM2 VOCAL COLLECTION/Cover.jpg` },
        title: "優しい嘘",
        filename: `${HOSTING_URL1}WHITE ALBUM2 VOCAL COLLECTION/13 優しい嘘 (Bonus Track)`
    },{
        artist: "小木曽雪菜（CV.米澤円）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}WHITE ALBUM2 VOCAL COLLECTION/Cover.jpg` },
        title: "恋のような",
        filename: `${HOSTING_URL1}WHITE ALBUM2 VOCAL COLLECTION/14 恋のような (Bonus Track)`
    },{
        artist: "学園生活部",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}ふ・れ・ん・ど・し・た・い(24bit_48kHz)/cover.jpg` },
        title: "ふ・れ・ん・ど・し・た・い",
        filename: `${HOSTING_URL1}ふ・れ・ん・ど・し・た・い(24bit_48kHz)/01 ふ・れ・ん・ど・し・た・い`
    },{
        artist: "fhana",
        lyrics: `${HOSTING_URL1}fhana - 青空のラプソディ.lrc`,
        album: { cover: `${HOSTING_URL1}fhana - 青空のラプソディ.jpg` },
        title: "青空のラプソディ",
        filename: `${HOSTING_URL1}fhana - 青空のラプソディ`
    },{
        artist: "西木野真姫（CV.Pile）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}image/TVアニメ「ラブライブ！ 2期」オリジナルサウンドトラック「Notes of School idol days ~Glory~」.jpg` },
        title: "愛してるばんざーい！(Prepro Piano Mix)",
        filename: `${HOSTING_URL1}μ's/TVアニメ「ラブライブ！ 2期」オリジナルサウンドトラック「Notes of School idol days ~Glory~」/11 愛してるばんざーい！(Prepro Piano Mix)`
    },{
        artist: "岡本あかり（CV.水瀬いのり）",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "White Love",
        filename: `${HOSTING_URL1}01 White Love`
    },{
        artist: "小岩井吉乃（CV.水瀬いのり）",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "天城越え",
        filename: `${HOSTING_URL1}01 天城越え`
    },{
        artist: "fripSide",
        lyrics: `${HOSTING_URL1}fripSide - Only My Railgun.lrc`,
        album: { cover: `${HOSTING_URL1}fripSide - Only My Railgun.jpg` },
        title: "Only My Railgun",
        filename: `${HOSTING_URL1}fripSide - Only My Railgun`
    },{
        artist: "WEAVER",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}WEAVER - くちづけDiamond.jpg` },
        title: "くちづけDiamond",
        filename: `${HOSTING_URL1}WEAVER - くちづけDiamond`
    },{
        artist: "みみめめMIMI",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}みみめめMIMI - CANDY MAGIC.jpg` },
        title: "CANDY MAGIC",
        filename: `${HOSTING_URL1}みみめめMIMI - CANDY MAGIC`
    },{
        artist: "Aqours",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Aqours/未来の僕らは知ってるよ/Cover.jpg` },
        title: "未来の僕らは知ってるよ",
        filename: `${HOSTING_URL1}Aqours/未来の僕らは知ってるよ/01 未来の僕らは知ってるよ`
    },{
        artist: "Aqours",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Aqours/未来の僕らは知ってるよ/Cover.jpg` },
        title: "君の瞳を巡る冒険",
        filename: `${HOSTING_URL1}Aqours/未来の僕らは知ってるよ/02 君の瞳を巡る冒険`
    },{
        artist: "Aqours",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Aqours/勇気はどこに？君の胸に！/Cover.jpg` },
        title: "勇気はどこに？君の胸に！",
        filename: `${HOSTING_URL1}Aqours/勇気はどこに？君の胸に！/01 勇気はどこに？君の胸に！`
    },{
        artist: "Aqours",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Aqours/勇気はどこに？君の胸に！/Cover.jpg` },
        title: "MY LIST to you!",
        filename: `${HOSTING_URL1}Aqours/勇気はどこに？君の胸に！/02 MY LIST to you!`
    },{
        artist: "黒澤ルビィ（CV.降幡愛）",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "RED GEM WINK",
        filename: `${HOSTING_URL1}Aqours/01 RED GEM WINK`
    },{
        artist: "黒澤ダイヤ（CV.小宮有紗）",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "WHITE FIRST LOVE",
        filename: `${HOSTING_URL1}Aqours/01 WHITE FIRST LOVE`
    },{
        artist: "765 MILLIONSTARS",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 01/Cover.jpg` },
        title: "Thank You! (765PRO ver.)",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 01/02 Thank You! (765PRO ver.)`
    },{
        artist: "765 MILLIONSTARS",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 01/Cover.jpg` },
        title: "Thank You! (765THEATER ver.)",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 01/03 Thank You! (765THEATER ver.)`
    },{
        artist: "天海春香（CV.中村繪里子）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 02/Cover.jpg` },
        title: "キラメキ進行形",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 02/01 キラメキ進行形`
    },{
        artist: "七尾百合子（CV.伊藤美来）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 02/Cover.jpg` },
        title: "透明なプロローグ",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 02/02 透明なプロローグ`
    },{
        artist: "箱崎星梨花（CV.麻倉もも）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 02/Cover.jpg` },
        title: "トキメキの音符になって",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 02/03 トキメキの音符になって`
    },{
        artist: "天空橋朋花（CV.小岩井ことり）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 02/Cover.jpg` },
        title: "Maria Trap",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 02/04 Maria Trap`
    },{
        artist: "最上静香（CV.田所あずさ）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 02/Cover.jpg` },
        title: "Precious Grain",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 02/05 Precious Grain`
    },{
        artist: "天海春香（CV.中村繪里子）, 天空橋朋花（CV.小岩井ことり）, 七尾百合子（CV.伊藤美来）, 箱崎星梨花（CV.麻倉もも）, 最上静香（CV.田所あずさ）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 02/Cover.jpg` },
        title: "Legend Girls!!",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 02/06 Legend Girls!!`
    },{
        artist: "春日未来（CV.山崎はるか）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 03/Cover.jpg` },
        title: "素敵なキセキ",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 03/01 素敵なキセキ`
    },{
        artist: "横山奈緒（CV.渡部優衣）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 03/Cover.jpg` },
        title: "ハッピー☆ラッキー☆ジェットマシーン",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 03/02 ハッピー☆ラッキー☆ジェットマシーン`
    },{
        artist: "望月杏奈（CV.夏川椎菜）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 03/Cover.jpg` },
        title: "Happy Darling",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 03/03 Happy Darling`
    },{
        artist: "豊川風花（CV.末柄里恵）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 03/Cover.jpg` },
        title: "オレンジの空の下",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 03/04 オレンジの空の下`
    },{
        artist: "我那覇響（CV.沼倉愛美）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 03/Cover.jpg` },
        title: "Rebellion",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 03/05 Rebellion`
    },{
        artist: "我那覇響（CV.沼倉愛美）、春日未来（CV.山崎はるか）、豊川風花（CV.末柄里恵）、望月杏奈（CV.夏川椎菜）、横山奈緒（CV.渡部優衣）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 03/Cover.jpg` },
        title: "PRETTY DREAMER",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 03/06 PRETTY DREAMER`
    },{
        artist: "所恵美（CV.藤井ゆきよ）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 04/Cover.jpg` },
        title: "アフタースクールパーリータイム",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 04/01 アフタースクールパーリータイム`
    },{
        artist: "田中琴葉（CV.種田梨沙）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 04/Cover.jpg` },
        title: "朝焼けのクレッシェンド",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 04/02 朝焼けのクレッシェンド`
    },{
        artist: "北沢志保（CV.雨宮天）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 04/Cover.jpg` },
        title: "ライアー・ルージュ",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 04/03 ライアー・ルージュ`
    },{
        artist: "如月千早（CV.今井麻美）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 04/Cover.jpg` },
        title: "Snow White",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 04/04 Snow White`
    },{
        artist: "如月千早（CV.今井麻美）、北沢志保（CV.雨宮天）、田中琴葉（CV.種田梨沙）、所恵美（CV.藤井ゆきよ）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 04/Cover.jpg` },
        title: "Blue Symphony",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 04/05 Blue Symphony`
    },{
        artist: "エミリー＝スチュアート（CV.郁原ゆう）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 05/Cover.jpg` },
        title: "微笑み日和",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 05/01 微笑み日和`
    },{
        artist: "真壁瑞希（CV.阿部里果）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 05/Cover.jpg` },
        title: "POKER POKER",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 05/02 POKER POKER`
    },{
        artist: "百瀬莉緒（CV.山口立花子）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 05/Cover.jpg` },
        title: "Be My Boy",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 05/03 Be My Boy`
    },{
        artist: "水瀬伊織（CV.釘宮理恵）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 05/Cover.jpg` },
        title: "プライヴェイト・ロードショウ",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 05/04 プライヴェイト・ロードショウ`
    },{
        artist: "水瀬伊織（CV.釘宮理恵）、エミリー=スチュアート（CV.郁原ゆう）、真壁瑞希（CV.阿部里果）、百瀬莉緒（CV.山口立花子）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 05/Cover.jpg` },
        title: "Sentimental Venus",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 05/05 Sentimental Venus`
    },{
        artist: "伊吹翼（CV.Machico）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 06/Cover.jpg` },
        title: "恋のLesson初級編",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 06/01 恋のLesson初級編`
    },{
        artist: "北上麗花（CV.平山笑美）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 06/Cover.jpg` },
        title: "FIND YOUR WIND！",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 06/02 FIND YOUR WIND!`
    },{
        artist: "星井美希（CV.長谷川明子）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 06/Cover.jpg` },
        title: "追憶のサンドグラス",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 06/03 追憶のサンドグラス`
    },{
        artist: "ジュリア（CV.寺川愛美）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 06/Cover.jpg` },
        title: "流星群",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 06/04 流星群`
    },{
        artist: "星井美希（CV.長谷川明子）、伊吹翼（CV.Machico）、北上麗花（CV.平山笑美）、ジュリア（CV.寺川愛美）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 06/Cover.jpg` },
        title: "Marionetteは眠らない",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 06/05 Marionetteは眠らない`
    },{
        artist: "福田のり子（CV.浜崎奈々）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 07/Cover.jpg` },
        title: "マイペース☆マイウェイ",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 07/01 マイペース☆マイウェイ`
    },{
        artist: "高山紗代子（CV.駒形友梨）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 07/Cover.jpg` },
        title: "君想いBirthday",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 07/02 君想いBirthday`
    },{
        artist: "篠宮可憐（CV.近藤唯）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 07/Cover.jpg` },
        title: "ちいさな恋の足音",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 07/03 ちいさな恋の足音`
    },{
        artist: "三浦あずさ（CV.たかはし智秋）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 07/Cover.jpg` },
        title: "嘆きのFRACTION",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 07/04 嘆きのFRACTION`
    },{
        artist: "三浦あずさ（CV.たかはし智秋）、篠宮可憐（CV.近藤唯）、高山紗代子（CV.駒形友梨）、福田のり子（CV.浜崎奈々）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 07/Cover.jpg` },
        title: "カワラナイモノ",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 07/05 カワラナイモノ`
    },{
        artist: "大神環（CV.稲川英里）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 08/Cover.jpg` },
        title: "ホップ♪ステップ♪レインボウ♪",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 08/01 ホップ♪ステップ♪レインボウ♪`
    },{
        artist: "中谷育（CV.原嶋あかり）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 08/Cover.jpg` },
        title: "グッデイ・サンシャイン！",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 08/02 グッデイ・サンシャイン！`
    },{
        artist: "矢吹可奈（CV.木戸衣吹）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 08/Cover.jpg` },
        title: "オリジナル声になって",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 08/03 オリジナル声になって`
    },{
        artist: "高槻やよい（CV.仁後真耶子）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 08/Cover.jpg` },
        title: "ハートウォーミング",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 08/04 ハートウォーミング`
    },{
        artist: "高槻やよい（CV.仁後真耶子）、大神環（CV.稲川英里）、中谷育（CV.原嶋あかり）、矢吹可奈（CV.木戸衣吹）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 08/Cover.jpg` },
        title: "Good-Sleep, Baby♡",
        filename: `${HOSTING_URL1}THE IDOLM@STER LIVE THE@TER PERFORMANCE 08/05 Good-Sleep, Baby♡`
    },{
        artist: "春奈るな",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}春奈るな/君色シグナル/Cover.jpg` },
        title: "君色シグナル",
        filename: `${HOSTING_URL1}春奈るな/君色シグナル/01 君色シグナル`
    },{
        artist: "鈴木みのり",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}鈴木みのり - FEELING AROUND.jpg` },
        title: "FEELING AROUND",
        filename: `${HOSTING_URL1}鈴木みのり - FEELING AROUND`
    },{
        artist: "安達としまむら（CV.鬼頭明里と伊藤美来）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}安達としまむら（CV.鬼頭明里と伊藤美来）/君に会えた日/Cover.jpg` },
        title: "君に会えた日",
        filename: `${HOSTING_URL1}安達としまむら（CV.鬼頭明里と伊藤美来）/君に会えた日/01 君に会えた日`
    },{
        artist: "安達としまむら（CV.鬼頭明里と伊藤美来）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}安達としまむら（CV.鬼頭明里と伊藤美来）/君に会えた日/Cover.jpg` },
        title: "メリーゴーランド",
        filename: `${HOSTING_URL1}安達としまむら（CV.鬼頭明里と伊藤美来）/君に会えた日/02 メリーゴーランド`
    },{
        artist: "鬼頭明里",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}鬼頭明里/キミのとなりで/Cover.jpg` },
        title: "キミのとなりで",
        filename: `${HOSTING_URL1}鬼頭明里/キミのとなりで/01 キミのとなりで`
    },{
        artist: "鬼頭明里",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}鬼頭明里/キミのとなりで/Cover.jpg` },
        title: "Dive to World",
        filename: `${HOSTING_URL1}鬼頭明里/キミのとなりで/02 Dive to World`
    },{
        artist: "鬼頭明里",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}鬼頭明里/キミのとなりで/Cover.jpg` },
        title: "トウメイナユメ",
        filename: `${HOSTING_URL1}鬼頭明里/キミのとなりで/03 トウメイナユメ`
    },{
        artist: "Liella!",
        lyrics: `${HOSTING_URL1}Liella!/始まりは君の空 [みんなで叶える物語盤]/01 始まりは君の空.lrc`,
        album: { cover: `${HOSTING_URL1}Liella!/始まりは君の空 [みんなで叶える物語盤]/cover.jpg` },
        title: "始まりは君の空",
        filename: `${HOSTING_URL1}Liella!/始まりは君の空 [みんなで叶える物語盤]/01 始まりは君の空`
    },{
        artist: "Liella!",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Liella!/始まりは君の空 [私を叶える物語盤]/cover.jpg` },
        title: "Dancing Heart La-Pa-Pa-Pa!",
        filename: `${HOSTING_URL1}Liella!/始まりは君の空 [私を叶える物語盤]/02 Dancing Heart La-Pa-Pa-Pa!`
    },{
        artist: "Liella!",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Liella!/始まりは君の空 [みんなで叶える物語盤]/cover.jpg` },
        title: "Dreaming Energy",
        filename: `${HOSTING_URL1}Liella!/始まりは君の空 [みんなで叶える物語盤]/03 Dreaming Energy`
    },{
        artist: "Liella!",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Liella!/始まりは君の空 [私を叶える物語盤]/cover.jpg` },
        title: "私のSymphony",
        filename: `${HOSTING_URL1}Liella!/始まりは君の空 [私を叶える物語盤]/03 私のSymphony`
    },{
        artist: "Liella!",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Liella!/START!! True dreams/cover.jpg` },
        title: "START!! True dreams",
        filename: `${HOSTING_URL1}Liella!/START!! True dreams/01 START!! True dreams`
    },{
        artist: "Liella!",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Liella!/START!! True dreams/cover.jpg` },
        title: "だから僕らは鳴らすんだ！",
        filename: `${HOSTING_URL1}Liella!/START!! True dreams/02 だから僕らは鳴らすんだ！`
    },{
        artist: "澁谷かのん（CV.伊達さゆり）",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "ほんのちょっぴり",
        filename: `${HOSTING_URL1}Liella!/TVアニメ『ラブライブ！スーパースター!!』オリジナルサウンドトラック「Dreams of the Superstar 」/Disc3/01 ほんのちょっぴり`
    },{
        artist: "澁谷かのん（CV.伊達さゆり）",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "ほんのちょっぴり〜Orchestra Ver.〜",
        filename: `${HOSTING_URL1}Liella!/TVアニメ『ラブライブ！スーパースター!!』オリジナルサウンドトラック「Dreams of the Superstar 」/Disc1/03 ほんのちょっぴり〜Orchestra Ver.〜`
    },{
        artist: "Liella!",
        lyrics: `${HOSTING_URL1}Liella!/未来予報ハレルヤ！／Tiny Stars/01 未来予報ハレルヤ！.lrc`,
        album: { cover: `${HOSTING_URL1}Liella!/未来予報ハレルヤ！／Tiny Stars/cover1.jpg` },
        title: "未来予報ハレルヤ！",
        filename: `${HOSTING_URL1}Liella!/未来予報ハレルヤ！／Tiny Stars/01 未来予報ハレルヤ！`
    },{
        artist: "澁谷かのん（CV.伊達さゆり）",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "だいすきのうた",
        filename: `${HOSTING_URL1}Liella!/TVアニメ『ラブライブ！スーパースター!!』オリジナルサウンドトラック「Dreams of the Superstar 」/Disc3/04 だいすきのうた`
    },{
        artist: "澁谷かのん（CV.伊達さゆり）",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Tiny Stars~Demo~",
        filename: `${HOSTING_URL1}Liella!/TVアニメ『ラブライブ！スーパースター!!』オリジナルサウンドトラック「Dreams of the Superstar 」/Disc3/05 Tiny Stars~Demo~`
    },{
        artist: "澁谷かのん (CV.伊達さゆり)、唐 可可 (CV.Liyuu)",
        lyrics: `${HOSTING_URL1}Liella!/未来予報ハレルヤ！／Tiny Stars/02 Tiny Stars.lrc`,
        album: { cover: `${HOSTING_URL1}Liella!/未来予報ハレルヤ！／Tiny Stars/cover2.jpg` },
        title: "Tiny Stars",
        filename: `${HOSTING_URL1}Liella!/未来予報ハレルヤ！／Tiny Stars/02 Tiny Stars`
    },{
        artist: "Liella!",
        lyrics: `${HOSTING_URL1}Liella!/未来予報ハレルヤ！／Tiny Stars/03 GOING UP.lrc`,
        album: { cover: `${HOSTING_URL1}Liella!/未来予報ハレルヤ！／Tiny Stars/cover1.jpg` },
        title: "GOING UP",
        filename: `${HOSTING_URL1}Liella!/未来予報ハレルヤ！／Tiny Stars/03 GOING UP`
    },{
        artist: "Liella!",
        lyrics: `${HOSTING_URL1}Liella!/未来予報ハレルヤ！／Tiny Stars/03 1.2.3！.lrc`,
        album: { cover: `${HOSTING_URL1}Liella!/未来予報ハレルヤ！／Tiny Stars/cover2.jpg` },
        title: "1.2.3！",
        filename: `${HOSTING_URL1}Liella!/未来予報ハレルヤ！／Tiny Stars/03 1.2.3！`
    },{
        artist: "平安名すみれ（CV.ペイトン尚未）",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "グソクムシのうた",
        filename: `${HOSTING_URL1}Liella!/TVアニメ『ラブライブ！スーパースター!!』オリジナルサウンドトラック「Dreams of the Superstar 」/Disc3/09 グソクムシのうた`
    },{
        artist: "平安名すみれ（CV.ペイトン尚未）",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "グソクムシのうた~歌谣Ver~",
        filename: `${HOSTING_URL1}Liella!/TVアニメ『ラブライブ！スーパースター!!』オリジナルサウンドトラック「Dreams of the Superstar 」/Disc3/10 グソクムシのうた~歌谣Ver~`
    },{
        artist: "Sunny Passion",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Sunny Passion - HOT PASSION!!.jpg` },
        title: "HOT PASSION!!",
        filename: `${HOSTING_URL1}01 HOT PASSION!!`
    },{
        artist: "澁谷かのん（CV.伊達さゆり）、唐可可（CV.Liyuu）、嵐千砂都（CV.岬なこ）、平安名すみれ（CV.ペイトン尚未）",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Liella!/常夏☆サンシャイン／Wish Song/Cover1.jpg` },
        title: "常夏☆サンシャイン",
        filename: `${HOSTING_URL1}Liella!/常夏☆サンシャイン／Wish Song/01 常夏☆サンシャイン`
    },{
        artist: "Liella!",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Liella!/常夏☆サンシャイン／Wish Song/Cover2.jpg` },
        title: "Wish Song",
        filename: `${HOSTING_URL1}Liella!/常夏☆サンシャイン／Wish Song/02 Wish Song`
    },{
        artist: "Liella!",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Liella!/常夏☆サンシャイン／Wish Song/Cover1.jpg` },
        title: "バイバイしちゃえば！？",
        filename: `${HOSTING_URL1}Liella!/常夏☆サンシャイン／Wish Song/03 バイバイしちゃえば！？`
    },{
        artist: "Liella!",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Liella!/常夏☆サンシャイン／Wish Song/Cover2.jpg` },
        title: "瞬きの先へ",
        filename: `${HOSTING_URL1}Liella!/常夏☆サンシャイン／Wish Song/03 瞬きの先へ`
    },{
        artist: "Liella!",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Liella!/ノンフィクション!!／Starlight Prologue/Cover1.jpg` },
        title: "ノンフィクション!!",
        filename: `${HOSTING_URL1}Liella!/ノンフィクション!!／Starlight Prologue/01 ノンフィクション!!`
    },{
        artist: "澁谷かのん（CV.伊達さゆり）",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "私のSymphony~渋谷かのんVer~",
        filename: `${HOSTING_URL1}Liella!/TVアニメ『ラブライブ！スーパースター!!』オリジナルサウンドトラック「Dreams of the Superstar 」/Disc3/21 私のSymphony~渋谷かのんVer~`
    },{
        artist: "Liella!",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Liella!/ノンフィクション!!／Starlight Prologue/Cover2.jpg` },
        title: "Starlight Prologue",
        filename: `${HOSTING_URL1}Liella!/ノンフィクション!!／Starlight Prologue/02 Starlight Prologue`
    },{
        artist: "Liella!",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Liella!/ノンフィクション!!／Starlight Prologue/Cover1.jpg` },
        title: "Day1",
        filename: `${HOSTING_URL1}Liella!/ノンフィクション!!／Starlight Prologue/03 Day1`
    },{
        artist: "Liella!",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Liella!/ノンフィクション!!／Starlight Prologue/Cover2.jpg` },
        title: "Dream Rainbow",
        filename: `${HOSTING_URL1}Liella!/ノンフィクション!!／Starlight Prologue/03 Dream Rainbow`
    },{
        artist: "Liella!",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Liella!/未来は風のように/cover.jpg` },
        title: "未来は風のように",
        filename: `${HOSTING_URL1}Liella!/未来は風のように/01 未来は風のように`
    },{
        artist: "Liella!",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Liella!/未来は風のように/cover.jpg` },
        title: "この街でいまキミと",
        filename: `${HOSTING_URL1}Liella!/未来は風のように/02 この街でいまキミと`
    },{
        artist: "Liella!",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Liella!/WE WILL!!/cover.jpg` },
        title: "WE WILL!!",
        filename: `${HOSTING_URL1}Liella!/WE WILL!!/01 WE WILL!!`
    },{
        artist: "Liella!",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Liella!/WE WILL!!/cover.jpg` },
        title: "スター宣言",
        filename: `${HOSTING_URL1}Liella!/WE WILL!!/02 スター宣言`
    },{
        artist: "Liella!",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Liella!/Welcome to 僕らのセカイ／Go!! リスタート/Cover1.jpg` },
        title: "Welcome to 僕らのセカイ",
        filename: `${HOSTING_URL1}Liella!/Welcome to 僕らのセカイ／Go!! リスタート/01 Welcome to 僕らのセカイ`
    },{
        artist: "Liella!",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Liella!/Welcome to 僕らのセカイ／Go!! リスタート/Cover2.jpg` },
        title: "Go!! リスタート",
        filename: `${HOSTING_URL1}Liella!/Welcome to 僕らのセカイ／Go!! リスタート/02 Go!! リスタート`
    },{
        artist: "Liella!",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Liella!/Welcome to 僕らのセカイ／Go!! リスタート/Cover1.jpg` },
        title: "色づいて透明",
        filename: `${HOSTING_URL1}Liella!/Welcome to 僕らのセカイ／Go!! リスタート/03 色づいて透明`
    },{
        artist: "Liella!",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Liella!/Welcome to 僕らのセカイ／Go!! リスタート/Cover2.jpg` },
        title: "揺らぐわ",
        filename: `${HOSTING_URL1}Liella!/Welcome to 僕らのセカイ／Go!! リスタート/03 揺らぐわ`
    },{
        artist: "Liella!",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Liella!/ビタミンSUMMER！／Chance Day, Chance Way！/Cover1.jpg` },
        title: "ビタミンSUMMER！",
        filename: `${HOSTING_URL1}Liella!/ビタミンSUMMER！／Chance Day, Chance Way！/01 ビタミンSUMMER！`
    },{
        artist: "Liella!",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Liella!/ビタミンSUMMER！／Chance Day, Chance Way！/Cover2.jpg` },
        title: "Chance Day, Chance Way！",
        filename: `${HOSTING_URL1}Liella!/ビタミンSUMMER！／Chance Day, Chance Way！/02 Chance Day, Chance Way！`
    },{
        artist: "Liella!",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Liella!/ビタミンSUMMER！／Chance Day, Chance Way！/Cover1.jpg` },
        title: "POP TALKING",
        filename: `${HOSTING_URL1}Liella!/ビタミンSUMMER！／Chance Day, Chance Way！/03 POP TALKING`
    },{
        artist: "Liella!",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Liella!/ビタミンSUMMER！／Chance Day, Chance Way！/Cover2.jpg` },
        title: "ユートピアマジック",
        filename: `${HOSTING_URL1}Liella!/ビタミンSUMMER！／Chance Day, Chance Way！/03 ユートピアマジック`
    },{
        artist: "Liella!",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Liella!/Sing！Shine！Smile！／未来の音が聴こえる/Cover1.jpg` },
        title: "Sing！Shine！Smile！",
        filename: `${HOSTING_URL1}Liella!/Sing！Shine！Smile！／未来の音が聴こえる/01 Sing！Shine！Smile！`
    },{
        artist: "Liella!",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Liella!/Sing！Shine！Smile！／未来の音が聴こえる/Cover2.jpg` },
        title: "未来の音が聴こえる",
        filename: `${HOSTING_URL1}Liella!/Sing！Shine！Smile！／未来の音が聴こえる/02 未来の音が聴こえる`
    },{
        artist: "Liella!",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Liella!/Sing！Shine！Smile！／未来の音が聴こえる/Cover1.jpg` },
        title: "名前呼びあうように",
        filename: `${HOSTING_URL1}Liella!/Sing！Shine！Smile！／未来の音が聴こえる/03 名前呼びあうように`
    },{
        artist: "Liella!",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Liella!/Sing！Shine！Smile！／未来の音が聴こえる/Cover2.jpg` },
        title: "TO BE CONTINUED",
        filename: `${HOSTING_URL1}Liella!/Sing！Shine！Smile！／未来の音が聴こえる/03 TO BE CONTINUED`
    },{
        artist: "Liella!",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Liella!/追いかける夢の先で/cover.jpg` },
        title: "追いかける夢の先で",
        filename: `${HOSTING_URL1}Liella!/追いかける夢の先で/01 追いかける夢の先で`
    },{
        artist: "Liella!",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Liella!/追いかける夢の先で/cover.jpg` },
        title: "水しぶきのサイン",
        filename: `${HOSTING_URL1}Liella!/追いかける夢の先で/02 水しぶきのサイン`
    },{
        artist: "高垣楓(早見沙織)、佐藤心(花守ゆみり)、三船美優(原田彩楓)、安部菜々(三宅麻理恵)、片桐早苗(和氣あず未)",
        lyrics: `${HOSTING_URL1}命燃やして恋せよ乙女.lrc`,
        album: { cover: `${HOSTING_URL1}命燃やして恋せよ乙女.jpg` },
        title: "命燃やして恋せよ乙女",
        filename: `${HOSTING_URL1}命燃やして恋せよ乙女`
    },{
        artist: "えなこ feat. P丸様。",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}えなこ feat. P丸様。 - アイデン貞貞メルトダウン.jpg` },
        title: "アイデン貞貞メルトダウン",
        filename: `${HOSTING_URL1}えなこ feat. P丸様。 - アイデン貞貞メルトダウン`
    },{
        artist: "星街すいせい",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}星街すいせい/Still Still Stellar [Hi-Res]/Cover.jpg` },
        title: "Stellar Stellar",
        filename: `${HOSTING_URL1}星街すいせい/Still Still Stellar [Hi-Res]/01 Stellar Stellar`
    },{
        artist: "星街すいせい",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}星街すいせい/Still Still Stellar [Hi-Res]/Cover.jpg` },
        title: "NEXT COLOR PLANET (Still Still Stellar ver.)",
        filename: `${HOSTING_URL1}星街すいせい/Still Still Stellar [Hi-Res]/02 NEXT COLOR PLANET (Still Still Stellar ver.)`
    },{
        artist: "星街すいせい",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}星街すいせい/Still Still Stellar [Hi-Res]/Cover.jpg` },
        title: "天球、彗星は夜を跨いで (Still Still Stellar ver.)",
        filename: `${HOSTING_URL1}星街すいせい/Still Still Stellar [Hi-Res]/03 天球、彗星は夜を跨いで (Still Still Stellar ver.)`
    },{
        artist: "星街すいせい",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}星街すいせい/Still Still Stellar [Hi-Res]/Cover.jpg` },
        title: "GHOST (Still Still Stellar ver.)",
        filename: `${HOSTING_URL1}星街すいせい/Still Still Stellar [Hi-Res]/04 GHOST (Still Still Stellar ver.)`
    },{
        artist: "星街すいせい",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}星街すいせい/Still Still Stellar [Hi-Res]/Cover.jpg` },
        title: "バイバイレイニー (Still Still Stellar ver.)",
        filename: `${HOSTING_URL1}星街すいせい/Still Still Stellar [Hi-Res]/05 バイバイレイニー (Still Still Stellar ver.)`
    },{
        artist: "星街すいせい",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}星街すいせい/Still Still Stellar [Hi-Res]/Cover.jpg` },
        title: "自分勝手Dazzling (Still Still Stellar ver.)",
        filename: `${HOSTING_URL1}星街すいせい/Still Still Stellar [Hi-Res]/06 自分勝手Dazzling (Still Still Stellar ver.)`
    },{
        artist: "星街すいせい",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}星街すいせい/Still Still Stellar [Hi-Res]/Cover.jpg` },
        title: "Bluerose (Still Still Stellar ver.)",
        filename: `${HOSTING_URL1}星街すいせい/Still Still Stellar [Hi-Res]/07 Bluerose (Still Still Stellar ver.)`
    },{
        artist: "星街すいせい",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}星街すいせい/Still Still Stellar [Hi-Res]/Cover.jpg` },
        title: "comet (Still Still Stellar ver.)",
        filename: `${HOSTING_URL1}星街すいせい/Still Still Stellar [Hi-Res]/08 comet (Still Still Stellar ver.)`
    },{
        artist: "星街すいせい",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}星街すいせい/Still Still Stellar [Hi-Res]/Cover.jpg` },
        title: "Andromeda",
        filename: `${HOSTING_URL1}星街すいせい/Still Still Stellar [Hi-Res]/09 Andromeda`
    },{
        artist: "星街すいせい",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}星街すいせい/Still Still Stellar [Hi-Res]/Cover.jpg` },
        title: "Je t'aime。",
        filename: `${HOSTING_URL1}星街すいせい/Still Still Stellar [Hi-Res]/10 Je t_aime。`
    },{
        artist: "星街すいせい",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}星街すいせい/Still Still Stellar [Hi-Res]/Cover.jpg` },
        title: "Starry Jet",
        filename: `${HOSTING_URL1}星街すいせい/Still Still Stellar [Hi-Res]/11 Starry Jet`
    },{
        artist: "星街すいせい",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}星街すいせい/Still Still Stellar [Hi-Res]/Cover.jpg` },
        title: "駆けろ (Still Still Stellar ver.)",
        filename: `${HOSTING_URL1}星街すいせい/Still Still Stellar [Hi-Res]/12 駆けろ (Still Still Stellar ver.)`
    },{
        artist: "杨沛宜",
        lyrics: `${HOSTING_URL1}杨沛宜 - 左手右手.lrc`,
        album: { cover: "img/album.png" },
        title: "左手右手",
        filename: `${HOSTING_URL1}杨沛宜 - 左手右手`
    },{
        artist: "郑中基",
        lyrics: `${HOSTING_URL1}郑中基 - 我爱平底锅.lrc`,
        album: { cover: "img/album.png" },
        title: "我爱平底锅",
        filename: `${HOSTING_URL1}郑中基 - 我爱平底锅`
    },{
        artist: "甄妮",
        lyrics: `${HOSTING_URL1}甄妮 - 你知道我在等你嗎.lrc`,
        album: { cover: `${HOSTING_URL1}甄妮 - 你知道我在等你嗎.jpg` },
        title: "你知道我在等你嗎",
        filename: `${HOSTING_URL1}甄妮 - 你知道我在等你嗎`
    },{
        artist: "甄妮",
        lyrics: `${HOSTING_URL1}甄妮 - 你知道我在等你嗎 (Live).lrc`,
        album: { cover: `${HOSTING_URL1}甄妮 - 你知道我在等你嗎 (Live).jpg` },
        title: "你知道我在等你嗎 (Live)",
        filename: `${HOSTING_URL1}甄妮 - 你知道我在等你嗎 (Live)`
    },{
        artist: "張艾嘉",
        lyrics: `${HOSTING_URL1}張艾嘉 - 童年.lrc`,
        album: { cover: "img/album.png" },
        title: "童年",
        filename: `${HOSTING_URL1}張艾嘉 - 童年`
    },{
        artist: "張信哲",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "愛如潮水",
        filename: `${HOSTING_URL1}張信哲 - 愛如潮水`
    },{
        artist: "張信哲",
        lyrics: `${HOSTING_URL1}張信哲 - 愛就一個字.lrc`,
        album: { cover: "img/album.png" },
        title: "愛就一個字",
        filename: `${HOSTING_URL1}張信哲 - 愛就一個字`
    },{
        artist: "阿杜",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "堅持到底",
        filename: `${HOSTING_URL1}阿杜 - 堅持到底`
    },{
        artist: "許茹芸",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "如果雲知道",
        filename: `${HOSTING_URL1}許茹芸 - 如果雲知道`
    },{
        artist: "陳奕迅",
        lyrics: `${HOSTING_URL1}陳奕迅 - 愛情轉移.lrc`,
        album: { cover: "img/album.png" },
        title: "愛情轉移",
        filename: `${HOSTING_URL1}陳奕迅 - 愛情轉移`
    },{
        artist: "王心凌",
        lyrics: `${HOSTING_URL1}王心凌 - 愛你.lrc`,
        album: { cover: "img/album.png" },
        title: "愛你",
        filename: `${HOSTING_URL1}王心凌 - 愛你`
    },{
        artist: "張紹涵",
        lyrics: `${HOSTING_URL1}張紹涵 - 夢裡花.lrc`,
        album: { cover: "img/album.png" },
        title: "夢裡花",
        filename: `${HOSTING_URL1}張紹涵 - 夢裡花`
    },{
        artist: "光良",
        lyrics: `${HOSTING_URL1}光良 - 童話.lrc`,
        album: { cover: "img/album.png" },
        title: "童話",
        filename: `${HOSTING_URL1}光良 - 童話`
    },{
        artist: "光良",
        lyrics: `${HOSTING_URL1}光良 - 約定.lrc`,
        album: { cover: "img/album.png" },
        title: "約定",
        filename: `${HOSTING_URL1}光良 - 約定`
    },{
        artist: "Sweety",
        lyrics: `${HOSTING_URL1}Sweety - 樱花草.lrc`,
        album: { cover: `${HOSTING_URL1}Sweety - 花言喬語.jpg` },
        title: "樱花草",
        filename: `${HOSTING_URL1}Sweety - 樱花草`
    },{
        artist: "李聖傑",
        lyrics: `${HOSTING_URL1}李聖傑 - 癡心絕對.lrc`,
        album: { cover: "img/album.png" },
        title: "癡心絕對",
        filename: `${HOSTING_URL1}李聖傑 - 癡心絕對`
    },{
        artist: "黃美珍",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}黃美珍/途中/cover.jpg` },
        title: "途中",
        filename: `${HOSTING_URL1}黃美珍/途中/04 途中`
    },{
        artist: "周杰倫",
        lyrics: `${HOSTING_URL1}周杰倫 - 七里香.lrc`,
        album: { cover: "img/album.png" },
        title: "七里香",
        filename: `${HOSTING_URL1}周杰倫 - 七里香`
    },{
        artist: "周杰倫",
        lyrics: `${HOSTING_URL1}周杰倫 - 聽媽媽的話.lrc`,
        album: { cover: "img/album.png" },
        title: "聽媽媽的話",
        filename: `${HOSTING_URL1}周杰倫 - 聽媽媽的話`
    },{
        artist: "周杰倫",
        lyrics: `${HOSTING_URL1}周杰倫 - 甜甜的.lrc`,
        album: { cover: "img/album.png" },
        title: "甜甜的",
        filename: `${HOSTING_URL1}周杰倫 - 甜甜的`
    },{
        artist: "吳克群",
        lyrics: `${HOSTING_URL1}吳克群 - 為你寫詩.lrc`,
        album: { cover: "img/album.png" },
        title: "為你寫詩",
        filename: `${HOSTING_URL1}吳克群 - 為你寫詩`
    },{
        artist: "梁心頤（Lara）",
        lyrics: `${HOSTING_URL1}梁心頤（Lara） - 靠近一點點.lrc`,
        album: { cover: "img/album.png" },
        title: "靠近一點點",
        filename: `${HOSTING_URL1}梁心頤（Lara） - 靠近一點點`
    },{
        artist: "梁靜茹",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "暖暖",
        filename: `${HOSTING_URL1}梁靜茹 - 暖暖`
    },{
        artist: "卓文萱＆曹格",
        lyrics: `${HOSTING_URL1}卓文萱＆曹格 - 梁山伯與茱麗葉.lrc`,
        album: { cover: `${HOSTING_URL1}卓文萱＆曹格 - 梁山伯與茱麗葉.jpg` },
        title: "梁山伯與茱麗葉",
        filename: `${HOSTING_URL1}卓文萱＆曹格 - 梁山伯與茱麗葉`
    },{
        artist: "陶喆＆蔡依林",
        lyrics: `${HOSTING_URL1}陶喆＆蔡依林 - 今天你要嫁给我.lrc`,
        album: { cover: "img/album.png" },
        title: "今天你要嫁给我",
        filename: `${HOSTING_URL1}陶喆＆蔡依林 - 今天你要嫁给我`
    },{
        artist: "李千娜",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "心花開",
        filename: `${HOSTING_URL1}李千娜/愛到站了/02 心花開`
    },{
        artist: "家家",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "命運",
        filename: `${HOSTING_URL1}家家 - 命運`
    },{
        artist: "Zy",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "命运 beat",
        filename: `${HOSTING_URL1}Zy - 命运 beat`
    },{
        artist: "劉明湘",
        lyrics: `${HOSTING_URL1}劉明湘 - 飄洋過海來看你.lrc`,
        album: { cover: "img/album.png" },
        title: "飄洋過海來看你",
        filename: `${HOSTING_URL1}劉明湘 - 飄洋過海來看你`
    },{
        artist: "汪蘇瀧＆BY2",
        lyrics: `${HOSTING_URL1}汪蘇瀧＆BY2 - 有點甜.lrc`,
        album: { cover: `${HOSTING_URL1}汪蘇瀧＆BY2 - 有點甜.jpg` },
        title: "有點甜",
        filename: `${HOSTING_URL1}汪蘇瀧＆BY2 - 有點甜`
    },{
        artist: "陶喆、关诗敏",
        lyrics: `${HOSTING_URL1}陶喆、关诗敏 - 屋顶.lrc`,
        album: { cover: "img/album.png" },
        title: "屋顶",
        filename: `${HOSTING_URL1}陶喆、关诗敏 - 屋顶`
    },{
        artist: "王启文",
        lyrics: `${HOSTING_URL1}王启文 - 老鼠爱大米.lrc`,
        album: { cover: "img/album.png" },
        title: "老鼠爱大米",
        filename: `${HOSTING_URL1}王启文 - 老鼠爱大米`
    },{
        artist: "李宇春",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "下个路口见",
        filename: `${HOSTING_URL1}李宇春 - 下个路口见`
    },{
        artist: "金莎",
        lyrics: `${HOSTING_URL1}金莎 - 爱的魔法.lrc`,
        album: { cover: "img/album.png" },
        title: "爱的魔法",
        filename: `${HOSTING_URL1}金莎 - 爱的魔法`
    },{
        artist: "白小白",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "最美情侣",
        filename: `${HOSTING_URL1}白小白 - 最美情侣`
    },{
        artist: "冷漠",
        lyrics: `${HOSTING_URL1}冷漠 - 我爱你不是因为你爱我.lrc`,
        album: { cover: `${HOSTING_URL1}冷漠 - 冷漠金曲醉精選.jpg` },
        title: "我爱你不是因为你爱我",
        filename: `${HOSTING_URL1}冷漠 - 我爱你不是因为你爱我`
    },{
        artist: "逃跑计划",
        lyrics: `${HOSTING_URL1}逃跑计划 - 夜空中最亮的星.lrc`,
        album: { cover: "img/album.png" },
        title: "夜空中最亮的星",
        filename: `${HOSTING_URL1}逃跑计划 - 夜空中最亮的星`
    },{
        artist: "樊凡",
        lyrics: `${HOSTING_URL1}樊凡 - 我想大声告诉你.lrc`,
        album: { cover: `${HOSTING_URL1}樊凡 - 我想大声告诉你.jpg` },
        title: "我想大声告诉你",
        filename: `${HOSTING_URL1}樊凡 - 我想大声告诉你`
    },{
        artist: "陈泫孝（大泫）",
        lyrics: `${HOSTING_URL1}陈泫孝（大泫） - 静悄悄.lrc`,
        album: { cover: `${HOSTING_URL1}陈泫孝（大泫） - 静悄悄.jpg` },
        title: "静悄悄",
        filename: `${HOSTING_URL1}陈泫孝（大泫） - 静悄悄`
    },{
        artist: "阿肆",
        lyrics: `${HOSTING_URL1}阿肆 - 熱愛105°C的你.lrc`,
        album: { cover: "img/album.png" },
        title: "熱愛105°C的你",
        filename: `${HOSTING_URL1}阿肆 - 熱愛105°C的你`
    },{
        artist: "李宗盛＆林憶蓮",
        lyrics: `${HOSTING_URL1}李宗盛＆林憶蓮 - 當愛已成往事.lrc`,
        album: { cover: "img/album.png" },
        title: "當愛已成往事",
        filename: `${HOSTING_URL1}李宗盛＆林憶蓮 - 當愛已成往事`
    },{
        artist: "陳淑樺",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "夢醒時分",
        filename: `${HOSTING_URL1}陳淑樺 - 夢醒時分`
    },{
        artist: "陳奕迅",
        lyrics: `${HOSTING_URL1}陳奕迅 - 十年.lrc`,
        album: { cover: "img/album.png" },
        title: "十年",
        filename: `${HOSTING_URL1}陳奕迅 - 十年`
    },{
        artist: "陶晶瑩",
        lyrics: `${HOSTING_URL1}陶晶瑩 - 太委屈.lrc`,
        album: { cover: "img/album.png" },
        title: "太委屈",
        filename: `${HOSTING_URL1}陶晶瑩 - 太委屈`
    },{
        artist: "李聖杰",
        lyrics: `${HOSTING_URL1}李聖杰 - 你那麽愛她.lrc`,
        album: { cover: `${HOSTING_URL1}李聖杰 - 你那麽愛她.jpg` },
        title: "你那麽愛她",
        filename: `${HOSTING_URL1}李聖杰 - 你那麽愛她`
    },{
        artist: "FIR",
        lyrics: `${HOSTING_URL1}FIR - 我們的愛.lrc`,
        album: { cover: `${HOSTING_URL1}FIR - 飛兒樂團.jpg` },
        title: "我們的愛",
        filename: `${HOSTING_URL1}FIR - 我們的愛`
    },{
        artist: "周杰倫、梁心頤",
        lyrics: `${HOSTING_URL1}周杰倫、梁心頤 - 珊瑚海.lrc`,
        album: { cover: "img/album.png" },
        title: "珊瑚海",
        filename: `${HOSTING_URL1}周杰倫、梁心頤 - 珊瑚海`
    },{
        artist: "周杰倫",
        lyrics: `${HOSTING_URL1}周杰倫 - 安靜.lrc`,
        album: { cover: "img/album.png" },
        title: "安靜",
        filename: `${HOSTING_URL1}周杰倫 - 安靜`
    },{
        artist: "周杰倫",
        lyrics: `${HOSTING_URL1}周杰倫 - 蒲公英的約定.lrc`,
        album: { cover: "img/album.png" },
        title: "蒲公英的約定",
        filename: `${HOSTING_URL1}周杰倫 - 蒲公英的約定`
    },{
        artist: "周杰倫",
        lyrics: `${HOSTING_URL1}周杰倫 - 說好的幸福呢.lrc`,
        album: { cover: "img/album.png" },
        title: "說好的幸福呢",
        filename: `${HOSTING_URL1}周杰倫 - 說好的幸福呢`
    },{
        artist: "張玉華",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "那又怎麼樣呢",
        filename: `${HOSTING_URL1}張玉華 - 那又怎麼樣呢`
    },{
        artist: "阿桑",
        lyrics: `${HOSTING_URL1}阿桑 - 一直很安静.lrc`,
        album: { cover: `${HOSTING_URL1}阿桑 - 寂寞在唱歌.jpg` },
        title: "一直很安静",
        filename: `${HOSTING_URL1}阿桑 - 一直很安静`
    },{
        artist: "光良",
        lyrics: `${HOSTING_URL1}光良 - 第一次.lrc`,
        album: { cover: "img/album.png" },
        title: "第一次",
        filename: `${HOSTING_URL1}光良 - 第一次`
    },{
        artist: "梁静茹",
        lyrics: `${HOSTING_URL1}梁静茹 - 可惜不是你.lrc`,
        album: { cover: "img/album.png" },
        title: "可惜不是你",
        filename: `${HOSTING_URL1}梁静茹 - 可惜不是你`
    },{
        artist: "桂莹莹",
        lyrics: `${HOSTING_URL1}桂莹莹 - 香水有毒.lrc`,
        album: { cover: `${HOSTING_URL1}桂莹莹 - 香水有毒.jpg` },
        title: "香水有毒",
        filename: `${HOSTING_URL1}桂莹莹 - 香水有毒`
    },{
        artist: "冷漠",
        lyrics: `${HOSTING_URL1}冷漠 - 小三.lrc`,
        album: { cover: `${HOSTING_URL1}冷漠 - 小三.jpg` },
        title: "小三",
        filename: `${HOSTING_URL1}冷漠 - 小三`
    },{
        artist: "阿木",
        lyrics: `${HOSTING_URL1}阿木 - 有一种爱叫做放手.lrc`,
        album: { cover: "img/album.png" },
        title: "有一种爱叫做放手",
        filename: `${HOSTING_URL1}阿木 - 有一种爱叫做放手`
    },{
        artist: "徐誉滕",
        lyrics: `${HOSTING_URL1}徐誉滕 - 等一分钟.lrc`,
        album: { cover: "img/album.png" },
        title: "等一分钟",
        filename: `${HOSTING_URL1}徐誉滕 - 等一分钟`
    },{
        artist: "T.R.Y",
        lyrics: `${HOSTING_URL1}T.R.Y - 不是因为寂寞才想你.lrc`,
        album: { cover: "img/album.png" },
        title: "不是因为寂寞才想你",
        filename: `${HOSTING_URL1}T.R.Y - 不是因为寂寞才想你`
    },{
        artist: "马天宇",
        lyrics: `${HOSTING_URL1}马天宇 - 该死的温柔.lrc`,
        album: { cover: "img/album.png" },
        title: "该死的温柔",
        filename: `${HOSTING_URL1}马天宇 - 该死的温柔`
    },{
        artist: "胡夏",
        lyrics: `${HOSTING_URL1}胡夏 - 那些年.lrc`,
        album: { cover: "img/album.png" },
        title: "那些年",
        filename: `${HOSTING_URL1}胡夏 - 那些年`
    },{
        artist: "毛不易",
        lyrics: `${HOSTING_URL1}毛不易 - 像我这样的人.lrc`,
        album: { cover: "img/album.png" },
        title: "像我这样的人",
        filename: `${HOSTING_URL1}毛不易 - 像我这样的人`
    },{
        artist: "于文文",
        lyrics: `${HOSTING_URL1}于文文 - 体面.lrc`,
        album: { cover: "img/album.png" },
        title: "体面",
        filename: `${HOSTING_URL1}于文文 - 体面`
    },{
        artist: "夏天 Alex",
        lyrics: `${HOSTING_URL1}夏天Alex - 不再联系.lrc`,
        album: { cover: `${HOSTING_URL1}夏天Alex - 不再联系.jpg` },
        title: "不再联系",
        filename: `${HOSTING_URL1}夏天Alex - 不再联系`
    },{
        artist: "曾一鸣",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "像疯了一样",
        filename: `${HOSTING_URL1}曾一鸣 - 像疯了一样`
    },{
        artist: "孙方",
        lyrics: `${HOSTING_URL1}孙方 - 再爱不能.lrc`,
        album: { cover: "img/album.png" },
        title: "再爱不能",
        filename: `${HOSTING_URL1}孙方 - 再爱不能`
    },{
        artist: "韓紅",
        lyrics: `${HOSTING_URL1}韓紅 - 青藏高原.lrc`,
        album: { cover: "img/album.png" },
        title: "青藏高原",
        filename: `${HOSTING_URL1}韓紅 - 青藏高原`
    },{
        artist: "乌兰托娅",
        lyrics: `${HOSTING_URL1}乌兰托娅 - 火红的萨日朗.lrc`,
        album: { cover: "img/album.png" },
        title: "火红的萨日朗",
        filename: `${HOSTING_URL1}乌兰托娅 - 火红的萨日朗`
    },{
        artist: "宋冬野",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "董小姐",
        filename: `${HOSTING_URL1}宋冬野 - 董小姐`
    },{
        artist: "任然",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "山外小楼夜听雨",
        filename: `${HOSTING_URL1}任然 - 山外小楼夜听雨`
    },{
        artist: "五音Jw",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "天涯共此时",
        filename: `${HOSTING_URL1}五音Jw - 天涯共此时`
    },{
        artist: "五音Jw",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "明月天涯",
        filename: `${HOSTING_URL1}五音Jw - 明月天涯`
    },{
        artist: "国风堂、五音Jw",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "侠心",
        filename: `${HOSTING_URL1}国风堂、五音Jw - 侠心`
    },{
        artist: "小坠、以冬、ITA、玄觞、西瓜JUN、小魂、五音Jw、Tacke竹桑、妖扬、吾恩、萧忆情、橙翼、岑先生",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "且战",
        filename: `${HOSTING_URL1}且战`
    },{
        artist: "排骨教主、三无MarBlue、KBShinya、音频怪物、李常超（Lao乾媽）、奇然、王胖子、五音Jw、泥鳅Niko",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "一载百味",
        filename: `${HOSTING_URL1}一载百味`
    },{
        artist: "五音Jw",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "赴人间",
        filename: `${HOSTING_URL1}五音Jw - 赴人间`
    },{
        artist: "羅志祥",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "精舞門",
        filename: `${HOSTING_URL1}羅志祥 - 精舞門`
    },{
        artist: "G.E.M. 鄧紫棋",
        lyrics: `${HOSTING_URL1}G.E.M. 鄧紫棋 - 來自天堂的魔鬼.lrc`,
        album: { cover: "img/album.png" },
        title: "來自天堂的魔鬼",
        filename: `${HOSTING_URL1}G.E.M. 鄧紫棋 - 來自天堂的魔鬼`
    },{
        artist: "艾辰",
        lyrics: `${HOSTING_URL1}艾辰 - 錯位時空.lrc`,
        album: { cover: "img/album.png" },
        title: "錯位時空",
        filename: `${HOSTING_URL1}艾辰 - 錯位時空`
    },{
        artist: "阿冗",
        lyrics: `${HOSTING_URL1}阿冗 - 你的答案.lrc`,
        album: { cover: "img/album.png" },
        title: "你的答案",
        filename: `${HOSTING_URL1}阿冗 - 你的答案`
    },{
        artist: "文慧如",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}文慧如/还原/Cover.jpg` },
        title: "还原",
        filename: `${HOSTING_URL1}文慧如/还原/01 还原`
    },{
        artist: "文慧如",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}文慧如/还原/Cover.jpg` },
        title: "Crush on You",
        filename: `${HOSTING_URL1}文慧如/还原/02 Crush on You`
    },{
        artist: "文慧如",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}文慧如/还原/Cover.jpg` },
        title: "全放空 ft. 鼓鼓 吕思纬",
        filename: `${HOSTING_URL1}文慧如/还原/03 全放空 ft. 鼓鼓 吕思纬`
    },{
        artist: "文慧如",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}文慧如/还原/Cover.jpg` },
        title: "玩意",
        filename: `${HOSTING_URL1}文慧如/还原/04 玩意`
    },{
        artist: "文慧如",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}文慧如/还原/Cover.jpg` },
        title: "Messed Up ft.邱锋泽",
        filename: `${HOSTING_URL1}文慧如/还原/05 Messed Up ft.邱锋泽`
    },{
        artist: "文慧如",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}文慧如/还原/Cover.jpg` },
        title: "I'm Lost",
        filename: `${HOSTING_URL1}文慧如/还原/06 I'm Lost`
    },{
        artist: "文慧如",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}文慧如/还原/Cover.jpg` },
        title: "不可言说",
        filename: `${HOSTING_URL1}文慧如/还原/07 不可言说`
    },{
        artist: "文慧如",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}文慧如/还原/Cover.jpg` },
        title: "同行",
        filename: `${HOSTING_URL1}文慧如/还原/08 同行`
    },{
        artist: "文慧如",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}文慧如/还原/Cover.jpg` },
        title: "Don't Be Afraid ft. 黄祝贤儒",
        filename: `${HOSTING_URL1}文慧如/还原/09 Don't Be Afraid ft. 黄祝贤儒`
    },{
        artist: "文慧如",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}文慧如/还原/Cover.jpg` },
        title: "做你的太阳",
        filename: `${HOSTING_URL1}文慧如/还原/10 做你的太阳`
    },{
        artist: "詹雯婷",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "诀爱",
        filename: `${HOSTING_URL1}詹雯婷 - 诀爱`
    },{
        artist: "李聖傑",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}李聖傑/Face II 真・裏/Cover.png` },
        title: "FACE",
        filename: `${HOSTING_URL1}李聖傑/Face II 真・裏/01 FACE`
    },{
        artist: "李聖傑",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}李聖傑/Face II 真・裏/Cover.png` },
        title: "時尚大叔",
        filename: `${HOSTING_URL1}李聖傑/Face II 真・裏/02 時尚大叔`
    },{
        artist: "李聖傑",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}李聖傑/Face II 真・裏/Cover.png` },
        title: "最美的遺憾",
        filename: `${HOSTING_URL1}李聖傑/Face II 真・裏/03 最美的遺憾`
    },{
        artist: "李聖傑",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}李聖傑/Face II 真・裏/Cover.png` },
        title: "塔圖",
        filename: `${HOSTING_URL1}李聖傑/Face II 真・裏/04 塔圖`
    },{
        artist: "翁立友",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "我問天",
        filename: `${HOSTING_URL1}翁立友 - 我問天`
    },{
        artist: "蔡小虎",
        lyrics: `${HOSTING_URL1}蔡小虎 - 愛情爐丹.lrc`,
        album: { cover: "img/album.png" },
        title: "愛情爐丹",
        filename: `${HOSTING_URL1}蔡小虎 - 愛情爐丹`
    },{
        artist: "唐儷＆陳隨意",
        lyrics: `${HOSTING_URL1}唐儷＆陳隨意 - 夢紅塵.lrc`,
        album: { cover: "img/album.png" },
        title: "夢紅塵",
        filename: `${HOSTING_URL1}唐儷＆陳隨意 - 夢紅塵`
    },{
        artist: "唐儷＆陳隨意",
        lyrics: `${HOSTING_URL1}唐儷＆陳隨意 - 今生只為你.lrc`,
        album: { cover: "img/album.png" },
        title: "今生只為你",
        filename: `${HOSTING_URL1}唐儷＆陳隨意 - 今生只為你`
    },{
        artist: "鄭智化",
        lyrics: `${HOSTING_URL1}鄭智化 - 星星點燈.lrc`,
        album: { cover: "img/album.png" },
        title: "星星點燈",
        filename: `${HOSTING_URL1}鄭智化 - 星星點燈`
    },{
        artist: "Saint Preux",
        lyrics: null,
        album: { cover: `${HOSTING_URL1}Saint Preux/Concerto pour deux voix/Cover.jpg` },
        title: "Concerto pour deux voix",
        filename: `${HOSTING_URL1}Saint Preux/Concerto pour deux voix/01 Concerto pour deux voix`
    },{
        artist: "Harold Faltermeyer",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "Axel F.",
        filename: `${HOSTING_URL1}Harold Faltermeyer - Axel F.`
    },{
        artist: "Jannik",
        lyrics: null,
        album: { cover: "img/album.png" },
        title: "浮光 (The History)",
        filename: `${HOSTING_URL1}Jannik - 浮光 (The History)`
    }
];