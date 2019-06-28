import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../components/Home';
import FilmsIndex from '../components/FilmsIndex';
import FilmDetail from '../components/FilmDetail';

const GhibliRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/films" component={FilmsIndex}/>
            <Route exact path="/filmdetail" component={FilmDetail}/>
            <Route exact path="/films/:id" component={FilmDetail}/>
        </Switch>
    )
}

export default GhibliRoutes;