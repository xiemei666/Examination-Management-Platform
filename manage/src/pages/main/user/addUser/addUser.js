import React from 'react';
import styles from './addUser.scss'
import User from './user/user'
import AddIdentityr from './addIdentityr/addIdentityr'
import Add_api_jurisdiction from './Add_api_jurisdiction/Add_api_jurisdiction'
import Add_view from './add_view/add_view'
import Identityr_jurisdiction from './identityr_jurisdiction/identityr_jurisdiction'
import View_jurisdiction from './view_jurisdiction/view_jurisdiction'
function AddUser(props) {
  return (
    <div className={styles.wrapper}>
      <h2>添加用户</h2>
      <div className={styles.content}>
        <User></User>
        <AddIdentityr></AddIdentityr>
        <Add_api_jurisdiction></Add_api_jurisdiction>
        <Add_view></Add_view>
        <Identityr_jurisdiction></Identityr_jurisdiction>
        <View_jurisdiction></View_jurisdiction>
      </div>
    </div>
  );
}
AddUser.propTypes = {
};

export default AddUser;