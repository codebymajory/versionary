import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function CarteRoseActionSection() {
  const styles = {
    container: {
      marginTop: 2,
      paddingHorizontal: 8,
    },
    checkRow: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginBottom: 12,
    },
    checkIcon: {
      fontSize: 24,
      color: "#1f9d3a",
      marginRight: 14,
      lineHeight: 26,
      fontWeight: "700",
    },
    checkText: {
      flex: 1,
      fontSize: 18,
      color: "#2d2d2d",
      lineHeight: 28,
    },
    button: {
      marginTop: 10,
      backgroundColor: "#4568f2",
      borderRadius: 18,
      height: 58,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.18,
      shadowRadius: 10,
      elevation: 5,
    },
    buttonText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "600",
      letterSpacing: 0.2,
    },
    skipText: {
      textAlign: "center",
      marginTop: 18,
      fontSize: 18,
      color: "#3558b8",
      fontWeight: "400",
    },
  };

  return (
    <View style={styles.container}>
      <View style={styles.checkRow}>
        <Text style={styles.checkIcon}>✓</Text>
        <Text style={styles.checkText}>Cadrez tout le document</Text>
      </View>

      <View style={styles.checkRow}>
        <Text style={styles.checkIcon}>✓</Text>
        <Text style={styles.checkText}>Vérifiez que les informations sont lisibles.</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>📷 Prendre en photo</Text>
      </TouchableOpacity>

      <Text style={styles.skipText}>Continuer sans ce document</Text>
    </View>
  );
}