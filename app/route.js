import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import CreateClient from './createClient/createClient';
import SearchClient from './searchClient/searchClient';

import Header from './header/header'
class Router extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Header />
                    <div style={{padding: '30px', marginTop: '80px'}}>
                        <Switch>
                            <Route exact path='/' component={CreateClient} />
                            <Route exact path='/search' component={SearchClient} />
                        </Switch>
                    </div>
                </div>
            </HashRouter>
        )
    }
}

export default Router;
