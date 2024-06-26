import { Children, useEffect, useState } from "react";
import PropTypes from 'prop-types';
export default function Carousel({Intervalms=3000,ratio=3/1,ImgUrls=[],Title,Description,navText,Position="top",TitlePosition="left",onNav,blockbg=true,children}) {
    const [newsCounter, setnewsCounter] = useState(0)
    const TextPositionMap = {
        left:'text-start self-start',
        mid:'text-center self-center',
        right:'text-end self-end'
    }
    const PositionMap = {
        top:'flex-col h-full justify-between',
        mid:'flex-col h-full justify-center',
        bottom:'flex-col-reverse h-full'
    }
    useEffect(() => {
        const latestActivitiesInterval = setInterval(() => {
            setnewsCounter((newsCounter+1)%ImgUrls.length)
            console.log(newsCounter,ImgUrls.length,(newsCounter+1)%ImgUrls.length)
        }, Intervalms);
        return () =>{clearInterval(latestActivitiesInterval)};
    
    }, [ImgUrls,newsCounter])
    useEffect(() => {
      console.log("Num of child:",Children.count(),Children)
    

    }, [])
    
  return (
    <div className="parent relative ">
        
        <div className=" flex flex-row justify-center z-0">
            <div className="w-full inline-flex flex-row overflow-scroll ">

                <div className="w-full" style={{aspectRatio:ratio}}>
                    {ImgUrls.length>0&&(
                        ImgUrls.length>0&&(
                            ImgUrls.map((url,i)=>{
                                return (
                                    <>
                                        <img key={`${i}-prev`} src={url} className={`w-full object-cover slider slide-out  `} hidden={newsCounter!==(i-1<0?ImgUrls.length-1:i-1)}  style={{aspectRatio:ratio}} 
                                        />
                                        <img key={`${i}-current`} src={url} className={`w-full object-cover ${ImgUrls.length>1?"slider":''} slide-in  `} hidden={newsCounter!==i}  style={{aspectRatio:ratio}} 
                                        />
                                    </>
                                    
                                )
                            })
                        )
                    )}
                </div>
                
                
                {
                    children?(
                        <div className="w-full h-full overlaytxt absolute top-0 ">{children}</div>
                    ):(
                        Title!==undefined&&(
                        <div className="w-full h-full overlaytxt absolute top-0  ">
                            {
                                
                                <div className={`flex ${PositionMap[Position]}`}>
                                    <div className={`${TextPositionMap[TitlePosition]?TextPositionMap[TitlePosition]:'text-start self-start'} m-5 w-8/12 bg-opacity-50 ${blockbg?"bg-gray-700":""} p-4 rounded-lg drop-shadow-md flex flex-col `}>
                                        <div className="2xl:text-5xl md:text-3xl text-xl text-white mb-4">
                                            {Title}
                                        </div>
                                        <pre className="w-full whitespace-normal text-white 2xl:text-lg text-sm">
                                            {Description}
                                        </pre>
                                        <div className="text-end p-10">
                                            <button className={`text-lg rounded-md p-2 bg-transparent font-bold text-gray-200 hover:text-white bg-opacity-20 bg-gray-400 ${TextPositionMap[TitlePosition]?TextPositionMap[TitlePosition]:'text-start self-start'}`} onClick={()=>{onNav()}}>
                                                <div className="">{navText}</div>
                                            </button>
                                        </div>
                                    </div>
                                    {/* <div className="text-end p-10">
                                        <button className="text-lg rounded-md p-2 bg-transparent font-bold text-gray-500 hover:text-white bg-opacity-20 bg-gray-400">
                                            {navText}
                                        </button>
                                    </div> */}
                                    
                                </div>
                                
                            }
                            
                            
                        </div>
                    )
                    )
                }
                
                
            </div>
        </div>
    </div>
  )
}

Carousel.propTypes = {
    Intervalms: PropTypes.number,
    ratio: PropTypes.number,
    ImgUrls: PropTypes.array,
    Title:PropTypes.string,
    TitlePosition:PropTypes.string,
    Position:PropTypes.string,
    Description:PropTypes.string,
    navText:PropTypes.string,
    link:PropTypes.string,
    onNav:PropTypes.func,
    blockbg:PropTypes.bool,
    children:PropTypes.object,
    
}

// export default Carousel
// export {Carousel}