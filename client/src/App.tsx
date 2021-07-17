import Index from 'features/index/Index';
import NotFound from 'features/common/NotFound';
import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App: FC = () => {
	return (
		<Router>
			<Switch>
				<Route path='/' exact component={Index} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	);
};

export default App;
