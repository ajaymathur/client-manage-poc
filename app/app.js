import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CreateClient from './createClient/createClient';
import SearchClient from './seachClient/searchClient';

import Header from './header/header'
class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={CreateClient} />
                    <Route exact path='/search' component={SearchClient} />
                </Switch>
            </div>
        )
    }
}

ReactDOM.render(<BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'));
