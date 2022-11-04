import axios from 'axios'
import { getAllMovieReducers } from '../reducers/movieReducer'

export const getAllMovies = () => async (dispatch) => {
    try {
        const { data } = await axios.get (
            `${process.env.REACT_APP_BASE_URL}/movie/now_playing`, {
                params: {
                    api_key: process.env.REACT_APP_TMDB_KEY
                }
            }
            )
            dispatch(getAllMovieReducers(data.results))
    } catch (error) {
        throw error
    }
}