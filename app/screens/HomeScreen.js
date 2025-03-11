import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { tailwind } from "../tailwind";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={tailwind("flex-1 bg-white p-5")}>
      {/* Header */}
      <View style={tailwind("flex-row justify-between items-center")}>
        <Text style={tailwind("text-xl font-bold")}>Hello 👋</Text>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/women/1.jpg" }}
          style={tailwind("w-10 h-10 rounded-full")}
        />
      </View>

      {/* Các thẻ chức năng */}
      <View style={tailwind("mt-5")}>
        <TouchableOpacity
          style={tailwind("bg-blue-500 p-4 rounded-xl mb-3")}
          onPress={() => navigation.navigate("Scan")}
        >
          <Text style={tailwind("text-white text-center text-lg")}>📷 Scan New</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tailwind("bg-red-500 p-4 rounded-xl")}>
          <Text style={tailwind("text-white text-center text-lg")}>⚠️ Counterfeits</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
