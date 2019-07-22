import React, { useEffect } from 'react';
import { connect } from 'dva';
import { Layout, Form, Input, Button, Select, InputNumber, DatePicker } from 'antd';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import "./addTest.scss"
const { Content } = Layout;
const { Option } = Select;
// const { MonthPicker, RangePicker } = DatePicker;
function AddTest(props) {
  let { getExamTypes, getSubjects, examType, subjects, addTest } = props
  // console.log(props)
  useEffect(() => {
    getExamTypes()
    getSubjects()
  }, [])
  let handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        addTest(values)
        props.history.push("/main/test/createTest")
      }
    });
  };

  const { getFieldDecorator } = props.form;
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
                {getFieldDecorator('title', {
                  rules: [{ required: true, message: '请输入试卷名称' }],
                })(<Input />)}
              </Form.Item>
              <Form.Item label="选择考试类型">
                {getFieldDecorator('exam_id', {
                  rules: [{ required: true, message: '请选择考试类型' }],
                })(
                  <Select
                    style={{ width: '120px' }}
                  >
                    {examType && examType.map((item, index) => <Option key={index} value={item.exam_id}>{item.exam_name}</Option>)}
                  </Select>,
                )}
              </Form.Item>
              <Form.Item label="选择课程">
                {getFieldDecorator('subject_id', {
                  rules: [{ required: true, message: '请选择课程' }],
                })(
                  <Select
                    style={{ width: '120px' }}
                  >
                    {subjects && subjects.map((item, index) => <Option key={index} value={item.subject_id}>{item.subject_text}</Option>)}
                  </Select>,
                )}
              </Form.Item>
              <Form.Item label="设置题量">
                {getFieldDecorator('number', {
                  initialValue: null,
                  rules: [{ required: true, message: '请设置题量' }],
                })(<InputNumber min={1} max={10} step={3} />)}
              </Form.Item>
              <Form.Item label="考试时间" className="change_time">
                <Form.Item label="">
                  {getFieldDecorator('start_time', {
                    rules: [{ required: true, message: '请选择考试开始时间' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" style={{ width: '100%' }} placeholder="开始时间" locale={locale} />,
                  )}
                </Form.Item>
                <span style={{ display: 'block', width: '24px', textAlign: 'center' }}>-</span>
                <Form.Item label="">
                  {getFieldDecorator('end_time', {
                    rules: [{ required: true, message: '请选择考试结束时间' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" style={{ minWidth: '100px', width: '100%' }} placeholder="结束时间" locale={locale} />,
                  )}
                </Form.Item>
              </Form.Item>
              <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                <Button type="primary" htmlType="submit">创建试卷</Button>
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
const mapStateToProps = state => {
  return {
    ...state.questions,
    global: state.loading.global
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getExamTypes: () => {
      dispatch({
        type: 'questions/examTypes'
      })
    },
    getSubjects: () => {
      dispatch({
        type: 'questions/Subject'
      })
    },
    addTest: (payload) => {
      dispatch({
        type: "addTest/addTest",
        payload
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(AddTest));
