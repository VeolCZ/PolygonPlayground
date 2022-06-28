import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { GIFABI, GIFaddress } from "../Utils/constants.js";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(GIFaddress, GIFABI, signer);

    return transactionContract;
}

export const TransactionProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState(""); // initial state
    const [formData, setFormData] = useState({ addressTo: "", amount: "", keyword: "", message: ""});
    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));
    const [transactions, setTransactions] = useState([]);
    
    const handleChange = (e, name) => {
        setFormData((prevState) => ({...prevState, [name]: e.target.value}));
    }

    const getAllTransactions = async () => {
        try {
            if(!ethereum) return alert("Please connect Metamask");
            const transactionContract = getEthereumContract();

            const availableTransactions = await transactionContract.getAllTransactions();

            const structuredTransactions = availableTransactions.map((transaction) => ({
                addressTo: transaction.receiver,
                addressFrom: transaction.sender,
                timestamp: new Date(transaction.timestamp.toNumber()*1000).toLocaleString(),
                message: transaction.message,
                keyword: transaction.keyword,
                amount: parseInt(transaction.amount._hex) / (10 ** 18)
            }))

            console.log(structuredTransactions);
            setTransactions(structuredTransactions);
            
        } catch (error) {
            console.log(error);
        }
    }

    const checkIfWalletIsConnected = async () => {
        try {
        if(!ethereum) return alert("Please connect Metamask");

            const accounts = await ethereum.request({ method: "eth_accounts" });

            if(accounts.length) {
            setCurrentAccount(accounts[0]);
            getAllTransactions();
        } else {
            console.log("no account found (TransactionContext.jsx // checkIfWalletIsConnected)")
        }
        console.log(accounts);
            
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object. 1");
        }
    }

    const checkIfTransactionsExist = async () => {
        try {
            if (ethereum) {
                const transactionsContract = getEthereumContract();
                const currentTransactionCount = await transactionsContract.getTransactionCount();
        
                window.localStorage.setItem("transactionCount", currentTransactionCount);
              }

        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object. 2");
        }
    }

    const connectWallet = async () => { 
        try {
            if(!ethereum) return alert("Please connect your Metamask wallet to use this service");

            const accounts = await ethereum.request({ method: "eth_requestAccounts" });
            setCurrentAccount(accounts[0]);
            getEthereumContract(); //WEIRD
            

        } catch (error) {
            console.log(error);;
            throw new Error("No ethereum object. 3");
        }
    }

    const sendTransaction = async () => {
        try {
            if(!ethereum) return alert("Please connect Metamask");
            const { addressTo, amount, keyword, message } = formData;
            const transactionContract = getEthereumContract();
            const parsedAmount = ethers.utils.parseEther(amount);
            
            await ethereum.request({
                method: "eth_sendTransaction",
                params: [{from: currentAccount, to: addressTo, gas: "0x5208", value: parsedAmount._hex}],//gas in gwei (hex number) idk why
            });

            // Might consider removing ^^

            const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword);

            setIsLoading(true);
            console.log(`Loading - ${transactionHash.hash}`);
            await transactionHash.wait();
            console.log(`Success - ${transactionHash.hash}`);
            setIsLoading(false);

            const transactionCount = await transactionContract.getTransactionCount();
            setTransactionCount(transactionCount.toNumber());


        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object. 4");
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
        checkIfTransactionsExist();
    }, [transactionCount]);

    return (
        <TransactionContext.Provider
        value={{ 
            transactionCount,
            connectWallet,
            transactions,
            currentAccount,
            isLoading,
            sendTransaction,
            handleChange,
            formData, }}>
            {children}
        </TransactionContext.Provider>
    )
}