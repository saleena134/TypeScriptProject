import React from "react";
import { Image } from "react-native";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  View,
} from "react-native";

interface Props {
  children?: React.ReactNode;
}

const Screen: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <>
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Screen;
