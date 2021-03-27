import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from '../Screens/RegisterScreen';
import InitScreen from '../Screens/InitScreen';
const AuthNavigator = createStackNavigator()
class AuthNavigation extends Component {
    render() {
        return (
            <AuthNavigator.Navigator initialRouteName="Init">
                <AuthNavigator.Screen 
                name="Init"
                component={InitScreen}
                options={{headerShown:false}}/>
                <AuthNavigator.Screen 
                name="Register"
                component={RegisterScreen}
                options={{headerShown:false}}/>
            </AuthNavigator.Navigator>
        )
    }
}

export default AuthNavigation;
