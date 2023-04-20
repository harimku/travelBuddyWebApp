import React, { useState } from 'react';
import '../../App.css';
import { Button, Col, Menu, Row } from 'antd';
import { EnvironmentOutlined, CoffeeOutlined, FireOutlined } from '@ant-design/icons';


const tabs = [
  {
    label: 'Visit',
    key: 'visit',
    icon: <EnvironmentOutlined />,
  },
  {
    label: 'Eat',
    key: 'eat',
    icon: <CoffeeOutlined />,
  },
  {
    label: 'Activities',
    key: 'activities',
    icon: <FireOutlined />,
  },
];

export default function SearchFilter({ updateTab }) {
  const [currentTab, setCurrentTab] = useState('visit');

  const onClick = (e) => {
    setCurrentTab(e.key);
    updateTab(e.key);
  };

  return (
    <div
      className="searchFilterTab"
      style={{
        margin: "1em"
      }}
    >
      <Row>
        <Col
          xs={{ span: 24 }}
          lg={{ span: 22, offset: 1 }}
        >
          <Menu onClick={onClick} selectedKeys={[currentTab]} mode="horizontal" items={tabs} />
        </Col>
      </Row>

      {/* TODO: implement search filters */}
      <Row style={{ margin: "1rem", marginLeft: "5%" }}>
        <Button>
          filter 1
        </Button>
        <Button style={{ marginLeft: "7px" }}>
          filter 2
        </Button>
        <Button style={{ marginLeft: "7px" }}>
          filter 3
        </Button>
      </Row>
    </div>
  );
};