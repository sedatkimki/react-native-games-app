import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import React, { useLayoutEffect, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import GameListItem from "../../components/common/GameListItem";
import {
  addVisited,
  fetchGames,
  fetchMoreGames,
  getGames,
} from "../../redux/slices/games/gamesSlice";
import Loading from "../../components/common/Loading";
import EmptyComponent from "../../components/common/EmptyComponent";

const RenderFooter = ({ loading }) => {
  return (
    <View style={{ paddingVertical: 16 }}>
      {loading && <ActivityIndicator />}
    </View>
  );
};

const Games = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const games = useSelector(getGames);
  const [searchInput, setSearchInput] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLargeTitle: true,
      title: "Games",
      headerSearchBarOptions: {
        placeholder: "Search for the games",
        onChangeText: (event) => {
          setSearchInput(event.nativeEvent.text);
        },
      },
    });
  }, []);

  useEffect(() => {
    dispatch(fetchGames());
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchInput.length > 3) {
        dispatch(fetchGames(searchInput));
      } else {
        dispatch(fetchGames());
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [searchInput]);

  const onPress = async (item) => {
    await navigation.navigate("Games", {
      screen: "GameDetail",
      params: {
        item,
      },
    });
    dispatch(addVisited(item.id));
  };
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColsor="#ecf0f1" />
      {games?.loading ? (
        <Loading />
      ) : (
        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          contentInsetAdjustmentBehavior="automatic"
          renderItem={({ item }) => (
            <GameListItem
              key={item.id}
              onPress={async () => {
                await onPress(item);
              }}
              game={item}
              visited={
                games.visitedIds.find((id) => id === item.id) ? true : false
              }
            />
          )}
          ListFooterComponent={<RenderFooter loading={games?.moreLoading} />}
          data={games?.data?.results}
          ListEmptyComponent={
            <EmptyComponent text={"No game has been searched"} />
          }
          onEndReachedThreshold={0.2}
          onEndReached={() => {
            if (!games?.moreLoading && games?.data.next) {
              dispatch(fetchMoreGames());
            }
          }}
        />
      )}
    </>
  );
};

export default Games;

const styles = StyleSheet.create({});
