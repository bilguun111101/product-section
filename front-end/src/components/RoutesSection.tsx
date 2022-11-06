import React from 'react';
import Bag from './Bag/Bag';
import Detail from './Detail/Detail';
import Navbar from './Navbar/Navbar';
import Products from './Products/Products';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';

const RoutesSection: React.FC = () => {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path='/product' element={<Products />} />
            <Route path='/detail' element={<Detail />} />
            <Route path='/bag' element={<Bag />} />
        </Routes>
    </Router>
  )
}

export default RoutesSection