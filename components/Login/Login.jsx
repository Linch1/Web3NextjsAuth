import React, { useEffect, useRef, useState } from "react";

// import web3
import {useWeb3React } from '@web3-react/core';
import Web3Library from "../../web3Actors/Library";
import ApiAuth from "../../api/auth";
import ApiUsers from "../../api/users";

// next-aut
import { signIn, signOut, useSession } from "next-auth/react";

const Web3Login = ( props ) => {

    const { data: session, status } = useSession();

    const [ retrivedInfos, setRetrivedInfos ] = useState("NONE");
    const { account, library } = useWeb3React();
    

    console.log( session, status )

    const login = async () => {
        if( !account ) return;

        let res = await ApiUsers.getNonce( account );
        if( !res.success ) return console.log('Cannot retrive nonce');
        let nonce = res.success.data;

        let web3 = Web3Library.getLib( library );
        let textToSign = `${process.env.REACT_APP_AUTH_TEXT}${nonce}`;
        let sign = await web3.eth.personal.sign( textToSign, account);
        let authResult = await signIn( "credentials" , { redirect: false, signature: sign, address: account } );
    }
    const logout = async () => {
        signOut();
    }

    return(
        <div style={{ margin: '50px'}}>
            <h3>Auth Panel</h3>
            {
                session && status === 'authenticated' ? 
                <React.Fragment>
                    <p><i>Logged in</i></p>
                    <p><i>User id: {session.user._id}</i></p> <br />
                    <button onClick={logout}> Logout </button>
                </React.Fragment>
                : 
                <React.Fragment>
                    { !account && <p>Remind to connect a wallet before you can log in.</p> }
                    <button onClick={login}> Login </button>
                </React.Fragment>
            }
        </div>
    )
}

Web3Login.auth = true;
export default Web3Login;