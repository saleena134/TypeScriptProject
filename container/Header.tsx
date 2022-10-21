import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { RootStackParamList } from "../Screens/RootStackPrams";
import { useNavigation } from "@react-navigation/native";
import colors from "../style/colors";
import { normalize } from "../validation/globles";
import AppText from "./AppText";

interface Props {
  children?: React.ReactNode;
  title: string;
  screen: boolean;
}

type authScreenProp = StackNavigationProp<RootStackParamList, "CardsScreen">;
const Header: React.FC<Props> = ({ children, title, screen }) => {
  const navigation = useNavigation<authScreenProp>();
  return (
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
};
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
