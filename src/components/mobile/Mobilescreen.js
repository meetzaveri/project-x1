// prettier-ignore
import React, {Component} from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';
import {Layout, Menu, Breadcrumb, Icon, Tabs} from 'antd';
import Contentarea from './content';
import CreateForm from './createform'
const {Content, Footer, Sider} = Layout;
const TabPane = Tabs.TabPane;

const customTab_1 = <span>
  <Icon type="android"/>Android
</span>

const customTab_2 = <span>
  <Icon type="apple"/>iPhone
</span>

const MobileScreen = (props) => {
  return (
    <Layout style={{
      minHeight: '100vh'
    }}>
      <Sidebar/>
      <Layout>
        <Tabs defaultActiveKey="1">
          <TabPane tab={customTab_1} key="1">
            <Content>
              <CreateForm {...props}/>
              <Contentarea {...props} android/>
            </Content>
          </TabPane>
          <TabPane tab={customTab_2} key="2">
            <Content>
              <CreateForm {...props}/>
              <Content></Content>
              <Contentarea {...props} iphone/>
            </Content>
          </TabPane>

        </Tabs>
        <Footer style={{
          textAlign: 'center'
        }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default MobileScreen;