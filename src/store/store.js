import {combineReducers} from 'redux'
import {mobile, resourcerequest_android} from './reducers/mobile';
import {employee_reducer} from './reducers/employee'

let rootReducer = combineReducers({mobile, res_req_mob: resourcerequest_android, employee: employee_reducer});

export default rootReducer;
