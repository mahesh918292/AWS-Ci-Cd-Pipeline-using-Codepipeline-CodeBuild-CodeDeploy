import { useState } from "react";
const useHook=()=>{
    const [value,setValue]=useState(0)
    const increment=()=>{
        setValue(value+1)
    }
    const decrement=()=>{
        setValue(value-1)
    }
    const reset=()=>{
        setValue(0)
    }
    return [value,increment,decrement,reset]
}
export default useHook