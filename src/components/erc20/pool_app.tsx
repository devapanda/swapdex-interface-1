import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ThemeProvider } from 'styled-components';

import { MARKET_APP_BASE_PATH } from '../../common/constants';
import { getERC20Theme } from '../../store/selectors';
import { AdBlockDetector } from '../common/adblock_detector';
import { PageLoading } from '../common/page_loading';
import { GeneralLayoutContainer } from '../general_layout';

import ToolbarContentContainer from './common/toolbar_content';

const toolbar = <ToolbarContentContainer />;

const Pool = lazy(() => import('./pages/pool'));


const PoolApp = () => {
    const themeColor = useSelector(getERC20Theme);
    return (
        <ThemeProvider theme={themeColor as any}>
            <GeneralLayoutContainer toolbar={toolbar}>
                <AdBlockDetector />
                <Switch>
                    <Suspense fallback={<PageLoading />}>
                        <Route exact={true} path={`/pool/`} component={Pool} />
                    </Suspense>
                </Switch>
            </GeneralLayoutContainer>
        </ThemeProvider>
    );
};

export { PoolApp as default };
