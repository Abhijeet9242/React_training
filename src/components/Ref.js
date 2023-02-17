import { useRef } from "react";
import style from "../components/style.module.css";

const Ref = ()=>{

    const inputRef = useRef(null)

    const handleClick = () => {
        inputRef.current.value = "1000"
        inputRef.current.style.color="red"
        inputRef.current.focus()
    }

    return (
        <div className={style.div}>
            <h2 className={style.form}>UseRef hook</h2>
            
            <div style={{display:"flex",justifyContent:"center"}}>
            <input type="text" ref={inputRef}/>
            <button onClick={handleClick}>Add text</button>
            </div>
        </div>
    )
}

export default Ref