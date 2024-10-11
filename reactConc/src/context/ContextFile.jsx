import { createContext, useState } from "react";


export const GlobalContext = createContext(null);

function GlobalState({ children }) {
    
    const [count, setCount] = useState(0);

    const handleClickCount= () => {
        setCount(c=>c+1)
    }

    return <GlobalContext.Provider value={{count, handleClickCount}}>{children}</GlobalContext.Provider>
}

export default GlobalState;
