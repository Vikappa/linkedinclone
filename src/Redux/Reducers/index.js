import { ADD_EXPERIENCE } from "../Actions/ADD_EXPERIENCE";
import { REMOVE_EXPERIENCE } from "../Actions/ADD_EXPERIENCE";
const initialState = {
  experiences: [],
};

export const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPERIENCE:
      return {
        ...state,
        experiences: [...state.experiences, action.payload],
      };
    case REMOVE_EXPERIENCE:
      return {
        ...state,
        experiences: state.experiences.filter(
          (exp) => exp._id !== action.payload
        ),
      };
    default:
      return state;
  }
};
