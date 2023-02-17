import { useMemo, useState } from "react"
import style from "../components/style.module.css"

const Memo = () => {

    const[count,setCount] = useState(0)

    const stopRender = useMemo(()=>{
        return(
            <>
                 <h3 style={{textAlign:"center",color:"blue"}}>with UseMemo counter : {count}</h3>
            </>
        )
    },[])

    return (
        <div className={style.div}>
           <h2 className={style.form}>useMemo</h2>
          {stopRender}
           <h3 style={{textAlign:"center"}}>without UseMemo counter : {count}</h3>
           <button onClick={()=>setCount(count+1)} style={{display:"block",margin:"auto"}}>Increment</button>
            
        </div>
    )
}


export default Memo