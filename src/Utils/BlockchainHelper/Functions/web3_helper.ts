import Web3 from "web3";
import { AbiItem } from "web3-utils";

const getWeb3Connection = (provider: string) => {
  return new Web3(new Web3.providers.HttpProvider(provider));
};
export const createContract = (
  provider: string,
  address: string,
  abi: AbiItem[]
) => {
  const web3 = getWeb3Connection(provider);
  const contract = new web3.eth.Contract(abi, address);
  return contract;
};
