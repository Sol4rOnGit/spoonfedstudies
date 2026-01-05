import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

//Pages
import { Landing } from './pages'

import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Landing/> }/>
      </Routes>
    </Router>
  )
}

export default App
