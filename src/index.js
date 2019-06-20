import React from 'react';
import ReactDOM from 'react-dom';
import Moment from 'moment';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {
    ConnectedRouter,
    connectRouter,
    routerMiddleware
} from 'connected-react-router';

import astronaut from './reducers/astronaut/';
import astronautRoutes from './routes/astronaut';

const history = createBrowserHistory();
const store = createStore(
combineReducers({
    router: connectRouter(history),
    astronaut
    /* Ressource types */
    }),
    applyMiddleware(routerMiddleware(history), thunk)
);

Moment.locale('fr');

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                {astronautRoutes}
                {/* Ressources routes */}
            <Route render={() => <h1>Not Found</h1>} />
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
