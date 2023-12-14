import { Outlet } from "react-router-dom";
import { Dropdown } from "rsuite";

const NavTitles = ["1985 Studio","1985 Garment Factory","關於我們 About Us","如何購買 How to Buy"]
const NavMap = {

}
function Nav() {
  return (
    <div className="">
        <div className="bg-theme-gray w-full text-white">
            <div className="flex flex-row justify-between py-2 px-5">
                <div className="heading">
                    <img 
                        src="/assets/logo/1985finalsmall.png" 
                        
                        width={150}
                    />
                </div>
                <div className="trailing flex flex-row justify-center items-center pr-5 gap-4">
                    {/* <div className="border ">
                        <div className="">
                            <Dropdown title="No caret" noCaret size="md" style={{color:"white"}}>
                                <Dropdown.Item>New File</Dropdown.Item>
                                <Dropdown.Item>New File with Current Profile</Dropdown.Item>
                                <Dropdown.Item>Download As...</Dropdown.Item>
                                <Dropdown.Item>Export PDF</Dropdown.Item>
                                <Dropdown.Item>Export HTML</Dropdown.Item>
                                <Dropdown.Item>Settings</Dropdown.Item>
                                <Dropdown.Item>About</Dropdown.Item>
                            </Dropdown>
                        </div>
                    </div> */}
                    {
                        NavTitles.map((title,i)=>{
                            return (
                                <div className="h-full " key={`nav-${i}`}>
                                    <button className="h-full py-2 border-l-2 border-l-white  " >
                                        <div className="mx-2 font-bold">{title}</div>
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        
        <Outlet/>
    </div>
    
  )
}

export default Nav