import { FETCH_MISSIONS, JOIN_MISSION, LEAVE_MISSION } from '../../constants';

// Action Creators

export const fetchMissions = () => async (dispatch) => {
  await fetch('https://api.spacexdata.com/v3/missions')
    .then((res) => res.json())
    .then((data) => dispatch({ type: FETCH_MISSIONS, missions: data }));
};

export const joinMission = (id) => ({ type: JOIN_MISSION, id });

export const leaveMission = (id) => ({ type: LEAVE_MISSION, id });

// Reducer

export default function missionsReducer(state = [], action) {
  let missions = [];

  switch (action.type) {
    case FETCH_MISSIONS:
      action.missions.forEach((mission) => {
        missions.push({
          id: mission.mission_id,
          name: mission.mission_name,
          description: mission.description,
          reserved: false,
        });
      });
      return missions;
    case JOIN_MISSION:
      missions = state.map((mission) => {
        if (mission.id !== action.id) { return mission; }
        return { ...mission, reserved: true };
      });
      return missions;
    case LEAVE_MISSION:
      missions = state.map((mission) => {
        if (mission.id !== action.id) { return mission; }
        return { ...mission, reserved: false };
      });
      return missions;
    default:
      return state;
  }
}
