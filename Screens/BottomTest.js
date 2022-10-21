import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  Gesture,
  GestureDetector,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import colors from "../style/colors";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const BottomTest = () => {
  useEffect(() => {
    translateY.value = withSpring(-SCREEN_HEIGHT / 6, { damping: 50 });
  }, []);
  const [position, setPosition] = useState("bottom");

  const [values, setvalues] = useState("");

  const translateY = useSharedValue(0);

  const context = useSharedValue({ y: 0 });
  const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;
  const isPressed = useSharedValue(false);

  const updatePosition = (position) => {
    console.log("position", position);
    if (translateY.value < -171) {
      withTiming(setPosition("bottom"), { duration: 500 });
    }
    withTiming(setPosition("Top"), { duration: 500 });
  };
  const gesture = Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true;
    })
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      console.log("here", event.absoluteY);
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
      // runOnJS(updatePosition)(event.absoluteY);
    })
    .onEnd(() => {
      if (translateY.value > -SCREEN_HEIGHT / 3) {
        translateY.value = withSpring(-SCREEN_HEIGHT / 5, { damping: 50 });
      } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
        translateY.value = withSpring(MAX_TRANSLATE_Y, { damping: 50 });
      }
    })
    .onFinalize(() => {
      isPressed.value = false;
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
  // UI;
  const details = [
    {
      id: 1,
      icon: <Image source={require("./assets/00.png")} resizeMode="center" />,
      text: "No transaction fees on all your transaction in the first cycle",
    },
    {
      id: 2,
      icon: (
        <Image
          resizeMode="center"
          source={require("./assets/11.png")}
          // style={{height: 50, width: 50}}
        />
      ),
      text: "Attractive Rewards and Cashback!",
    },
    {
      id: 3,
      icon: <Image source={require("./assets/33.png")} resizeMode="center" />,
      text: "Unlock an easy credit of upto ₹30,000*",
    },
  ];
  // for chnaging background color slowly
  const progress = useDerivedValue(() => {
    return withTiming(translateY.value > -200 ? 1 : 0);
  });

  const backgroundScreenStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [colors.dark, colors.light]
    );

    return {
      backgroundColor,
    };
  });
  const randomNumber = useSharedValue(100);

  const style = useAnimatedStyle(() => {
    return {
      width: randomNumber.value,
      height: randomNumber.value,
    };
  });
  return (
    <Animated.View
      style={[
        { justifyContent: "center", alignItems: "center", flex: 1 },
        backgroundScreenStyle,
      ]}
    >
      <Text style={styles.paymentText}>Paying to Dilkush Mithaiwala</Text>
      <Text style={styles.emailText}>rajesh.naik@okicici</Text>
      <TextInput
        placeholder="0"
        value={values}
        onChangeText={(value) => setvalues(value)}
        placeholderTextColor={"#14171A"}
        style={styles.inputContainer}
        keyboardType="number-pad"
      />

      <TouchableOpacity
        style={[
          styles.button,
          { width: 300, backgroundColor: values == "" ? "#E8EBED" : "#1E67ED" },
        ]}
      >
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          randomNumber.value = withSpring(Math.random() * 350);
        }}
      >
        <Animated.Image
          source={require("./assets/00.png")}
          resizeMode="contain"
          style={style}
        />
      </TouchableOpacity>
      <Text style={[styles.text, { fontSize: 10 }]}>
        Powered by RBI Registered NBFC
      </Text>
      <Text
        style={[
          styles.text,
          { fontSize: 10, fontWeight: "300", color: "#707070" },
        ]}
      >
        Si Creva Capital Services Private Limited.
      </Text>

      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.container, rBottomSheetStyle]}>
          <View style={styles.line} />
          <View style={styles.textContainer}>
            <Text style={styles.welcomeText}>Welcome to RING!</Text>
            <Text
              style={[styles.welcomeText, { color: "#14171A", fontSize: 22 }]}
            >
              Say hello to freedom!!
            </Text>

            {details.map((value, key) => {
              return (
                <>
                  <View style={styles.detailsContainer}>
                    <View style={styles.iconContainer}>{value.icon}</View>
                    <Text
                      key={key}
                      numberOfLines={2}
                      style={[styles.text, { marginLeft: 10, flex: 1 }]}
                    >
                      {value.text}
                    </Text>
                  </View>
                </>
              );
            })}
            <TouchableOpacity
              style={[
                styles.button,
                { backgroundColor: "#1E67ED", width: 140 },
              ]}
            >
              <Text style={styles.buttonText}>Let’s RING it!</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </GestureDetector>
    </Animated.View>
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
  paymentText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#14171A",
  },
  emailText: {
    marginVertical: 5,
    color: "#687684",
    fontSize: 14,
  },
  inputContainer: {
    fontSize: 50,
    fontWeight: "bold",
  },
  textContainer: {
    marginVertical: 10,
    padding: 20,
  },
  welcomeText: {
    color: "#657786",
    fontSize: 18,
    marginVertical: 5,
    fontWeight: "bold",
  },
  detailsContainer: {
    alignItems: "center",
    marginVertical: 5,
    flexDirection: "row",
  },
  iconContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    backgroundColor: "#f5f6f7",
    justifyContent: "center",
  },
  text: {
    fontSize: 14,
    color: "#11142D",
  },
  button: {
    marginVertical: 20,
    alignSelf: "center",
    height: 50,
    borderRadius: 10,
    borderColor: "#1E67ED",
    padding: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
export default BottomTest;
