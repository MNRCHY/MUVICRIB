import axios from 'axios'
import { useParams } from 'react-router-dom'
import { getAllDetailReducers } from '../reducers/detailReducer'

export const getAllDetails = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get (
            `${process.env.REACT_APP_BASE_URL}/movie/${id}`, {
                params: {
                    api_key: process.env.REACT_APP_TMDB_KEY
                }
            }
            )
            dispatch(getAllDetailReducers(data))
    } catch (error) {
        throw error
    }
}