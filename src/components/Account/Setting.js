import React from "react";
import '../../App.css';
import { Button, Card, Col, Row, Switch } from "antd";
import {
  CheckOutlined,
  CloseOutlined,
  SettingOutlined
} from "@ant-design/icons"

export default function Setting() {
  return (
    <div>
      <Card bordered={false}>
        <Row align="middle">
          <h2><SettingOutlined />    My Settings</h2>
        </Row>
        <Row align="middle" justify="center">
          <Col
            xs={{ span: 12 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 8 }}
          >
            <p>Apperance</p>
          </Col>
          <Col
            xs={{ span: 12 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 8 }}
          >
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked
            />
          </Col>
        </Row>
        <Row align="middle" justify="center">
          <Col
            xs={{ span: 12 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 8 }}
          >
            <p>Notifications</p>
          </Col>
          <Col
            xs={{ span: 12 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 8 }}
          >
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked
            />
          </Col>
        </Row>
        <Row align="middle" justify="center">
          <Col
            xs={{ span: 12 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 8 }}
          >
            <p>Private mode</p>
          </Col>
          <Col
            xs={{ span: 12 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 8 }}
          >
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked
            />
          </Col>
        </Row>
        <Row style={{ margin: "1em" }} justify="center">
          <Button>
            Update profile
          </Button>
        </Row>
        <Row style={{ margin: "1em" }} justify="center">
          <Button>
            Change password
          </Button>
        </Row>
        <Row style={{ margin: "1em" }} justify="center">
          <Button>
            Advanced settings
          </Button>
        </Row>
        <Row style={{ margin: "1em" }} justify="center">
          <Button>
            Contact support
          </Button>
        </Row>
      </Card>
    </div >
  );
};