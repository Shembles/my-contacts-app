import axiosInstance from "../../../helpers/axiosInstance";
import { REGISTER_ERROR, REGISTER_LOADING, REGISTER_SUCCESS } from "../../../constants/ActionTypes";

export const register = ({
    email,
    password,
    username,
    lastName: last_name,
    firstName: first_name,
}) => (dispatch) => {

    dispatch({
        type: REGISTER_LOADING,
    });

    axiosInstance()
    .post("/auth/register", {
        email,
        password,
        username,
        last_name,
        first_name,
    })
    .then((res) => {
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
        });
    })
    .catch((err) => {
        dispatch({
            type: REGISTER_ERROR,
            payload: err.response ? err.response.data : "COULD NOT CONNECT",
        });
    });
};