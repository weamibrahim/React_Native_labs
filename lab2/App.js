import { StatusBar } from "expo-status-bar";
import { useCallback, useState } from "react";
import { FlatList
  , SafeAreaView
  , Text
 } from "react-native";
import styles from "./styles";
import Box from "./components/Box";

export default function App() {
  const COLORS = [
    { colorName: "Cyan", hexCode: "#2aa198" },
    {colorName:"Blue",hexCode:"#268bd2"},
    { colorName: "Magenta", hexCode: "#d33682" },
    { colorName: "Orange", hexCode: "#cb4b16" },
    { colorName: "Green", hexCode: "#859900" },
    { colorName: "Yellow", hexCode: "#b58900" },
    { colorName: "Cyan", hexCode: "#2aa198" },
    {colorName:"Blue",hexCode:"#268bd2"},
    { colorName: "Magenta", hexCode: "#d33682" },
    { colorName: "Orange", hexCode: "#cb4b16" },
    { colorName: "Green", hexCode: "#859900" },
    { colorName: "Yellow", hexCode: "#b58900" },
    { colorName: "Cyan", hexCode: "#2aa198" },
    {colorName:"Blue",hexCode:"#268bd2"},
    { colorName: "Magenta", hexCode: "#d33682" },
    { colorName: "Orange", hexCode: "#cb4b16" },
    { colorName: "Green", hexCode: "#859900" },
    { colorName: "Yellow", hexCode: "#b58900" },
    { colorName: "Cyan", hexCode: "#2aa198" },
    {colorName:"Blue",hexCode:"#268bd2"},
    { colorName: "Magenta", hexCode: "#d33682" },
    { colorName: "Orange", hexCode: "#cb4b16" },
    { colorName: "Green", hexCode: "#859900" },
    { colorName: "Yellow", hexCode: "#b58900" },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={COLORS}
        renderItem={(props) => (
          <Box
            colorName={props.item.colorName}
            hexCode={props.item.hexCode}
          ></Box>
        )}
        keyExtractor={(props) => props.hexCode}
        ListHeaderComponent={
          <Text style={styles.header}>
            Here are some boxes of different color
          </Text>
        }
        ListEmptyComponent={<Text>No Data</Text>}
      ></FlatList>
    </SafeAreaView>
  );
}