import React, { useState } from 'react'
import "./starAdder.style.css"

const StarAdder = () => {
    const [star, setStar] = useState([])
    
    const onButtonClick = () => {
        setStar([...star, "⭐️"])
        
    }
    const onStarDelete = () => {
        setStar([...star.slice(1)])
    }

  return (
      <div className='star-container'>
          <button className='star-btn' onClick={onButtonClick}>ADD STAR</button>
         
          <div className='star-length'>
              {star.map((el)=>star.length ?  <p onClick={onStarDelete}>{el} </p> : null)}
          </div>
          <div className='total'>Total:{ star.length}</div>

    </div>
  )
}

export default StarAdder