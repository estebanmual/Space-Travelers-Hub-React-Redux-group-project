import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Badge } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { joinMission } from '../../Redux/Missions/missions';
import style from './MissionRow.module.css';

function MissionRow({ mission }) {
  const {
    name, description, reserved, id,
  } = mission;

  const [reservedMission, setReservedMission] = useState(reserved);

  const dispatch = useDispatch();

  return (
    <tr className={style.Row}>
      <td className={style.Name}>{name}</td>
      <td className={style.Description}>{description}</td>
      <td className={style.Status}>
        {reservedMission ? <Badge bg="primary">Active Member</Badge> : <Badge bg="secondary">NOT A MEMBER</Badge>}
      </td>
      <td className={style.Button}>
        {reservedMission ? <Button id={id} variant="outline-danger" onClick={(e) => { setReservedMission(false); dispatch(joinMission(e.target.id)); }}>Leave Mission</Button> : <Button id={id} variant="outline-dark" onClick={(e) => { setReservedMission(true); dispatch(joinMission(e.target.id)); }}>Join Mission</Button>}
      </td>
    </tr>
  );
}

export default MissionRow;

MissionRow.defaultProps = {
  mission: {
    id: null,
    name: '',
    description: '',
    reserved: false,
  },
};

MissionRow.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
  }),
};
