import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { Extrapolate, interpolate, interpolateColor, useAnimatedStyle, useDerivedValue, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import colors from './colors';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const BottomSheet = () => {
    React.useEffect(() => {
      translateY.value = withSpring(-SCREEN_HEIGHT / 6 ,{damping : 50})
    }, [])
    
    const translateY = useSharedValue(0);

    const context = useSharedValue({y : 0})
    const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50

    const gesture =Gesture.Pan().onStart(() => {
        context.value ={ y : translateY.value}
    }).onUpdate((event) => {
        console.log(event.absoluteY);
        translateY.value = event.translationY + context.value.y
        translateY.value = Math.max(translateY.value , MAX_TRANSLATE_Y)
    }).onEnd(() =>{
        if(translateY.value > - SCREEN_HEIGHT / 3){
            translateY.value = withSpring(-SCREEN_HEIGHT /5 , {damping:50})
        }else if(translateY.value < -SCREEN_HEIGHT/1.5){
            translateY.value = withSpring(MAX_TRANSLATE_Y ,{damping:50})
        }
    })
    
    const rBottomSheetStyle = useAnimatedStyle(() => {
        const borderRadius = interpolate(
             translateY.value,
             [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
             [25,5],
             Extrapolate.CLAMP
        )
return {
    borderRadius,
    transform:[{ translateY: translateY.value}]
}
    })

const progress = useDerivedValue(() =>{
    return withTiming(translateY.value > -200 ? 1 : 0)
})

const backgroundScreenStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [colors.dark, colors.light],
    );

    return {
      backgroundColor,
    };
  });
  return (<>
      <Animated.View style={[backgroundScreenStyle,{flex:1}]}>
     <Text>Hello</Text>
      </Animated.View>
      <GestureDetector gesture={gesture}>
    <Animated.View style={[styles.container, rBottomSheetStyle]}>
        <View style={styles.line}/>
      <Text>BottomSheet</Text>
    </Animated.View>
      </GestureDetector>
      </>
  )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"#f0eded",
        height:SCREEN_HEIGHT,
        width:"100%",
        position:"absolute",
        borderRadius:25,
        top:SCREEN_HEIGHT / 1
    },
    line:{
        width:75,
        height:5,
        borderRadius:2,
        backgroundColor:"grey",
        marginTop:10,
        alignSelf: "center",
    }
})
export default BottomSheet