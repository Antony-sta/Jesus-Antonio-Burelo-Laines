import React from 'react'
import { Menu } from '../componentes'
import {Fouter} from './../page'



 export function Layout({children}) {
  return (
    <div>
       <div className='menu'> <Menu/> </div>
        <div className='body'> {children} </div>
        <div className='footer'> <Fouter/> </div>
    </div>
  )
}

export default Layout