import React from 'react'
import { Link } from 'react-router-dom'

import MiniCart from 'cart/MiniCart'
import Login from 'cart/Login'
import LogOut from 'cart/LogOut'

export default function Header({ app }) {
  return (
    <div className='p-5 bg-blue-500 text-white text-3xl font-bold'>
      <div className='flex'>
        <div className='flex-grow '>
          <Link to='/'>Fidget spinner world</Link>|
          <Link to={'/cart'}>Cart</Link>|
          {/* <div>
            <LogOut />
          </div> */}
        </div>
        <div className='flex-end relative'>
          <MiniCart />
          <Login />
        </div>
      </div>
    </div>
  )
}
