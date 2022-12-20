import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { rocketActions } from '../../redux/rockets/rocketSlice';
import classes from './Rocket.module.css';

const Rocket = (props) => {
  const {
    id, rocketName, description, flickrImages,
  } = props;

  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();

  const reserveHandler = () => {
    if (toggle) {
      console.log(toggle);
      dispatch(rocketActions.cancelReserve(id));
      setToggle(false);
    } else {
      console.log(toggle);
      dispatch(rocketActions.reserveRocket(id));
      setToggle(true);
    }
  };
  const tag = <span className={classes.tag}>Reserved</span>;
  return (
    <div className={classes.rocket}>
      <img src={flickrImages[0]} alt="Rocket" />
      <div>
        <h3>{rocketName}</h3>
        <p>
          {toggle && tag}
          {description}
        </p>
        <button
          type="button"
          onClick={reserveHandler}
          className={toggle ? classes.cancel : classes.reserve}
        >
          {toggle ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </div>
  );
};

export default Rocket;
