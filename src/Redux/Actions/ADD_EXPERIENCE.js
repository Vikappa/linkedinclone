export const addExperience = (experience) => ({
  type: "ADD_EXPERIENCE",
  payload: experience,
});
export const removeExperience = (experienceId) => ({
  type: "REMOVE_EXPERIENCE",
  payload: experienceId,
});
