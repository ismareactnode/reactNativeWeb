import React from 'react';
import  { View, Text } from 'react-native';

const AlbumItem = ({album})=>{
  return(
    <View>
      <Text>
        {album.title}
      </Text>
      <Text>
        {album.artist}
      </Text>
    </View>
  );
}

export default AlbumItem;
