import React, { Component } from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import AppText from "../../container/AppText";
import colors from "../../style/colors";
import { normalize } from "../../validation/globles";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../RootStackPrams";
import { StackNavigationProp } from "@react-navigation/stack";

interface Props {
  id: number;
  title: string;
  body: any;
  image: { uri: string };
  onPress: any;
}
// type authScreenProp = StackNavigationProp<RootStackParamList, "CardDetails">;
const Cards: React.FC<Props> = ({ id, title, image, onPress, body }) => {
  //   const img = require('https://picsum.photos/200/300');
  // const navigation = useNavigation<authScreenProp>();
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          // resizeMode="cover"
          style={styles.image}
          source={image}
          // source={{ uri: "https://picsum.photos/200/300" }}
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.QntyandColorText}>{id}</AppText>
          <AppText style={styles.QntyandColorText}>{title}</AppText>
          <AppText style={styles.QntyandColorText}>{body}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card,
    alignItems: "center",
    marginVertical: normalize(10),
    width: "95%",
    margin: normalize(10),
    padding: normalize(10),
    borderRadius: normalize(10),
    // marginBottom: Platform.OS === "ios" ? 20 : 10,
    shadowColor: "gray",
    shadowOffset: {
      height: 4,
      width: 0,
    },
    // shadowColor: colors.dark,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  image: {
    width: "90%",
    marginVertical: normalize(10),
    height: 250,
    borderRadius: 20,
    // backgroundColor: 'pink',
  },
  detailsContainer: {
    width: "90%",
    justifyContent: "flex-start",
  },
  QntyandColorText: {
    fontWeight: "300",
    color: colors.textColor,
    fontSize: 15,
    margin: 5,
  },
});

export default Cards;
