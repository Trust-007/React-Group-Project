import { useSelector } from 'react-redux';
import MissionItems from './missionItem';
import './missionList.css';

const MissionList = () => {
  const missions = useSelector((state) => state.mission);

  return (
    <section className="tableSection">
      <table>
        <tr style={{ backgroundColor: 'white' }}>
          <th width="10%" className="border">Mission</th>
          <th width="60%" className="border">Description</th>
          <th className="border">Status</th>
          <th className="border">{' '}</th>
        </tr>
        <tbody>
          {
        missions.map((elements) => (

          <MissionItems key={elements.missionId} items={elements} />
        ))
     }
        </tbody>
      </table>
    </section>
  );
};

export default MissionList;
