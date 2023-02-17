import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const Cart = () => {
const{laptop} = useContext(CartContext)

    return (
        <h2>Laptop in cart : {laptop}</h2>
    )
}

export default Cart