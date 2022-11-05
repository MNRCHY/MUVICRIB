import React from 'react'
import Footer from '../components/Footer'
import HeroCarousel from '../components/HeroCarousel'
import Navigation from '../components/Navigation'
import NowPlaying from '../components/NowPlaying'

function Home() {
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