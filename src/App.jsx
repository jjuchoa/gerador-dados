import React from 'react'
import{Routes, Route}from 'react-router-dom'
import Home from './components/Home';
import '@govbr-ds/core/dist/core.min.css'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default App