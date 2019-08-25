import React from "react";
import { Card, Tag, Input, Tooltip, Icon } from "antd";


class Auth extends React.Component {
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
    const { authList, authDel, authAdd } = this.props
    return (<Card title={<span>Auth Pool</span>} bordered={false} >
      {authList.map((auth) => {
        return <Tag closable={true} visible={true} onClose={() => authDel(auth)} style={{padding:'5px',margin:'5px'}}>
          {auth}
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
          onBlur={() => { authAdd(inputValue); this.setState({ inputValue: '', inputVisible: false }) }}
          onPressEnter={() => { authAdd(inputValue); this.setState({ inputValue: '', inputVisible: false }) }}
        />
      )}
      {!inputVisible && (
        <Tag onClick={this.inputShow} style={{ background: '#fff', borderStyle: 'dashed' }}>
          <Icon type="plus" /> Add Auth
          </Tag>
      )}
    </Card>)
  }
}
export default Auth