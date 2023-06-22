import {createSlice} from '@reduxjs/toolkit';

export const calcuResult = createSlice({

    name: 'calcuresults',
    initialState: {
        usertoken: [],
    },
    reducers: {
        setusertoken: (state, action) => {
            state.usertoken = action.payload
            console.log(action)
            console.log('result');
            
        },
    }

})

export const {setusertoken} = calcuResult.actions
export default calcuResult.reducer