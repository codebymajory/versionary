import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar,
  ImageBackground,
  useWindowDimensions,
} from "react-native";


import VueDEnsembleInstructionCard from "../components/VueDEnsembleComponents/VueDEnsembleInstructionCard";
import VueDEnsembleFocusImage from "../components/VueDEnsembleComponents/VueDEnsembleFocusImage";
import VueDEnsembleActionSection from "../components/VueDEnsembleComponents/VueDEnsembleActionSection";

import lowerBackground from "../../assets/mahimage/bg.png";

export default function VueDEnsembleScreen() {
  const { height, width } = useWindowDimensions();
  const isSmall = width < 380;

  const headerBlockHeight = isSmall ? 150 : 175;
  const instructionBlockHeight = isSmall ? 95 : 110;
  const topSpacing = isSmall ? 34 : 42;

  const backgroundHeight =
    height - headerBlockHeight - instructionBlockHeight - topSpacing;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#EAE7E4" />

      <View style={styles.container}>
        <VueDEnsembleHeader />
        <VueDEnsembleInstructionCard />

        <ImageBackground
          source={lowerBackground}
          resizeMode="cover"
          style={[
            styles.lowerBackgroundSection,
            {
              minHeight: backgroundHeight,
            },
          ]}
          imageStyle={styles.lowerBackgroundImage}
        >
          <VueDEnsembleFocusImage />
          <VueDEnsembleActionSection />
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#EAE7E4",
  },

  container: {
    flex: 1,
    backgroundColor: "#EAE7E4",
    paddingHorizontal: 16,
    paddingTop: 8,
  },

  lowerBackgroundSection: {
    width: "100%",
    marginTop: 12,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 26,
    paddingBottom: 28,
    overflow: "hidden",
  },

  lowerBackgroundImage: {
    width: "100%",
    height: "100%",
  },
});n