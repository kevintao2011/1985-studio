

export default function Footer() {
  return (
    <div className="bg-theme-gray text-white">
        <div className="flex flex-row justify-between p-5">
            <div className="flex flex-row">
                <img 
                    src="/assets/logo/1985finalsmall.png" 
                    
                    width={150}
                    className="object-contain"
                />
                <img 
                    src="/assets/logo/garment_logo.png" 
                    width={150}
                    className="object-contain"
                />
            </div>

            <div className="">
                <div className="flex flex-col pr-5">
                    <div className="self-start">
                        <a href="https://api.whatsapp.com/send/?phone=%2B85290474513&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">Whatsapp +852 9047 4513</a>
                    </div>
                    <div className="self-start">
                        <a href="https://www.instagram.com/1985studio_/" target="_blank" rel="noreferrer">instagram (1985 Studio) </a>
                    </div>
                    <div className="self-start">
                        <a href="https://www.instagram.com/1985.garment.factory/" target="_blank" rel="noreferrer">instagram (1985 Garment Factory  ) </a>
                    </div>
                    <div className="self-start">Hotline 3580 7422</div>
                </div>
            </div>
        </div>
    </div>
  )
}
