import { SEARCH_CONTACTS } from "../../../constants/ActionTypes";

export default (searchText) => (dispatch) => {
    dispatch({
        type: SEARCH_CONTACTS,
        payload: searchText,
    });
};