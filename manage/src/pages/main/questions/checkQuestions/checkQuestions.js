import React from 'react';
import { connect } from 'dva';
import { Layout, Tag, Select, Button } from 'antd';
import styles from "./checkQuestions.scss"

const { CheckableTag } = Tag;
const { Option } = Select;

const tagsFromServer = ['All', 'javaScript上', 'javaScript下', '模块化开发', '移动端开发', 'node基础', '组件化开发(vue)', '渐进式开发(react)', '项目实战', 'javaScript高级', 'node高级'];


const { Content } = Layout;

function CheckQuestions() {

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
            {tagsFromServer.map(tag => (
              <CheckableTag
                key={tag}
                // checked={selectedTags.indexOf(tag) > -1}
                onChange={checked => this.handleChange(tag, checked)}
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
              <Select defaultValue="lucy" style={{ width: '100%' }} >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: "center", width: '25%' }}>
            <label style={{ width: '35%', textAlign: 'right' }}>题目类型：</label>
            <div style={{ width: '62.5%' }}>
              <Select defaultValue="lucy" style={{ width: '100%' }} >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
          </div>
          <div style={{ width: '25%' }} className={styles.ant_submit}>
            <Button type="primary" icon="search">
              搜索
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
          <div className={styles.ant_list_item}>
            <a>
              <div>
                <h4>机器人归位</h4>
              </div>
              <div>
                <div>
                <Tag color="blue">blue</Tag>
                <Tag color="geekblue">geekblue</Tag>
                <Tag color="orange">orange</Tag>
                </div>
                <span>dingshaoshan</span>
              </div>
            </a>
            <ul>
              <li>编辑</li>
            </ul>
          </div>
        </div>
      </Content>
    </Layout>
  );
}

CheckQuestions.propTypes = {
};

export default connect()(CheckQuestions);
