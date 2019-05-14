
import React from 'react';
import {render} from 'react-dom';

import css from './styles/style.css';

import App from './components/App.js';
import Single from './components/Single.js';
import CardsGrid from './components/CardsGrid.js';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store';

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path='/' component={App}>
				<IndexRoute component={CardsGrid}></IndexRoute>
				<Route path='/view/:postId' component={Single}></Route>
			</Route>
		</Router>
	</Provider>
)

render(router, document.getElementById('root'));