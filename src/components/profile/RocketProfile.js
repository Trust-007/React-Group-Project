import { useSelector } from 'react-redux';
import classes from './RocketProfile.module.css';

const RocketProfile = () => {
  const rockets = useSelector((state) => state.rockets);
  const filtered = rockets.filter((rocket) => {
    if (rocket.reserved === true) {
      return <li>{rocket.rocket_name}</li>;
    }
    return '';
  });
  const list = filtered.map((item) => (
    <li key={item.id}>{item.rocket_name}</li>
  ));
  let content;
  if (list.length === 0) {
    content = <li>No list Currently</li>;
  } else {
    content = list;
  }
  return <ul className={classes.list}>{content}</ul>;
};

export default RocketProfile;
