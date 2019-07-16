import React,{useState,useEffect} from 'react';
import { connect } from 'dva';
import {Layout} from "antd"
const {Content}  = Layout
function ClassesApproved() {
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
      ></Content>
      </Layout>
  );
}

ClassesApproved.propTypes = {
};

export default connect()(ClassesApproved);
