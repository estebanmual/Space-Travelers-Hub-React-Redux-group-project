import { FETCH_ROCKETS } from '../../constants';

export const fetchRockets = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  dispatch({ type: FETCH_ROCKETS, payload: data });
};

export const rocketsReducer = (state = [], action) => {
  const rockets = [];
  switch (action.type) {
    case FETCH_ROCKETS:
      action.payload.forEach((rocket) => {
        rockets.push({
          id: rocket.rocket_id,
          name: rocket.rocket_name,
          type: rocket.rocket_type,
          flickrImages: rocket.flickr_images[0],
        });
      });
      return rockets;
    default:
      return state;
  }
};
