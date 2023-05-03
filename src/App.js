import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import Reviews from './components/Reviews/Reviews.js';
import Account from './components/Account/Account.js';


function App() {
  const [searchResults, setSearchResults] = useState({});

  return (
    <div className="App">
      <Router>
        {/* display Header component in every page */}
        <Header setSearchResults={setSearchResults} />

        {/* display content based on URL route */}
        <Routes>
          <Route path="/" element={<Home searchResults={searchResults} />} />
          <Route path="/writeReview" element={<Reviews />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
