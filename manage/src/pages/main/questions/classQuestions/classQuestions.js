import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import styles from './classQuestions.scss'
import { Layout, Button, Form, Table, Input} from 'antd';
const { Content } = Layout;

function ClassQuestions(props) {
   
  const { getText, allText } = props
  const [mask, updataMask] = useState(false)
  useEffect(() => {
    getText()
  }, [])
  
  let handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        props.classQuestions({
          text: values.input,
          sort: new Date() * 1
        })
        getText()
      }
    });
    updataMask(false)
  };
 
  const columns = [
    {
      title: '类型ID',
      dataIndex: 'questions_type_id',
      key: 'questions_type_sort',
    },
    {
      title: '类型名称',
      dataIndex: 'questions_type_text',
      key: 'age',
    },
    {
      title: '操作',
      dataIndex: 'address',
      key: 'address',
    }
  ];
  const pageSizeOptions = {
    pageSize: 5
  }
  const { getFieldDecorator } = props.form;
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
          <Button type="primary" className={styles.addButton} onClick={() => updataMask(true)}>+添加类型</Button>
          <Table rowKey="questions_type_id" columns={columns} dataSource={allText} pagination={pageSizeOptions} />
        </Content>
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
                <Button type="primary" htmlType="submit" style={{ width: 110 }}>确定</Button>
                <Button onClick={() => updataMask(false)}>取消</Button>
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
const mapStateToProps = state => {
  return {
    ...state.class,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    classQuestions: payload => {
      dispatch({
        type: 'class/classQuestions',
        payload
      })
    },
    // 获取题目类型
    getText: () => {
      dispatch({
        type: "class/getAllQuestions"
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(ClassQuestions));
