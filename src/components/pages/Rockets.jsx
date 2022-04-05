import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../../Redux/Rockets/Rockets';

function Rockets() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  console.log(rockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);
  return <div>Rockets</div>;
}

export default Rockets;
