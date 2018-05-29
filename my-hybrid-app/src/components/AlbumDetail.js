import React from 'react';
import  { View, Text, Image, StyleSheet, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';



const AlbumDetail = ({album})=>{
  const {title, artist, thumbnail_image, image, url} = album;
  console.log(`title: ${title}, artist:${artist}, thumbnail_image:${thumbnail_image}, image:${image}`);

  const {headerContentStyle, thumbnailStyle, thumbnailContainerStyle, headerTextStyle, imageStyle} = styles;

  return(
    <Card>

      <CardSection>
          <View
            style={thumbnailContainerStyle}>
            <Image
              source={{uri : thumbnail_image}}
              style={thumbnailStyle}
            />
          </View>

          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>
                {title}
            </Text>
            <Text>
                {artist}
            </Text>
          </View>

        </CardSection>

        <CardSection>
          <Image
          style={imageStyle}
          source={{uri: image}} />
        </CardSection>

        <CardSection>
          <Button onPress={()=>Linking.openURL(url)}>
            Acheter {title}
          </Button>
        </CardSection>


    </Card>
  );
}

export default AlbumDetail;

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbnailStyle:{
    height: 50,
    width: 50
  },
  thumbnailContainerStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  headerTextStyle:{
    fontWeight: 'bold'
  },
  imageStyle:{
    height: 300 ,
    flex: 1,
    width: null,
  }
})
