import React, { useState } from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider, MD3DarkTheme, MD3LightTheme } from "react-native-paper";
import HomeScreen from "./components/HomeScreen";

const Stack = createStackNavigator();

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <PaperProvider theme={isDarkMode ? MD3DarkTheme : MD3LightTheme}>
      <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home">
            {(props) => <HomeScreen {...props} toggleTheme={() => setIsDarkMode(!isDarkMode)} isDarkMode={isDarkMode} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
