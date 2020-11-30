import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Landing from '../pages/Landing';
import Home from '../pages/Home';
import ProfileDetail from '../pages/ProfileDetail';
import Browse from '../pages/Browse';
import PrivateRoute from '../components/routing/PrivateRoute';
import GigBrowse from '../pages/GigBrowse'

const Routes = () => {
    return (
        <Switch>
            <Route exact path ='/' component={Landing}/>
            <PrivateRoute path ='/home' component={ Home } />
            <PrivateRoute path ='/profile/:id' component={ ProfileDetail } />
            <PrivateRoute path ='/browse' component={ Browse } />
            <PrivateRoute path ='/gig' component={ GigBrowse } />
        </Switch>
)}



export default Routes;