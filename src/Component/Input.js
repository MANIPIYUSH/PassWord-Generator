import React from 'react'

function Input() {
  return (
    <div className='flex items-center justify-center mt-6'>
          <div className='border-2 w-96 h-96'>
            <div className='flex flex-col'>
              <label className=''>
                 <input type="checkbox" name="password type" value="upperCase" />
                 UpperCase:
              </label>
              <label className=''>
                 <input type="checkbox" name="password type" value="lowercase" />
                 LowerCase:
              </label>
              <label className=''>
                 <input type="checkbox" name="password type" value="number" />
                 Number:
              </label>
              <label className=''>
                 <input type="checkbox" name="password type" value="symbol" />
                 Symbol:
              </label>
            </div>
              
              
              
             

        </div>
          
          
    </div>
  )
}

export default Input