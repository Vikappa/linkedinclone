import { FETCH_CURRENT_USER_EXPERIENCES } from '../Actions/ADD_EXPERIENCE';

const initialState = {
    experiences: []
}


const experienceReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CURRENT_USER_EXPERIENCES:
            return {
              ...state, 
              experiences: action.payload
            }
          
      default:
        return state
    }
  }

export default experienceReducer