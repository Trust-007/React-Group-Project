import { useSelector } from 'react-redux';
import classes from './RocketProfile.module.css';

const MissionProfile = () => {
  const mission = useSelector((state) => state.mission);
  const filtered = mission.filter((element) => {
    if (element.reserved === true) {
      return <li>{element.missionName}</li>;
    }
    return '';
  });
  const list = filtered.map((item) => (
    <li key={item.missionId}>{item.missionName}</li>
  ));
  let content;
  if (list.length === 0) {
    content = <li>No list Current mission</li>;
  } else {
    content = list;
  }
  return <ul className={classes.list}>{content}</ul>;
};

export default MissionProfile;