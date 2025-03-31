import Profile from './Profile.jsx';
import userData from '../userData.json';
import friends from '../friends.json';
import FriendList from './FriendList.jsx';
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
