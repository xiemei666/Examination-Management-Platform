import React from 'react';
import { connect } from 'dva';
import styles from './addQuestions.scss'
import {
  Select, Button, Form,
  Input,
} from 'antd';
import Editor from 'for-editor'
const { Option } = Select;
function AddQuestions(props) {
  let handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  const { getFieldDecorator } = props.form;
  return (
    <div className={styles.wrapper}>
      <h2>添加试题</h2>
      <div className={styles.content}>
      <Form onSubmit={handleSubmit}>
        <div className={styles.con}>
          <h3>题目信息</h3>

          <div className={styles.stem}>

            <label>题干</label>
           
              <Form.Item>
                {getFieldDecorator('user', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your E-mail!',
                    },
                  ],
                })(<Input placeholder='请输入题目标题，不要超过20个字' />)}
              </Form.Item>

          </div>

          <div className={styles.topic_theme}>
            <label>题目主题</label>
            <Editor placeholder="请输入内容..." />
          </div>

          <div className={styles.class}>
            <div className={styles.examination_type}>
              <label>请选择考试类型</label>
              <Select
                labelInValue
                defaultValue={{ key: '周考1' }}
                style={{ width: 200 }}
              // onChange={handleChange}
              >
                <Option value="周考1">周考1</Option>
                <Option value="周考2">周考2</Option>
                <Option value="周考3">周考3</Option>
                <Option value="月考">月考</Option>
              </Select>
            </div>
            <div className={styles.course_types}>
              <label>请选择课程类型</label>
              <Select
                labelInValue
                defaultValue={{ key: 'javaScript上' }}
                style={{ width: 200 }}
              // onChange={handleChange}
              >
                <Option value="javaScript上">javaScript上</Option>
                <Option value="javaScript下">javaScript下</Option>
                <Option value="模块化开发">模块化开发</Option>
                <Option value="移动端开发">移动端开发</Option>
                <Option value="node基础">node基础</Option>
                <Option value="组件化开发(vue)">组件化开发(vue)</Option>
                <Option value="渐进式开发(react)">渐进式开发(react)</Option>
                <Option value="项目实战">项目实战</Option>
                <Option value="javaScript高级">javaScript高级</Option>
                <Option value="node高级">node高级</Option>
              </Select>
            </div>
            <div className={styles.topic_type}>
              <label>请选择题目类型</label>
              <Select
                labelInValue
                defaultValue={{ key: '简答题' }}
                style={{ width: 200 }}
              // onChange={handleChange}
              >
                <Option value="简答题">简答题</Option>
                <Option value="代码阅读题">代码阅读题</Option>
                <Option value="代码补全">代码补全</Option>
                <Option value="修改bug">修改bug</Option>
                <Option value="手写代码">手写代码</Option>
              </Select>
            </div>
          </div>

          <div className={styles.answer_information}>
            <h3>答案信息</h3>
            <Editor placeholder="请输入内容..." />
          </div>
          <div className={styles.footer}>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  提交
                </Button>
              </Form.Item>
          </div>
        </div>
        </Form>
      </div>
    </div>
  );
}

AddQuestions.propTypes = {
};

export default connect()(Form.create()(AddQuestions));
