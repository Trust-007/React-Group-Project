import classes from './ProfilePage.module.css';
import RocketProfile from './RocketProfile';

const ProfilePage = () => (
  <div className={classes.container}>
    <div className={classes.missions}>
      <h2>My Missions</h2>
    </div>
    <div className={classes.rockets}>
      <h2>My Rockets</h2>
      <RocketProfile />
    </div>
  </div>
);

export default ProfilePage;
