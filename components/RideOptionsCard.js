import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
  id: 'Uber-X-123',
  title: 'UberX',
  multiplier:1,
  image: 'https://links.papareact.com/3pn'
},
  {
  id: 'Uber-XL-456',
  title: 'Uber XL',
  multiplier:1.2,
  image: 'https://links.papareact.com/5w8'
},
  {
  id: 'Uber-LUX-789',
  title: 'UberX',
  multiplier:1.75,
  image: 'https://links.papareact.com/7pf'
},
]

const RideOptionsCard = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-white flex-grow">
      <View className="flex flex-row items-center p-4 ">
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          className=" "
        >
          <Icon name="chevron-left" type="fontawesome " />
        </TouchableOpacity>
        <View className='flex-1 justify-center items-center' >
          <Text className="text-center text-xl">Select a Ride</Text>
        </View>
      </View>
      <FlatList 
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item})=>(
        <TouchableOpacity className='flex-row items-center justify-between px-10'>
          <Image
            style={{
              width:100,
              height:100,
              resideMode:'contain'
            }}
            source={{uri: item.image}}
          />
          <View className='-ml-6'>
            <Text className='text-lg font-semibold' >{item.title}</Text>
            <Text>Travel time..</Text>
          </View>
          <Text className='text-xl' >$99</Text>


        </TouchableOpacity>
      )}

      />
    </SafeAreaView>
  );
};

export default RideOptionsCard;
