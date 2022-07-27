import React, { useContext } from 'react'
import { TransactionContext } from "../../Context/TransactionContext.jsx"
import { shortenAddress } from '../../Utils/shortenAddress'
import useFetch from '../../Hooks/useFetch'



const TransactionCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
  const gifUrl = useFetch({keyword});

  return (
    <div className='blue-glassmorphism  m-4 flex flex-1 2xl:mx-[5rem] 2xl:min-w-[450px] 2xl:max-w-[500px] sm:min-w-[270px] sm:max-w-[300px] flex-col p-3 rounded-md hover:shadow-2xl'>
      <div className='flex flex-col items-center w-full mt-3'>
        <div className='w-full mb-6 p-2'>
          {/* <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel='noopener noreferrer'> */}
          <a href={`https://mumbai.polygonscan.com/address/${addressTo}`} target="_blank" rel='noopener noreferrer'>
            <p className='text-white text-base'>
              From: <u>{shortenAddress(addressFrom)}</u>
            </p>
          </a>
          {/* <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel='noopener noreferrer'> */}
          <a href={`https://mumbai.polygonscan.com/address/${addressTo}`} target="_blank" rel='noopener noreferrer'>
            <p className='text-white text-base'>
              To: <u>{shortenAddress(addressTo)}</u>
            </p>
          </a>
          <p className='text-white text-base'>
            Amount: {amount} MATIC
          </p>
          {message && (
            <>
              <br />
              <p className='text-white text-base'>
                Message: {message}
              </p>
            </>
          )}

        </div>
          <img src={gifUrl || url} alt="gif" className='w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover'/>
          <div className='bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl'>
            <p className='text-[#c7d0d4] font-body'>
              {timestamp}
            </p>
        </div>
      </div>
    </div>
  )
}

const GifWindows = () => {
  const { currentAccount, transactions } = useContext(TransactionContext);

  return (
    <div className='flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions'>
      <div className="flex flex-col items-center w-full mt-3">
      <div className="h-[1px] w-[65%] bg-gray-400 my-2" />
        {currentAccount ? (
          <h3 className='text-white 2xl:text-4xl text-3xl text-center my-2 xl:my-[2rem]'>
            Latest Transactions
          </h3>
        ) : (
          <h3 className='text-white 2xl:text-4xl text-3xl text-center my-2 xl:my-[2rem]'>
            Connect your account to see Latest transactions
          </h3>
        )}
        <div className="h-[1px] w-[75%] bg-gray-400 my-2" />
        <div className='flex flex-wrap justify-center items-center mt-10'>
          {transactions.slice(-6).reverse().map((transaction, i) => (
              <TransactionCard key={i} {...transaction}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GifWindows