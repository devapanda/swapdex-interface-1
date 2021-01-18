import React from 'react';
import styled from 'styled-components';
import { createWeb3ReactRoot, Web3ReactProvider} from '@web3-react/core';
import { themeBreakPoints } from '../../../themes/commons';
import { ColumnWide } from '../../common/column_wide';
import { Content } from '../common/content_wrapper';
import { Swap } from '../../swap/swap';
import { Provider } from 'react-redux'
import store from '../../../store'
import ThemeProvider, {ThemedGlobalStyle } from '../../swap/theme'
import getLibrary from '../../swap/utils/getLibrary'
import { NetworkContextName } from '../../swap/constants'
import { CheckWalletStateModalContainer } from '../../common/check_wallet_state_modal_container';
import ApplicationUpdater from '../../swap/state/application/updater'
import ListsUpdater from '../../swap/state/lists/updater'
import MulticallUpdater from '../../swap/state/multicall/updater'
import TransactionUpdater from '../../swap/state/transactions/updater'
import UserUpdater from '../../swap/state/user/updater'

export const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName);

export const ColumnWideMyWallet = styled(ColumnWide)`
    margin-left: 0;
    &:last-child {
        margin-left: 0;
    }
    @media (max-width: ${themeBreakPoints.sm}) {
        width: 100%;
    }
    @media (min-width: ${themeBreakPoints.md}) {
        max-width: 100%;
    }
    @media (min-width: ${themeBreakPoints.lg}) {
        max-width: 60%;
    }
`;

export const CenteredContent = styled(Content as any)`
    align-items: center;
    justify-content: center;
    background-color : ${props => props.theme.componentsTheme.background}; 
`;

export function Updaters() {
  return (
    <>
      <ListsUpdater />
      <UserUpdater />
      <ApplicationUpdater />
      <TransactionUpdater />
      <MulticallUpdater />
    </>
  )
}

const SwapPage = () => {
    return (
        <ThemeProvider>
            <ThemedGlobalStyle/>
            <CheckWalletStateModalContainer>
                <Web3ReactProvider getLibrary={getLibrary}>
                    <Web3ProviderNetwork getLibrary={getLibrary}>
                        <Provider store={store}>
                        <Updaters />
                            <CenteredContent>
                                <Swap/>
                            </CenteredContent>
                        </Provider>
                    </Web3ProviderNetwork>
                </Web3ReactProvider>
            </CheckWalletStateModalContainer>
        </ThemeProvider>
    );
};

export { SwapPage as default };
