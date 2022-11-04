import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    details: []
}

const detailSlicer = createSlice({
    name: 'detail',
    initialState,
    reducers: {
        getAllDetailReducers: (state, action) => {
            state.details = action.payload
        }
    }
})

export const {getAllDetailReducers} = detailSlicer.actions
export default detailSlicer.reducer