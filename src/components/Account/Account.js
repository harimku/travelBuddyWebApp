import React, { useState } from "react";
import '../../App.css';
import { Col, Row, Menu } from 'antd';
import {
    HeartFilled,
    EditFilled,
    SettingOutlined,
    LogoutOutlined
} from '@ant-design/icons';

// Menu tab items
const items = [
    getItem('Saved List', '1', <HeartFilled />),
    getItem('My Reviews', '2', <EditFilled />),
    getItem('Setting', '3', <SettingOutlined />),
    getItem(),
    getItem('Logout', '5', <LogoutOutlined />),
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
    const [chosenTab, setChosenTab] = useState('1');

    const handleClick = (op) => {
        console.log(op);
        setChosenTab(op.key);
    };

    return (
        <div>
            <br /><br />
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
                    Display content here
                </Col>
            </Row>
        </div>
    );
};