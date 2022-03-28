import './App.css';
import Header from './components/commons/Header';
import React from 'react'
import HomePage from './pages/HomePage';
import Favorites from './pages/Favorites'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
