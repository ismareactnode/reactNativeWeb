import React ,{ Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumsList extends Component{

  constructor(props){
    super(props);
    this.state={
      albums: {}
    }
  };

 componentWillMount(){
   axios.get('https://rallycoding.herokuapp.com/api/music_albums')
   .then((result)=>{
     this.setState(()=>({albums: result.data}));
     console.log('albums : ',this.state.albums);
   })
   .catch((e)=>console.log('error : ', e));
 }

 renderAlbums(){
     return Object.values(this.state.albums).map(album=><AlbumDetail key={album.title} album={album}/>);
 }

  render(){
    return(
      <View>
        {this.renderAlbums()}
      </View>
    );
  };
}

export default AlbumsList;
