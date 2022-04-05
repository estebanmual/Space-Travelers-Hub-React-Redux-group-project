import FETCH_MISSIONS from '../../constants';

// Action Creators

export const fetchMissions = () => async (dispatch) => {
  await fetch('https://api.spacexdata.com/v3/missions')
    .then((res) => res.json())
    .then((data) => dispatch({ type: FETCH_MISSIONS, missions: data }));
};

// Reducer

export default function missionsReducer(state = [], action) {
  const missions = [];

  switch (action.type) {
    case FETCH_MISSIONS:
      action.missions.forEach((mission) => {
        missions.push({
          id: mission.mission_id,
          name: mission.mission_name,
          description: mission.description,
        });
      });
      return missions;
    default:
      return state;
  }
}
