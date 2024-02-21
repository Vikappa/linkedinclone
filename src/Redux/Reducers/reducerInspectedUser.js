import { FETCH_INSPECTED_USER } from '../Actions/ADD_EXPERIENCE'

const initialState = {
    inspectedUser: null
}

const reducerInspectedUser = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_INSPECTED_USER:
            return {
                ...state,
                currentUser: action.payload
            }
      default:
        return state
    }
  }

export default reducerInspectedUser