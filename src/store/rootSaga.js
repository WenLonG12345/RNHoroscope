import { all } from 'redux-saga/effects';
import horoscopeScreenSaga from './sagas';

export default function* rootSaga() {
    yield all([
        horoscopeScreenSaga(),
    ])
}