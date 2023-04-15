import React from 'react';
import '../App.css';
import { Button, Card, Input, Space, Row, Col } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
const { Search } = Input;


export default function Header() {

  return (
    <div className="header">
      <Card bordered={false}>
        <Row>
          <Col
            xs={{ span: 24, offset: 1 }}
            md={{ span: 4, offset: 0 }}
            lg={{ span: 4, offset: 0 }}
          >
            <h2>TravelBuddy</h2>
          </Col>
          <Col
            xs={{ span: 24, offset: 1 }}
            md={{ span: 12, offset: 0 }}
            lg={{ span: 16, offset: 0 }}
          >
            <Search
              className="search-bar"
              placeholder="Search..."
              enterButton
              size="large"
              allowClear
              // onSearch={handleSearch}
            />
          </Col>
          <Col
            xs={{ span: 24, offset: 0 }}
            md={{ span: 6, offset: 0 }}
            lg={{ span: 4, offset: 0 }}
          >
            <Button type="primary" className="simple-button">
              Login
            </Button>
            <Button style={{marginLeft: "1em"}} type="primary" className="simple-button">
              Review
            </Button>
          </Col>
        </Row>
      </Card>
    </div >
  );
}