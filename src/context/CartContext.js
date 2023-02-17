import { createContext ,useState} from "react";

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
const[laptop,setLaptop] = useState(10)

const handleCart = (val) => {
    setLaptop(laptop+val)
}

    return (
        <CartContext.Provider value={{laptop,handleCart}}>
            {children}
        </CartContext.Provider>
    )
}