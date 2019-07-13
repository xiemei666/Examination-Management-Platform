import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import { Layout, Tag, Spin, Form, Icon, Input, Button, Checkbox, Select, InputNumber, DatePicker } from 'antd';
import styles from "./addTest.scss"
const { Content } = Layout;
const { Option } = Select;
const { MonthPicker, RangePicker } = DatePicker;
function AddTest(props) {

  let handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  let handleSelectChange = value => {
    console.log(value);
    props.form.setFieldsValue({
      note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    });
  };
  const { getFieldDecorator } = props.form;

  const config = {
    rules: [{ type: 'object', required: true, message: 'Please select time!' }],
  };
  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      <h2 style={{ padding: '20px 0px', marginTop: '10px' }}>添加考试</h2>

      <Content
        style={{
          background: '#fff',
          padding: 24,
          marginBottom: 24,
          borderRadius: 10,
          flex: 1
        }}
      >
        <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={handleSubmit}>
          <div>
            <div className='addTest-list'>
              <Form.Item label="试卷名称">
                {getFieldDecorator('note', {
                  rules: [{ required: true, message: '请输入试卷名称' }],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="选择考试类型">
                {getFieldDecorator('gender', {
                  rules: [{ required: true, message: '请选择考试类型' }],
                })(
                  <Select
                    style={{ width: '120px' }}
                    onChange={handleSelectChange}
                  >
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                  </Select>,
                )}
              </Form.Item>
              <Form.Item label="选择课程">
                {getFieldDecorator('gender', {
                  rules: [{ required: true, message: '请选择课程' }],
                })(
                  <Select
                    style={{ width: '120px' }}
                    onChange={handleSelectChange}
                  >
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                  </Select>,
                )}
              </Form.Item>
              <Form.Item label="设置题量">
                {getFieldDecorator('input-number', {
                  initialValue: null,
                  rules: [{ required: true, message: '请设置题量' }],
                })(<InputNumber min={1} max={10} />)}

              </Form.Item>
              <Form.Item label="考试时间">
                <Form.Item label="">
                  {getFieldDecorator('date-time-picker', {
                    config,
                    rules: [{ required: true, message: '请选择考试开始时间' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />,
                  )}
                </Form.Item>
                <span>-</span>
                <Form.Item label="">
                  {getFieldDecorator('date-time-picker', {
                    config,
                    rules: [{ required: true, message: '请选择考试结束时间' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />,
                  )}
                </Form.Item>
              </Form.Item>
              <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                <Button type="primary" htmlType="submit">
                  Submit
          </Button>
              </Form.Item>

            </div>
          </div>
        </Form>

      </Content>
    </Layout>
  );
}

AddTest.propTypes = {
};

export default connect()(Form.create()(AddTest));
