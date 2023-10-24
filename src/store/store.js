import { configureStore } from "@reduxjs/toolkit";
import IntersectionSlicer from "./intersection/IntersectionSlicer";


const store = configureStore({
    reducer : {
        intersection : IntersectionSlicer
    }
})

export default store