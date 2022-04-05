import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../../Redux/Missions/missions';

function Missions() {
  const missions = useSelector((state) => (state.missions));
  const dispatch = useDispatch();

  console.log(missions);

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  return <div>Missions</div>;
}

export default Missions;
