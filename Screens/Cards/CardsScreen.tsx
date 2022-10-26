import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";

//Custom Component
import Header from "../../container/Header";
import Screen from "../../container/Screen";
import Cards from "./Cards";
import colors from "../../style/colors";
//Custom Component

import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../RootStackPrams";
import { StackScreenProps } from "@react-navigation/stack";

interface Props {
  image: string;
  title: string;
  screen: boolean;
  id: string;
  card: {
    image: string;
  };
}

type authScreenProp = StackScreenProps<RootStackParamList, "CardDetails">;
const CardsScreen: React.FC = ({ ...props }) => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setData(json.slice(0, 10));
        console.log("see here", json);
      })
      .catch((error) => console.log(error));
  }, []);

  const [data, setData] = React.useState<string | any>();

  const image = { uri: "https://picsum.photos/200/300" };

  const navigation = useNavigation<authScreenProp>();
  return (
    <Screen>
      <View style={styles.container}>
        <Header title={"Card Screen"} screen={false} />
        <FlatList
          data={data}
          keyExtractor={(item, index) => "id" + index.toString()}
          renderItem={({ item }) => (
            <Cards
              image={image}
              id={item?.id}
              title={item?.title}
              onPress={() =>
                navigation.navigate("CardDetails", {
                  id: item.id,
                  image: image,
                  title: item.title,
                  body: item.body,
                })
              }
              body={undefined}
            />
          )}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
});

export default CardsScreen;
