import React from "react";
import { View, Text } from "react-native";
import NavigateCard from "../components/NavigateCard";
import Map from "../components/Map";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RideOptionsCard from "../components/RideOptionsCard";


export default function MapScreen() {

  const Stack = createNativeStackNavigator();

  return (
    <View className="h-full ">
      <View className="h-1/2 ">
        <Map />
      </View>

      <View className="h-1/2 ">
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
}
