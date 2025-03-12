import React from 'react'
import {Fouter} from './../page'



 export function Layout({children}) {
  return (
    <div>
       
        <div className='body'> {children} </div>
        <div className='footer'> <Fouter/> </div>
    </div>
  )
}

export default Layout