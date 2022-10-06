import React from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from './BottomSheet';
import BottomTest from './BottomTest';
import HomeScreen from './HomeScreen';
import ThemeChanger from './ThemeChanger';

const App = () => {
 


  return (
    <GestureHandlerRootView style={{flex:1}}>
      <StatusBar barStyle="dark-content"/>
    <View style={styles.container}>
         {/* <Text>Hello</Text>   */}
         {/* <HomeScreen/> */}
      <BottomSheet/>
      {/* <ThemeChanger/> */}
      {/* <BottomTest/> */}
    </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
 container:{
   flex:1,
 }
});

export default App;
