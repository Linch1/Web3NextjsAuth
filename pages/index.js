import Header from '../components/Header';
import Web3Login from '../components/Login/Login';
import Web3Connect from '../components/web3Connect/connect';

function Routing() {
  return (
    <div className="Routing">
        <Web3Login />
        <Header />
        <Web3Connect />
    </div>
  );
}

export default Routing;
