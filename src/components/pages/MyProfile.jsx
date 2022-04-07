import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import style from './MyProfile.module.css';

function MyProfile() {
  const missions = useSelector((state) => state.missions);
  const rockets = useSelector((state) => state.rockets);
  const [reservedMissions, setReservedMissions] = useState([]);
  const [reservedRockets, setReservedRockets] = useState([]);

  useEffect(() => {
    const resMissions = missions.filter((mission) => mission.reserved && mission);
    const resRockets = rockets.filter((rocket) => rocket.reserved && rocket);
    setReservedMissions(resMissions);
    setReservedRockets(resRockets);
  }, []);

  return (
    <div className={style.container}>
      <div>
        <h1>My Missions</h1>
        <ul className={style.list}>
          {reservedMissions.map((mission) => <li key={mission.id}>{mission.name}</li>)}
        </ul>
      </div>
      <div>
        <h1>My Rockets</h1>
        <ul className={style.list}>
          {reservedRockets.map((rocket) => <li key={rocket.id}>{rocket.name}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default MyProfile;
