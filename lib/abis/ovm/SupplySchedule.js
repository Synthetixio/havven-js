export default [
  {
    inputs: [
      { internalType: 'address', name: '_owner', type: 'address' },
      { internalType: 'address', name: '_resolver', type: 'address' },
      {
        internalType: 'uint256',
        name: '_inflationStartDate',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_lastMintEvent',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_mintPeriodCounter',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_mintPeriodDuration',
        type: 'uint256',
      },
      { internalType: 'uint256', name: '_mintBuffer', type: 'uint256' },
      {
        internalType: 'uint256',
        name: '_fixedPeriodicSupply',
        type: 'uint256',
      },
      { internalType: 'uint256', name: '_supplyEnd', type: 'uint256' },
      {
        internalType: 'uint256',
        name: '_minterReward',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
    signature: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newRewardAmount',
        type: 'uint256',
      },
    ],
    name: 'MinterRewardUpdated',
    type: 'event',
    signature: '0x036e0c635f8b7d9314bb6f2a577046108ef0f8b5e3869fbd29fd5a448ed99d30',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'oldOwner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnerChanged',
    type: 'event',
    signature: '0xb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnerNominated',
    type: 'event',
    signature: '0x906a1c6bd7e3091ea86693dd029a831c19049ce77f1dce2ce0bab1cacbabce22',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'supplyMinted',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'numberOfPeriodsIssued',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'lastMintEvent',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'timestamp',
        type: 'uint256',
      },
    ],
    name: 'SupplyMinted',
    type: 'event',
    signature: '0x601e517d4811033fed8290c79b7823ce1ab70258da45400fe2391a3c7432edab',
  },
  {
    constant: true,
    inputs: [],
    name: 'DEFAULT_MINT_BUFFER',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xafb33185',
  },
  {
    constant: true,
    inputs: [],
    name: 'DEFAULT_MINT_PERIOD_DURATION',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xe6d7d72d',
  },
  {
    constant: true,
    inputs: [],
    name: 'MAX_ADDRESSES_FROM_RESOLVER',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xe3235c91',
  },
  {
    constant: true,
    inputs: [],
    name: 'MAX_MINTER_REWARD',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x22af2bab',
  },
  {
    constant: false,
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x79ba5097',
  },
  {
    constant: true,
    inputs: [],
    name: 'fixedPeriodicSupply',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xcbb74bf7',
  },
  {
    constant: true,
    inputs: [],
    name: 'getResolverAddressesRequired',
    outputs: [
      {
        internalType: 'bytes32[24]',
        name: 'addressesRequired',
        type: 'bytes32[24]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xab49848c',
  },
  {
    constant: true,
    inputs: [],
    name: 'inflationStartDate',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x26f75e05',
  },
  {
    constant: true,
    inputs: [],
    name: 'isMintable',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x46b45af7',
  },
  {
    constant: true,
    inputs: [
      {
        internalType: 'contract AddressResolver',
        name: '_resolver',
        type: 'address',
      },
    ],
    name: 'isResolverCached',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x631e1444',
  },
  {
    constant: true,
    inputs: [],
    name: 'lastMintEvent',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xbe801f01',
  },
  {
    constant: true,
    inputs: [],
    name: 'mintBuffer',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xaec383fc',
  },
  {
    constant: true,
    inputs: [],
    name: 'mintPeriodCounter',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x957ddd82',
  },
  {
    constant: true,
    inputs: [],
    name: 'mintPeriodDuration',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x8f3a7a49',
  },
  {
    constant: true,
    inputs: [],
    name: 'mintableSupply',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xcc5c095c',
  },
  {
    constant: true,
    inputs: [],
    name: 'minterReward',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x9bdd7ac7',
  },
  {
    constant: false,
    inputs: [{ internalType: 'address', name: '_owner', type: 'address' }],
    name: 'nominateNewOwner',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x1627540c',
  },
  {
    constant: true,
    inputs: [],
    name: 'nominatedOwner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x53a47bb7',
  },
  {
    constant: true,
    inputs: [],
    name: 'owner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x8da5cb5b',
  },
  {
    constant: true,
    inputs: [],
    name: 'periodsSinceLastIssuance',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x9cb081b2',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'uint256',
        name: 'supplyMinted',
        type: 'uint256',
      },
    ],
    name: 'recordMintEvent',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x7e7961d7',
  },
  {
    constant: true,
    inputs: [],
    name: 'resolver',
    outputs: [
      {
        internalType: 'contract AddressResolver',
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x04f3bcec',
  },
  {
    constant: true,
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'resolverAddressesRequired',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xc6c9d828',
  },
  {
    constant: false,
    inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
    name: 'setMinterReward',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x4ae26521',
  },
  {
    constant: false,
    inputs: [
      {
        internalType: 'contract AddressResolver',
        name: '_resolver',
        type: 'address',
      },
    ],
    name: 'setResolverAndSyncCache',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x3be99e6f',
  },
  {
    constant: true,
    inputs: [],
    name: 'supplyEnd',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xc4b388ca',
  },
];