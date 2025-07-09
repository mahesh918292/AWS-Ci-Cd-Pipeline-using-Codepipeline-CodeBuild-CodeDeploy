import { useDispatch,useSelector } from "react-redux"
import { reset,add } from "./TodoList"
import { useState } from "react"
const Counter=()=>{
    const dispatch=useDispatch()
    const value=useSelector((state)=>state.TodoList.value)
    const [val,setValue]=useState(0)
    return <>
    <input type="number" value={val} onChange={(e)=>setValue(e.target.value)} />
    <button onClick={()=>dispatch(add(Number(val)))}> Add </button>
    <button onClick={()=>dispatch(reset())}> Reset </button>
    {
        value && value.map((i)=>{
            return <li> {i} </li>
        })
    }
    </>
}
export default Counter