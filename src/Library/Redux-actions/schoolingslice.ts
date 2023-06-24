import {createSlice} from '@reduxjs/toolkit';

export const schoolpref = createSlice({

    name: 'schoolpref',
    initialState: {
        schooling: [],
    },
    reducers: {
        setschooling: (state, action) => {
            state.schooling = action.payload
            console.log(action)
            console.log('schoolpref');
            
        },
    }

})

export const {setschooling} = schoolpref.actions
export default schoolpref.reducer