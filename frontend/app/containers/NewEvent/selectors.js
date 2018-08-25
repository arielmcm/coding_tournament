import { createSelector } from 'reselect';

const selectNewEvent = (state) => state.get('newEvent');

const makeSelectEventCategories = () => createSelector(
  selectNewEvent,
  (state) => {
    return state.get('categories').map(category => {
      return {
        text: category.name,
        value: category.name.toLowerCase(),
        key: category.id,
      };
    });
  }
);

export { makeSelectEventCategories };
