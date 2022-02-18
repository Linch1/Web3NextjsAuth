import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

// import enum
import EnumChainId from '../enum/chain.id';
import EnumWallet from "../enum/wallet";

const injected = new InjectedConnector({
  supportedChainIds: [EnumChainId.BSC, EnumChainId.RINKEBY, EnumChainId.BSC_TESTNET],
});

const walletconnect = new WalletConnectConnector({
  rpc: { 
    [EnumChainId.BSC] : "https://bsc-dataseed4.binance.org/", 
    [EnumChainId.RINKEBY]: "https://rinkeby.infura.io/v3/6e11ac17a8df4ee0b292028cf4e17325",
    [EnumChainId.BSC_TESTNET]: "https://data-seed-prebsc-1-s1.binance.org:8545/"
  },
  qrcode: true,
  pollingInterval: 12000,
});

let to_export = {
  [EnumWallet.METAMASK]: injected,
  [EnumWallet.TRUSTWALLET]: walletconnect,
  [EnumWallet.WALLETCONNECT]: walletconnect
};
export default to_export;