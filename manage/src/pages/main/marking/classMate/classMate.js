import React, { useEffect } from 'react'
import { connect } from "dva"
import { Layout, Table, Form, Button, Select } from "antd";
const { Content } = Layout;
const { Option } = Select;

function classMate(props) {
    useEffect(() => {
        props.getGrade()
        props.getExamStudent({ grade_id: props.match.params.id })
    }, [])
    // console.log(props)
    let handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                // console.log('Received values of form: ', values);
            }
        });
    }
    const { getFieldDecorator } = props.form;
    const { allClass, examStudent } = props
    const columns = [
        {
            title: '班级',
            key:"grade_id",
            render: () => <>{allClass && allClass.filter(item => item.grade_id === props.match.params.id)[0].grade_name}</>
        },
        {
            title: '姓名',
            key:"student_name",
            dataIndex: 'student_name',
        },
        {
            title: '阅卷状态',
            key:"status",
            render: text => <>{text.status ? '已阅' : '未阅'}</>
        },
        {
            title: '开始时间',
            key:"start_time",
            dataIndex: 'start_time',
        },
        {
            title: '结束时间',
            key:"end_time",
            dataIndex: 'end_time',
        },
        {
            title: '成才率',
            key:"score",
            render: text => <>{text.score ? text.score : "-"}</>
        },
        {
            title: '操作',
            key:"student_id",
            render: text => <a onClick={() => { props.history.push(`/main/marking/detail/${text.exam_student_id}`) }}>批卷</a>
        }
    ];
    return (
        <Layout style={{ padding: '0 24px 24px' }}>
            <h2 style={{ padding: '20px 0px', marginTop: '10px' }}></h2>
            <Content
                style={{
                    background: '#fff',
                    padding: 24,
                    marginBottom: 24,
                    borderRadius: 10,
                    flex: 1
                }}
            >
                <Form layout="inline" onSubmit={handleSubmit}>
                    <div>
                        <Form.Item label="状态">
                            {getFieldDecorator('exam_id', {
                            })(
                                <Select
                                    style={{ width: '120px' }}
                                >
                                    <Option value='已阅'>已阅</Option>
                                    <Option value='未阅'>未阅</Option>
                                </Select>,
                            )}
                        </Form.Item>
                        <Form.Item label="班级">
                            {getFieldDecorator('subject_id', {
                            })(
                                <Select
                                    style={{ width: '120px' }}
                                >
                                    {allClass && allClass.map((item, index) => <Option key={index} value={item.grade_name}>{item.grade_name}</Option>)}
                                </Select>,
                            )}
                        </Form.Item>

                        <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                            <Button type="primary" icon="search" htmlType="submit">查询</Button>
                        </Form.Item>
                    </div>
                </Form>
            </Content>
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
                    dataSource={examStudent}
                    rowKey="answer_json_path"
                    pagination={{
                        showQuickJumper: true,
                        showSizeChanger: true,
                    }}
                />
            </Content>
        </Layout>
    )
}
const mapStateToProps = state => {
    return {
        ...state.management,
        ...state.mark,
        global: state.loading.global
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getGrade: () => {
            dispatch({
                type: "management/classManagement"
            })
        },
        getExamStudent: (payload) => {
            dispatch({
                type: "mark/getExamStudent",
                payload
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(classMate))