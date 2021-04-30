import React from "react";
import { StyleSheet, View } from "react-native";

import ResponsiveText from "../ResponsiveText/ResponsiveText";

const ProgressBar = ({ width = "0", name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.progressDetails}>
        <ResponsiveText fontSize={1.7}>{name}</ResponsiveText>
        <ResponsiveText fontSize={1.7}>{width}%</ResponsiveText>
      </View>
      <View style={styles.progress}>
        <View
          style={{
            backgroundColor: "#0bceaf",
            borderRadius: 10,
            width: `${width}%`,
            height: 7,
          }}
        ></View>
      </View>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  progress: {
    backgroundColor: "#737276",
    width: "100%",
    height: 7,
    borderRadius: 10,
  },
  progressDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
});
