import React, { useState, useEffect } from 'react'
import { connect } from 'dva';
import { Layout, Button } from 'antd';
import styles from "./CreateTest.scss"
const { Content } = Layout;

function CreateTest(props) {
  let { testQuestions } = props
  console.log(props)
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
        <Button type="button" >添加试题</Button>
        <div className='test_exam'>
          <h2>{testQuestions.title}</h2>
          <p>考试时间：1小时30分钟  监考人：刘于       开始考试时间：2018.9.10  10:00  阅卷人：刘于</p>
          <div>
            {testQuestions.questions && testQuestions.questions.map((item, index) => <div key={index} className="style_questionitem">
              <h4>{index + 1}: {item.title}<a href="javascript:;" style={{ float: "right" }}>删除</a></h4>
              <div>
                <pre>
                  <code>{item.questions_stem}</code>
                </pre>
              </div>
            </div>)}
          </div>
          <span className='test_exam_juan'></span>
        </div>
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

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateTest)