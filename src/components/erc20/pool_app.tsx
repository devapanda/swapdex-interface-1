import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ThemeProvider } from 'styled-components';

import { POOL_APP_BASE_PATH } from '../../common/constants';
import { getERC20Theme } from '../../store/selectors';
import { AdBlockDetector } from '../common/adblock_detector';
import { PageLoading } from '../common/page_loading';
import { GeneralLayoutContainer } from '../general_layout';

import AddLiquidity from '../swap/AddLiquidity'
import {
  RedirectDuplicateTokenIds,
  RedirectOldAddLiquidityPathStructure,
  RedirectToAddLiquidity
} from '../swap/AddLiquidity/redirects'
import MigrateV1 from '../swap/MigrateV1'
import MigrateV1Exchange from '../swap/MigrateV1/MigrateV1Exchange'
import RemoveV1Exchange from '../swap/MigrateV1/RemoveV1Exchange'
import PoolFinder from '../swap/PoolFinder'
import RemoveLiquidity from '../swap/RemoveLiquidity'
import { RedirectOldRemoveLiquidityPathStructure } from '../swap/RemoveLiquidity/redirects'

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
                        <Route exact={true} path={`${POOL_APP_BASE_PATH}/`} component={Pool} />
                        <Route exact strict path={`${POOL_APP_BASE_PATH}/create`} component={RedirectToAddLiquidity} />
                        <Route exact path={`${POOL_APP_BASE_PATH}/add`} component={AddLiquidity} />
                        <Route exact path={`${POOL_APP_BASE_PATH}/add/:currencyIdA`} component={RedirectOldAddLiquidityPathStructure} />
                        <Route exact path={`${POOL_APP_BASE_PATH}/add/:currencyIdA/:currencyIdB`} component={RedirectDuplicateTokenIds} />
                        <Route exact strict path={`${POOL_APP_BASE_PATH}/remove/v1/:address`} component={RemoveV1Exchange} />
                        <Route exact strict path={`${POOL_APP_BASE_PATH}/remove/:tokens`} component={RedirectOldRemoveLiquidityPathStructure} />
                        <Route exact strict path={`${POOL_APP_BASE_PATH}/remove/:currencyIdA/:currencyIdB`} component={RemoveLiquidity} />
                        <Route exact strict path={`${POOL_APP_BASE_PATH}/migrate/v1`} component={MigrateV1} />
                        <Route exact strict path={`${POOL_APP_BASE_PATH}/migrate/v1/:address`} component={MigrateV1Exchange} />
                    </Suspense>
                </Switch>
            </GeneralLayoutContainer>
        </ThemeProvider>
    );
};

export { PoolApp as default };
