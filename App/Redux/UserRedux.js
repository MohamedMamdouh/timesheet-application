import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  userRequest: ['userId'],
  userSuccess: ['userId', 'projectId', 'firstName', 'lastName'],
  userFailure: null,
});

export const UserTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  userId: null,
  projectId: null,
  firstName: null,
  lastName: null,
  fetching: null,
  error: null,
});

/* ------------- Reducers ------------- */

// request the data for a user
export const request = (state) => state.merge({fetching: true});

// successful data lookup
export const success = (state, action) => {
  console.log(action);
  const {userId, projectId, firstName, lastName} = action;
  return state.merge({
    fetching: false,
    error: null,
    userId,
    projectId,
    firstName,
    lastName,
  });
};

// failed to get the data
export const failure = (state) => state.merge({fetching: false, error: true});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.USER_REQUEST]: request,
  [Types.USER_SUCCESS]: success,
  [Types.USER_FAILURE]: failure,
});
