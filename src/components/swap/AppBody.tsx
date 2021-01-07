import React from 'react';
import styled from 'styled-components';
import { useWeb3React, Web3ReactProvider } from '@web3-react/core'
import { themeBreakPoints } from '../../themes/commons';
import { ColumnWide } from '../common/column_wide';
import { Content } from '../erc20/common/content_wrapper';
import store from '../../store'
import ThemeProvider, { FixedGlobalStyle, ThemedGlobalStyle } from './theme'
import { Provider, useSelector } from 'react-redux'
import getLibrary from './utils/getLibrary'
import { NetworkContextName } from './constants'
import { CheckWalletStateModalContainer } from '../common/check_wallet_state_modal_container'
import { Web3ProviderNetwork, ColumnWideMyWallet, CenteredContent } from '../erc20/pages/swap'
import { getERC20Theme } from '../../store/selectors';
import { DefaultTheme } from '../../themes/default_theme';

export const BodyWrapper = styled.div`
  position: relative;
  width: 100%;
  border-radius: 30px;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  const themeColor = useSelector(getERC20Theme);
  return <ThemeProvider >
      <ThemedGlobalStyle/>
        <CheckWalletStateModalContainer>
            <Web3ReactProvider getLibrary={getLibrary}>
                <Web3ProviderNetwork getLibrary={getLibrary}>
                    <Provider store={store}>
                        <BodyWrapper>
                        {children}
                        </BodyWrapper>
                    </Provider>
                </Web3ProviderNetwork>
            </Web3ReactProvider>
        </CheckWalletStateModalContainer>
  </ThemeProvider>
}
