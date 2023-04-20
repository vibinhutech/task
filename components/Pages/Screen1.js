import React ,{useEffect, useState} from 'react'
import {View,Text} from "react-native"

import  firestore from '@react-native-firebase/firestore'


 const Screen1 = (props) => {

  
 
   
   
  return (
    <View>
       <View >
        <Text style={{fontSize:30}} onPress={()=> props.navigation.openDrawer()}>
            open side drawer screen1</Text>

    </View>
    <View>
      <Text>screen1</Text>
    </View>

    </View>
   

  )
}

export default Screen1;
