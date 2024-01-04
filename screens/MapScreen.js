import { View, Text } from "react-native";
import React from "react";
import Map from "../components/Map";

export default function MapScreen() {
  return (
    <View className='h-full'>
      <View className="h-1/2 flex-1">
        <Map />
      </View>
      <View className="h-1/2"></View>
    </View>
  );
}
