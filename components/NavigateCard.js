import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import NavFavourites from "./NavFavourites";
import { Icon } from "react-native-elements";

export default function NavigateCard() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View className="bg-white flex-1">
      <Text className="text-center pb-5 pt-3  text-xl">Good Morning, Mark</Text>
      <View className=" flex-shrink">
        <View>
          <GooglePlacesAutocomplete
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );

              navigation.navigate("RideOptionsCard");
            }}
            styles={toInputBoxStyles}
            fetchDetails={true}
            returnKeyType={"search"}
            placeholder="Where to?"
            enablePoweredByContainer={false}
            debounce={400}
            nearbyPlacesAPI="GooglePlacesSearch"
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
            }}
          />
        </View>
        <NavFavourites />
      </View>
      <View className="flex-row bg-white justify-evenly pt-2 my-auto border-t border-gray-100">
        <TouchableOpacity onPress={()=> navigation.navigate("RideOptionsCard")} className="flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full">
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text className="text-white text-center ">Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex flex-row justify-between  w-24 px-4 py-3 rounded-full">
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="black"
            size={16}
          />
          <Text className=" text-center ">Rides</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
