import {
  API_COUNTRIES,
  increment,
  SET_TASKS,
  SET_TASK_ID,
  USER_AGE,
  USER_NAME,
} from "../action";

const initialState = {
  name: "",
  age: 0,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_NAME:
      return { ...state, name: action.payload };
    case USER_AGE:
      return { ...state, age: action.payload };
    default:
      return state;
  }
}

export default userReducer;
