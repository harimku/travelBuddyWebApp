import React, { useEffect, useState } from "react";
import '../../App.css';
import {
  Card,
  Form,
  Input,
  Button,
  Select,
  message,
  Radio,
  Rate
} from 'antd';

const { TextArea } = Input;


export default function Reviews() {

  const handleSubmit = () => {
    message.success('Your review was submitted!');
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed to submit review: ', errorInfo);
  };

  return (
    <div>
      <Card>
        <Form
          onFinish={handleSubmit}
          onFinishFailed={onFinishFailed}
        >
          <h2>Leave a Review</h2>
          <Form.Item
            name="type"
            label="Choose a type:"
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please select a category for your review"
              },
            ]}
          >
            <Select options={[
              { key: 1, value: "activities" },
              { key: 2, value: "locations" },
              { key: 3, value: "restaurants" }
            ]} />
          </Form.Item>
          <Form.Item
            name="verify"
            label="Is this an existing item on TravelBuddy?"
            rules={[
              {
                required: true,
                message: "Please selection an option"
              },
            ]}
          >
            <Radio.Group>
              <Radio value={1}>Yes</Radio>
              <Radio value={2}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="name"
            label="Item name"
            rules={[
              {
                required: true,
                message: "Please provide a name for the item you are reviewing"
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="rating"
            label="Rating:"
            rules={[
              {
                required: true,
                message: "Please rate the item you are reviewing"
              },
            ]}
          >
            <Rate allowHalf />
          </Form.Item>
          <Form.Item
            name="review"
            label="Review: "
          >
            <TextArea
              showCount
              maxLength={100}
              style={{ height: 120, marginBottom: 24 }}
              placeholder="can resize"
            />
          </Form.Item>
          <Form.Item>
            <Button type="danger" htmlType="reset">Clear</Button>
            <Button type="primary" htmlType="submit">Submit Review</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};