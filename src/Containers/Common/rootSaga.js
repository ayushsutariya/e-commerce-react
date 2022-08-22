import { all } from "redux-saga/effects";
import authsaga from "./auth.saga";

export default function * rootSaga () {
    yield all ([
        authsaga()
    ])
}