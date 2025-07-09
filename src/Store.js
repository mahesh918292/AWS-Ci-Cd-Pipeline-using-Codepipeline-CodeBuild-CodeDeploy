import { configureStore } from "@reduxjs/toolkit";
import TodoList from './TodoList'
const store=configureStore({
    reducer:{
        TodoList:TodoList 
    }
})
export default store 