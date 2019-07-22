import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import styles from './editQuestions.scss'
import { Select, Button, Form, Input } from 'antd';
import Editor from 'for-editor'
const { Option } = Select;
function AddQuestions(props) {
    const { addQuestions, getTests, getClass, classify, allQuestions, allSubject, getText, allText, num } = props
    const [mask, updataMask] = useState(false)
    const [addedMask, updataAddedMask] = useState(false)
    useEffect(() => {
        getClass()
        allQuestions()
        getText()
        // console.log(props)
        getTests({ questions_id: props.match.params.id })
    }, [])
    useEffect(() => {
        if (num === 1) {
            updataMask(false)
            updataAddedMask(true)
        } else if (num !== 1) {
            updataMask(false)
        }
    }, [num])
    //声明题干
    let [value, setValue] = useState('')
    //声明答案
    let [answerValue, setAnswerValue] = useState('')

    let handleChange = (value) => {
        setValue(value)
    }
    let handleChangeAnswer = (answerValue) => {
        setAnswerValue(answerValue)
    }

    let handleSubmit = e => {
        //validateFields  校验并获取一组输入域的值与 Error，若 fieldNames 参数为空，则校验全部组件
        props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log("values", values)
                addQuestions({
                    title: values.stem,
                    exam_id: values.exam_id,
                    subject_id: values.subject_id,
                    questions_type_id: values.questions_type_id,
                    questions_stem: value,
                    questions_answer: answerValue,
                    user_id: 'w6l6n-cbvl6s'
                });
            }
        });
    };
    const { getFieldDecorator } = props.form;

    let { question } = props
    let { questions_type_id, exam_id, subject_id, title, questions_stem, questions_answer } = question && { ...question[0] }
    // console.log(user_name)
    return (
        <div className={styles.wrapper}>
            <h2>编辑试题</h2>
            <div className={styles.content}>
                <Form onSubmit={handleSubmit}>
                    <div className={styles.con}>
                        <h3>题目信息</h3>

                        <div className={styles.stem}>
                            <label>题干</label>
                            <Form.Item>
                                {getFieldDecorator('stem', {
                                    //validateTrigger	校验子节点值的时机
                                    validateTrigger: 'onBlur',
                                    //rules	校验规则
                                    initialValue: title,
                                    rules: [
                                        { required: true },
                                        { min: 1, max: 20, message: '输入字数大于20!' }
                                    ],

                                })(<Input placeholder='请输入题目标题，不要超过20个字' />)}
                            </Form.Item>
                        </div>

                        <div className={styles.topic_theme}>
                            <label>题目主题</label>
                            <Editor placeholder="请输入内容..." value={questions_stem} onChange={(value) => handleChange(value)} />
                        </div>

                        <div className={styles.class}>
                            <div className={styles.examination_type}>
                                <label>请选择考试类型</label>
                                <Form.Item>
                                    {getFieldDecorator('exam_id', {
                                        initialValue: exam_id
                                    })(<Select
                                        style={{ width: 200 }}
                                    >
                                        {
                                            classify.map(item => (
                                                <Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Option>
                                            ))
                                        }

                                    </Select>)}
                                </Form.Item>

                            </div>
                            <div className={styles.course_types}>
                                <label>请选择课程类型</label>
                                <Form.Item>
                                    {getFieldDecorator('subject_id', {
                                        initialValue: subject_id
                                    })(<Select
                                        style={{ width: 200 }}
                                    >
                                        {
                                            allSubject.map(item => (
                                                <Option key={item.subject_id} value={item.subject_id}>{item.subject_text}</Option>
                                            ))
                                        }
                                    </Select>)}
                                </Form.Item>

                            </div>
                            <div className={styles.topic_type}>
                                <label>请选择题目类型</label>
                                <Form.Item>
                                    {getFieldDecorator('questions_type_id', {
                                        initialValue: questions_type_id
                                    })(
                                        <Select
                                            style={{ width: 200 }}
                                        >
                                            {
                                                allText.map(item => (
                                                    <Option key={item.questions_type_id} value={item.questions_type_id}>{item.questions_type_text}</Option>
                                                ))
                                            }
                                        </Select>)}
                                </Form.Item>
                            </div>
                        </div>

                        <div className={styles.answer_information}>
                            <h3>答案信息</h3>
                            <Editor placeholder="请输入内容..." answerValue={answerValue} value={questions_answer} onChange={(answerValue) => handleChangeAnswer(answerValue)} />
                        </div>
                        <div className={styles.footer}>
                            <Button onClick={() => updataMask(true)}>
                                提交
                            </Button>
                        </div>
                    </div>

                    {
                        mask && <div className={styles.mask}>
                            <div className={styles.mask_content}>
                                <div className={styles.content_top}>
                                    <span>?</span>
                                    <h3>你确定要添加这道试题吗？</h3>
                                    <p>真的要添加吗</p>
                                </div>
                                <Form.Item className={styles.footer_button}>
                                    <Button onClick={() => updataMask(false)}>取消</Button>
                                    <Button type="primary" htmlType="submit" style={{ width: 110 }}>确定</Button>
                                </Form.Item>
                            </div>
                        </div>
                    }
                    {
                        addedMask && <div className={styles.added_mask}>
                            <div className={styles.added_mask_content}>
                                <i>√</i>
                                <h3>试题添加成功</h3>
                                <Button type="primary" style={{ width: 110 }} onClick={() => updataAddedMask(false)}>知道了</Button>
                            </div>
                        </div>
                    }
                </Form>
            </div>
        </div>
    );
}

AddQuestions.propTypes = {
};
const mapStateToProps = state => {
    return {
        ...state.changeTests,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        //添加试题
        addQuestions: payload => {
            dispatch({
                type: "changeTests/addQuestions",
                payload
            })
        },
        // 获取考试类型
        getClass: () => {
            dispatch({
                type: "changeTests/getClass"
            })
        },
        // 获取课程类型
        allQuestions: () => {
            dispatch({
                type: "changeTests/getAllSubject"
            })
        },
        // 获取题目类型
        getText: () => {
            dispatch({
                type: "changeTests/getAllQuestions"
            })
        },
        getTests: payload => {
            dispatch({
                type: 'changeTests/getTests',
                payload
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(AddQuestions));