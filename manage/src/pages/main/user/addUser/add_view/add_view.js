import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './add_view.scss'
import { Form, Button, Radio, Select } from 'antd';
const { Option } = Select;

function add_view(props) {
  const { getView, allView, addView } = props
  useEffect(() => {
    getView()
  }, [])
  const { getFieldDecorator } = props.form;
  let handleReset = () => {
    props.form.resetFields();
  };
  return (
    <div className={styles.add_view}>
      <Radio.Group defaultValue="a" size="large" className={styles.tab}>
        <Radio.Button value="a">添加视图接口权限</Radio.Button>
      </Radio.Group>
      <Form onSubmit={
        e => {
          e.preventDefault();
          props.form.validateFields((err, values) => {
            if (!err) {
              let val = allView.filter(item => item.view_authority_id === values.view_authority_id)[0]
              addView({
                view_authority_text: val.view_authority_text,
                view_id: val.view_id
              })
            }
          });
        }
      } className={styles.add_view_content}>
        <Form.Item className={styles.add_view_select}>
          {getFieldDecorator('view_authority_id', {
            initialValue: "请选择已有视图"
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
          <Button type="primary" htmlType="submit" className={styles.button}>确定</Button>
          <Button onClick={handleReset}>重置</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

add_view.propTypes = {
};
const mapStateToProps = state => {
  return state.addUser
}
const mapDispatchToProps = dispatch => {
  return {
    //获取所有视图
    getView: () => {
      dispatch({
        type: "addUser/getView"
      })
    },
    //添加视图接口权限
    addView: payload => {
      dispatch({
        type: "addUser/addView",
        payload
      })
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(add_view));