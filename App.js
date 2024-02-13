import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, } from 'react-native';
import * as Font from 'expo-font'
import WelcomeScreen from './screens/WelcomeScreen'
import Login from './screens/LoginScreen'
import Signup from './screens/SignupScreen'
import { useState } from 'react';
import AppLoading from "expo-app-loading"
export default function App() {
  const Stack=createNativeStackNavigator()
  const [fontsLoaded,setFontsLoaded]=useState(false)
  const getFonts=()=>{
    return Font.loadAsync({
      'poppins-regular':require("./assets/Poppins/Poppins-Regular.ttf"),
      'poppins-thin':require("./assets/Poppins/Poppins-Thin.ttf"),
      'poppins-bold':require("./assets/Poppins/Poppins-Bold.ttf"),
      'poppins-medium':require("./assets/Poppins/Poppins-Medium.ttf"),
    })
  }
  if(!fontsLoaded){
    return <AppLoading startAsync={getFonts} onFinish={()=>{setFontsLoaded(true)}} onError={(err)=>{alert(err.message)}}/>
  }
  return (
    <>
    <StatusBar/>
    <NavigationContainer  >
      <Stack.Navigator screenOptions={{contentStyle:{fontFamily:"poppins-regular"}}}>
        <Stack.Screen name='Welcome' component={WelcomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='Signup' component={Signup} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
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
