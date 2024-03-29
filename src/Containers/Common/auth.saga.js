import { all, call, put, takeEvery } from 'redux-saga/effects'
import { SignupApi } from '../Api/Auth.api';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
   try {
      console.log("hnhjhghghg");
      const user = yield call(SignupApi, action.payload);
      yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery("SIGNUP_USER", fetchUser);
}

function * authsaga() {
    yield all([
        mySaga()
    ])
}

export default authsaga;