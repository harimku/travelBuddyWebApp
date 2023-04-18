import React from 'react'

import CardImage from './CardImage'
import CardTitle from './CardTitle'
import CardButtons from './CardButtons'

const Card = ({ data }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: '100%',
    }}>
      <div style={{
        display: 'flex',
        position: 'relative',
        marginTop: '1rem',
        marginBottom: '1rem',
        backgroundColor: '#ADD8E6',
        border: '1px solid black',
        padding: '20px',
        paddingRight: '40px',
        width: '80%',
        height: '150px',
        maxWidth: '100%',
        flexShrink: 0,
        flexBasis: 'auto',
      }}>
        <CardImage image={data.image} />
        <CardTitle title={data.title} />
        <CardButtons />
      </div>
    </div>
  )
}

export default Card




