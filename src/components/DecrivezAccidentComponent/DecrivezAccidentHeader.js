import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

export default function DecrivezAccidentHeader() {
  const { width } = useWindowDimensions();
  const isSmall = width < 380;

  return (
    <View style={styles.wrapper}>
      <Text
        style={[
          styles.title,
          { fontSize: isSmall ? 28 : 31, lineHeight: isSmall ? 34 : 37 },
        ]}
      >
        Décrivez l'accident
      </Text>

      <Text
        style={[
          styles.subtitle,
          { fontSize: isSmall ? 13 : 14, lineHeight: isSmall ? 18 : 20 },
        ]}
      >
        Expliquez en quelques mots ce qu'il s'est passé.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    alignItems: "center",
    marginTop: 18,
    marginBottom: 28,
    paddingHorizontal: 16,
  },

  title: {
    fontWeight: "600",
    color: "#1E1E2D",
    textAlign: "center",
    marginBottom: 8,
    letterSpacing: -0.3,
  },

  subtitle: {
    fontWeight: "400",
    color: "#5A5B6A",
    textAlign: "center",
  },
});