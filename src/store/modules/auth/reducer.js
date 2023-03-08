import * as types from "../types";

const initalState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

export default function exampleReducer(state = initalState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      return newState;
    }

    case types.LOGIN_FAILURE: {
      const newState = { ...initalState };
      return newState;
    }

    default:
      return state;
  }
}
