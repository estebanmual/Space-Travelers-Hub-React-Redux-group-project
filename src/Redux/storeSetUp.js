import {
  combineReducers, createStore, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';

const rocketsReducer = '';
const missionsReducer = '';

/* eslint-disable no-underscore-dangle */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const rootReducer = combineReducers({ rockets: rocketsReducer, missions: missionsReducer });
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
