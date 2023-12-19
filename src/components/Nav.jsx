import { Outlet, useNavigate } from "react-router-dom";

const NavMap = [
    {label:"1985 Studio",link:"1985-Studio"},
    {label:"1985 Garment Factory",link:"1985-Garment-Factory"},
    {label:"關於我們 About Us",link:"about-us"},
    {label:"如何購買 How to Buy",link:"how-to-buy"},
]
function Nav() {
    const navigate = useNavigate()
  return (
    <div className="">
        <div className="bg-theme-gray w-full text-white">
            <div className="flex flex-row justify-between py-2 px-5">
                <button onClick={()=>{navigate('/')}}>
                    <div className="heading">
                        <img 
                            src="/assets/logo/1985finalsmall.png" 
                            
                            width={150}
                        />
                    </div>
                </button>
                
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
            </div>
        </div>
        
        <Outlet/>
    </div>
    
  )
}

export default Nav