import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';

export default class NativeApp extends Component {
  render() {
    return(
      <View style={styles.app}>
        <View style={styles.appHeader}>
          <Text style={styles.appTitle}>REACT NATIVE WEB</Text>
        </View>
        <Text style={styles.appIntro}>qsdkjfh lqsfkjh qksjdhfl jdqskhf kjqsdhf kljqsdhf kjdqshf</Text>
      </View>
    );
  }
}

const styles = {
  app:{
    flex: 1,
  },
  appHeader: {
        flex: 1,
    backgroundColor: '#222',
    height: '20vh',
  padding: 20,
  justifyContent: 'center',
  alignItems: 'center'
  },
  appTitle: {
    fontSize: '1.7em',
    color: 'white'
  },
  appIntro: {
    flex: 2,
    fontSize: 30,
    textAlign: 'center',
  }
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
