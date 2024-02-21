import { POST_FOCUSED } from '../Actions/ADD_EXPERIENCE';

const initialState = {
    focusedPost_Id: ""
}


const focusedPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_FOCUSED:
            return {
                focusedPost_Id: action.payload
            }
      default:
        return state
    }
  }

export default focusedPostReducer