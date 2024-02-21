import { FETCH_ALL_USERS } from '../Actions/ADD_EXPERIENCE';

const initialState = {
    currentUser: []
}


const allUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_USERS:
            return {
                ...state,
                currentUser: action.payload
            }
      default:
        return state
    }
  }

export default allUserReducer