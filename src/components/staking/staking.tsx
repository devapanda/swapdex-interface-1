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
        <Wrapper id="staking-page" style={{ display: 'flex', flexDirection: 'column', width: '75%' }}>
          <AutoColumn gap="lg" justify="center">
          <AutoColumn gap="12px" style={{ width: '100%' }}>
            <RowBetween padding={'0 8px'}>
              <Text color={theme.componentsTheme.backgroundTextColor} fontWeight={500}>
                Your Balance
              </Text>
              <Question text="When you stake SDX you will earn interest in the USDX stablecoin." />
            </RowBetween>

            <LightCard padding="40px">
              <TYPE.body color={theme.text3} textAlign="right" padding="10px">
                Staked SDX Balance: 1234
              </TYPE.body>
              <TYPE.body color={theme.text3} textAlign="right" padding="10px">
                USDX Balance (Interest Earned): 5678
              </TYPE.body>
            </LightCard>
          </AutoColumn>

            <ButtonPrimary id="stake-button" as={Link} style={{ padding: 16 }} to="/pool/add/ETH">
              <Text fontWeight={500} fontSize={20}>
                Stake SDX
              </Text>
            </ButtonPrimary>

            <ButtonPrimary id="withdraw-stake-button" as={Link} style={{ padding: 16 }} to="/pool/add/ETH">
              <Text fontWeight={500} fontSize={20}>
                Withdraw SDX
              </Text>
            </ButtonPrimary>

            <ButtonPrimary id="withdraw-interest-button" as={Link} style={{ padding: 16 }} to="/pool/add/ETH">
              <Text fontWeight={500} fontSize={20}>
                Withdraw USDX
              </Text>
            </ButtonPrimary>
          </AutoColumn>
        </Wrapper>
    </>
  )
}
