import EventDetailIcon from '@rsuite/icons/EventDetail';
import MediaIcon from '@rsuite/icons/Media';
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
export default function FeatureHighLightsGrid({features=Features,title="特色 Features"}) {
    
  return (
    <div className=" bg-light-blue flex flex-col items-center shadow ">
        {/* min-h-[400px] */}
        <div className="p-5 flex flex-col gap-5 max-w-[2048px] "> 
        <div className="text-xl font-bold text-start">{title}</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 ">
            {
            features.map(feature=>{
                return(
                <div key={`feature-${feature.title}`} className="bg-white p-4 flex flex-col gap-2 rounded-md">
                    <div className="">
                    {feature.svg}
                    </div> 
                    <div className="font-bold">{feature.title}</div>
                    <div className=""> {feature.description} </div>
                </div>
            )})
            }
        </div>
        </div>
    </div>
  )
}
