import {
  Alert,
  Button,
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";

// Custom Component
import colors from "../style/colors";
import { normalize } from "../validation/globles";
import Seprator from "../container/Seprator";
import AppText from "../container/AppText";
// Custom Component

import { useNavigation } from "@react-navigation/native";
import { firebase } from "@react-native-firebase/auth";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./RootStackPrams";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
type authScreenProp = StackNavigationProp<RootStackParamList, "SignIn">;
const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation<authScreenProp>();
  const LoginHandle = async () => {
    if (email && password) {
      try {
        const user = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        navigation.navigate("CardsScreen");
        Alert.alert("User logged-in successfully!");
      } catch (error) {
        console.log("error is here", error);
      }
    } else {
      Alert.alert("error");
    }
  };

  return (
    <>
      <View style={styles.loginContainer}>
        <Image
          source={require("../assets/login.png")}
          style={{
            height: 50,
            width: 50,
            alignSelf: "center",
          }}
        />
        <Seprator screen={true} />
        <TextInput
          placeholder={"email"}
          style={styles.input}
          value={email}
          onChangeText={(val) => setEmail(val)}
        />
        <TextInput
          placeholder={"passwrod"}
          value={password}
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(val) => setPassword(val)}
        />
        <TouchableOpacity style={styles.button} onPress={LoginHandle}>
          <AppText style={{ color: colors.light }}>Submit</AppText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignUP")}
        >
          <AppText style={{ color: colors.light }}>Sign Up</AppText>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0eded",
    height: SCREEN_HEIGHT,
    width: "100%",
    position: "absolute",
    borderRadius: 25,
    top: SCREEN_HEIGHT / 1,
  },
  line: {
    width: 75,
    height: 5,
    borderRadius: 2,
    backgroundColor: "grey",
    marginTop: 10,
    alignSelf: "center",
  },
  loginContainer: {
    alignItems: "center",
    padding: normalize(15),
    margin: normalize(10),
    alignSelf: "center",
  },
  iconContainer: {
    borderColor: colors.primary,
    height: 50,
    width: 50,
    borderRadius: 30,
    alignSelf: "center",
    margin: normalize(10),
    justifyContent: "center",
  },
  input: {
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderRadius: normalize(10),
    borderColor: "black",
    marginBottom: 10,
    marginVertical: normalize(10),
  },
  button: {
    backgroundColor: colors.primary,
    width: 300,
    borderRadius: 10,
    padding: normalize(10),
    alignItems: "center",
    marginVertical: normalize(10),
  },
});
export default Form;
