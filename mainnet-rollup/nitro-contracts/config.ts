import { ethers } from 'ethers'

// 90% of Geth's 128KB tx size limit, leaving ~13KB for proving
// This need to be adjusted for Orbit chains
export const maxDataSize = 104857

export const config = {
  rollupConfig: {
    confirmPeriodBlocks: ethers.BigNumber.from('1'),
    extraChallengeTimeBlocks: ethers.BigNumber.from('1'),
    stakeToken: ethers.constants.AddressZero,
    baseStake: ethers.utils.parseEther('0.01'),
    wasmModuleRoot:
      '0x184884e1eb9fefdc158f6c8ac912bb183bf3cf83f0090317e0bc4ac5860baa39',
    owner: '0xBf34E1Af2303bd939473fF10F96033EF89a98a6a',
    loserStakeEscrow: ethers.constants.AddressZero,
    chainId: ethers.BigNumber.from('210434'),
    chainConfig:
      '{"chainId":210434,"homesteadBlock":0,"daoForkBlock":null,"daoForkSupport":true,"eip150Block":0,"eip150Hash":"0x0000000000000000000000000000000000000000000000000000000000000000","eip155Block":0,"eip158Block":0,"byzantiumBlock":0,"constantinopleBlock":0,"petersburgBlock":0,"istanbulBlock":0,"muirGlacierBlock":0,"berlinBlock":0,"londonBlock":0,"clique":{"period":0,"epoch":0},"arbitrum":{"EnableArbOS":true,"EnableEspresso":true,"AllowDebugPrecompiles":false,"DataAvailabilityCommittee":false,"InitialArbOSVersion":10,"InitialChainOwner":"0xBf34E1Af2303bd939473fF10F96033EF89a98a6a","GenesisBlockNum":0}}',
    genesisBlockNum: ethers.BigNumber.from('0'),
    sequencerInboxMaxTimeVariation: {
      delayBlocks: ethers.BigNumber.from('5760'),
      futureBlocks: ethers.BigNumber.from('12'),
      delaySeconds: ethers.BigNumber.from('86400'),
      futureSeconds: ethers.BigNumber.from('3600'),
    },
    espressoTEEVerifier: '0xE68c322e548c3a43C528091A3059F3278e0274Ed',
  },
  validators: [
    '0xBf34E1Af2303bd939473fF10F96033EF89a98a6a',
  ],
  batchPosters: ['0xc1c6c604fD1Dc129196B77114012C2D809D93399'],
  batchPosterManager: '0xc1c6c604fD1Dc129196B77114012C2D809D93399'
}
