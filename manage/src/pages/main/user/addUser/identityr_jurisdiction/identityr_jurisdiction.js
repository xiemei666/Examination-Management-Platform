import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './identityr_jurisdiction.scss'
import { Form, Button, Radio, Select } from 'antd';
const { Option } = Select;
function identityr_jurisdiction(props) {
    const { getAllId, Id1, getApiAuthority, Api_Authority, identityrJurisdiction } = props
    useEffect(() => {
        getAllId()
        getApiAuthority()
    }, [])
    const { getFieldDecorator } = props.form;
    let handleReset = () => {
        props.form.resetFields();
    };
    return (
        <div className={styles.identityr_jurisdiction}>
            <Radio.Group defaultValue="a" size="large" className={styles.tab}>
                <Radio.Button value="a">给身份设置api接口权限</Radio.Button>
            </Radio.Group>
            <Form onSubmit={
                e => {
                    e.preventDefault();
                    props.form.validateFields((err, values) => {
                        console.log(values)
                        if (!err) {
                            identityrJurisdiction({
                                identity_id: values.identity_id,
                                api_authority_id: values.api_authority_id
                            })
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
                        {
                            Id1.map(item => (
                                <Option key={item.identity_id} value={item.identity_id}>{item.identity_text}</Option>
                            ))
                        }
                    </Select>)}
                </Form.Item>
                <Form.Item className={styles.identityr_jurisdiction_selects}>
                    {getFieldDecorator('api_authority_id', {
                        initialValue: "请选择api接口权限"
                    })(<Select
                        style={{ width: 200 }}
                    >
                        {
                            Api_Authority.map(item => (
                                <Option key={item.api_authority_id} value={item.api_authority_id}>{item.api_authority_text}</Option>
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

identityr_jurisdiction.propTypes = {
};
const mapStateToProps = state => {
    return state.addUser
}
const mapDispatchToProps = dispatch => {
    return {
        //给身份设置api接口权限
        identityrJurisdiction: payload => {
            dispatch({
                type: "addUser/identityrJurisdiction",
                payload
            })
        },
        // 获取所有身份ID(1)
        getAllId: () => {
            dispatch({
                type: "addUser/getAllId"
            })
        },
        // 获取所有api接口权限
        getApiAuthority: () => {
            dispatch({
                type: "addUser/getApi_Authority"
            })
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(identityr_jurisdiction));