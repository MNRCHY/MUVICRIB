import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import HeroCarousel from '../components/HeroCarousel'
import Navigation from '../components/Navigation'
import NowPlaying from '../components/NowPlaying'

import { useDispatch, useSelector } from 'react-redux'
import { getAllMovies } from '../redux/actions/movieAction'

function Home() {
    // const dispatch = useDispatch()
    // const { movies } = useSelector((state) => state.movie)

    // useEffect(() => {
    //     dispatch(getAllMovies())
    // },[dispatch])
  return (
    <div className='Home'>
        <header>
            <Navigation />
        </header>

        <div>
            <HeroCarousel />
            <NowPlaying />
        </div>

        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default Home