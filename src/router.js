import React from 'react';
import { BrowserRouter, Route, Redirect, IndexRoute, Switch } from 'react-router-dom';

// Layouts
import LandingPage from './Components/LandingPage.js';

// Pages
import App from './App.js';


const AppRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => {
        console.log("Props din AppRoute", props.location.data);
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
            <AppRoute path="/dashboard" exact component={App}>
            </AppRoute>
        </Switch>
    </BrowserRouter>
);
