import { FETCH_ROCKETS, RESERVE_ROCKET } from '../../constants';

export const fetchRockets = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  dispatch({ type: FETCH_ROCKETS, payload: data });
};

export const rocketsReducer = (state = [], action) => {
  const rockets = [];
  let newState = [];
  switch (action.type) {
    case FETCH_ROCKETS:
      action.payload.forEach((rocket) => {
        rockets.push({
          id: rocket.rocket_id,
          name: rocket.rocket_name,
          type: rocket.rocket_type,
          flickrImages: rocket.flickr_images[0],
          description: rocket.description,
          reserved: false,
        });
      });
      return rockets;
    case RESERVE_ROCKET:
      newState = state.map((rocket) => {
        if (rocket.id !== action.id) return { ...rocket };
        return { ...rocket, reserved: !rocket.reserved };
      });
      return newState;
    default:
      return state;
  }
};
