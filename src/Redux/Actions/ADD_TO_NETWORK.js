export const ADD_TO_NETWORK = "BEFRIENDED";
export const REMOVE_FROM_NETWORK = "KILL_THIS_FRIEND";
export const KILL_YOUR_FRIENDS = "KILL_ALL_YOUR_FRIENDS"

export const AddToNetworkAction = (selectedProfile) => {
  return {
    type: ADD_TO_NETWORK,
    payload: selectedProfile,
  };
};

export const trashThis = (i) => {
  return {
    type: REMOVE_FROM_NETWORK,
    payload: i,
  };
};

export const friendsSlaughter = () => {
  return {
    type: KILL_YOUR_FRIENDS,
    payload: null,
  };}