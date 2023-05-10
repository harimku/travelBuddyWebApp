import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../../App.css';
import { Anchor, Button, Card, Checkbox, Input, Row, Col, Modal, Form, message } from 'antd';
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import { locations } from '../../Types/Locations';
import { restaurants } from '../../Types/Restaurants';
import { activities } from '../../Types/Activities';
import { hotels } from '../../Types/Hotels';

const { Search } = Input;
const { Link } = Anchor;


export default function Header({ setSearchResults }) {

  // React hooks for managing URL and search parameters
  const navigate = useNavigate();

  // Check user login status from window session storage
  const checkLoginStatus = () => {
    const tokenString = window.localStorage.getItem('username');
    if (tokenString && tokenString.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  // Boolean flag indicates whether user is logged in or not using above function
  const [isLoggedIn, setIsLoggedIn] = useState(checkLoginStatus());

  // Boolean flags to manage modal state (open/close)
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegistrationModalOpen, setRegistrationModalOpen] = useState(false);

  // Form references
  const [regForm] = Form.useForm();
  const [loginForm] = Form.useForm();

  // Handler functions for managaing login/reg modals
  const handleLoginCancel = () => {
    setLoginModalOpen(false);
  }

  const handleRegCancel = () => {
    setRegistrationModalOpen(false);
  }

  const handleSwitchToLogin = () => {
    setRegistrationModalOpen(false);
    setLoginModalOpen(true);
  }

  const handleSwitchToReg = () => {
    setLoginModalOpen(false);
    setRegistrationModalOpen(true);
  }

  const handleLogin = (formValues) => {
    console.log(formValues);
    setIsLoggedIn(true); // remember that user has logged in
    window.localStorage.setItem("username", formValues.username); // store username globally
    setLoginModalOpen(false);  // close modal
  }

  const handleRegistration = (formValues) => {
    console.log(formValues);
    setIsLoggedIn(true);  // remember that user has logged in
    window.localStorage.setItem("username", formValues.username); // store username globally
    setRegistrationModalOpen(false);  // close modal
  }

  // Handler function for "Account" button (for logged in user)
  const handleAccountOpen = () => {
    navigate("/account");
  }

  // Handler function for "Review" button
  const handleReview = () => {
    if (isLoggedIn) {
      // proceed to review page
      navigate("/writeReview");
    } else {
      message.error('You must be logged in to use this feature!');
    }
  }

  // Handler function for search
  const handleSearch = (value) => {
    const trimmedValue = value.trim();
    if (trimmedValue !== '') {
      // grab results from locations database
      const filteredLocations = locations.filter(
        item =>
          (item.location.replace(/\s+/g, '').toLowerCase()
            === trimmedValue.trimEnd().replace(/\s+/g, '').toLowerCase()
          ) || (item.tag.replace(/\s+/g, '').toLowerCase()
            === trimmedValue.trimEnd().replace(/\s+/g, '').toLowerCase()
          ) || (item.title.replace(/\s+/g, '').toLowerCase().includes(
            trimmedValue.trimEnd().replace(/\s+/g, '').toLowerCase()
          ))
      );

      // grab results from restaurants database
      const filteredRestaurants = restaurants.filter(
        item =>
          (item.location.replace(/\s+/g, '').toLowerCase()
            === trimmedValue.trimEnd().replace(/\s+/g, '').toLowerCase()
          ) || (item.tag.replace(/\s+/g, '').toLowerCase()
            === trimmedValue.trimEnd().replace(/\s+/g, '').toLowerCase()
          ) || (item.title.replace(/\s+/g, '').toLowerCase().includes(
            trimmedValue.trimEnd().replace(/\s+/g, '').toLowerCase()
          ))
      );

      // grab results from activities database
      const filteredActivities = activities.filter(
        item =>
          (item.location.replace(/\s+/g, '').toLowerCase()
            === trimmedValue.trimEnd().replace(/\s+/g, '').toLowerCase()
          ) || (item.tag.replace(/\s+/g, '').toLowerCase()
            === trimmedValue.trimEnd().replace(/\s+/g, '').toLowerCase()
          ) || (item.title.replace(/\s+/g, '').toLowerCase().includes(
            trimmedValue.trimEnd().replace(/\s+/g, '').toLowerCase()
          ))
      );

      // grab results from hotels database
      const filteredHotels = hotels.filter(
        item =>
          (item.location.replace(/\s+/g, '').toLowerCase()
            === trimmedValue.trimEnd().replace(/\s+/g, '').toLowerCase()
          ) || (item.tag.replace(/\s+/g, '').toLowerCase()
            === trimmedValue.trimEnd().replace(/\s+/g, '').toLowerCase()
          ) || (item.title.replace(/\s+/g, '').toLowerCase().includes(
            trimmedValue.trimEnd().replace(/\s+/g, '').toLowerCase()
          ))
      );

      // Combine result from 3 databases into 1 object
      const filteredData = {
        visit: filteredLocations,
        eat: filteredRestaurants,
        activities: filteredActivities,
        hotels: filteredHotels,
      };
      setSearchResults(filteredData);
    } else {
      // reset search result with entire database
      const allData = {
        visit: locations,
        eat: restaurants,
        activities: activities,
        hotels: hotels
      };
      setSearchResults(allData);
    }
  }

  // On first render, load the entire database
  useEffect(() => {
    const allData = {
      visit: locations,
      eat: restaurants,
      activities: activities,
      hotels: hotels
    };
    setSearchResults(allData);
  }, []);

  return (
    <div className="header">
      {/* Header elements */}
      <Card bordered={false}>
        <Row align="middle">
          <Col
            xs={{ span: 24, offset: 1 }}
            md={{ span: 4, offset: 0 }}
            lg={{ span: 4, offset: 0 }}
          >
            <Link
              className="navbar"
              href="/"
              title={
                <h2>
                  TravelBuddy
                </h2>
              }
            />
          </Col>
          <Col
            xs={{ span: 24, offset: 1 }}
            md={{ span: 12, offset: 0 }}
            lg={{ span: 16, offset: 0 }}
          >
            <Search
              className="search-bar"
              placeholder="Search..."
              enterButton
              size="large"
              allowClear
              onSearch={handleSearch}
            />
          </Col>
          <Col
            xs={{ span: 24, offset: 0 }}
            md={{ span: 6, offset: 0 }}
            lg={{ span: 4, offset: 0 }}
          >
            {/* Display login button if not logged & account button if logged in */}
            {isLoggedIn ?
              <Button
                type="primary"
                className="simple-button"
                onClick={handleAccountOpen}
              >
                Account
              </Button> :
              <Button
                type="primary"
                className="simple-button"
                onClick={() => setLoginModalOpen(true)}
              >
                Login
              </Button>
            }
            <Button
              style={{ marginLeft: "1em" }}
              type="primary"
              className="simple-button"
              onClick={handleReview}
            >
              Review
            </Button>
          </Col>
        </Row>
      </Card>

      {/* Default hidden modal for login */}
      <Modal
        title="Sign In"
        okText="Sign In"
        open={isLoginModalOpen}
        onCancel={handleLoginCancel}
        onOk={loginForm.submit}
      >
        <Form
          form={loginForm}
          name="login form"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={handleLogin}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <h5 style={{ color: '#f56a00', textAlign: 'center' }}>* fields are mandatory</h5>
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please provide your username!",
              },
              {
                min: 3,
                message: "Must have at least 3 characters.",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              {
                min: 6,
                message: "Must have at least 6 characters.",
              },
              {
                // Validation: No special characters
                pattern: new RegExp(/^[a-z0-9]+$/i),
                message: "No special characters such as :<>/%#&?'",
              },
              {
                // Validation: Alphanumeric
                pattern: new RegExp(
                  /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/i
                ),
                message: "Must contain a mix of letters and number(s)",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Button type="link" >
            <SettingOutlined />
            <a
              href="https://google.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              {" "}Forgot password? Click here to reset.
            </a>
          </Button>
          <br />
          <Button type="link" onClick={handleSwitchToReg}>
            <ArrowLeftOutlined />
            Go to Registration
          </Button>
        </Form>
      </Modal>

      {/* Default hidden modal for registration */}
      <Modal
        title="Registration"
        okText="Sign Up"
        open={isRegistrationModalOpen}
        onCancel={handleRegCancel}
        onOk={regForm.submit}
      >
        <Form
          form={regForm}
          name="Sign up form"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            agreeToTerms: false,
          }}
          onFinish={handleRegistration}
          autoComplete="off"
        >
          <h5 style={{ color: '#f56a00', textAlign: 'center' }}>* fields are mandatory</h5>
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
              {
                min: 4,
                message: "Must have at least 4 characters.",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="First name"
            name="firstname"
            rules={[
              {
                required: true,
                pattern: new RegExp(/^[a-zA-Z]+$/),
                message: "Please provide a valid first name!",
              },
              {
                min: 2,
                message: "Must have at least 2 characters.",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Last name"
            name="lastname"
            rules={[
              {
                required: true,
                pattern: new RegExp(/^[a-zA-Z]+$/),
                message: "Please provide a valid last name!",
              },
              {
                min: 2,
                message: "Must have at least 2 characters.",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please provide your email!",
              },
              {
                pattern: new RegExp(/\S+@\S+\.\S+/),
                message:
                  "Provide a valid email address",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              {
                min: 6,
                message: "Must have at least 6 characters.",
              },
              {
                // Validation: No special characters
                pattern: new RegExp(/^[a-z0-9]+$/i),
                message: "No special characters such as :<>/%#&?'",
              },
              {
                // Validation: Alphanumeric
                pattern: new RegExp(
                  /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/i
                ),
                message: "Must contain a mix of letters and number(s)",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="agreeToTerms"
            valuePropName="checked"
            wrapperCol={{
              offset: 2,
              span: 20,
            }}
            rules={[
              {
                required: true,
                validator: (_, value) =>
                  value ? Promise.resolve()
                    :
                    Promise.reject(new Error('You must agree to terms & conditions to register')),
              },
            ]}
          >
            <Checkbox>
              I agree to the terms and conditions of TravelBuddy's
              User Agreement and Privacy Policy
            </Checkbox>
          </Form.Item>
        </Form>
        <Button type="link" onClick={handleSwitchToLogin}>
          Already a member? Log in here
          <ArrowRightOutlined />
        </Button>
      </Modal>
    </div>
  );
};