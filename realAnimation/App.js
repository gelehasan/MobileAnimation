import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Animated } from 'react-native';
import React, {useRef, useEffect} from 'react';
export default function App() {

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
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      <AnimatedText style={{color:"red", fontSize:30}}>
        Start animating!
      </AnimatedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
