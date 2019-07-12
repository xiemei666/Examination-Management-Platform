import request from '../utils/request';
//展示用户数据
export function getUserData() {
  return request.get('/user/user');
}
//展示身份数据
export function getIdentityData() {
    return request.get('/user/identity');
}
//展示api接口权限
export function getApiAuthority() {
    return request.get('/user/api_authority');
}
//展示身份和api权限关系
export function getIdentityApiAuthorityRelation() {
    return request.get('/user/identity_api_authority_relation');
}
//展示视图接口权限
export function getViewAuthority() {
    return request.get('/user/view_authority');
}
//身份和视图权限关系
export function getIdentityViewAuthorityRelation() {
    return request.get('/user/identity_view_authority_relation');
}