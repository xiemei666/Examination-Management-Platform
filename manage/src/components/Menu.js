import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';
import { injectIntl } from 'react-intl';

const { SubMenu } = Menu;

const MenuList = props => {
  console.log('menu props...', props);
  return (
    <Menu
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      theme="dark"
    >
      <SubMenu
        key="sub1"
        title={
          <span>
            <Icon type="mail" />
            <span>{props.intl.formatMessage({ id: 'router.questions' })}</span>
          </span>
        }
      >
        <Menu.Item key="1"><Link to='/main/addQuestions'>{props.intl.formatMessage({ id: 'router.questions.add' })}</Link></Menu.Item>
        <Menu.Item key="2"><Link to='/main/classQuestions'>{props.intl.formatMessage({ id: 'router.questions.view' })}</Link></Menu.Item>
        <Menu.Item key="3"><Link to='/main/checkQuestions'>{props.intl.formatMessage({ id: 'router.questions.type' })}</Link></Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub2"
        title={
          <span>
            <Icon type="mail" />
            <span>{props.intl.formatMessage({ id: 'router.user' })}</span>
          </span>
        }
      >
        <Menu.Item key="4"><Link to='/main/addUser'>{props.intl.formatMessage({ id: 'router.user.add' })}</Link></Menu.Item>
        <Menu.Item key="5"><Link to='/main/userDisplay'>{props.intl.formatMessage({ id: 'router.user.display' })}</Link></Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub3"
        title={
          <span>
            <Icon type="mail" />
            <span>{props.intl.formatMessage({ id: 'router.text' })}</span>
          </span>
        }
      >
        <Menu.Item key="6"><Link to='/main/addTest'>{props.intl.formatMessage({ id: 'router.text.add' })}</Link></Menu.Item>
        <Menu.Item key="7"><Link to='/main/testPaper'>{props.intl.formatMessage({ id: 'router.text.paper' })}</Link></Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub4"
        title={
          <span>
            <Icon type="mail" />
            <span>{props.intl.formatMessage({ id: 'router.management' })}</span>
          </span>
        }
      >
        <Menu.Item key="8"><Link to='/main/classManagement'>{props.intl.formatMessage({ id: 'router.managemen' })}</Link></Menu.Item>
        <Menu.Item key="9"><Link to='/main/classroomManagement'>{props.intl.formatMessage({ id: 'router.management.room' })}</Link></Menu.Item>
        <Menu.Item key="10"><Link to='/main/studentManagement'>{props.intl.formatMessage({ id: 'router.management.student' })}</Link></Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub5"
        title={
          <span>
            <Icon type="mail" />
            <span>{props.intl.formatMessage({ id: 'router.marking' })}</span>
          </span>
        }
      >
        <Menu.Item key="11"><Link to='/main/classesApproved'>{props.intl.formatMessage({ id: 'router.marking.approved' })}</Link></Menu.Item>
      </SubMenu>
    </Menu>


  );
};

export default injectIntl(MenuList);
