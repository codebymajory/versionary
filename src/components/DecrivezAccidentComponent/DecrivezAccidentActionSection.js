import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

export default function DecrivezAccidentActionSection({
  onContinue,
  onBack,
  disabled,
}) {
  const { width } = useWindowDimensions();
  const isSmall = width < 380;
  const buttonWidth = Math.min(width * 0.78, 295);

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={onContinue}
        disabled={disabled}
        style={[
          styles.continueButton,
          {
            width: buttonWidth,
            height: isSmall ? 42 : 46,
          },
          disabled && styles.continueButtonDisabled,
        ]}
      >
        <Text
          style={[
            styles.continueText,
            { fontSize: isSmall ? 15 : 16 },
            disabled && styles.continueTextDisabled,
          ]}
        >
          Continuer
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onBack}
        style={styles.backButton}
      >
        <Text style={[styles.backText, { fontSize: isSmall ? 14 : 15 }]}>
          Retour
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    alignItems: "center",
    marginTop: 52,
  },

  continueButton: {
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4C7DFF",
  },

  continueButtonDisabled: {
    backgroundColor: "#AFC2FF",
  },

  continueText: {
    color: "#FFFFFF",
    fontWeight: "500",
  },

  continueTextDisabled: {
    color: "#F8F9FF",
  },

  backButton: {
    marginTop: 14,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },

  backText: {
    color: "#4E57A8",
    fontWeight: "400",
  },
});