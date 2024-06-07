import { StatusBar } from "expo-status-bar";
import { View,StyleSheet, Animated, Text, PanResponder} from "react-native";
import { useRef } from "react";



export default function Gesture() {
 const pan = useRef(new Animated.ValueXY()).current;
 const panResponder = useRef(
    PanResponder.create({
        onMoveShouldSetPanResponder: ()=> true,
        onPanResponderGrant: ()=> {
            pan.setOffset({
                x:pan.x._value,
                y:pan.y._value
            })
        },
        onPanResponderMove:Animated.event([
            null,
            {dx:pan.x, dy:pan.y}
        ]),

        onPanResponderRelease: ()=>{
          /**   pan.flattenOffset(); */
          Animated.spring(
            pan,
            {toValue:{x:0, y:0}}
          ).start();

        }
    })
 ).current;
    return(
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <Animated.View style={{
                transform:[{translateX:pan.x}, {translateY:pan.y}]
            }}
            {...panResponder.panHandlers}> 
        
            <View style={styles.circle}> </View>
        
            </Animated.View>
        </View>
    )

}

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle:{
    width:150,
    innerHeight:150,
    borderRadius:75,
    backgroundColor:"green"
  }

})
