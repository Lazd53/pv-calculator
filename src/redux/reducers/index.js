import {combineReducers} from 'redux';
import panelRequestInfo from './panelRequestInfo';
import results from './results';

export default combineReducers({
  panelRequestInfo,
  results
})
