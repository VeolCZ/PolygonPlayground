import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import Navbar from "../Components/Navbar/Navbar.jsx"
import Contact from "../Components/Contact/Contact.jsx"
import Experience from "../Components/Contact/Experience.jsx"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className='min-h-screen gradient-bg-main'>
    <Navbar />
    <Experience />
    <Contact />
  </div>  
  </React.StrictMode>
)