import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

import GamesNavigator from "./GamesNavigator";
import FavouritesNavigator from "./FavouritesNavigator";

const Tab = createBottomTabNavigator();

const images = {
  games: require("../../assets/TabIcons/Games.png"),
  games_active: require("../../assets/TabIcons/Games_active.png"),
  favourites: require("../../assets/TabIcons/Favourites.png"),
  favourites_active: require("../../assets/TabIcons/Favourites_active.png"),
};

export default function AppNavigations() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        // Alttaki Tab navigasyonu ayarları
        // ayrıca tablerde kullanılan ikonlar burada tanımlanıyor.
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            const routeName = route.name;
            var icon;
            switch (routeName) {
              case "Games":
                icon = focused ? images.games_active : images.games;
                break;
              case "Favourites":
                icon = focused ? images.favourites_active : images.favourites;
                break;
              default:
                icon = focused ? images.games_active : images.games;
                break;
            }
            return <Image style={{ resizeMode: "contain" }} source={icon} />;
          },
        })}
      >
        {/* Tab navigasyonları burada tanımlanıyor. Kullanılan iki sekme ve bu sekmelerin renderlayacağı komponentler verilmiş. */}
        <Tab.Screen
          name="Games"
          options={{ headerShown: false }}
          component={GamesNavigator}
        />
        <Tab.Screen
          name="Favourites"
          options={{ headerShown: false }}
          component={FavouritesNavigator}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
