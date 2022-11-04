import { combineReducers } from '@reduxjs/toolkit' 
import detailReducer from './detailReducer'
import movieReducer from './movieReducer'
import trendingReducer from './trendingReducer'

export default combineReducers({
    movie: movieReducer,
    trend: trendingReducer,
    detail: detailReducer
})