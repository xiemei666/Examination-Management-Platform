import request from '../utils/request';
//获取全部教室
export function classroom_Management(params) {
  return request.get('/manger/room', params);
}
//删除教室
export function deleteroom_Management(params) {
  return request.delete('/manger/room/delete', {data:params});
}
//添加教室
export function addroom_Management(params) {
  return request.post('/manger/room', params);
}