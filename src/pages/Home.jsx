import { useState } from "react"
import Carousel from "../components/Carousel"
import Nav from "../components/Nav"

function Home() {
    useState
    const [VenueImgUrls, setVenueImgUrls] = useState(
        [
            // "https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=1",
            "/assets/5F/mic.jpg",
            // "/assets/5F/mirror.jpg",
            "/assets/5F/mixer.jpg",
            // "/assets/5F/night.jpg",
            // "/assets/5F/projector.jpg",
        ]
    )

    const [ProductImgUrls, setProductImgUrls] = useState(
        [

            "/assets/5F/mirror.jpg",
            // "/assets/5F/night.jpg",
            // "/assets/5F/projector.jpg",
        ]
    )

    const [NewsImgUrls, setNewsImgUrls] = useState(
        [

            "/assets/LatestNews/Order.png",
            "/assets/LatestNews/YuenLong.png",
            
        ]
    )

    return (
        <div className="h-full flex flex-col relative">
            <div className="absolute bottom-10 right-10 z-1">
                <div className="text bg-orange-500" >Whatsapp</div>
            </div>
            <div className="flex flex-col z-0">
                
                <div className="w-1/2 self-center">
                    <Carousel 
                        ImgUrls={NewsImgUrls} 
                        Intervalms={5000} 
                        ratio={3/1} 
                        Description={
                            `事緣有一位出國深造緊嘅朋友仔寫信同我地講✉️，佢望住一張朋友大合照嘅相就突然話諗到整件Hoodie上面寫住「吾城世一」🤔小編諗佢真係好掛住City嘅人同埋事🥲為左完佢心願，1985 Garment Factory全新推出 「吾城世一」 Hoodie。
                            `
                        }
                        navText={"查看更多 View Details >>"}
                        TitlePosition="mid"
                        Position="top"
                
                    >
                        <p>Hi</p>
                    </Carousel>
                </div>
                
                <Carousel 
                    ImgUrls={VenueImgUrls} 
                    Intervalms={5000} 
                    ratio={3/1} 
                    Title={"場地租用 Venue Rental"} 
                    Description={
                        `\t位於深水埗全新翻新商廈，多用途活動場地，可舉辦商務會議、講座、工作坊，興趣班及休閒活動，並配有獨立廁所，24小時營業。我們的活動室場地用途靈活廣泛，符合客戶不同需要。1985的2400尺活動空間包括350呎露台空間可供租用，場地以露營風裝飾，可供打卡，與三五知己暢談一番。地理位置十分方便，長沙灣站步行大約6分鐘，附近巴士站直通港九新界。\n \t Discover our studio in a newly renovated commercial building in \tSham Shui Po with a versatile event space, and we operate 24/7.We would like to greatly introduce our 350 sq. ft balcony, included in the 2400 sq. ft event space and designed with camping theme, which allows people to chit chat with friends. We welcome people to take gorgeous photos with our Instagrammable settings and post to social medias as well.\tOur unique and versatile event space is suitable for various activities and purposes, as well as corporate and leisure events. Our meeting room could be divided to different sizes and rooms, which can accommodate various types of people (depending on the type of event)."\tConveniently located just a 6-minute walk from Cheung Sha Wan Station, with nearby bus stops providing direct access to anywhere you need to go.

                        `
                    }
                    navText={"查看更多 View Details >>"}
                    TitlePosition="left"
            
                >
                </Carousel>
                <Carousel 
                    ImgUrls={ProductImgUrls} 
                    Intervalms={5000} 
                    ratio={3/1} 
                    Title={"1985 Garment Factory"} 
                    Description={
                        `\t位於深水埗全新翻新商廈，多用途活動場地，可舉辦商務會議、講座、工作坊，興趣班及休閒活動，並配有獨立廁所，24小時營業。我們的活動室場地用途靈活廣泛，符合客戶不同需要。1985的2400尺活動空間包括350呎露台空間可供租用，場地以露營風裝飾，可供打卡，與三五知己暢談一番。地理位置十分方便，長沙灣站步行大約6分鐘，附近巴士站直通港九新界。\n \t Discover our studio in a newly renovated commercial building in \tSham Shui Po with a versatile event space, and we operate 24/7.We would like to greatly introduce our 350 sq. ft balcony, included in the 2400 sq. ft event space and designed with camping theme, which allows people to chit chat with friends. We welcome people to take gorgeous photos with our Instagrammable settings and post to social medias as well.\tOur unique and versatile event space is suitable for various activities and purposes, as well as corporate and leisure events. Our meeting room could be divided to different sizes and rooms, which can accommodate various types of people (depending on the type of event)."\tConveniently located just a 6-minute walk from Cheung Sha Wan Station, with nearby bus stops providing direct access to anywhere you need to go.

                        `
                    }
                    navText={"查看更多 View Details >>"}
                    TitlePosition="right"
                    Position="bottom"
            
                >
                    <p>Hi</p>
                </Carousel>
                
            </div>
        </div>
        
    )
}

export default Home