import { call, put, takeLatest, all } from 'redux-saga/effects';
import { setEvents } from './actions';
import { API_ROOT } from '../../params';

import { unauthenticatedRequest } from '../../utils/request';
import { FETCH_EVENTS } from './actionTypes';

function* fetchEvents () {
  const requestURL = `${API_ROOT}/events`;
  const response = yield call(unauthenticatedRequest, 'GET', requestURL);
  yield put(setEvents(response));
}

export default function* () {
  yield all([
    yield takeLatest(FETCH_EVENTS, fetchEvents),
  ]);
}
