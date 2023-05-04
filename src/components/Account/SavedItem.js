import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Image, Typography, Row } from "antd";

const { Title } = Typography;

const SavedItem = ({ data, setItemData }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setItemData(data);
    navigate("/viewDetail");
  };

  return (
    <Col xs={{ span: 24 }} lg={{ span: 22 }}>
      <Row
        align="middle"
        justify="center"
        style={{
          backgroundColor: "#ADD8E6",
          borderRadius: "7px",
          boxShadow: "rgba(0, 0, 100, 0.3) 0px 4px 12px",
          padding: "1.5em",
        }}
      >
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 8 }}
          lg={{ span: 8 }}
        >
          <Image src={data.image} />
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
            type="primary"
            style={{ margin: "1em" }}>
            Remove
          </Button>
        </Col>
      </Row>
    </Col>
  );
};

export default SavedItem;
