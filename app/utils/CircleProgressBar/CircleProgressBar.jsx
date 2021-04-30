import React from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { StyleSheet, View } from "react-native";

import ResponsiveText from "../ResponsiveText/ResponsiveText";

const CircleProgressBar = ({ width = 0, name }) => {
  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        size={100}
        width={7}
        fill={width}
        tintColor="#0bceaf"
        backgroundColor="#737276"
      >
        {() => <ResponsiveText fontSize={1.7}>{width}%</ResponsiveText>}
      </AnimatedCircularProgress>
      <ResponsiveText style={styles.progressDetails} fontSize={1.7}>
        {name}
      </ResponsiveText>
    </View>
  );
};

export default CircleProgressBar;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: "center",
  },
  progressDetails: {
    marginTop: 10,
  },
});
