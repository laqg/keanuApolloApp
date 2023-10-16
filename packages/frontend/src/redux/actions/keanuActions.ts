import { keanuTypes } from "../Actiontypes/keanuTypes";
import { KeanuImageData } from "../../types/types";

import { KeanuState } from "../types/types";

export const getKeanuImage = (payload: KeanuState) => ({
  type: keanuTypes.GET_KEANU_IMAGE,
  payload,
});

export const setKeanuImageSuccess = (payload: KeanuImageData) => ({
  type: keanuTypes.SET_KEANU_IMAGE_SUCCESS,
  payload,
});

export const setKeanuImageLoading = () => ({
  type: keanuTypes.SET_KEANU_IMAGE_LOADING,
});

export const setKeanuImageError = () => ({
  type: keanuTypes.SET_KEANU_IMAGE_ERROR,
});
