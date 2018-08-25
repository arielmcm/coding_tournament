import { SET_CREATING_NEW_EVENT } from './actionTypes';

export function setCreatingNewEventValue (isCreatingNewEvent) {
  return {
    type: SET_CREATING_NEW_EVENT,
    payload: isCreatingNewEvent,
  };
}
