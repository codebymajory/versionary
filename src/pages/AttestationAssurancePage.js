import React from "react";
import { View, ScrollView } from "react-native";
import AttestationAssuranceHeader from "../components/AttestationAssuranceComponent/AttestationAssuranceHeader";
import AttestationAssuranceOptionCard from "../components/AttestationAssuranceComponent/AttestationAssuranceOptionCard";
import AttestationAssuranceSection from "../components/AttestationAssuranceComponent/AttestationAssuranceSection";

export default function AttestationAssurancePage() {
  const styles = {
    page: {
      flex: 1,
      backgroundColor: "#e9dff4",
    },
    content: {
      flexGrow: 1,
      paddingTop: 14,
      paddingBottom: 24,
      paddingHorizontal: 14,
    },
    inner: {
      width: "100%",
      maxWidth: 420,
      alignSelf: "center",
    },
  };

  return (
    <View style={styles.page}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.inner}>
          <AttestationAssuranceHeader />
          <AttestationAssuranceOptionCard />
          <AttestationAssuranceSection />
        </View>
      </ScrollView>
    </View>
  );
}