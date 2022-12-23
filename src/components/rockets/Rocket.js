import { useDispatch } from 'react-redux';
import { rocketActions } from '../../redux/rockets/rocketSlice';
import classes from './Rocket.module.css';

const Rocket = (props) => {
  const {
    id, rocketName, description, flickrImages, reserved,
  } = props;
  const dispatch = useDispatch();

  const reserveHandler = () => {
    if (reserved) {
      dispatch(rocketActions.cancelReserve(id));
    } else {
      dispatch(rocketActions.reserveRocket(id));
    }
  };
  const tag = <span className={classes.tag}>Reserved</span>;
  return (
    <div className={classes.rocket}>
      <img src={flickrImages[0]} alt="Rocket" />
      <div>
        <h3>{rocketName}</h3>
        <p>
          {reserved && tag}
          {description}
        </p>
        <button
          type="button"
          onClick={reserveHandler}
          className={reserved ? classes.cancel : classes.reserve}
        >
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </div>
  );
};

export default Rocket;
