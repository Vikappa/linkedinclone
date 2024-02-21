import { FETCH_ALL_POSTS } from '../Actions/ADD_EXPERIENCE';

const initialState = {
    arrayPosts: []
}


const fetchAllPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_POSTS:
            return {
                ...state,
                arrayPosts: action.payload
            }
      default:
        return state
    }
  }

export default fetchAllPostReducer