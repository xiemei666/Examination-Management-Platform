import React, { useEffect } from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import './LoginPage.scss';

function LoginPage(props) {
  //判断是否登录成功
  useEffect(() => {
    if (props.isLogin === 1) {
      message.success('登陆成功');
      let path = '/main';
      if (props.location.search) {
        path = decodeURIComponent(props.location.search.split('=')[1]);
      }
      // console.log(path)
      props.history.push(path);
    } else if (props.isLogin === 0) {
      message.success('用户名或密码错误');
    }
  }, [props.isLogin])

  // 处理表单提交
  let handleSubmit = () => {
    //validateFields  校验并获取一组输入域的值与 Error，若 fieldNames 参数为空，则校验全部组件
    props.form.validateFields((err, values) => {
      if (!err) {
        props.login({ user_name: values.username, user_pwd: values.password });
        // console.log('Received values of form: ', values);
      }
    });
  }

  // 从Form高阶组件中拿到校验组件
  const { getFieldDecorator } = props.form;

  return (
    <div className='wrap-login'>
      <Form className="login-form" onSubmit={handleSubmit}>
        <Form.Item>
          {getFieldDecorator('username', {
            //validateTrigger	校验子节点值的时机
            validateTrigger: 'onBlur',
            //rules	校验规则
            rules: [
              { required: true, message: '请输入用户名!' },
              { min: 6, max: 15, message: '请输入正确的用户名!' }
            ],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入用户名"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            validateTrigger: 'onBlur',
            rules: [
              { required: true, message: '请输入用户密码!' },
              { pattern: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!#@*&.]).*$/, message: '请输入正确的密码格式!' }
            ],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请输入用户密码"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Checkbox>记住密码</Checkbox>
          <a className="login-form-forgot" href="">
            忘记密码
          </a>
        </Form.Item>
        <div className="login-submit">
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </div>
      </Form>
    </div>
  )
}

LoginPage.propTypes = {
};

const mapStateToProps = state => {
  return { ...state.login }
}
const mapDispatchToProps = dispatch => {
  return {
    login: payload => {
      dispatch({
        type: 'login/login',
        payload
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(LoginPage));