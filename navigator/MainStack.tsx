import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignUP from "../Screens/SignUp";
import LogIn from "../Screens/Form";
import BottomSheet from "../Screens/BottomSheet";
import FeedScreen from "../Screens/FeedScreen";
import CardsScreen from "../Screens/Cards/CardsScreen";
import CardDetails from "../Screens/Cards/CardDetails";
import { firebase } from "@react-native-firebase/auth";
import SignIn from "../Screens/SignIn";

// const Stack = createStackNavigator<RootStackParamList>();
const MainStack = () => {
  const Stack = createStackNavigator();

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;
  if (!user) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUP" component={SignUP} />
      </Stack.Navigator>
    );
  }
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="BottomSheet" component={BottomSheet} />
      <Stack.Screen name="SignUP" component={SignUP} /> */}
      <Stack.Screen name="CardsScreen" component={CardsScreen} />
      <Stack.Screen name="CardDetails" component={CardDetails} />
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
