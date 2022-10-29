import React, { useContext, useRef, useState, useEffect } from "react";

import DrinkInfo from "./drinkInfo";

import { Swiper, SwiperSlide, useSwiperSlide  } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./mainMenu.css"
import { SlideContext } from "../SlideContext";
import {LanguageContext} from '../LanguageContext';

function TopSlider (props){
    const {language, setLanguage} = React.useContext(LanguageContext);
    const {slide, setSlide} = useContext(SlideContext);
    const [currentLang, setCurrentLang] = useState('EN');

    useEffect(() => {
        switch(language) {
            case (0):
                setCurrentLang('RU');
                break;
            case (1):
                setCurrentLang('EN');
                break;
            case (2):
                setCurrentLang('HE');
                break;
            default:
                setCurrentLang('EN');            
        }
    }, [language]);
    
    const swiperRef = useRef();

    useEffect(() => {
      swiperRef.current.slideTo(slide + 3);
    }, [slide])

    let typesArray = [];

    props.itemsList && props.itemsList.filter(item => item.lang === currentLang).map(item => {
      if (!typesArray.includes(item.type)) {
        typesArray.push(item.type);
      }
    })

    console.log(typesArray);

    // if (!showMenu) {
      return(
      <Swiper
          loop={true}
          grabCursor={true}
          spaceBetween={0}
          slidesPerView={3}
          centeredSlides={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => console.log(swiper.realIndex)}
          className="mySwiper mainSwiper"
        >
        {props.itemsList && typesArray.map((item, index)=>{
          return (
            <SwiperSlide key={index}>
            <p className="itemName">{item}</p>
            <div className="itemInfo">
              <DrinkInfo  items={props.itemsList.filter(menuItem => menuItem.type === item)}/>
            </div>
          </SwiperSlide>
          )
        })}
        </Swiper>
        )
    }
// }

export default TopSlider;
