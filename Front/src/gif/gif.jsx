import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import Navbar from "../Components/Navbar/Navbar.jsx"
import GifWindows from "../Components/GifWindows/GifWindows.jsx"
import ConnectWallet from "../Components/ConnectWallet/ConnectWallet.jsx"
import { TransactionProvider } from "../Context/TransactionContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <TransactionProvider>
    <React.StrictMode>
      <div className='min-h-screen gradient-bg-main'>
        <div>
          <Navbar />
          <ConnectWallet /> 
        </div>
        <GifWindows />
      </div>  
    </React.StrictMode>
  </TransactionProvider>
)