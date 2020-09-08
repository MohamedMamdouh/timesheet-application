import {call, put} from 'redux-saga/effects';
import {path} from 'ramda';
import UserActions from '../Redux/UserRedux';

export function* getUserData(api, action) {
  const {userId} = action;
  // make the call to the api
  const response = yield call(api.getUserData, userId);

  console.log(response);

  if (response.ok) {
    console.log(response);
    // const userId = path(['data', '_id'], response);
    // yield put(
    //   UserActions.flowSuccess(userId, projectId, firstName, lastName),
    // );
  } else {
    yield put(NewflowActions.userId());
  }
}
