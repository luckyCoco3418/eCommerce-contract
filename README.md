# Dappy Contracts

We detail a few of the core contracts.

<dl>
  <dt>Dappy</dt>
  <dd>The contract to get paid</dd>
</dl>

## Installation
Pull the repository from GitHub and install its dependencies. You will need [npm](https://docs.npmjs.com/cli/install) installed.

    cd eCommerce-contract
    npm install

## Environment

Create files storing private key and infura API key.

    cp .secrets.json.template .secrets.json

Open .secrets.json with text editor, write menemonic, infra API key, and etherscan API key

## Compile

Compile the smart contracts.

    npx hardhat compile

## Deploy and Verify contracts

You can deploy contracts and verify with etherscan API key.

### Dappy

	npx hardhat deploy --network mainnet --tags mainnet_Dappy_deploy
	npx hardhat deploy --network mainnet --tags mainnet_Dappy_verify

## Print out deployed contracts

    npx hardhat run --network mainnet scripts/addresses.js
