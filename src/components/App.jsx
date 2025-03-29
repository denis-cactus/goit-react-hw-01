import Profile from './Profile.jsx';
import userData from '../userData.json';
import './Profile.module.css';

function MyApp() {
  return (
    <div>
      <Profile userData={userData} />
    </div>
  );
}

export default MyApp;
