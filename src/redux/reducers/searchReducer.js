import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    results : []
}

const resultSlicer = createSlice({
    name: 'result',
    initialState,
    reducers: {
        getAllResultReducers: (state, action) => {
            state.details = action.payload
        }
    }
})

export const { getAllResultReducers } = resultSlicer.actions
export default resultSlicer.reducer
