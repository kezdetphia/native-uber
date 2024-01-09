import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";

const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",
    title: "Uber Lux",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const SURGE_CHARGE_RATE = 1.5

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  const renderItem = ({ item }) => {
    const { id, title, multiplier, image } = item;
    const selectedClass = id === selected?.id ? "bg-gray-200" : "";

    return (
      <TouchableOpacity
        onPress={() => setSelected(item)}
        className={`flex-row items-center py-2 px-4 justify-between ${selectedClass}`}
      >
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{ uri: image }}
        />
        <View className="-ml-6">
          <Text className="text-lg font-semibold">{title}</Text>
          <Text>{travelTimeInformation?.duration?.text} Travel Time</Text>
        </View>
        <Text className="text-xl">
          {new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD",
          }).format(
            (travelTimeInformation?.duration?.value *
              SURGE_CHARGE_RATE *
              multiplier) /
              100
          )}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center p-4">
        <TouchableOpacity onPress={() => navigation.navigate("NavigateCard")}>
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <View className="flex-1 justify-center items-center">
          <Text className="text-xl">
            Select a Ride - {travelTimeInformation?.distance?.text}
          </Text>
        </View>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      <View className="border-t border-gray-200">
        <TouchableOpacity
          disabled={!selected}
          className={`py-3 m-3 ${!selected && "bg-gray-300"} bg-black`}
        >
          <Text className="text-center text-white text-xl">
            Choose {selected?.title ? selected.title : "a car"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;