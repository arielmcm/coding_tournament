import { fromJS } from 'immutable';
import {SET_CREATING_NEW_EVENT} from './actionTypes';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  isCreatingNewEvent: false,
  isCreatingNewEvent: false,
  userData: {
    repositories: false,
  },
});

function appReducer (state = initialState, action) {
  switch (action.type) {
    case SET_CREATING_NEW_EVENT:
      return state.set('isCreatingNewEvent', action.payload);
    default:
      return state;
  }
}

export default appReducer;
