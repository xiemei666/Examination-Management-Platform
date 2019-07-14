import request from '../utils/request';

export function add_test(params){
    //创建试卷
    return request.post("/exam/exam",params)
}