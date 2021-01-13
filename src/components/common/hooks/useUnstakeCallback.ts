import { useActiveWeb3React } from '../../swap/hooks/index'

export enum UnstakeCallbackState {
  SUCCESS,
  FAIL
}

export interface UnstakeStakeCall {
  state: UnstakeCallbackState
  callback: null | (() => Promise<string>);
  error: string | null
}

export function useUnstakeCallback (
): UnstakeStakeCall {
  const { account, chainId, library } = useActiveWeb3React()

  const stakingContract = null //TODO - get staking contract here
  //todo - call staking contract and submit eth tx to remove sdx tokens from staking contract and send to holder address

  return {
    state: UnstakeCallbackState.SUCCESS,
    callback: null,
    error: null
  }
}
