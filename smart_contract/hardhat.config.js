
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/p205H8a8DBn5sabHWt20NG4pP7-EnlWr',
      accounts: ['6a585f10e589d985a592a53cecde28155b040367e6c6c00e51bed2021c3bc83a'],
    },
  },
};