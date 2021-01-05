import React from 'react';
import styled from 'styled-components';
import { useWeb3React, Web3ReactProvider } from '@web3-react/core'
import { themeBreakPoints } from '../../../themes/commons';
import { ColumnWide } from '../../common/column_wide';
import { Content } from '../common/content_wrapper';
import Pool  from '../../swap/pool';
import { Provider } from 'react-redux'
import store from '../../../store'
import ThemeProvider, { FixedGlobalStyle, ThemedGlobalStyle } from '../../swap/theme'
import getLibrary from '../../swap/utils/getLibrary'
import { NetworkContextName } from '../../swap/constants'
import { CheckWalletStateModalContainer } from '../../common/check_wallet_state_modal_container';
import { Web3ProviderNetwork, ColumnWideMyWallet, CenteredContent, Updaters } from './swap'

const PoolPage = () => (
  <ThemeProvider>
      <ThemedGlobalStyle/>
      <CheckWalletStateModalContainer>
          <Web3ReactProvider getLibrary={getLibrary}>
              <Web3ProviderNetwork getLibrary={getLibrary}>
                  <Provider store={store}>
                  <Updaters />
                      <CenteredContent>
                          <Pool />
                      </CenteredContent>
                  </Provider>
              </Web3ProviderNetwork>
          </Web3ReactProvider>
      </CheckWalletStateModalContainer>
  </ThemeProvider>
);

export {PoolPage as default };
