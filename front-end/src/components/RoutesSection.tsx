import React from 'react'
import Navbar from './Navbar/Navbar';
import Products from './Products/Products';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'

const RoutesSection: React.FC = () => {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Products />} />
        </Routes>
    </Router>
  )
}

export default RoutesSection