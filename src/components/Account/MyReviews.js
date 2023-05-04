import React, { useState } from "react";
import '../../App.css';
import { Card, Row, Menu } from "antd";
import { EditFilled } from "@ant-design/icons";

const items = [
  {
    label: 'Visit',
    key: '1',
  },
  {
    label: 'Eat',
    key: '2',
  },
  {
    label: 'Activities',
    key: '3',
  },
  {
    label: 'Hotels',
    key: '4',
  },
]

export default function MyReviews() {
  const [content, setContent] = useState();
  const [chosenTab, setChosenTab] = useState('1');

  const handleTabChange = (chosen) => {
    console.log(chosen);
    switch (chosen) {
      case '1':
        setChosenTab("visit");
        break;
      case '2':
        setChosenTab("eat");
        break;
      case '3':
        setChosenTab("activities");
        break;
      case '4':
        setChosenTab("hotels");
        break;
      default:
        break;
    }
    setContent(chosen.label);
  };

  return (
    <Card bordered={false}>
      <Row align="middle">
        <h2><EditFilled />    My Reviews</h2>
      </Row>
      <Menu
        onClick={handleTabChange}
        selectedKey={[chosenTab]}
        mode="horizontal"
        items={items} />
      <Card>
        {content}
      </Card>
    </Card>
  );
};
