
import request from '../utils/request';
//添加试题
export function set_Questions(params) {
  return request.put('/exam/questions/update', params);
}
// 获取考试类型
export function get_Classify() {
  return request.get("/exam/examType")
}
// 获取课程类型
export function get_Subject() {
  return request.get("/exam/subject")
}
// 获取题目类型
export function get_Question() {
  return request.get("/exam/getQuestionsType")
}
export function get_Test(payload) {
  //按条件获取试题
  console.log(payload)
  let str = ''
  Object.values(payload).forEach((item, index) => {
    if (item) {
      str += Object.keys(payload)[index] + "=" + item + "&"
    }
  })
  str = str.slice(0, str.length - 1)
  return request.get(`/exam/questions/condition?${str}`);
}