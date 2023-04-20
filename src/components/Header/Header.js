import React, { useEffect } from 'react';
import '../../App.css';
import { Button, Card, Input, Row, Col } from 'antd';
import { locations } from '../../Types/Locations';
import { restaurants } from '../../Types/Restaurants';
import { activities } from '../../Types/Activities';

const { Search } = Input;


export default function Header({ setSearchResults }) {

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
          )
      );

      // grab results from restaurants database
      const filteredRestaurants = restaurants.filter(
        item =>
          (item.location.replace(/\s+/g, '').toLowerCase()
            === trimmedValue.trimEnd().replace(/\s+/g, '').toLowerCase()
          ) || (item.tag.replace(/\s+/g, '').toLowerCase()
            === trimmedValue.trimEnd().replace(/\s+/g, '').toLowerCase()
          )
      );

      // grab results from activities database
      const filteredActivities = activities.filter(
        item =>
          (item.location.replace(/\s+/g, '').toLowerCase()
            === trimmedValue.trimEnd().replace(/\s+/g, '').toLowerCase()
          ) || (item.tag.replace(/\s+/g, '').toLowerCase()
            === trimmedValue.trimEnd().replace(/\s+/g, '').toLowerCase()
          )
      );

      // Combine result from 3 databases into 1 object
      const filteredData = {
        visit: filteredLocations,
        eat: filteredRestaurants,
        activities: filteredActivities
      };
      setSearchResults(filteredData);
    } else {
      // reset search result with entire database
      const allData = {
        visit: locations,
        eat: restaurants,
        activities: activities
      };
      setSearchResults(allData);
    }
  }

  // On first render, load the entire database
  useEffect(() => {
    const allData = {
      visit: locations,
      eat: restaurants,
      activities: activities
    };
    setSearchResults(allData);
  }, []);

  return (
    <div className="header">
      <Card bordered={false}>
        <Row align="middle">
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
            <Button style={{ marginLeft: "1em" }} type="primary" className="simple-button">
              Review
            </Button>
          </Col>
        </Row>
      </Card>
    </div >
  );
};