// scripts/enableChain.ts

import { ethers, network } from "hardhat";
import { Wallet } from "ethers";
import { XNFT, XNFT__factory } from "../typechain-types";

async function main() {
  if (network.name !== `ethereumSepolia`) {
    console.error(`Must be called from Ethereum Sepolia`);
    return 1;
  }

  const privateKey = process.env.PRIVATE_KEY!;
  const rpcProviderUrl = process.env.ETHEREUM_SEPOLIA_RPC_URL;

  const provider = new ethers.JsonRpcProvider(rpcProviderUrl);
  const wallet = new Wallet(privateKey);
  const signer = wallet.connect(provider);

  const xNftAddressEthereumSepolia = `0x3e23E6F7340C159faff3f7F50F4171DBeC7EaAb8`;
  const xNftAddressArbitrumSepolia = `0x75708c16FccC1b8f02E439eC734B771FDE4d84a3`;
  const chainSelectorArbitrumSepolia = `3478487238524512106`;
  const ccipExtraArgs = `0x97a657c90000000000000000000000000000000000000000000000000000000000030d40`;

  const xNft: XNFT = XNFT__factory.connect(xNftAddressEthereumSepolia, signer);

  const tx = await xNft.enableChain(
    chainSelectorArbitrumSepolia,
    xNftAddressArbitrumSepolia,
    ccipExtraArgs
  );

  console.log(`Transaction hash: ${tx.hash}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
