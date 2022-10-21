import React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../style/colors";
import { normalize } from "../validation/globles";
import AppText from "./AppText";

const Header = ({
  children,
  title,
  navigation,
  backScreen,
  screen,
  ...props
}) => (
  <View style={styles.headerContainer}>
    {screen == true ? (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require("../assets/goBack.png")}
          style={{ height: 30, width: 30 }}
        />
      </TouchableOpacity>
    ) : null}
    <View
      style={{
        width: screen == false ? "85%" : "80%",
        alignItems: "center",
        marginLeft: normalize(10),
      }}
    >
      <AppText style={styles.title}>{title}</AppText>
    </View>
    {children}
  </View>
);
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.primary,
    borderBottomStartRadius: 70,
    borderBottomEndRadius: 70,
    padding: normalize(20),
    marginTop: Platform.OS === "ios" ? normalize(1) : normalize(25),
    // alignItems: "baseline",
    flexDirection: "row",
  },
  title: {
    color: colors.light,
    fontSize: normalize(20),
    fontWeight: "500",
  },
});
export default Header;
