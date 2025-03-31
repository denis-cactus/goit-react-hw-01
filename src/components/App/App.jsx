import Profile from '../Profile/Profile.jsx';
import userData from '../../data/userData.json';
import friends from '../../data/friends.json';
import FriendList from '../FriendList/FriendList.jsx';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appContainer}>
      <Profile {...userData} />
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
