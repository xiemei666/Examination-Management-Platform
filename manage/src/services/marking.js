import request from '../utils/request';
export function get_Awaiting_approval_class(){
    //获取已经分配教室的班级
    return request.get("/manger/grade")
}