// scripts/crossChainTransfer.ts

import { ethers, network } from "hardhat";
import { Wallet } from "ethers";
import { XNFT, XNFT__factory } from "../typechain-types";

async function main() {
  if (network.name !== `arbitrumSepolia`) {
    console.error(`Must be called from Arbitrum Sepolia`);
    return 1;
  }

  const privateKey = process.env.PRIVATE_KEY!;
  const rpcProviderUrl = process.env.ARBITRUM_SEPOLIA_RPC_URL;

  const provider = new ethers.JsonRpcProvider(rpcProviderUrl);
  const wallet = new Wallet(privateKey);
  const signer = wallet.connect(provider);

  const xNftAddressArbitrumSepolia = `0x75708c16FccC1b8f02E439eC734B771FDE4d84a3`;

  const from = `0xF805636A05Bb396faF9Bb6954F4112d8c8F6B104`;
  const to = `0xF805636A05Bb396faF9Bb6954F4112d8c8F6B104`;
  const tokenId = 0; // put NFT token id here
  const destinationChainSelector = `16015286601757825753`;
  const payFeesIn = 1; // 0 - Native, 1 - LINK

  const xNft: XNFT = XNFT__factory.connect(xNftAddressArbitrumSepolia, signer);

  const tx = await xNft.crossChainTransferFrom(
    from,
    to,
    tokenId,
    destinationChainSelector,
    payFeesIn
  );

  console.log(`Transaction hash: ${tx.hash}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
