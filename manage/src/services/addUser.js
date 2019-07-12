import request from '../utils/request';
//添加用户
export function add_User(params) {
  return request.post('/user', params);
}
//更新用户
export function updata_User(params) {
  return request.put('/user/user', params);
}
//添加身份
export function add_Identityr(params) {
  return request.get('/user/identity/edit', params);
}
//添加api接口权限
export function add_Api_jurisdiction(params) {
  return request.get('/user/authorityApi/edit', params);
}
//添加视图接口权限
export function add_View(params) {
  return request.get('/user/authorityView/edit', params);
}
//给身份设置api接口权限
export function identityr_Jurisdiction(params) {
  return request.post('/user/setIdentityApi', params);
}
//给身份设置视图权限
export function view_Jurisdiction(params) {
  return request.post('/user/setIdentityView', params);
}