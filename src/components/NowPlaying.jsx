import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/NowPlaying.css'
import CardPic from '../assets/picts/CardPic.jpg'

import { useDispatch, useSelector } from 'react-redux'
import { getAllMovies } from '../redux/actions/movieAction'

function NowPlaying() {
  const dispatch = useDispatch()
  const { movies } = useSelector((state) => state.movie)

  useEffect(() => {
      dispatch(getAllMovies())
  },[dispatch])
  return (
    <div className='NowPlaying'>
        <h4 className='m-4'> Now Playing : </h4>
        <div className='CardContainer m-4'>
          {
            movies?.map((movie, index) => (
            <div key={index}>
              <Link to={`/detail/${movie.id}`}>
                <img src={`${process.env.REACT_APP_IMG_URL}/${movie.poster_path}`} className='CardContent mb-2' alt={movie.original_title}/>
              </Link>
            </div>
            ))
          }

        </div>
    </div>
  )
}

export default NowPlaying