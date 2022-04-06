import React from 'react';
import PropTypes from 'prop-types';
import style from './SingleRocket.module.css';

function SingleRocket({ rocket }) {
  const {
    name, type, flickrImages,
  } = rocket;
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <img src={flickrImages} alt={name} />
      </div>
      <div className={style.infoContainer}>
        <h1>{name}</h1>
        <p>
          {type}
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quod alias distinctio animi est? Nihil laudantium aliquid labore deleniti
          temporibus eligendi iusto minus error quo corrupti ratione asperiores,
          rem rerum amet suscipit expedita vel, atque numquam,
          ut architecto sint quidem accusantium.
        </p>
        <button className={style.infoButton} type="button">Reserve Rocket</button>
      </div>
    </div>
  );
}

export default SingleRocket;

SingleRocket.defaultProps = {
  rocket: '',
};

SingleRocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    flickrImages: PropTypes.string,
  }),
};
