import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import { Layout, Table,Pagination  } from "antd"
const { Content } = Layout
function ClassesApproved(props) {
  useEffect(() => {
    props.getGrade()
  }, [])
  let { Grade } = props
  const columns = [
    {
      title: '班级名',
      dataIndex: 'grade_name',
      key: 'name',
    },
    {
      title: '课程名称',
      dataIndex: 'subject_text',
      key: 'age',
    },
    {
      title: '阅卷状态',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '课程名称',
      key: 'tags',
      dataIndex: 'subject_text',

    },
    {
      title: '成材率',
      dataIndex: 'room_text',
      key: 'action',
    },
    {
      title: '操作',
      key: 'key',
      render: text => <a href="javascript:;" onClick={()=>{}}>批卷</a>
    }
  ];

  console.log(props)
  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      <h2 style={{ padding: '20px 0px', marginTop: '10px' }}>待批班级</h2>
      <Content
        style={{
          background: '#fff',
          padding: 24,
          marginBottom: 24,
          borderRadius: 10,
          flex: 1
        }}
      >
        <Table 
        columns={columns} 
        dataSource={Grade && Grade}
        pagination={{
          showQuickJumper:true,
          showSizeChanger:true,
        }}
        />
      </Content>
    </Layout>
  );
}

ClassesApproved.propTypes = {
};
const mapStateToProps = state => {
  return {
    ...state.mark,
    global: state.loading.global
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getGrade: () => {
      dispatch({
        type: "mark/getGrade"
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ClassesApproved);
