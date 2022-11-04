import React from 'react'
import '../assets/css/Navigation.css'
import { Button, Form, Navbar, NavbarBrand } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div className='Navigation'>
        <Navbar className='mx-5 py-3'>
            <h5 className='BrandLogo'> MUVI<span>CRIB</span> </h5>

            <Form className='d-flex justify-content-center' style={{width: '100%'}}>
                <input type='text' placeholder='Search' className='searchForm py-1 px-2' style={{width: '300px'}} />
                <Button className='ms-2'>Search</Button>
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