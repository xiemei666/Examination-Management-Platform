import React from 'react';
import styles from './Header.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_logo}></div>
      <div>
        <span className={styles.header_user}>
          <span className={styles.header_user_img}>
            <img src="https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png" />
          </span>
          chenmanjie
                </span>
      </div>
    </header>
  );
};

Header.propTypes = {
};

export default Header;
