import { add_User,
    updata_User,
    getAll_Id,
    get_Id,
    add_Identityr,
    add_Api_jurisdiction,
    get_View,
    add_View,
    get_Api_Authority,
    identityr_Jurisdiction,
    view_Jurisdiction } from '@/services'
export default {
    //命名空间
    namespace: 'addUser',
    //模块状态
    state: {
        Id:[],
        Id1:[],
        allView:[],
        Api_Authority:[]
    },
    //订阅
    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },
    //异步操作
    effects: {
        // *fetch({ payload }, { call, put }) {  // eslint-disable-line
        //     yield put({ type: 'save' });
        // },
        //添加用户
        *addUser({ payload }, { call, put }) {
            yield call(add_User, payload)
            yield put({
                type: "save"
            })
        },
        //更新用户
        *updataUser({ payload }, { call, put }) {
            yield call(updata_User, payload)
            yield put({
                type: "save",
            })
        },
        //获取所有身份ID
        *getId({ payload }, { call, put }) {
            let data = yield call(get_Id);
            yield put({
                type: "save",
                payload: {
                    Id:data.data
                }
            })
        },
        //获取所有身份ID(1)
        *getAllId({ payload }, { call, put }) {
            let data = yield call(getAll_Id);
            yield put({
                type: "save",
                payload: {
                    Id1:data.data
                }
            })
        },
        // //添加身份
        *addIdentityr({ payload }, { call, put }) {
            console.log(payload)
            let data = yield call(add_Identityr, payload)
            console.log(data)
            yield put({
                type: "save",
            })
        },
        // //添加api接口权限
        *addApi_jurisdiction({ payload }, { call, put }) {
            let data = yield call(add_Api_jurisdiction, payload)
            console.log(data)
            yield put({
                type: "save",
            })
        },
        //获取所有视图
        *getView({ payload }, { call, put }) {
            let data = yield call(get_View);
            yield put({
                type: "save",
                payload: {
                    allView:data.data
                }
            })
        },
        // //添加视图接口权限
        *addView({ payload }, { call, put }) {
            let data = yield call(add_View, payload)
            console.log(data)
            yield put({
                type: "save",
            })
        },
        //获取所有api接口权限
        *getApi_Authority({ payload }, { call, put }) {
            let data = yield call(get_Api_Authority);
            yield put({
                type: "save",
                payload: {
                    Api_Authority:data.data
                }
            })
        },

        // //给身份设置api接口权限
        *identityrJurisdiction({ payload }, { call, put }) {
            let data = yield call(identityr_Jurisdiction, payload)
            console.log(data)
            yield put({
                type: "save",
            })
        },
        //给身份设置视图权限
        *viewJurisdiction({ payload }, { call, put }) {
            let data = yield call(view_Jurisdiction, payload)
            console.log(data)
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
