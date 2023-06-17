import {
  REMOVE_USER,
  ADD_USER_START,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
} from "./actionTypes";

export const addUserStart = () => {
  return {
    type: ADD_USER_START,
  };
};

export const addUserSuccess = (name) => {
  return {
    type: ADD_USER_SUCCESS,
    payload: { name },
  };
};

export const addUserFail = () => {
  return {
    type: ADD_USER_FAIL,
  };
};

export const removeUser = (name) => {
  return {
    type: REMOVE_USER,
    payload: { name },
  };
};
