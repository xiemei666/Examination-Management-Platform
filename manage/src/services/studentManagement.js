import request from '../utils/request';
//获取全部教室
export function get_Room_Name(params) {
    return request.get('/manger/room');
}
//获取全部班级
export function get_Grade(params) {
    return request.get('/manger/grade');
}
//获取全部学生信息
export function get_Student(params) {
    return request.get('/manger/student');
}
//删除教室
export function delete_Student(params) {
  return request.delete(`/manger/student/${params.student_id}`);
}