import React, { useState, useEffect } from 'react'
import { connect } from "dva"
import { Layout, Empty, Slider ,Button,Modal} from "antd"
import "./markDetail.scss"
const { Content } = Layout
const { confirm } = Modal;
function markDetail(props) {
    // console.log(props)
    useEffect(()=>{
        props.getStudentExam(props.match.params.id)
    },[])
    let [num, setNum] = useState(0)
    let onChange = value => {
        setNum(value)
    };
    function showConfirm() {
        confirm({
          title: '确定提交阅卷结果？',
          content: `分数值是${num}`,
          cancelText:'取消',
          okText:'确认',
          onOk() {
            // console.log('OK');
          },
          onCancel() {
            // console.log('Cancel');
          },
        });
      }
    return (
        <Layout style={{ padding: '0 24px 24px' }}>
            <h2 style={{ padding: '20px 0px', marginTop: '10px' }}>阅卷</h2>
            <div style={{ width: '100%', display: 'flex' }}>
                <Content
                    style={{
                        background: '#fff',
                        padding: 24,
                        marginBottom: 24,
                        borderRadius: 10,
                        width: '70%'
                    }}
                >
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="暂无数据" />
                </Content>
                <Content
                    style={{
                        background: '#fff',
                        padding: 24,
                        marginBottom: 24,
                        marginLeft: 20,
                        borderRadius: 10,
                        width: 300
                    }}
                >
                    <h2>得分:<span style={{ fontSize: '28px', color: 'rgb(1, 57, 253)' }}>{num}</span></h2>
                    <Slider
                        min={0}
                        max={100}
                        onChange={onChange}
                        value={typeof num === 'number' ? num : 0}
                        style={{padding:'20px 0'}}
                    />
                    <Button type="button" className="ant-btn ant-btn-primary" onClick={showConfirm}><span>确 定</span></Button>
                </Content>
            </div>
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
        getStudentExam:(payload)=>{
            dispatch({
                type:"mark/getStudentExam",
                payload
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(markDetail)