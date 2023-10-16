import { keanuTypes } from "../Actiontypes/keanuTypes";

import { KeanuActions, KeanuState } from "../types/types";

const initialState: KeanuState = {
  loading: false,
};

export default (state = initialState, action: KeanuActions) => {
  switch (action.type) {
    case keanuTypes.SET_KEANU_IMAGE_SUCCESS:
      return { data: action.payload };
    case keanuTypes.SET_KEANU_IMAGE_LOADING:
      return { loading: true };
    case keanuTypes.SET_KEANU_IMAGE_ERROR:
      return { error: true };
    default:
      return {
        ...state,
      };
  }
};
