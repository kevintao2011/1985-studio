import { Outlet } from "react-router-dom";
import { Dropdown } from "rsuite";


function Nav() {
  return (
    <div className="">
        <div className="bg-theme-gray w-full text-white">
            <div className="flex flex-row justify-between py-2 px-2">
                <div className="heading">
                    <img 
                        src="/assets/logo/1985finalsmall.png" 
                        
                        width={150}
                    />
                </div>
                <div className="trailing">
                    <div className="flex flex-row justify-center items-center">
                        <div className="">
                            <Dropdown title="No caret" noCaret size="lg" style={{color:"white"}}>
                                <Dropdown.Item>New File</Dropdown.Item>
                                <Dropdown.Item>New File with Current Profile</Dropdown.Item>
                                <Dropdown.Item>Download As...</Dropdown.Item>
                                <Dropdown.Item>Export PDF</Dropdown.Item>
                                <Dropdown.Item>Export HTML</Dropdown.Item>
                                <Dropdown.Item>Settings</Dropdown.Item>
                                <Dropdown.Item>About</Dropdown.Item>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <Outlet/>
    </div>
    
  )
}

export default Nav