import {call, put} from 'redux-saga/effects';
import {path} from 'ramda';
import NewflowActions from '../Redux/NewFlowRedux';
import NavigationService from '../Services/NavigationService';

export function* createNewFlow(api, action) {
  const {
    employeeFirstName,
    employeeLastName,
    managerFirstName,
    managerLastName,
    projectTitle,
  } = action;
  // make the call to the api
  const response = yield call(
    api.createNewFlow,
    employeeFirstName,
    employeeLastName,
    managerFirstName,
    managerLastName,
    projectTitle,
  );

  console.log(response);

  if (response.ok) {
    const userId = path(['data', '_id'], response);
    yield put(NewflowActions.flowSuccess(userId));
  } else {
    yield put(NewflowActions.userId());
  }
}
