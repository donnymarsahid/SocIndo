import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRoute } from '@react-navigation/native';
import React from 'react'
import Field from '../Field';
import Homepage from '../Homepage'
import News from '../News'
import Profile from '../Profile'

const Tab = createBottomTabNavigator();

const index = () => {
    const route = useRoute()
    return (
       <Tab.Navigator
       screenOptions={{ headerShown:false }}
            initialRouteName="Home">
            <Tab.Screen name="Home" component={Homepage} initialParams={route.params} />
            <Tab.Screen name="Field" component={Field} />
            <Tab.Screen name="News" component={News} />
            <Tab.Screen name="Profile" component={Profile} />
       </Tab.Navigator>
  )
}

export default index
