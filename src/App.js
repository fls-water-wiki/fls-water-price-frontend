import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import Search from './pages/Search';
import Add from './pages/Add';

import Header from './layouts/Header';

function App() {
  return (

    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fls-water-price-frontend" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/add" element={<Add />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
