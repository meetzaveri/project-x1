import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {fakeApiCall_A} from '../services/index';
import {mb_action_types} from '../store/actions/mobile';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function * fetchResource(action) {
  try {
    console.log('Saga in use for fetch resource')
    const resource = yield call(fakeApiCall_A, action.payload);
    console.log('Resource', resource)
    yield put({type: mb_action_types.fetchResourceSucceded, resource: resource});
  } catch (e) {
    console.log('Into catch block')
    yield put({type: mb_action_types.fetchResourceFailed, message: e.message});
  }
}

function * postResource(action) {
  try {
    console.log('Saga in use for fetch resource')
    const resource = yield call(fakeApiCall_A, action.payload);
    console.log('Resource', resource)
    yield put({type: mb_action_types.postResourceSucceded, resource: resource});
  } catch (e) {
    console.log('Into catch block')
    yield put({type: mb_action_types.postResourceFailed, message: e.message});
  }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function * mySaga() {
  console.log('Calling main saga');
  yield takeLatest(mb_action_types.fetchResourceRequested, fetchResource);
  yield takeLatest(mb_action_types.postResourceRequested, postResource);
}

export default mySaga;