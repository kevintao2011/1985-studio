import { Outlet } from "react-router-dom";


function Nav() {
  return (
    <div className="">
        <div className="bg-theme-gray w-full text-white">
            <div className="flex flex-row justify-between">
                <div className="heading">
                    This is Heading
                </div>
                <div className="trailing">
                    This is Nav
                </div>
            </div>
        </div>
        
        <Outlet/>
    </div>
    
  )
}

export default Nav