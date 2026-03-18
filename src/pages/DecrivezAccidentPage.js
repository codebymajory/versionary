import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import { AudioModule, useAudioRecorder, RecordingPresets } from "expo-audio";

import DecrivezAccidentHeader from "../components/DecrivezAccidentComponent/DecrivezAccidentHeader";
import DecrivezAccidentOptionCard from "../components/DecrivezAccidentComponent/DecrivezAccidentOptionCard";
import DecrivezAccidentActionSection from "../components/DecrivezAccidentComponent/DecrivezAccidentActionSection";

const microphoneIcon = require("../../assets/icons/mahicone/microphone_icon_crop.png");
const noteIcon = require("../../assets/icons/mahicone/note_icon_crop.jpeg");

export default function DecrivezAccidentPage({ navigation }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedUri, setRecordedUri] = useState(null);
  const [textNote, setTextNote] = useState("");

  const recorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);

  const handleSelectVoice = () => {
    setSelectedOption("voice");
  };

  const handleSelectText = async () => {
    if (isRecording) {
      try {
        await recorder.stop();
      } catch (e) {
        console.log("Erreur arrêt enregistrement :", e);
      }
      setIsRecording(false);
    }
    setSelectedOption("text");
  };

  const startRecording = async () => {
    try {
      const status = await AudioModule.requestRecordingPermissionsAsync();

      if (!status.granted) {
        alert("Permission micro refusée.");
        return;
      }

      await recorder.prepareToRecordAsync();
      recorder.record();
      setIsRecording(true);
      setRecordedUri(null);
    } catch (error) {
      console.log("Erreur démarrage enregistrement :", error);
    }
  };

  const stopRecording = async () => {
    try {
      await recorder.stop();
      setIsRecording(false);
      setRecordedUri(recorder.uri || null);
    } catch (error) {
      console.log("Erreur arrêt enregistrement :", error);
    }
  };

  const discardRecording = () => {
    setRecordedUri(null);
    setIsRecording(false);
  };

  const handleContinue = () => {
    if (!selectedOption) return;

    if (selectedOption === "voice") {
      console.log("Option choisie : message vocal");
      console.log("Audio temporaire :", recordedUri);
    }

    if (selectedOption === "text") {
      console.log("Option choisie : texte");
      console.log("Note temporaire :", textNote);
    }
  };

  const handleBack = async () => {
    if (isRecording) {
      try {
        await recorder.stop();
      } catch (e) {
        console.log("Erreur arrêt enregistrement :", e);
      }
    }

    if (navigation && navigation.goBack) {
      navigation.goBack();
      return;
    }

    console.log("Retour");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F1FB" />

      <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleBack}
            style={styles.backArrowButton}
          >
            <Text style={styles.backArrow}>‹</Text>
          </TouchableOpacity>
        </View>

        <DecrivezAccidentHeader />

        <View style={styles.optionsRow}>
          <DecrivezAccidentOptionCard
            label="Par message vocal"
            icon={microphoneIcon}
            selected={selectedOption === "voice"}
            onPress={handleSelectVoice}
          />

          <DecrivezAccidentOptionCard
            label="Par texte"
            icon={noteIcon}
            selected={selectedOption === "text"}
            onPress={handleSelectText}
          />
        </View>

        {selectedOption === "voice" && (
          <View style={styles.recorderBox}>
            <Text style={styles.sectionTitle}>Enregistrement vocal</Text>

            {!isRecording ? (
              <TouchableOpacity style={styles.recordBtn} onPress={startRecording}>
                <Text style={styles.recordBtnText}>Démarrer l'enregistrement</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.stopBtn} onPress={stopRecording}>
                <Text style={styles.recordBtnText}>Arrêter l'enregistrement</Text>
              </TouchableOpacity>
            )}

            {isRecording && (
              <Text style={styles.recordingStatus}>Enregistrement en cours...</Text>
            )}

            {recordedUri && !isRecording && (
              <View style={styles.previewBox}>
                <Text style={styles.previewText}>
                  Message vocal enregistré temporairement.
                </Text>
                <TouchableOpacity
                  style={styles.secondaryBtn}
                  onPress={discardRecording}
                >
                  <Text style={styles.secondaryBtnText}>Supprimer</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}

        {selectedOption === "text" && (
          <View style={styles.noteBox}>
            <Text style={styles.sectionTitle}>Décrivez l'accident</Text>

            <TextInput
              style={styles.noteInput}
              placeholder="Tapez votre message ici..."
              placeholderTextColor="#8D93B8"
              multiline
              value={textNote}
              onChangeText={setTextNote}
              textAlignVertical="top"
            />

            <TouchableOpacity
              style={styles.secondaryBtn}
              onPress={() => setTextNote("")}
            >
              <Text style={styles.secondaryBtnText}>Effacer</Text>
            </TouchableOpacity>
          </View>
        )}

        <DecrivezAccidentActionSection
          onContinue={handleContinue}
          onBack={handleBack}
          disabled={
            !selectedOption ||
            (selectedOption === "text" && !textNote.trim()) ||
            (selectedOption === "voice" && !isRecording && !recordedUri)
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F1FB",
  },

  container: {
    flex: 1,
    backgroundColor: "#F5F1FB",
    paddingHorizontal: 22,
    paddingTop: 8,
  },

  topBar: {
    width: "100%",
    alignItems: "flex-start",
    marginBottom: 10,
  },

  backArrowButton: {
    paddingVertical: 4,
    paddingRight: 12,
    paddingLeft: 2,
  },

  backArrow: {
    fontSize: 28,
    color: "#5A62A8",
    fontWeight: "400",
    lineHeight: 28,
  },

  optionsRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    marginBottom: 20,
  },

  recorderBox: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#D9E1FF",
    marginBottom: 20,
  },

  noteBox: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#D9E1FF",
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2E2F3A",
    marginBottom: 12,
  },

  noteInput: {
    minHeight: 140,
    borderWidth: 1,
    borderColor: "#DCE3FF",
    borderRadius: 12,
    backgroundColor: "#F9FAFF",
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: "#2E2F3A",
  },

  recordBtn: {
    backgroundColor: "#5A62A8",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  stopBtn: {
    backgroundColor: "#D9534F",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  recordBtnText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },

  recordingStatus: {
    marginTop: 12,
    color: "#D9534F",
    fontSize: 14,
    fontWeight: "500",
  },

  previewBox: {
    marginTop: 14,
    padding: 12,
    backgroundColor: "#F6F8FF",
    borderRadius: 12,
  },

  previewText: {
    color: "#2E2F3A",
    fontSize: 14,
    marginBottom: 10,
  },

  secondaryBtn: {
    alignSelf: "flex-start",
    marginTop: 12,
    backgroundColor: "#E8ECFF",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
  },

  secondaryBtnText: {
    color: "#33418A",
    fontWeight: "600",
  },
});