import styles from './UserInfo.module.scss'

export const UserInfo = () => {
  return (
    <div className={styles.userInfo}>
      <h2 className={styles.userInfoTitle}>
        Login/pass существуещего юзера в базе api dummyjson.com для проверки
        Login функционала:
      </h2>
      <div className={styles.userInfoData}>
        <span>
          Login: <span className={styles.accent}>kminchelle</span>
        </span>
        <span>
          Password: <span className={styles.accent}>0lelplR</span>
        </span>
      </div>

      <div className={styles.userInfoData}>
        <span>
          Login: <span className={styles.accent}>atuny0</span>
        </span>
        <span>
          Password: <span className={styles.accent}>9uQFF1Lh</span>
        </span>
      </div>
    </div>
  )
}
