import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favourites from "../screens/favourites";

const Stack = createNativeStackNavigator();

export default function FavouritesNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FavouritesList" component={Favourites} />
    </Stack.Navigator>
  );
}
