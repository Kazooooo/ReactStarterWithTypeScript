import { combineReducers } from 'redux';
import { StoreState } from '../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';
import enthusiasm from './enthusiasmReducer';

const rootReducer = combineReducers({
  enthusiasm,
});

export default rootReducer;
