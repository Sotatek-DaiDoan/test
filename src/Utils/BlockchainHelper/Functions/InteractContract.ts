import { createContract } from "./web3_helper";
import { Contract } from "web3-eth-contract";
import { AbiItem } from "web3-utils";

class InteractContract {
  readonly provider: string = process.env.REACT_APP_POLYGON_PROVIDER || "";
  readonly abi: AbiItem[];
  readonly contractAddress: string;
  readonly contract: Contract;

  constructor(contractAddress: string, abi: AbiItem[]) {
    this.abi = abi;
    this.contractAddress = contractAddress;
    this.contract = createContract(this.provider, contractAddress, abi);
  }
  methods = () => this.contract.methods;
}

export default InteractContract;
