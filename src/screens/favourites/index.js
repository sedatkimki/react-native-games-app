import React, { useLayoutEffect, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { useSelector } from "react-redux";
import { selectFavourites } from "../../redux/slices/favourites/favouritesSlice";
import EmptyComponent from "../../components/common/EmptyComponent";
import GameListItem from "../../components/common/GameListItem";
import { SwipeListView } from "react-native-swipe-list-view";
import DeleteButton from "../../components/common/DeleteButton";

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
      <SwipeListView
        contentContainerStyle={{ flexGrow: 1 }}
        contentInsetAdjustmentBehavior="automatic"
        renderItem={({ item }) => (
          <GameListItem
            key={item.id}
            onPress={() => {
              navigation.navigate("Favourites", {
                screen: "FavouritesGameDetails",
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
        renderHiddenItem={(data, rowMap) => <DeleteButton item={data.item} />}
        disableRightSwipe
        rightOpenValue={-75}
        stopRightSwipe={-75}
      />
    </>
  );
};

export default Favourites;
