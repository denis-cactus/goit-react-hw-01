import Profile from './Profile.jsx';
import userData from '../userData.json';
import friends from '../friends.json';
import FriendList from './FriendList.jsx';

function App() {
  return (
    <div>
      <Profile {...userData} />
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
