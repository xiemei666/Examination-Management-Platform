import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import { Layout, Tag, Select, Button } from 'antd';
import styles from "./checkQuestions.scss"

const { CheckableTag } = Tag;
const { Option } = Select;




const { Content } = Layout;

function CheckQuestions(props) {
  console.log(props)
  useEffect(() => {
    props.checkQusetons()
    props.getExamTypes()
    props.getQuestionsTypes()
    props.getSubjects()
  }, [])
  let { QuestionsType, examType, subjects } = props
  let tagsFromServer = ['All'];
  tagsFromServer = tagsFromServer.concat(subjects && subjects.map(item => item.subject_text))

  const [selectedTags, setSelectedTags] = useState([])
  let handleChange = (tag, checked) => {
    console.log(tag,checked)
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    setSelectedTags(nextSelectedTags)
    // if (nextSelectedTags.includes('All')) {
    //   props.checkQusetons()
    //   setSelectedTags(tagsFromServer)
    // } else {
    //   setSelectedTags([])
    // }

  }
  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      <h2 style={{ padding: '20px 0px', marginTop: '10px' }}>查看试题</h2>
      <Content
        style={{
          background: '#fff',
          padding: 24,
          marginBottom: 24,
          borderRadius: 10
        }}
      >
        <div style={{ display: 'flex', marginBottom: 10, lineHeight: '40px' }}>
          <h6 style={{ marginRight: 8, display: 'inline', fontSize: 14, width: '8%', textAlign: 'right' }}>课程类型:</h6>
          <div style={{ flex: 1 }}>
            {tagsFromServer.map((tag,i) => (
              <CheckableTag
                key={i}
                checked={tagsFromServer.indexOf(i) > -1}
                onChange={checked => handleChange(tag, checked)}
              >
                {tag}
              </CheckableTag>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', marginBottom: 24, padding: '' }}>
          <div style={{ display: 'flex', alignItems: "center", width: '25%' }}>
            <label style={{ width: '35%', textAlign: 'right' }}>考试类型：</label>
            <div style={{ width: '62.5%' }}>
              <Select defaultValue="" style={{ width: '100%' }} >
                {examType && examType.map((item, index) => <Option key={index} value={item.exam_name}>{item.exam_name}</Option>)}

              </Select>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: "center", width: '25%' }}>
            <label style={{ width: '35%', textAlign: 'right' }}>题目类型：</label>
            <div style={{ width: '62.5%' }}>
              <Select defaultValue="" style={{ width: '100%' }} >
                {QuestionsType && QuestionsType.map((item, index) => <Option key={index} value={item.questions_type_text}>{item.questions_type_text}</Option>)}

              </Select>
            </div>
          </div>
          <div style={{ width: '25%' }} className={styles.ant_submit}>
            <Button type="primary" icon="search">
              查询
            </Button>
          </div>
        </div>
      </Content>
      <Content
        style={{
          background: '#fff',
          padding: 24,
          marginBottom: 24,
          borderRadius: 10
        }}
      >
        <div className={styles.ant_list}>
          {props.qustions && props.qustions.map((item, index) => <div key={index} className={styles.ant_list_item}>
            <a>
              <div>
                <h4>{item.title}</h4>
              </div>
              <div>
                <div>
                  <Tag color="blue">{item.questions_type_text}</Tag>
                  <Tag color="geekblue">{item.subject_text}</Tag>
                  <Tag color="orange">{item.exam_name}</Tag>
                </div>
                <span>{item.user_name} 发布</span>
              </div>
            </a>
            <ul>
              <li>编辑</li>
            </ul>
          </div>)}
        </div>
      </Content>
    </Layout>
  );
}

CheckQuestions.propTypes = {
};
const mapStateToProps = state => {
  return {
    ...state.questions
  }
}
const mapDispatchToProps = dispatch => {
  return {
    checkQusetons: () => {
      console.log(123)
      dispatch({
        type: 'questions/questions',

      })
    },
    getExamTypes: () => {
      dispatch({
        type: 'questions/examTypes'
      })
    },
    getQuestionsTypes: () => {
      dispatch({
        type: 'questions/QuestionsTypes'
      })
    },
    getSubjects: () => {
      dispatch({
        type: 'questions/Subject'
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CheckQuestions);
