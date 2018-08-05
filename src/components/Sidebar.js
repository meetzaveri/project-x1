import React from 'react';
import {NavLink} from "react-router-dom";
import {Layout, Menu} from 'antd';
import {routes} from '../routes/routes';
const {Sider} = Layout;
const SubMenu = Menu.SubMenu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
    defaultSelectedKeys: 'sub1'
  };

  onCollapse = (collapsed) => {
    this.setState({collapsed});
  }
  onChangeTab = (e) => {
    console.log('E', e)
    this.setState({
      defaultSelectedKeys: [e.key]
    })
  }

  render() {
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}>
        <div className="logo"/>
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1">
            {/* <Icon type="pie-chart"/> */}
            <NavLink to={routes.index} className="normal">
              Home
            </NavLink>
          </Menu.Item>

          <SubMenu key="sub1" title="Resources">
            <Menu.Item key="3">
              <NavLink
                to={routes.resources.mobile}
                className="normal"
                activeClassName="active">
                Mobile
              </NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

export default SiderDemo;