import request from '../utils/request';

export function getQuestions() {
  //获取所有试题
  return request.get('/exam/questions/new');
}
export function getexamType() {
  //获取所有的考试类型
  return request.get('/exam/examType');
}
export function getQuestionsType() {
  //获取所有的试题类型
  return request.get('/exam/getQuestionsType');
}
export function getSubject() {
  //获取所有的课程
  return request.get('/exam/subject');
}
export function searchTests(payload) {
  //按条件获取试题
  // console.log("ppp",payload.questions_id)
  // console.log(Object.keys(payload), Object.values(payload))
  let str = ''
  Object.values(payload).forEach((item, index) => {
    if (item) {
      str += Object.keys(payload)[index] + "=" + item + "&"
    }
  })
  str = str.slice(0, str.length - 1)
  // console.log(str)
  return request.get(`/exam/questions/condition?${str}`);
}