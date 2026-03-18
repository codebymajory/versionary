import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";

export default function DecrivezAccidentOptionCard({
  label,
  icon,
  selected,
  onPress,
}) {
  const { width } = useWindowDimensions();
  const isSmall = width < 380;

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={[
        styles.card,
        {
          width: isSmall ? 132 : 145,
          minHeight: isSmall ? 118 : 126,
        },
        selected && styles.cardSelected,
      ]}
    >
      <View style={styles.iconWrap}>
        <Image
          source={icon}
          style={[
            styles.icon,
            {
              width: isSmall ? 150 : 100,
              height: isSmall ? 150 : 100,
            },
          ]}
          resizeMode="contain"
        />
      </View>

      <Text
        style={[
          styles.label,
          { fontSize: isSmall ? 13 : 14 },
          selected && styles.labelSelected,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(255,255,255,0.68)",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 14,
    paddingVertical: 18,
    borderWidth: 1.2,
    borderColor: "rgba(126, 154, 255, 0.18)",
  },

  cardSelected: {
    borderColor: "#5F8CFF",
    backgroundColor: "rgba(255,255,255,0.9)",
    shadowColor: "#5F8CFF",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 3,
  },

  iconWrap: {
    marginBottom: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {},

  label: {
    color: "#2E2F3A",
    fontWeight: "400",
    textAlign: "center",
  },

  labelSelected: {
    color: "#1E2F7A",
    fontWeight: "500",
  },
});