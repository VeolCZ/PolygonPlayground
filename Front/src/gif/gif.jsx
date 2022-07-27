import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import Navbar from "../Components/Navbar/Navbar.jsx"
import GifWindows from "../Components/GifWindows/GifWindows.jsx"
import ConnectWallet from "../Components/ConnectWallet/ConnectWallet.jsx"
import { TransactionProvider } from "../Context/TransactionContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TransactionProvider>
      <div className='min-h-screen gradient-bg-main'>
        <Navbar />
        <ConnectWallet />
        <GifWindows />
      </div>
    </TransactionProvider>
  </React.StrictMode>
)