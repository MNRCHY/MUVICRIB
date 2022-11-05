import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import '../assets/css/SearchResults.css'

import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getAllSearch } from '../redux/actions/searchAction'
import { Col, Row } from 'react-bootstrap'

function SearchResults() {

    const dispatch = useDispatch()
    const {searches} = useSelector ((state) => state.search)
    const {id} = useParams()

    useEffect(() => {
        dispatch(getAllSearch(id))
    },[dispatch, id])

  return (
    <div>
        <header>
            <Navigation />
        </header>
        <div className='SearchResult mx-5'>
            <h3 className='mb-4'> Search results for '{id}'</h3>
            <Row className='mb-3'>
            {
            searches?.map((result, index) => (
            <Col key={index}>
                <Link to={`/detail/${result.id}`}>
                    <img src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} className='MoviePoster mb-2' alt={result.original_title}/>
                </Link>
            </Col>
            ))
            }
            </Row>
        </div>

        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default SearchResults