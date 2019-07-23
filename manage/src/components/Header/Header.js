import React, { useState, useEffect } from 'react';
import styles from './Header.scss'
import { connect } from 'dva';
import {withRouter} from "dva/router"
import { Select, Form, Menu, Dropdown, Modal, Button } from 'antd';
import { injectIntl } from 'react-intl';
// import styles from "./excel.scss"
const { Option } = Select;
const Header = (props) => {
  console.log(props)
  let { userInfo} = props
  const { getFieldDecorator } = props.form;
  let [loading, setLoading] = useState(false)
  let [visible, setVisible] = useState(false)
  //判断点击的下拉菜单是哪个
  let showModal = (e) => {
    let key = e.key * 1
    switch (key) {
      case 0:
        setVisible(true)
        break;
      case 2:
        props.history.push("/excel")
        break;
      case 3:
        props.logOut()
        break;
      default:
        break;
    }

  };
  //点击确定的时候把用户信息改变
  let handleOk =  () => {
    
    props.changeUserMsg({ user_id: userInfo.user_id, avatar: props.picUrl })
    setLoading(false)
    setVisible(false)
  };
  let handleCancel = () => {
    setVisible(false)
  };
  //头像图片formdata上传
  let replaceUserPic = (e) => {
    let form = new FormData()
    form.append(e.target.files[0].name, e.target.files[0])
    props.changePic(form)
  }
  //下拉菜单的选项
  const menu = (
    <Menu style={{ width: '100%', borderRadius: '2px' }} onClick={showModal}>
      <Menu.Item key="0">
        <a target="_blank" rel="noopener noreferrer">
          个人中心
        </a>
      </Menu.Item>
      <Menu.Item key="1">
        <a target="_blank" rel="noopener noreferrer">
          我的班级
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2">
        Excel导入导出
      </Menu.Item>
      <Menu.Item key="3">
        退出登录
      </Menu.Item>
    </Menu>
  );
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
                  <Option value='俄罗斯语' onClick={() => props.changeLocale(props.intl.locale = 'ru')}>{props.intl.locale = 'русский язык '}</Option>
                  <Option value='日语' onClick={() => props.changeLocale(props.intl.locale = 'ja')}>{props.intl.locale = '日本語'}</Option>
                </Select>)}
              </Form.Item>
            </div>
          </Form>
          {/* 头像滑过下拉菜单 */}
          <div className={styles.header_hove}>
            <Dropdown overlay={menu} placement='bottomCenter'>
              <a className="ant-dropdown-link">
                <span className={styles.header_user_img}>
                  <img src={userInfo.avatar} />
                </span>
                <span>{userInfo.user_name}</span>
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
      <Modal
        visible={visible}
        title="个人中心"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            取消
            </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            确认
            </Button>,
        ]}
      >
        <div className="user_pic">
          <span>头像:</span>
          <span><img src={props.picUrl ? props.picUrl: props.userInfo.avatar ? props.userInfo.avatar: 'https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png'} />
            <input type="file" onChange={(e) => replaceUserPic(e)} /></span></div>
        <div><span>用户名:</span><span>{userInfo.user_name}</span></div>
        <div><span>身份名称:</span><span>{userInfo.identity_text}</span></div>
      </Modal>
    </header>
  );
};

Header.propTypes = {
};
const mapStateToProps = state => {
  return {
    ...state.login
  }
}
const mapDispatchToProps = dispatch => {
  return {
    changeLocale: payload => {
      dispatch({
        type: 'global/updateLocale',
        payload
      })
    },
    changePic: payload => {
      dispatch({
        type: "login/changePic",
        payload
      })
    },
    changeUserMsg: payload => {
      dispatch({
        type: 'login/changeUserMsg',
        payload
      })
    },
    logOut:()=>{
      dispatch({
        type:'login/logout',
      })
    }

  }
}
export default withRouter(injectIntl(connect(mapStateToProps, mapDispatchToProps)(Form.create()(Header))));
