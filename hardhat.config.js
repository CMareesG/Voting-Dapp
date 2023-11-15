/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.11",
  networks: {
    hardhat: {},
    volta: {
      url: API_URL || "http://volta-rpc.energyweb.org",
      accounts: [PRIVATE_KEY],
      gas: 210000000,
      gasPrice: 800000000000,
    },
  },
};
