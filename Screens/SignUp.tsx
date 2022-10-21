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
import React, { FC, useState } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import colors from "../style/colors";
import { normalize } from "../validation/globles";
import Seprator from "../container/Seprator";
import AppText from "../container/AppText";
import { firebase } from "@react-native-firebase/auth";
import { NavigatorScreenParams, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./RootStackPrams";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
type authScreenProp = StackNavigationProp<RootStackParamList, "SignIn">;

const SignUP: FC = (props) => {
  React.useEffect(() => {
    translateY.value = withSpring(-SCREEN_HEIGHT / 3, { damping: 50 });
  }, []);
  const navigation = useNavigation<authScreenProp>();
  const translateY = useSharedValue(0);

  const context = useSharedValue({ y: 0 });
  const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      console.log(event.absoluteY);
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
      if (translateY.value > -SCREEN_HEIGHT / 3) {
        translateY.value = withSpring(-SCREEN_HEIGHT / 5, { damping: 50 });
      } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
        translateY.value = withSpring(MAX_TRANSLATE_Y, { damping: 50 });
      }
    });

  const rBottomSheetStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
      [25, 5],
      Extrapolate.CLAMP
    );
    return {
      borderRadius,
      transform: [{ translateY: translateY.value }],
    };
  });

  const progress = useDerivedValue(() => {
    return withTiming(translateY.value > -300 ? 1 : 0);
  });

  const backgroundScreenStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [colors.secondary, colors.primary]
    );

    return {
      backgroundColor,
    };
  });

  const [email, setEmail] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const signup = async () => {
    if (name && email && password) {
      try {
        const user = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        if (user) {
          navigation.navigate("CardsScreen");
          // await firebase.firestore().collection("user").doc(user.uid).set({name, email, password})
          Alert.alert(JSON.stringify(user));
        }
      } catch (error) {
        console.log("error is here", error);
      }
    } else {
      Alert.alert("error");
    }
  };
  return (
    <>
      <Animated.View
        style={[backgroundScreenStyle, { flex: 1, justifyContent: "center" }]}
      >
        <AppText style={{ color: colors.dark }}> Login Please</AppText>
        <Image
          source={require("../assets/user.png")}
          style={{ alignSelf: "center" }}
        />
      </Animated.View>
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.container, rBottomSheetStyle]}>
          <View style={styles.line} />
          <View style={styles.loginContainer}>
            <Image
              source={require("../assets/login.png")}
              style={{
                height: 50,
                width: 50,
                alignSelf: "center",
              }}
            />
            <Seprator screen={false} />
            <TextInput
              //  value={email}
              placeholder={"name"}
              onChangeText={(text) => setName(text)}
              //  onChange={(val) => setEmail(val.target.value)}
              style={styles.input}
            />
            <TextInput
              //  value={email}
              placeholder={"email"}
              onChangeText={(text) => setEmail(text)}
              //  onChange={(val) => setEmail(val.target.value)}
              style={styles.input}
            />
            <TextInput
              //  value={password}
              placeholder={"passwrod"}
              //  onChange={(val) => setPassword(val.target.value)}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              style={styles.input}
            />

            <TouchableOpacity style={styles.button} onPress={signup}>
              <Text style={{ color: colors.light }}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("SignIn")}
            >
              <Text style={{ color: colors.light }}>Back To login</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </GestureDetector>
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
export default SignUP;
