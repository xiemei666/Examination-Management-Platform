import React from 'react';
import Header from '../../components/Header/Header'
import styles from './main.scss'
import { Link, Route, Switch } from 'dva/router'
import {injectIntl} from 'react-intl';
import MenuList from '../../components/Menu'
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
import createTest from "./test/CreateTest/CreateTest"
import testDetail from "./test/testDetail/testDetail"
import classMate from "./marking/classMate/classMate"
import markDetail from "./marking/markDetail/markDetail"
import { Menu, Icon,Spin } from 'antd';
const { SubMenu } = Menu;
const Main = (props) => {
    return (
        <div className={styles.wrapper}>
            <Header></Header>
            <div className={styles.content}>
                <div className={styles.slide}>
                    <MenuList />
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
                        <Route path="/main/questions/detail/:id" component={questiuonsDetail} />
                        <Route path="/main/questions/editQuestions/:id" component={editQuestions} />
                        <Route path="/main/test/createTest" component={createTest}/>
                        <Route path="/main/test/detailTest/:id" component={testDetail}/>
                        <Route path="/main/marking/classmate/:id" component={classMate}/>
                        <Route path="/main/marking/detail" component={markDetail}/>
                    </Switch>
                </div>
            </div>
            {props.global ? <div className={styles.loading}><Spin /></div> : null}
        </div>
    );
};

Main.propTypes = {
};

export default injectIntl(Main);