import React from 'react'
import './heroImage.css'

const HeroImage = (props) => {
  return (
    <div className='container' 
    style={{
        background: `url(${props.menu}) no-repeat bottom center/cover`,
    height: "60vh"}}>
    <div className='banner-content'>
        <h1 className='heading-primary'>{props.heading}</h1>
        <p className='text-white'>{props.text}</p>
    </div>
      
    </div>
  )
}

export default HeroImage
