import React from 'react'
import { NavLink } from 'react-router-dom'
import './ErrorPage.css';
const ErrorPage = () => {
    return (
        <>
          <div id='notfound'>
                <div className='notfound'>
                    <div className='notfound-404'>
                        <h1>404</h1>
                    </div>
                    <h2>We are sorry page not found</h2>
                    <p className='mb-5'>
                        The page you are looking is might have removed or changed it's name or it is temperorily unavailabel. 
                    </p>
                    <NavLink to='/'>Back To Home Page</NavLink>
                </div>
          </div>  
        </>
    )
}

export default ErrorPage
