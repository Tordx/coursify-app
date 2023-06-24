import { configureStore } from "@reduxjs/toolkit"
import usertokenslice from "./usertokenslice"
import schoolingslice from "./schoolingslice"
import scoreslice from "./scoreslice"


export default configureStore({

    reducer: {

        _usertoken : usertokenslice,
        _schooling : schoolingslice,
        _score : scoreslice,

    },
    
})