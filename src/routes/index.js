import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../components/Home';
import FilmsIndex from '../components/FilmsIndex';

const GhibliRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/home" component={Home}/>
            <Route path="/films" component={FilmsIndex}/>
        </Switch>
    )
}

export default GhibliRoutes;