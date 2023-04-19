import React, { useState } from 'react'
import Login from './components/Pages/Login'
import { Home } from './components/Pages/Home'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Button  } from "@react-native-material/core";
import Splash from './components/Pages/Splash'

const Stack=createNativeStackNavigator()

 const App = () => {

  const Logout=(props)=> {
    // props.navigation.navigate("login")
    // console.warn(JSON.parse(props))
  }


  

  
  return (
      
  <NavigationContainer>
    <Stack.Navigator>

    



      <Stack.Screen
       name="login"
        component={Login} 
        options={{headerShown:false}}
       
      
      />
<Stack.Screen npx react-native run-android
      name='Splash' 
      component={Splash}
      options={{headerShown:false}}
      >

      </Stack.Screen>

      
      <Stack.Screen 
      name="Home" 
      component={Home}
      options={
        {
          headerRight:()=><Button title="Logout" onPress={(props)=>Logout(props)}/>
        }
      }
      
      
      />

      
    </Stack.Navigator>

  </NavigationContainer>

  



)
  }
export default App
