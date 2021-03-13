import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../screens/login';
import Home from "../../screens/home";

const privateStack = createStackNavigator();

const PrivateNavigator = () => (
    <privateStack.Navigator
        initialRouteName="home"
    >
        <privateStack.Screen
            name="home"
            component={Home}
        />

    </privateStack.Navigator>
)

export default PrivateNavigator