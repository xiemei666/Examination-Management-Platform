import {get_Room_Name,get_Grade,get_Student,delete_Student} from '@/services'
export default {
    //命名空间
    namespace: 'studentManagement',
    //模块状态
    state: {
        allRoom: [],
        allGrade:[],
        allStudent:[]
    },
    //订阅
    // subscriptions: {
    //     setup({ dispatch, history }) {  // eslint-disable-line
    //     },
    // },
    //异步操作
    effects: {
        // 获取全部教室
        *getRoom_Name({ payload }, { call, put }) {
            let data = yield call(get_Room_Name);
            yield put({
                type: "save",
                payload: {
                    allRoom: data.data
                }
            })
        },
        // 获取全部班级
        *getGrade({ payload }, { call, put }) {
            let data = yield call(get_Grade);
            yield put({
                type: "save",
                payload: {
                    allGrade: data.data
                }
            })
        },
        // 获取全部学生信息
        *getStudent({ payload }, { call, put }) {
            let data = yield call(get_Student);
            yield put({
                type: "save",
                payload: {
                    allStudent: data.data
                }
            })
        },
        // 删除教室
        *deleteStudent({ payload }, { call, put }) {
            let data = yield call(delete_Student,payload);
            yield put({
                type: "save",
            })
            if(data.code===1){
                yield put({
                    type: "getStudent"
                })
            }
        }
    },
    //同步操作
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },
};
