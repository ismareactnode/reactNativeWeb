import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({title}) =>{
      return(
        <View style={styles.header}>
          <Text style={styles.text}>
          {title}

          </Text>
        </View>
      );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    height: 90,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default Header;
