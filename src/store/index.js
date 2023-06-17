import { createStore, combineReducers } from "redux";
import { usersReducer } from "./users/reducer";

const rootReducer = combineReducers({
  usersReducer,
});

export const store = createStore(rootReducer);
