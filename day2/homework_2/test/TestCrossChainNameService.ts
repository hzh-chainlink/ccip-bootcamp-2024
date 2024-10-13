import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import hre from "hardhat";
import {
  CCIPLocalSimulator,
  CrossChainNameServiceLookup,
  CrossChainNameServiceLookup__factory,
  CrossChainNameServiceReceiver,
  CrossChainNameServiceReceiver__factory,
  CrossChainNameServiceRegister,
  CrossChainNameServiceRegister__factory,
} from "../typechain-types";
import { BigNumber, utils } from "ethers";

describe("TestCrossChainNameService", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployFixture() {
    const ccipLocalSimualtorFactory = await hre.ethers.getContractFactory("CCIPLocalSimulator");
    const ccipLocalSimulator: CCIPLocalSimulator = await ccipLocalSimualtorFactory.deploy();

    const [alice] = await hre.ethers.getSigners();

    return { ccipLocalSimulator, alice };
  }

  it("Should Pass", async function () {
    const { ccipLocalSimulator, alice } = await loadFixture(deployFixture);
    let tx;

    const config: {
      chainSelector_: BigNumber;
      sourceRouter_: string;
      destinationRouter_: string;
      wrappedNative_: string;
      linkToken_: string;
      ccipBnM_: string;
      ccipLnM_: string;
    } = await ccipLocalSimulator.configuration();

    const routerAddress = config.sourceRouter_;
    const chainSelector = config.chainSelector_;
    console.log(`✅ Router Address:`, routerAddress);

    // Source Lookup
    const ccnsLookupFactory: CrossChainNameServiceLookup__factory = await hre.ethers.getContractFactory(
      "CrossChainNameServiceLookup"
    );
    const ccnsLookup: CrossChainNameServiceLookup = await ccnsLookupFactory.deploy();
    await ccnsLookup.deployed();
    console.log(
      `✅ SourceCrossChainNameServiceLookup deployed at address ${ccnsLookup.address} on ${hre.network.name} blockchain`
    );

    // Source Register
    const ccnsRegisterFactory: CrossChainNameServiceRegister__factory = await hre.ethers.getContractFactory(
      "CrossChainNameServiceRegister"
    );
    const ccnsRegister: CrossChainNameServiceRegister = await ccnsRegisterFactory.deploy(
      routerAddress,
      ccnsLookup.address
    );
    await ccnsRegister.deployed();
    console.log(
      `✅ SourceCrossChainNameServiceRegister deployed at address ${ccnsRegister.address} on ${hre.network.name} blockchain`
    );

    // Combine Source Lookup and Source Register
    tx = await ccnsLookup.setCrossChainNameServiceAddress(ccnsRegister.address);
    await tx.wait();

    // Destination Lookup
    const ccnsLookupFactory2: CrossChainNameServiceLookup__factory = await hre.ethers.getContractFactory(
      "CrossChainNameServiceLookup"
    );
    const ccnsLookup2: CrossChainNameServiceLookup = await ccnsLookupFactory2.deploy();
    await ccnsLookup2.deployed();
    console.log(
      `✅ DestinationCrossChainNameServiceLookup deployed at address ${ccnsLookup2.address} on ${hre.network.name} blockchain`
    );

    // Destination Receiver
    const ccnsReceiverFactory: CrossChainNameServiceReceiver__factory = await hre.ethers.getContractFactory(
      "CrossChainNameServiceReceiver"
    );
    const ccnsReceiver: CrossChainNameServiceReceiver = await ccnsReceiverFactory.deploy(
      routerAddress,
      ccnsLookup2.address,
      chainSelector
    );
    await ccnsReceiver.deployed();
    console.log(
      `✅ CrossChainNameServiceReceiver deployed at address ${ccnsReceiver.address} on ${hre.network.name} blockchain`
    );

    // Combine Destination Lookup and Destination Register
    tx = await ccnsLookup2.setCrossChainNameServiceAddress(ccnsReceiver.address);
    await tx.wait();

    // EnableChain from Register to Receiver
    tx = await ccnsRegister.enableChain(chainSelector, ccnsReceiver.address, 200_000);
    await tx.wait();
    console.log(`✅ New Chain enabled, transaction hash: ${tx.hash}`);

    // Fund CrossChainNameServiceRegister Contract
    tx = await alice.sendTransaction({ to: ccnsRegister.address, value: utils.parseEther("1") });
    await tx.wait();
    const balance = await hre.ethers.provider.getBalance(ccnsRegister.address);
    console.log(`ℹ️  CrossChainNameServiceRegister balance (in wei): ${balance}`);

    const ccnsRegister_alice: CrossChainNameServiceRegister = CrossChainNameServiceRegister__factory.connect(
      ccnsRegister.address,
      alice
    );

    // Register "alice.ccns"
    tx = await ccnsRegister_alice.register("alice.ccns");
    await tx.wait();
    console.log(`✅ ccns-register finished with the execution, Transaction hash: ${tx.hash}`);

    const ccnsLookup_alice: CrossChainNameServiceLookup = CrossChainNameServiceLookup__factory.connect(
      ccnsLookup2.address,
      alice
    );

    // Lookup "alice.ccns"
    const lookupedAddress = await ccnsLookup_alice.lookup("alice.ccns");
    console.log(`✅ ccns-lookup finished with the execution.`);

    // Assert
    console.log(`ℹ️ ccns-register address:`, alice.address);
    console.log(`ℹ️ ccns-lookup address:`, lookupedAddress);
    expect(lookupedAddress).to.equal(alice.address);
  });
});
