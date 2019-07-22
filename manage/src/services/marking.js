import request from '../utils/request';
export function get_Awaiting_approval_class(){
    //获取已经分配教室的班级
    return request.get("/manger/grade")
}
export function get_exam_student(params){
    //获取学生试卷列表接口
    return request.get("/exam/student",{params})
}
export function get_student_exam(id,params={}){
    // console.log(id)
    //获取学生试卷详情
    return request.get(`/exam/student/${id}`,params)
}
export function correct_Test_Paper(params){
    //批改试卷
    return request.put(`/exam/student/${params.exam_student_id}`,{score:params.score})
}