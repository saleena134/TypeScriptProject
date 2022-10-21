import React, { useEffect, useRef } from "react";
import {
  Image,
  StyleSheet,
  View,
  ScrollView,
  Text,
  Animated,
  SafeAreaView,
} from "react-native";
import AppText from "../../container/AppText";
import Header from "../../container/Header";
import colors from "../../style/colors";
import { normalize } from "../../validation/globles";

const CardDetails = ({ navigation, route, ...props }) => {
  const { id, title, image, body } = route.params;

  useEffect(() => {
    console.log("Saleena", id, title, image, body);
  }, []);

  return (
    <>
      <SafeAreaView>
        <Header title={"Card Detail"} navigation={navigation} screen={true} />
        <View style={styles.container}>
          <Image style={styles.image} source={source} />
          <View style={styles.detailsContainer}>
            <AppText style={styles.QntyandColorText}>{id}</AppText>
            <AppText style={styles.QntyandColorText}>{title}</AppText>
            <AppText style={styles.QntyandColorText}>{body}</AppText>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    marginTop: 5,
    paddingHorizontal: 10,
    backgroundColor: "white",
    flexDirection: "row",
  },

  caption: {
    fontSize: 15,
  },

  btntext: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },

  container: {
    backgroundColor: "white",
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
    shadowColor: colors.dark,
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

export default CardDetails;
