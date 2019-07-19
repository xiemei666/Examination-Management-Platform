import request from '../utils/request';

export function login(params) {
  return request.post('/user/login', params);
}
export function change_pic(params){
  return request.post('http://123.206.55.50:11000/upload',params)
}
export function change_user_msg(params){
  return request.put('/user/user',params)
}