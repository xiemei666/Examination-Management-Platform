import React from 'react';
import { connect } from 'dva';
import { Layout, Tag, Select, Button } from 'antd';
const { Content } = Layout;
function ClassQuestions() {
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
      ></Content>
      </Layout>
  );
}

ClassQuestions.propTypes = {
};

export default connect()(ClassQuestions);
