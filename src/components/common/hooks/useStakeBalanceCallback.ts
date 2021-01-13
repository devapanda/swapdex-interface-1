import { useActiveWeb3React } from '../../swap/hooks/index'

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

  const stakingContract = null //TODO - get staking contract here
  //todo - call staking contract and return balances

  return {
    state: StakeBalanceCallbackState.SUCCESS,
    callback: null,
    error: null
  }
}
