import React, { useEffect, useState } from 'react'
import {View,Text} from "react-native"
import  firestore from '@react-native-firebase/firestore'

 const Screen2 = () => {
  const [screen2data, setscreen2data]=useState(null)

  useEffect(()=> {
    getdata()
  },[])

  const getdata= async()=> {
    try{
    const screen2data= await firestore().collection('testing').doc('HMJhqygGgjUDiPApr7zx').get()
    console.warn("screen2", screen2data._data)
    setscreen2data(screen2data._data)
    }
    catch(err){
      console.warn(err)
    }


  }
  return (
    <View>
        <Text>Name : {screen2data?screen2data.firstname: "loading"}</Text>
    </View>
  )
}

export default Screen2;