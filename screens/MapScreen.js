import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import NavigateCard from "../components/NavigateCard";
import Map from "../components/Map";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RideOptionsCard from "../components/RideOptionsCard";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function MapScreen() {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation()

  return (
    <View>

    <TouchableOpacity onPress={()=>navigation.navigate("HomeScreen")} className='absolute top-12 left-6 z-50 bg-gray-100 p-3 rounded-full shadow-lg'>
      <Icon name='menu' />
    </TouchableOpacity>

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
