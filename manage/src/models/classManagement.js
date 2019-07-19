import {class_Management,class_room_Management,Course_name,addClass_Management,delete_Class_Management,updata_Class_Management} from '@/services'
export default {
    //命名空间
    namespace: 'management',
    //模块状态
    state: {
        allClass:[],
        allClassroom:[],
        allCoursename:[]
    },
    //订阅
    // subscriptions: {
    //     setup({ dispatch, history }) {  // eslint-disable-line
    //     },
    // },
    //异步操作
    effects: {
        // *fetch({ payload }, { call, put }) {  // eslint-disable-line
        //     yield put({ type: 'save' });
        // },
        // 获取已经分配教室的班级
        *classManagement({ payload }, { call, put }) {
            let data = yield call(class_Management);
            yield put({
                type: "save",
                payload: {
                    allClass: data.data
                }
            })
        },
        // 获取所有教室
        *classroomManagement({ payload }, { call, put }) {
            let data = yield call(class_room_Management);
            yield put({
                type: "save",
                payload: {
                    allClassroom: data.data
                }
            })
        },
        // 获取所有课程名
        *Coursename({ payload }, { call, put }) {
            let data = yield call(Course_name);
            yield put({
                type: "save",
                payload: {
                    allCoursename: data.data
                }
            })
        },
        // 添加班级
        *addClassManagement({ payload }, { call, put }) {
            let data = yield call(addClass_Management,payload);
            yield put({
                type: "save"
            })
            if(data.code===1){
                yield put({
                    type: "classManagement"
                })
            }
        },
        // 删除班级
        *deleteClass_Management({ payload }, { call, put }) {
            let data = yield call(delete_Class_Management,payload);
            yield put({
                type: "save",
            })
            if(data.code===1){
                yield put({
                    type: "classManagement"
                })
            }
        },
        // 更新班级
        *updataClass_Management({ payload }, { call, put }) {
            let data = yield call(updata_Class_Management,payload);
            yield put({
                type: "save",
            })
            if(data.code===1){
                yield put({
                    type: "classManagement",
                    payload: {
                        allClass: data.data
                    }
                })
            }
        },
    },
    //同步操作
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },

};
