import React from 'react'
import zidl from '../../../assets/zidlCoinFin.png'


const Token = () => {
  return (
  <div className='h-[120vh] md:mt-[5rem] mt-[-1.5rem]'>
    <div className='flex w-full justify-center items-center md:mt-[-2.5rem] mt-[1.5rem]'>
      <div className='flex md:flex-row flex-col items-start justify-between gap-15 md:p-20 py-6 px-4'>
        <div className='flex flex-1 justify-start flex-col md:mr-10'>
          <h1 className='text-4xl text-bold sm:text-6xl text-white text-gradient py-1 md:mt-5'>
            ZIDL <br /> Coin
          </h1>
          <p className='text-let mt-5 text-white font-light md:w-10/12 w-11/12 text-base'>
            A simple  ERC-20 based crypto currency deployed on polygon.
          </p>
        </div>
        <div className='flex flex-col flex-1 items-center justify-end w-full md:mt-[-0.75rem] mt-[4rem]'>
          <div className='p-0 flex flex-col justify-start items-center rounded-full'>
            <img src={zidl} className="w-[20rem] h-auto" alt="logo" />
          </div>
        </div>
      </div>
    </div>
    <div className="window-bg md:mx-[25%] mx-5 md:max-w-4xl md:mt-[8rem] mt-[2rem] float-left border-2 rounded-md p-7">
        <p className="text-white text-center">
          ZIDL coin is a written in soliditiy as a cut down version of ERC-20 standart token.
        </p>
      </div>
      <div className="window-bg md:mx-[25%] mx-5 md:max-w-4xl md:mt-[6rem] mt-[2rem] float-right border-2 rounded-md p-7">
        <p className="text-white text-center">
          You can easily buy ZIDL coin for MATIC at a fixed rate. To do so visit swap.
        </p>
      </div>
      <div className="window-bg md:mx-[25%] mx-5 md:max-w-4xl md:mt-[6rem] mt-[2rem] float-left border-2 rounded-md p-7">
        <p className="text-white text-center">
          To view ZILD in you wallet click on import token under assets and put
          <a href='https://mumbai.polygonscan.com/address/0x2e78510A11118030cE2aFdd74Bb990b982CF8044' alt="0x2e78510A11118030cE2aFdd74Bb990b982CF8044"> <u>contract</u> </a>
           in the contract address field.
        </p>
    </div>
  </div>
  )
}

export default Token