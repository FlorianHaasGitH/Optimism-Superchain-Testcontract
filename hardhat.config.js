require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.28",
  networks: {
    "optimism-sepolia": {
      url: "https://sepolia.optimism.io",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
