import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function AttestationAssuranceHeader() {
  const styles = {
    container: {
      marginBottom: 12,
    },
    backRow: {
      marginBottom: 2,
    },
    backButton: {
      width: 28,
      height: 28,
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 2,
    },
    backText: {
      fontSize: 28,
      lineHeight: 28,
      color: "#4b63c3",
      fontWeight: "400",
    },
    title: {
      textAlign: "center",
      fontSize: 20,
      fontWeight: "500",
      color: "#2b2b2b",
      marginBottom: 18,
      marginTop: -8,
    },
    subtitle: {
      textAlign: "center",
      fontSize: 16,
      fontWeight: "700",
      color: "#242424",
      lineHeight: 22,
      marginBottom: 8,
    },
    description: {
      textAlign: "center",
      fontSize: 14,
      color: "#7f7888",
      lineHeight: 20,
      paddingHorizontal: 18,
    },
  };

  return (
    <View style={styles.container}>
      <View style={styles.backRow}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backText}>‹</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Attestation d’assurance</Text>
      <Text style={styles.subtitle}>Prenez en photo ce document</Text>
      <Text style={styles.description}>
        C’est le document d’assurance du véhicule, comme dans l’exemple ci-dessous.
      </Text>
    </View>
  );
}