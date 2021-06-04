import { CLEAR_ADD_CONTACT } from "../../../constants/ActionTypes"

export default () => (dispatch) => {
    dispatch({
        type: CLEAR_ADD_CONTACT,
    });
};