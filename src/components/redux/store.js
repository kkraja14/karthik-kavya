import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterReducer";

export default configureStore({
    reducer:{
        Counter:CounterReducer,
    }, 
})
