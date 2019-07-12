import { getUserData, getIdentityData, getApiAuthority, getIdentityApiAuthorityRelation, getViewAuthority, getIdentityViewAuthorityRelation } from '@/services';

export default {
    //命名空间
    namespace: 'userDisplay',
    //模块状态
    state: {
        //用户数据
        UserData: [],
        
    },


    //异步操作
    effects: {
        *getUserData({ payload, type }, { call, put }) {  // eslint-disable-line
            let data = yield call(getUserData)
            console.log(data)
            yield put({ type: 'save', payload: { UserData: data.data } })
        },
        *getIdentityData({ payload, type }, { call, put }) {  // eslint-disable-line
            let data = yield call(getIdentityData)
            console.log(data)
            yield put({ type: 'save', payload: { UserData: data.data } })
        },
        *getApiAuthority({ payload, type }, { call, put }) {  // eslint-disable-line
            let data = yield call(getApiAuthority)
            console.log(data)
            yield put({ type: 'save', payload: { UserData: data.data } })
        },
        *getIdentityApiAuthorityRelation({ payload, type }, { call, put }) {  // eslint-disable-line
            let data = yield call(getIdentityApiAuthorityRelation)
            console.log(data)
            yield put({ type: 'save', payload: { UserData: data.data } })
        },
        *getViewAuthority({ payload, type }, { call, put }) {  // eslint-disable-line
            let data = yield call(getViewAuthority)
            console.log(data)
            yield put({ type: 'save', payload: { UserData: data.data } })
        },
        *getIdentityViewAuthorityRelation({ payload, type }, { call, put }) {  // eslint-disable-line
            let data = yield call(getIdentityViewAuthorityRelation)
            console.log(data)
            yield put({ type: 'save', payload: { UserData: data.data } })
        },
    },
    //同步操作

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },


};
