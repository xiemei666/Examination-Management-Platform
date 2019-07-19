import AddQuestions from '@/pages/main/questions/addQuestions/addQuestions';
import CheckQuestions from '@/pages/main/questions/checkQuestions/checkQuestions';
import ClassQuestions from '../pages/main/questions/classQuestions/classQuestions';
import AddUser from '../pages/main/user/addUser/addUser'
import UserDisplay from '../pages/main/user/userDisplay/userDisplay'
import AddTest from '../pages/main/test/addTest/addTest'
import TestPaper from '../pages/main/test/testPaper/testPaper'
import ClassManagement from '../pages/main/management/classManagement/classManagement'
import ClassroomManagement from '../pages/main/management/classroomManagement/classroomManagement'
import StudentManagement from '../pages/main/management/studentManagement/studentManagement'
import ClassesApproved from '../pages/main/marking/classesApproved/classesApproved'
import Classmate from '../pages/main/marking/classMate/classMate'
import CreateTest from '../pages/main/test/CreateTest/CreateTest'
export default {
    routes: [{
        name: 'router.questions',
        path: '',
        children: [{
            name: 'router.questions.add',
            path: '/main/addQuestions',
            view_id: 'main-addQuestions',
            component: AddQuestions
        }, {
            name: 'router.questions.view',
            path: '/main/checkQuestions',
            view_id: 'main-questionsType',
            component: CheckQuestions
        }, {
            name: 'router.questions.type',
            path: '/main/classQuestions',
            view_id: 'main-watchQuestions',
            component: ClassQuestions
        }, {
            name: 'router.questions.fobidden',
            path: '/main/forbidden',
            view_id: 'main-forbidden',
            component: null
        }]
    },{
        name: 'router.user',
        path: '',
        children: [{
            name: 'router.user.add',
            path: '/main/addUser',
            view_id: 'main-addUser',
            component: AddUser
        }, {
            name: 'router.user.display',
            path: '/main/userDisplay',
            view_id: 'main-showUser',
            component: UserDisplay
        }]
    },{
        name: 'router.text',
        path: '',
        children: [{
            name: 'router.text.add',
            path: '/main/addTest',
            view_id: 'main-addExam',
            component: AddTest
        }, {
            name: 'router.text.paper',
            path: '/main/testPaper',
            view_id: 'main-examList',
            component: TestPaper
        }, 
        // {
        //     name: 'router.text',
        //     path: '/main/test/createTest',
        //     view_id: 'main-examEdit',
        //     component: CreateTest
        // }
    ]
    },{
        name: 'router.management',
        path: '',
        children: [{
            name: 'router.management',
            path: '/main/classManagement',
            view_id: 'main-grade',
            component: ClassManagement
        }, {
            name: 'router.management.room',
            path: '/main/classroomManagement',
            view_id: 'main-room',
            component: ClassroomManagement
        }, {
            name: 'router.management.student',
            path: '/main/studentManagement',
            view_id: 'main-student',
            component: StudentManagement
        }]
    },
    {
        name: 'router.marking',
        path: '',
        children: [{
            name: 'router.marking.approved',
            path: '/main/classesApproved',
            view_id: 'main-examPaperClassList',
            component: ClassesApproved,
            // children:[{
            //     name: 'router.marking',
            //     path: '/main/classesApproved/classmate/id',
            //     view_id: 'main-examPaperClassmate',
            //     component: Classmate
            // }]
        }
        // {
            
        // }
    ]
    }]
}