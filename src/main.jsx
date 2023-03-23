import './init'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Notes from './Components/App'
import Home from './Components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/notes" element={<Notes/>}/>
        <Route path="*" element={<h1>404: Path Not Found</h1>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
