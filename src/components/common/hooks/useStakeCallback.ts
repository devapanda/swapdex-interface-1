import { useActiveWeb3React } from '../../swap/hooks/index'

const DEFAULT_STAKE_SIZE = 0

export enum StakeCallbackState {
  INVALID,
  LOADING,
  VALID
}

export interface StakeCall {
  state: StakeCallbackState
  callback: null | (() => Promise<string>);
  error: string | null
}

export function useStakeCallback (
  numberOfSDXTokensToStake: number = DEFAULT_STAKE_SIZE
): StakeCall {
  const { account, chainId, library } = useActiveWeb3React()

  if (numberOfSDXTokensToStake == 0) {
    return {
      state: StakeCallbackState.INVALID,
      callback: null,
      error: "Stake amount should be greater than 0"
    }
  }

  const stakingContract = null //TODO - get staking contract here
  //todo - call staking contract and submit eth tx to send sdx tokens to staking contract

  return {
    state: StakeCallbackState.VALID,
    callback: null,
    error: null
  }
}
