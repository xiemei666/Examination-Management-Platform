import React from 'react';
import { connect } from 'dva';
import styles from './addUser.scss'
function AddUser() {
  return (
    <div className={styles.wrapper}>
      <h2>添加试题</h2>
      <div className={styles.content}>
        <div className={styles.content_top}>
          <div className={styles.add_user}>
            11
          </div>
          <div className={styles.add_user}>
            122
          </div>
          <div className={styles.add_user}>
            333
          </div>
        </div>
      </div>
    </div>
  );
}

AddUser.propTypes = {
};

export default connect()(AddUser);
