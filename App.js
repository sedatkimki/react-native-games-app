import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigations from "./src/navigations";
import { Provider } from "react-redux";
import { persistor, store } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <AppNavigations />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
