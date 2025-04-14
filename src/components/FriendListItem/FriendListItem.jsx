import styles from '../FriendListItem/FriendListItem.module.css';
import clsx from 'clsx';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={styles.friendCard}>
      <img src={avatar} alt={`${name}'s avatar`} width="64" />
      <p className={styles.friendName}>{name}</p>
      <p className={clsx(isOnline ? styles.online : styles.offline)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
