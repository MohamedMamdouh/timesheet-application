import {takeLatest, all} from 'redux-saga/effects';
import API from '../Services/Api';
import DebugConfig from '../Config/DebugConfig';

/* ------------- Types ------------- */

import {StartupTypes} from '../Redux/StartupRedux';
import {NewflowTypes} from '../Redux/NewFlowRedux';

/* ------------- Sagas ------------- */

import {startup} from './StartupSagas';
import {createNewFlow} from './NewFlowSaga';

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(NewflowTypes.FLOW_REQUEST, createNewFlow, api),
  ]);
}
