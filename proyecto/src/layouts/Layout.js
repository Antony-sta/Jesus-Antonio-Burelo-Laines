import React from 'react'
import { Menu } from '../componentes'




export function Layout({ children }) {
  return (
    <div>
      <div className='menu'> <Menu /> </div>
      <div className='body'> {children} </div>

    </div>
  )
}

export default Layout