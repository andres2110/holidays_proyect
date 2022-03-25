import './App.css';
import Header from './components/Header';
import React from 'react'
import Main from './components/Main';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
