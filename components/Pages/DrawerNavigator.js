import React from 'react'
import {View, Text} from "react-native"
import { createDrawerNavigator } from '@react-navigation/drawer'
import Main from './Main'
const Drawer=createDrawerNavigator()


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen 
        name="Main" 
        component={Main} 
        options={{headerShown:true}}
        
        />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator;
