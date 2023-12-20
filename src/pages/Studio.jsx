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
    title:"多功能活動空間",
    description:"分別設有2400尺、700尺及、300尺全層場地"
  },
  {svg:<EventDetailIcon style={{ fontSize: "5rem"}}/>,title:"專業影音系統",description:"設有投影機、大電視、專業音響系統，可自備電腦連接"},
  {svg:<MediaIcon style={{ fontSize: "5rem"
}}/>,title:"戶外空間",description:"2400尺場地配有露台休憩空間"},
  {svg:<EventDetailIcon style={{ fontSize: "5rem"}}/>,title:"24小時開放",description:"全年無休，可連續預訂數天"},
]

const EquipArray = [
  {label:"座檯咪x2",url:"/assets/5F/table_mic.jpg ",chinese_description:"座檯咪,可在"},
  {label:"手持無線咪x6",url:"/assets/5F/mic.jpg ",chinese_description:"手持無線咪,可同時使用"},
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
  {label:"Conday",url:"/assets/5F/5FCover.jpg ",chinese_description:"二十四小時開放，可容納超過50名觀眾"},
  {label:"自修室",url:"/assets/5F/self_study.jpg ",chinese_description:"設有多個充電位置，自然光十分充足"},
  {label:"香港城市大學學生會音樂學會歌唱比賽",url:"/assets/5F/singcon.jpg ",chinese_description:"專業音響設備，以及穩定Wi-Fi直播比賽  "},
  {label:"Scrabble 比賽",url:"/assets/5F/scrabble.jpg ",chinese_description:"全層單位可提供高私隱及靈靜環境進行比賽"},
]

const AcitvitySuggestions = [
  {
    svg:<MediaIcon style={{ fontSize: "5rem"
}}/>,
    title:"中小型講座/商務會議 Business Meeting/Seminar",
    description:"最多可容納80人，落地大玻璃，自然光充足 Capable of accommodating up to 80 people, the venue features large floor-to-ceiling windows that allow ample natural light"
  },
  {
    svg:<EventDetailIcon style={{ fontSize: "5rem"}}/>,
    title:"派對/ 小型音樂會/演出",
    description:"配有專業音響設備，另有譜架、咪架等設備免費借用 Equipped with professional sound systems and complimentary equipment such as music stands and microphone stands"
  },
  {
    svg:<MediaIcon style={{ fontSize: "5rem"}}/>,
    title:"培訓/團隊建設活動",
    description:"配有不同專業設備，及室內外場地 Equipped with various professional facilities and both indoor and outdoor spaces"
  },
  {
    svg:<EventDetailIcon style={{ fontSize: "5rem"}}/>,
    title:"跳舞活動/話劇排練",
    description:"配九米長鏡牆及專業音響，適合多人訓練 Featuring a 9m-long mirrored wall and professional sound systems, suitable for group training."
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
          Title={"場地介紹"}
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
