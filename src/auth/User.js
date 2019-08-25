import React from "react";
import { Card, Tag, Input, Tooltip, Icon } from "antd";


class User extends React.Component {
  state = {
    inputVisible: false,
    inputValue: '',
  };
  thisInput = null;
  inputShow = () => {
    this.setState({ inputVisible: true }, () => this.thisInput.focus());
  };
  render() {
    const { inputVisible, inputValue } = this.state
    const { userList, userDel, userAdd } = this.props
    return (<Card title={<span>User Pool</span>} bordered={false} >
      {userList.map((user) => {
        return <Tag closable={true} visible={true} onClose={() => userDel(user)} style={{padding:'5px',margin:'5px'}}>
          {user}
        </Tag>;
      })}
      {inputVisible && (
        <Input
          ref={(e) => this.thisInput = e}
          type="text"
          size="small"
          style={{ width: 78 }}
          value={inputValue}
          onChange={(e) => { this.setState({ inputValue: e.target.value }) }}
          onBlur={() => { userAdd(inputValue); this.setState({ inputValue: '', inputVisible: false }) }}
          onPressEnter={() => { userAdd(inputValue); this.setState({ inputValue: '', inputVisible: false }) }}
        />
      )}
      {!inputVisible && (
        <Tag onClick={this.inputShow} style={{ background: '#fff', borderStyle: 'dashed' }}>
          <Icon type="plus" /> Add User
          </Tag>
      )}
    </Card>)
  }
}
export default User