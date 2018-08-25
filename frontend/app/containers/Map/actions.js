import {
  SET_CURRENT_MAP_CENTER,
  SET_SELECTED_GEOPOINT,
  FETCH_EVENTS,
  SET_EVENTS,
} from './actionTypes';

export function setCurrentCenter (coordinates) {
  return {
    type: SET_CURRENT_MAP_CENTER,
    payload: {
      lat: coordinates.latitude,
      lng: coordinates.longitude,
    },
  };
}

export function setSelectedGeoPoint (coordinates) {
  return {
    type: SET_SELECTED_GEOPOINT,
    payload: {
      lat: coordinates.lat,
      lng: coordinates.lng,
    },
  };
}


export function fetchEvents () {
  return {
    type: FETCH_EVENTS,
  };
}

export function setEvents (events) {
  return {
    type: SET_EVENTS,
    payload: events,
  };
}
