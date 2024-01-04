import React from "react";

import { Image,SafeAreaView,Text,View } from "react-native";
import NavOptions from "../components/NavOptions";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View className='p-5'>

      <Image
      style={{width:100, height:100, resizeMode:'contain'}}
      source={{
        uri: "https://links.papareact.com/gzs",
      }}
      />
      <NavOptions/>
      </View>
    </SafeAreaView>
  );
}

