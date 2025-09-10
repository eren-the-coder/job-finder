import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

const ScreenHeaderBtn = ({ iconUrl, dimension }) => {
  return (
    <TouchableOpacity>
      <Image source={iconUrl} 
        style={{
          width: dimension,
          height: dimension
        }}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn