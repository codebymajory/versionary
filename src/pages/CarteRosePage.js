import React from "react";
import { View, ScrollView } from "react-native";
import CarteRoseHeader from "../components/CarteRoseComponent/CarteRoseHeader";
import CarteRoseOptionCard from "../components/CarteRoseComponent/CarteRoseOptionCard";
import CarteRoseActionSection from "../components/CarteRoseComponent/CarteRoseActionSection";

export default function CarteRosePage() {
  const styles = {
    page: {
      flex: 1,
      backgroundColor: "#e8ddf6",
    },
    content: {
      flexGrow: 1,
      paddingTop: 28,
      paddingBottom: 28,
      paddingHorizontal: 20,
    },
    inner: {
      width: "100%",
      maxWidth: 430,
      alignSelf: "center",
    },
  };

  return (
    <View style={styles.page}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.inner}>
          <CarteRoseHeader />
          <CarteRoseOptionCard />
          <CarteRoseActionSection />
        </View>
      </ScrollView>
    </View>
  );
}