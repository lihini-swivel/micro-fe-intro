import React, { useState } from 'react'

import { login, useLoggedIn } from './cart'

export default function Login() {
  const LoggedIn = useLoggedIn()
  const [showLogin, setShowLogin] = useState(false)

  const [userName, setUserName] = useState('sally')
  const [password, setPassword] = useState('123')

  if (LoggedIn) return null

  return (
    <>
      <span onClick={() => setShowLogin(!showLogin)}>
        <i className='ri-fingerprint-line text-2xl' id='showlogin'></i>
      </span>
      {showLogin && (
        <div
          className='absolute p-5 border-4 border-blue-800 bg-white rounded-xl text-black'
          style={{
            width: 300,
            top: '2rem',
            // left: -250,
          }}
        >
          <input
            type='text'
            placeholder='User Name'
            value={userName}
            onChange={(evt) => setUserName(evt.target.value)}
            className='border text-sm border-gray-400 p-2 rounded-md w-full'
          />
          <input
            type='password'
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            className='border text-sm border-gray-400 p-2 rounded-md w-full mt-3'
          />
          <button
            className='bg-green-900 text-white py-2 px-5 rounded-md text-sm mt-5'
            onClick={() => login(userName, password)}
            id='loginbtn'
          >
            Login
          </button>
          <button
            className='outline  outline-1 outline-green-900 text-black py-2 px-5 rounded-md text-sm mt-5'
            onClick={() => setShowLogin(!showLogin)}
            id='loginbtn'
          >
            close
          </button>
        </div>
      )}
    </>
  )
}
