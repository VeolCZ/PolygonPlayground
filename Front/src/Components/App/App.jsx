import logo from '../../../assets/logo.png'

function App() {
  return (
    <div className="md:h-[120vh]">
      <div className="flex-none">
        <div className="flex flex-col mt-[7vh] items-center text-white justify-center text-2xl md:text-5xl text-center ">
          <img src={logo} className="App-logo" alt="logo" />
          <p className='md:mt-[5rem] mt-[2.5rem] font-bold'>
            Welcome to Polygon Playground

          </p>
        </div>
        <div className="window-bg md:mx-[25%] mx-5 md:max-w-4xl md:mt-[10rem] mt-[4rem] float-left border-2 rounded-md p-7">
          <p className="text-white text-center">
            This website serves as a demostration therefore it is using the Polygon-Mumbai testnet.
          </p>
        </div>
        <div className="window-bg md:mx-[25%] mx-5 md:max-w-4xl md:mt-[6rem] mt-[2rem] float-right border-2 rounded-md p-7">
          <p className="text-white text-center">
            It's main purpuse is to serve as a showcase of simple dapps deployed on polygon.
          </p>
        </div>
        <div className="window-bg md:mx-[25%] mx-5 md:max-w-4xl md:mt-[6rem] mt-[2rem] float-left border-2 rounded-md p-7">
          <p className="text-white text-center">
            To interact with smart-contracts visit the
            <a href='https://portal.thirdweb.com/guides/get-matic-on-polygon-mumbai-testnet-faucet' alt="Mumbai matic faucet" target="_blank" rel='noopener'> <u>official matic faucet</u> </a>
            and get free testnet matic.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
