import Navbar from "./Navbar";
import style from "../components/style.module.css"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductPage = () => {

    const {handleCart} = useContext(CartContext)

    return (
        <div className={style.div}>
            <h2 className={style.form}>Context Api</h2>
        <Navbar/>
        <button onClick={()=>handleCart(1)} style={{display:"block",margin:"auto"}}>Add Laptop</button>
        </div>
    )
}

export default ProductPage