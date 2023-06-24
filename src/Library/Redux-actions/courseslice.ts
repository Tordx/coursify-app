import {createSlice} from '@reduxjs/toolkit';

export const coursepref = createSlice({

    name: 'coursepref',
    initialState: {
        course: [],
        schooltitle: '',
    },
    reducers: {
        setcourse: (state, action) => {
            state.course = action.payload
            console.log(action)
            console.log('coursepref');
            
        },
        setschooltitle: (state, action) => {
            state.schooltitle = action.payload
            console.log(action)
            console.log('setschooltitle');
            
        },
    }

})

export const {setcourse , setschooltitle} = coursepref.actions
export default coursepref.reducer