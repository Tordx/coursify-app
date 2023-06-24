import { configureStore } from "@reduxjs/toolkit"
import usertokenslice from "./usertokenslice"
import schoolingslice from "./schoolingslice"
import courseslice from "./courseslice"

export default configureStore({

    reducer: {

        _usertoken : usertokenslice,
        _schooling : schoolingslice,
        _course : courseslice

    },
    
})