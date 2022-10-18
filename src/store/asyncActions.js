import { setupWeb3, setupContract, setNetwork, setupMarketContract, addEthereumAccounts, addTransaction, web3LoadingError } from "./actions";
import Web3 from "web3";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../contract/ABI';
import WalletConnectProvider from "@walletconnect/web3-provider";
import { MARKETPLACE_ABI, MARKETPLACE_ADDRESS } from '../contract/marketplace';

export const loadBlockchain = async (dispatch) => {
    try {
        console.log("Web3 = ", Web3);
        console.log("Web3.givenProvider = ", Web3.givenProvider);
        dispatch(setNetwork(Web3.givenProvider.chainId));
        // if (Web3.givenProvider) {

            if (Web3.givenProvider && Web3.givenProvider.chainId == 0x38	) {
            window.ethereum.on('accountsChanged', function (accounts) {
                dispatch(addEthereumAccounts(accounts));
            });

            const web3 = new Web3(Web3.givenProvider);
            await Web3.givenProvider.enable();
            dispatch(setupWeb3(web3));
            const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
            dispatch(setupContract(contract));
            const accounts = await web3.eth.getAccounts();
            dispatch(addEthereumAccounts(accounts));
            console.log("contract", contract);
            console.log("contract", contract.methods)
            const marketPlacecontract = new web3.eth.Contract(MARKETPLACE_ABI, MARKETPLACE_ADDRESS);
            dispatch(setupMarketContract(marketPlacecontract));
        }
        else {
            dispatch(web3LoadingError("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!"))
        }
    }
    catch (error) {
        console.log("Error in loading Web3 = ", error);
        if (error.code === 4001) {

            dispatch(web3LoadingError(error.message));
        }
    }
}

export const loadWalletConnect = async (dispatch) => {
    try {
        const provider = new WalletConnectProvider({

            rpc: {
                56: "https://bsc-dataseed.binance.org/",
            },
            rpcUrl: "https://bsc-dataseed.binance.org/",
            chainId: 56
        });
        if (provider) {
            await provider.enable();

            const web3 = new Web3(provider);
            console.log(web3)

            // await Web3.givenProvider.enable();
            dispatch(setupWeb3(web3));
            const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
            console.log("this is for contract", contract)

            dispatch(setupContract(contract));
            const accounts = await web3.eth.getAccounts();
            console.log("this is for accounts", accounts)
            dispatch(addEthereumAccounts(accounts));
            console.log("contract = ", contract);
            console.log("contract.methods = ", contract.methods);
        }
        else {
            dispatch(web3LoadingError("Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!"))
        }
    }
    catch (error) {
        console.log("Error in loading Web3 = ", error);
        if (error.code === 4001) {

            dispatch(web3LoadingError(error.message));
        }
    }
}
// export const buyTokensAsync = async (beneficiary, accounts, contract, etherValue, dispatch) => {
//     console.log("before transaction");
//     const price = etherValue.toString(); //change it
//     const receipt = await contract.methods
//         .buyTokens(beneficiary)
//         .send({ from: accounts[0], value: price });
//     console.log("after  transaction ", receipt);
// }
// export const buyNft = async (web3, marketPlacecontract, accounts, amount, id, trade_count, handleNavigate,
//     nftDetails, apiUrl) => {
//     const myHeaders = new Headers();
//     myHeaders.append('Content-Type', 'application/json');
//     myHeaders.append('Authorization', `Bearer ${process.env.REACT_APP_SIGN}`);
//     try {
//         const price = amount.toString();
//         console.log("idididid", price, id, trade_count)
//         const receipt = await marketPlacecontract.methods
//             .executeTrade(trade_count)
//             .send({ from: accounts[0], value: price }).on('transactionHash', async (hash) => {
//                 console.log('Received txHash: ', hash);

//                 let det = await web3.eth.getTransaction(hash);
//                 console.log('Receiveddeth: ', det);
//                 let ownerAddress = accounts[0];
//                 let id = nftDetails.id
//                 const requestOptions = {
//                     method: 'POST',
//                     headers: myHeaders,
//                     body: JSON.stringify({
//                         id, ownerAddress
//                     })
//                 };
//                 let fetchNftData = await fetch(`${apiUrl}buy_nft`, requestOptions);
//                 handleNavigate()
//             });

//         console.log("receipt", receipt);
//         return true;
//     }
//     catch (error) {
//         console.log("error", error)
//         return false;

//     }
// }


export const buyNft = async (web3, marketPlacecontract, accounts, amount, id, trade_count, handleNavigate,
    nftDetails, apiUrl) => {

    try {
        const price = amount.toString();
        console.log("idididid", price, id, trade_count)
        const receipt = await marketPlacecontract.methods
            .executeTrade(trade_count)
            .send({ from: accounts[0], value: price })

        console.log("receipt", receipt);
        return true;
    }
    catch (error) {
        console.log("error", error)
        return false;

    }
}


// export const mintNft = async (web3, contract, accounts, amount, token_id,
//     data, apiUrl, notify, handleLoading, handleNavigate, handleApiTrigger, handleMintToggle) => {
//     console.log("before transaction", contract, accounts, amount, token_id, data);

//     try {
//         let tokenIdSupply = await contract.methods
//             .getCount().call();
//             console.log("getCount",tokenIdSupply)
//         let mintFee = await contract.methods
//             .getMintingFee().call();
//         mintFee = mintFee.toString()
//         const receipt = await contract.methods
//             .mint(token_id)
//             .send({ from: accounts[0], value: mintFee }).on('transactionHash', async (hash) => {
//                 // ...
//                 console.log('Received txHash: ', hash);
//                 handleMintToggle()

//                 let det = await web3.eth.getTransaction(hash);
//                 console.log('Receiveddeth: ', det);

//                 const myHeaders = new Headers();
//                 myHeaders.append('Content-Type', 'application/json');
//                 myHeaders.append('Authorization', `Bearer ${process.env.REACT_APP_SIGN}`);
//                 let token_id = tokenIdSupply
//                 console.log("tokenIdSupply", tokenIdSupply)
//                 let id = data.id;
//                 let tx_hash = "true";
//                 let token_address = "true"
//                 let name = data.name;
//                 let owner = accounts[0];
//                 const requestOptions = {
//                     method: 'POST',
//                     headers: myHeaders,
//                     body: JSON.stringify({
//                         token_id, name, owner
//                     })
//                 };
//                 let submitForm = await fetch(`${apiUrl}update_nft_mint_status`, requestOptions)
//                 submitForm = await submitForm.json();
//                 console.log("submitForm", submitForm);
//                 handleApiTrigger()
//                 handleLoading()
//                 notify()
//                 handleNavigate()
//             })
//         console.log("receiptsss", receipt)
//         return receipt;
//     }
//     catch (error) {
//         console.log("error", error)
//         return false;
//     }
// }


export const mintNft = async (web3, contract, accounts, amount, token_id,
    data, apiUrl, notify, handleLoading, handleApiTrigger, handleMintToggle) => {
    console.log("before transaction", contract, accounts, amount, token_id, data);

    try {
        let tokenIdSupply = await contract.methods
            .getCount().call();
        console.log("getCount", tokenIdSupply)
        let mintFee = await contract.methods
            .getMintingFee().call();
        mintFee = mintFee.toString()
        const receipt = await contract.methods
            .mint(token_id)
            .send({ from: accounts[0], value: mintFee })
        console.log("receiptsss", receipt)
        return receipt;
    }
    catch (error) {
        console.log("error", error)
        return false;
    }
}


export const approveAsync = async (web3, contract, accounts) => {
    console.log("before transaction", web3, contract, accounts);

    try {
        const receipt = await contract.methods
            .setApprovalForAll(MARKETPLACE_ADDRESS, true).send({ from: accounts[0] });
        console.log("receipt", receipt)
        return receipt;
    }
    catch (error) {
        console.log("error", error)
    }
}

// export const changePriceAsync = async (web3, contract, accounts, amount, id,
//     data, handleApiTrigger, apiUrl, handleNavigate) => {
//     console.log("before transaction", contract, accounts, amount, id);

//     try {


//         const price = amount.toString();
//         let trade_count = await contract.methods.getTradeCount().call()
//         const receipt = await contract.methods
//             .openTrade(id, price)
//             .send({ from: accounts[0] }).on('transactionHash', async (hash) => {
//                 let id = data.id
//                 let ownerAddress = accounts[0];
//                 const myHeaders = new Headers();
//                 myHeaders.append('Content-Type', 'application/json');
//                 myHeaders.append('Authorization', `Bearer ${process.env.REACT_APP_SIGN}`);
//                 const requestOptions = {
//                     method: 'POST',
//                     headers: myHeaders,
//                     body: JSON.stringify({
//                         id, ownerAddress, price,
//                         trade_count
//                     })
//                 };
//                 let fetchNftData = await fetch(`${apiUrl}resell_nft`, requestOptions);
//                 handleApiTrigger()
//                 handleNavigate()

//                 fetchNftData = await fetchNftData.json();
//             });

//         console.log("receipt", receipt)
//         return true;
//     }
//     catch (error) {
//         console.log("error", error)
//         return false;

//     }
// }


export const changePriceAsync = async (web3, contract, accounts, amount, id,
    data, handleApiTrigger, apiUrl, handleNavigate) => {
    console.log("before transaction", contract, accounts, amount, id);

    try {


        const price = amount.toString();
        // let trade_count = await contract.methods.getTradeCount().call()
        const receipt = await contract.methods
            .openTrade(id, price)
            .send({ from: accounts[0] })

        console.log("receipt", receipt)
        return true;
    }
    catch (error) {
        console.log("error", error)
        return false;

    }
}


// https://www.bakeryswap.org/?utm_source=DappRadar&utm_medium=deeplink&utm_campaign=visit-website#/home

export const pauseMintingAsync = async (contract, accounts) => {
    try {
        const receipt = await contract.methods
            .pauseMinting()
            .send({ from: accounts[0] });

        console.log("receipt", receipt)
        return true;
    }
    catch (error) {
        console.log("error", error)
        return false;

    }
}

export const unPauseMintingAsync = async (contract, accounts) => {

    try {
        const receipt = await contract.methods
            .unPauseMinting()
            .send({ from: accounts[0] });
        console.log("receipt", receipt)
        return true;
    }
    catch (error) {
        console.log("error", error)
        return false;

    }
}

export const changeTaxAddressAsync = async (contract, accounts, address) => {
    try {
        const receipt = await contract.methods
            .changeTaxAddress(address)
            .send({ from: accounts[0] });
        console.log("receipt", receipt)
        return true;
    }
    catch (error) {
        console.log("error", error)
        return false;

    }
}

export const changeTaxPercentgAsync = async (contract, accounts, perc) => {
    try {
        const receipt = await contract.methods
            .changeTaxPercent(perc)
            .send({ from: accounts[0] });
        console.log("receipt", receipt)
        return true;
    }
    catch (error) {
        console.log("error", error)
        return false;

    }
}

export const getUnPauseMintingAsync = async (contract, accounts) => {

    try {
        const receipt = await contract.methods
            .paused()
            .call();
        console.log("receipt", receipt)
        return true;
    }
    catch (error) {
        console.log("error", error)
        return false;

    }
}




// export const cancelTrade = async (contract, accounts, data, handleApiTrigger, handleLoading,
//     notify, handleNavigate, apiUrl) => {
//     try {
//         let receipt = await contract.methods.cancelTrade(data.trade_count).send({ from: accounts[0] }).on('transactionHash', async (hash) => {
//             const myHeaders = new Headers();
//             myHeaders.append('Content-Type', 'application/json');
//             myHeaders.append('Authorization', `Bearer ${process.env.REACT_APP_SIGN}`);
//             let id = data.id
//             const requestOptions = {
//                 method: 'POST',
//                 headers: myHeaders,
//                 body: JSON.stringify({
//                     id
//                 })
//             };
//             let submitForm = await fetch(`${apiUrl}cancel_trade`, requestOptions)
//             submitForm = await submitForm.json();
//             console.log("submitForm", submitForm);
//             handleApiTrigger()
//             handleLoading()
//             // toast.current.show({ severity: 'success', summary: 'Success!', detail: 'Mint Successfully!' });
//             notify()
//             handleNavigate()
//         })
//     }
//     catch (error) {

//     }
// }

export const cancelTrade = async (contract, accounts, data, handleApiTrigger, handleLoading,
    notify, handleNavigate, apiUrl) => {
    try {
        let receipt = await contract.methods.cancelTrade(data.trade_count).send({ from: accounts[0] })
    }
    catch (error) {

    }
}


