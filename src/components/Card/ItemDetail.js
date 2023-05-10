import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Image, message, Rate, Row, } from "antd";

export default function ItemDetail({ data }) {
  // React hooks for managing URL
  const navigate = useNavigate();

  const handleReview = () => {
    const tokenString = window.localStorage.getItem('username');
    if (tokenString && tokenString.length > 0) {
      navigate("/writeReview");
    } else {
      message.error('You must be logged in to use this feature!');
    }
  };

  const handleSave = () => {
    const tokenString = window.localStorage.getItem('username');
    if (tokenString && tokenString.length > 0) {
      message.success(`${data.title} is saved to your saved list!`);
    } else {
      message.error('You must be logged in to use this feature!');
    }
  };

  return (
    <div>
      <Card>
        <Row>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 11 }}
            md={{ span: 10 }}
            lg={{ span: 10 }}
          >
            <Image src={data.image} />
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 11 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}
            style={{ marginLeft: "1em" }}
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
