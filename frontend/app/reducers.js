import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import globalReducer from './containers/App/reducer';

const routeInitialState = fromJS({
  location: null,
});

function routeReducer (state = routeInitialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload,
      });
    default:
      return state;
  }
}

export default function createReducer (injectedReducers) {
  const appReducer = combineReducers({
    route: routeReducer,
    global: globalReducer,
    ...injectedReducers,
  });

  return (state, action) => {

    return appReducer(state, action);
  };
}
