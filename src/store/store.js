import {combineReducers} from 'redux'
import {mobile, resourcerequest_android} from './reducers/mobile';

let rootReducer = combineReducers({mobile, res_req_mob: resourcerequest_android});

export default rootReducer;
