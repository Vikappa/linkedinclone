import { ADD_TO_NETWORK, REMOVE_FROM_NETWORK, KILL_YOUR_FRIENDS } from "../Actions/ADD_TO_NETWORK";

const initialState = { users: [] };
const networkReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_NETWORK:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case REMOVE_FROM_NETWORK:
      return {
        ...state,
        users: state.users.filter(user => user._id !== action.payload._id),
      };
    case KILL_YOUR_FRIENDS:
      return {
        users: []
      }
    default:
      return state
  }
}
export default networkReducer
