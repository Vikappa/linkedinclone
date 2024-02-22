import { FETCH_CURRENT_USER } from "../Actions/ADD_EXPERIENCE";
import { DELETE_CURRENT_USER } from "../Actions/ADD_EXPERIENCE";

const initialState = {
  currentUser: null,
};

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case DELETE_CURRENT_USER:
      return {
        currentUser: null,
      };
    default:
      return state;
  }
};

export default currentUserReducer;
