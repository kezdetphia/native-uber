import { View, Text } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { selectOrigin } from "../slices/navSlice";
import { useSelector } from "react-redux";

export default function Map() {
  const origin = useSelector(selectOrigin);
  return (
    <MapView
      mapType="mutedStandard"
      className="flex-1"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}
    </MapView>
  );
}
