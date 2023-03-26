import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";


const Slider = () =>{

    const[currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://c.stocksy.com/a/MX7I00/z9/4318880.jpg",
        "https://www.pantone.com/media/wysiwyg/fashion-color-trend-report/london-ss-23/LFW23_HeroImage_Desktop.jpg?auto=webp&format=pjpg&quality=85",
        "https://assets.vogue.com/photos/6307ef4772022083cfa34fed/master/w_2560%2Cc_limit/00-story.jpg"
        // "https://assets.vogue.com/photos/641a1a7301c7eb1302ace0bc/3:2/w_3506,h_2337,c_limit/2007-HENRICK-A4-PR-Campaign-Landscape-Image-300ppi_09.jpg",
        
    ];

    const prevSlide =() =>{
        setCurrentSlide(currentSlide === 0 ? 2 : (prev)=> prev-1);
    };
    const nextSlide =() =>{
        setCurrentSlide(currentSlide === 2 ? 0 : (prev)=> prev + 1);
    };
    

    return(
        <div className="slider">
            <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                <img src={data[0]}alt="" />
                <img src={data[1]}alt="" />
                <img src={data[2]}alt="" />
            </div>

            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestOutlinedIcon/>
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastOutlinedIcon/>
                </div>
            </div>
        </div>
    )
}

export default Slider;