import React, { useEffect, useState } from 'react';
import styles from './Header.scss'
import { connect } from 'dva';
import { Select, Form, Menu, Dropdown, Button } from 'antd';
import { injectIntl } from 'react-intl';
const { Option } = Select;


const Header = (props) => {
  const menu = (
    <Menu style={{ marginTop: '20px', width: '135px' }}>
      <Menu.Item>
        <span onClick={() => updataMask(true)}>个人中心</span>
      </Menu.Item>
      <Menu.Item>
        <span>我的班级</span>
      </Menu.Item>
      <Menu.Item>
        <span>设置</span>
      </Menu.Item>
      <Menu.Item>
        <span>退出登录</span>
      </Menu.Item>
    </Menu>
  );
  const { } = props
  const [mask, updataMask] = useState(false)
  useEffect(() => {

  }, [])
  let handleSubmit = e => {
    //validateFields  校验并获取一组输入域的值与 Error，若 fieldNames 参数为空，则校验全部组件
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {

      }
      updataMask(false)
    });
  };
  const { getFieldDecorator } = props.form;
  return (
    <header className={styles.header}>
      <div className={styles.header_logo}></div>
      <div>
        <div className={styles.header_user}>
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
                  <Option value='日语' onClick={() => props.changeLocale(props.intl.locale = 'ja')}>{props.intl.locale = '日本語'}</Option>
                </Select>)}
              </Form.Item>
            </div>
          </Form>
          <div className={styles.headerUser}>
            <Dropdown overlay={menu} placement="topCenter">
              <span>
                <span className={styles.header_user_img}>
                  <img src="https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png" />
                </span>
                chenmanjie
                </span>
            </Dropdown>
          </div>
        </div>
      </div>
      {
        mask && <div className={styles.mask}>
          <div className={styles.mask_content}>
            <div className={styles.content_top}>
              <span className={styles.header_user_img}>
                <img src="https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png" />
              </span>
            </div>
            <div className={styles.content_con}>
              <label>用户名：<span>chenmanjie</span></label>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Item className={styles.footer_button}>
                <Button type="primary" htmlType="submit" style={{ width: 110 }}>
                  确定
                </Button>
                <Button>
                  取消
              </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      }
    </header>
  );
};

Header.propTypes = {
};
const mapStateToProps = state => {
  return {
    ...state.login,
  }
}
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
export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(Form.create()(Header)));
