import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash, MainPage, MovieDetail, Login } from '../pages';
import { COLOR_BACKGROUND } from '../utils/constants';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{
      contentStyle:{
        backgroundColor: COLOR_BACKGROUND
      }
   }}>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown : false}} />
        <Stack.Screen name="MainPage" component={MainPage} options={{headerShown : false}} />
        <Stack.Screen name="MovieDetail" component={MovieDetail} options={{headerShown : false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown : false}} />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
