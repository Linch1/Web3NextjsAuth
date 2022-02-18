import axios from 'axios';

const API_USERS = axios.create({
    baseURL:  '/api/auth'
});

async function getNonce(  publicAddress ){
    return await API_USERS.get('/nonce', { params: { publicAddress } })
    .catch( err => { return err.response })
    .then( res => { 
        if(!res) return { error: { msg: "unknown" }}
        return res.data 
    });
}
async function getUser(){
    return await API_USERS.get('/', {withCredentials: true})
    .catch( err => { return err.response })
    .then( res => { 
        if(!res) return { error: { msg: "unknown" }}
        return res.data 
    });
}

let ApiUsers = {
    getNonce,
    getUser
};

export default ApiUsers;