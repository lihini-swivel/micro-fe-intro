import React, { useState, useEffect } from 'react'
import { jwt, login } from './cart'

import Login from './Login'
import MiniCart from './MiniCart'

export default function CartContent() {
  const [token, setToken] = useState('')

  useEffect(() => {
    login('sally', '123')
    return jwt.subscribe((val) => setToken(val ?? ''))
  }, [])

  return (
    <div>
      <div>JWT:{token}</div>
      <div>
        <Login />
        <MiniCart />
      </div>
    </div>
  )
}
