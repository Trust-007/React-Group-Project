import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { joinMission, leavingMission } from '../../redux/missions/missionReducer';
import './missionItem.css';

const MissionItems = ({ items }) => {
  const {
    missionId, missionName, description, reserved,
  } = items;

  const dispatch = useDispatch();

  const joinAmission = () => {
    dispatch(joinMission(missionId));
  };

  const leaveAMission = () => {
    dispatch(leavingMission(missionId));
  };
  return (
    <tr key={missionId}>
      <td className="title">{missionName}</td>
      <td>{description}</td>
      <td className="check">
        <Badge className={reserved ? 'Active' : 'Action'}>
          {reserved ? 'ACTIVE MEMBER' : 'NOT A MEMEBR'}
        </Badge>
      </td>
      <td width="15%" className="check">
        <Button
          id={missionId}
          onClick={reserved ? leaveAMission : joinAmission}
          variant={reserved ? 'outline-danger' : 'outline-secondary'}
        >
          {reserved ? 'Leave Misson' : 'Join Mission'}
        </Button>
      </td>
    </tr>
  );
};

export default MissionItems;
