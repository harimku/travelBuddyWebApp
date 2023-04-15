import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Home from './components/Home.js';


function App() {
  return (
    <div className="App">
      <Router>
        {/* display Header component in every page */}
        <Header />

        {/* display content based on URL route */}
        <Routes>
         <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
