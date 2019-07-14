import { classroom_Management ,deleteroom_Management} from '@/services'
export default {
    //命名空间
    namespace: 'roommanagement',
    //模块状态
    state: {
        allClass: []
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
        // 获取全部教室
        *classroomManagement({ payload }, { call, put }) {
            let data = yield call(classroom_Management);
            console.log(data)
            yield put({
                type: "save",
                payload: {
                    allClass: data.data
                }
            })
        },
        // 删除教师
        *deleteroomManagement({ payload }, { call, put }) {
            let data = yield call(deleteroom_Management);
            console.log(data)
            yield put({
                type: "save",
                payload: {
                    allClass: data.data
                }
            })
        },
    },
    //同步操作
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },

};
