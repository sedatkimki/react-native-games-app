import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigations from "./src/navigations";

export default function App() {
  return (
    <SafeAreaProvider>
      <AppNavigations />
    </SafeAreaProvider>
  );
}
