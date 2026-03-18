import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

export default function VueDEnsembleHeader() {
  const { width } = useWindowDimensions();
  const isSmall = width < 380;

  const activeDotWidth = isSmall ? 24 : 28;
  const inactiveDotWidth = isSmall ? 10 : 12;
  const dotHeight = isSmall ? 6 : 7;
  const badgeFontSize = isSmall ? 14 : 15;
  const titleFontSize = isSmall ? 24 : 27;

  return (
    <View style={styles.wrapper}>
      <View style={styles.progressRow}>
        <View
          style={[
            styles.progressDot,
            styles.progressDotActive,
            { width: activeDotWidth, height: dotHeight },
          ]}
        />
        <View
          style={[
            styles.progressDot,
            styles.progressDotActive,
            { width: activeDotWidth, height: dotHeight },
          ]}
        />
        <View
          style={[
            styles.progressDot,
            styles.progressDotActive,
            { width: activeDotWidth, height: dotHeight },
          ]}
        />
        <View
          style={[
            styles.progressDot,
            styles.progressDotInactive,
            { width: inactiveDotWidth, height: dotHeight },
          ]}
        />
        <View
          style={[
            styles.progressDot,
            styles.progressDotInactive,
            { width: inactiveDotWidth, height: dotHeight },
          ]}
        />
        <View
          style={[
            styles.progressDot,
            styles.progressDotInactive,
            { width: inactiveDotWidth, height: dotHeight },
          ]}
        />
      </View>

      <View style={styles.titleCard}>
        <View style={styles.titleRow}>
          <View style={styles.stepBadge}>
            <Text style={[styles.stepBadgeText, { fontSize: badgeFontSize }]}>
              1 sur 7
            </Text>
          </View>

          <Text
            style={[
              styles.title,
              {
                fontSize: titleFontSize,
                lineHeight: isSmall ? 30 : 34,
              },
            ]}
          >
            Vue d&apos;ensemble
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    marginTop: 4,
  },

  progressRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    marginBottom: 14,
  },

  progressDot: {
    borderRadius: 999,
  },

  progressDotActive: {
    backgroundColor: "#2450FF",
  },

  progressDotInactive: {
    backgroundColor: "#D5D5D5",
  },

  titleCard: {
    width: "100%",
    backgroundColor: "#F8F8F8",
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },

  titleRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  stepBadge: {
    backgroundColor: "#3A7BEA",
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginRight: 12,
  },

  stepBadgeText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },

  title: {
    color: "#171717",
    fontWeight: "600",
    flexShrink: 1,
  },
});