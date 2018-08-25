import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const makeSelectCreatingEventState = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('isCreatingNewEvent')
);

export {
  selectGlobal,
  makeSelectCreatingEventState,
};
