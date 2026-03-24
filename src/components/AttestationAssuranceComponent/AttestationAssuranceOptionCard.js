import React from "react";
import { View, Text, Image } from "react-native";

export default function AttestationAssuranceOptionCard() {
  const styles = {
    card: {
      width: "100%",
      backgroundColor: "rgba(255,255,255,0.32)",
      borderRadius: 18,
      paddingTop: 14,
      paddingBottom: 14,
      paddingHorizontal: 12,
      marginTop: 8,
      marginBottom: 12,
      borderWidth: 1,
      borderColor: "rgba(255,255,255,0.35)",
    },
    title: {
      textAlign: "center",
      fontSize: 15,
      color: "#3a3a3a",
      fontWeight: "500",
      marginBottom: 12,
    },
    imageWrapper: {
      width: "100%",
      height: 175,
      borderRadius: 14,
      backgroundColor: "rgba(255,255,255,0.20)",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 10,
    },
    image: {
      width: 300,
      height: 400,
      resizeMode: "contain",
    },
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Exemple d’attestation d’assurance</Text>

      <View style={styles.imageWrapper}>
        <Image
          source={require("../../../assets/mahimage/attestation-assurance.png")}
          style={styles.image}
        />
      </View>
    </View>
  );
}