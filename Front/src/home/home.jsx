import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import Navbar from "../Components/Navbar/Navbar.jsx"
import App from "../Components/App/App.jsx"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className='min-h-screen gradient-bg-main'>
    <Navbar />
    <App /> 
  </div>  
  </React.StrictMode>
)