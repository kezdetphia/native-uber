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
  const travelTImeInformation = useSelector(selectTravelTimeInformation)

  return (
    <SafeAreaView className="bg-white flex-grow">
      <View className="flex flex-row items-center p-4 ">
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          className=" "
        >
          <Icon name="chevron-left" type="fontawesome " />
        </TouchableOpacity>
        <View className="flex-1 justify-center items-center">
          <Text className="text-center text-xl">Select a Ride - {travelTImeInformation?.distance?.text}</Text>
        </View>
      </View>
      <ScrollView>

      <FlatList
        data={data}
        keyExtractor={(item)=> item.id}
        renderItem={({ item: {id,title,multiplier,image}, item }) => (
          <TouchableOpacity
          onPress={() => setSelected(item)}
          className={`flex-row items-center py-auto justify-between px-3 ${id === selected?.id && 'bg-gray-200'} `}
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
              <Text>{travelTImeInformation?.duration?.text} Travel Time</Text>
            </View>
            <Text className="text-xl">
              {new Intl.NumberFormat('en-us',{
                style: 'currency',
                currency:'USD'
              }).format(
                (travelTImeInformation?.duration?.value * SURGE_CHARGE_RATE * multiplier) / 100 
                )
              }
            </Text>
          </TouchableOpacity>
        )}
        />
        </ScrollView>
      <View className='mt-auto border-t border-gray-200'>
        <TouchableOpacity disabled={!selected} className={`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}` }>
          <Text className='text-center text-white text-xl'>Choose {selected?.title ? selected.title : 'a car'}  </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
