// import { take, call, put, select } from 'redux-saga/effects';
import { ADD_LINK, ADD_LINK_CANCELED } from './constants';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { addLinkFailed, addLinkSucceeded } from './actions';
import { createLink } from './../../api/index';
import { goBack } from 'react-router-redux';

function* addLink(action) {
  try {
    const serverLink = yield call(createLink, action.link);
    yield put(addLinkSucceeded(serverLink));
    yield put(goBack());
  } catch (e) {
    yield put(addLinkFailed(action.link, e.message));
  }
}

// Individual exports for testing
export function* addLinkSaga() {
  yield* takeLatest(ADD_LINK, addLink);
}

export function* addLinkCanceledSaga() {
  yield* takeLatest(ADD_LINK_CANCELED, () => put(goBack()));
}

// All sagas to be loaded
export default [
  addLinkSaga,
  addLinkCanceledSaga,
];
