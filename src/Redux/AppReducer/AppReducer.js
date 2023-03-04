import * as types from "./Action.Type";

const Data = {
  isLooding: false,
  data: [],
  isError: false,
};

export const AppReducer = (state = Data, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_REQUEST:
      return {
        ...state,
        isLooding: true,
      };
    case types.GET_SUCCESS:
      return {
        ...state,
        isLooding: false,
        data: payload,
      };
    case types.GET_FAILURE:
      return {
        ...state,
        isLooding: false,
        isError: true,
      };
    default:
      return state;
  }
};
