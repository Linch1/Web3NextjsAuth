import axios from 'axios';

const API_AUTH = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL + '/auth'
});

async function authenitcate( signature, publicAddress ){
    let res = await API_AUTH.post('/', { signature, publicAddress }, {withCredentials: true});
    return res.data;
}

let ApiAuth = {
    authenitcate
};

export default ApiAuth;