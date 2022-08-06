import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from "next/router"
import { useEffect, useState } from 'react'

const Result: NextPage = () => {
  const [state, setState] = useState({name: "", position: ""} as {name: string, position: string});
  const sizes = {
    "0": [407, 592], "1": [387, 542], "2": [318, 707], "3": [459, 746], "4": [430, 680], "5": [269, 535], "6": [412, 687], "7": [318, 669], "8": [469, 738], "9": [409, 612],
    "10": [389, 576], "11": [380, 639], "12": [370, 630], "13": [429, 570], "14": [339, 696], "15": [409, 572], "16": [382, 649], "17": [432, 690], "18": [524, 615],
    "19": [342, 625], "20": [364, 566], "21": [760, 746],
    "cup0": [443, 570], "cup1": [403, 658], "cup2": [350, 611], "cup3": [432, 675], "cup4": [297, 600], "cup5": [387, 704], "cup6": [405, 634], "cup7": [361, 608],
    "cup8": [392, 631], "cup9": [421, 642], "cup10": [252, 581], "cup11": [520, 715], "cup12": [730, 700], "cup13": [445, 662],
    "coin0": [376, 611], "coin1": [477, 652], "coin2": [260, 588], "coin3": [383, 656], "coin4": [258, 611], "coin5": [386, 710], "coin6": [468, 653], "coin7": [523, 660],
    "coin8": [378, 646], "coin9": [521, 663], "coin10": [369, 647], "coin11": [395, 576], "coin12": [500, 612], "coin13": [313, 599],
    "wand0": [448, 696], "wand1": [408, 592], "wand2": [514, 684], "wand3": [528, 663], "wand4": [325, 628], "wand5": [376, 523], "wand6": [451, 693], "wand7": [518, 617],
    "wand8": [431, 613], "wand9": [424, 600], "wand10": [351, 659], "wand11": [609, 710], "wand12": [425, 690], "wand13": [574, 661],
    "sword0": [440, 720], "sword1": [350, 623], "sword2": [345, 608], "sword3": [607, 656], "sword4": [338, 579], "sword5": [440, 576], "sword6": [376, 596], "sword7": [370, 611],
    "sword8": [368, 659], "sword9": [449, 568], "sword10": [365, 619], "sword11": [455, 700], "sword12": [409, 665], "sword13": [286, 581],
  };
  const results = {
    "0": ["愚者", "これといった目的がなく過ごすものの、結果的には楽しい時間に。", "あれもこれもといろいろなことに手を出して、どれも中途半端な結果に。"],
    "1": ["魔術師", "周囲を気にせず一人で自由に行動して、確かな手応えを得られそう。", "何となく周囲に流されているうちに、一日が終わってしまう。"],
    "2": ["女教皇", "勉強運が好調。本やインターネットでよい情報が見つかる予感も。", "考えることが多く、頭脳を酷使する。言葉遣いが雑になる心配も。"],
    "3": ["女帝", "家族や恋人など大切な人の愛情を実感できて、幸福感にあふれる。", "異性とのトラブルに注意。気がある素振りをするのは避けること。"],
    "4": ["皇帝", "自分の役割をしっかりこなせ、周囲から実力を認められる。", "自信過剰な態度が周囲の人の反感をかうので、謙虚に過ごしたいとき。"],
    "5": ["法王", "何かで困ったり悩んだりしても、援助の手やよい助言を得られそう。", "周囲の理解を得られないかも。何でも自力でこなした方が無難。"],
    "6": ["恋人", "恋心を示されて、大きなトキメキを感じる。レジャーも楽しいとき。", "時間など約束事にルーズになり、いい加減な人だと思われる心配。"],
    "7": ["戦車", "何かと移動が多く、慌しい時。遠出をする場面も出て来るかも。", "思い通りに進まず、どう動いていいのかわからず、混乱してしまいがち。"],
    "8": ["力", "目標に向かって全力で頑張ることができて、満足感を得られる暗示。", "自分のコンプレックスを刺激され、ドーンと落ち込んでしまう。"],
    "9": ["隠者", "思考を重ねることで精神的な悟りを得たり、気分が落ち着いたりする。", "周囲に心を閉ざして本音を出せずに、気がつけば孤立しそう。"],
    "10": ["運命の輪", "待ち望んでいたラッキーチャンスや嬉しい話が舞い込んできそう。", "期待していたことが実現せず、ガックリと肩の力を落としやすい日。"],
    "11": ["正義", "感情に振り回されることなく合理的に取り組み、物事が秩序正しく進みます。", "同時に２つのことに手を出して、どちらも中途半端になる。"],
    "12": ["吊るされた男", "苦しみを通して、悟りなど精神的な充足感を得られます。", "頑張るわりには成果が出ずに、疲れるだけで終わってしまう。"],
    "13": ["死神", "計画の中止や人との別れなど、何かがスッパリと終わります。", "状況がほぼ180度変化し、まるで生まれ変わったような状況が訪れる。"],
    "14": ["節制", "バランスが取れてリラックスできる、穏やかな状態です。", "流れが止まってしまっているため変化が少なく、惰性に流されやすい。"],
    "15": ["悪魔", "体調が悪くなったり、苦手な用事を任されたりと、気が重いとき。", "今まで苦痛だと思っていた状況から、抜け出すことができる予感。"],
    "16": ["塔", "予想していなかった出来事が起こり、ビックリしてしまう。", "隠し事がバレたり人に欠点を指摘されたりと、緊張感が漂う日。"],
    "17": ["星", "ワクワクするようなロマンチックな予定が入って来る可能性あり。", "現実の厳しさを思い知らされ、悲しい気分になってしまう。"],
    "18": ["月", "周囲の人の気持ちが見えずに、必要以上に心配してしまう。", "苦手な人の長所を発見するなど、誤解していたことに気づく暗示。"],
    "19": ["太陽", "オープンな気持ちになれて、誰とでも和気あいあいと過ごせる。", "希望は絶望へと変わり気分はどん底。夢や希望の実現も困難に。"],
    "20": ["審判", "今まで頑張ってきてよかった、と思える出来事が訪れる予感あり。", "期待していたことは起こらずに、肩の力が抜けてしまう。"],
    "21": ["世界", "心から感動することができて、内面がしっかりと満たされる。", "刺激が少なく、ぬるま湯に浸かったような気分ですぎる一日。"],
    "wand0": ["棒エース", "無の状態から新しく何かをスタートさせて、成功を収められる。", "進めていたことが完全に終わったり、破壊されたりする。"],
    "wand1": ["棒2", "私生活や自分の感情を犠牲にして、仕事や勉強で好成績を出せる。", "予想していなかった、驚くような出来事が起こる。"],
    "wand2": ["棒3", "よい企画の話が入るなど、未来への希望を持つことができる。", "よい企画の話が入るなど、未来への希望を持つことができる。"],
    "wand3": ["棒4", "心からリラックスして、気の合う人たちと平和な時間を共有できる。", "心からリラックスして、気の合う人たちと平和な時間を共有できる。"],
    "wand4": ["棒5", "結果の出ない不毛な争いが続き、心も体も疲労困憊してしまう。", "悩み事がさらに複雑な状況になり、解決の糸口をつかめない。"],
    "wand5": ["棒6", "争いで勝ったり高い成績を出したり、誇らしい勝利を得られる。", "勝負事で負けてしまい、強い劣等感を味わってしまう。"],
    "wand6": ["棒7", "戦わなければならないが、有利な戦いとなり勝つことができる。", "何かの戦いで不利を感じて、戦闘意欲を失ってしまう。"],
    "wand7": ["棒8", "驚くほどスピーディーに、状況が展開されていく。", "物事の動きがゆっくりで、ジレンマを感じる。誰かに嫉妬する。"],
    "wand8": ["棒9", "困難に備えて慎重に準備を進める。ただし大きな動きはない。", "慎重で保守的になりすぎて、物事の進展が望めない。"],
    "wand9": ["棒10", "精神的プレッシャーを感じる逃げられない場面が訪れる。", "プレッシャーから逃げようとして、手を抜いたり投げ出す。"],
    "wand10": ["棒ペイジ", "嬉しくなるような、仕事や勉強に関するよい知らせが届く。", "仕事や勉強に関して、ガッカリするような知らせが届く。"],
    "wand11": ["棒ナイト", "目標に向けて、情熱を燃やして前進できる。", "進めていることが中断されるなど、予想外の動きがある。"],
    "wand12": ["棒クイーン", "情熱的で元気な女性と縁ができたり、自分が元気になったりする。", "強欲さを持つ女性に悩んだり、自分が強欲さで悩ませたりする。"],
    "wand13": ["棒キング", "エネルギッシュな男性や自分の力によって、状況が進展する。", "ワンマンな人に振り回されたり、派手な行動が空回りしたりする。"],
    "coin0": ["金貨エース", "大きな宝物となるような、ステキなものが手に入る。", "大金や宝物など、大事なものを失ってしまう。"],
    "coin1": ["金貨2", "レジャーなど軽いノリで取り組める、楽しい出来事がある。", "意味のない遊びに没頭して、時間を無駄にしてしまう。"],
    "coin2": ["金貨3", "仕事や勉強に真面目に取り組み、存分に手腕を発揮できる。", "努力をするのが面倒で、今の自分から抜け出せない。"],
    "coin3": ["金貨4", "物やお金への執着心が強くなって、ケチになる。", "強欲になり、いろいろなものが欲しくなって不満が募る。"],
    "coin4": ["金貨5", "財布の中も心の中も虚しくて、まわりにすき間風が吹きすさぶ。", "物事に予想外の動きがあり、先の見通しが立たなくなる。"],
    "coin5": ["金貨6", "困っている人に親切にしたり、親切にされたりする。", "人から援助を断られたり、自分が他人に出し惜しみをする。"],
    "coin6": ["金貨7", "物事がゆっくりと成長しているということを、実感できる。", "物事の進展に待ちくたびれて、投げやりになってしまう。"],
    "coin7": ["金貨8", "自分に与えられたノルマを、コツコツと地道にこなせる。", "実力がないのに過信をして、虚栄を張ったり手を抜いてしまう。"],
    "coin8": ["金貨9", "愛されていることを実感する。男性なら若く美しい女性と縁がある。", "計算高さから女性を武器にしたり、武器にされたりする。"],
    "coin9": ["金貨10", "家族と過ごすような、温かくリラックスできる時間を持てる。", "気が抜けてルーズになり、ゴロゴロと自堕落に過ごしてしまう。"],
    "coin10": ["金貨ペイジ", "地道に仕事や勉強に励むことができる。お金に関するよい話が入る。", "怠惰になりやるべきことをサボる。お金に関する悪い知らせが入る。"],
    "coin11": ["金貨ナイト", "少ない動きの中でも辛抱強く、やるべきことをこなせる。", "新鮮味がなく、マンネリ感の強い時間をすごすことになる。"],
    "coin12": ["金貨クイーン", "経済観念の高い堅実な女性と縁を持てたり、自分が堅実になる。", "動きがなく、退屈な時間を過ごすことになる。浪費する傾向もある。"],
    "coin13": ["金貨キング", "経済面が安定したり、地位の高い男性とよい縁ができる。", "強欲になって守銭奴的な行動を取るか、強欲な人に悩まされる。"],
    "sword0": ["剣エース", "目的を達成して勝利できるけれど、少々強引な勝ち方になる。", "人に暴力的で残忍な行為に遭わせたり、自分が遭ったりする。"],
    "sword1": ["剣2", "友達と仲よくできたり何かを両立したりと、バランスが取れる。", "優柔不断になり、軽いノリで誠意のない行動を取る。"],
    "sword2": ["剣3", "涙を流すほどの、悲しさを感じる出来事が起こる。", "気持ちが混乱して、現状に耐えられないと感じてしまう。"],
    "sword3": ["剣4", "状況の動きがなくなり、静かに休息することができる。", "休息していた状況から、ゆっくりと静かに活動を始める。"],
    "sword4": ["剣5", "人を打ち負かすことができるけれど、残酷なやり方になる。", "残虐な手段での敗北に遭い、屈辱感を味わってしまう。"],
    "sword5": ["剣6", "手助けしてくれる人と手を取り、よい方向へ進むことができる。", "思う方向へ進めずに、行き詰まり感を味わってしまう。"],
    "sword6": ["剣7", "目標を達成できるけれど、ずるがしこいやり方になる。", "意外性のあるよいアドバイスを受けて、状況に希望を見出せる。"],
    "sword7": ["剣8", "自由が利かず、身動きが取れない状態に陥ってしまう。", "予測できない問題や困難、障害に巻き込まれてしまう。"],
    "sword8": ["剣9", "人生を変えるような、深い悲しみを味わってしまう。", "中傷やゴシップを受けて、恥ずかしい思いをしてしまう。"],
    "sword9": ["剣10", "何かが破滅するなど、物事が望まない形で終了する。", "最悪だと思っていた状況が一時的に好転して、希望を感じる。"],
    "sword10": ["剣ペイジ", "警戒心を持ち、用心深く振る舞う。よい知らせが届く。", "スパイ行為をしたりされたりする。嫌な気分になる知らせが届く。"],
    "sword11": ["剣ナイト", "敵に向かって突き進んでいき、堂々と戦うことができる。", "鋭い攻撃力で人を打ちのめしたり、打ちのめされたりする。"],
    "sword12": ["剣クイーン", "クールで冷淡な女性と縁があるか、自分自身が周囲に心を開けない。", "意地悪で批判的な女性に縁があるか、自分がそんな女性になる。"],
    "sword13": ["剣キング", "知性で指導者的立場を取ったり、そうした男性と関わったりする。", "野蛮で冷酷な態度を取ったり取られたりする、不穏な状況。"],
    "cup0": ["聖杯エース", "心から湧きあがる豊かな愛情や、深い幸福感を実感できる。", "愛情に関して切ない出来事があり、心を痛めてしまう。"],
    "cup1": ["聖杯2", "ドキドキするような、恋の甘いロマンスが訪れる。", "好きな異性や友達との関係が悪化して、距離が離れてしまう。"],
    "cup2": ["聖杯3", "日常を忘れて、無邪気で楽しい時間を持つことができる。", "快楽ばかりを追求して、そのツケを払うことになる。"],
    "cup3": ["聖杯4", "贅沢な状況に慣れてしまい、何をしても楽しさを感じない。", "全く新しい展開が訪れて、生活に新鮮さを感じるようになる。"],
    "cup4": ["聖杯5", "何か大事なものを半分以上失って、落胆してしまう。", "失望の中にいても希望を発見して、未来が明るく見えて来る。"],
    "cup5": ["聖杯6", "過去の思い出に浸ったり、過去の出来事が好影響を呼び込む。", "過去への執着を断ち切り、気持ちを未来に向けることができる。"],
    "cup6": ["聖杯7", "あれも欲しいこれも欲しいと空想が広がり、決断できない。", "現実的な思考ができて、的確な決断を下すことができる。"],
    "cup7": ["聖杯8", "今まで大事にしていた物事が、無価値に感じてしまう。", "祝杯が振る舞われるような、大きな喜び事が生じる。"],
    "cup8": ["聖杯9", "臨時収入があるなど幸運な出来事に、ホクホク気分になる。", "贅沢を追い求めて、暴飲暴食や買い物が止まらなくなる。"],
    "cup9": ["聖杯10", "家族や仲間と愛情を感じ合い、平和で幸福な時間を過ごせる。", "家族など親しい人と心が通い合わず、孤独を感じてしまう。"],
    "cup10": ["聖杯ペイジ", "幼さのある人物に甘えられたり、自分が誰かに甘えたりする。", "ベッタリ甘えたり甘えられたりする。愛情に関する悪い話が届く。"],
    "cup11": ["聖杯ナイト", "愛情を持つロマンチストな人物が、自分に接近して来る。", "策略家や詐欺師など嘘つきへと変化。愛する人が離れることも。"],
    "cup12": ["聖杯クイーン", "献身的で優しい女性と縁ができたり、自分の魅力が高まる。", "感情的な女性に困らされたり、自分がワガママで人を困らせる。"],
    "cup13": ["聖杯キング", "親切で包容力のある人物と縁があり、好影響を与えられる。", "不正と悪事を行う人物と関わったり、自分が不正を行ったりする。"],
  };

  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      if (!router.query.card) {
        router.push("/");
        return;
      }
      const keys = Object.keys(sizes).map(e => e + "-upright").concat(Object.keys(sizes).map(e => e + "-reversed"));
      if (!keys.includes(router.query.card as string)) {
        router.push("/");
        return;
      }
      const [name, position] = (router.query.card as string).split("-");
      setState({name, position});
    }
  }, [router]);
  return (
    <div className="container">
      {
        state.name && (
          <div className="text-center">
            <p className="fw-bold">占い結果</p>
            <Image style={{transform: `rotate(${state.position === "upright" ? "0" : "180"}deg)`}} src={"/" + state.name + ".webp"}
              width={sizes[state.name as keyof typeof sizes][0] / 2}
              height={sizes[state.name as keyof typeof sizes][1] / 2} />
            <p className="fw-bold">カードの名称</p>
            <p>{state.position === "upright" ? "正位置" : "逆位置"}の{results[state.name as keyof typeof results][0]}</p>
            <p className="fw-bold">意味</p>
            <p>
              {results[state.name as keyof typeof results][state.position === "upright" ? 1 : 2]}
            </p>
            <p>
              引用元: <a href="https://www.c-c-j.com/course/divination/tarot-reading/column/column01/">タロットカードの意味や種類を解説！初心者おすすめの占う方法もご紹介｜資格のキャリカレ</a>
            </p>
            <button className="btn btn-dark" onClick={() => router.push("/")}>もう一度占う</button>
          </div>
        )
      }
    </div>
  )
}

export default Result