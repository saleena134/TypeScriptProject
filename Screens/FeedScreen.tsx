import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import auth from "@react-native-firebase/auth";

const FeedScreen = () => {
  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => console.log("User signed out!"));
  };
  return (
    <View style={{ justifyContent: "center", alignContent: "center", flex: 1 }}>
      <Text>FeedScreen</Text>
      <Button title="logout" onPress={handleLogout} />
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({});
