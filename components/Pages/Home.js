import React from 'react'
import {View, Text, StyleSheet} from "react-native"
import DrawerNavigator from './DrawerNavigator'

export const Home = (props) => {
  console.warn("home",props.route.params)
  // const {username}= props.route.params
const username=props.route.params
  return (
    // <View style={styles.container}>
    //   <Text style={styles.textContent}> Welcome <Text style={styles.user}>{username}</Text></Text>
    // </View>
    <View style={{flex: 1}}>
      <DrawerNavigator />
    </View>
  )
}

const styles=StyleSheet.create({
  container: {
    flex:1,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
   
    
  },
  textContent: {
    fontSize:20,
  }, 
  user: {
    color:"red",
    fontWeight:100,
    fontSize:35,
  }
})
