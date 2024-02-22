import { FETCH_ALL_POST_COMMENTS } from '../Actions/ADD_EXPERIENCE'
const initialState = {
    allComments: []
}


const allPostCommentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_POST_COMMENTS:
            return {
              ...state, 
              allComments: action.payload
            }
          
      default:
        return state
    }
  }

export default allPostCommentsReducer