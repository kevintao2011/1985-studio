import Gallery from "../components/Gallery";


const WearArray = [
    {label:"9 Wear",url:"/assets/Garment/9Wear/9wear.png ",chinese_description:`全新9Wear 系列
    老細：「下個月出T-Shirt Product，我諗左Logo Tee 喇，你同我諗多樣」
    小編：「err…咁出隻城大學生會新色Tee啦」
    老細：「有冇啲咩新意呀，請你翻嚟係要Idea唔係要 Ikea 賣嚟賣去都係果啲野」（老細真係好Fun)
    小編：「咁….我想出件Tee可以著翻工，簡簡單單，咁老細你翻工都有衫著，放工拍拖又啱，星期六日落街買餸又可以著。」
    老細：「幾好呢個Idea，咁你想要幾簡單，下個月要出喎，捉埋Designer 入嚟講！」
    小編：「唔洗叫Designer幫手喇。」
    （然後小編拎左部手機開左U記件淨色Tee俾老細睇…)
    老細：「…」
    ‼️就係咁今個暑假 9Wear Tee系列正式推出‼️
    ⚠️呢個系列好呢目標好簡單就係:
    無論約朋友食飯睇戲返工溝女睇醫生買餸考試上堂 全部都啱著！唔洗再諗著咩 ～
    👦🏻男仔出面加件恤衫
    👧🏻女仔著條短牛仔褲或者當oversized就Fit晒`}]
const CapArray = [
{label:"9 Wear",url:"/assets/Garment/Cap/CityCap.png ",
chinese_description:`全新9Wear 系列

老細：「下個月出T-Shirt Product，我諗左Logo Tee 喇，你同我諗多樣」

小編：「err…咁出隻城大學生會新色Tee啦」

老細：「有冇啲咩新意呀，請你翻嚟係要Idea唔係要 Ikea 賣嚟賣去都係果啲野」（老細真係好Fun)

小編：「咁….我想出件Tee可以著翻工，簡簡單單，咁老細你翻工都有衫著，放工拍拖又啱，星期六日落街買餸又可以著。」

老細：「幾好呢個Idea，咁你想要幾簡單，下個月要出喎，捉埋Designer 入嚟講！」

小編：「唔洗叫Designer幫手喇。」

（然後小編拎左部手機開左U記件淨色Tee俾老細睇…)

老細：「…」

‼️就係咁今個暑假 9Wear Tee系列正式推出‼️

⚠️呢個系列好呢目標好簡單就係:
無論約朋友食飯睇戲返工溝女睇醫生買餸考試上堂 全部都啱著！唔洗再諗著咩 ～

👦🏻男仔出面加件恤衫
👧🏻女仔著條短牛仔褲或者當oversized就Fit晒`}]
const CustomArray = [
    {
        label:"9 Wear",
        url:"/assets/Garment/CustomMade/College.png ",
        chinese_description:
        `1985.garment.factory的大頭貼照【大學Soc Tee聯Soc優惠 】
        對Freshmen嚟講 - Soc Tee係入大學第一份紀念品 🎁
        對莊員嚟講- Soc Tee係一件充滿汗水同埋淚水嘅青春回憶 🫂
        對老鬼嚟講- Soc Tee係點都要M翻件翻屋企當睡衣 🛌
        為咗一件衫，你會去到幾盡💥？
        @cityusu 城大學生會轄下品牌 1985 Garment Factory 現推出Society Tee訂購服務。其他U嘅學生組織只要連同城大學生會轄下組織介紹一齊訂衫都可以享有優惠，搵埋一班老友三五成群仲有優惠添 ！👥👥
        // Wu~~連城一線🌃~聯Soc訂購優惠:
        聯合2️⃣支Soc：全單減＄400
        聯合3️⃣支Soc：全單減＄600 + 免費送貨服務🚛
        聯合4️⃣支Soc：全單減＄800 + 免費送貨服務🚛`},
    {
        label:"9 Wear",
        url:"/assets/Garment/CustomMade/SocTee.png ",
        chinese_description:
        `1985.garment.factory的大頭貼照
        【🌚中學班衫/社衫/學生會衫聯合優惠🌝】
        一年容易又開學！ 👀
        想訂班衫又唔想比人鑿？
        為咗各位莘莘學子唔洗食屎💩，@cityusu 城大學生會轄下品牌 1985 Garment Factory 現推出中學班衫/社衫/學生會衫訂購服務。搵埋一班老友三五成群仲有優惠添 ！👥👥
        // 聯班訂購優惠🕺🏻
        聯合2️⃣班：全單減＄100
        聯合3️⃣班：全單減＄300 + 送每班一件班主任衫 🧑🏻‍🏫+ 免費送貨服務🚛
        聯合4️⃣班：全單減＄500 + 送每班兩件班主任衫 👨🏻‍🏫👩🏻‍🏫+ 免費送貨服務🚛
        應屆畢業班全單再減$100 (可與聯合優惠同時使用)
        // 聯社優惠詳情💃🏻
        聯合2️⃣社：全單減 $ 400
        聯合3️⃣社：全單減 $ 600 + 免費送貨服務🚛
        聯合4️⃣社：全單減＄800 + 免費送貨服務🚛`
    }
]

export default function Garment() {
  return (
    <div className="w-full flex flex-row justify-center p-10">
        <div className="flex flex-col gap-10 max-w-[1600px]">
            <Gallery labelImageUrlArray={WearArray} Title=""/>
            <Gallery labelImageUrlArray={CapArray} Title="" reversed={true} photoRatio={1/1}/>
            <Gallery labelImageUrlArray={CustomArray} Title="自訂款式" reversed={false} photoRatio={1/1}/>
            <div className="flex flex-row justify-end " >
                <a href="https://services.cityusu.hk/" target="_blank" rel="noopener noreferrer" className="bg-theme-gray rounded-md text-white text-lg  p-1"> 立即購買</a>
            </div>
        </div>
    </div>
    
  )
}
