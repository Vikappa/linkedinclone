export const addExperience = (experience) => ({
  type: "ADD_EXPERIENCE",
  payload: experience,
});
export const removeExperience = (experienceId) => ({
  type: "REMOVE_EXPERIENCE",
  payload: experienceId,
});

export const FETCH_ALL_USERS = "FETCH_ALL_USERS";
export const FETCH_CURRENT_USER = "FETCH_CURRENT_USER";
export const ADD_EXPERIENCE = "ADD_EXPERIENCE"
export const REMOVE_EXPERIENCE = "REMOVE_EXPERIENCE"