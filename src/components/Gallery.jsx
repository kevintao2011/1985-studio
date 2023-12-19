import PropTypes from 'prop-types';
import { useState } from 'react';

const sampleArray = [
    {label:"座檯咪x2",url:"/assets/5F/table_mic.jpg ",chinese_description:"座檯咪,可在"},
    {label:"手持無線咪x6",url:"/assets/5F/table_mic.jpg ",chinese_description:"手持無線咪,可同時使用"},
    {label:"混音器x1",url:"/assets/5F/mixer.jpg ",chinese_description:"混音器連接音響系統與投影機,可連接電腦/電話輸出"},
    {label:"鏡牆",url:"/assets/5F/mirror.jpg ",chinese_description:"this is a photo"},
    {label:"投映機",url:"/assets/5F/projector.jpg ",chinese_description:"連接音響系統,可連接電腦/電話輸出"},
    {label:"電視",url:"/assets/5F/projector.jpg ",chinese_description:"this is a photo"},
    {label:"雪櫃",url:"/assets/5F/projector.jpg ",chinese_description:"內有飲品提供(需額外收費)"},
    {label:"長檯/凳",url:"/assets/5F/table.jpg ",chinese_description:"this is a photo"},
    {label:"獨立廁所",url:"/assets/5F/table.jpg ",chinese_description:"this is a photo"},
    // {label:"飲水機",url:"/assets/5F/water_machine.jpg ",chinese_description:"this is a photo"},
]
export default function Gallery({labelImageUrlArray=sampleArray,Title="Title",reversed=false,photoRatio=4/3}) {
    
    const [ActivePhotoIndex, setActivePhotoIndex] = useState(0)
    return (
        <div className={`w-full flex ${reversed?"flex-row-reverse":"flex-row"}  bg-transparent`}>
            <div className="img-container w-8/12 max-w-[1200px]" >
                <div className="relative w-full ">
                    <div className="flex flex-row justify-center items-center">
                        <img  src={labelImageUrlArray[ActivePhotoIndex].url} alt="" className='object-cover' style={{aspectRatio:photoRatio}}/>
                    </div>
                    {
                        labelImageUrlArray.length>1&&(
                            <div className="absolute w-full bottom-2 ">
                                <div className="flex flex-row justify-center">
                                    <div className="flex flex-row gap-1 justify-center overflow-scroll  rounded-md ">
                                    {
                                        labelImageUrlArray.map((equip,i)=>{
                                            return(
                                                <button  key={`equip-${i}`} onClick={()=>{setActivePhotoIndex(i)}}>
                                                    <img className=' aspect-square object-cover' width={70} src={equip.url} alt="" />
                                                </button>
                                            )
                                        })
                                    }
                                    </div>
                                </div>
                                
                            
                            </div>
                        )
                    }
                    
                </div>
                
            </div>
            
            <div className=" w-4/12 flex flex-col p-5 justify-center items-center">
                <div className="flex flex-col ">
                    <div className="text-lg font-bold text-start mb-2">{Title}</div>
                    <div className="text-start font-bold ">{labelImageUrlArray[ActivePhotoIndex].label}</div>
                    <div className="text-start">{labelImageUrlArray[ActivePhotoIndex].chinese_description}</div>
                </div>
            </div>
        </div>
    )
}

Gallery.propTypes = {
    labelImageUrlArray:PropTypes.array,
    Title:PropTypes.string,
    reversed:PropTypes.bool,
    photoRatio:PropTypes.number,
}
