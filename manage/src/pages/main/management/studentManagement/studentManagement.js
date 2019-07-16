import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import styles from './studentManagement.scss'
import { Layout, Button, Form, Table, Input, Pagination, Select } from 'antd';
const { Content } = Layout;
const { Option } = Select;
function StudentManagement(props) {
  const {getRoomName, allRoom,getGrade,allGrade,getStudent,allStudent,deleteStudent } = props
  useEffect(() => {
    getRoomName()
    getGrade()
    getStudent()
  }, [])
  let handleSubmit = e => {
    props.form.validateFieldsAndScroll((err, values) => {
      
      if (!err) {
        // console.log(values,allStudent)
        // let name =allStudent && allStudent.filter(item => item.student_name==values.student_name)
        // let room =allStudent && allStudent.filter(item => item.room_id==values.room_number)
        // let Class =allStudent && allStudent.filter(item => item.grade_id==values.grade_name)

        // console.log(room,Class)
      }
      

    });
  };
  let handleReset = () => {
    props.form.resetFields();
  };
  const columns = [
    {
      title: '姓名',
      dataIndex: 'student_name',

    },
    {
      title: '学号',
      dataIndex: 'student_id',
 
    }, {
      title: '班级',
      dataIndex: 'grade_name',

    },
    {
      title: '教室',
      dataIndex: 'room_text',

    },
    {
      title: '密码',
      dataIndex: 'student_pwd',
      key: '',
    },
    {
      title: '操作',
      key: '操作',
      render: (text, record) => (
        <span onClick={() => {deleteStudent({student_id:text.student_id})}}>删除</span>
      ),
    },
  ];

  function onChange(pageNumber) {

  }
  function onShowSizeChange(current, pageSize) {

  }
  const { getFieldDecorator } = props.form;
  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      <h2 style={{ padding: '20px 0px', marginTop: '10px' }}>学生管理</h2>
      <Form onSubmit={handleSubmit} className={styles.wrapper}>
        <Form.Item className={styles.li}>
          {getFieldDecorator('student_name', {
          })(<Input placeholder='输入学生姓名' />)}
        </Form.Item>
        <Form.Item className={styles.li}>
          {getFieldDecorator('room_number', {
          })(<Select placeholder='请选择教室号' style={{ width: '180px', height: '32px' }}>
            {
              allRoom.map(item => (
                <Option key={item.room_id} value={item.room_id}>{item.room_text}</Option>
              ))
            }
          </Select>)}
        </Form.Item>
        <Form.Item className={styles.li}>
          {getFieldDecorator('grade_name', {
          })(<Select placeholder='班级名' style={{ width: '180px', height: '32px' }}>
            {
              allGrade.map(item => (
                <Option key={item.grade_id} value={item.grade_id}>{item.grade_name}</Option>
              ))
            }
          </Select>)}
        </Form.Item>
        <Form.Item className={styles.li}>
          <Button type="primary" htmlType="submit">搜索</Button>
          <Button type="primary" onClick={handleReset}>重置</Button>
        </Form.Item>
      </Form>
      <Content
        style={{
          background: '#fff',
          marginBottom: 24,
          borderRadius: 10
        }}
      >
        <Table 
        rowKey="student_id" 
        columns={columns} 
        dataSource={allStudent}
        pagination={{
          showSizeChanger:true, //是否可以改变 pageSize
          onShowSizeChange:onShowSizeChange, //pageSize 变化的回调
          showQuickJumper:true, //是否可以快速跳转至某页
          defaultCurrent:1, //默认的当前页数
          total:allStudent.length,//总条数
          onChange:onChange //页码改变的回调，参数是改变后的页码及每页条数
        }}
        />
      </Content>
    </Layout>
  );
}

StudentManagement.propTypes = {
};
const mapStateToProps = state => {
  return {
    ...state.studentManagement,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    //获取所有教室
    getRoomName: () => {
      dispatch({
        type: 'studentManagement/getRoom_Name',
      })
    },
    //获取所有班级
    getGrade: () => {
      dispatch({
        type: 'studentManagement/getGrade',
      })
    },
    //获取所有学生信息
    getStudent: () => {
      dispatch({
        type: 'studentManagement/getStudent',
      })
    },
    //删除班级
    deleteStudent: payload => {
      dispatch({
        type: 'studentManagement/deleteStudent',
        payload
      })
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(StudentManagement));