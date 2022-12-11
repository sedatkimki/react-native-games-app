import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigations from "./src/navigations";
import { Provider } from "react-redux";
import { persistor, store } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={store}>
      {/* redux store provider */}
      <PersistGate loading={null} persistor={persistor}>
        {/* redux persist provider*/}
        <SafeAreaProvider>
          {/* for safearea container*/}
          <AppNavigations />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
