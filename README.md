# Archanova Solidity
[![NPM version][npm-image]][npm-url]
[![CircleCI](https://circleci.com/gh/netgum/archanova-contracts.svg?style=svg)](https://circleci.com/gh/netgum/archanova-contracts)

Archanova [solidity](http://solidity.readthedocs.io) contracts

## Installation

```bash
$ npm i @archanova/contracts -S
```

## Usage

```typescript
import { 
  ContractNames, 
  getContractAddress, 
  getContractAbi, 
  getContractByteCodeHash, 
} from '@archanova/contracts'; 

console.log(
  'AccountProvider mainnet address:', 
  getContractAddress(ContractNames.AccountProvider, '1'),
);
console.log(
  'AccountProvider kovan address:', 
  getContractAddress(ContractNames.AccountProvider, '42'),
);
console.log(
  'Account abi:', 
  getContractAbi(ContractNames.Account),
);
console.log(
  'Account byteCodeHash:',
  getContractByteCodeHash(ContractNames.Account),
);
```

Contracts:

| Name 	| `abi` 	| `byteCodeHash` 	| `addresses` 	|
| --- | :---: | :---: | :---: |
| `Account` 	| ✅ 	| ✅ 	| 	|
| `AccountProvider` 	| ✅ 	| 	| ✅ 	|
| `AccountProxy` 	| ✅ 	| 	| ✅ 	|
| `AccountFriendRecovery` 	| ✅ 	| 	| ✅ 	|
| `ENSRegistry` 	| ✅ 	| 	| ✅ 	|
| `ENSResolver` 	| ✅ 	| 	|  	|
| `ExampleToken` 	|  	| 	| ✅ 	|
| `ERC20Token` 	| ✅ 	| 	|  	|
| `Guardian` 	|  	| 	| ✅ 	|
| `VirtualPaymentManager` 	| ✅ 	| 	| ✅ 	|

## Development

### Setup

```bash
$ git clone https://github.com/netgum/archanova-contracts.git
$ cd ./archanova-contracts
$ npm i
```

### Migration

#### Configure `env` variables:

| Name 	| Default Value 	|
| --- | ---|
| PROVIDER_MNEMONIC 	| `-` 	|
| PROVIDER_ENDPOINT 	| `http://localhost:8545` 	|
| ENS_ADDRESS 	| `-` 	|
| ENS_TOP_LABELS 	| `archanova,smartsafe,pillar` 	|
| VIRTUAL_PAYMENT_LOCK_PERIOD 	| `30 * 24 * 60 * 60` 	|

#### Start Migration:

```bash
$ npm run migrate:main
$ npm run migrate:ropsten
$ npm run migrate:rinkeby
$ npm run migrate:kovan
$ npm run migrate:sokol
$ npm run migrate:xdai
```

### Building `./dist`

```bash
$ npm run build
```

### Running Tests

```bash
$ npm test
```

## License

The MIT License

[npm-image]: https://badge.fury.io/js/%40archanova%2Fcontracts.svg
[npm-url]: https://npmjs.org/package/@archanova/contracts
