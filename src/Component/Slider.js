import React from 'react'

function Slider() {
  return (

    <div className='flex items-center justify-center m-2'>
       <div className='slideContainer'>
       <input type="range" min="1" max="30" className="slider" /> 
              
       </div>
    
    </div>
  )
}

export default Slider