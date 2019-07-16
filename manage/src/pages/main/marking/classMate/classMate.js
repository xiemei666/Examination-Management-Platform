import React, { useState, useEffect } from 'react'
import { connect } from "dva"
import {Layout} from "antd";
const {Content} = Layout;
function classMate() {
    return (
        <Layout style={{ padding: '0 24px 24px' }}>

            <Content
                style={{
                    background: '#fff',
                    padding: 24,
                    marginBottom: 24,
                    borderRadius: 10,
                    flex: 1
                }}
            >
            </Content>
        </Layout>
    )
}
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
export default connect(mapStateToProps, mapDispatchToProps)(classMate)