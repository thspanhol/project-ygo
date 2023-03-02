import { createContext, useState } from "react";

export const AppContext = createContext()

export const AppProvider = ({children}) => {

    const [teste, setTeste] = useState("Spanhol");
    const [cardList, setCardList] = useState('');
    const [detailCard, setDetailCard] = useState('');

    const toggleTest = () => {
        setTeste(teste === "Spanhol" ? "Thales" : "Spanhol")
    };


    const getAllCards = async () => {
      const response = await fetch(
          "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=blackwing"
        );
        const data = await response.json();
        setCardList(data.data);
      };

    return (
    <AppContext.Provider value={{ teste, toggleTest, cardList, getAllCards, detailCard, setDetailCard }}>
        {children}
    </AppContext.Provider>
    );
}