import React from 'react'
import { Card } from 'react-bootstrap'
import img from '../../../assets/ErrorPage.png'
import {  Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
 
  return (
    <Card className="bg-dark text-white">
    <Card.Img src={img} alt="Card image" />
    <Card.ImgOverlay>

    <button><Link
            to='/'
            className='px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900'
          >
            Back to homepage
          </Link></button>
      
 
    
    </Card.ImgOverlay>
  </Card>
  )
}

export default ErrorPage;