import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LanguageContext } from "../LanguageContext";
import friesImg from './images/fries.png';

function DrinkInfo(props){
    const location = useLocation().pathname.slice(1);
    const {language, setLanguage} = React.useContext(LanguageContext);
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

    const hebDirection = {
        direction: "ltr"
    }

    if(language==2){
        hebDirection.direction = "rtl";
   
    }

    return (
        <div>
            {props.items.filter(item => item.lang === currentLang).map((item, index) => {
                return (
                    <div key={index} className="drinkItemWraper" style={Object.assign({alignItems: "flex-start", width: "100%", marginBottom: "16px"}, hebDirection)}>
                        <img style={{maxWidth: "100px", height: "100%"}} src={item.imageURL} className="drinkItemImg" />
                        <div>
                            <h2>{item.itemName}</h2>
                            <p style={{display: "block", width: "100%"}}>{item.description}</p>
                            <p>{item.price}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )



    // if(location !== "food"){

    // return(
    //     <div>
    //         {props.items.filter(item => item.lang === currentLang).map((item, index) => {
    //             return <div key={index} className="drinkItemWraper" style={Object.assign({alignItems: "flex-start", width: "100%", marginBottom: "16px"}, hebDirection)}>
    //             {/* ITEM LOGO */}
    //             <img style={{maxWidth: "100px", height: "100%", paddingTop: "8px"}} src={item.imageURL} className="drinkItemImg" />
    //             <div style={ Object.assign({width: "100%", paddingLeft:16, marginBottom: 16}, hebDirection)}>
    //             <div style={ Object.assign({width: "100%", display: "flex", justifyContent: "space-between", flexDirection: "row"}, hebDirection)}>
    //             {/* ITEM NAME */}
    //             <h2 style={{ display: "block", margin: "0 8px"}}>{item.itemName}</h2>
    //             {/* PRICE */}
    //             <p style={{ display: "block", marginLeft: "auto", margin: 0}}>{item.price}</p>
    //             </div>
    //             {/* DESCRIPTION */}
    //             <p style={Object.assign({display: "block", width: "100%", margin: "8px 8px"})} >{item.description}</p>
                
    //             </div>
    //             </div>
    //         })}
    //     </div>
    // )
    //     }
        // else{
        //     return (<div style={{textAlign: "center"}}>
        //     {console.log(props.items)}
        //     <div style={{display: "flex", justifyContent: "space-between"}}>
        //         {/* PRICE */}
        //         <h1 style={{fontSize: "54px", margin: 0}}>{props.items[0]}</h1>
        //         {/* IMAGE */}
        //         <img src={require(`./images/${props.items[3]}.png`)} alt="foodIcon" style={{marginLeft: "0", marginTop: "30px", height:"250px"}}/>
        //     </div>
        //     <div style={{textAlign: "start"}}>
        //         {/* DESCRIPTION */}
        //         <h5 style={hebDirection}>{props.items[2]}</h5>
        //         {/* EXTRAS */}
        //         <h2 style={hebDirection}>{props.items[1]}</h2>
                
        //                 {props.items.slice(4).map((item, index) => {
        //                 return <div key={index}>
        //                 {/* EXTRAS LIST */}
        //                 <p style={hebDirection}>{item.itemName}</p>
        //             </div>
        //         })} 
        //     </div>
        //     </div>)

        // }
}

export default DrinkInfo;