import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import { fetchMissions } from '../../Redux/Missions/missions';
import MissionRow from '../missionRow/MissionRow';
import style from './Missions.module.css';

function Missions() {
  const missions = useSelector((state) => (state.missions));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  return (
    <Table striped bordered>
      <thead className={style.Table__Head}>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {missions.map(((mission) => (<MissionRow key={mission.id} mission={mission} />)))}
      </tbody>
    </Table>
  );
}

export default Missions;
