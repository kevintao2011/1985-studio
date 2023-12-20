import Carousel from "../components/Carousel";

export default function AboutUs() {
  return (
    <div className="flex flex-col">
        <Carousel ImgUrls={['assets/ContactUs.png']}>
            <div className="flex flex-col pt-10">
                <div className="text-lg font-bold opacity-40 text-white">For More Information</div>
                <div className="text-3xl font-bold text-white">Contact Us</div>
            </div>
        </Carousel>
        <div className="flex flex-row justify-center bg-apple-gray py-5">
            <div className="flex flex-col gap-5 max-w-[1600px] ">
            
                
                <div className="">
                    <div className="text-start font-bold text-xl">即時查詢 Contact</div>
                    <div className="text-start">
                    WhatsApp: 9047 4513
                    </div>
                    <div className="text-start">
                    Tel: 3580 7422
                    </div>
                </div>
                <div className="">
                    <div className="text-start font-bold text-xl">Email</div>
                    <div className="text-start">
                        1985@cityusu.hk
                    </div>
                </div>
                <div className="">
                    <div className="text-start font-bold text-xl">地址 Address</div>
                    <div className="text-start">
                    Address: 5-6/F Spark City Cheung Sha Wan, 124-126 Castle Peak Road, Cheung Sha Wan, Kowloon
                    </div>
                </div>
                <div className="flex flex-row justify-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236190.86948061694!2d113.87219538671874!3d22.335409400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340407911f1bf239%3A0xec3afd6f767db8b!2s1985%20Studio!5e0!3m2!1szh-TW!2shk!4v1702793115153!5m2!1szh-TW!2shk" width="720" height="480" style={{border:'0'}} allowfullscreen title="google map" loading="lazy"  referrerPolicy="no-referrer-when-downgrade" className="rounded-md"></iframe>
                </div>
            </div>
        </div>
    </div>
    
    
  )
}
