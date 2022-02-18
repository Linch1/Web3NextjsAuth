import Web3 from 'web3';
class Web3Library {
    static getLib( library ){
        if( library ) return library
        else return new Web3("https://bsc-dataseed.binance.org/")
    }
    static validAddress( library, address ){
        let web3 = Web3Library.getLib(library);
        return web3.utils.isAddress(address)
    }
    static async getChainId( library ){
        let web3 = Web3Library.getLib(library);
        return await web3.eth.getChainId();
    }
}
export default Web3Library;