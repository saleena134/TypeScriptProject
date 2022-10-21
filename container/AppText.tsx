import React, { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../style/colors";
import { normalize } from "../validation/globles";

interface Props {
  children?: React.ReactNode;
  style: any;
}
const AppText: React.FC<Props> = ({ children, style, ...rest }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: { fontSize: 15, color: colors.dark, padding: normalize(3) },
});
export default AppText;
