import { useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { Outlet, useNavigate } from "react-router-dom";
import { Dropdown } from "rsuite";

const NavMap = [
    {label:"Home",link:"/"},
    {label:"1985 Studio",link:"1985-Studio"},
    {label:"1985 Garment Factory",link:"1985-Garment-Factory"},
    {label:"關於我們 About Us",link:"about-us"},
    // {label:"如何購買 How to Buy",link:"how-to-buy"},
]
function Nav() {
    const navigate = useNavigate()
    const [Expand, setExpand] = useState(false)
  return (
    <div className="">
        <div className="bg-theme-gray w-full text-white px-5">
            <div className="flex flex-row justify-between py-2 ">
                <button onClick={()=>{navigate('/')}}>
                    <div className="heading">
                        <img 
                            src="/assets/logo/1985finalsmall.png" 
                            
                            width={150}
                        />
                    </div>
                </button>
                <MobileView>
                    <div className="h-full flex flex-col justify-center bg-theme-gray ">
                        <div className="relative text-white flex flex-col">
                            <button className="p-1 border-white border-2 rounded-md text-lg" onClick={()=>{setExpand(prev=>!prev)}}>Menu</button>
                            <div className="relative">
                            {Expand&&(
                                <div className="absolute right-0 -mr-5 bg-theme-gray" style={{ zIndex : 2 }}>
                                    {
                                        NavMap.map((title,i)=>{
                                            return (
                                                <div className=" whitespace-nowrap " key={`nav-${i}`}>
                                                    <div className="m-1 border-white border-l-2">
                                                        <button className="w-full py-2 pl-2 my-1  border-white" onClick={()=>{navigate(title.link); setExpand(false)}}>
                                                            <div className="m-1 font-bold  text-end">{title.label}</div>
                                                        </button>
                                                    </div>
                                                    
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )}
                            </div>
                        </div>
                        
                    </div>
                    
                </MobileView>
                
                <BrowserView>
                    <div className="trailing flex flex-row justify-center items-center pr-5 gap-4">
                        
                        {
                            NavMap.map((title,i)=>{
                                return (
                                    <div className="h-full " key={`nav-${i}`}>
                                        <button className="h-full py-2 border-l-2 border-l-white" onClick={()=>{navigate(title.link)}}>
                                            <div className="mx-2 font-bold">{title.label}</div>
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </BrowserView>
                
            </div>
        </div>
        
        <Outlet/>
    </div>
    
  )
}

export default Nav