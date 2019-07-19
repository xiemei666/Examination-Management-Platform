import request from '../utils/request';
//获取已经分配教室的班级
export function class_Management(params) {
  return request.get('/manger/grade', params);
}
//获取所有教室
export function class_room_Management(params) {
  return request.get('/manger/room', params);
}
//获取所有课程名
export function Course_name(params) {
  return request.get('/exam/subject', params);
}
//添加班级
export function addClass_Management(params) {
  return request.post('/manger/grade', params);
}
//删除班级
export function delete_Class_Management(params) {
  return request.delete('/manger/grade/delete',{ data:params});
}
//更新班级
export function updata_Class_Management(params) {
  return request.put('/manger/grade/update', params);
}