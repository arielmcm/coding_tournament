import { createSelector } from 'reselect';

const selectMap = (state) => state.get('map');

const makeSelectCurrentCenter = () => createSelector(
  selectMap,
  (state) => state.get('currentCenter')
);

const makeSelectSelectedGeoPoint = () => createSelector(
  selectMap,
  (state) => state.get('selectedGeoPoint')
);

const makeSelectEvents = () => createSelector(
  selectMap,
  (state) => state.get('events')
);

export {
  makeSelectEvents,
  makeSelectCurrentCenter,
  makeSelectSelectedGeoPoint,
};
