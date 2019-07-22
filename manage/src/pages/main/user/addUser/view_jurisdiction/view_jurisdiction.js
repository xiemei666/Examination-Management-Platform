import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './view_jurisdiction.scss'
import { Form, Button, Radio, Select } from 'antd';
const { Option } = Select;
function view_jurisdiction(props) {
    const { getAllId, Id1, getView, allView, viewJurisdiction } = props
    useEffect(() => {
        getAllId()
        getView()
    }, [])
    const { getFieldDecorator } = props.form;
    let handleReset = () => {
        props.form.resetFields();
    };
    return (
        <div className={styles.view_jurisdiction}>
            <Radio.Group defaultValue="a" size="large" className={styles.tab}>
                <Radio.Button value="a">给身份设置视图权限</Radio.Button>
            </Radio.Group>
            <Form onSubmit={
                e => {
                    e.preventDefault();
                    props.form.validateFields((err, values) => {
                        if (!err) {
                            viewJurisdiction({
                                identity_id: values.identity_id,
                                view_authority_id: values.view_authority_id
                            })
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
                        {
                            Id1.map(item => (
                                <Option key={item.identity_id} value={item.identity_id}>{item.identity_text}</Option>
                            ))
                        }
                    </Select>)}
                </Form.Item>
                <Form.Item className={styles.view_jurisdiction_select}>
                    {getFieldDecorator('view_authority_id', {
                        initialValue: "请选择视图权限ID"
                    })(<Select
                        style={{ width: 200 }}
                    >
                        {
                            allView.map(item => (
                                <Option key={item.view_authority_id} value={item.view_authority_id}>{item.view_authority_text}</Option>
                            ))
                        }
                    </Select>)}
                </Form.Item>
                <Form.Item className={styles.footer_button}>
                    <Button type="primary" htmlType="submit" style={{ width: 110 }} className={styles.button}>确定</Button>
                    <Button onClick={handleReset}>重置</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

view_jurisdiction.propTypes = {
};
const mapStateToProps = state => {
    return state.addUser
}
const mapDispatchToProps = dispatch => {
    return {
        //给身份设置视图权限
        viewJurisdiction: payload => {
            dispatch({
                type: "addUser/viewJurisdiction",
                payload
            })
        },
        // 获取所有身份ID(1)
        getAllId: () => {
            dispatch({
                type: "addUser/getAllId"
            })
        },
        //获取所有视图
        getView: () => {
            dispatch({
                type: "addUser/getView"
            })
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(view_jurisdiction));