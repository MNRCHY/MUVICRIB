import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CardPic from '../assets/picts/cat.png'
import '../assets/css/SearchResults.css'

import { useDispatch, useSelector } from 'react-redux'
import {getAllDetails} from '../redux/actions/detailAction'
import { Link, useParams } from 'react-router-dom'
import Navigation from '../components/Navigation'
import { Card, Col, Row } from 'react-bootstrap'

function SearchResults() {
    // const dispatch = useDispatch()
    // const { results } = useSelector ((state) => state.result)
    // const { id } = useParams()

    // useEffect(() => {
    //     dispatch(getAllDetails(id))
    // },[dispatch])

    const [searchResult, setSearchResult] = useState([])
    const {id} = useParams()

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f3877f25df0636a9666cd8bcc0b715da&language=en-US&query=${id}&page=1&include_adult=false`)
        .then((res) => {
            console.log(res.data.results)
            setSearchResult(res.data.results)
        })
    },[])

  return (
    <div>
        <header>
            <Navigation />
        </header>
        <div className='SearchResult mx-5'>
            <h3 className='mb-4'> Search results for '{id}'</h3>
            <Row>
            {
                searchResult?.map((result,index) => {
                    return(
                    <Col className='mb-2' key={index}>
                        <Link to={`/detail/${result.id}`} className='MovieList'>
                        <Card className='p-2' style={{width:'250px', height:'auto'}}>
                            <Card.Img src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`}/>
                        </Card>
                        </Link>
                    </Col>
                    )
                })
            }
        </Row>
        </div>
    </div>
  )
}

export default SearchResults