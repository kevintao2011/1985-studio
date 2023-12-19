
import ProductCard from "./ProductCard"
const sampleArray = [
    {label:"座檯咪",url:"/assets/5F/table_mic.jpg ",chinese_description:"座檯咪,可在"},
    {label:"手持無線咪",url:"/assets/5F/table_mic.jpg ",chinese_description:"座檯咪,可在"},
    {label:"混音器",url:"/assets/5F/mixer.jpg ",chinese_description:"this is a photo"},
    {label:"鏡牆",url:"/assets/5F/mirror.jpg ",chinese_description:"this is a photo"},
    {label:"投映機",url:"/assets/5F/projector.jpg ",chinese_description:"this is a photo"},
    {label:"電視",url:"/assets/5F/projector.jpg ",chinese_description:"this is a photo"},
    {label:"雪櫃",url:"/assets/5F/projector.jpg ",chinese_description:"this is a photo"},
    {label:"長檯/凳",url:"/assets/5F/table.jpg ",chinese_description:"this is a photo"},
    {label:"獨立廁所",url:"/assets/5F/table.jpg ",chinese_description:"this is a photo"},
    // {label:"飲水機",url:"/assets/5F/water_machine.jpg ",chinese_description:"this is a photo"},
]

export default function ProductCardsRow({Products=sampleArray,title}) {
  return (
    <div className="w-full flex flex-col gap-2 p-3">
        {
            title&&(
                <div className="text-start text-lg font-bold">{title}</div>
            )
        }
        
        <div className="flex flex-row w-full  overflow-scroll gap-3 bg-transparent ">
            {
                Products.map((product,i)=>{
                    return(
                        <ProductCard key={`product-${i}`} imgurl={product.url} label={product.label} description={product.chinese_description} />
                    )
                })
            }
        </div>
    </div>
    
  )
}
