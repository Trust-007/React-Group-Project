import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rocket from './Rocket';
import fetchRockets from '../../redux/rockets/rocketThunk';
import classes from './Rockets.module.css';

const Rockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  const rockets = useSelector((state) => state.rockets);
  console.log(rockets);
  const rocketList = rockets.map((item) => (
    <Rocket
      key={item.id}
      description={item.description}
      flickrImages={item.flickr_images}
      rocketName={item.rocket_name}
      reserved={item.reserved}
      id={item.id}
    />
  ));
  let content;
  if (rocketList.length === 0) {
    content = 'No rockets Found';
  } else {
    content = rocketList;
  }
  return <div className={classes.rockets}>{content}</div>;
};

export default Rockets;
