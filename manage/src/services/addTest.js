import request from '../utils/request';

export function add_test(params){
    //创建试卷
    return request.post("/exam/exam",params)
}
export function del_test(params){
    //删除试卷
    console.log(params)
    return request.delete(`/exam/exam/${params}`)
}
    
export function updated_test(params) {
    // console.log(params)
    //更新试卷
    return request.put(`/exam/exam/${params.id}`,{question_ids:params.question_ids})
}
export function get_test(){
    // 获取试卷列表
    return request.get('/exam/exam')
}

export function get_test_detail(params){
    // 获取试卷详情（教师端）接口
    return request.get(`/exam/exam/${params}`)
}