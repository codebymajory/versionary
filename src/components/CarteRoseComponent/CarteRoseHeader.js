import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function CarteRoseHeader() {
  const styles = {
    container: {
      marginBottom: 18,
    },
    backRow: {
      marginBottom: 10,
    },
    backButton: {
      width: 34,
      height: 34,
      justifyContent: "center",
      alignItems: "center",
    },
    backText: {
      fontSize: 34,
      color: "#3657b7",
      lineHeight: 34,
      fontWeight: "300",
    },
    title: {
      textAlign: "center",
      fontSize: 26,
      fontWeight: "500",
      color: "#1f1f1f",
      marginBottom: 18,
      letterSpacing: 0.3,
    },
    subtitle: {
      textAlign: "center",
      fontSize: 18,
      color: "#242424",
      lineHeight: 28,
      marginBottom: 10,
      fontWeight: "400",
    },
    subtext: {
      fontSize: 18,
      color: "#3a3a3a",
      lineHeight: 28,
      textAlign: "left",
      marginTop: 8,
      marginBottom: 8,
      paddingHorizontal: 6,
    },
  };

  return (
    <View style={styles.container}>
      <View style={styles.backRow}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backText}>‹</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Carte Rose</Text>
      <Text style={styles.subtitle}>Prenez en photo ce document</Text>
      <Text style={styles.subtext}>
        C’est la carte grise du véhicule, comme dans l’exemple ci-dessous.
      </Text>
    </View>
  );
}