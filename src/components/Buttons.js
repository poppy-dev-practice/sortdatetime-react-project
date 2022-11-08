import React from 'react'

const Buttons = ({unset}) => {
  
   



  return (
    <div className='layout-row align-items-center justify-content-center my-20 navigation'>
    <label className='form-hint mb-0 text-uppercase font-weight-light'>
        Sort By
    </label>
    <button className='small' onClick={()=>unset(false)}>most upvoted</button>
    <button className='small' onClick={()=>unset(true)}>most recent</button>
    </div>
  )
}

export default Buttons