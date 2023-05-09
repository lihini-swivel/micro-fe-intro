import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './index.scss'
import Header from 'home/Header'
import Footer from 'home/Footer'
import PDPContent from './PDPContent'

import 'remixicon/fonts/remixicon.css'

const App = () => {
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
            <Route path='/product/:id' element={<PDPContent />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
