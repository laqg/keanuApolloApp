import { keanuTypes } from "../Actiontypes/keanuTypes";
import { KeanuImageData } from "../../types/types";
import { ApolloError } from "@apollo/client";

export interface SetKeanuImageSuccess {
  type: typeof keanuTypes.SET_KEANU_IMAGE_SUCCESS;
  payload: KeanuImageData;
}

export type SetKeanuImageLoading = {
  type: typeof keanuTypes.SET_KEANU_IMAGE_LOADING;
  payload: KeanuImageData;
};

export type SetKeanuImageError = {
  type: typeof keanuTypes.SET_KEANU_IMAGE_ERROR;
  payload: KeanuImageData;
};

export type GetKeanuImage = {
  type: typeof keanuTypes.GET_KEANU_IMAGE;
  payload: {
    data?: KeanuImageData;
    loading?: boolean;
    error?: ApolloError;
  };
};

export type KeanuActions =
  | SetKeanuImageSuccess
  | SetKeanuImageLoading
  | SetKeanuImageError;

export type KeanuState = {
  data?: KeanuImageData;
  loading?: boolean;
  error?: ApolloError;
};

export type RootState = {
  keanu: KeanuState;
};
