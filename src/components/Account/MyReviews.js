import React, { useState } from "react";
import '../../App.css';
import { Card, Row, Menu } from "antd";
import { EditFilled } from "@ant-design/icons";
import ReviewItem from "./ReviewItem";
import {
  location_reviews,
  restaurant_reviews,
  activity_reviews,
  hotel_reviews
} from "../../Types/Reviews";

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
  const [content, setContent] = useState(location_reviews);
  const [chosenTab, setChosenTab] = useState('1');

  const handleTabChange = (chosen) => {
    console.log(chosen.key);
    switch (chosen.key) {
      case '1':
        setChosenTab(chosen.key);
        setContent(location_reviews);
        break;
      case '2':
        setChosenTab(chosen.key);
        setContent(restaurant_reviews);
        break;
      case '3':
        setChosenTab(chosen.key);
        setContent(activity_reviews);
        break;
      case '4':
        setChosenTab(chosen.key);
        setContent(hotel_reviews);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Card bordered={false}>
        <Row align="middle">
          <h2><EditFilled />    My Reviews</h2>
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
                <ReviewItem key={data.id} data={data} />
              ))
            ) : (
              <div>Saved list is empty</div>
            )
          ) : (
            <div>Error</div>
          )}
        </Card>
      </Card>
    </div>
  );
};
