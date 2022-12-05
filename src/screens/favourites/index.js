import { Button, FlatList, ScrollView, StyleSheet, Text } from "react-native";
import React, { useLayoutEffect, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { selectFavourites } from "../../redux/slices/favourites/favouritesSlice";
import EmptyComponent from "../../components/common/EmptyComponent";
import GameListItem from "../../components/common/GameListItem";

const Favourites = () => {
  const navigation = useNavigation();
  const favourites = useSelector(selectFavourites);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLargeTitle: true,
      headerStyle: {
        backgroundColor: "#F7F7F7",
      },
      headerShadowVisible: false,
      headerBackTitleVisible: false,
      title: `Favourites ${
        favourites.count > 0 ? "(" + favourites.count + ")" : ""
      }`,
    });
  }, []);
  useEffect(() => {
    navigation.setOptions({
      title: `Favourites ${
        favourites.count > 0 ? "(" + favourites.count + ")" : ""
      }`,
    });
  }, [favourites.count]);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        contentInsetAdjustmentBehavior="automatic"
        renderItem={({ item }) => (
          <GameListItem
            key={item.id}
            onPress={() => {
              navigation.navigate("Games", {
                screen: "GameDetail",
                params: {
                  item,
                },
              });
            }}
            game={item}
          />
        )}
        data={favourites.list}
        ListEmptyComponent={
          <EmptyComponent text={"There is no favourites found"} />
        }
      />
    </>
  );
};

export default Favourites;

const styles = StyleSheet.create({});
