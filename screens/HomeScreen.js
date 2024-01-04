import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View className="p-5">
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />

        <GooglePlacesAutocomplete
            placeholder="Where From?"
          styles={{
            container: { flex: 0 },
            textInput:{
              fontSize:18
            }
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en'
          }}
          nearbyPlacesAPI="GooglePacesSearch"
          debounce={400}
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  );
}
