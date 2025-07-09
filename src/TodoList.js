import { createSlice } from "@reduxjs/toolkit";
const TodoList=createSlice({
    name:'TODO',
    initialState:{value:[]},
    reducers:{
        add:(state,action)=>{
            console.log()
            state.value=[...state.value,action.payload]
        },
        reset:(state)=>{
            state.value=[]
        }
    }
})
export const {add,reset}=TodoList.actions
export default TodoList.reducer