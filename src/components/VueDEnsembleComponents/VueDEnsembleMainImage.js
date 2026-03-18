import React from "react";
import { View, Image, StyleSheet, useWindowDimensions } from "react-native";

import accidentBackground from "../../../assets/mahimage/bg.png";

export default function VueDEnsembleMainImage() {
  const { width } = useWindowDimensions();
  const isSmall = width < 380;

  return (
    <View style={styles.wrapper}>
      <Image
        source={accidentBackground}
        style={[
          styles.image,
          {
            height: isSmall ? 195 : 245,
          },
        ]}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    marginTop: 12,
  },

  image: {
    width: "100%",
  },
});