import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import styles from './user.scss'
import { Form, Input, Button, Radio, Select } from 'antd';
const { Option } = Select;
function User(props) {
    const [Identityr, updataIdentityr] = useState(false)
    const { addUser, updataUser, getId, getAllId, Id, Id1 } = props
    useEffect(() => {
        getId()
        getAllId()
    }, [])
    const { getFieldDecorator } = props.form;
    let handleReset = () => {
        props.form.resetFields();
    };
    return (
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
                            if (Identityr) {
                                updataUser({
                                    user_id: values.user_id,
                                    user_name: values.user_name,
                                    user_pwd: values.user_pwd,
                                    identity_id: values.identity_id
                                })
                            } else {
                                addUser({
                                    user_name: values.user_name,
                                    user_pwd: values.user_pwd,
                                    identity_id: values.identity_id
                                })
                            }
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
                            {
                                Id.map(item => (
                                    <Option key={item.user_id} value={item.user_id}>{item.user_name}</Option>
                                ))
                            }
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
                            { min: 1, max: 20, message: '请输入正确的用户名!' }
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
                            { pattern: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!#@*&.]).*$/, message: '请输入正确的密码格式!' }
                        ],
                    })(<Input placeholder='请输入密码' />)}
                </Form.Item>
                <Form.Item className={styles.select_id}>
                    {getFieldDecorator('identity_id', {
                        initialValue: "请选择身份ID"
                    })(<Select
                        style={{ width: 200 }}
                    >
                        {
                            Id1.map(item => (
                                <Option key={item.identity_id} value={item.identity_id}>{item.identity_text}</Option>
                            ))
                        }
                    </Select>)}
                </Form.Item>
                <Form.Item className={styles.footer_button}>
                    <Button type="primary" htmlType="submit" className={styles.button}>确定</Button>
                    <Button onClick={handleReset}>重置</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

User.propTypes = {
};
const mapStateToProps = state => {
    return {
        ...state.addUser
    }
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
        // 获取所有身份ID
        getId: () => {
            dispatch({
                type: "addUser/getId"
            })
        },
        // 获取所有身份ID(1)
        getAllId: () => {
            dispatch({
                type: "addUser/getAllId"
            })
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(User));