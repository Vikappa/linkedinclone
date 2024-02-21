export const SEARCHING_JOBS = "SEARCHING_JOBS";
export const LOADING_JOBS = "LOADING_JOBS";
export const FINISH_LOADING_JOBS = "FINISH_LOADING_JOBS";

export const searchingJobs = (jobs) => ({
  type: SEARCHING_JOBS,
  payload: jobs,
});

export const loadingJobs = () => ({
  type: LOADING_JOBS,
});

export const finishLoadingJObs = () => ({
  type: FINISH_LOADING_JOBS,
});
