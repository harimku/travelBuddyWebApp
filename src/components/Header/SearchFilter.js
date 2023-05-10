import React, { useState } from 'react';
import '../../App.css';
import { Button, Col, Menu, Radio, Row, Space } from 'antd';
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  DollarCircleOutlined,
  EnvironmentOutlined,
  CoffeeOutlined,
  FireOutlined,
  HomeOutlined
} from '@ant-design/icons';


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
  {
    label: 'Hotels',
    key: 'hotels',
    icon: <HomeOutlined />,
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
      <Row style={{ margin: "1rem", marginLeft: "5%" }}>
        <Button>
          <Radio.Group name="radioGroup" defaultValue={0}>
            <Space direction="horizontal">
              <Radio value={0}>all</Radio>
              <Radio value={1}>free <DollarCircleOutlined /></Radio>
              <Radio value={2}>price <ArrowUpOutlined /></Radio>
              <Radio value={3}>price <ArrowDownOutlined /></Radio>
            </Space>
          </Radio.Group>
        </Button>
        <Button style={{ marginLeft: "1em" }}>
          <Radio.Group name="radioGroup" defaultValue={0}>
            <Space direction="horizontal">
              <Radio value={0}>all</Radio>
              <Radio value={1}>rating <ArrowUpOutlined /></Radio>
              <Radio value={2}>rating <ArrowDownOutlined /></Radio>
            </Space>
          </Radio.Group>
        </Button>
      </Row>
    </div>
  );
};