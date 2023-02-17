import style from "../components/style.module.css";
import {useState} from "react"

const Form1 = () => {

    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[pass,setPass] = useState("")

    const handleClick = (e) => {
        e.preventDefault()
        console.log(name,email,pass)
    }

    return(
        <div className={style.div}>
            <h2 className={style.form1}>Application Form1</h2>
            <form className={style.formdiv}>
            <input type="text" placeholder="name" onChange={(e)=>setName(e.target.value)} />
            <br/><br/>
            <input type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
            <br/><br/>
            <input type="password" placeholder="password" onChange={(e)=>setPass(e.target.value)}/>
            <br/><br/>
            <button type="submit" onClick={handleClick}>submit</button>
            </form>
        </div>
    )
}
export default Form1