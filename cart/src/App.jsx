import React from 'react'
import ReactDOM from 'react-dom'

import { login, jwt } from './cart'
import 'remixicon/fonts/remixicon.css'

import './index.scss'

import Header from 'home/Header'
import Footer from 'home/Footer'
import CartContent from './CartContent'
const App = () => (
  <div className='mt-10 text-3xl mx-auto max-w-6xl'>
    <Header />
    <div className='my-10'>
      <CartContent />
    </div>
    <Footer />
  </div>
)
ReactDOM.render(<App />, document.getElementById('app'))
