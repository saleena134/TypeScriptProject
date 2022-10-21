import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../style/colors";
import { normalize } from "../validation/globles";
import AppText from "./AppText";

const Seprator = ({ screen }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View style={styles.sepContainer} />
      <>
        {screen == true ? (
          <AppText>Login</AppText>
        ) : (
          <AppText>Registration</AppText>
        )}
      </>
      <View style={styles.sepContainer} />
    </View>
  );
};

export default Seprator;

const styles = StyleSheet.create({
  sepContainer: {
    height: 2,
    width: 100,
    backgroundColor: colors.primary,
    marginVertical: normalize(20),
    marginHorizontal: normalize(5),
  },
});
