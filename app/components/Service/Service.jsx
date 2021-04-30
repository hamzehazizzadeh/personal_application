import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

import ResponsiveText from "../../utils/ResponsiveText/ResponsiveText";

const Service = () => {
  return (
    <View style={styles.container}>
      <ResponsiveText fontSize={4} style={styles.title}>
        چه کاری انجام میدهم
      </ResponsiveText>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <MaterialCommunityIcons
            name="code-tags"
            color="#fff"
            size={35}
            color="#ed7256"
          />
          <ResponsiveText style={styles.cardTitle} fontSize={2.5}>
            برنامه نویسی وب و موبایل
          </ResponsiveText>
        </View>
        <View style={styles.cardBody}>
          <ResponsiveText
            style={styles.cardText}
            fontSize={1.7}
            color="#d2d2d4"
          >
            بیش از 2 سال است که در حوضه برنامه نویسی شروع به فعالیت کردم و
            تاکنون افتخار طراحی چندین وبسایت داینامیک و استاتیک را داشته ام
          </ResponsiveText>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <MaterialCommunityIcons
            name="bullseye"
            color="#fff"
            size={35}
            color="#9774fa"
          />
          <ResponsiveText style={styles.cardTitle} fontSize={2.5}>
            تدریس
          </ResponsiveText>
        </View>
        <View style={styles.cardBody}>
          <ResponsiveText
            style={styles.cardText}
            fontSize={1.7}
            color="#d2d2d4"
          >
            بیش از چند سال است که افتخار تدریس به بیش از 200 دانشجو در کلاس های
            حضوری و بیش از 10000 دانشجو در کلاس های آنلاین را داشته ام
          </ResponsiveText>
        </View>
      </View>
    </View>
  );
};

export default Service;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    marginTop: 35,
    paddingHorizontal: 20,
  },
  title: {
    textAlign: "center",
    marginTop: 15,
    marginBottom: 40,
  },
  card: {
    marginBottom: 20,
    shadowColor: "#000",
    backgroundColor: "#202026",
    padding: 20,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardTitle: {
    marginLeft: 8,
  },
  cardBody: {
    marginTop: 15,
  },
  cardText: {
    textAlign: "justify",
  },
});
