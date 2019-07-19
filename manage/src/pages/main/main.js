import React from 'react';
import Header from '../../components/Header/Header'
import styles from './main.scss'
import { connect } from 'dva';
import { Route, Switch, Redirect } from 'dva/router'
import { injectIntl } from 'react-intl';
import MenuList from '../../components/Menu'

import { Spin } from 'antd';
const Main = (props) => {
    // 在获取我的路由之前啥也不渲染
    if (!props.myView.length) {
        return null;
    }
    return (
        <div className={styles.wrapper}>
            <Header></Header>
            <div className={styles.content}>
                <div className={styles.slide}>
                    <MenuList />
                </div>
                <div className={styles.content_right}>


                    <Switch>
                        <Redirect from="/main" exact to="/main/addQuestions" />
                        {/* 配置用户拥有的路由 */}
                        {
                            props.myView.map(item => {
                                return item.children.map(value => {
                                    return <Route key={value.name} path={value.path} component={value.component}></Route>
                                })
                            })
                        }

                        {/* 配置用户禁止访问的路由 */}
                        {
                            props.forbiddenView.map(item => {
                                return <Redirect key={item.path} from={item.path} to="/403"></Redirect>
                            })
                        }

                        {/* 配置不存在的路由 */}
                        <Redirect to="/404"></Redirect>
                    </Switch>
                </div>
            </div>
            {props.global ? <div className={styles.loading}><Spin /></div> : null}
        </div>
    );
};

Main.propTypes = {
};
const mapStateToProps = state => {
    return {
        myView: state.login.myView,
        forbiddenView: state.login.forbiddenView
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
export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(Main));




// import AddQuestions from './questions/addQuestions/addQuestions'
// import ClassQuestions from './questions/classQuestions/classQuestions'
// import CheckQuestions from './questions/checkQuestions/checkQuestions'
// import AddUser from './user/addUser/addUser'
// import UserDisplay from './user/userDisplay/userDisplay'
// import AddTest from './test/addTest/addTest'
// import TestPaper from './test/testPaper/testPaper'
// import ClassManagement from './management/classManagement/classManagement'
// import ClassroomManagement from './management/classroomManagement/classroomManagement'
// import StudentManagement from './management/studentManagement/studentManagement'
// import ClassesApproved from './marking/classesApproved/classesApproved'
// import questiuonsDetail from "./questions/questionsDetail/questionsDetail"
// import editQuestions from "./questions/editQuestions/editQuestions"
// import createTest from "./test/CreateTest/CreateTest"
// import testDetail from "./test/testDetail/testDetail"
// import classMate from "./marking/classMate/classMate"
// import markDetail from "./marking/markDetail/markDetail"


{/* <Switch>
                        

                        <Route path="/main/questions/detail/:id" component={questiuonsDetail} />
                        <Route path="/main/questions/editQuestions/:id" component={editQuestions} />
                        
                        <Route path="/main/test/detailTest/:id" component={testDetail} />

                        <Route path="/main/marking/classmate/:id" component={classMate} />
                        <Route path="/main/marking/detail/:id" component={markDetail} />
                    </Switch> */}