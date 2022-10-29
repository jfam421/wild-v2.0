import React, { useContext, useState } from "react";

import { LanguageContext } from "../LanguageContext";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";

// Import Swiper styles
import languageLogo from "../menu/images/languageLogo.png"
import wildLogo from "../menu/images/wild-logo.png"
import instaLogo from "../menu/icons/InstaLogo.png"
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../language/langSwiper.css"


// import required modules
import { EffectCoverflow, Pagination } from "swiper";


function LangSlider () {
 // const [languageNumber, setLanguageNumber] = useState(1);
    const [languageBTN, setLanguageBTN] = useState({font: "",
text: "Let's rock!"});

const {language, setLanguage} = useContext(LanguageContext);

console.log(language + " THis is context in langSlider")

// function getLanguageNumber (){
//   return languageNumber;
// }
    
   return (
    <div className="langSlider" >
    {/* <img src={wildLogo} alt="Wild Logo" style={{position: "absolute", width: 70, margin: 20}}/>
    <a href="https://instagram.com/the_wild_haifa?igshid=YmMyMTA2M2Y=" style={{position: "absolute", width: 50, height:50, marginLeft: 120, marginTop:20, right: 50}}>
       <img src={instaLogo} alt="insta Logo" style={{width: 50}}/>
    </a> */}
    <img src={languageLogo} style={{opacity: 0.08, position: "absolute", right: "-22vw"}}/>
    <img src={wildLogo} style={{opacity: 0.08, width: 300, position: "absolute", bottom: "0vw", left:"-30vw", zIndex: -1}}/>
      <Swiper
        direction={"vertical"}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        onSlideChange={(swipe) => {
          setLanguage(swipe.activeIndex)
          switch (swipe.activeIndex){
        case 0:
       // setLanguageNumber(0);
            setLanguageBTN({
              font:"",
              text: "Погнали!"})
            break;
        case 1:
       // setLanguageNumber(1);
           setLanguageBTN({
              font: "",
              text: "Let's rock!"})
            break;
        case 2:
       // setLanguageNumber(2);
            setLanguageBTN({
              font: "",
              text: "!יאללה"})
            break;    
    }}}
        slidesPerView={"auto"}
         initialSlide={language}
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 300,
          modifier: 1,
          slideShadows: false
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <p className="languages">русский</p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="languages">English</p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="languages">עברית</p>
        </SwiperSlide>
      </Swiper>
      <div className="btnHolder">
      <Link to="/menu" >
        <button className="letsRockBtn">{languageBTN.text}</button>
      </Link>
      </div>
    </div>
  );
}
//export { getLanguageNumber };
export default LangSlider; 
