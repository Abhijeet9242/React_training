import { useState } from "react"
import style from "../components/style.module.css"

const Form2 = () => {

    const[form,setForm] = useState({
       name:"",
       email:"",
       password:""
    })


    const handleChange = (e) => {
       const{name,value} = e.target
       setForm({...form,[name]:value})
    }

    const handleClick = (e) => {
        e.preventDefault()
        console.log(form)
    }

    return (
        <div className={style.div}>
            <h2 className={style.form}>Application Form2</h2>
            <form className={style.formdiv}>
                <input type="text" placeholder="enter name" name="name" onChange={(e)=>handleChange(e)}/>
                <br/><br/>
                <input type="email" placeholder="enter email" name="email" onChange={(e)=>handleChange(e)}/>
                <br/><br/>
                <input type="password" placeholder="enter password" name="password" onChange={(e)=>handleChange(e)}/>
                <br/><br/>
                <button onClick={handleClick}>submit</button>
            </form>
        </div>
    )
}

export default Form2