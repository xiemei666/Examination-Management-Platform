import React from 'react';
import { connect } from 'dva';
import styles from './addQuestions.scss'
import { Select, Button } from 'antd';
const { Option } = Select;
function AddQuestions() {
  return (
    <div className={styles.wrapper}>
      <h2>添加试题</h2>
      <div className={styles.content}>
        <div className={styles.con}>
          <h3>题目信息</h3>

          <div className={styles.stem}>
            <label>题干</label>
            <input placeholder='请输入题目标题，不要超过20个字' />
          </div>

          <div className={styles.topic_theme}>
            <label>题目主题</label>
            <div className={styles.topic_theme_content}>
              <div className={styles.option}>
                <ul className={styles.ul_left}>
                  <li title='上一步 (ctrl+z)'>
                    <i></i>
                  </li>
                  <li title='下一步 (ctrl+y)'>
                    <i></i>
                  </li>
                  <li data-type="h1" title="一级标题">H1</li>
                  <li data-type="h2" title="二级标题">H2</li>
                  <li data-type="h3" title="三级标题">H3</li>
                  <li data-type="h4" title="四级标题">H4</li>
                </ul>
                <ul className={styles.ul_right}></ul>
              </div>
              <div className={styles.option_content}>
                <ul className={styles.option_left}>
                  <li>1</li>
                </ul>
                <div className={styles.option_right}>
                  <textarea placeholder='请输入内容...'></textarea>
                </div>
              </div>
            </div>
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
                <Option value="周考1">周考1</Option>
                <Option value="周考2">周考2</Option>
                <Option value="周考3">周考3</Option>
                <Option value="月考">月考</Option>
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
                <Option value="javaScript上">javaScript上</Option>
                <Option value="javaScript下">javaScript下</Option>
                <Option value="模块化开发">模块化开发</Option>
                <Option value="移动端开发">移动端开发</Option>
                <Option value="node基础">node基础</Option>
                <Option value="组件化开发(vue)">组件化开发(vue)</Option>
                <Option value="渐进式开发(react)">渐进式开发(react)</Option>
                <Option value="项目实战">项目实战</Option>
                <Option value="javaScript高级">javaScript高级</Option>
                <Option value="node高级">node高级</Option>
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
                <Option value="简答题">简答题</Option>
                <Option value="代码阅读题">代码阅读题</Option>
                <Option value="代码补全">代码补全</Option>
                <Option value="修改bug">修改bug</Option>
                <Option value="手写代码">手写代码</Option>
              </Select>
            </div>
          </div>

          <div className={styles.answer_information}>
            <h3>答案信息</h3>
            <div className={styles.answer_information_content}>
              <div className={styles.answer_option}>
                <ul className={styles.ul_left}>
                  <li title='上一步 (ctrl+z)'>
                    <i></i>
                  </li>
                  <li title='下一步 (ctrl+c)'>
                    <i></i>
                  </li>
                  <li data-type="h1" title="一级标题">H1</li>
                  <li data-type="h2" title="二级标题">H2</li>
                  <li data-type="h3" title="三级标题">H3</li>
                  <li data-type="h4" title="四级标题">H4</li>
                </ul>
                <ul className={styles.ul_right}></ul>
              </div>
              <div className={styles.answer_option_content}>
                <ul className={styles.answer_option_left}>
                  <li>1</li>
                </ul>
                <div className={styles.answer_option_right}>
                  <textarea placeholder='请输入内容...'></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <Button type="提交">提交</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

AddQuestions.propTypes = {
};

export default connect()(AddQuestions);
