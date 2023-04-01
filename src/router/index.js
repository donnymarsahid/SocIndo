import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './MainNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { navigationRef } from '../utils/RootNavigation';

const AppNavigator = () => {

return (
  <SafeAreaProvider>
    <NavigationContainer ref={navigationRef}>
      <MainNavigator />
    </NavigationContainer>
  </SafeAreaProvider>
)};

export default AppNavigator;
