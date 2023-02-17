import { useState } from "react"
import style from "../components/style.module.css"

const Lifting  = () => {

    const[data,setData] = useState("")

    const getName = (data) => {
        setData(data)
    }

    return (
        <div className={style.div}>
             <h2 className={style.form}>Lifting</h2>
            <Student name="abhijeet" getName={getName}/>
            <h3 style={{textAlign:"center"}}>Teacher recieved student data : {data}</h3>
           
        </div>
    )
}


const Student = (props) => {

    const handleClick = () => {
        props.getName("pradeep")
    }

    return (
        <>
        <h3 style={{textAlign:"center"}}>Student recieved Teacher data : {props.name} </h3>
        <button onClick={handleClick} style={{display:"block",margin:"auto"}}>get student data</button>
        </>
    )
}

export default Lifting