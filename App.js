import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";

import AppNavigation from "./components/AppNavigation";

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <PaperProvider settings={{ icon: (props) => <Ionicons {...props} /> }}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </PaperProvider>
  );
}
