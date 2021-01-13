import { useActiveWeb3React } from '../../swap/hooks/index'
import { Contract } from "web3-eth-contract";

export enum StakeBalanceCallbackState {
  SUCCESS,
  FAIL
}

export interface StakeBalances {
  sdxBalance: number,
  usdxBalance: number
}

export interface StakeBalanceCall {
  state: StakeBalanceCallbackState
  callback: null | (() => Promise<StakeBalances>);
  error: string | null
}

export function useStakeBalanceCallback (
): StakeBalanceCall {
  const { account, chainId, library } = useActiveWeb3React()

  const contract = null //TODO - get staking contract here
  //todo - call staking contract and return balances

  return {
    state: StakeBalanceCallbackState.SUCCESS,
    callback: async function getBalances(): Promise<StakeBalances> {
      const stakingContract = contract as Contract
      return stakingContract.methods
      .getSDXBalance()
      .call()
      .then((sdxBalance) => {
        return stakingContract.methods
        .getUSDXBalance()
        .call()
        .then((usdxBalance) => {
          return {
            sdxBalance: 1234,
            usdxBalance: 4567
          }
        })
      })
    },
    error: null
  }
}
