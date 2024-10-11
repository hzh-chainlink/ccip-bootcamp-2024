/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  DestinationMinter,
  DestinationMinterInterface,
} from "../../../contracts/cross-chain-nft-minter/DestinationMinter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        internalType: "address",
        name: "nftAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
    ],
    name: "InvalidRouter",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [],
    name: "MintCallSuccessfull",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "messageId",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "sourceChainSelector",
            type: "uint64",
          },
          {
            internalType: "bytes",
            name: "sender",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
            ],
            internalType: "struct Client.EVMTokenAmount[]",
            name: "destTokenAmounts",
            type: "tuple[]",
          },
        ],
        internalType: "struct Client.Any2EVMMessage",
        name: "message",
        type: "tuple",
      },
    ],
    name: "ccipReceive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getRouter",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051610bb4380380610bb483398181016040528101906100329190610184565b81600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036100a55760006040517fd7f7333400000000000000000000000000000000000000000000000000000000815260040161009c91906101d3565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff168152505050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050506101ee565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061015182610126565b9050919050565b61016181610146565b811461016c57600080fd5b50565b60008151905061017e81610158565b92915050565b6000806040838503121561019b5761019a610121565b5b60006101a98582860161016f565b92505060206101ba8582860161016f565b9150509250929050565b6101cd81610146565b82525050565b60006020820190506101e860008301846101c4565b92915050565b6080516109a461021060003960008181610184015261022b01526109a46000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806301ffc9a71461004657806385572ffb14610076578063b0f479a114610092575b600080fd5b610060600480360381019061005b9190610387565b6100b0565b60405161006d91906103cf565b60405180910390f35b610090600480360381019061008b919061040e565b610182565b005b61009a610227565b6040516100a79190610498565b60405180910390f35b60007f85572ffb000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061017b57507f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b9050919050565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461021257336040517fd7f733340000000000000000000000000000000000000000000000000000000081526004016102099190610498565b60405180910390fd5b6102248161021f906108d3565b61024f565b50565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16826060015160405161029b9190610957565b6000604051808303816000865af19150503d80600081146102d8576040519150601f19603f3d011682016040523d82523d6000602084013e6102dd565b606091505b50509050806102eb57600080fd5b7fa8bcb6a278444293ea5c0bce4a4734a060a5f557bb999d8a57c4f69e96f1fe8860405160405180910390a15050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6103648161032f565b811461036f57600080fd5b50565b6000813590506103818161035b565b92915050565b60006020828403121561039d5761039c610325565b5b60006103ab84828501610372565b91505092915050565b60008115159050919050565b6103c9816103b4565b82525050565b60006020820190506103e460008301846103c0565b92915050565b600080fd5b600060a08284031215610405576104046103ea565b5b81905092915050565b60006020828403121561042457610423610325565b5b600082013567ffffffffffffffff8111156104425761044161032a565b5b61044e848285016103ef565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061048282610457565b9050919050565b61049281610477565b82525050565b60006020820190506104ad6000830184610489565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610501826104b8565b810181811067ffffffffffffffff821117156105205761051f6104c9565b5b80604052505050565b600061053361031b565b905061053f82826104f8565b919050565b600080fd5b6000819050919050565b61055c81610549565b811461056757600080fd5b50565b60008135905061057981610553565b92915050565b600067ffffffffffffffff82169050919050565b61059c8161057f565b81146105a757600080fd5b50565b6000813590506105b981610593565b92915050565b600080fd5b600080fd5b600067ffffffffffffffff8211156105e4576105e36104c9565b5b6105ed826104b8565b9050602081019050919050565b82818337600083830152505050565b600061061c610617846105c9565b610529565b905082815260208101848484011115610638576106376105c4565b5b6106438482856105fa565b509392505050565b600082601f8301126106605761065f6105bf565b5b8135610670848260208601610609565b91505092915050565b600067ffffffffffffffff821115610694576106936104c9565b5b602082029050602081019050919050565b600080fd5b6106b381610477565b81146106be57600080fd5b50565b6000813590506106d0816106aa565b92915050565b6000819050919050565b6106e9816106d6565b81146106f457600080fd5b50565b600081359050610706816106e0565b92915050565b600060408284031215610722576107216104b3565b5b61072c6040610529565b9050600061073c848285016106c1565b6000830152506020610750848285016106f7565b60208301525092915050565b600061076f61076a84610679565b610529565b90508083825260208201905060408402830185811115610792576107916106a5565b5b835b818110156107bb57806107a7888261070c565b845260208401935050604081019050610794565b5050509392505050565b600082601f8301126107da576107d96105bf565b5b81356107ea84826020860161075c565b91505092915050565b600060a08284031215610809576108086104b3565b5b61081360a0610529565b905060006108238482850161056a565b6000830152506020610837848285016105aa565b602083015250604082013567ffffffffffffffff81111561085b5761085a610544565b5b6108678482850161064b565b604083015250606082013567ffffffffffffffff81111561088b5761088a610544565b5b6108978482850161064b565b606083015250608082013567ffffffffffffffff8111156108bb576108ba610544565b5b6108c7848285016107c5565b60808301525092915050565b60006108df36836107f3565b9050919050565b600081519050919050565b600081905092915050565b60005b8381101561091a5780820151818401526020810190506108ff565b60008484015250505050565b6000610931826108e6565b61093b81856108f1565b935061094b8185602086016108fc565b80840191505092915050565b60006109638284610926565b91508190509291505056fea26469706673582212205b2ad318746c8a0e9a517c0fd6e9d3d1b50845fa3adcd51a8041c3692f67701b64736f6c63430008130033";

type DestinationMinterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DestinationMinterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DestinationMinter__factory extends ContractFactory {
  constructor(...args: DestinationMinterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    router: AddressLike,
    nftAddress: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(router, nftAddress, overrides || {});
  }
  override deploy(
    router: AddressLike,
    nftAddress: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(router, nftAddress, overrides || {}) as Promise<
      DestinationMinter & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): DestinationMinter__factory {
    return super.connect(runner) as DestinationMinter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DestinationMinterInterface {
    return new Interface(_abi) as DestinationMinterInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): DestinationMinter {
    return new Contract(address, _abi, runner) as unknown as DestinationMinter;
  }
}
