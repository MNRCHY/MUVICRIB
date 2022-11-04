import axios from 'axios'
import { getAllTrendsReducers } from '../reducers/trendingReducer'

export const getAllTrends = () => async (dispatch) => {
    try {
        const { data } = await axios.get (
            `${process.env.REACT_APP_BASE_URL}/trending/movie/week`, {
                params: {
                    api_key: process.env.REACT_APP_TMDB_KEY
                }
            }
            )
            dispatch(getAllTrendsReducers(data.results))
    } catch (error) {
        throw error
    }
}