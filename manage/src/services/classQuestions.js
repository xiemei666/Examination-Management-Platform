import request from '../utils/request';
//添加试题
export function class_Questions(params) {
    return request.get('/exam/insertQuestionsType',{params})
}
// 获取题目类型
export function get_Questionss() {
    return request.get("/exam/getQuestionsType")
}