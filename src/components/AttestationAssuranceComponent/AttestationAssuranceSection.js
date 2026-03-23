import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function AttestationAssuranceSection() {
  const styles = {
    container: {
      marginTop: 0,
      paddingHorizontal: 8,
    },
    checkRow: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginBottom: 8,
    },
    checkIcon: {
      fontSize: 20,
      color: "#28a745",
      marginRight: 10,
      lineHeight: 22,
      fontWeight: "700",
    },
    checkText: {
      flex: 1,
      fontSize: 14,
      color: "#2f2f2f",
      lineHeight: 21,
    },
    button: {
      marginTop: 12,
      height: 50,
      borderRadius: 14,
      backgroundColor: "#4f6ff3",
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 4,
    },
    buttonText: {
      color: "#ffffff",
      fontSize: 17,
      fontWeight: "600",
    },
    skipText: {
      textAlign: "center",
      marginTop: 14,
      fontSize: 15,
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
        <Text style={styles.checkText}>
          Vérifiez que les informations sont lisibles
        </Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>📷 Prendre en photo</Text>
      </TouchableOpacity>

      <Text style={styles.skipText}>Continuer sans ce document</Text>
    </View>
  );
}