import React from "react";
import { StyleSheet, View } from "react-native";

import ResponsiveText from "../../utils/ResponsiveText/ResponsiveText";
import CircleProgressBar from "../../utils/CircleProgressBar/CircleProgressBar";

const PersonalSkills = () => {
  return (
    <View style={styles.container}>
      <ResponsiveText fontSize={4} style={styles.title}>
        مهارت های شخصی
      </ResponsiveText>
      <View>
        <View style={styles.skill}>
          <CircleProgressBar name="ارتباطات" width={95} />
          <CircleProgressBar name="کار گروهی" width={86} />
        </View>
        <View style={styles.skill}>
          <CircleProgressBar name="مدیریت پروژه" width={84} />
          <CircleProgressBar name="خلاقیت" width={89} />
        </View>
      </View>
    </View>
  );
};

export default PersonalSkills;

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
  skill: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 20,
  },
});
