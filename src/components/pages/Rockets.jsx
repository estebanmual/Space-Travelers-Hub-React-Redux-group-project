import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../../Redux/Rockets/Rockets';
import SingleRocket from '../SingleRocket/SingleRocket';

function Rockets() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);
  return rockets.map((rocket) => <SingleRocket key={rocket.id} rocket={rocket} />);
}

export default Rockets;
