import React from 'react'
import { Link } from 'react-router-dom'

const TribeTiles = () => {
  return (
    <>
    <Link to={"/tribepage"}>
    <div className='shadow-lg rounded-lg p-5'>Tribe Name</div> 
    </Link>
    
    </>
   
  )
}

export default TribeTiles