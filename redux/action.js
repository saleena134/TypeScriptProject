export const USER_NAME = "USER_NAME";
export const PASSWORD = "PASSWORD";

export const userName = (name) => (dispatch) => {
  dispatch({
    type: USER_NAME,
    payload: name,
  });
};
export const userPass = (pass) => (dispatch) => {
  dispatch({
    type: PASSWORD,
    payload: pass,
  });
};
