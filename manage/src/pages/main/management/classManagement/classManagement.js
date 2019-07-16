import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import styles from './classManagement.scss'
import { Layout, Button, Form, Table, Input, Divider, Select } from 'antd';
const { Content } = Layout;
const { Option } = Select;
function ClassManagement(props) {
  const { classManagement,
    allClass,
    classroomManagement,
    allClassroom,
    Coursename,
    allCoursename,
    addClassManagement,
    deleteClassManagement,
    updataClassManagement } = props
  const [mask, updataMask] = useState(false)
  const [num, updataNum] = useState(false)
  useEffect(() => {
    classManagement()
    classroomManagement()
    Coursename()
  }, [])

  let handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        if (num) {
          console.log('111', values)
          // updataClassManagement({
          //   grade_name: values.grade_name,
          //   room_id: values.room_id,
          //   subject_id: values.subject_id
          // })
        } else {
          addClassManagement({
            grade_name: values.class_name,
            subject_id: values.Course_name,
            room_id: values.classroom_number
          })
          updataMask(false)
        }
      }
    });
  };
  const columns = [
    {
      title: '班级名',
      dataIndex: 'grade_name',
      key: 'grade_id',
    },
    {
      title: '课程名',
      dataIndex: 'subject_text',
      key: 'age',
    }, {
      title: '教室号',
      dataIndex: 'room_text',
      key: 'room_id',
    },
    {
      title: '操作',
      key: '操作',
      render: (text, record) => (
        <span>
          <span onClick={() => {
            updataNum(true)
            updataMask(true)
            console.log("text", text),
            console.log("record", record)
            props.form.setFieldsValue({
              class_name: text.grade_name,
              classroom_number: text.room_id,
              Course_name: text.subject_id
            })
          }}>修改</span>
          <Divider type="vertical" />
          <span onClick={() => { deleteClassManagement({ grade_id: text.grade_id }) }}>删除</span>
        </span>
      ),
    },
  ];
  const pageSizeOptions = {
    pageSize: 10
  }
  const { getFieldDecorator } = props.form;
  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      <h2 style={{ padding: '20px 0px', marginTop: '10px' }}>班级管理</h2>
      <Content
        style={{
          background: '#fff',
          padding: 24,
          marginBottom: 24,
          borderRadius: 10
        }}
      >
        <Form onSubmit={handleSubmit} className={styles.wrapper}>
          <Button type="primary" className={styles.addButton} onClick={() => { updataMask(true), updataNum(false) }}>+添加班级</Button>
          <Table rowKey="grade_id" columns={columns} dataSource={allClass} pagination={pageSizeOptions} />
          {
            mask && <div className={styles.mask}>
              <div className={styles.mask_content}>
                <div className={styles.content_top}>
                  <h3>添加班级</h3>
                  <p className={styles.del} onClick={() => updataMask(false)}>x</p>
                </div>
                <div className={styles.content_content}>
                  <Form.Item label="班级名">
                    {getFieldDecorator('class_name', {
                      rules: [
                        {
                          required: true,
                          message: '请输入班级名!',
                        },
                      ],
                    })(<Input placeholder='班级名' />)}
                  </Form.Item>
                  <Form.Item label="教室号">
                    {getFieldDecorator('classroom_number', {
                      rules: [
                        {
                          required: true,
                          message: '请选择教室号!',
                        },
                      ],
                    })(<Select placeholder='请选择教室号'>
                      {
                        allClassroom.map(item => (
                          <Option key={item.room_id} value={item.room_id}>{item.room_text}</Option>
                        ))
                      }
                    </Select>)}
                  </Form.Item>
                  <Form.Item label="课程名">
                    {getFieldDecorator('Course_name', {
                      rules: [
                        {
                          required: true,
                          message: '请输入课程名!',
                        },
                      ],
                    })(<Select placeholder='课程名'>
                      {
                        allCoursename.map(item => (
                          <Option key={item.subject_id} value={item.subject_id}>{item.subject_text}</Option>
                        ))
                      }
                    </Select>)}
                  </Form.Item>
                </div>
                <div className={styles.content_bottom}>
                  <Form.Item className={styles.footer_button}>
                    <Button onClick={() => updataMask(false)}>
                      取消
                    </Button>
                    <Button type="primary" htmlType="submit" className={styles.Button}>
                      提交
                    </Button>
                  </Form.Item>
                </div>
              </div>
            </div>
          }
        </Form>
      </Content>
    </Layout>
  );
}

ClassManagement.propTypes = {
};
const mapStateToProps = state => {
  return {
    ...state.management,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    //获取所有信息
    classManagement: () => {
      dispatch({
        type: 'management/classManagement',
      })
    },
    //获取全部教室
    classroomManagement: () => {
      dispatch({
        type: 'management/classroomManagement',
      })
    },
    //获取全部课程名
    Coursename: () => {
      dispatch({
        type: 'management/Coursename',
      })
    },
    //添加班级
    addClassManagement: payload => {
      dispatch({
        type: 'management/addClassManagement',
        payload
      })
    },
    //删除班级
    deleteClassManagement: payload => {
      dispatch({
        type: 'management/deleteClass_Management',
        payload
      })
    },
    //更新班级
    updataClassManagement: payload => {
      dispatch({
        type: 'management/updataClass_Management',
        payload
      })
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(ClassManagement));
