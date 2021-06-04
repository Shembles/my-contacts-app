import { LOGOUT_USER } from "../../../constants/ActionTypes";

export default (history) => (dispatch) => {
    localStorage.removeItem("token");
    dispatch({
        type: LOGOUT_USER,
    });
    history.push("/auth/login");
};