import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './global.scss'
import Home from './pages/Home/index'
import Apropos from './pages/Apropos/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);


