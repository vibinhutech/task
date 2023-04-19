import React,{useEffect} from 'react'
import {View, Text} from 'react-native'

const Splash = (props) => {
    const {username}=props.route.params
    console.log("spash",username)

    useEffect(()=> {

        setTimeout(()=> {
props.navigation.navigate('Home',username)
        },2000)

    })
  return (
    <View>
        <Text>Splash</Text>
    </View>
  )
}

export default Splash;
