import { createSlice } from "@reduxjs/toolkit";

const initialState =  [
    {userId:1, title:'Importance of technology', content:'technology has helped many people become more'},
    {userId:2, title:'Morals and Values', content:'It has been a shift in the way technological functionality has turned out the world right now'},
    {userId:3, title:'Morals and Values', content:'It has been a shift in the way technological functionality has turned out the world right now'},
    {userId:4, title:'Morals and Values', content:'It has been a shift in the way technological functionality has turned out the world right now'}

]
const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{

    },



});

// Action creators are generated for each case reducer function
export const {  } = postSlice.actions

export default postSlice.reducer