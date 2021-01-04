import React from 'react';
import styled from 'styled-components';
import { useWeb3React, Web3ReactProvider } from '@web3-react/core'
import { themeBreakPoints } from '../../../themes/commons';
import { ColumnWide } from '../../common/column_wide';
import { Content } from '../common/content_wrapper';
import Pool  from '../../swap/pool';
import { Provider } from 'react-redux'
import store from '../../swap/state'
import ThemeProvider, { FixedGlobalStyle, ThemedGlobalStyle } from '../../swap/theme'
import getLibrary from '../../swap/utils/getLibrary'
import { NetworkContextName } from '../../swap/constants'



const ColumnWideMyWallet = styled(ColumnWide)`
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

const CenteredContent = styled(Content as any)`
    align-items: center;
    justify-content: center;
    background-color : #EEEEEE;
`;

const PoolPage = () => (
    <ThemeProvider>
        <ThemedGlobalStyle />
        <Web3ReactProvider getLibrary={getLibrary}>
        <Provider store={store}>
                <CenteredContent>
                    <Pool />
                </CenteredContent>
            </Provider>
        </Web3ReactProvider>
    </ThemeProvider>
);

export {PoolPage as default };
