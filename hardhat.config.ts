import * as dotenv from 'dotenv'
import { HardhatUserConfig } from 'hardhat/types'

// Hardhat plugins
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-ethers'
import '@typechain/hardhat'
import 'hardhat-change-network'

dotenv.config()

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.5.17',
        settings: { optimizer: { enabled: true, runs: 200 } },
      },
      {
        version: '0.8.17',
        settings: { optimizer: { enabled: true, runs: 200 } },
      },
    ],
  },
  networks: {
    l1: {
      url: 'https://rpc.mainnet.oasys.games/',
      chainId: 248,
      accounts: [process.env.PRIVATE_KEY],
    },
    l2: {
      url: 'https://rpc.mainnet.oasys.homeverse.games/',
      chainId: 19011,
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 0,
    },
  },
}

export default config
