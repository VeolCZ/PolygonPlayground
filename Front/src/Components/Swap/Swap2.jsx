import React, { useContext, useState } from 'react'
import { AiFillPlayCircle } from "react-icons/ai"
import { HiOutlineSwitchVertical } from "react-icons/hi"
import { SwapContext } from '../../Context/SwapContext'
import { shortenAddress } from '../../Utils/shortenAddress'
import polygonToken from '../../../assets/polygonToken.png'
import { BsInfoCircle } from "react-icons/bs"


const Loader = () => {
    return (
      <div className='flex justify-center items-center py-3'>
        <div className='animate-spin rounded-full h-10 w-10 border-b-2 border-blue-700'/>
      </div>
    )
  }

const Swap = () => {
  const { currentAccount, setSellToken, connectWallet, sendTransaction, handleChange, formData, isLoading } = useContext(SwapContext);
  
  const [fromToken, setFromToken] = useState("MATIC")
  const [toToken, setToToken] = useState("ZIDL")
  const [calculatedAmount, setCalculatedAmount] = useState(0.0)


  const handleSwitch = () => {
    if(fromToken == "MATIC") {
      setSellToken(true)
      setFromToken("ZIDL")
      setToToken("MATIC")
    }
    else {
      setSellToken(false)
      setFromToken("MATIC")
      setToToken("ZIDL")
    }
    setCalculatedAmount(0)
    document.getElementById("enterAmount").value = 0; 
  }

  const handleInput = (e) => {
    handleAmountChange(e)
    handleChange(e)
  }

  const handleAmountChange = (e) => { //Somehow broken 0.01M == 0.1 ZIDL but shows diffrent
    if(fromToken == "MATIC") {
      setCalculatedAmount(e.target.value * 100)
    }
    else {
      setCalculatedAmount(e.target.value * 0.01)
    }
  }

  const handleSubmit = (e) => {
    handleInput(e)
    const {amount} = formData;
    e.preventDefault();
    if(!amount) return;
    sendTransaction();
  }

  return (
    <div className='flex w-full justify-center items-center md:mt-[20rem] mt-[1.5rem]'>
      <div className='flex md:flex-row flex-col items-start justify-between gap-15 md:p-20 py-6 px-4'>
        <div className='flex flex-1 justify-start flex-col md:mr-10'>
          <h1 className='text-4xl text-bold sm:text-6xl text-white text-gradient py-1 md:mt-5'>
            Swap your <br /> Tokens
          </h1>
          <p className='text-let mt-5 text-white font-light md:w-10/12 w-11/12 text-base'>
            Let's checkout this dapp which serves as a simple swap. You can swap between several Tokens at fixed rate.
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
        <div className='flex flex-col flex-1 items-center justify-end w-full md:mt-[-6rem] mt-[3rem]'>
          <div className='p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-[90%] my-5 eth-card white-glassmorpism'>
            <div className='flex justify-between flex-col w-full h-full'>
              <div className='flex justify-between items-start'>
                <div className='w-10 h-10 rounded-full border-2 border-white flex justify-center items-center'>
                  <img src={polygonToken} />
                </div>
                  <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className='text-white font-light text-sm'>
                  {shortenAddress(currentAccount)}
                </p>
                <p className='text-white font-semibold text-lg mt-1'>
                  Matic
                </p>
              </div>
            </div>
          </div>
          <div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism'>
            <div className='flex flex-row flex-none'>
                <div className='ml-6 w-[70%] text-xl'>
                <input
                  readOnly
                  value={calculatedAmount}
                  type="number"
                  className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-xl white-glassmorphism"
                />
                </div>
                <div className='mr-2 w-[35%] flex-none mt-[1rem] text-xl text-white'>
                  {toToken}
                </div>
              </div>
            <div className='w-10 h-10 my-5 flex justify-center items-center'>
                <HiOutlineSwitchVertical color="#fff" onClick={() => handleSwitch()} className=" text-3xl border-[1px] p-1 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"/>
            </div>
              <div className='flex flex-row flex-none'>
                <div className='ml-6 w-[70%] text-xl'>
                <input
                  id = "enterAmount"
                  placeholder="0.0"
                  type="number"
                  step="0.0001"
                  min="0"
                  onChange={(e) => handleInput(e)}
                  className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-xl white-glassmorphism"
                />
                </div>
                <div className='mr-2 w-[35%] flex-none mt-[1rem] text-xl text-white'>
                  {fromToken}
                </div>
              </div>
          <div className="h-[1px] w-full bg-gray-400 mb-2 mt-5" />
            {isLoading ? (<Loader />) : (
              <button
                type="button" onClick={handleSubmit} className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer">
                Swap
              </button>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Swap