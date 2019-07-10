import React,{useEffect,useState} from 'react';
import { connect } from 'dva';
import styles from './addQuestions.scss'
import {
  Select, Button, Form,
  Input,
} from 'antd';
import Editor from 'for-editor'
const { Option } = Select;
function AddQuestions(props) {
  const {addQuestions,getClass,classify,allQuestions,allSubject,getText,allText}=props
  useEffect(()=>{
    getClass(),
    allQuestions(),
    getText()
  },[])
  let handleSubmit = e => {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        // addQuestions()
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
                {
                  classify.map(item=>(
                    <Option key={item.exam_id}  value={item.exam_id}>{item.exam_name}</Option>
                  ))
                }
                
                
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
                {
                  allSubject.map(item=>(
                    <Option key={item.subject_id} value={item.subject_id}>{item.subject_text}</Option>
                  ))
                }
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
                {
                  allText.map(item=>(
                    <Option key={item.questions_type_id} value={item.questions_type_id}>{item.questions_type_text}</Option>
                  ))
                }
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
const mapStateToProps = state => {
  return state.add
}
const mapDispatchToProps = dispatch => {
  return {
    addQuestions:() => {
      dispatch({
        type:"add/addQuestions"
      })
    },
    getClass:()=>{
      dispatch({
        type:"add/getClass"
      })
    },
    allQuestions:()=>{
      dispatch({
        type:"add/getAllSubject"
      })
    },
    getText:()=>{
      dispatch({
        type:"add/getAllQuestions"
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(AddQuestions));
