import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../screens/login';

const authStack = createStackNavigator();

const AuthNavigator = () => (
    <authStack.Navigator
    headerMode={false}
    >
        <authStack.Screen 
        name="login"
        component={Login}
        />

    </authStack.Navigator>
)

export default AuthNavigator