import { Button, ScrollView, StyleSheet, Text } from "react-native";
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
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <Text>Favourites</Text>
      <Button
        title="game detail sayfasına git"
        onPress={() => {
          navigation.navigate("Games", {
            screen: "GameDetail",
          });
        }}
      />
    </ScrollView>
  );
};

export default Favourites;

const styles = StyleSheet.create({});
