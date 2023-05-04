import React from "react";
import { Button, Col, Rate, Typography, Row } from "antd";

const { Title } = Typography;

export default function ReviewItem({ data }) {

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
          md={{ span: 6 }}
          lg={{ span: 6 }}
        >
          <Title level={5}>{data.title}</Title>
        </Col>
        <Col
          xs={{ span: 18 }}
          sm={{ span: 18 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
        >
          <Rate allowHalf value={data.rating} />
          <p>{data.description}</p>
        </Col>
        <Col
          xs={{ span: 6 }}
          sm={{ span: 6 }}
          md={{ span: 6 }}
          lg={{ span: 6 }}
        >
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
