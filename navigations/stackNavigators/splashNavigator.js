
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from "../../screens/splashScreen";

const splashStack = createStackNavigator();

const SplashNavigator = () => (
    <splashStack.Navigator
    >
        <splashStack.Screen
            name="splash"
            component={SplashScreen}
        />

    </splashStack.Navigator>
)

export default SplashNavigator