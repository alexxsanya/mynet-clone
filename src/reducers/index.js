import {combineReducers} from 'redux';
import countReducer from './counterReducer.js';

const allReducers= combineReducers({
  count: countReducer,
});

export default allReducers;