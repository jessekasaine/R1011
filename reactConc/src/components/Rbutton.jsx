import React, { useContext } from 'react'
import { GlobalContext } from '../context/ContextFile'

function Rbutton() {
    const {count, handleClickCount} = useContext(GlobalContext)
    
  return (
    <div className='text-center'>
          <p>{ count}</p>
          <button onClick={handleClickCount} className='bg-red-500 text-white py-1 px-2 rounded-lg'>CLICK</button>
    </div>
  )
}

export default Rbutton
