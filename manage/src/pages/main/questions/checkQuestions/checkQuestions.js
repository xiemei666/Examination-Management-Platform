import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import { Layout, Tag, Select, Button} from 'antd';
import { Link } from 'dva/router';
import styles from "./checkQuestions.scss"

const { CheckableTag } = Tag;
const { Option } = Select;
const { Content } = Layout;

function CheckQuestions(props) {
  useEffect(() => {
    props.checkQusetons()
    props.getExamTypes()
    props.getQuestionsTypes()
    props.getSubjects()
  }, [])
  let { QuestionsType, examType, subjects } = props
  let tagsFromServer = ['All'];
  //所有的课程类型
  tagsFromServer = tagsFromServer.concat(subjects && subjects.map(item => item.subject_text))
  //选中的课程类型
  const [checkedCon, setCheckedCon] = useState('')
  //全选的状态
  const [allChecked, setAllChecked] = useState(false)
  //查询考试类型的ID
  const [exam_id, setExamTypeId] = useState('')
  //查询题目类型的ID
  const [questions_type_id, setQuestionsTypeId] = useState('')
  //查询课程类型的ID
  const [subject_id, setSubjectId] = useState('')
  let handleChange = (tag, checked) => {
    console.log(tag, checked)
    if (tag === "All") {
      setAllChecked(!allChecked)
      setCheckedCon('')
    } else {
      setCheckedCon(tag)
      setSubjectId(subjects && subjects.filter(item => item.subject_text === tag)[0].subject_id)
    }
  }
  let getExamTypeId = (e) => {
    let id = examType && examType.filter(item => item.exam_name === e)[0].exam_id
    setExamTypeId(id)
    // console.log(id)
  }
  let getQuestionsTypeId = (e) => {
    let id = QuestionsType && QuestionsType.filter(item => item.questions_type_text === e)[0].questions_type_id
    setQuestionsTypeId(id)
  }
  let searchTest = () => {
    props.searchTests({ exam_id, questions_type_id, subject_id })
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
            {tagsFromServer.map((tag, index) => (
              <CheckableTag
                key={tag}
                checked={checkedCon === tag}
                className={allChecked ? styles['ant-tag-checkable-checked'] : ''}
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
              <Select style={{ width: '100%' }} onChange={(e) => getExamTypeId(e)}>
                {examType && examType.map((item, index) => <Option key={index} value={item.exam_name}>{item.exam_name}</Option>)}
              </Select>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: "center", width: '25%' }}>
            <label style={{ width: '35%', textAlign: 'right' }}>题目类型：</label>
            <div style={{ width: '62.5%' }}>
              <Select defaultValue="" style={{ width: '100%' }} onChange={(e) => getQuestionsTypeId(e)}>
                {QuestionsType && QuestionsType.map((item, index) => <Option key={index} value={item.questions_type_text}>{item.questions_type_text}</Option>)}
              </Select>
            </div>
          </div>
          <div style={{ width: '25%' }} className={styles.ant_submit}>
            <Button type="primary" icon="search" onClick={searchTest}>查询</Button>
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
            <Link to={"/main/questions/detail/" + item.questions_id}>
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
            </Link>
            <ul>
              <li style={{ cursor: 'pointer' }}><Link to={"/main/questions/editQuestions/" + item.questions_id}>编辑</Link></li>
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
    ...state.questions,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    checkQusetons: () => {

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
    },
    searchTests: payload => {
      dispatch({
        type: 'questions/searchTest',
        payload
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CheckQuestions);
