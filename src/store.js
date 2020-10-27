import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import { logger } from 'redux-logger';

import { TodoReducer } from './components/redux/reducers/TodoReducer';
import { alertReducer } from './components/redux/AlertReducer';

const middlewares = [logger, thunk];

const rootreducer = combineReducers({
  todos: TodoReducer,
  alerts: alertReducer,
});

const initialState = {};

const store = createStore(
  rootreducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
