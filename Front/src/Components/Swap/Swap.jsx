import React, { useContext } from 'react'
import { AiFillPlayCircle } from "react-icons/ai"
import { IoIosArrowDropdown } from "react-icons/io"
import { AiOutlineArrowDown } from "react-icons/ai"
import { TransactionContext } from '../../Context/TransactionContext'
// import { shortenAddress } from '../../Utils/shortenAddress'
import Select from "react-select";
import makeAnimated from "react-select/animated";

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
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-xl white-glassmorphism"
  />
);

const Swap = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const tokens = [
    {value: "ETH", label: "ETH"},
    {value: "MATIC", label: "MATIC"},
    {value: "KUBA", label: "KUBA"},
  ]

  const customStyles = {
    control: styles => ({ ...styles, backgroundColor: "transparent", border: "none", fontsize: "1.25rem"}),
    singleValue: styles => ({ ...styles, color: "#FFFFFF" }),

  }

  const animatedComponents = makeAnimated();

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;
    e.preventDefault();

    if(!addressTo || !amount || !keyword || !message) return;
    sendTransaction();
  }

  return (
    <div className='flex w-full justify-center items-center md:mt-[20rem] mt-[3rem]'>
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
        <div className='flex flex-col flex-1 items-center justify-end w-full md:mt-0 mt-[6rem]'>
          <div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism'>
            <div className='flex flex-row flex-none'>
                <div className='ml-4 w-[70%] text-xl'>
                  <Input placeholder="0.0" name="amount" type="number" handleChange={handleChange} />
                </div>
                <div className='mr-2 w-[35%] flex-none mt-[0.55rem] text-xl'>
                  {/* <Input placeholder="MATIC" name="addressTo" type="text" handleChange={handleChange} /> */}
                  <Select options={tokens} styles={customStyles} components={animatedComponents} placeholder="select" name='text' onChange={(e) => handleChange(e, "text")} />
                </div>
              </div>
            <div className='w-10 h-10 my-1 flex justify-center items-center'>
                <AiOutlineArrowDown fontSize={25} color="#fff"/>
            </div>
              <div className='flex flex-row flex-none'>
                <div className='ml-4 w-[70%] text-xl'>
                  <Input placeholder="0.0" name="amount" type="number" handleChange={handleChange} />
                </div>
                <div className='mr-2 w-[35%] flex-none mt-[0.55rem] text-xl'>
                  {/* <Input placeholder="MATIC" name="addressTo" type="text" handleChange={handleChange} /> */}
                  <Select options={tokens} styles={customStyles} components={animatedComponents} placeholder="select" name='text' onChange={(e) => handleChange(e, "text")} />
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