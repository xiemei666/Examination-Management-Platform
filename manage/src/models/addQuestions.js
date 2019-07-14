import { add_Questions, classify, getSubjects, getQuestion } from '@/services'
export default {
    //命名空间
    namespace: 'add',
    //模块状态
    state: {
        classify: [],
        allSubject: [],
        allText: [],
        err:'',
        num: null
    },
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
        //添加试题
        *addQuestions({ payload }, { call, put }) {
            let data = yield call(add_Questions, payload)
            try {
                yield put({
                    type: "save",
                    payload: {
                        num: data.code
                    }
                })

            } catch (error) {
                console.log(data)
                yield put({
                    type: "save",
                    payload: {
                        err: error
                    }
                })
            }
        },
        // 获取考试类型
        *getClass({ payload }, { call, put }) {
            let data = yield call(classify);
            yield put({
                type: "save",
                payload: {
                    classify: data.data
                }
            })
        },
        // 获取课程类型
        *getAllSubject({ payload }, { call, put }) {
            let data = yield call(getSubjects);
            yield put({
                type: "save",
                payload: {
                    allSubject: data.data
                }
            })
        },
        // 获取题目类型
        *getAllQuestions({ payload }, { call, put }) {
            let data = yield call(getQuestion);
            yield put({
                type: "save",
                payload: {
                    allText: data.data
                }
            })
        },
        *changeNull({ payload }, { call, put }) {
            yield put({
                type: "save",
                payload: {
                    num: null
                }
            })
        }
    },
    //同步操作
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },

};
