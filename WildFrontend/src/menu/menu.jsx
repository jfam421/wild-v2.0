import React, { useState, useContext, useEffect } from "react";

import useItems from "./itemLists/itemList";
import { Link } from "react-router-dom";
import { LanguageContext } from "../LanguageContext";
import { SlideContext } from "../SlideContext";
import './menu.css';
import drinkIcon from "./icons/drinkIcon.png"
import foodIcon from "./icons/foodIcon.png"
import hookahIcon from "./icons/HookahIcon.png"

function Menu (){

    const {language, setLanguage} = React.useContext(LanguageContext);

    const {slide, setSlide} = useContext(SlideContext);
    setSlide(0);
    
    const [flexDirectionState, setFlexDirectionState] = useState();

    // if(language===2){
    //     setFlexDirectionState({flexDitection: "row-reverse"});
    // }


    const menuItems = useItems().menu;
    console.log(useItems())
    return(
    <div className="menuWriper">
    <div className="menuContainer">
    <Link to="/drinks" >
        <div 
        className={'menuItem ' + (language===2 ? "flexReverse" : "")}
        >
            <img src={drinkIcon} alt="drink icon" />
            <h2 className="menuItemName">{menuItems[0]}</h2>
        </div>
    </Link>
    <Link to="/food">
        <div className={"menuItem " + (language===2 ? "flexReverse" : "")}>
            <img src={foodIcon} alt="drink icon" />
            <h2 className="menuItemName">{menuItems[1]}</h2>
        </div>
    </Link>
    <Link to="/hookah">
        <div className={"menuItem "  + (language===2 ? "flexReverse" : "")}>
            <img src={hookahIcon} alt="drink icon" />
            <h2 className="menuItemName">{menuItems[2]}</h2>
        </div>
    </Link>
    </div>
    </div>)
}
export default Menu;