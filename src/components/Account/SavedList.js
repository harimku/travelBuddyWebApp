import React, { useState } from "react";
import '../../App.css';
import { Card, Row, Menu } from "antd";
import { HeartFilled } from "@ant-design/icons";

import SavedItem from "./SavedItem";
import { locations } from '../../Types/Locations';
import { restaurants } from '../../Types/Restaurants';
import { activities } from '../../Types/Activities';


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

export default function SavedList({ setItemData }) {

  const [content, setContent] = useState(locations.slice(1, 4));
  const [chosenTab, setChosenTab] = useState('1');

  const handleTabChange = (chosen) => {
    console.log(chosen.key);
    switch (chosen.key) {
      case '1':
        setChosenTab('1');
        setContent(locations.slice(1, 4));
        break;
      case '2':
        setChosenTab('2');
        setContent(restaurants.slice(1, 3));
        break;
      case '3':
        setChosenTab('3');
        setContent(activities.slice(1, 5));
        break;
      case '4':
        setChosenTab('4');
        setContent([]);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Card bordered={false}>
        <Row align="middle">
          <h2><HeartFilled />    Saved List</h2>
        </Row>
        <Menu
          onClick={handleTabChange}
          selectedKeys={[chosenTab]}
          mode="horizontal"
          items={items}
        />
        <Card>
          {content ? (
            content.length !== 0 ? (
              content.map((data) => (
                <SavedItem key={data.id} data={data} setItemData={setItemData} />
              ))
            ) : (
              <div>Saved list is empty</div>
            )
          ) : (
            <div>Error</div>
          )}
        </Card>
      </Card>
    </div >
  );
};
