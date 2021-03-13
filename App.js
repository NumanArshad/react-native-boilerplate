import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import AuthNavigator from './navigations/stackNavigators/authNavigator';
import RootNavigator from './navigations/stackNavigators/rootNavigator';
import authContext from './contexts/authContext';
import PrivateNavigator from './navigations/stackNavigators/privateNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashNavigator from './navigations/stackNavigators/splashNavigator';

export default function App() {

  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "RESTORE":
          return { ...state, isloading: false, token: action.token };
        case "SIGN_IN":
          return { ...state, isSignIn: true, token: action.token };
        case "SIGN_OUT":
          return { ...state, isSignIn: false, token: null };
      }
    },
    { isloading: true, token: null, isSignIn: false }
  )

  useEffect(() => {
    (async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem("token");
        console.log("token", userToken)
      } catch (error) {
        console.error("get token error", error)
      }
      authContextValue.getUser(userToken);
    })();
  }, []);

  const authContextValue = {
    signIn: () => {
      let token = "dummy token";
      AsyncStorage.setItem("token", token);
      dispatch({ type: "SIGN_IN", token });
    },
    signOut: () => {
      AsyncStorage.removeItem("token"), dispatch({ type: "SIGN_OUT" });
    },
    getUser: (token) => dispatch({ type: "RESTORE", token }),
  };

  if (state.isloading) {
    return <NavigationContainer>
      <SplashNavigator />
    </NavigationContainer>
  }

  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <authContext.Provider value={authContextValue}>

    <NavigationContainer>
      
      <RootNavigator {...state}/>

    </NavigationContainer>
    </authContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
