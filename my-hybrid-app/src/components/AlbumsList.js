import React ,{ Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

import AlbumItem from './AlbumItem';

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
  render(){
    return(
      <View>
      {Object.values(this.state.albums).map(album=><AlbumItem key={album.title} album={album}/>)}
      </View>
    );
  };
}

export default AlbumsList;
