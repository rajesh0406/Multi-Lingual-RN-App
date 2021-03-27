/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect} from 'react';
import {
 Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import AuthNavigation from './src/Navigator/AuthNavigation';
import SplashScreen from 'react-native-splash-screen';
import I18n from './src/Translations/i18n';
const MainNavigator=createStackNavigator()
const App=()=> {
  useEffect(() => {
  SplashScreen.hide()
  }, [])
  return (
    <NavigationContainer>
   <MainNavigator.Navigator>
     <MainNavigator.Screen
      name="auth" 
      component={AuthNavigation}
      options={{headerShown:false}}
      />
   </MainNavigator.Navigator>
   </NavigationContainer>
  );
};



export default App;
