import React from 'react';
import styles from './Header.scss'
import { connect } from 'dva';
import { Select, Form, } from 'antd';
import { injectIntl } from 'react-intl';
const { Option } = Select;
const Header = (props) => {
  const { getFieldDecorator } = props.form;
  return (
    <header className={styles.header}>
      <div className={styles.header_logo}></div>
      <div>
        <span className={styles.header_user}>
          <Form>
            <div style={{ margin: '17px' }}>
              <Form.Item>
                {getFieldDecorator('exam_id', {
                  initialValue: "中文"
                })(<Select
                  style={{ width: 100 }}
                >
                  <Option value='中文' onClick={() => props.changeLocale(props.intl.locale = 'zh')}>{props.intl.locale = '中文'}</Option>
                  <Option value='英语' onClick={() => props.changeLocale(props.intl.locale = 'en')}>{props.intl.locale = 'English'}</Option>
                </Select>)}
              </Form.Item>
            </div>
          </Form>
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
const mapDispatchToProps = dispatch => {
  return {
    changeLocale: payload => {
      dispatch({
        type: 'global/updateLocale',
        payload
      })
    }
  }
}
export default injectIntl(connect(null, mapDispatchToProps)(Form.create()(Header)));
