import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Button,
} from "react-native";
import Header from "../../container/Header";
import Screen from "../../container/Screen";
import Cards from "./Cards";
import auth from "@react-native-firebase/auth";
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
  const navigation = useNavigation<authScreenProp>();

  const DATA = [
    {
      id: "1",
      title: "The Boys",
    },
    {
      id: "2",
      title: "The hello",
    },
    {
      id: "3",
      title: "The Boys",
    },
    {
      id: "4",
      title: "The Boys",
    },
    {
      id: "5",
      title: "The Boys",
    },
  ];

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

  console.log("checking data", DATA);

  const image = { uri: "https://picsum.photos/200/300" };

  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => console.log("User signed out!"));
  };
  return (
    <Screen>
      <Header title={"Card Screen"} screen={false} />
      <View style={styles.container}>
        <Button title="logout" onPress={handleLogout} />
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
  },
});

export default CardsScreen;
