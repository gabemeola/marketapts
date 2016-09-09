import React from 'react';
import { Router, hashHistory, Route, IndexRoute } from "react-router";
import { MainContainer } from 'containers';

const routes = (
	<Router history={hashHistory}>
		<Route path='/' component={MainContainer}>
		</Route>
	</Router>
);

export default routes;