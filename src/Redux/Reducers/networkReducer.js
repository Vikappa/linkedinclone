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
        users: [
          ...state.users.slice(0, action.payload),
          ...state.users.slice(action.payload + 1),
        ],
      }
    case KILL_YOUR_FRIENDS:
      return {
        users: []
      }
    default:
      return state
  }
}
export default networkReducer
