import React from 'react';
import Header from '../../components/Header/Header'
import styles from './main.scss'
import {Link,Route,Switch} from 'dva/router'
import AddQuestions from './questions/addQuestions/addQuestions'
import ClassQuestions from './questions/classQuestions/classQuestions'
import CheckQuestions from './questions/checkQuestions/checkQuestions'
import AddUser from './user/addUser/addUser'
import UserDisplay from './user/userDisplay/userDisplay'
import AddTest from './test/addTest/addTest'
import TestPaper from './test/testPaper/testPaper'
import ClassManagement from './management/classManagement/classManagement'
import ClassroomManagement from './management/classroomManagement/classroomManagement'
import StudentManagement from './management/studentManagement/studentManagement'
import ClassesApproved from './marking/classesApproved/classesApproved'
import questiuonsDetail from "./questions/questionsDetail/questionsDetail"
import editQuestions from "./questions/editQuestions/editQuestions"
import { Menu, Icon, Button } from 'antd';
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
                            <Menu.Item key="8"><Link to='/main/classManagement'>班级管理</Link></Menu.Item>
                            <Menu.Item key="9"><Link to='/main/classroomManagement'>教室管理</Link></Menu.Item>
                            <Menu.Item key="10"><Link to='/main/studentManagement'>学生管理</Link></Menu.Item>
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
                            <Menu.Item key="11"><Link to='/main/classesApproved'>待批班级</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div className={styles.content_right}>
                    <Switch>
                        <Route path="/main/addQuestions" component={AddQuestions} />
                        <Route path="/main/classQuestions" component={ClassQuestions} />
                        <Route path="/main/checkQuestions" component={CheckQuestions} />
                        <Route path="/main/addUser" component={AddUser} />
                        <Route path="/main/userDisplay" component={UserDisplay} />
                        <Route path="/main/addTest" component={AddTest} />
                        <Route path="/main/testPaper" component={TestPaper} />
                        <Route path="/main/classManagement" component={ClassManagement} />
                        <Route path="/main/classroomManagement" component={ClassroomManagement} />
                        <Route path="/main/studentManagement" component={StudentManagement} />
                        <Route path="/main/classesApproved" component={ClassesApproved} />
                        <Route path="/main/questions/detail/:id" component={questiuonsDetail}/>
                        <Route path="/main/questions/editQuestions/:id" component={editQuestions}/>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

Main.propTypes = {
};

export default Main;
