import React from 'react'
import { Button } from 'antd'

const CardButtons = () => {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flexWrap: 'wrap',
        alignItems: 'center',
        width: '40%',
        flex: 1
      }}>
        <Button type="primary" className="simple-button">
          View Details
        </Button>
        <Button style={{marginLeft: "1px"}} type="primary" className="simple-button">
          Save to my list
        </Button>
      </div>        
    )
}

export default CardButtons