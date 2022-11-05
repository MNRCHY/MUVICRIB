import React, { useEffect } from 'react'
import '../assets/css/MovieDetail.css'
import Footer from '../components/Footer'
import { Navbar } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux'
import {getAllDetails} from '../redux/actions/detailAction'
import { Link, useParams } from 'react-router-dom'

function MovieDetail() {
    const dispatch = useDispatch()
    const { details } = useSelector((state) => state.detail)
    const {id} = useParams()

    useEffect(() => {
        dispatch(getAllDetails(id))
    },[dispatch, id])
  return (
    <div className='MovieDetail'>
        <header>
            <Navbar className='DetailNav d-flex justify-content-center'>
                <Link className='BrandLink' to='/'>
                    <h4 className='BrandLogo'> MUVI<span>CRIB</span> </h4>
                </Link>
            </Navbar>
        </header>

        <div className='DetailContainer m-5 p-4 border'>
            <div>
                <img src={`${process.env.REACT_APP_IMG_URL}/${details.poster_path}`} style={{width: '342px'}} alt={MovieDetail.original_title}/>
            </div>
            <div>
                <div className='mb-4'>
                    <h1> {details.original_title} </h1>
                    <h5> Release date: <br/> {details.release_date}</h5>
                    
                </div>
                <div>
                    <p> {details.overview} </p>
                </div>
            </div>
        </div>

        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default MovieDetail