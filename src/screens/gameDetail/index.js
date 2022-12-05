import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import FavouriteButton from "./components/FavouriteButton";
import GameHeader from "./components/GameHeader";
import GameDescription from "./components/GameDescription";
import VisitButton from "./components/VisitButton";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchGameDetails,
  selectGameDetail,
} from "../../redux/slices/gameDetail/gameDetailSlice";
import Loading from "../../components/common/Loading";

const Divider = () => (
  <View
    style={{
      borderBottomColor: "#000000",
      marginLeft: 16,
      marginVertical: 16,
      borderBottomWidth: StyleSheet.hairlineWidth,
    }}
  ></View>
);

const GameDetail = ({ route }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const gameDetail = useSelector(selectGameDetail);
  const { gameId } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerRight: () => <FavouriteButton />,
    });
  }, []);

  useEffect(() => {
    dispatch(fetchGameDetails(gameId));
  }, []);

  if (gameDetail.loading) {
    return <Loading />;
  } else {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <GameHeader
          title={gameDetail.data.name}
          imageSource={{
            uri: gameDetail.data.background_image,
          }}
        />
        <GameDescription description={gameDetail.data.description} />
        <Divider />
        {gameDetail.data.reddit_url && (
          <VisitButton
            url={gameDetail.data.reddit_url}
            title={"Visit reddit"}
          />
        )}
        <Divider />
        {gameDetail.data.website && (
          <VisitButton url={gameDetail.data.website} title={"Visit website"} />
        )}
        <Divider />
      </ScrollView>
    );
  }
};

export default GameDetail;

const styles = StyleSheet.create({});
