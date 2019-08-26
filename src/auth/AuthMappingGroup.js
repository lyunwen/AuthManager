import React from "react";
import { Card, Tag, Input, Tooltip, Icon, Select, Button, Row, Col } from "antd";


class AuthGroupMapping extends React.Component {
  render() {
    const {
      authList,
      groupList,

      authMappingAuthSelectedItems,
      updateAuthMappingAuthSelectedItems,
      authMappingGroupSelectedItems,
      updateAuthMappingGroupSelectedItems,
      mappingAuth
    } = this.props
    return (<Card title={<span>Auth Mapping Group</span>} bordered={false}>
      <Row>
        <Col>
          <Select
            mode="multiple"
            placeholder="Find Group"
            value={authMappingGroupSelectedItems}
            onChange={updateAuthMappingGroupSelectedItems}
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
            placeholder="Find Auths"
            value={authMappingAuthSelectedItems}
            onChange={updateAuthMappingAuthSelectedItems}
            style={{ width: '100%', margin: '5px 0' }}
          >
            {authList.map(item => (
              <Select.Option key={item} value={item}>
                {item}
              </Select.Option>
            ))}
          </Select>
        </Col>
        <Col>
          <Button onClick={mappingAuth}>Mapping</Button>
        </Col>
      </Row>
    </Card>)
  }
}
export default AuthGroupMapping