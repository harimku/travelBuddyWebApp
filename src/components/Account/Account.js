import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import { Col, Row, Menu, message } from "antd";
import {
  HeartFilled,
  EditFilled,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import SavedList from "./SavedList";
import MyReviews from "./MyReviews";
import Setting from "./Setting";

// Menu tab items
const items = [
  getItem("Saved List", "1", <HeartFilled />),
  getItem("My Reviews", "2", <EditFilled />),
  getItem("Setting", "3", <SettingOutlined />),
  getItem(),
  getItem("Logout", "5", <LogoutOutlined />),
];

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export default function Account() {
  // React hooks for managing URL and search parameters
  const navigate = useNavigate();

  // Store the key of chosen menu tab
  const [chosenTab, setChosenTab] = useState("1");

  // Store the content to be displayed based on the chosen key
  const [content, setContent] = useState(<SavedList />);

  // Handler function updates chosenTab when user clicks a tab
  const handleClick = (op) => {
    console.log(op);
    setChosenTab(op.key);
  };

  const handleLogout = () => {
    window.localStorage.clear(); // clear window local storage
    message.success("Log out success!!");
    navigate("/"); // navigate to homepage
  };

  // run everytime chosenTab value updates
  useEffect(() => {
    if (chosenTab === "5") {
      handleLogout();
    } else {
      switch (chosenTab) {
        case "1":
          setContent(<SavedList />);
          break;
        case "2":
          setContent(<MyReviews />);
          break;
        case "3":
          setContent(<Setting />);
          break;
        default:
          break;
      }
    }
  }, [chosenTab]);

  return (
    <div>
      <br />
      <br />
      <Row>
        <Col
          xs={{ span: 8 }}
          sm={{ span: 6 }}
          md={{ span: 8 }}
          lg={{ span: 8 }}
        >
          <Menu
            onClick={handleClick}
            mode="vertical"
            defaultSelectedKeys={[chosenTab]}
            items={items}
          />
        </Col>
        <Col
          xs={{ span: 16 }}
          sm={{ span: 18 }}
          md={{ span: 16 }}
          lg={{ span: 16 }}
        >
          {content}
        </Col>
      </Row>
    </div>
  );
}
