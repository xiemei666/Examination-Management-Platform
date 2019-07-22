import request from '../utils/request';

// 获取用户信息
export function getUserInfo() {
  return request.get('/user/userInfo');
}

// 获取视图权限
export function getViewAuthority(){
  return request.get('/user/view_authority');
}