import { fromJS } from 'immutable';

import {
  SET_CATEGORIES,
} from './actionTypes';

const initialState = fromJS({
  categories: [],
});

function mapReducer (state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORIES:
      return state.set('categories', action.payload);
    default:
      return state;
  }
}

export default mapReducer;
