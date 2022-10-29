import React, {useContext, useState, createContext} from 'react';

export const LanguageContext = createContext(1)

// const LanguageContext = React.createContext();
// const LanguageUpdateContext = React.createContext();

// export function useLanguage(){
//     return useContext(LanguageContext);
// }
// export function useLanguageUpdate(){
//     return useContext(LanguageUpdateContext);
// }

// export function LanguageProvider({children}){
//     const [languageNumber, setLanguageNumber] = useState(1);
//     function updateLanguageNumber(number){
//         setLanguageNumber(number);
//     }
//     return(
//     <LanguageContext.Provider value={languageNumber}>
//         <LanguageUpdateContext value={updateLanguageNumber}>
//             {children}
//         </LanguageUpdateContext>
//     </LanguageContext.Provider>
//     )

// }