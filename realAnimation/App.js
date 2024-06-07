import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Animated,TouchableOpacity, SafeAreaView } from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import { Alert } from 'react-native';
export default function App() {
  const [pickedColor, setPickedcolor]= useState(-1)

  if(pickedColor === -1){
    Alert.alert(
      "title",
  
      "subtitle",
      [
          {
              text:"red",
              onPress: ()=> setPickedcolor(0)
          },
          {
              text:"Blue",
              onPress: ()=>  setPickedcolor(1)
          }
      ]
  )
  
  }



  const AnimatedText = (props) =>{
    const textOpacity= useRef(new Animated.Value(0)).current;
    React.useEffect(()=>{
      Animated.timing(
        textOpacity,{
          toValue:1,
          duration:3000,
          useNativeDriver:true
        }
      ).start();

    },[textOpacity])

    return(
      <Animated.Text
        style={{
          ...props.style,
          opacity:textOpacity
        }}
      >
        {props.children}
      </Animated.Text>

    )
  }

  const aniX =useRef(new Animated.Value(0)).current;
  const aniY =useRef(new Animated.Value(0)).current;

  const shift = () =>{
    Animated.parallel([
      Animated.spring(aniX, {
        toValue:200,
        duration:500,
        useNativeDriver:false
      }),
      Animated.spring(aniY, {
        toValue:0,
        duration:500,
        useNativeDriver:false
      })
    ]).start()


  }
  return (

    <SafeAreaView style={[styles.container, pickedColor==0 && styles.red, pickedColor==1 && styles.blue]}>

      <TouchableOpacity onPress={shift}>
        <Animated.View style={[styles.shyButton, {
          marginLeft:aniX,
          marginRight:aniY
        }]}>
          <Text style={styles.buttonText}> Dont press</Text>

        </Animated.View>

      </TouchableOpacity>
  

    {/** <View style={styles.container}>
      
      <StatusBar style="auto" />
    <AnimatedText style={{color:"red", fontSize:30}}>
        Start animating!
      </AnimatedText>
    </View>
    */
}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
    alignItems: 'center',
    justifyContent: 'center',
  },

  red:{
    backgroundColor:"red"
  },
  blue:{
    backgroundColor:"blue"
  },

  shyButton:{

    border:1,
    backgroundColor:"red",
    padding:20,
    width:150,
    height:60,
    alignItems: 'center',
    justifyContent: 'center'

  },
  buttonText:{

  }
});
