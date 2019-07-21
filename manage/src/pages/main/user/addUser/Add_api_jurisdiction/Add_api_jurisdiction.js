import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './Add_api_jurisdiction.scss'
import { Form, Input, Button, Radio } from 'antd';
function Add_api_jurisdiction(props) {
    const { addApi_jurisdiction } = props
    useEffect(() => {

    }, [])
    const { getFieldDecorator } = props.form;
    let handleReset = () => {
        props.form.resetFields();
    };
    return (
        <div className={styles.add_api_jurisdiction}>
            <Radio.Group defaultValue="a" size="large" className={styles.tab}>
                <Radio.Button value="a">添加api接口权限</Radio.Button>
            </Radio.Group>
            <Form onSubmit={
                e => {
                    e.preventDefault();
                    props.form.validateFields((err, values) => {
                        console.log(values)
                        if (!err) {
                            addApi_jurisdiction({
                                api_authority_text: values.api_authority_text,
                                api_authority_url: values.api_authority_url,
                                api_authority_method: values.api_authority_method
                            })
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
                            { required: true, message: '请输入api接口权限名称' },
                            { min: 1, max: 20, message: '请输入api接口权限名称!' }
                        ],
                    })(<Input placeholder='请输入api接口权限名称' />)}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('api_authority_url', {
                        //validateTrigger	校验子节点值的时机
                        validateTrigger: 'onBlur',
                        //rules	校验规则
                        rules: [
                            { required: true, message: '请输入api接口权限url' },
                            { min: 1, max: 20, message: '请输入api接口权限url!' }
                        ],
                    })(<Input placeholder='请输入api接口权限url' />)}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('api_authority_method', {
                        //validateTrigger	校验子节点值的时机
                        validateTrigger: 'onBlur',
                        //rules	校验规则
                        rules: [
                            { required: true, message: '请输入api接口权限方法' },
                            { min: 1, max: 20, message: '请输入api接口权限方法!' }
                        ],
                    })(<Input placeholder='请输入api接口权限方法' />)}
                </Form.Item>
                <Form.Item className={styles.footer_button}>
                    <Button type="primary" htmlType="submit" className={styles.button}>确定</Button>
                    <Button onClick={handleReset}>重置</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

Add_api_jurisdiction.propTypes = {
};
const mapStateToProps = state => {
    return state.addUser
}
const mapDispatchToProps = dispatch => {
    return {
        //添加api接口权限
        addApi_jurisdiction: payload => {
            dispatch({
                type: "addUser/addApi_jurisdiction",
                payload
            })
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Add_api_jurisdiction));