import { createSlice } from "@reduxjs/toolkit";
import { SiActivision } from "react-icons/si";

const initialState = {
    isHome : false,
    isAbout : false,
    isProjects : false,
    isContact : false
}

const IntersectionSlicer = createSlice({
    name : "intersection",
    initialState,
    reducers : {
        setSection : (state,action) => {
            state[action.payload.key] = action.payload.value
        }
    }
})

export const {setSection} = IntersectionSlicer.actions
export default IntersectionSlicer.reducer