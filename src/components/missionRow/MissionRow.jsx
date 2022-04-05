import React from 'react';
import PropTypes from 'prop-types';
import { Button, Badge } from 'react-bootstrap';
import style from './MissionRow.module.css';

function MissionRow({ mission }) {
  const { name, description } = mission;

  return (
    <tr className={style.Row}>
      <td className={style.Name}>{name}</td>
      <td className={style.Description}>{description}</td>
      <td className={style.Status}>
        <Badge bg="secondary"> NOT A MEMBER</Badge>
      </td>
      <td className={style.Button}>
        <Button variant="outline-dark">Join Mission</Button>
      </td>
    </tr>
  );
}

export default MissionRow;

MissionRow.defaultProps = {
  mission: '',
};

MissionRow.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }),
};
