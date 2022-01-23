import { ethers } from "ethers";
import { Contract } from "@ethersproject/contracts";
import { useContractFunction } from "@usedapp/core";
import simpleContractAbi from "../abi/SimpleContract.json";
import { simpleContractAddress } from "../contracts";

const simpleContractInterface = new ethers.utils.Interface(simpleContractAbi);

const contract = new Contract(simpleContractAddress, simpleContractInterface);

export function useSetCount() {
  const { state, send } = useContractFunction(contract, "setCount", {});
  return { state, send };
}
