import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";

const Games = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLargeTitle: true,
      title: "Games",

      headerSearchBarOptions: {
        placeholder: "Search for the games",
      },
    });
  }, []);

  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <Text>Games</Text>
    </View>
  );
};

export default Games;

const styles = StyleSheet.create({});
