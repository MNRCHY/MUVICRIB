import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searches: []
}

const searchSlicer = createSlice({
    name: 'search',
    initialState,
    reducers: {
        getAllSearchReducers: (state, action) => {
            state.searches = action.payload
        }
    }
})

export const {getAllSearchReducers} = searchSlicer.actions
export default searchSlicer.reducer