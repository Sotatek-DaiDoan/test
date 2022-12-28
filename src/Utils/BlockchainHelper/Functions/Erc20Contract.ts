import { AbiItem } from "web3-utils";
import { default as ABI_ERC20 } from "../ABI/ABI_ERC20.json";
import InteractContract from "./InteractContract";

class InteractErc20Contract {
  readonly abi: AbiItem[] = (ABI_ERC20 as AbiItem[] | undefined) || [];
  readonly contractAddress: string;
  readonly interactContract: InteractContract;

  constructor(contractAddress: string, abi?: AbiItem[]) {
    this.contractAddress = contractAddress;
    if (abi) this.abi = abi;
    this.interactContract = new InteractContract(
      contractAddress,
      abi ? abi : this.abi
    );
  }

  getOwnerBalance = (ownerAddress: string): Promise<string> => {
    return this.interactContract.methods().balanceOf(ownerAddress).call();
  };
}

export default InteractErc20Contract;
