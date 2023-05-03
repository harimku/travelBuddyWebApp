import React from "react";
import { Button, Card, Col, Image, Row } from "antd";

export default function ItemDetail({ data }) {
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
            <br />
            <br />
            <Button type="primary">Leave a Review</Button>
            <Button type="primary" style={{ margin: "1em" }}>
              Save to My List
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
