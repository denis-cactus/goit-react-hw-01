import styles from './Profile.module.css';

export default function Profile({ userData }) {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = userData;
  return (
    <div className={styles.card}>
      <div className={styles.mainInfo}>
        <img className={styles.avatar} src={avatar} alt="User avatar" />
        <p className={styles.name}>{username}</p>
        <p className={styles.username}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.cardStats}>
        <li className={styles.cardStatsLi}>
          <span>Followers</span>
          <span>1000</span>
        </li>
        <li className={styles.cardStatsLi}>
          <span>Views</span>
          <span>2000</span>
        </li>
        <li className={styles.cardStatsLi}>
          <span>Likes</span>
          <span>3000</span>
        </li>
      </ul>
    </div>
  );
}
