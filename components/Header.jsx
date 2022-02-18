import React from "react";

// import web3
import {useWeb3React } from '@web3-react/core';

const Header = ( props ) => {

    const { account } = useWeb3React();

    return(
        <div style={{ margin: '50px'}}>
            <h3>Connected Infos</h3>
            { account ? 'Connected Wallet: ' + account : 'Connected Wallet: None' } <br />
            Connect a wallet through one of the options below 
        </div>
    )
}

export default Header;