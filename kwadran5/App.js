import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import store from './src/stores'
import HomeScreen from './src/screens/HomeScreen'

const Stack = createStackNavigator()

export default function App() {

  return (
    <Provider store ={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
              headerShown: false
            }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

