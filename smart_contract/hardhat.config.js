// https://eth-ropsten.alchemyapi.io/v2/-v-QmLMnnPZJjpEw7c8tnM82IIEebTtR

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0', //TODO check this
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/-v-QmLMnnPZJjpEw7c8tnM82IIEebTtR',
      accounts: ['eef99ef1272c1a8b34d19fb4285af01f0382923daf1d4452df162a11171c41d3']
    }
  }
}