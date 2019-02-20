import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import App from '../container/App';

import About from '../container/About';


class RouteMap extends React.Component {
    render() {
        return (
            <HashRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/about" component={About}/>
            </Switch>
        </HashRouter>
        )
    }
}

export default RouteMap