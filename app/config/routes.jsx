import React from 'react';
import { Router, hashHistory, Route, IndexRoute } from "react-router";
import {
	MainContainer,
	FloorplansContainer,
	AmenitiesContainer
} from 'containers';

const routes = (
	<Router history={hashHistory}>
		<Route path='/' component={MainContainer}>
			<Route path='/floorplans' component={FloorplansContainer}/>
			{/*<Route path='/floorplans/:floorplan' component={} />*/}
			<Route path='/amenities' component={AmenitiesContainer}/>
		</Route>
	</Router>
);

export default routes;