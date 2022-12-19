import classes from './Rocket.module.css';

const Rocket = (props) => {
  const { rocketName, description, flickrImages } = props;
  return (
    <div className={classes.rocket}>
      <img src={flickrImages[1]} alt="Rocket" />
      <div>
        <h3>{rocketName}</h3>
        <p>{description}</p>
        <button type="button">Reserve Rocket</button>
      </div>
    </div>
  );
};

export default Rocket;
