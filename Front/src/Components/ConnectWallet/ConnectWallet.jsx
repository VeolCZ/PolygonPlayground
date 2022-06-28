import React, { useContext } from 'react'
import { AiFillPlayCircle } from "react-icons/ai"
// import { SiEthereum } from "react-icons/si" //FIX FIX FIX
// import { BsInfoCircle } from "react-icons/bs"
import { TransactionContext } from '../../Context/TransactionContext'
// import { shortenAddress } from '../../Utils/shortenAddress'
// import polygonToken from '../../../assets/polygonToken.png'


const Loader = () => {
    return (
      <div className='flex justify-center items-center py-3'>
        <div className='animate-spin rounded-full h-10 w-10 border-b-2 border-blue-700'/>
      </div>
    )
  }

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    min="0"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const ConnectWallet = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;
    e.preventDefault();

    if(!addressTo || !amount || !keyword || !message) return;
    sendTransaction();
  }

  return (
    <div className='flex w-full justify-center items-center'>
      <div className='flex md:flex-row flex-col items-start justify-between xl:gap-[6rem] gap-20 md:p-20 py-6 px-4'>
        <div className='flex flex-1 justify-start flex-col md:mr-10'>
          <h1 className='text-4xl text-bold sm:text-6xl text-white text-gradient py-1 md:mt-5'>
            Send GIF's <br /> On Chain
          </h1>
          <p className='text-let mt-5 text-white font-light md:w-10/12 w-11/12 text-base'>
          Let's checkout this simple dapp which attaches a keyword to your blockchain transaction and generates a GIF based on it.
          </p>
          {!currentAccount && (
            <button type="button" onClick={connectWallet} className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]">
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}
        </div>
        <div className='flex flex-col flex-1 items-center justify-end w-full mt-[-4rem]'>
          <div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism'>
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Amount (MATIC)" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="Keyword (GIF)" name="keyword" type="text" handleChange={handleChange} />
            <Input placeholder="Message" name="message" type="text" handleChange={handleChange} />
          <div className="h-[1px] w-full bg-gray-400 my-2" />
            {isLoading ? (<Loader />) : (
              <button
                  type="button" onClick={handleSubmit} className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer">
                  Send now
                </button>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConnectWallet