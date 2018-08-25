import { call, put, takeLatest, all } from 'redux-saga/effects';
import { setEventCategories } from './actions';
import { API_ROOT } from '../../params';

import { authenticatedRequest, unauthenticatedRequest } from '../../utils/request';
import { FETCH_CATEGORIES, SUBMIT_EVENT } from './actionTypes';
import { push } from 'react-router-redux';

function* fetchCategories () {
  const requestURL = `${API_ROOT}/categories`;
  const response = yield call(unauthenticatedRequest, 'GET', requestURL);
  yield put(setEventCategories(response));
}

function* submitEvent (action) {
  const requestURL = `${API_ROOT}/events`;

  try {
    const response = yield call(unauthenticatedRequest, 'POST', requestURL, action.payload);
  } catch (error) {
  }
}

export default function* () {
  yield all([
    yield takeLatest(FETCH_CATEGORIES, fetchCategories),
    yield takeLatest(SUBMIT_EVENT, submitEvent),
  ]);
}
