import { fromJS } from 'immutable';

import {
  SET_CURRENT_MAP_CENTER, SET_EVENTS,
  SET_SELECTED_GEOPOINT,
} from './actionTypes';

const initialState = fromJS({
  currentCenter: {},
  selectedGeoPoint: {},
  events: [],
});

function mapReducer (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_MAP_CENTER:
      return state.set('currentCenter', action.payload);
    case SET_SELECTED_GEOPOINT:
      return state.set('selectedGeoPoint', action.payload);
    case SET_EVENTS:
      return state.set('events', action.payload);
    default:
      return state;
  }
}

export default mapReducer;
