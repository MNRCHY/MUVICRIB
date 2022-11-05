import React, {useState} from 'react'
import '../assets/css/Navigation.css'
import { Button, Form, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

function Navigation() {

  const [search, setSearch] = useState()
  const navigate = useNavigate()
  return (
    <div className='Navigation'>
        <Navbar className='mx-5 py-3'>
            <Link className='BrandLink' to='/'>
              <h5 className='BrandLogo'> MUVI<span>CRIB</span> </h5>
            </Link>

            <Form className='d-flex justify-content-center' style={{width: '100%'}}>
                <input onChange={(e) => setSearch(e.target.value)} type='text' placeholder='Search' className='searchForm py-1 px-2' style={{width: '300px'}} />
                <Button onClick={() => navigate(`/result/${search}`)} className='ms-2' variant='danger' size='sm'>Search</Button>
            </Form>
            {/* <div className='LinkContainer'>
              <div className='NavLinkContainer'>
              <Link className='NavLink'> Sign in </Link>
              </div>
              <div className='NavLinkContainer'>
              <Link className='NavLink'> Sign up </Link>
              </div>
            </div> */}
        </Navbar>
    </div>
  )
}

export default Navigation