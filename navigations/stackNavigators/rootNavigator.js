import React from "react";
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import AuthNavigator from "./authNavigator";
import PrivateNavigator from "./privateNavigator";

const rootStack = createStackNavigator();

const RootNavigator = ({ token }) => {

    return (
        <rootStack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
        >
            {
                !token ?
                    <rootStack.Screen
                        name="login"
                        component={AuthNavigator} /> :
                    <rootStack.Screen
                        name="home"
                        component={PrivateNavigator} />
            }
        </rootStack.Navigator>
    )
}

export default RootNavigator