import React from "react";
import { Card, Tag, Input, Tooltip, Icon, Select, Button } from "antd";


class UserMappingGroup extends React.Component {
  render() {
    const {
      userList,
      groupList,

      userMappingUserSelectedItems,
      updateUserMappingUserSelectedItems,
      userMappingGroupSelectedItems,
      updateUserMappingGroupSelectedItems,
      mappingUser
    } = this.props
    return (<Card title={<span>User Mapping Group</span>} bordered={false}>
      <Select
        mode="multiple"
        placeholder="Find Group"
        value={userMappingGroupSelectedItems}
        onChange={updateUserMappingGroupSelectedItems}
        style={{ width: '30%', margin: '5px' }}
      >
        {groupList.map(item => (
          <Select.Option key={item} value={item}>
            {item}
          </Select.Option>
        ))}
      </Select>
      <Select
        mode="multiple"
        placeholder="Find User"
        value={userMappingUserSelectedItems}
        onChange={updateUserMappingUserSelectedItems}
        style={{ width: '30%', margin: '5px' }}
      >
        {userList.map(item => (
          <Select.Option key={item} value={item}>
            {item}
          </Select.Option>
        ))}
      </Select>
      <Button onClick={mappingUser}>Mapping</Button>
    </Card>)
  }
}
export default UserMappingGroup