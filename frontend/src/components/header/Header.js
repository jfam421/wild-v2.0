import React, { useContext, useState, useEffect } from 'react'
import { SlideContext } from '../../SlideContext';
import { useNavigate } from "react-router-dom";
import { LanguageContext } from '../../LanguageContext';
import { useSwiper } from 'swiper/react';
import burger from '../../menu/icons/menu.png';
import backBtn from '../../menu/icons/back.png'
import './Header.css';
import wildLogo from "../../menu/images/wild-logo.png"

export default function Header(props) {

    const swiper = useSwiper();
    const {language, setLanguage} = useContext(LanguageContext);
    const [showMenu, setShowMenu] = useState(false);
    const {slide, setSlide} = useContext(SlideContext);
     const navigate = useNavigate();
    const location = props.locationPath.slice(1);

    const [dataArray, setDataArray] = useState([]);
    //console.log(useItems)

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

    
  useEffect(() =>{
    switch (location) {
      case 'drinks':
        getData('drink');
        break;
      case 'food':
        getData('food');
        break;
      case 'hookah':
        getData('hookah');
        break;
    }
  }, [location]);
  
        const getData = async (type) => {
        const result = await fetch(`https://wild.herokuapp.com/api/${type}`, {
          mode: 'cors'
        });
        const data = await result.json();
        setDataArray(data);
    }
    let typesArray = [];
    dataArray.filter(item => item.lang === currentLang).map(item => {
      if (!typesArray.includes(item.type)) {
        typesArray.push(item.type);
      }
    })

    console.log("THIS IS TYPES ARR")
    console.log(typesArray)

    return (
        <div className='header'>
            <div className='menu'  style={(showMenu ? {backgroundColor: "black"} : {backgroundColor: "none"})}>
            <div className ='backBtnDiv'>
                <img src={backBtn} alt='back button' onClick={() => navigate(-1)} style={{filter: 'invert(100%', width: '30px'}}/>
            </div>
                <div className='logoDiv'>
                    <img className='logo' src={wildLogo} alt="wild logo" onClick={() => navigate("/")}/>
                </div>
                <div className='burger' onClick={() => setShowMenu(!showMenu)}>
                    <img src={burger} style={{filter: 'invert(100%', width: '30px'}} />
                </div>
            </div>
            <div className='full-menu' style={(showMenu ? {top: "0%"} : {top: "-100%"})}>
                {typesArray.map((item, index)=>{
                return<>
                   <p key={index} style={(language==2 ? {textAlign: "right"} : {textAlign: "left"})}  onClick={() => {
                        setShowMenu(!showMenu);
                        setSlide(index);
                        }}>{item}</p>
                </>
        })}
            </div>
        </div>
    )
}
