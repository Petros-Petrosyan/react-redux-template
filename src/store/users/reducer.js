import {
  ADD_USER_START,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
  REMOVE_USER,
} from "./actionTypes";

const initialState = {
  loading: false,
  error: false,
  users: [],
};

const addUserStart = (state) => {
  return {
    ...state,
    loading: true,
    error: false,
  };
};

const addUserSuccess = (state, payload) => {
  const { name } = payload;
  return {
    ...state,
    users: [...state.users, name],
    loading: false,
    error: false,
  };
};

const addUserFail = (state) => {
  return {
    ...state,
    loading: false,
    error: true,
  };
};

const removeUser = (state, payload) => {
  const { name } = payload;
  const newUsers = state.users.filter((user) => user !== name);
  return {
    ...state,
    users: newUsers,
  };
};

export const usersReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_USER_START:
      return addUserStart(state);
    case ADD_USER_SUCCESS:
      return addUserSuccess(state, payload);
    case ADD_USER_FAIL:
      return addUserFail(state);
    case REMOVE_USER:
      return removeUser(state, payload);
    default:
      return state;
  }
};
