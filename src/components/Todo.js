import { useState } from "react"
import style from "../components/style.module.css"

const Todo = () => {

    const[text,setText] = useState("")
    const[data,setData] = useState([])

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleAddTodo = () => {
        // console.log(text)
        if(!text){
            alert("Enter an item")
        }

        const payload = {
            id: Math.floor(Math.random() * 1000),
            value:text
        }

        setData((pre)=>[...pre,payload])
        console.log(data)
    }


    const handleDeleteTodo = (id) => {
        // console.log(id)
        const newArray = data.filter(item=> item.id != id)
        setData(newArray)
    }

    return (
        <div className={style.div}>
            <h2 className={style.form}>Todo</h2>

            <div style={{display:"flex",justifyContent:"center"}}>
                <input type="text" onChange={(e)=>handleChange(e)}/>
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>

            <ul style={{textAlign:"center",listStyle:"none"}}>

                {data.map(item=>{
                    return(
                        <li key={item.id}>{item.value}<button onClick={()=>handleDeleteTodo(item.id)} className={style.todobtn}>X</button></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Todo