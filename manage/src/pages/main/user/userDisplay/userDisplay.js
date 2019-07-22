import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import { Layout, Radio, Table } from 'antd';
import styles from "./userDisplay.scss"

function UserDisplay(props) {
  const userDispalyList = [
    {
      title: "用户数据",
      structure: [
        {
          title: '用户名',
          dataIndex: 'user_name',
          key: 'user_id',
        },
        {
          title: '密码',
          dataIndex: 'user_pwd',
          key: 'aaa',
        },
        {
          title: '身份',
          dataIndex: 'identity_text',
          key: 'bbb',
        }
      ]
    },
    {
      title: '身份数据',
      structure: [
        {
          title: '身份名称',
          dataIndex: 'identity_text',
          key: 'identity_id',
        }
      ]
    },
    {
      title: 'api接口权限',
      structure: [
        {
          title: 'api权限名称',
          dataIndex: 'api_authority_text',
          key: 'api_authority_id',
        },
        {
          title: 'api权限url',
          dataIndex: 'api_authority_url',
          key: 'ccc',
        },
        {
          title: 'api权限方法',
          dataIndex: 'api_authority_method',
          key: 'dddd',
        }
      ]
    },
    {
      title: '身份和api接口关系',
      structure: [
        {
          title: '身份名称',
          dataIndex: 'identity_text',
          key: 'identity_api_authority_relation_id',
        },
        {
          title: 'api权限名称',
          dataIndex: 'api_authority_text',
          key: 'eee',
        },
        {
          title: 'api权限url',
          dataIndex: 'api_authority_url',
          key: 'fff',
        },
        {
          title: 'api权限方法',
          dataIndex: 'api_authority_method',
          key: 'ggg',
        }
      ]
    },
    {
      title: '视图接口权限',
      structure: [
        {
          title: '视图权限名称',
          dataIndex: 'view_authority_text',
          key: 'view_authority_id',
        },
        {
          title: '视图id',
          dataIndex: 'view_id',
          key: 'iii',
        }
      ]
    },
    {
      title: '身份和视图权限关系',
      structure: [
        {
          title: '身份',
          dataIndex: 'identity_text',
          key: 'identity_view_authority_relation_id'
        },
        {
          title: '视图名称',
          dataIndex: 'view_authority_text',
          key: 'ooo'
        },
        {
          title: '视图id',
          dataIndex: 'view_id',
          key: 'ppp'
        }
      ]
    }
  ]
  useEffect(() => {
    props.getUserData()
  }, [])
  const [userListInd, setUserListInd] = useState(0)
  let userListTrCon = userDispalyList[userListInd].structure
  function handTab(e) {
    setUserListInd(userDispalyList.findIndex(item => item.title === e.target.value))


  }
  useEffect(() => {
    console.log(userListInd)
    switch (userListInd) {
      case 0:
        props.getUserData()
        break;
      case 1:
        props.getIdentityData()
        break;
      case 2:
        props.getApiAuthority()
        break;
      case 3:
        props.getIdentityApiAuthorityRelation()
        break;
      case 4:
        props.getViewAuthority()
        break;
      case 5:
        props.getIdentityViewAuthorityRelation()
        break;
      default:
        break;
    }
  }, [userListInd])
  let { UserData } = props

  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      <h2 style={{ padding: '20px 0px', marginTop: '10px' }}>用户展示</h2>
      <div>
        <Radio.Group defaultValue={userDispalyList[0].title} className={styles['userDisplay-list']} >
          {userDispalyList.map((item, index) => <Radio.Button value={item.title} key={index} onClick={handTab}>{item.title}</Radio.Button>)}


        </Radio.Group>
        <h1 className={styles['user-title']}>{userDispalyList[userListInd].title}</h1>
        <Table columns={userListTrCon} dataSource={UserData && UserData} rowKey />
      </div>
    </Layout>

  );
}

UserDisplay.propTypes = {
};
const mapStateToProps = state => {

  return {
    ...state.userDisplay
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getUserData: () => {
      dispatch({ type: "userDisplay/getUserData" })
    },
    getIdentityData: () => {
      dispatch({ type: "userDisplay/getIdentityData" })
    },
    getApiAuthority: () => {
      dispatch({ type: "userDisplay/getApiAuthority" })
    },
    getIdentityApiAuthorityRelation: () => {
      dispatch({ type: "userDisplay/getIdentityApiAuthorityRelation" })
    },
    getViewAuthority: () => {
      dispatch({ type: "userDisplay/getViewAuthority" })
    },
    getIdentityViewAuthorityRelation: () => {
      dispatch({ type: "userDisplay/getIdentityViewAuthorityRelation" })
    }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserDisplay);
