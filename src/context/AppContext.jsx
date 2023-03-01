import { createContext, useState } from "react";

export const AppContext = createContext()

export const AppProvider = ({children}) => {

    const [cardList, setCardList] = useState("Spanhol");

    const toggleTest = () => {
        setCardList(cardList === "Spanhol" ? "Thales" : "Spanhol")
    }

    return (
    <AppContext.Provider value={{cardList, toggleTest}}>
        {children}
    </AppContext.Provider>
    );
}