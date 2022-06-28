import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import Navbar from "../Components/Navbar/Navbar.jsx"
// import Swap from "../Components/Swap/Swap.jsx"
import Swap2 from "../Components/Swap/Swap2.jsx"
// import { TransactionProvider } from "../Context/TransactionContext"
import { SwapProvider } from "../Context/SwapContext"




ReactDOM.createRoot(document.getElementById('root')).render(
  <SwapProvider>
    <React.StrictMode>
      <div className='min-h-screen gradient-bg-main'>
        <Navbar />
        <Swap2 />
      </div>  
    </React.StrictMode>
  </SwapProvider>
)