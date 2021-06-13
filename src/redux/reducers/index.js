import {combineReducers} from 'redux';  // used to combine the reducers
import { sentenceReducer } from './sentenceReducer';
const reducers = combineReducers({
  sentenceReducer
});

export default reducers