import React, {Component} from 'react';
import {Card, Col, Row} from 'antd';
import Item from '../../../node_modules/antd/lib/list/Item';

const CardComponentForAndroid = (props) => {
  const arr = props.state.resources;
  const card = arr.map((Item, index) => (
    <Col
      key={index}
      span={8}
      style={{
      paddingLeft: '8px',
      paddingRight: '8px'
    }}>
      <Card title="Card title" bordered={false}>Card content</Card>
    </Col>
  ));
  return (card)
}

const CardComponentForIphone = (props) => {
  const arr = props.resources;
  console.log('Resources', arr);
  let card = null;
  if (arr.length === 0) {
    card = () => (
      <Col
        key={1}
        span={8}
        style={{
        paddingLeft: '8px',
        paddingRight: '8px'
      }}>
        <Card title="Card title" bordered={false}>Card content</Card>
      </Col>
    )
  } else {
    card = arr.map((item, index) => (
      <Col
        key={index}
        span={8}
        style={{
        paddingLeft: '8px',
        paddingRight: '8px'
      }}>
        <Card title={item.deviceInfo} bordered={false}>{item.description}</Card>
      </Col>
    ));
  }
  return (card)
}

const Content = (props) => {
  if (props.android) {
    return (
      <div>
        <br/>
        <div
          style={{
          background: '#ECECEC',
          padding: '30px'
        }}>
          <Row gutter={16}>
            <h3>
              Ongoing slots
            </h3>
            <CardComponentForAndroid {...props}/>
          </Row>
        </div>
      </div>
    );
  } else if (props.iphone) {
    return (
      <div>
        <br/>
        <div
          style={{
          background: '#ECECEC',
          padding: '30px'
        }}>
          <Row gutter={16}>
            <h3>
              Ongoing slots
            </h3>
            <CardComponentForIphone {...props}/>
          </Row>
        </div>
      </div>
    );
  }

}

export default Content;