import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { SWAPABI, SWAPaddress, TOKENaddress, TOKENABI } from "../Utils/constants.js";

export const SwapContext = React.createContext();

const { ethereum } = window;

const getSwapContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const swapContract = new ethers.Contract(SWAPaddress, SWAPABI, signer);

    return swapContract;
}

const getTokenContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const swapContract = new ethers.Contract(TOKENaddress, TOKENABI, signer);

    return swapContract;
}

export const SwapProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState(""); // initial state
    const [formData, setFormData] = useState({amount: ""});
    const [isLoading, setIsLoading] = useState(false);
    const [sellToken, setSellToken] = useState(false);

    
    const handleChange = (e) => {
        setFormData((prevState) => ({...prevState, amount: e.target.value}));
        // console.log(formData)
    }

    const checkIfWalletIsConnected = async () => {
        try {
        if(!ethereum) return alert("Please connect Metamask");

            const accounts = await ethereum.request({ method: "eth_accounts" });

            if(accounts.length) {
            setCurrentAccount(accounts[0]);
        } else {
            console.log("no account found (TransactionContext.jsx // checkIfWalletIsConnected)")
        }
        // console.log(accounts);
            
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object.");
        }
    }

    const connectWallet = async () => { 
        try {
            if(!ethereum) return alert("Please connect your Metamask wallet to use this service");

            const accounts = await ethereum.request({ method: "eth_requestAccounts" });
            setCurrentAccount(accounts[0]);
            getSwapContract();
            

        } catch (error) {
            console.log(error);;
            throw new Error("No ethereum object.");
        }
    }

    const sendTransaction = async () => {
        try {
            if(!ethereum) return alert("Please connect Metamask");
            const { amount } = formData;
            const swapContract = getSwapContract();
            const parsedAmount = ethers.utils.parseEther(amount);
            const SWAPaddress = "0x3eC6e9DdE75B211f06FA368766876Eb3536b6cC8";
            
            const tokenContract = getTokenContract();
            let transactionHash;

            if(sellToken) {
                console.log("sell")
               await tokenContract.approve(SWAPaddress, parsedAmount)
               transactionHash = await swapContract.sellTokens(parsedAmount);
            }
            else {
                console.log("buy")
                transactionHash = await swapContract.buyTokens({from: currentAccount, value: parsedAmount}); 
            }

            setIsLoading(true);
            console.log(`Loading - ${transactionHash.hash}`);
            await transactionHash.wait();
            console.log(`Success - ${transactionHash.hash}`);
            setIsLoading(false);


        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object.");
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
    });

    return (
        <SwapContext.Provider
        value={{ 
            connectWallet,
            currentAccount,
            isLoading,
            sendTransaction,
            handleChange,
            setSellToken,
            formData, }}>
            {children}
        </SwapContext.Provider>
    )
}