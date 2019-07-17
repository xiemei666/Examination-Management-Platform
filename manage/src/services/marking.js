import request from '../utils/request';
export function get_Awaiting_approval_class(){
    //获取已经分配教室的班级
    return request.get("/manger/grade")
}
export function get_exam_student(params){
    console.log(params)
    //获取学生试卷列表接口
    return request.get("/exam/student",{params})
}