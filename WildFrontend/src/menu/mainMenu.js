import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import useItems from "./itemLists/itemList";

import TopSlider from "./topSlider";

import "./mainMenu.css"

function MainMenu() {
  const location = useLocation().pathname.slice(1);
  const itemList = useItems()[location]

  const [dataArray, setDataArray] = useState([]);

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
        const result = await fetch(`https://wild-b.herokuapp.com/api/${type}`, {
          mode: 'cors'
        });
        const data = await result.json();
        setDataArray(data);
    }

    console.log(dataArray);

    // надо написать стили под каждый из этих классов
    // возможно создать отдельные файлы под каждый и импорт
    return(<div className={"mainWraper " + (location==="drinks" ? "drinkWraper" : location==="food" ? "foodWraper" : "hookahWraper")}>
    <TopSlider itemsList={dataArray} />
    </div>)
}
export default MainMenu;