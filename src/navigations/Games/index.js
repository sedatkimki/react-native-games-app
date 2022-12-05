import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Games from "../../screens/games";
import GameDetail from "../../screens/gameDetail";

const Stack = createNativeStackNavigator();

export default function GamesNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="GamesList" component={Games} />
      <Stack.Screen name="GameDetail" component={GameDetail} />
    </Stack.Navigator>
  );
}
