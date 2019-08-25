import React from "react";
import { render } from "react-dom";
import DragM from "dragm";
import { Modal, Button, Row, Col, Card, message } from "antd";
import "antd/dist/antd.css";
import Auth from "./auth/Auth";
import Group from "./auth/Group";
import User from "./auth/User";
import AuthMappingGroup from "./auth/AuthMappingGroup";
import UserMappingGroup from "./auth/UserMappingGroup";
import Mapping from "./auth/Mapping";

class AuthManager extends React.Component {
  state = {
    userList: [],
    authList: [],
    groupList: [],

    authMappingGroupList: [],
    userMappingGroupList: [],

    authMappingAuthSelectedItems: [],
    authMappingGroupSelectedItems: [],

    userMappingUserSelectedItems: [],
    userMappingGroupSelectedItems: [],

    mixMappingUserSelectedItems:[],
    mixMappingAuthSelectedItems:[],
    mixMappingGroupSelectedItems:[],
  }

  userAdd = (name) => {
    let indexOf = this.state.userList.indexOf(name)
    if (indexOf == -1) {
      this.state.userList.push(name)
      this.setState({})
    }
  }
  userDel = (name) => {
    let indexOf = this.state.userList.indexOf(name)
    if (indexOf > -1) {
      this.state.userList.splice(indexOf, 1)
    }
    var exsitInfos = [];
    exsitInfos = this.state.userMappingUserSelectedItems.filter(x => x == name)
    if (exsitInfos.length > 0) {
      this.state.userMappingUserSelectedItems.splice(this.state.userMappingUserSelectedItems.indexOf(exsitInfos[0]), 1)
    }
    exsitInfos = this.state.mixMappingUserSelectedItems.filter(x => x == name)
    if (exsitInfos.length > 0) {
      this.state.mixMappingUserSelectedItems.splice(this.state.mixMappingUserSelectedItems.indexOf(exsitInfos[0]), 1)
    }
    this.setState({})
  }

  authAdd = (name) => {
    let indexOf = this.state.authList.indexOf(name)
    if (indexOf == -1) {
      this.state.authList.push(name)
      this.setState({})
    }
  }
  authDel = (name) => {
    let indexOf = this.state.authList.indexOf(name)
    if (indexOf > -1) {
      this.state.authList.splice(indexOf, 1)
    }
    var exsitInfos = [];
    exsitInfos = this.state.authMappingAuthSelectedItems.filter(x => x == name)
    if (exsitInfos.length > 0) {
      this.state.authMappingAuthSelectedItems.splice(this.state.authMappingAuthSelectedItems.indexOf(exsitInfos[0]), 1)
    }
    exsitInfos = this.state.mixMappingAuthSelectedItems.filter(x => x == name)
    if (exsitInfos.length > 0) {
      this.state.mixMappingAuthSelectedItems.splice(this.state.mixMappingAuthSelectedItems.indexOf(exsitInfos[0]), 1)
    }
    this.setState({})
  }


  groupAdd = (name) => {
    let indexOf = this.state.groupList.indexOf(name)
    if (indexOf == -1) {
      this.state.groupList.push(name)
      this.setState({})
    }
  }
  groupDel = (name) => {
    let indexOf = this.state.groupList.indexOf(name)
    console.log(this.state.groupList)
    if (indexOf > -1) {
      this.state.groupList.splice(indexOf, 1)
    }
    console.log(this.state.groupList)
    var exsitInfos = [];
    exsitInfos = this.state.authMappingGroupSelectedItems.filter(x => x == name)
    if (exsitInfos.length > 0) {
      this.state.authMappingGroupSelectedItems.splice(this.state.authMappingGroupSelectedItems.indexOf(exsitInfos[0]), 1)
    }
    exsitInfos = this.state.userMappingGroupSelectedItems.filter(x => x == name)
    if (exsitInfos.length > 0) {
      this.state.userMappingGroupSelectedItems.splice(this.state.userMappingGroupSelectedItems.indexOf(exsitInfos[0]), 1)
    }
    exsitInfos = this.state.mixMappingGroupSelectedItems.filter(x => x == name)
    if (exsitInfos.length > 0) {
      this.state.mixMappingGroupSelectedItems.splice(this.state.mixMappingGroupSelectedItems.indexOf(exsitInfos[0]), 1)
    }
    this.setState({})
  }

  mappingUser = () => {
    if (!this.state.userMappingUserSelectedItems.length > 0) {
      message.error("关联用户为空"); return
    }
    if (!this.state.userMappingGroupSelectedItems.length > 0) {
      message.error("关联组为空"); return
    }
    let count = 0
    for (let i = 0; i < this.state.userMappingUserSelectedItems.length; i++) {
      for (let j = 0; j < this.state.userMappingGroupSelectedItems.length; j++) {
        var existInfos = this.state.userMappingGroupList.filter(x => x.user == this.state.userMappingUserSelectedItems[i] && x.group == this.state.userMappingGroupSelectedItems[j])
        if (existInfos.length < 1) {
          count++
          this.state.userMappingGroupList.push({ user: this.state.userMappingUserSelectedItems[i], group: this.state.userMappingGroupSelectedItems[j] })
        }
      }
    }
    console.log(this.state.userMappingGroupList)
    message.success("成功关联" + count + "条数据")
    this.updateUserMappingUserSelectedItems([])
    this.updateUserMappingGroupSelectedItems([])
    this.setState({})
  }
  mappingAuth = () => {
    if (!this.state.authMappingAuthSelectedItems.length > 0) {
      message.error("关联权限为空"); return
    }
    if (!this.state.authMappingGroupSelectedItems.length > 0) {
      message.error("关联组为空"); return
    }
    let count = 0
    for (let i = 0; i < this.state.authMappingAuthSelectedItems.length; i++) {
      for (let j = 0; j < this.state.authMappingGroupSelectedItems.length; j++) {
        var existInfos = this.state.authMappingGroupList.filter(x => x.auth == this.state.authMappingAuthSelectedItems[i] && x.group == this.state.authMappingGroupSelectedItems[j])
        if (existInfos.length < 1) {
          count++
          this.state.authMappingGroupList.push({ auth: this.state.authMappingAuthSelectedItems[i], group: this.state.authMappingGroupSelectedItems[j] })
        }
      }
    }
    console.log(this.state.authMappingGroupList)
    message.success("成功关联" + count + "条数据")
    this.updateAuthMappingAuthSelectedItems([])
    this.updateAuthMappingGroupSelectedItems([])
    this.setState({})
  }

  updateUserMappingUserSelectedItems = (items) => {
    this.setState({ userMappingUserSelectedItems: items })
  }
  updateUserMappingGroupSelectedItems = (items) => {
    this.setState({ userMappingGroupSelectedItems: items })
  }

  updateAuthMappingAuthSelectedItems = (items) => {
    this.setState({ authMappingAuthSelectedItems: items })
  }
  updateAuthMappingGroupSelectedItems = (items) => {
    this.setState({ authMappingGroupSelectedItems: items })
  }

  
  updateMixMappingUserSelectedItems = (items) => {
    this.setState({ mixMappingUserSelectedItems: items })
  }
  updateMixMappingAuthSelectedItems = (items) => {
    this.setState({ mixMappingAuthSelectedItems: items })
  }
  updateMixMappingGroupSelectedItems = (items) => {
    this.setState({ mixMappingGroupSelectedItems: items })
  }


  render() {
    return (
      <div>
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Row gutter={16}>
            <Col span={8}>
              <User userAdd={this.userAdd} userDel={this.userDel} userList={this.state.userList} />
            </Col>
            <Col span={8}>
              <Group groupAdd={this.groupAdd} groupDel={this.groupDel} groupList={this.state.groupList} />
            </Col>
            <Col span={8}>
              <Auth authAdd={this.authAdd} authDel={this.authDel} authList={this.state.authList}></Auth>
            </Col>
          </Row>
        </div>
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Row gutter={16}>
            <Col span={12}>
              <AuthMappingGroup
                authList={this.state.authList}
                groupList={this.state.groupList}

                authMappingGroupList={this.state.authMappingGroupList}

                authMappingAuthSelectedItems={this.state.authMappingAuthSelectedItems}
                updateAuthMappingAuthSelectedItems={this.updateAuthMappingAuthSelectedItems}
                authMappingGroupSelectedItems={this.state.authMappingGroupSelectedItems}
                updateAuthMappingGroupSelectedItems={this.updateAuthMappingGroupSelectedItems}

                mappingAuth={this.mappingAuth}
              />
            </Col>
            <Col span={12}>
              <UserMappingGroup
                userList={this.state.userList}
                groupList={this.state.groupList}

                userMappingGroupList={this.state.userMappingGroupList}

                userMappingUserSelectedItems={this.state.userMappingUserSelectedItems}
                updateUserMappingUserSelectedItems={this.updateUserMappingUserSelectedItems}
                userMappingGroupSelectedItems={this.state.userMappingGroupSelectedItems}
                updateUserMappingGroupSelectedItems={this.updateUserMappingGroupSelectedItems}

                mappingUser={this.mappingUser}
              />
            </Col>
          </Row>
          </div>
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          
          <Row gutter={16}>
            <Col span={24}>
              <Mapping
                authList={this.state.authList}
                userList={this.state.userList}
                groupList={this.state.groupList}

                userMappingGroupList={this.state.userMappingGroupList}
                authMappingGroupList={this.state.authMappingGroupList}

                mixMappingUserSelectedItems={this.state.mixMappingUserSelectedItems}
                updateMixMappingUserSelectedItems={this.updateMixMappingUserSelectedItems}
                mixMappingAuthSelectedItems={this.state.mixMappingAuthSelectedItems}
                updateMixMappingAuthSelectedItems={this.updateMixMappingAuthSelectedItems}
                mixMappingGroupSelectedItems={this.state.mixMappingGroupSelectedItems}
                updateMixMappingGroupSelectedItems={this.updateMixMappingGroupSelectedItems}

                mappingAuthD={this.mappingAuthD}
                mappingUserD={this.mappingUserD}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

render(<AuthManager />, document.getElementById("root"));