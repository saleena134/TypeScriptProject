import React from "react";
import { Image } from "react-native";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  View,
} from "react-native";

const Screen = ({ children, style, ...rest }) => {
  return (
    <>
      <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Screen;
