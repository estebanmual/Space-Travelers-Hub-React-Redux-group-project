import React from 'react';
import PropTypes from 'prop-types';
import style from './MissionRow.module.css';

function MissionRow({ mission }) {
  const { name, description } = mission;

  return (
    <tr className={style.Row}>
      <td className={style.Name}>{name}</td>
      <td className={style.Description}>{description}</td>
      <td className={style.Status}>
        <div className={style.Status__NotMember}>NOT A MEMBER</div>
      </td>
      <td className={style.Button}><button type="button" className={style.Button__JoinMission}>Join Mission</button></td>
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
