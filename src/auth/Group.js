import React from "react";
import { Card, Tag, Input, Tooltip, Icon } from "antd";


class Group extends React.Component {
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
    const { groupList, groupDel, groupAdd } = this.props
    return (<Card title={<span>Group Pool</span>} bordered={false} >
      {groupList.map((group) => {
        return <Tag closable={true} visible={true} onClose={() => groupDel(group)} style={{ padding: '5px', margin: '5px' }}>
          {group}
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
          onBlur={() => { groupAdd(inputValue); this.setState({ inputValue: '', inputVisible: false }) }}
          onPressEnter={() => { groupAdd(inputValue); this.setState({ inputValue: '', inputVisible: false }) }}
        />
      )}
      {!inputVisible && (
        <Tag onClick={this.inputShow} style={{ background: '#fff', borderStyle: 'dashed' }}>
          <Icon type="plus" /> Add Group
          </Tag>
      )}
    </Card>)
  }
}
export default Group