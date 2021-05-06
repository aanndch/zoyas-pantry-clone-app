import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppLoading } from "expo";
import {
  useFonts,
  Poppins_200ExtraLight,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { PTSans_400Regular, PTSans_700Bold } from "@expo-google-fonts/pt-sans";

import Navigation from "./navigation";
import COLORS from "./colors";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Poppins_400Regular,
    Poppins_700Bold,
    PTSans_400Regular,
    PTSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaProvider
      style={{
        backgroundColor: COLORS.background,
      }}
    >
      <Navigation />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
