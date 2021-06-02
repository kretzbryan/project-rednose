import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import Home from '../pages/Home';
import ProfileDetail from '../pages/ProfileDetail';
import ProfileBrowse from '../pages/ProfileBrowse';
import PrivateRoute from '../components/routing/PrivateRoute';
import GigBrowse from '../pages/GigBrowse';
import GigDetail from '../pages/GigDetail';
import EventBrowse from '../pages/EventBrowse';

const Routes = () => {
	return (
		<Switch>
			<Route exact path='/' component={Landing} />
			<PrivateRoute path='/home' component={Home} />
			<PrivateRoute path='/profile/:id' component={ProfileDetail} />
			<PrivateRoute path='/browse' component={ProfileBrowse} />
			<PrivateRoute exact path='/gig' component={GigBrowse} />
			<PrivateRoute path='/gig/:id' component={GigDetail} />
			<PrivateRoute exact path='/event-browse' component={EventBrowse} />
		</Switch>
	);
};

export default Routes;
