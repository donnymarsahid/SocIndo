import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack'; 

import BottomTabNav from '../pages/BottomTabNav';  
import DetailNews from '../pages/News/DetailNews';
import News from '../pages/News';
import Profile from '../pages/Profile';
import DetailField from '../pages/Field/DetailField';
import Field from '../pages/Field';
import Start from '../pages/Start';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Loading from '../pages/Loading';
import Load2 from '../pages/Loading/Load2';

// Config for animatin and no header option
const config = {
  headerShown: false,
  headerBackTitleVisible: false,
  cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
};

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Loading"> 

      {/* User Management */}
      <Stack.Screen name="Loading" component={Loading} options={config} /> 
      <Stack.Screen name="Load2" component={Load2} options={config} /> 
      <Stack.Screen name="Home" component={BottomTabNav} options={config} /> 
      <Stack.Screen name="News" component={News} options={config} /> 
      <Stack.Screen name="Profile" component={Profile} options={config} /> 
      <Stack.Screen name="DetailNews" component={DetailNews} options={config} /> 
      <Stack.Screen name="DetailField" component={DetailField} options={config} /> 
      <Stack.Screen name="Start" component={Start} options={config} /> 
      <Stack.Screen name="Field" component={Field} options={config} /> 
      <Stack.Screen name="Login" component={Login} options={config} /> 
      <Stack.Screen name="Register" component={Register} options={config} /> 
    </Stack.Navigator>
  );
};

export default MainNavigator;
