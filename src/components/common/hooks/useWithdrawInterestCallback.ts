import { useActiveWeb3React } from '../../swap/hooks/index'

export enum WithdrawInterestCallbackState {
  SUCCESS,
  FAIL
}

export interface WithdrawInterestCall {
  state: WithdrawInterestCallbackState
  callback: null | (() => Promise<string>);
  error: string | null
}

export function useUnstakeCallback (
): WithdrawInterestCall {
  const { account, chainId, library } = useActiveWeb3React()

  const stakingContract = null //TODO - get staking contract here
  //todo - call staking contract and submit eth tx to remove USDX tokens from staking contract and send to holder address

  return {
    state: StakeCallbackStateWithdrawInterestCallbackState.SUCCESS,
    callback: null,
    error: null
  }
}
