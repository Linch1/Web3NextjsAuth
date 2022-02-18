

import crypto from "crypto";
import Web3 from "web3";
import Services from "../../../server/services/index.js";

async function nonce(req, res) {
    if(req.method === 'GET') {
        let address = req.query.publicAddress;
        if(!address) return res.status(400).json({error: { message: "missing address"}})
        if(!Web3.utils.isAddress(address)) return res.status(400).json({error: { message: "invalid address"}})
        
        let nonce = crypto.randomBytes(16).toString('base64');

        if( !await Services.user.exists( address ) ) 
            await Services.user.intializeUser( address, nonce );
        else 
            await Services.user.updateNonce( address, nonce );

        return res.status(200).json({ success: { message: "retrived nonce", data: nonce }});
    }
}

export default nonce;