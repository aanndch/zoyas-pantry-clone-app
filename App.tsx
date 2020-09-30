import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppLoading } from "expo";
import {
  useFonts,
  PTSans_400Regular,
  PTSans_700Bold,
} from "@expo-google-fonts/pt-sans";

import Navigation from "./navigation";

export default function App() {
  let [fontsLoaded] = useFonts({
    PTSans_400Regular,
    PTSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
