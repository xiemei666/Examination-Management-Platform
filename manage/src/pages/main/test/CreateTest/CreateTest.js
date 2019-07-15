import React, { useState, useEffect } from 'react'
import { connect } from 'dva';
import { Layout, Button, Modal, Drawer } from 'antd';
import styles from "./CreateTest.scss"
const { Content } = Layout;
const { confirm } = Modal;
function CreateTest(props) {
  let { testQuestions } = props
  // console.log(props)
  function showConfirm(id) {
    confirm({
      title: '确认提示',
      content: '是否要删除该题目?',
      cancelText: "取消",
      okText: "确认",
      onOk() {
        console.log('OK');
        // console.log(id)
        props.delTest(id)
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  let [visible, setVisible] = useState(false)
  let onClose = () => {
    setVisible(false)
  };
  function handsubmit(){

    let ids = testQuestions.questions && testQuestions.questions.map((item)=>item.questions_id)
    // console.log(ids)
    let id = testQuestions && testQuestions.exam_exam_id
    props.updatedTest({id:id,question_ids:JSON.stringify(ids.join(','))})
    props.history.push("/main/testPaper")
  }
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
          <h2>{testQuestions.title}</h2>
          <p>考试时间：1小时30分钟  监考人：刘于       开始考试时间：2018.9.10  10:00  阅卷人：刘于</p>
          <div>
            {testQuestions.questions && testQuestions.questions.map((item, index) => <div key={index} className="style_questionitem">
              <h4>{index + 1}: {item.title}<a href="javascript:;" style={{ float: "right" }} onClick={() => showConfirm(item.exam_id)}>删除</a></h4>
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
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </Content>

    </Layout>

  )
}
const mapStateToProps = state => {
  return {
    ...state.addTest,
    global: state.loading.global
  }
}
const mapDispatchToProps = dispatch => {
  return {
    delTest :(payload)=> {
     dispatch({
        type: "addTest/delTest",
        payload
      })
    },
    updatedTest:(payload)=> {
      dispatch({
        type:"addTest/updatedTest",
        payload
      })
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateTest)