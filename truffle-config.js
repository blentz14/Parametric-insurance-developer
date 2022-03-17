const HDWalletProvider = require('@truffle/hdwallet-provider')
const path = require('path');
require('dotenv').config();

module.exports = {
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY
  },
  networks: {
    kovan: {
      // must be a thunk, otherwise truffle commands may hang in CI
      provider: () =>
        new HDWalletProvider({
          mnemonic: {
            phrase: "cancel jungle home wreck home candy park churn version start build wild"
          },
          providerOrUrl: "https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
          shareNonce: true
        }),
      network_id: '42',
    },



    dev: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
    },

 
    live: {
      provider: () => {
        return new HDWalletProvider(process.env.MNEMONIC, process.env.RPC_URL)
      },
      network_id: '*',
      // ~~Necessary due to https://github.com/trufflesuite/truffle/issues/1971~~
      // Necessary due to https://github.com/trufflesuite/truffle/issues/3008
      skipDryRun: true,
    }
  },
  compilers: {
    solc: {
      version: '0.6.6',
    },
  },
  contracts_build_directory: path.join(__dirname, "/client/src/abi"),
}
