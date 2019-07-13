import { class_Questions, get_Questionss } from '@/services'
export default {
    //命名空间
    namespace: 'class',
    //模块状态
    state: {
        allText: []
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
        //添加试题
        *classQuestions({ payload }, { call, put }) {
            let data = yield call(class_Questions, payload)
            console.log(data)
            if (data.code === 1) {
                let data = yield call(get_Questionss);
                yield put({
                    type: "save",
                    payload: {
                        allText: data.data
                    }
                })
            }
            yield put({
                type: "save",

            })
        },
        // 获取题目类型
        *getAllQuestions({ payload }, { call, put }) {
            let data = yield call(get_Questionss);
            yield put({
                type: "save",
                payload: {
                    allText: data.data
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
