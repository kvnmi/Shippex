import AppScreen from "@/components/AppScreen";
import {
  fontPixel,
  heightPixel,
  normalise,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from "@/config/normalize";
import React, { useState } from "react";
import { View, StyleSheet, Pressable, Image, FlatList } from "react-native";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import colors from "@/config/colors";
import AppText from "@/components/AppText";
import AppTextInput from "@/components/AppTextInput";
import Checkbox from "@/components/AppCheckBox";
import HomeCard from "@/components/HomeCard";

function Home({}) {
  const data: { status: "recieved" | "cancelled" }[] = [
    { status: "recieved" },
    { status: "cancelled" },
    { status: "cancelled" },
    { status: "cancelled" },
    { status: "cancelled" },
    { status: "cancelled" },
  ];

  const [indexes, setIndexes] = useState<number[]>([]);

  const selectAll = () => setIndexes(data.map((_, index) => index));
  const removeAll = () => setIndexes([]);
  const allSelected = data.length == indexes.length;

  return (
    <AppScreen scrollable>
      <View style={styles.container}>
        <View style={styles.headerCtn}>
          <Pressable style={styles.imgCtn}>
            <Image
              source={require("../../assets/images/profile.png")}
              style={styles.img}
            />
          </Pressable>
          <Image
            source={require("../../assets/images/logo-blue.png")}
            style={styles.logo}
          />

          <Ionicons
            name="notifications-outline"
            color={colors.primary}
            size={32}
          />
        </View>

        <AppText style={styles.header}>Hello,</AppText>
        <AppText style={styles.tagline}>Ibrahim Shaker</AppText>

        <AppTextInput
          placeholder="Search"
          viewStyle={styles.search}
          PlaceHolderIcon={
            <AntDesign name={"search1"} color={"#A7A3B3"} size={20} />
          }
        />

        <View style={styles.navCtn}>
          <Pressable style={styles.nav}>
            <Ionicons name="filter" color="#58536E" size={20} />
            <AppText style={styles.filter}>Filters</AppText>
          </Pressable>
          <Pressable style={[styles.nav, { backgroundColor: colors.primary }]}>
            <MaterialCommunityIcons name="line-scan" color="#fff" size={20} />
            <AppText style={[styles.filter, { color: "#fff" }]}>
              Add Scan
            </AppText>
          </Pressable>
        </View>

        <View style={styles.shipmentsCtn}>
          <AppText style={styles.shipments}>Shipments</AppText>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <Checkbox
              isChecked={allSelected}
              onPress={allSelected ? removeAll : selectAll}
            />
            <AppText style={{ color: colors.primary }}>Mark All</AppText>
          </View>
        </View>

        <FlatList
          data={data}
          keyExtractor={(_, ind) => ind.toString()}
          contentContainerStyle={{
            flex: 1,
            rowGap: 8,
          }}
          renderItem={({ item, index }) => (
            <HomeCard
              status={item.status}
              active={indexes.includes(index)}
              setActive={() =>
                indexes.includes(index)
                  ? setIndexes(indexes.filter((i) => i != index))
                  : setIndexes([...indexes, index])
              }
            />
          )}
          scrollEnabled={false}
        />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: pixelSizeHorizontal(16),
    paddingBottom: 20,
  },
  headerCtn: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: pixelSizeHorizontal(12),
  },
  imgCtn: {
    height: heightPixel(40),
    width: widthPixel(40),
    borderRadius: 999,
    overflow: "hidden",
  },
  img: {
    height: heightPixel(40),
    width: widthPixel(40),
  },
  logo: {
    height: heightPixel(16),
    width: widthPixel(92.28),
  },
  header: {
    lineHeight: normalise(16.94),
    color: "#00000099",
  },
  tagline: {
    fontWeight: "600",
    fontSize: fontPixel(28),
    lineHeight: normalise(33.41),
  },
  search: {
    borderWidth: 0,
    backgroundColor: "#F4F2F8",
    marginVertical: pixelSizeVertical(15),
  },

  navCtn: { flexDirection: "row", gap: 14, marginBottom: normalise(32) },
  nav: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    flex: 1,
    backgroundColor: "#F4F2F8",
    paddingVertical: pixelSizeVertical(11),
    borderRadius: normalise(10),
  },
  filter: {
    color: "#58536E",
    fontSize: fontPixel(16),
  },
  shipments: {
    fontWeight: "600",
    fontSize: fontPixel(22),
    lineHeight: normalise(26.25),
  },
  shipmentsCtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: normalise(18),
  },
});

export default Home;
