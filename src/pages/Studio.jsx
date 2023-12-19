import { useState } from "react";
import Carousel from "../components/Carousel";

import Gallery from "../components/Gallery";
import FeatureHighLightsGrid from "../components/FeatureHighLightsGrid";
import EventDetailIcon from '@rsuite/icons/EventDetail';
import MediaIcon from '@rsuite/icons/Media';
import ProductCardsRow from "../components/ProductCardsRow";

const Features = [
  {
    svg:<MediaIcon style={{ fontSize: "5rem"
}}/>,
    title:"場地大小",
    description:"面積達2400平方呎,適合舉辦各種中小型活動。採取自然光 "
  },
  {svg:<EventDetailIcon style={{ fontSize: "5rem"}}/>,title:"齊全影音系統",description:"設有投影機及音響系統，適合用作會議"},
  {svg:<MediaIcon style={{ fontSize: "5rem"
}}/>,title:"設有戶外休憩空間",description:"設有露臺休憩空間,可以在活動期間"},
  {svg:<EventDetailIcon style={{ fontSize: "5rem"}}/>,title:"24小時開放",description:"24小時可供租用,更設有FoodPanda 免運費優惠"},
]

const EquipArray = [
  {label:"座檯咪x2",url:"/assets/5F/table_mic.jpg ",chinese_description:"座檯咪,可在"},
  {label:"手持無線咪x6",url:"/assets/5F/table_mic.jpg ",chinese_description:"手持無線咪,可同時使用"},
  {label:"混音器x1",url:"/assets/5F/mixer.jpg ",chinese_description:"混音器連接音響系統與投影機,可連接電腦/電話輸出"},
  {label:"鏡牆",url:"/assets/5F/mirror.jpg ",chinese_description:"this is a photo"},
  {label:"投映機",url:"/assets/5F/projector.jpg ",chinese_description:"連接音響系統,可連接電腦/電話輸出"},
  {label:"電視",url:"/assets/5F/projector.jpg ",chinese_description:"this is a photo"},
  {label:"雪櫃",url:"/assets/5F/fridge.jpg ",chinese_description:"內有飲品提供(需額外收費)"},
  {label:"長檯/凳",url:"/assets/5F/table.jpg ",chinese_description:"設有長檯/凳以滿足舉辦不同活動之需要"},
  {label:"充電器",url:"/assets/5F/charge_spot.jpg ",chinese_description:"設有Charge Spot 充電站提供行動電源租借服務"},
  
]

const ActivitiesArray = [
  {label:"多謝你唱廣東歌問答比賽",url:"/assets/5F/叱吒.jpg ",chinese_description:"容納40位觀眾的拍攝節目"},
  {label:"Conday",url:"/assets/5F/5FCover.jpg ",chinese_description:"容納40位觀眾以及同時使用"},
  {label:"自修室",url:"/assets/5F/self_study.jpg ",chinese_description:"手持無線咪,可同時使用"},
  {label:"香港城市大學學生會音樂學會歌唱比賽",url:"/assets/5F/singcon.jpg ",chinese_description:"手持無線咪,可同時使用"},
  {label:"Scrabble 比賽",url:"/assets/5F/scrabble.jpg ",chinese_description:"手持無線咪,可同時使用"},
]

const AcitvitySuggestions = [
  {
    svg:<MediaIcon style={{ fontSize: "5rem"
}}/>,
    title:"中小型講座",
    description:"面積達2400平方呎,適合舉辦各種中小型活動。採取自然光 "
  },
  {
    svg:<EventDetailIcon style={{ fontSize: "5rem"}}/>,
    title:"小型比賽/考試",
    description:"設有投影機及音響系統，適合用作會議"
  },
  {
    svg:<MediaIcon style={{ fontSize: "5rem"}}/>,
    title:"團體活動",
    description:"設有露臺休憩空間,可以在活動期間"
  },
  {
    svg:<EventDetailIcon style={{ fontSize: "5rem"}}/>,
    title:"24小時開放",
    description:"24小時可供租用,更設有FoodPanda 免運費優惠"
  },
]

export default function Studio() {
      // eslint-disable-next-line no-unused-vars
  const [ProductImgUrls, setProductImgUrls] = useState(
      [

          "/assets/5F/5FCover.jpg",
          // "/assets/5F/night.jpg",
          // "/assets/5F/projector.jpg",
      ]
  )
  return (
    <div className="w-screen flex flex-col">
      <div className="">
        <Carousel
          Title={"5樓場地"}
          Position="mid"
          TitlePosition="mid"
          blockbg={false}
          ImgUrls={[ProductImgUrls]}
        >
          
        </Carousel>
      </div>
        
      <div className="flex flex-row justify-center bg-apple-gray ">
            <div className="w-full">
                {/* <Gallery Title="設備 Equipment"/> */}
                <ProductCardsRow title={"場地設施 Equipment"} Products={EquipArray }/>
            </div>
          </div>
          <div className="">
            <FeatureHighLightsGrid title="特色 Features" features={Features}/>
          </div>
          <div className="">
            <FeatureHighLightsGrid title="合適活動類型" features={AcitvitySuggestions}/>
          </div>
          <div className="flex flex-row justify-center ">
            <div className=" max-w-[2048px] p-10" >
              <Gallery Title="過往活動例子 Past Events" labelImageUrlArray={ActivitiesArray}/>
            </div>
          </div>
      </div>
    

  )
}
