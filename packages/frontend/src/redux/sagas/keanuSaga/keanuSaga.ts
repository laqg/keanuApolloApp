import { all, takeLatest, put } from "redux-saga/effects";
import { keanuTypes } from "../../Actiontypes/keanuTypes";
import { GetKeanuImage } from "../../types/types";

import {
  setKeanuImageSuccess,
  setKeanuImageLoading,
  setKeanuImageError,
} from "../../actions/keanuActions";

function* getKeanuImageSaga(action: GetKeanuImage) {
  const { loading, error, data } = action.payload;
  if (data) yield put(setKeanuImageSuccess(data));
  if (loading) yield put(setKeanuImageLoading());
  if (error) yield put(setKeanuImageError());
}

function* keanuSaga() {
  yield all([takeLatest(keanuTypes.GET_KEANU_IMAGE, getKeanuImageSaga)]);
}

export default keanuSaga;
