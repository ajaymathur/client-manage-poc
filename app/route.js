import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CreateClient from './createClient/createClient';
import SearchClient from './seachClient/searchClient';

import Header from './header/header'
class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={CreateClient} />
                        <Route exact path='/search' component={SearchClient} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default Router;
