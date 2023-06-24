import { configureStore } from "@reduxjs/toolkit"
import usertokenslice from "./usertokenslice"
import schoolingslice from "./schoolingslice"
import scoreslice from "./scoreslice"

import courseslice from "./courseslice"

export default configureStore({

    reducer: {

        _usertoken : usertokenslice,
        _schooling : schoolingslice,
        _score : scoreslice,
        _course : courseslice

    },
    
})