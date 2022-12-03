import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";

const Favourites = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLargeTitle: true,
      headerStyle: {
        backgroundColor: "#F7F7F7",
      },
      headerShadowVisible: false,
      headerBackTitleVisible: false,
      title: "Favourites",
    });
  }, []);

  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <Text>Favourites</Text>
    </View>
  );
};

export default Favourites;

const styles = StyleSheet.create({});
