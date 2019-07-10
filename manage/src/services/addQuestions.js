import request from '../utils/request';

export function addQuestions(params) {
  return request.post('/exam/questions', params);
}
// 获取考试类型
export function classify(){
  return request.get("/exam/examType")
}
// 获取课程类型
export function getSubject(){
  return request.get("/exam/subject")
}
// 获取题目类型
export function getQuestions(){
  return request.get("/exam/getQuestionsType")
}