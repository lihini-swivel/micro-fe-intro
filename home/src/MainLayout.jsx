import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './index.scss'
import Header from 'home/Header'
import Footer from 'home/Footer'
import PDPContent from 'pdp/PDPContent'
import HomeContent from 'home/HomeContent'
import CartContent from 'cart/CartContent'

import 'remixicon/fonts/remixicon.css'

export default function MainLayout() {
  return (
    // <div>
    //   <h1>my test</h1>
    //   <PDPContent />
    // </div>
    <Router>
      <div className='mt-10 text-3xl mx-auto max-w-6xl'>
        <Header />

        <div className='my-10'>
          <Routes>
            <Route exact path='/' element={<HomeContent />} />
            <Route path='/product/:id' element={<PDPContent />} />
            <Route path='/cart' element={<CartContent />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}
