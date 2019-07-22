import React, { useEffect } from 'react';
import { connect } from 'dva';
import { Layout, Tag} from 'antd';
import styles from "./questionsDetail.scss"
const { Content } = Layout;

function questionsDetail(props) {
   
    useEffect(() => {
        props.searchTests({ questions_id: props.match.params.id })
    }, [])
    let { qustions } = props
    let { user_name, questions_type_text, subject_text, exam_name, title, questions_stem, questions_answer } = qustions && { ...qustions[0] } 
    return (
        <Layout style={{ padding: '0 24px 24px' }}>
            <h2 style={{ padding: '20px 0px', marginTop: '10px' }}>试题详情</h2>
            <div className={styles['ant-layout-main']}>
                <Content
                    style={{
                        background: '#fff',
                        padding: 24,
                        marginBottom: 24,
                        borderRadius: 10,
                        flex: 1
                    }}
                >
                    <div>出题人：{user_name}</div>
                    <h3>题目信息</h3>
                    <div>
                        <Tag color="blue">{questions_type_text}</Tag>
                        <Tag color="geekblue">{subject_text}</Tag>
                        <Tag color="orange">{exam_name}</Tag>
                    </div>
                    <h4>{title}</h4>
                    <div>
                        {questions_stem}
                    </div>
                </Content>
                <div className={styles['ant-divider-vertical']}></div>
                <Content
                    style={{
                        background: '#fff',
                        padding: 24,
                        marginBottom: 24,
                        borderRadius: 10,
                        width: '500px',
                        flex: 'initial'
                    }}
                >
                    <h3>答案信息</h3>
                    <div>
                        {questions_answer}
                    </div>
                </Content>
            </div>
        </Layout>
    );
}

questionsDetail.propTypes = {
};
const mapStateToProps = state => {
    return {
        ...state.questions
    }
}
const mapDispatchToProps = dispatch => {
    return {
        searchTests: payload => {
            dispatch({
                type: 'questions/searchTest',
                payload
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(questionsDetail);
