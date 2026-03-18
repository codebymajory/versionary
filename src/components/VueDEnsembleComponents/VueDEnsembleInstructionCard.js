import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

export default function VueDEnsembleInstructionCard() {
  const { width } = useWindowDimensions();
  const isSmall = width < 380;
  const textSize = isSmall ? 17 : 20;

  return (
    <View style={styles.card}>
      <Text
        style={[
          styles.text,
          {
            fontSize: textSize,
            lineHeight: isSmall ? 24 : 30,
          },
        ]}
      >
        Photographiez les deux véhicules{"\n"}dans la scène.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 18,
    marginTop: 12,
  },

  text: {
    color: "#111111",
    fontWeight: "500",
    textAlign: "center",
  },
});