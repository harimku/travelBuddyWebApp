import React from "react"
import { Typography } from "antd"

const { Title } = Typography;

const CardTitle = ({ title }) => {
    return (
      <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          marginLeft: '50px',
        }}>
        <Title level={3}>
          {title}
        </Title>
      </div>
    )
  }

export default CardTitle