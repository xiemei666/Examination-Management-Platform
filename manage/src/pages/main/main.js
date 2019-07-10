import React from 'react';
import Header from '../../components/Header/Header'
import styles from './main.scss'
import { Link, Route, Switch } from 'dva/router'
import AddQuestions from './questions/addQuestions/addQuestions'
import ClassQuestions from './questions/classQuestions/classQuestions'
import CheckQuestions from './questions/checkQuestions/checkQuestions'
import addUser from './user/addUser/addUser'
import userDisplay from './user/userDisplay/userDisplay'
import addTest from './test/addTest/addTest'
import testPaper from './test/testPaper/testPaper'
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const Main = () => {
    return (
        <div className={styles.wrapper}>
            <Header></Header>
            <div className={styles.content}>
                <div className={styles.slide}>
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
                                    <span>试题管理</span>
                                </span>
                            }
                        >
                            <Menu.Item key="1"><Link to='/main/addQuestions'>添加试题</Link></Menu.Item>
                            <Menu.Item key="2"><Link to='/main/classQuestions'>试题分类</Link></Menu.Item>
                            <Menu.Item key="3"><Link to='/main/checkQuestions'>查看试题</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                                    <Icon type="mail" />
                                    <span>用户管理</span>
                                </span>
                            }
                        >
                            <Menu.Item key="4"><Link to='/main/addUser'>添加用户</Link></Menu.Item>
                            <Menu.Item key="5"><Link to='/main/userDisplay'>用户展示</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub3"
                            title={
                                <span>
                                    <Icon type="mail" />
                                    <span>考试管理</span>
                                </span>
                            }
                        >
                            <Menu.Item key="6"><Link to='/main/addTest'>添加考试</Link></Menu.Item>
                            <Menu.Item key="7"><Link to='/main/testPaper'>试卷列表</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub4"
                            title={
                                <span>
                                    <Icon type="mail" />
                                    <span>班级管理</span>
                                </span>
                            }
                        >
                            <Menu.Item key="8">班级管理</Menu.Item>
                            <Menu.Item key="9">教室管理</Menu.Item>
                            <Menu.Item key="10">学生管理</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub5"
                            title={
                                <span>
                                    <Icon type="mail" />
                                    <span>阅卷管理</span>
                                </span>
                            }
                        >
                            <Menu.Item key="11">待批班级</Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div className={styles.right}>
                    <Switch>
                        <Route path="/main/addQuestions" component={AddQuestions} />
                        <Route path="/main/classQuestions" component={ClassQuestions} />
                        <Route path="/main/checkQuestions" component={CheckQuestions} />
                        <Route path="/main/addUser" component={addUser} />
                        <Route path="/main/userDisplay" component={userDisplay} />
                        <Route path="/main/addTest" component={addTest} />
                        <Route path="/main/testPaper" component={testPaper} />
                    </Switch>
                </div>
            </div>
        </div>
    );
};

Main.propTypes = {
};

export default Main;
