import React from 'react'
import { Menu } from '../Componente/Menu'
import { Fouter } from '../Page/Fouter'

export function Layaut({children}) {
  return (
    <div>
        <div className='menu'>
            <Menu/>
        </div>
        <div className='body'>{children} </div>
        <div className='footer'>
            <Fouter />
        </div>
    </div>
  )
}

export default Layaut