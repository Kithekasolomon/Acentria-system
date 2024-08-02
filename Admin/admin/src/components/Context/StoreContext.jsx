import { createContext } from "react";


export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const url="http://localhost:4000"
    const contextValue = {
        // Define your store data here
        
        url
        // Add other store data if needed
        


    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;