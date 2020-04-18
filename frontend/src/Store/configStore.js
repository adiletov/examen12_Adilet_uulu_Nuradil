import {createBrowserHistory} from "history";
import {connectRouter, routerMiddleware} from "connected-react-router";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    router: connectRouter(history)
});

const middleware = [
    thunk,
    routerMiddleware(history)
];

const store = createStore(rootReducer, applyMiddleware(...middleware));
export default store;