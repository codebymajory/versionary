import React from "react";
import { View, Text, Image } from "react-native";

export default function CarteRoseOptionCard() {
  const styles = {
    card: {
      width: "100%",
      backgroundColor: "rgba(255,255,255,0.28)",
      borderRadius: 22,
      paddingTop: 18,
      paddingBottom: 20,
      paddingHorizontal: 16,
      marginTop: 8,
      marginBottom: 18,
    },
    title: {
      textAlign: "center",
      fontSize: 18,
      color: "#1e1e1e",
      fontWeight: "500",
      marginBottom: 16,
    },
    imageWrapper: {
      width: "100%",
      minHeight: 430,
      borderRadius: 18,
      backgroundColor: "rgba(255,255,255,0.22)",
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 20,
      paddingHorizontal: 10,
    },
    image: {
      width: 300,
      height: 380,
      resizeMode: "contain",
    },
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Exemple illustratif</Text>

      <View style={styles.imageWrapper}>
        <Image
          source={require("../../../assets/mahimage/carte-rose.png")}
          style={styles.image}
        />
      </View>
    </View>
  );
}