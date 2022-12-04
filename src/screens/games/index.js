import { FlatList, StyleSheet, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import GameListItem from "../../components/GameListItem";

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
    <>
      <StatusBar barStyle="dark-content" backgroundColsor="#ecf0f1" />
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        contentInsetAdjustmentBehavior="automatic"
        renderItem={() => <Text>item</Text>}
        ListEmptyComponent={
          <GameListItem
            onPress={() => {
              navigation.navigate("Games", {
                screen: "GameDetail",
              });
            }}
          />
        }
      />
    </>
  );
};

// onPress={() => {
//   navigation.navigate("Games", {
//     screen: "GameDetail",
//   });
// }}
export default Games;

const styles = StyleSheet.create({});
