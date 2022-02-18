import React, { useEffect, useRef, useState } from "react";

// import enums
import EnumWallet from "../../enum/wallet";

// import web3
import {useWeb3React, UnsupportedChainIdError, NoEthereumProviderError, UserRejectedRequestError } from '@web3-react/core';



//img import
import Image from "next/image";
import svg_metamask from "../../img/wallets/metamask.svg";
import svg_trustwallet from "../../img/wallets/trustwallet.svg";
import svg_walletconnect from "../../img/wallets/walletconnect.svg";

// import utils
import connectors from "../../web3Connectors/connectors";


const Web3Connect = ( props ) => {

    const [ walletType, setWalletType ] = useState(undefined);
    const { activate } = useWeb3React();
    
    // call the connect wallet function
    const connectWallet = async (type) => {
        await activate( connectors[type] );
    }

    return(
        <div style={{ margin: '50px'}}>
            <h3>Connection Methods</h3>
            <div className="col-6">
                <div className="wallet-conect-box mb-2 d-flex flex-column justify-content-center align-items-center ">
                    <Image src={svg_metamask} alt="metamask" />
                    <button 
                    onClick={() => { setWalletType(EnumWallet.METAMASK); connectWallet(EnumWallet.METAMASK);} }>
                        Connect with metamask
                    </button>
                </div>
            </div>

            <div className="col-6">
                <div className="wallet-conect-box mb-2 d-flex flex-column justify-content-center align-items-center ">
                    <Image src={svg_walletconnect} alt="walletconnect" />
                    <span></span>
                    <button 
                    onClick={() => { setWalletType(EnumWallet.WALLETCONNECT); connectWallet(EnumWallet.WALLETCONNECT); } }>
                        Connect with WalletConnect
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Web3Connect;