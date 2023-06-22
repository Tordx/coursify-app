import { configureStore } from "@reduxjs/toolkit"
import usertokenslice from "./usertokenslice"


export default configureStore({

    reducer: {

        _usertoken : usertokenslice

    },
    
})