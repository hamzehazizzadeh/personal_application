import React from "react";
import { StyleSheet, View } from "react-native";
import ProgressBar from "../../utils/ProgressBar/ProgressBar";

import ResponsiveText from './../../utils/ResponsiveText/ResponsiveText';

const Skills = () => {
  return (
    <View style={styles.container}>
      <ResponsiveText fontSize={4} style={styles.title}>
        مهارت های حرفه ای
      </ResponsiveText>
      <View>
        <ProgressBar name="Java Script" width="89" />
        <ProgressBar name="React JS" width="86" />
        <ProgressBar name="React Native" width="79" />
        <ProgressBar name="Node JS" width="68" />
        <ProgressBar name="Redux" width="79" />
        <ProgressBar name="MDBootstrap" width="89" />
        <ProgressBar name="Jquery" width="86" />
        <ProgressBar name="Jquery UI" width="74" />
        <ProgressBar name="Web Pack" width="78" />
        <ProgressBar name="Jest" width="72" />
        <ProgressBar name="Unit Testing" width="79" />
        <ProgressBar name="TDD" width="79" />
        <ProgressBar name="BDD" width="79" />
        <ProgressBar name="Electron Js" width="77" />
        <ProgressBar name="Type Script" width="79" />
        <ProgressBar name="HTML 5 & CSS 3" width="94" />
        <ProgressBar name="Bootstrap" width="92" />
        <ProgressBar name="SASS" width="72" />
        <ProgressBar name="Git" width="83" />
        <ProgressBar name="PWA" width="82" />
        <ProgressBar name="SEO" width="87" />
        <ProgressBar name="Kendo UI" width="69" />
      </View>
    </View>
  );
};

export default Skills;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    marginVertical: 35,
    paddingHorizontal: 20,
  },
  title: {
    textAlign: "center",
    marginTop: 15,
    marginBottom: 40,
  },
});
