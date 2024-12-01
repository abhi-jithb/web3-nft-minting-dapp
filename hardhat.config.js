require('@nomiclabs/hardhat-ethers');
require('dotenv').config(); // If using .env to load private keys

module.exports = {
  solidity: "0.8.0",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545", // URL for your local network (Hardhat Node)
      accounts: [PRIVATE_KEY], // Private key for deployment account
    },
  },
};
