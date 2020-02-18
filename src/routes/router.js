import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

// route components
import LandingPage from './landing-page/landing-page.js';
import Dashboard from './dashboard/dashboard.js';

const AppRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => {
        return props.location.data
            ? <Component {...props} />
            : <Redirect to='/' />
    }
    }

    />
)

export default (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={LandingPage}>
            </Route>
            <AppRoute path="/dashboard" exact component={Dashboard}>
            </AppRoute>
        </Switch>
    </BrowserRouter>
);
