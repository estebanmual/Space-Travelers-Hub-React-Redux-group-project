import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function MyProfile() {
  const missions = useSelector((state) => state.missions);
  const rockets = useSelector((state) => state.rockets);
  const [reservedMissions, setReservedMissions] = useState();
  const [reservedRockets, setReservedRockets] = useState();

  useEffect(() => {
    const resMissions = missions.filter((mission) => mission.reserved && mission);
    const resRockets = rockets.filter((rocket) => rocket.reserved && rocket);
    setReservedMissions(resMissions);
    setReservedRockets(resRockets);
  }, []);

  console.log(reservedMissions, reservedRockets);

  return <div>MyProfile</div>;
}

export default MyProfile;
