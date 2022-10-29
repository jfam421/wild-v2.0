import LangScreen from './language/langScreen'
import Menu from './menu/menu'
import MainMenu from './menu/mainMenu'
import {useState} from 'react'
import { Routes, Route } from "react-router-dom"
import { LanguageContext } from './LanguageContext'
import { Layout } from './Layout'
import { SlideContext } from './SlideContext';

function App() {
  const [language, setLanguage] = useState(1);
  const [slide, setSlide] = useState(0);

  return (
    <div>
    <LanguageContext.Provider value={{language, setLanguage}}>
      <SlideContext.Provider value={{slide, setSlide}}>
        <Routes>
            <Route path="/" element={ <LangScreen/> } />
            <Route path="menu" element={ <Menu/> } />
            
              <Route path='/' element={<Layout/>} >
                <Route path="drinks" element={ <MainMenu/> } />
                <Route path="food" element={ <MainMenu/> } />
                <Route path="hookah" element={ <MainMenu/> } />
              </Route>
        </Routes>
      </SlideContext.Provider>
    </LanguageContext.Provider>
    
    </div>
  );
}

export default App;
