import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function SplashScreen({ navigation }) {

  setTimeout(() => {
    navigation.replace('Home')
  }, 4000)

    return (
      <View style={styles.container}>
          <Image
              source={require('../components/welcome.gif')}
              style={{ width: 300, height: 300}}
            />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    textAlign: "center",
    fontSize:  30,
    color: '#31326f',
    fontWeight: 'bold'
  },
  content: {
    top: 175
  }
});