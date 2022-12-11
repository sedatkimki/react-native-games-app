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
  selectGameDetails,
} from "../../redux/slices/gameDetails/gameDetailsSlice";
import Loading from "../../components/common/Loading";
import _ from "lodash";

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

const GameDetails = ({ route }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const gameDetails = useSelector(selectGameDetails);
  const { item } = route.params; // route paramlarında oyunun liste detaylarını alıyoruz daha sonrasında id'si ile oyunun detay sayfasını oluşturacağız

  useLayoutEffect(() => {
    // sağ üst köşedeki button header'a dahil olduğu için header ayarlarında bunu belirtiyoruz
    navigation.setOptions({
      title: "",
      headerRight: () => <FavouriteButton item={item} />,
    });
  }, []);

  useEffect(() => {
    // aldığımız id ile detayları fetchliyoruz
    dispatch(fetchGameDetails(item.id));
  }, []);

  if (gameDetails.loading || _.isEmpty(gameDetails)) {
    return <Loading />;
  } else {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <GameHeader
          title={gameDetails.data.name}
          imageSource={{
            uri: gameDetails.data.background_image,
          }}
        />
        <GameDescription description={gameDetails.data.description} />
        {gameDetails.data.reddit_url && (
          <>
            <Divider />
            <VisitButton
              url={gameDetails.data.reddit_url}
              title={"Visit reddit"}
            />
          </>
        )}
        <Divider />
        {gameDetails.data.website && (
          <VisitButton url={gameDetails.data.website} title={"Visit website"} />
        )}
        <Divider />
      </ScrollView>
    );
  }
};

export default GameDetails;
