import React, { useState, useEffect } from 'react'
import { connect } from 'dva';
import { Layout, Button, Modal, Drawer,Tag,Select,Form } from 'antd';
import "./CreateTest.scss"
const { Content } = Layout;
const { confirm } = Modal;
const { CheckableTag } = Tag;
const { Option } = Select
function CreateTest(props) {
  // let { testQuestions } = props
  useEffect(() => {
    props.checkQusetons()
    props.getExamTypes()
    props.getQuestionsTypes()
    props.getSubjects()
  }, [])
  let { QuestionsType, examType, subjects } = props
  let testArr = JSON.parse(window.localStorage.getItem('test')) || []
  let [tests,setTests] = useState(testArr) 

  let tagsFromServer = ['All'];
  tagsFromServer = tagsFromServer.concat(subjects && subjects.map(item => item.subject_text))


  // console.log(tests,"....")
  function showConfirm(id) {
    confirm({
      title: '确认提示',
      content: '是否要删除该题目?',
      cancelText: "取消",
      okText: "确认",
      onOk() {
        // console.log('OK');
        // console.log(id)
        // props.delTest(id)
        testArr.questions.splice(testArr.questions.findIndex(item=>item.questions_id===id),1)
        // console.log(tests.questions)
        setTests(testArr)
        window.localStorage.setItem('test',JSON.stringify(testArr))
      },
      onCancel() {
        // console.log('Cancel');
      },
    });
  }
  let [visible, setVisible] = useState(false)

  let onClose = () => {
    setVisible(false)
  };

  const [checkedCon, setCheckedCon] = useState('')
  const [subject_id, setSubjectId] = useState('')
  const [allChecked, setAllChecked] = useState(false)
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
  let handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
      
        let value =Object.entries(values) 
        value.push(['subject_id',subject_id])
        value.forEach(item=>{
          if(!item[1]){
            item[1]=""
          }
          values[item[0]]=item[1]
        })
        props.searchTests(values)
        console.log('Received values of form: ', values);
        
      }
    });
  };
  function addTestQusetion(item){
    console.log(tests)
    tests.questions.push(item)
    setTests(tests)
    window.localStorage.setItem('test',JSON.stringify(tests))
    setVisible(false)
  }
  function handsubmit() {
    let ids = tests.questions.map((item) => item.questions_id)
    // console.log(ids)
    let id = tests.exam_exam_id
    props.updatedTest({ id: id, question_ids: JSON.stringify(ids.join(',')) })
    props.history.push("/main/testPaper")
  }
  const { getFieldDecorator } = props.form;
  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      <h2 style={{ padding: '20px 0px', marginTop: '10px' }}>创建试卷</h2>
      <Content
        style={{
          background: '#fff',
          padding: 24,
          marginBottom: 24,
          borderRadius: 10,
          flex: 1
        }}
      >
        <Button type="button" onClick={() => { setVisible(true) }}>添加试题</Button>
        <div className='test_exam'>
          <h2>{tests.title}</h2>
          <p>考试时间：1小时30分钟  监考人：刘于       开始考试时间：2018.9.10  10:00  阅卷人：刘于</p>
          <div>
            {tests.questions && tests.questions.map((item, index) => <div key={index} className="style_questionitem">
              <h4>{index + 1}: {item.title}<a style={{ float: "right" }} onClick={() => showConfirm(item.exam_id)}>删除</a></h4>
              <div>
                <pre>
                  <code>{item.questions_stem}</code>
                </pre>
              </div>
            </div>)}
          </div>
          <span className='test_exam_juan'></span>
          <Button type="button" className="ant-btn ant-btn-primary" onClick={handsubmit}><span>创建试卷</span></Button>
        </div>
        <Drawer
          title="所有题目"
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <Form onSubmit={handleSubmit}>

            <Form.Item label="课程类型:">
              
                <div>
                  {tagsFromServer.map(item => <CheckableTag
                    key={item}
                    checked={checkedCon === item}
                    className={allChecked ? 'ant-tag-checkable-checked' : ''}
                    onChange={checked => handleChange(item, checked)}
                  >
                    {item}
                  </CheckableTag>)}
                </div>
            
            </Form.Item>

            <div className="ant_sel_change">
              <Form.Item label="考试类型">
                {getFieldDecorator('exam_id', {

                })(
                  <Select
                    style={{ width: '120px' }}
                  >
                    {examType && examType.map((item, index) => <Option key={index} value={item.exam_id}>{item.exam_name}</Option>)}

                  </Select>,
                )}
              </Form.Item>
              <Form.Item label="题目类型">
                {getFieldDecorator('questions_type_id', {

                })(
                  <Select
                    style={{ width: '120px' }}
                  >
                    {QuestionsType && QuestionsType.map((item, index) => <Option key={index} value={item.questions_type_id}>{item.questions_type_text}</Option>)}
                  </Select>,
                )}
              </Form.Item>
              <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                <Button type="primary" icon="search" htmlType="submit">
                  查询
                </Button>
              </Form.Item>
            </div>
          </Form>
          <div className='ant_list'>
          {props.qustions && props.qustions.map((item, index) => <div key={index} className='ant_list_item'>
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
              <li style={{ cursor: 'pointer' }}><a onClick={()=>addTestQusetion(item)}>添加</a></li>
            </ul>
          </div>)}
        </div>
        </Drawer>
      </Content>
    </Layout>
  )
}
const mapStateToProps = state => {
  return {
    ...state.addTest,
    ...state.questions,
    global: state.loading.global
  }
}
const mapDispatchToProps = dispatch => {
  return {
    delTest: (payload) => {
      dispatch({
        type: "addTest/delTest",
        payload
      })
    },
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
    },
    updatedTest:payload=>{
      dispatch({
        type:"addTest/updatedTest",
        payload
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(CreateTest))