import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './addIdentityr.scss'
import { Form, Input, Button, Radio } from 'antd';
function AddIdentityr(props) {
  const { addIdentityr } = props
  useEffect(() => {

  }, [])
  const { getFieldDecorator } = props.form;
  let handleReset = () => {
    props.form.resetFields();
  };
  return (
    <div className={styles.add_identityr}>
      <Radio.Group defaultValue="a" size="large" className={styles.tab}>
        <Radio.Button value="a">添加身份</Radio.Button>
      </Radio.Group>
      <Form onSubmit={
        e => {
          e.preventDefault();
          props.form.validateFields((err, values) => {
            if (!err) {
              addIdentityr({
                identity_text: values.identity_text
              })
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
              { required: true, message: '请输入身份名称' },
              { min: 1, max: 20, message: '请输入正确的身份名称!' }
            ],
          })(<Input placeholder='请输入身份名称' />)}
        </Form.Item>
        <Form.Item className={styles.footer_button}>
          <Button type="primary" htmlType="submit" className={styles.button}>确定</Button>
          <Button onClick={handleReset}>重置</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

AddIdentityr.propTypes = {
};
const mapStateToProps = state => {
  return state.addUser
}
const mapDispatchToProps = dispatch => {
  return {
    //添加身份
    addIdentityr: payload => {
      dispatch({
        type: "addUser/addIdentityr",
        payload
      })
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(AddIdentityr));