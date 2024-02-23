export const SEARCHING_JOBS = "SEARCH_JOBS";
export const LOADING_JOBS = "LOADING_JOBS";
export const FINISH_LOADING_JOBS = "FINISH_LOADING_JOBS";
const initialState = {
  allTheJobs: [],
  isLoading: false,
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCHING_JOBS:
      return {
        ...state,
        allTheJobs: action.payload,
      };
    case LOADING_JOBS:
      return {
        ...state,
        isLoading: true,
      };
    case FINISH_LOADING_JOBS:
      return {
        ...state,
        isLoading: false,
        allTheJobs: action.payload,
      };
    default:
      return state;
  }
};
export default jobsReducer;
