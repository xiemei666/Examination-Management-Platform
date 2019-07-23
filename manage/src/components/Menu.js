import React from 'react';
import { Menu, Icon } from 'antd';
import { NavLink } from 'dva/router';
import { injectIntl } from 'react-intl';
import { connect } from 'dva';

const { SubMenu } = Menu;

const MenuList = props => {
  return (
    <Menu
      defaultOpenKeys={[props.myView[0].name]}
      defaultSelectedKeys={[props.myView[0].children[0].name]}
      mode="inline"
      theme="dark"
    >
      {
        props.myView.map(item => {
          return <SubMenu
            key={item.name}
            title={
              <span>
                <Icon type="mail" />
                <span>{props.intl.formatMessage({ id: item.name })}</span>
              </span>
            }
          >{
              item.children.map(value => {
                //判断二级页面不需要显示的时候就没有name
                return value.name ? <Menu.Item key={value.name}>
                  <NavLink to={value.path}>{props.intl.formatMessage({ id: value.name })}</NavLink>
                </Menu.Item> : null
              })
            }</SubMenu>
        })
      }
    </Menu>
  );
};
const mapStateToProps = state => {
  return {
    myView: state.login.myView
  }
}
export default injectIntl(connect(mapStateToProps)(MenuList));
