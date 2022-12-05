import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useLayoutEffect, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import GameListItem from "../../components/common/GameListItem";
import {
  fetchGames,
  fetchMoreGames,
  getGames,
} from "../../redux/slices/games/gamesSlice";

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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLargeTitle: true,
      title: "Games",
      headerSearchBarOptions: {
        placeholder: "Search for the games",
      },
    });
  }, []);

  useEffect(() => {
    dispatch(fetchGames());
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColsor="#ecf0f1" />
      {games?.loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size={"large"} />
        </View>
      ) : (
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
                    gameId: item.id,
                  },
                });
              }}
              game={item}
            />
          )}
          ListFooterComponent={<RenderFooter loading={games?.moreLoading} />}
          data={games?.data?.results}
          ListEmptyComponent={<Text>bos</Text>}
          onEndReachedThreshold={0.2}
          onEndReached={() => {
            if (!games?.moreLoading) {
              dispatch(fetchMoreGames());
            }
          }}
        />
      )}
    </>
  );
};

export default Games;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
