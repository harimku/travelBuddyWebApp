import React from 'react'
import { Image } from 'antd'

const CardImage = ({ image }) => {
  return (
    <Image 
      width={200}
      height={150}
      src={image}
      />
  )
}

export default CardImage
