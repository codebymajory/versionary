import React from "react";
import { View, Image, StyleSheet, useWindowDimensions } from "react-native";

import focusPreviewImage from "../../../assets/mahimage/fcs.jpeg";

export default function VueDEnsembleFocusImage() {
  const { width } = useWindowDimensions();
  const isSmall = width < 380;

  const frameHeight = isSmall ? 125 : 150;
  const pinSize = isSmall ? 48 : 58;
  const pinInner = isSmall ? 18 : 22;

  return (
    <View style={styles.wrapper}>
      <View
        style={[
          styles.pinWrapper,
          {
            width: pinSize,
            height: pinSize + 10,
            top: isSmall ? -24 : -30,
          },
        ]}
      >
        <View
          style={[
            styles.pinHead,
            {
              width: pinSize,
              height: pinSize,
              borderRadius: pinSize / 2,
            },
          ]}
        >
          <View
            style={[
              styles.pinInnerCircle,
              {
                width: pinInner,
                height: pinInner,
                borderRadius: pinInner / 2,
              },
            ]}
          />
        </View>
        <View style={styles.pinTail} />
      </View>

      <View
        style={[
          styles.frame,
          {
            width: "88%",
            height: frameHeight,
            borderRadius: isSmall ? 18 : 22,
          },
        ]}
      >
        <Image
          source={focusPreviewImage}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 34,
    position: "relative",
  },

  frame: {
    overflow: "hidden",
    borderWidth: 4,
    borderColor: "#FFFFFF",
    borderStyle: "dashed",
    backgroundColor: "rgba(255,255,255,0.08)",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  pinWrapper: {
    position: "absolute",
    zIndex: 10,
    alignItems: "center",
  },

  pinHead: {
    backgroundColor: "#2F74E7",
    borderWidth: 6,
    borderColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  pinInnerCircle: {
    backgroundColor: "#FFFFFF",
  },

  pinTail: {
    width: 0,
    height: 0,
    borderLeftWidth: 14,
    borderRightWidth: 14,
    borderTopWidth: 22,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "#2F74E7",
    marginTop: -4,
  },
});