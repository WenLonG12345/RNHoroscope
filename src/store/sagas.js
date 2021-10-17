import { horoscopeRequest } from "../api";
import { put, takeLatest } from 'redux-saga/effects';

function* getHoroscope({ payload }) {
    try {
        const response = yield (horoscopeRequest(payload));
        yield put({
            type: 'API_SUCCESS',
            response
        })
    } catch (err) {
        yield put({
            type: 'API_FAILURE',
            error: err.message
        })
    }
}

export default function* horoscopeScreenSaga() {
    yield takeLatest('API_REQUEST', getHoroscope);
}