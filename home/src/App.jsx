import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

import Header from './Header'
import Footer from './Footer'
import HomeContent from './HomeContent'
import MainLayout from './MainLayout'

import 'remixicon/fonts/remixicon.css'

const App = () => (
  <div className='mt-10 text-3xl mx-auto max-w-6xl'>
    <Header />
    <div className='my-10'>
      <HomeContent />
    </div>
    <Footer />
  </div>
)
ReactDOM.render(<MainLayout />, document.getElementById('app'))
