import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    movies: []
}

const movieSlicer = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        getAllMovieReducers: (state, action) => {
            state.movies = action.payload
        }
    }
})

export const {getAllMovieReducers} = movieSlicer.actions
export default movieSlicer.reducer