import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { NavigatorScreenParams, useNavigation } from "@react-navigation/native";
export interface IAuthRouteProps {}

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = (props) => {
  const { children } = props;
  const auth = getAuth();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const AuthCheck = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
      } else {
        console.log("unauthorized");
        navigation.navigate("BottomSheet");
      }
    });

    return () => AuthCheck();
  }, [auth]);

  if (loading)
    return (
      <View>
        <Text>loading ...</Text>
      </View>
    );

  return <>{children}</>;
};

export default AuthRoute;
