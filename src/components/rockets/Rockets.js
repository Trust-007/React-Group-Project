import { useSelector } from 'react-redux';
import Rocket from './Rocket';
import classes from './Rockets.module.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const rocketList = rockets.map((item) => (
    <Rocket
      key={item.id}
      description={item.description}
      flickrImages={item.flickr_images}
      rocketName={item.rocket_name}
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
