require("@nomicfoundation/hardhat-toolbox");

const ALCHEMY_API_KEY = "-TEuj7vqiCkgfVpgpnuoVRJwhMfSMQQb";
const SEPOLIA_PRIVATE_KEY = "823ca69b734d4f91ffaecb6fd98d0fab0825e3560f418c726a340e854e15861c";

module.exports = {
  networks: {
    hardhat: {
    },
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    }
  },
  solidity: "0.8.9",
  etherscan: {
    apikey: "C24CWQCGW8ZWRFXP9ECIURPDBIQTNVRB42",
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
};