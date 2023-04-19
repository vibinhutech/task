import React from 'react'
import {View,Text} from "react-native"

 const Screen1 = (props) => {
  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:30}} onPress={()=> props.navigation.openDrawer()}>
            open side drawer</Text>
    </View>
  )
}

export default Screen1;
