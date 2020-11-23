import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'


export default function App() {
  return (
    <View style={styles.container}>
      <FontAwesome
        name='home'
        size={25}
        color='blue'
      />
      <FontAwesome
        name='user'
        size={25}
        color='blue'
      />
      <Feather
        name='gift'
        size={25}
        color='blue'
      />

      <TouchableOpacity style={styles.youtube}>
        <FontAwesome
          name='youtube'
          size={25}
          color='white'
        />
        <Text style={styles.btnText}>Acessar Canal</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  youtube: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    paddingLeft:15,    
    paddingRight:15,    
    backgroundColor: 'red',
    borderRadius: 20
  },
  btnText: {
    paddingLeft: 10,
    color: 'white'
  },
})