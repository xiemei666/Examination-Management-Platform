import { classroom_Management ,deleteroom_Management,addroom_Management} from '@/services'
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
            yield put({
                type: "save",
                payload: {
                    allClass: data.data
                }
            })
        },
        // 删除教师
        *deleteroomManagement({ payload }, { call, put }) {
            let data = yield call(deleteroom_Management,payload);
            yield put({
                type: "save",
            })
            if(data.code===1){
                yield put({
                    type: "classroomManagement"
                })
            }
        },
        // 添加教室
        *addroomManagement({ payload }, { call, put }) {
            let data = yield call(addroom_Management,payload);
            yield put({
                type: "save"
            })
            if(data.code===1){
                yield put({
                    type: "classroomManagement"
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
