import { add_User,updata_User,add_Identityr,add_Api_jurisdiction,add_View,identityr_Jurisdiction,view_Jurisdiction } from '@/services'
export default {
    //命名空间
    namespace: 'addUser',
    //模块状态
    state: {},
    //订阅
    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },
    //异步操作
    effects: {
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
            yield put({ type: 'save' });
        },
        //添加用户
        *addUser({ payload }, { call, put }) {
            let data = yield call(add_User, payload)
            yield put({
                type: "save",
            })
        },
        //更新用户
        *updataUser({ payload }, { call, put }) {
            let data = yield call(updata_User, payload)
            yield put({
                type: "save",
            })
        },
        //添加身份
        *addIdentityr({ payload }, { call, put }) {
            let data = yield call(add_Identityr, payload)
            yield put({
                type: "save",
            })
        },
        //添加api接口权限
        *addApi_jurisdiction({ payload }, { call, put }) {
            let data = yield call(add_Api_jurisdiction, payload)
            yield put({
                type: "save",
            })
        },
        //添加视图接口权限
        *addView({ payload }, { call, put }) {
            let data = yield call(add_View, payload)
            yield put({
                type: "save",
            })
        },
        //给身份设置api接口权限
        *identityrJurisdiction({ payload }, { call, put }) {
            let data = yield call(identityr_Jurisdiction, payload)
            yield put({
                type: "save",
            })
        },
        //给身份设置视图权限
        *viewJurisdiction({ payload }, { call, put }) {
            let data = yield call(view_Jurisdiction, payload)
            yield put({
                type: "save",
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
