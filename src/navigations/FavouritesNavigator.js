import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favourites from "../screens/favourites";
import GameDetails from "../screens/gameDetails";

const Stack = createNativeStackNavigator();

export default function FavouritesNavigator() {
  return (
    <Stack.Navigator>
      {/* Tabler içinde kullanılan stack navigasyonları ve renderlanacak komponentler*/}
      <Stack.Screen name="FavouritesList" component={Favourites} />
      <Stack.Screen name="FavouritesGameDetails" component={GameDetails} />
    </Stack.Navigator>
  );
}
