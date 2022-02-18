



// import web3
import Web3 from "web3";
import { Web3ReactProvider } from "@web3-react/core";

import '../styles/globals.css'
import { SessionProvider } from "next-auth/react";

// intialize web3-react
const getLibrary = (provider) => {
  return new Web3(provider);
};

function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <SessionProvider session={session}>
        {Component.auth ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </SessionProvider>
    </Web3ReactProvider>
  )
}

function Auth({ children }) {
  const { data: session, status } = useSession({required: true})
  const isUser = !!session?.user

  if (isUser) {
    return children
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>
}

export default App;
