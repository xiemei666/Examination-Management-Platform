import React, { useEffect } from 'react';
import { connect } from "dva";
import { Layout } from 'antd';
import "./testDetail.scss"
const { Content } = Layout;

function testDetail(props) {
    // console.log(props)
    useEffect(() => {
        props.getTestDetail(props.match.params.id)
    }, [])
    let { detailTest } = props
    return (
        <Layout style={{ padding: '0 24px 24px' }}>
            <h2 style={{ padding: '20px 0px', marginTop: '10px' }}>试卷详情</h2>
            <div className="ant_main" style={{ display: 'flex' }}>
                <Content
                    style={{
                        background: '#fff',
                        padding: 24,
                        margin: '0 20px 20px 0',
                        borderRadius: 10,
                        width: '400px'
                    }}
                >
                    <div className='test_exam'>
                        <div>
                            {detailTest && detailTest.map((item, index) => <div key={index} className="style_questionitem">
                                <h4>{index + 1}: {item.title}</h4>
                                <div>
                                    <pre>
                                        <code>{item.questions_stem}</code>
                                    </pre>
                                </div>
                            </div>)}
                        </div>
                    </div>
                </Content>
                <Content
                    style={{
                        background: '#fff',
                        padding: 24,
                        margin: '0 0 20px 0',
                        borderRadius: 10,
                        flexShrink: 0
                    }}
                ></Content>
            </div>
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
        getTestDetail: (payload) => {
            dispatch({
                type: "addTest/getExamDetail",
                payload
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(testDetail)