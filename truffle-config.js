module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    }
  }
};


//uncomment the block below to run it on rinkeby testnet
//add your wallet mnemonic letters
// and your infura / or any network provider


/*//1. Initialize `truffle-hdwallet-provider`
const HDWalletProvider = require("truffle-hdwallet-provider");
// Set your own mnemonic here
const mnemonic = "wallet mnemonic";

// Module exports to make this configuration available to Truffle itself
module.exports = {
  // Object with configuration for each network
  networks: {
    // Configuration for mainnet
    mainnet: {
      provider: function () {
        // Setting the provider with the Infura Rinkeby address and Token
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/........
      },
      network_id: "1"
    },
    // Configuration for rinkeby network
    rinkeby: {
      // Special function to setup the provider
      provider: function () {
        // Setting the provider with the Infura Rinkeby address and Token
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/.........")
      },
      network_id: 4 //Fill in the `network_id` for the Rinkeby network.
    }
  }
}; */
