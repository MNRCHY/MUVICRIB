import React, {useEffect} from 'react'
import '../assets/css/HeroCarousel.css'
import CarouselPic from '../assets/picts/CarouselPic.jpg'
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { getAllTrends } from '../redux/actions/trendingAction'
import movieReducer from '../redux/reducers/movieReducer'

function HeroCarousel() {
    const dispatch = useDispatch()
    const { trends } = useSelector ((state) => state.trend)

    useEffect(() => {
        dispatch(getAllTrends())
    },[dispatch])

    return (
    <div className='HeroCarousel'>
        <Carousel className=''>
            {
                trends?.map((trend, index) => (
                    <Carousel.Item style={{height: '500px'}} key={index}>
                        <img src={`${process.env.REACT_APP_IMG_URL}/${trend.backdrop_path}`} className='CarouselPic' style={{width: '100%'}} alt={trend.title}/>
                        <Carousel.Caption className='mb-4'>
                            <h1 className='d-flex'> {trend.original_title} </h1>
                            <p className='d-flex' style={{textAlign:'left'}}> {trend.overview} </p>
                            <div className='d-flex'>
                                <Link to={`/detail/${trend.id}`} className='CarouselLink'> See more </Link>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            }
        </Carousel>
    </div>
  )
}

export default HeroCarousel