import React from 'react'
import '../../App.css'
import { Button, Card, Input, Space, Row, Col } from 'antd'
import { AudioOutlined } from '@ant-design/icons'
import { locations } from '../../Types/Locations'
const { Search } = Input


export default function Header({ setSearchResults }) {
  const handleSearch = (value) => {
    const trimmedValue = value.trim()
    if (trimmedValue === '') {
      setSearchResults([])
    } else {
      const filteredLocations = locations.filter(location =>
        location.location.replace(/\s+/g, '').toLowerCase() === trimmedValue.trimEnd().replace(/\s+/g, '').toLowerCase()
      );
      if (filteredLocations.length > 0) {
        setSearchResults(filteredLocations)
      } else {
        setSearchResults([{ message: "no results found" }])
      }
    }
  }
  return (
    <div className="header">
      <Card bordered={false}>
        <Row>
          <Col
            xs={{ span: 24, offset: 1 }}
            md={{ span: 4, offset: 0 }}
            lg={{ span: 4, offset: 0 }}
          >
            <h2>Travel Buddy</h2>
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
            <Button type="primary" className="simple-button">
              Login
            </Button>
            <Button style={{marginLeft: "1em"}} type="primary" className="simple-button">
              Review
            </Button>
          </Col>
        </Row>
      </Card>
    </div >
  );
}