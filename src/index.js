import React from "react";
import ReactDOM from "react-dom";
import { routerMiddleware } from "react-router-redux";
import { Router } from "react-router";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import createHistory from "history/createBrowserHistory";
import SpaceLaunch from "./container/SpaceLaunch/SpaceLaunch";
import sagas from "./store/sagas/sagas";
import createRootReducers from "./store/reducers/reducers";
import "./assets/_main.scss";

export const Store = (history, initialState = {}) => {
	const sagaMiddleware = createSagaMiddleware((initialState = {}));
	const routeMiddleware = routerMiddleware(history);
	const store = createStore(
		createRootReducers(history),
		initialState,
		compose(applyMiddleware(sagaMiddleware, routeMiddleware))
	);
	sagaMiddleware.run(sagas);
	return store;
};

const history = createHistory();
const store = Store(history);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<SpaceLaunch />
		</Router>
	</Provider>,
	document.getElementById("root")
);
