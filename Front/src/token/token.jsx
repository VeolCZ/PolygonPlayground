import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import Navbar from "../Components/Navbar/Navbar.jsx"
import Token from "../Components/Token/Token.jsx"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className='md:min-h-screen min-h-[120vh] gradient-bg-main'>
    <Navbar />
    <Token />
  </div>  
  </React.StrictMode>
)