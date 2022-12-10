import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Games from "../screens/games";
import GameDetails from "../screens/gameDetails";

const Stack = createNativeStackNavigator();

export default function GamesNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="GamesList" component={Games} />
      <Stack.Screen name="GameDetails" component={GameDetails} />
    </Stack.Navigator>
  );
}
