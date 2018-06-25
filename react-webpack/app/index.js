import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import Terry from './terry';
import Terry1 from './terry1';
import Terry2 from './terry2';
import Nav from './nav';
import Error from './error';

ReactDOM.render(
    <HashRouter basename="demo">
        <div>
            <Nav/>
            <Switch>
                <Route exact path="/" component={Terry} />
                <Route path="/Terry1" component={Terry1} />
                <Route path="/Terry2/:param/:aaa" component={Terry2} />
                <Redirect from="/Terry3" to="/Terry2"/>
                <Route component={Error} />
            </Switch>
        </div>
    </HashRouter>,
    document.getElementById('app')
)