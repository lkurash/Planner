import styles from "./sideMenu.module.scss";

const SideMenu = () => {
  return (
    <div className={styles.sideMenu}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperButton} role="button">
          <span>Notes</span>
        </div>
        <div className={styles.wrapperButton} role="button">
          <span>Reminders</span>
        </div>
        <div className={styles.wrapperButton} role="button">
          <span>Shortcuts</span>
        </div>
        <div className={styles.wrapperButton} role="button">
          <span>Archive</span>
        </div>
        <div className={styles.wrapperButton} role="button">
          <span>Basket</span>
        </div>
      </div>
    </div>
  );
};
export default SideMenu;
