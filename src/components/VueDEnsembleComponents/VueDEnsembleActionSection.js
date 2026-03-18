import React from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

import cameraButton from "../../../assets/icons/mahicone/camera-button.png";

export default function VueDEnsembleActionSection() {
  const { width } = useWindowDimensions();
  const isSmall = width < 380;

  const cameraSize = isSmall ? 76 : 92;
  const buttonWidth = isSmall ? 120 : 140;
  const buttonHeight = isSmall ? 42 : 50;
  const textSize = isSmall ? 17 : 19;

  const handleCameraClick = () => {
    console.log("Open camera here");
  };

  const handleContinueClick = () => {
    console.log("Continue to next step");
  };

  return (
    <View style={styles.actionSection}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.cameraBtn}
        onPress={handleCameraClick}
      >
        <Image
          source={cameraButton}
          style={{ width: cameraSize, height: cameraSize }}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={1}
        style={[
          styles.continueBtn,
          {
            width: buttonWidth,
            height: buttonHeight,
          },
        ]}
        onPress={handleContinueClick}
        disabled
      >
        <Text style={[styles.continueText, { fontSize: textSize }]}>
          Continuer
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  actionSection: {
    width: "100%",
    paddingHorizontal: 26,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },

  cameraBtn: {
    justifyContent: "center",
    alignItems: "center",
  },

  continueBtn: {
    backgroundColor: "rgba(245,245,245,0.92)",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  continueText: {
    color: "#A8A8A8",
    fontWeight: "500",
  },
});