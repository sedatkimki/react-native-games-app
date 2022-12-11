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

// liste sonuna gelindiğinde tekrar fetch yapılırken loading komponenti renderlanıyor.
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
    // navigasyon sayfasının header ayarları
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
    // search bar'a değer girildiğinde search işlemi burada kontrol edilip yapılıyor.
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
    // listedeki oyuna tıklandığında ilgili oyunun detay sayfasına yönlendirme
    await navigation.navigate("Games", {
      screen: "GameDetails",
      params: {
        item,
      },
    });
    dispatch(addVisited(item.id)); // ziyaret edildi olarak işaretleniyor
  };
  return (
    <>
      {/* status bardaki kontenti siyah yapmak için */}
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
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
              //pagination için
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
