import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import styles from './addUser.scss'
import { Form, Input, Button, Radio, Select } from 'antd';
const { Option } = Select;
function AddUser(props) {
  const [Identityr, updataIdentityr] = useState(false)
  const { addUser,
    updataUser,
    addIdentityr,
    addApi_jurisdiction,
    addView,
    identityrJurisdiction,
    viewJurisdiction } = props
  useEffect(() => {

  }, [])

  const { getFieldDecorator } = props.form;
  return (
    <div className={styles.wrapper}>
      <h2>添加试题</h2>
      <div className={styles.content}>
        <div className={styles.add_user}>
          <Radio.Group defaultValue="a" size="large" className={styles.tab}>
            <Radio.Button value="a" onClick={() => updataIdentityr(false)}>添加用户</Radio.Button>
            <Radio.Button value="b" onClick={() => updataIdentityr(true)}>更新用户</Radio.Button>
          </Radio.Group>
          <Form onSubmit={
            e => {
              //以前的默认值
              e.preventDefault();
              // e.getFieldsValue()
              props.form.validateFields((err, values) => {
                if (!err) {
                  console.log(values)
                  console.log(values.user_name)
                  // addIdentityr({
                  //   identity_text:
                  // })
                }
              });
            }
          } className={styles.addUser}>
            {
              Identityr && <Form.Item className={styles.select_idd}>
                {getFieldDecorator('user_id', {
                  initialValue: "请选择身份ID"
                })(<Select
                  style={{ width: 200 }}
                >
                  <Option value='111'>dfgdg</Option>
                </Select>)}
              </Form.Item>
            }
            <Form.Item>
              {getFieldDecorator('user_name', {
                //validateTrigger	校验子节点值的时机
                validateTrigger: 'onBlur',
                //rules	校验规则
                rules: [
                  { required: true, message: '请输入正确的用户名!' },
                  // { min: 1, max: 20, message: '请输入正确的用户名!' }
                ],
              })(<Input placeholder='请输入用户名' />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('user_pwd', {
                //validateTrigger	校验子节点值的时机
                validateTrigger: 'onBlur',
                //rules	校验规则
                rules: [
                  { required: true, message: '请输入密码!' },
                  // { pattern: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!#@*&.]).*$/, message: '请输入正确的密码格式!' }
                ],
              })(<Input placeholder='请输入密码' />)}
            </Form.Item>
            <Form.Item className={styles.select_id}>
              {getFieldDecorator('identity_id', {
                initialValue: "请选择身份ID"
              })(<Select
                style={{ width: 200 }}
              >
                <Option value='111'>dfgdg</Option>
              </Select>)}
            </Form.Item>
            <Form.Item className={styles.footer_button}>
              <Button type="primary" htmlType="submit" style={{ width: 110 }} className={styles.button}>
                确定
              </Button>
              <Button>重置</Button>
            </Form.Item>
          </Form>
        </div>

        <div className={styles.add_identityr}>
          <Radio.Group defaultValue="a" size="large" className={styles.tab}>
            <Radio.Button value="a">添加身份</Radio.Button>
          </Radio.Group>
          <Form onSubmit={
            e => {
              e.preventDefault();
              props.form.validateFields((err, values) => {
                if (!err) {
                  console.log(values)
                  // addIdentityr({
                  //   identity_text:
                  // })
                }
              });
            }
          } className={styles.addIdentityr}>
            <Form.Item>
              {getFieldDecorator('identity_text', {
                //validateTrigger	校验子节点值的时机
                validateTrigger: 'onBlur',
                //rules	校验规则
                rules: [
                  { required: true }
                ],
              })(<Input placeholder='请输入身份名称' />)}
            </Form.Item>
            <Form.Item className={styles.footer_button}>
              <Button type="primary" htmlType="submit" style={{ width: 110 }} className={styles.button}>
                确定
              </Button>
              <Button>重置</Button>
            </Form.Item>
          </Form>
        </div>

        {/* <div className={styles.add_api_jurisdiction}>
          <Radio.Group defaultValue="a" size="large" className={styles.tab}>
            <Radio.Button value="a">添加api接口权限</Radio.Button>
          </Radio.Group>
          <Form onSubmit={
            e=>{
              e.preventDefault();
              props.form.validateFields((err, values) => {
                    if (!err) {
                      console.log(values)
                      // addIdentityr({
                      //   identity_text:
                      // })
                    }
                  });
            }
          } className={styles.api_jurisdiction}>
            <Form.Item>
              {getFieldDecorator('api_authority_text', {
                //validateTrigger	校验子节点值的时机
                validateTrigger: 'onBlur',
                //rules	校验规则
                rules: [
                  { required: true }
                ],
              })(<Input placeholder='请输入api接口权限名称' />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('api_authority_url', {
                //validateTrigger	校验子节点值的时机
                validateTrigger: 'onBlur',
                //rules	校验规则
                rules: [
                  { required: true }
                ],
              })(<Input placeholder='请输入api接口权限url' />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('api_authority_method', {
                //validateTrigger	校验子节点值的时机
                validateTrigger: 'onBlur',
                //rules	校验规则
                rules: [
                  { required: true }
                ],
              })(<Input placeholder='请输入api接口权限方法' />)}
            </Form.Item>
            <Form.Item className={styles.footer_button}>
              <Button type="primary" htmlType="submit" style={{ width: 110 }} className={styles.button}>
                确定
              </Button>
              <Button>重置</Button>
            </Form.Item>
          </Form>
        </div>

        <div className={styles.add_view}>
          <Radio.Group defaultValue="a" size="large" className={styles.tab}>
            <Radio.Button value="a">添加视图接口权限</Radio.Button>
          </Radio.Group>
          <Form onSubmit={
            e=>{
              e.preventDefault();
              props.form.validateFields((err, values) => {
                    if (!err) {
                      console.log(values)
                      // addIdentityr({
                      //   identity_text:
                      // })
                    }
                  });
            }
          } className={styles.add_view_content}>
            <Form.Item className={styles.add_view_select}>
              {getFieldDecorator('view_authority_text', {
                initialValue: "请选择已有视图"
              })(<Select
                style={{ width: 200 }}
              >
                <Option value='111'>dfgdg</Option>
              </Select>)}
            </Form.Item>
            <Form.Item className={styles.footer_button}>
              <Button type="primary" htmlType="submit" style={{ width: 110 }} className={styles.button}>
                确定
              </Button>
              <Button>重置</Button>
            </Form.Item>
          </Form>
        </div>

        <div className={styles.identityr_jurisdiction}>
          <Radio.Group defaultValue="a" size="large" className={styles.tab}>
            <Radio.Button value="a">给身份设置api接口权限</Radio.Button>
          </Radio.Group>
          <Form onSubmit={
            e=>{
              e.preventDefault();
              props.form.validateFields((err, values) => {
                    if (!err) {
                      console.log(values)
                      // addIdentityr({
                      //   identity_text:
                      // })
                    }
                  });
            }
          } className={styles.identityr_jurisdiction_content}>
            <Form.Item className={styles.identityr_jurisdiction_select}>
              {getFieldDecorator('identity_id', {
                initialValue: "请选择身份ID"
              })(<Select
                style={{ width: 200 }}
              >
                <Option value='111'>dfgdg</Option>
              </Select>)}
            </Form.Item>
            <Form.Item className={styles.identityr_jurisdiction_selects}>
              {getFieldDecorator('api_authority_id', {
                initialValue: "请选择api接口权限"
              })(<Select
                style={{ width: 200 }}
              >
                <Option value='111'>dfgdg</Option>
              </Select>)}
            </Form.Item>
            <Form.Item className={styles.footer_button}>
              <Button type="primary" htmlType="submit" style={{ width: 110 }} className={styles.button}>
                确定
              </Button>
              <Button>重置</Button>
            </Form.Item>
          </Form>
        </div>

        <div className={styles.view_jurisdiction}> 
          <Radio.Group defaultValue="a" size="large" className={styles.tab}>
            <Radio.Button value="a">给身份设置视图权限</Radio.Button>
          </Radio.Group>
          <Form onSubmit={
            e=>{
              e.preventDefault();
              props.form.validateFields((err, values) => {
                    if (!err) {
                      console.log(values)
                      // addIdentityr({
                      //   identity_text:
                      // })
                    }
                  });
            }
          } className={styles.view_jurisdiction_content}>
            <Form.Item className={styles.view_jurisdiction_select}>
              {getFieldDecorator('identity_id', {
                initialValue: "请选择身份ID"
              })(<Select
                style={{ width: 200 }}
              >
                <Option value='111'>dfgdg</Option>
              </Select>)}
            </Form.Item>
            <Form.Item className={styles.view_jurisdiction_select}>
              {getFieldDecorator('view_authority_id', {
                initialValue: "请选择视图权限ID"
              })(<Select
                style={{ width: 200 }}
              >
                <Option value='111'>dfgdg</Option>
              </Select>)}
            </Form.Item>
            <Form.Item className={styles.footer_button}>
              <Button type="primary" htmlType="submit" style={{ width: 110 }} className={styles.button}>
                确定
              </Button>
              <Button>重置</Button>
            </Form.Item>
          </Form>
        </div> */}
      </div>
    </div>
  );
}

AddUser.propTypes = {
};
const mapStateToProps = state => {
  return state.addUser
}
const mapDispatchToProps = dispatch => {
  return {
    //添加用户
    addUser: payload => {
      dispatch({
        type: "addUser/addUser",
        payload
      })
    },
    //更新用户
    updataUser: payload => {
      dispatch({
        type: "addUser/updataUser",
        payload
      })
    },
    //添加身份
    addIdentityr: payload => {
      dispatch({
        type: "addUser/addIdentityr",
        payload
      })
    },
    //添加api接口权限
    addApi_jurisdiction: payload => {
      dispatch({
        type: "addUser/addApi_jurisdiction",
        payload
      })
    },
    //添加视图接口权限
    addView: payload => {
      dispatch({
        type: "addUser/addView",
        payload
      })
    },
    //给身份设置api接口权限
    identityrJurisdiction: payload => {
      dispatch({
        type: "addUser/identityrJurisdiction",
        payload
      })
    },
    //给身份设置视图权限
    viewJurisdiction: payload => {
      dispatch({
        type: "addUser/viewJurisdiction",
        payload
      })
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(AddUser));