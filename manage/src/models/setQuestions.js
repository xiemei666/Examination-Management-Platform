import { set_Questions, get_Classify, get_Subject, get_Question, get_Test } from '@/services'
export default {
    //命名空间
    namespace: 'changeTests',
    //模块状态
    state: {
        classify: [],
        allSubject: [],
        allText: [],
        question: [],
        num: null
    },
    //订阅
    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },
    //异步操作
    effects: {

        //添加试题
        *addQuestions({ payload }, { call, put }) {
            let data = yield call(set_Questions, payload)

            yield put({
                type: "save",
                payload: {
                    num: data.code
                }
            })
        },
        // 获取考试类型
        *getClass({ payload }, { call, put }) {
            let data = yield call(get_Classify);
            yield put({
                type: "save",
                payload: {
                    classify: data.data
                }
            })
        },
        // 获取课程类型
        *getAllSubject({ payload }, { call, put }) {
            let data = yield call(get_Subject);
            yield put({
                type: "save",
                payload: {
                    allSubject: data.data
                }
            })
        },
        // 获取题目类型
        *getAllQuestions({ payload }, { call, put }) {
            let data = yield call(get_Question);
            yield put({
                type: "save",
                payload: {
                    allText: data.data
                }
            })
        },
        *getTests({ payload }, { call, put }) {
            console.log(payload)
            let data = yield call(get_Test, payload);
            console.log(data)
            yield put({ type: 'save', payload: { question: data.data } });

        }
    },
    //同步操作
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },

};