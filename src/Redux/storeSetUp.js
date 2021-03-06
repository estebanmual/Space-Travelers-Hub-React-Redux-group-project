import {
  combineReducers, createStore, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import missionsReducer from './Missions/missions';
import { rocketsReducer } from './Rockets/Rockets';
/* eslint-disable no-underscore-dangle */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ rockets: rocketsReducer, missions: missionsReducer });
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
