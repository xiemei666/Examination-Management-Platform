import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import { Layout, Radio, Table, Form, Button, Select } from 'antd';
import "./testPaper.scss"
import moment from 'moment';
const { Content } = Layout;
const { Option } = Select;
function TestPaper(props) {
  // console.log(props)
  useEffect(() => {
    props.getExam()
    props.getExamTypes()
    props.getSubjects()
  }, [])
  function onChange(e) {
    // console.log(`radio checked:${e.target.value}`);
  }
  let { exam, examType, subjects } = props
  // console.log(exam)
  let [Allexams, setAllexams] = useState(exam)
  useEffect(() => {
    setAllexams(exam)
  }, [exam]);
  const columns = [
    {
      title: '试卷信息',
      dataIndex: '',
      key: '',
      render: text => {
        // console.log(text)
        let time = moment(text.end_time - text.start_time);
        return (
          <div>
            <h5>{text.title}</h5>
            <p style={{ fontSize: "12px" }}><span style={{ marginRight: '10px' }}>考试时间:{time.hours()}:
          {time.minutes()}:{time.second()} </span>{text.number}道题<span></span><span>题作弊{text.status}分</span></p>
          </div>
        )
      },
    },
    {
      title: '班级',

      render: text => <div>
        <h5>考试班级</h5>
        <p style={{ fontSize: "12px" }}>{text.grade_name.join(' ')}</p>
      </div>,
    },
    {
      title: '创建人',
      dataIndex: 'user_name',
      key: 'address1',
    },
    {
      title: '开始时间',
      dataIndex: 'start_time',
      key: 'address2',
      render: text => <span style={{ fontSize: '12px' }}>{new Date(text * 1).toLocaleString()}</span>
    },
    {
      title: '结束时间',
      dataIndex: 'end_time',
      key: 'address3',
      render: text => <span style={{ fontSize: '12px' }}>{new Date(text * 1).toLocaleString()}</span>
    },
    {
      title: '操作',
      key: 'action',
      render: text => (
        <span>
          <a onClick={() => { props.history.push(`/main/test/detailTest/${text.exam_exam_id}`) }}>详情</a>
        </span>
      ),
    },
  ];
  let handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
      }
    });
  }
  const { getFieldDecorator } = props.form;
  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      <h2 style={{ padding: '20px 0px', marginTop: '10px' }}>试卷列表</h2>
      <Content
        style={{
          background: '#fff',
          padding: 24,
          marginBottom: 24,
          borderRadius: 10,
          flex: 1
        }}
      >
        <Form layout="inline" onSubmit={handleSubmit}>
          <div>
            <Form.Item label="考试类型">
              {getFieldDecorator('exam_id', {
              })(
                <Select
                  style={{ width: '120px' }}
                >
                  {examType && examType.map((item, index) => <Option key={index} value={item.exam_id}>{item.exam_name}</Option>)}
                </Select>,
              )}
            </Form.Item>
            <Form.Item label="课程">
              {getFieldDecorator('subject_id', {
              })(
                <Select
                  style={{ width: '120px' }}
                >
                  {subjects && subjects.map((item, index) => <Option key={index} value={item.subject_id}>{item.subject_text}</Option>)}
                </Select>,
              )}
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
              <Button type="primary" icon="search" htmlType="submit">查询</Button>
            </Form.Item>
          </div>
        </Form>
      </Content>
      <Content
        style={{
          background: '#fff',
          padding: 24,
          marginBottom: 24,
          borderRadius: 10,
          flex: 1
        }}
      >
        <div className="ant_buttons">
          <div>
            <h4>试卷列表</h4>
            <Radio.Group onChange={onChange} defaultValue="a">
              <Radio.Button value="a" style={{ borderRadius: '2px 0 0 2px' }}>全部</Radio.Button>
              <Radio.Button value="b">进行中</Radio.Button>
              <Radio.Button value="c" style={{ borderRadius: '2px 0 0 2px' }}>已结束</Radio.Button>
            </Radio.Group>
          </div>
        </div>
        <div>
          <Table columns={columns} dataSource={Allexams} pagination={false} rowKey="start_time"/>
        </div>
      </Content>
    </Layout>
  );
}

TestPaper.propTypes = {
};
const mapStateToProps = state => {
  return {
    ...state.addTest,
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
    getExam: () => {
      dispatch({
        type: "addTest/getExam"
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(TestPaper));
