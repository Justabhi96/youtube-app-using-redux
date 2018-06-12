import { createStore,applyMiddleware } from 'redux';
import AllReducers from '../reducers/index';
import thunk from 'redux-thunk';

const store = createStore(AllReducers, applyMiddleware(thunk));

export default store;