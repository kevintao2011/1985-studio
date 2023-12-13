import { useState } from "react"
import { Carousel } from 'rsuite';

function Home() {
    const [ImgUrls, setImgUrls] = useState(
        [
            "https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=1",
            "/assets/5F/mic.jpg"
        ]
    )
    const [activeIndex, setActiveIndex] = useState(2);
    return (
        <div>
            <div className=""></div>
            <div className="">
                <Carousel
                    className="custom-slider"
                    activeIndex={activeIndex}
                    onSelect={index => {
                        setActiveIndex(index);
                    }}
                >
                        {
                            ImgUrls.map(url=>{
                                return <img key={url} src={url}height="250" />
                            })
                        }

                </Carousel>
                {/* <Carousel
                    className="custom-slider"
                    activeIndex={activeIndex}
                    onSelect={index => {
                        setActiveIndex(index);
                    }}
                    >
                    <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=1" height="250" />
                    <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2" height="250" />
                    <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3" height="250" />
                    <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4" height="250" />
                    <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5" height="250" />
                </Carousel> */}
                
            </div>
        </div>
    )
}

export default Home