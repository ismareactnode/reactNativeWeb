import React from 'react';
import { AppRegistry, View} from 'react-native';
import Header from './components/header';
import AlbumList from './components/AlbumList';

const App = () => {
  <View>
      <Header title={'Albums'} />
      <AlbumsList />
  </View>
};

AppRegistry.registerComponent('albums', () => App);
