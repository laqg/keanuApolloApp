import { all, fork } from "redux-saga/effects";
import keanuSaga from "./keanuSaga/keanuSaga";

export function* rootSaga() {
  yield all([fork(keanuSaga)]);
}
