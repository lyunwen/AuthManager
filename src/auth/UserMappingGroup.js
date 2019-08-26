import React from "react";
import { Card, Tag, Input, Tooltip, Icon, Select, Button,Row,Col } from "antd";


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
    return (<Card title={<span>Mapping</span>} bordered={false}>
      <Row>
        <Col>
          <Select
            mode="multiple"
            placeholder="Find Group"
            value={userMappingGroupSelectedItems}
            onChange={updateUserMappingGroupSelectedItems}
            style={{ width: '100%', margin: '5px 0' }}
          >
            {groupList.map(item => (
              <Select.Option key={item} value={item}>
                {item}
              </Select.Option>
            ))}
          </Select>
        </Col>
        <Col>
          <Select
            mode="multiple"
            placeholder="Find User"
            value={userMappingUserSelectedItems}
            onChange={updateUserMappingUserSelectedItems}
            style={{ width: '100%', margin: '5px 0' }}
          >
            {userList.map(item => (
              <Select.Option key={item} value={item}>
                {item}
              </Select.Option>
            ))}
          </Select>
        </Col>
        <Col>
          <Button onClick={mappingUser}>Mapping</Button>
        </Col>
      </Row>
    </Card>)
  }
}
export default UserMappingGroup