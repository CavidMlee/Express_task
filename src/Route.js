import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Loading } from './components'

const DashboardPage = lazy(() =>
    import('./container/Dashboard')
)

const PaymentPage = lazy(() =>
    import('./container/Payment')
)

const Routes = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Switch>
                <Route
                    exact
                    path="/"
                >
                    <DashboardPage />
                </Route>
                <Route
                    exact
                    path="/payment"
                >
                    <PaymentPage />
                </Route>
            </Switch>
        </Suspense>
    )
}

export default Routes