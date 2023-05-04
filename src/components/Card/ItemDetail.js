import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Image, message, Rate, Row, } from "antd";

export default function ItemDetail({ data }) {
  // React hooks for managing URL
  const navigate = useNavigate();

  const handleReview = () => {
    navigate("/writeReview");
  };

  const handleSave = () => {
    message.success(`${data.title} is saved to your saved list!`);
  };

  return (
    <div>
      <Card>
        <Row>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 10 }}
            lg={{ span: 10 }}
          >
            <Image src={data.image} />
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 14 }}
            lg={{ span: 14 }}
          >
            <h2>{data.title}</h2>
            <p>Location: {data.location}</p>
            <p>Description: {data.description}</p>
            <Rate allowHalf value={data.rating} />
            <br />
            <br />
            <Button onClick={handleReview} type="primary">Leave a Review</Button>
            <Button onClick={handleSave} type="primary" style={{ margin: "1em" }}>
              Save to My List
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
