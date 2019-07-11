import React from 'react';
import { connect } from 'dva';
import styles from './addUser.scss'
import { Form, Icon, Input, Button, Checkbox, Radio } from 'antd';

function AddUser(props) {
  let handleSubmit = e => {
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  const { getFieldDecorator } = props.form;
  return (
    <div className={styles.wrapper}>
      <h2>添加试题</h2>
      <div className={styles.content}>
        <div className={styles.add_user}>
          <Radio.Group defaultValue="a" size="large" className={styles.tab}>
            <Radio.Button value="a">Hangzhou</Radio.Button>
            <Radio.Button value="b">Shanghai</Radio.Button>
          </Radio.Group>
          <Form onSubmit={handleSubmit}>
            <Form.Item>
              {getFieldDecorator('aaa', {
                //validateTrigger	校验子节点值的时机
                validateTrigger: 'onBlur',
                //rules	校验规则
                rules: [
                  { required: true }
                ],
              })(<Input placeholder='请输入用户名'/>)}
            </Form.Item>
          </Form>
        </div>
        <div className={styles.add_identityr}>
          122
        </div>
        <div className={styles.add_api_jurisdiction}>
          333
        </div>
        <div className={styles.add_view}>
          444
        </div>
        <div className={styles.identityr_jurisdiction}>
          555
        </div>
        <div className={styles.view_jurisdiction}>
          666
        </div>
      </div>
    </div>
  );
}

AddUser.propTypes = {
};
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = dispatch => {
  return {
    // login:payload => {
    //   dispatch({
    //     type:'login/login',
    //     payload
    //   })
    // }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(AddUser));