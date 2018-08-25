import {
  SET_CATEGORIES,
  FETCH_CATEGORIES,
  SUBMIT_EVENT,
} from './actionTypes';

export function fetchCategories () {
  return {
    type: FETCH_CATEGORIES,
  };
}

export function setEventCategories (categories) {
  return {
    type: SET_CATEGORIES,
    payload: categories,
  };
}

export function submitEvent (event) {
  return {
    type: SUBMIT_EVENT,
    payload: event,
  };
}
