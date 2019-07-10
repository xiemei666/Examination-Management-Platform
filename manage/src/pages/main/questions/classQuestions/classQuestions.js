import React,{useEffect,useState} from 'react';
import { connect } from 'dva';
import styles from './classQuestions.scss'
import { Layout, Tag, Select, Button,Form,Table } from 'antd';
const { Content } = Layout;

function ClassQuestions(props) {
  const [mask,updataMask]=useState(false)

  let handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  const columns = [
    {
      title: '类型ID',
      dataIndex: '类型ID',
      render: text => <a href="javascript:;">{text}</a>,
    },
    {
      title: '类型名称',
      dataIndex: '类型名称',
    },
    {
      title: '操作',
      dataIndex: '操作',
    },
  ];
  const data = [
    {
      key: '1',
      类型ID: 'John Brown',
      类型名称: 32,
      操作: 'New York No. 1 Lake Park',
    }
  ];
  flag:false
  return (
    <Form onSubmit={handleSubmit} className={styles.wrapper}>
      <Layout style={{ padding: '0 24px 24px' }}>
        <h2 style={{ padding: '20px 0px', marginTop: '10px' }}>试题分类</h2>
        <Content
          style={{
            background: '#fff',
            padding: 24,
            marginBottom: 24,
            borderRadius: 10
          }}
          className={styles.class_content}
        >
          <Button type="primary" className={styles.addButton} onClick={()=>updataMask(true)}>+添加类型</Button>
          <Table  columns={columns} dataSource={data} />
        </Content>
        {
          mask&&<div className={styles.mask}>
          <div className={styles.mask_content}>
            <div className={styles.content_top}>
              <p className={styles.del} onClick={()=>updataMask(false)}>x</p>
              <h2>创建新类型</h2>
              <input placeholder='1111'/>
            </div>
            <Form.Item className={styles.footer_button}>
              <Button type="primary" htmlType="submit" style={{width:110}}>
                确定
              </Button>
              <Button onClick={()=>updataMask(false)}>
                取消
              </Button>
            </Form.Item>
          </div>
        </div>
        }
      </Layout>
    </Form>
  );
}

ClassQuestions.propTypes = {
};

export default connect()(ClassQuestions);
