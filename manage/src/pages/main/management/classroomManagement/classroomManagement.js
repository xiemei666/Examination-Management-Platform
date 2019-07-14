import React,{ useEffect, useState }  from 'react';
import { connect } from 'dva';
import styles from './classroomManagement.scss'
import { Layout, Button, Form, Table, Input,} from 'antd';
const { Content } = Layout;
function ClassroomManagement(props) {
  const { classroomManagement, allClass } = props
  const [mask, updataMask] = useState(false)
  useEffect(() => {
    classroomManagement()
  }, [])

  let handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        // props.classQuestions({
        //   text: values.input,
        //   sort: new Date() * 1
        // })

      }
    });
    updataMask(false)
  };

  const columns = [
    {
      title: '教室号',
      dataIndex: 'room_text',
      key: 'room_id',
    },
    {
      title: '操作',
      key: '操作',
      render: (text, record) => (
        <span>
          <a href="javascript:;">删除</a>
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
      <h2 style={{ padding: '20px 0px', marginTop: '10px' }}>教室管理</h2>
      <Content
        style={{
          background: '#fff',
          padding: 24,
          marginBottom: 24,
          borderRadius: 10
        }}
      >
        <Form onSubmit={handleSubmit} className={styles.wrapper}>
          <Button type="primary" className={styles.addButton} onClick={() => updataMask(true)}>+添加教室</Button>
          <Table rowKey="grade_id" columns={columns} dataSource={allClass} pagination={pageSizeOptions} />
          {
            mask && <div className={styles.mask}>
              <div className={styles.mask_content}>
                <div className={styles.content_top}>
                  <p className={styles.del} onClick={() => updataMask(false)}>x</p>
                  <h2>创建新类型</h2>
                  <Form.Item>
                    {getFieldDecorator('input', {
                      //validateTrigger	校验子节点值的时机
                      validateTrigger: 'onBlur',
                      //rules	校验规则
                      rules: [
                        { required: true },
                      ],

                    })(<Input placeholder='请输入类型名称' />)}
                  </Form.Item>
                </div>
                <Form.Item className={styles.footer_button}>
                  <Button type="primary" htmlType="submit" style={{ width: 110 }}>
                    确定
                  </Button>
                  <Button onClick={() => updataMask(false)}>
                    取消
                  </Button>
                </Form.Item>
              </div>
            </div>
          }
        </Form>
      </Content>
    </Layout>
  );
}

ClassroomManagement.propTypes = {
};
const mapStateToProps = state => {
  return {
    ...state.roommanagement
  }
}
const mapDispatchToProps = dispatch => {
  return {
    //获取全部教室
    classroomManagement: () => {
      dispatch({
        type: 'roommanagement/classroomManagement',
      })
    },
    //删除教室
    deleteroomManagement: () => {
      dispatch({
        type: 'roommanagement/deleteroomManagement',
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(ClassroomManagement));
