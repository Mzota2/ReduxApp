import {configureStore} from '@reduxjs/toolkit';

import PostReducer from './Slices/PostSlice';
//adding the slice to the store

export default configureStore({
    reducer:{
       posts:PostReducer
    },
})