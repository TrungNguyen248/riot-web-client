import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { MobilePlatForm, NitendoPlatForm, PlayStationPlatForm, WinDowsPlatForm, XboxPlatForm } from "../Icons"

function SliderHome() {
    
    const VITE_REACT_APP_BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL
    let [sliderItem, setSliderItem] = useState([])
    let sizeIcon = {
        width: "0.8rem",
        heihgt: "0.8rem"
    }

    let setIconPlatForm = (platForm) => {
        switch(platForm) {
            case "windows":
                return (<WinDowsPlatForm {...sizeIcon}/>)
            case "nintendo":
                return (<NitendoPlatForm  {...sizeIcon}/>)
            case "playstation":
                return (<PlayStationPlatForm  {...sizeIcon}/>)
            case "xbox":
                return (<XboxPlatForm  {...sizeIcon}/>)
            case "mobile":
                return (<MobilePlatForm  {...sizeIcon}/>)
            default:
                return (<div></div>)
        }
    }

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }

    useEffect(() => {
        useFetch(`${VITE_REACT_APP_BASE_URL}/riot-forge`)
            .then((res) => {
                setSliderItem(res)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])    

    return ( 
        <div className={""}>
            <Slider {...settings} className="slide-home">
                {sliderItem.map((item, index) =>(
                    <div key={index} >    
                        <div
                            className={"group relative ml-4"}>
                            <div className={"w-full border-2 border-transparent rounded-md group-hover:border-slate-400 "}>
                                <img className={"rounded-md"} src={item.urlImg}/>
                            </div>
                            <div className={"absolute top-1/4 w-20 -translate-y-1/4 left-8"}>
                                <div className={"absolute w-20 py-3"}>
                                    <img
                                        className={"absolute w-20"}
                                        src={item.urlLogo} />
                                </div>
                                <div className={"absolute top-24 left-2 flex justify-center"}>
                                    {
                                    <div className={"flex bg-white/10 rounded-full px-2"}>
                                        {item.platForm.map((icon, index) => (
                                            <div key={index}>
                                                {setIconPlatForm(icon)}
                                            </div>
                                        ))}
                                    </div> 
                                    }
                                </div>
                            </div>
                        </div>    
                    </div>
                ))}
            </Slider>
        </div>
     );
}

export default SliderHome;