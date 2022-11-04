import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    trends: []
}

const trendSlicer = createSlice({
    name: 'trends',
    initialState,
    reducers: {
        getAllTrendsReducers: (state, action) => {
            state.trends = action.payload
        }
    }
})

export const {getAllTrendsReducers} = trendSlicer.actions
export default trendSlicer.reducer