import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  flowRequest: [
    'employeeFirstName',
    'employeeLastName',
    'managerFirstName',
    'managerLastName',
    'projectTitle',
  ],
  flowSuccess: ['userId'],
  flowFailure: null,
});

export const NewflowTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  userId: null,
  fetching: null,
  error: null,
});

/* ------------- Reducers ------------- */

// request the avatar for a user
export const request = (state) => state.merge({fetching: true});

// successful avatar lookup
export const success = (state, action) => {
  console.log(action);
  const {userId} = action;
  return state.merge({fetching: false, error: null, userId});
};

// failed to get the avatar
export const failure = (state) => state.merge({fetching: false, error: true});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FLOW_REQUEST]: request,
  [Types.FLOW_SUCCESS]: success,
  [Types.FLOW_FAILURE]: failure,
});
