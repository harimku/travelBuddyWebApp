import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Image, Typography, message, Row } from "antd";

const { Title } = Typography;

const ItemCard = ({ data, setItemData }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setItemData(data);
    navigate("/viewDetail");
  };

  const handleSave = () => {
    const tokenString = window.localStorage.getItem('username');
    if (tokenString && tokenString.length > 0) {
      message.success(`${data.title} is saved to your saved list!`);
    } else {
      message.error('You must be logged in to use this feature!');
    }
  }

  return (
    <Col xs={{ span: 24 }} lg={{ span: 22, offset: 1 }}>
      <Row
        align="middle"
        justify="center"
        style={{
          margin: "2rem",
          backgroundColor: "#ADD8E6",
          borderRadius: "7px",
          boxShadow: "rgba(0, 0, 100, 0.3) 0px 4px 12px",
          padding: "20px",
        }}
      >
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 8 }}
          lg={{ span: 8 }}
        >
          <Image width={200} height={150} src={data.image} />
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 8 }}
          lg={{ span: 8 }}
        >
          <Title level={4}>{data.title}</Title>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 8 }}
          lg={{ span: 8 }}
        >
          <Button
            onClick={handleClick}
            type="primary"
            className="simple-button"
          >
            View Details
          </Button>
          <Button
            onClick={handleSave}
            style={{ marginLeft: "1em" }}
            type="primary"
            className="simple-button"
          >
            Save to my list
          </Button>
        </Col>
      </Row>
    </Col>
  );
};

export default ItemCard;
