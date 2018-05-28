import React, { Component } from 'react'
import { View, Text } from 'react-native';
import Header from './components/Header';
import AlbumsList from './components/AlbumsList';

export default class NativeApp extends Component {

  componentWillMount(){

      try{
        let albums = fetch('http://rallycoding.herokuapp.com/api/music_albums');
        albums = albums.json();
        console.log(albums);
      } catch(e){
      }
  }

  render() {
    return(
      <View style={styles.app}>
        <Header title='Albums'/>
        <AlbumsList />
      </View>
    );
  }
}

const styles = {
  app:{
    flex: 1,
  },
}
//       <View>
//         <View style={styles.appHeader}>
//           <Text style={styles.appTitle}>Welcome to React ⚛️</Text>
//         </View>
//         <Text style={styles.appIntro}>
//           To get started, edit src/App.js and save to reload.
//         </Text>
//       </View>
//       ;
//   }
// }
//
// const styles = StyleSheet.create({
//   app: {
//
//   },
//   appHeader: {
//
//   },
//   appIntro:{
//
//   }
// })
