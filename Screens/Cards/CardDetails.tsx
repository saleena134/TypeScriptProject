import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useRef } from "react";
import { Image, StyleSheet, View, SafeAreaView } from "react-native";
import AppText from "../../container/AppText";
import Header from "../../container/Header";
import colors from "../../style/colors";
import { normalize } from "../../validation/globles";
import { RootStackParamList } from "../RootStackPrams";
import { useNavigation } from "@react-navigation/native";
import Screen from "../../container/Screen";

interface Props {
  route: any;
}
type authScreenProp = StackNavigationProp<RootStackParamList, "CardDetails">;
const CardDetails: React.FC<Props> = ({ route, ...props }) => {
  const navigation = useNavigation<authScreenProp>();

  const { id, title, image, body } = route.params;

  useEffect(() => {
    console.log("Saleena", id, title, image, body);
  }, []);

  return (
    <>
      <Screen>
        <View style={{ backgroundColor: colors.light, flex: 1 }}>
          <Header title={"Card Detail"} screen={true} />
          <View style={styles.container}>
            <Image style={styles.imageStyle} source={image} />
            <View style={styles.detailsContainer}>
              <AppText style={styles.QntyandColorText}>{id}</AppText>
              <AppText style={styles.QntyandColorText}>{title}</AppText>
              <AppText style={styles.QntyandColorText}>{body}</AppText>
            </View>
          </View>
        </View>
      </Screen>
    </>
  );
};
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
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
    shadowColor: "gray",
    shadowOffset: {
      height: 4,
      width: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  imageStyle: {
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
