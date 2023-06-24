import { configureStore } from "@reduxjs/toolkit"
import usertokenslice from "./usertokenslice"
import schoolingslice from "./schoolingslice"


export default configureStore({

    reducer: {

        _usertoken : usertokenslice,
        _schooling : schoolingslice

    },
    
})