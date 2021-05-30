import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import MaterialComunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import categoriesData from "../assets/data/categoriesData";
import popularData from "../assets/data/popularData";
import colors from "../assets/colors/colors";

Feather.loadFont();

export default function Home() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <Image
            source={require("../assets/images/profile.png")}
            style={styles.profileImage}
          />
          <Feather name="menu" size={24} color={colors.textDark} />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
});
