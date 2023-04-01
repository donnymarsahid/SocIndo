import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRoute } from '@react-navigation/native';
import React from 'react'
import {Text, Image} from 'react-native'
import Field from '../Field';
import Homepage from '../Homepage'
import News from '../News'
import Profile from '../Profile'
import user from "../../assets/img/user.png"
import note from "../../assets/img/note-book.png"
import home from "../../assets/img/home.png"
import soccer from "../../assets/img/soccer-field-rounded-shape-top-view.png"


const Tab = createBottomTabNavigator();

const index = () => {
    const route = useRoute()
    return (
       <Tab.Navigator
       screenOptions={{ headerShown:false }}
            initialRouteName="Home">
            <Tab.Screen name="Home" component={Homepage} initialParams={route.params} 
            options={{
               tabBarIcon: ({ color, size }) => (
                 <Image source={home} style={{width: 20, resizeMode: 'contain'}} />
               )
             }} />
            <Tab.Screen name="Field" component={Field}
             options={{
               tabBarIcon: ({ color, size }) => (
                 <Image source={soccer} style={{width: 20, resizeMode: 'contain'}} />
               )
             }} />
            <Tab.Screen name="News" component={News}
             options={{
               tabBarIcon: ({ color, size }) => (
                 <Image source={note} style={{width: 20, resizeMode: 'contain'}} />
               )
             }} />
            <Tab.Screen name="Profile" component={Profile}
             options={{
               tabBarIcon: ({ color, size }) => (
                 <Image source={user} style={{width: 20, resizeMode: 'contain'}} />
               )
             }} />
       </Tab.Navigator>
  )
}

export default index
