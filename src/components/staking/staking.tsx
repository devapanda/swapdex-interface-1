import React, { useContext, useMemo, useEffect } from 'react'
import { ThemeContext } from 'styled-components'
import { Pair } from '@uniswap/sdk'
import { Link } from 'react-router-dom'

import { useActiveWeb3React } from '../swap/hooks'
import {Dots, Wrapper} from '../swap/styleds'
import { StyledInternalLink, TYPE } from '../swap/theme'
import { Text } from 'rebass'
import { LightCard } from '../swap/Card'
import { RowBetween } from '../swap/Row'
import { ButtonPrimary } from '../swap/Button'
import { AutoColumn } from '../swap/Column'
import Question from '../swap/QuestionHelper'
import FullPositionCard from '../swap/PositionCard'

import {InjectedConnector} from "@web3-react/injected-connector";
import {Web3Provider} from "@ethersproject/providers";
import {useWeb3React} from "@web3-react/core";

const injectedConnector = new InjectedConnector({
    supportedChainIds: [
        1, // Mainet
        3, // Ropsten
        4, // Rinkeby
        5, // Goerli
        42, // Kovan
    ],
})

export function Staking() {
  const theme = useContext(ThemeContext)
  const { chainId, account, activate, active } = useWeb3React<Web3Provider>()

  useEffect(() => {
      if ( !account ) {
          activate(injectedConnector)
      }
  });

  return (
    <>
        <Wrapper id="pool-page" style={{ display: 'flex', flexDirection: 'column', width: '75%' }}>
          <AutoColumn gap="lg" justify="center">
            <ButtonPrimary id="join-pool-button" as={Link} style={{ padding: 16 }} to="/pool/add/ETH">
              <Text fontWeight={500} fontSize={20}>
                Add Liquidity
              </Text>
            </ButtonPrimary>

            <AutoColumn gap="12px" style={{ width: '100%' }}>
              <RowBetween padding={'0 8px'}>
                <Text color={theme.componentsTheme.backgroundTextColor} fontWeight={500}>
                  Your Liquidity
                </Text>
                <Question text="When you add liquidity, you are given pool tokens that represent your share. If you don’t see a pool you joined in this list, try importing a pool below." />
              </RowBetween>

              <LightCard padding="40px">
                <TYPE.body color={theme.text3} textAlign="center">
                  Connect to a wallet to view your liquidity.
                </TYPE.body>
              </LightCard>

              <div>
                <Text textAlign="center" color={theme.componentsTheme.backgroundTextColor} fontSize={14} style={{ padding: '.5rem 0 .5rem 0' }}>
                  {"Don't see a pool you joined?"}{' '}
                  <StyledInternalLink id="import-pool-link" to={'/find'}>
                    {'Import it.'}
                  </StyledInternalLink>
                </Text>
              </div>
            </AutoColumn>
          </AutoColumn>
        </Wrapper>
    </>
  )
}
