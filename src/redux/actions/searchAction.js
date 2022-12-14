import axios from 'axios'
import { getAllSearchReducers } from '../reducers/searchReducer'

export const getAllSearch = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get (
            `https://api.themoviedb.org/3/search/movie?api_key=f3877f25df0636a9666cd8bcc0b715da&language=en-US&query=${id}&page=1&include_adult=false`
            )
            dispatch(getAllSearchReducers(data.results))
    } catch (error) {
        throw error
    }
}