import {createSlice} from '@reduxjs/toolkit';

export const scoreref = createSlice({

    name: 'scoreref',
    initialState: {
        score: [],
    },
    reducers: {
        setscore: (state, action) => {
            state.score = action.payload
            console.log(action)
            console.log('schoolpref');
            
        },
    }

})

export const {setscore} = scoreref.actions
export default scoreref.reducer