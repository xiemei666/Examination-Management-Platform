import React,{ useEffect, useState }  from 'react';
import { connect } from 'dva';
import styles from './classroomManagement.scss'
import { Layout, Button, Form, Table, Input,Modal} from 'antd';
const { Content } = Layout;
const { confirm } = Modal;

function ClassroomManagement(props) {
  const { classroomManagement, allClass,addroomManagement,deleteroomManagement } = props
  const [mask, updataMask] = useState(false)
  useEffect(() => {
    classroomManagement()
  }, [])
  function showConfirm(text) {
    confirm({
      title: '确定要删除此教室吗?',
      okText: '确定',
      cancelText: '取消',
      onOk() {
        deleteroomManagement({room_id:text.room_id})
      },
      onCancel() {
  
      },
    });
  }
  let handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        addroomManagement({
          room_text:values.room_name
        })
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
            <span onClick={() =>showConfirm(text)}>删除</span>
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
                <h3>添加班级</h3>
                <p className={styles.del} onClick={() => updataMask(false)}>x</p>
              </div>
              <div className={styles.content_content}>
                <Form.Item label="教室号">
                  {getFieldDecorator('room_name', {
                    rules: [
                      {
                        required: true,message: '请输入班级名!',
                      },
                    ],
                  })(<Input placeholder='教室名' />)}
                </Form.Item>
              </div>
              <div className={styles.content_bottom}>
                <Form.Item className={styles.footer_button}>
                  <Button onClick={() => updataMask(false)}>取消</Button>
                  <Button type="primary" htmlType="submit" className={styles.Button}>提交</Button>
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
    deleteroomManagement: payload => {
      dispatch({
        type: 'roommanagement/deleteroomManagement',
        payload
      })
    },
    //添加教室
    addroomManagement: payload => {
      dispatch({
        type: 'roommanagement/addroomManagement',
        payload
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(ClassroomManagement));
